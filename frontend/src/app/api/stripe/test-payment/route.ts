import { NextRequest, NextResponse } from 'next/server';
import { stripe, calculateCommissions, toCents } from '@/lib/stripe';

interface TestPaymentRequest {
  amount: number; // Amount in decimal format from formatListing (e.g., 10.00 for €10)
  currency: string;
  listingId: string;
  listingTitle: string;
  providerAccountId: string;
  hostAccountId?: string;
}

/**
 * TEST API ROUTE
 *
 * This route creates a REAL Payment Intent on Stripe but doesn't attempt transfers
 * because the connected account IDs are mock/fictitious.
 *
 * Purpose:
 * - Demonstrate real Stripe integration
 * - Show Payment Intent in Stripe Dashboard
 * - Calculate real commission breakdown
 * - Test without needing onboarded connected accounts
 *
 * For production: Use /api/stripe/create-payment + /api/stripe/process-transfers
 */
export async function POST(request: NextRequest) {
  try {
    const body: TestPaymentRequest = await request.json();

    const {
      amount,
      currency = 'eur',
      listingId,
      listingTitle,
      providerAccountId,
      hostAccountId,
    } = body;

    // DEBUG: Log the received amount
    console.log('🔍 DEBUG - Received payment request:', {
      amount,
      type: typeof amount,
      listingTitle,
    });

    // Validate
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Stripe minimum amount for EUR is 50 cents (€0.50)
    // Amount is in decimal format, so check against 0.50
    if (amount < 0.50) {
      return NextResponse.json(
        {
          success: false,
          error: `O valor é muito baixo. O Stripe exige mínimo de €0.50. Este produto custa apenas €${amount.toFixed(2)}.`
        },
        { status: 400 }
      );
    }

    if (!listingId || !listingTitle) {
      return NextResponse.json(
        { success: false, error: 'Missing listing information' },
        { status: 400 }
      );
    }

    // Amount comes in decimal format (e.g., 10.00), convert to cents for Stripe
    const amountInCents = toCents(amount);

    // DEBUG: Log conversion
    console.log('🔍 DEBUG - After conversion:', {
      originalAmount: amount,
      amountInCents,
      calculation: `${amount} * 100 = ${amountInCents}`,
    });

    // Calculate commissions
    const hasHost = !!hostAccountId;
    const commissions = calculateCommissions(amountInCents, hasHost);

    // Create REAL Payment Intent on Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency.toLowerCase(),
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        source: 'azoreon_test_page',
        listingId,
        listingTitle,
        providerAccountId,
        hostAccountId: hostAccountId || 'none',
        platformFee: commissions.platformFee.toString(),
        platformPercentage: commissions.platformPercentage.toString(),
        providerAmount: commissions.providerAmount.toString(),
        providerPercentage: commissions.providerPercentage.toString(),
        hostAmount: commissions.hostAmount.toString(),
        hostPercentage: commissions.hostPercentage.toString(),
      },
      description: `AZOREON Test - ${listingTitle}`,
    });

    // Generate mock transfer IDs (since we can't actually transfer to mock accounts)
    const timestamp = Date.now();
    const mockTransfers = {
      provider: `tr_mock_provider_${timestamp}`,
      host: hasHost ? `tr_mock_host_${timestamp}` : null,
    };

    return NextResponse.json({
      success: true,
      mode: 'test',
      message: 'Payment Intent created on Stripe. Check your Stripe Dashboard!',
      data: {
        // Real Stripe data
        paymentIntentId: paymentIntent.id,
        clientSecret: paymentIntent.client_secret,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        status: paymentIntent.status,

        // Commission breakdown
        breakdown: {
          total: commissions.total,
          platformFee: commissions.platformFee,
          providerAmount: commissions.providerAmount,
          hostAmount: commissions.hostAmount,
          platformPercentage: commissions.platformPercentage,
          providerPercentage: commissions.providerPercentage,
          hostPercentage: commissions.hostPercentage,
        },

        // Mock transfers (would be real in production after onboarding)
        transfers: mockTransfers,

        // Metadata
        metadata: {
          listingId,
          listingTitle,
          providerAccountId,
          hostAccountId,
        },

        timestamp: new Date().toISOString(),

        // Dashboard link
        dashboardUrl: `https://dashboard.stripe.com/test/payments/${paymentIntent.id}`,
      },
    });
  } catch (error: any) {
    console.error('Stripe Test Payment Error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to create test payment',
        details: error.raw?.message,
      },
      { status: 500 }
    );
  }
}
