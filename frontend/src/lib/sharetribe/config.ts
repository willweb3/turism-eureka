import * as sharetribe from 'sharetribe-flex-integration-sdk';

// Validar env vars
const requiredEnvVars = [
  'SHARETRIBE_CLIENT_ID',
  'SHARETRIBE_CLIENT_SECRET',
] as const;

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.warn(`Missing environment variable: ${envVar}. Sharetribe features may not work.`);
  }
}

// Criar instância do SDK
export const integrationSdk = sharetribe.createInstance({
  clientId: process.env.SHARETRIBE_CLIENT_ID || '',
  clientSecret: process.env.SHARETRIBE_CLIENT_SECRET || '',

  // Base URL (produção vs desenvolvimento)
  baseUrl: process.env.NODE_ENV === 'production'
    ? 'https://flex-integ-api.sharetribe.com'
    : 'https://flex-integ-api.sharetribe.com',

  // Timeout (30 segundos)
  timeout: 30000,

  // Logs detalhados em desenvolvimento
  verbose: process.env.NODE_ENV === 'development',
});

// Helper para criar UUID do Sharetribe
export const UUID = sharetribe.types.UUID;

// Helper para criar Money
export const Money = sharetribe.types.Money;

export type SharetribeUUID = ReturnType<typeof UUID>;
