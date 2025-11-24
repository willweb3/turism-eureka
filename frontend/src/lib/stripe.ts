import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined in environment variables');
}

// Initialize Stripe SDK
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  typescript: true,
});

/**
 * Commission percentages for the platform
 */
export const COMMISSION_RATES = {
  PLATFORM: 10, // 10%
  PROVIDER: 85, // 85%
  HOST: 5,      // 5%
} as const;

/**
 * Calculate commission breakdown
 */
export function calculateCommissions(totalAmount: number, hasHost: boolean = false) {
  const platformFee = Math.round((totalAmount * COMMISSION_RATES.PLATFORM) / 100);
  const providerAmount = Math.round((totalAmount * COMMISSION_RATES.PROVIDER) / 100);
  const hostAmount = hasHost ? Math.round((totalAmount * COMMISSION_RATES.HOST) / 100) : 0;

  return {
    total: totalAmount,
    platformFee,
    providerAmount,
    hostAmount,
    platformPercentage: COMMISSION_RATES.PLATFORM,
    providerPercentage: COMMISSION_RATES.PROVIDER,
    hostPercentage: hasHost ? COMMISSION_RATES.HOST : 0,
  };
}

/**
 * Convert currency amount to cents (Stripe expects amounts in smallest currency unit)
 */
export function toCents(amount: number): number {
  return Math.round(amount * 100);
}

/**
 * Convert cents to currency amount
 */
export function fromCents(cents: number): number {
  return cents / 100;
}
