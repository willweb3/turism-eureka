// Types for Stripe Connect simulation

export interface SharetribeListing {
  id: string;
  title: string;
  description: string;
  price: {
    amount: number;
    currency: string;
  } | null;
  images: Array<{
    id: string;
    url: string | null;
  }>;
  category?: string;
  island?: string;
  author: {
    id: string;
    name: string;
  } | null;
  state: string;
}

export interface Host {
  id: string;
  name: string;
  accountId: string; // Stripe Connect Account ID (simulado)
  promoCode: string;
}

export interface CommissionBreakdown {
  total: number;
  platformFee: number;
  providerAmount: number;
  hostAmount: number;
  platformPercentage: number;
  providerPercentage: number;
  hostPercentage: number;
}

export interface StripeSimulationResult {
  success: boolean;
  paymentIntentId: string;
  breakdown: CommissionBreakdown;
  transfers: {
    provider: string;
    host: string | null;
  };
  timestamp: string;
  dashboardUrl?: string;
  mode?: string;
}

export interface CheckoutState {
  selectedListing: SharetribeListing | null;
  selectedHost: Host | null;
  promoCode: string;
  simulationResult: StripeSimulationResult | null;
}
