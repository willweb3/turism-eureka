-- Create commissions table
CREATE TABLE IF NOT EXISTS public.commissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_id UUID UNIQUE NOT NULL,
  host_id UUID,
  provider_id UUID,
  platform_amount_cents INTEGER NOT NULL,
  host_amount_cents INTEGER DEFAULT 0,
  provider_amount_cents INTEGER NOT NULL,
  status TEXT DEFAULT 'pending',
  paid_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_commissions_host ON public.commissions(host_id);
CREATE INDEX IF NOT EXISTS idx_commissions_provider ON public.commissions(provider_id);
CREATE INDEX IF NOT EXISTS idx_commissions_transaction ON public.commissions(transaction_id);

-- Grant permissions
GRANT ALL ON public.commissions TO postgres;
GRANT ALL ON public.commissions TO authenticated;
GRANT ALL ON public.commissions TO service_role;
