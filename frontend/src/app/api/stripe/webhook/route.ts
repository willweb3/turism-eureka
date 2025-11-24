import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import Stripe from 'stripe';

/**
 * Stripe Webhook Handler
 *
 * Processes Stripe events and triggers automatic transfers when payments succeed.
 *
 * Important: In production, you MUST verify the webhook signature.
 * For now, we'll handle events without signature verification for testing.
 */
export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json(
        { success: false, error: 'Stripe not configured' },
        { status: 503 }
      );
    }

    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    let event: Stripe.Event;

    // In production, verify webhook signature
    if (process.env.STRIPE_WEBHOOK_SECRET && signature) {
      try {
        event = stripe.webhooks.constructEvent(
          body,
          signature,
          process.env.STRIPE_WEBHOOK_SECRET
        );
      } catch (err: any) {
        console.error('Webhook signature verification failed:', err.message);
        return NextResponse.json(
          { success: false, error: `Webhook Error: ${err.message}` },
          { status: 400 }
        );
      }
    } else {
      // For testing without webhook secret
      event = JSON.parse(body);
    }

    console.log('Webhook received:', event.type);

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(stripe, event.data.object as Stripe.PaymentIntent);
        break;

      case 'payment_intent.payment_failed':
        console.log('Payment failed:', event.data.object);
        break;

      case 'account.updated':
        console.log('Account updated:', event.data.object);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ success: true, received: true });
  } catch (error: any) {
    console.error('Webhook Error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Webhook processing failed',
      },
      { status: 500 }
    );
  }
}

/**
 * Handle successful payment and create transfers
 */
async function handlePaymentIntentSucceeded(stripe: Stripe, paymentIntent: Stripe.PaymentIntent) {
  try {
    console.log('Payment succeeded:', paymentIntent.id);

    const {
      providerAccountId,
      hostAccountId,
      providerAmount,
      hostAmount,
      listingTitle,
    } = paymentIntent.metadata;

    if (!providerAccountId || !providerAmount) {
      console.error('Missing provider information in payment metadata');
      return;
    }

    // Check if transfers already exist (idempotency)
    const existingTransfers = await stripe.transfers.list({
      transfer_group: paymentIntent.id,
      limit: 10,
    });

    if (existingTransfers.data.length > 0) {
      console.log('Transfers already created for this payment');
      return;
    }

    // Create transfer to Provider (85%)
    try {
      const providerTransfer = await stripe.transfers.create({
        amount: parseInt(providerAmount),
        currency: paymentIntent.currency,
        destination: providerAccountId,
        transfer_group: paymentIntent.id,
        description: `Provider payment for: ${listingTitle}`,
        metadata: {
          paymentIntentId: paymentIntent.id,
          type: 'provider',
          listingTitle,
        },
      });

      console.log('Provider transfer created:', providerTransfer.id);
    } catch (error: any) {
      console.error('Provider transfer failed:', error.message);
      // Don't throw - log and continue to try host transfer
    }

    // Create transfer to Host (5%) if applicable
    if (hostAccountId && hostAccountId !== 'none' && hostAmount && parseInt(hostAmount) > 0) {
      try {
        const hostTransfer = await stripe.transfers.create({
          amount: parseInt(hostAmount),
          currency: paymentIntent.currency,
          destination: hostAccountId,
          transfer_group: paymentIntent.id,
          description: `Host referral commission for: ${listingTitle}`,
          metadata: {
            paymentIntentId: paymentIntent.id,
            type: 'host',
            listingTitle,
          },
        });

        console.log('Host transfer created:', hostTransfer.id);
      } catch (error: any) {
        console.error('Host transfer failed:', error.message);
        // Don't throw - host transfer is optional
      }
    }

    console.log('All transfers completed for payment:', paymentIntent.id);
  } catch (error: any) {
    console.error('Error handling payment intent succeeded:', error);
    throw error;
  }
}
