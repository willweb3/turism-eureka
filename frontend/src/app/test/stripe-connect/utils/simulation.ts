import { CommissionBreakdown, StripeSimulationResult, Host } from '../types';

/**
 * Simulate Stripe Connect payment with triple commission system
 * Platform: 10% | Provider: 85% | Host: 5%
 */
export function simulateStripeConnect(
  amount: number,
  providerAccountId: string,
  host?: Host | null
): StripeSimulationResult {
  // Calculate commission breakdown
  const platformPercentage = 10;
  const providerPercentage = 85;
  const hostPercentage = host ? 5 : 0;

  const platformFee = Math.round((amount * platformPercentage) / 100);
  const providerAmount = Math.round((amount * providerPercentage) / 100);
  const hostAmount = host ? Math.round((amount * hostPercentage) / 100) : 0;

  // Generate simulated Stripe IDs
  const timestamp = Date.now();
  const paymentIntentId = `pi_demo_${timestamp}`;
  const providerTransferId = `tr_provider_${timestamp}`;
  const hostTransferId = host ? `tr_host_${timestamp}` : null;

  const breakdown: CommissionBreakdown = {
    total: amount,
    platformFee,
    providerAmount,
    hostAmount,
    platformPercentage,
    providerPercentage,
    hostPercentage,
  };

  return {
    success: true,
    paymentIntentId,
    breakdown,
    transfers: {
      provider: providerTransferId,
      host: hostTransferId,
    },
    timestamp: new Date().toISOString(),
  };
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

/**
 * Calculate percentage of total
 */
export function calculatePercentage(amount: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((amount / total) * 100);
}
