import { NextRequest, NextResponse } from 'next/server';
import { stripe, calculateCommissions, toCents } from '@/lib/stripe';

interface CreatePaymentRequest {
  amount: number; // Amount in decimal format from formatListing (e.g., 10.00 for €10)
  currency: string;
  listingId: string;
  listingTitle: string;
  providerAccountId: string; // Stripe Connect Account ID for provider
  hostAccountId?: string; // Optional: Stripe Connect Account ID for host
  metadata?: Record<string, string>;
}

export async function POST(request: NextRequest) {
  try {
    const body: CreatePaymentRequest = await request.json();

    const {
      amount,
      currency = 'eur',
      listingId,
      listingTitle,
      providerAccountId,
      hostAccountId,
      metadata = {},
    } = body;

    // Validate required fields
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid amount' },
        { status: 400 }
      );
    }

    if (!listingId || !listingTitle) {
      return NextResponse.json(
        { success: false, error: 'Missing listing information' },
        { status: 400 }
      );
    }

    if (!providerAccountId) {
      return NextResponse.json(
        { success: false, error: 'Missing provider account ID' },
        { status: 400 }
      );
    }

    // Amount comes in decimal format (e.g., 10.00), convert to cents for Stripe
    const amountInCents = toCents(amount);

    // Calculate commissions
    const hasHost = !!hostAccountId;
    const commissions = calculateCommissions(amountInCents, hasHost);

    // Create Payment Intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency.toLowerCase(),
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        listingId,
        listingTitle,
        providerAccountId,
        hostAccountId: hostAccountId || 'none',
        platformFee: commissions.platformFee.toString(),
        providerAmount: commissions.providerAmount.toString(),
        hostAmount: commissions.hostAmount.toString(),
        ...metadata,
      },
      description: `AZOREON - ${listingTitle}`,
    });

    // Note: In production, transfers should be created via webhook after payment succeeds
    // For now, we'll return the breakdown and create transfers manually
    // See: /api/stripe/process-transfers

    return NextResponse.json({
      success: true,
      data: {
        paymentIntentId: paymentIntent.id,
        clientSecret: paymentIntent.client_secret,
        amount: amountInCents,
        currency,
        breakdown: commissions,
        metadata: {
          listingId,
          listingTitle,
          providerAccountId,
          hostAccountId,
        },
      },
    });
  } catch (error: any) {
    console.error('Stripe Payment Intent Error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to create payment intent',
      },
      { status: 500 }
    );
  }
}
