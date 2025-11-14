import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

/**
 * Get Connected Account Status
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const accountId = searchParams.get('accountId');

    if (!accountId) {
      return NextResponse.json(
        { success: false, error: 'Account ID is required' },
        { status: 400 }
      );
    }

    const account = await stripe.accounts.retrieve(accountId);

    return NextResponse.json({
      success: true,
      data: {
        accountId: account.id,
        email: account.email,
        detailsSubmitted: account.details_submitted,
        chargesEnabled: account.charges_enabled,
        payoutsEnabled: account.payouts_enabled,
        requirements: {
          currentlyDue: account.requirements?.currently_due || [],
          errors: account.requirements?.errors || [],
        },
      },
    });
  } catch (error: any) {
    console.error('Account Status Error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to retrieve account status',
      },
      { status: 500 }
    );
  }
}
