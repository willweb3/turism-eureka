import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

interface ProcessTransfersRequest {
  paymentIntentId: string;
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json(
        { success: false, error: 'Stripe not configured' },
        { status: 503 }
      );
    }

    const body: ProcessTransfersRequest = await request.json();
    const { paymentIntentId } = body;

    if (!paymentIntentId) {
      return NextResponse.json(
        { success: false, error: 'Missing paymentIntentId' },
        { status: 400 }
      );
    }

    // Retrieve the Payment Intent to get metadata
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== 'succeeded') {
      return NextResponse.json(
        {
          success: false,
          error: `Payment Intent status is ${paymentIntent.status}, must be 'succeeded' to process transfers`
        },
        { status: 400 }
      );
    }

    const {
      providerAccountId,
      hostAccountId,
      providerAmount,
      hostAmount,
      listingTitle,
    } = paymentIntent.metadata;

    if (!providerAccountId || !providerAmount) {
      return NextResponse.json(
        { success: false, error: 'Missing provider information in payment metadata' },
        { status: 400 }
      );
    }

    const transfers: any[] = [];

    // Create transfer to Provider (85%)
    try {
      const providerTransfer = await stripe.transfers.create({
        amount: parseInt(providerAmount),
        currency: paymentIntent.currency,
        destination: providerAccountId,
        transfer_group: paymentIntentId,
        description: `Provider payment for: ${listingTitle}`,
        metadata: {
          paymentIntentId,
          type: 'provider',
          listingTitle,
        },
      });

      transfers.push({
        type: 'provider',
        transferId: providerTransfer.id,
        amount: providerTransfer.amount,
        destination: providerAccountId,
      });
    } catch (error: any) {
      console.error('Provider transfer failed:', error);
      return NextResponse.json(
        {
          success: false,
          error: `Failed to create provider transfer: ${error.message}`,
        },
        { status: 500 }
      );
    }

    // Create transfer to Host (5%) if applicable
    if (hostAccountId && hostAccountId !== 'none' && hostAmount && parseInt(hostAmount) > 0) {
      try {
        const hostTransfer = await stripe.transfers.create({
          amount: parseInt(hostAmount),
          currency: paymentIntent.currency,
          destination: hostAccountId,
          transfer_group: paymentIntentId,
          description: `Host referral commission for: ${listingTitle}`,
          metadata: {
            paymentIntentId,
            type: 'host',
            listingTitle,
          },
        });

        transfers.push({
          type: 'host',
          transferId: hostTransfer.id,
          amount: hostTransfer.amount,
          destination: hostAccountId,
        });
      } catch (error: any) {
        console.error('Host transfer failed:', error);
        // Don't fail the entire request if host transfer fails
        // Platform and provider still get their money
        transfers.push({
          type: 'host',
          error: error.message,
          destination: hostAccountId,
        });
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        paymentIntentId,
        transfers,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    console.error('Process Transfers Error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to process transfers',
      },
      { status: 500 }
    );
  }
}
