import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

interface CreateConnectedAccountRequest {
  email: string;
  type: 'provider' | 'host';
  businessName?: string;
  country?: string;
}

/**
 * Create a Stripe Express Connected Account (Test Mode)
 *
 * This creates a real connected account in test mode that can:
 * - Receive transfers
 * - Complete onboarding
 * - Use test bank accounts
 */
export async function POST(request: NextRequest) {
  try {
    const body: CreateConnectedAccountRequest = await request.json();
    const { email, type, businessName, country = 'US' } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Create Express account for faster onboarding
    const account = await stripe.accounts.create({
      type: 'express',
      country,
      email,
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
      business_type: 'individual', // Simplified for testing
      business_profile: {
        name: businessName || `AZOREON ${type}`,
        product_description: type === 'provider'
          ? 'Tourism services provider'
          : 'Tourism host and referral partner',
      },
      metadata: {
        platform: 'azoreon',
        type,
        test_mode: 'true',
      },
    });

    // Create account link for onboarding
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: `${process.env.NEXT_PUBLIC_APP_URL}/test/stripe-connect/onboarding/refresh`,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/test/stripe-connect/onboarding/success`,
      type: 'account_onboarding',
    });

    return NextResponse.json({
      success: true,
      data: {
        accountId: account.id,
        email: account.email,
        type,
        onboardingUrl: accountLink.url,
        status: account.details_submitted ? 'complete' : 'pending',
      },
    });
  } catch (error: any) {
    console.error('Create Connected Account Error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to create connected account',
      },
      { status: 500 }
    );
  }
}
