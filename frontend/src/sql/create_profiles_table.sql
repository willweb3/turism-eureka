-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  sharetribe_user_id TEXT UNIQUE,

  -- Basic Info
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone_number TEXT,
  avatar_url TEXT,
  bio TEXT,

  -- User Type & Role
  user_type TEXT NOT NULL CHECK (user_type IN ('tourist', 'provider', 'host')),
  is_verified BOOLEAN DEFAULT FALSE,
  verification_date TIMESTAMPTZ,

  -- Location
  country TEXT,
  city TEXT,
  postal_code TEXT,

  -- Host Specific
  referral_code TEXT UNIQUE,
  company_name TEXT,
  tax_id TEXT,

  -- Provider Specific
  business_license TEXT,
  insurance_policy TEXT,

  -- Settings
  preferred_language TEXT DEFAULT 'pt',
  notification_preferences JSONB DEFAULT '{"email": true, "sms": false}'::jsonb,

  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  last_login_at TIMESTAMPTZ,

  CONSTRAINT profiles_user_id_key UNIQUE (user_id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_profiles_user_type ON profiles(user_type);
CREATE INDEX IF NOT EXISTS idx_profiles_referral_code ON profiles(referral_code);
CREATE INDEX IF NOT EXISTS idx_profiles_sharetribe_user_id ON profiles(sharetribe_user_id);

-- RLS Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id);

-- Trigger para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create user_sync_log table
CREATE TABLE IF NOT EXISTS public.user_sync_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  sharetribe_user_id TEXT,

  sync_type TEXT NOT NULL CHECK (sync_type IN ('create', 'update', 'delete')),
  sync_status TEXT NOT NULL CHECK (sync_status IN ('pending', 'success', 'failed')),

  request_payload JSONB,
  response_payload JSONB,
  error_message TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_user_sync_log_status ON user_sync_log(sync_status);
CREATE INDEX IF NOT EXISTS idx_user_sync_log_created_at ON user_sync_log(created_at DESC);
