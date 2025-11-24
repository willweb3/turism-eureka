import * as sharetribe from 'sharetribe-flex-integration-sdk';

// Validar env vars
const requiredEnvVars = [
  'SHARETRIBE_CLIENT_ID',
  'SHARETRIBE_CLIENT_SECRET',
] as const;

// Lazy initialization - só cria o SDK quando for usado
let _integrationSdk: ReturnType<typeof sharetribe.createInstance> | null = null;

export function getIntegrationSdk() {
  if (_integrationSdk) {
    return _integrationSdk;
  }

  // Verificar variáveis de ambiente
  const clientId = process.env.SHARETRIBE_CLIENT_ID;
  const clientSecret = process.env.SHARETRIBE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        console.warn(`Missing environment variable: ${envVar}. Sharetribe features may not work.`);
      }
    }
    return null;
  }

  // Criar instância do SDK
  _integrationSdk = sharetribe.createInstance({
    clientId,
    clientSecret,

    // Base URL (produção vs desenvolvimento)
    baseUrl: process.env.NODE_ENV === 'production'
      ? 'https://flex-integ-api.sharetribe.com'
      : 'https://flex-integ-api.sharetribe.com',

    // Timeout (30 segundos)
    timeout: 30000,

    // Logs detalhados em desenvolvimento
    verbose: process.env.NODE_ENV === 'development',
  });

  return _integrationSdk;
}

// Manter compatibilidade - mas agora pode ser null
export const integrationSdk = null as any; // Deprecated - use getIntegrationSdk()

// Helper para criar UUID do Sharetribe
export const UUID = sharetribe.types.UUID;

// Helper para criar Money
export const Money = sharetribe.types.Money;

export type SharetribeUUID = ReturnType<typeof UUID>;
