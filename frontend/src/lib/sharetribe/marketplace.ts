/**
 * Cliente Marketplace API (lado do cliente)
 * Permite criar e autenticar usuários diretamente no Sharetribe
 * SEM sair do site, SEM popup, tudo integrado!
 *
 * IMPORTANTE: Este SDK só funciona no navegador (client-side)
 */

let marketplaceSdkInstance: any = null;
let isInitialized = false;

/**
 * Inicializar SDK apenas no cliente (lazy initialization)
 */
function initializeSDK() {
  // Só inicializar no navegador
  if (typeof window === 'undefined') {
    return null;
  }

  // Se já foi inicializado, retornar instância existente
  if (isInitialized && marketplaceSdkInstance) {
    return marketplaceSdkInstance;
  }

  try {
    // Importar SDK dinamicamente
    const sharetribeSdk = require('sharetribe-flex-sdk');

    marketplaceSdkInstance = sharetribeSdk.createInstance({
      clientId: process.env.NEXT_PUBLIC_SHARETRIBE_CLIENT_ID || '',
      baseUrl: 'https://flex-api.sharetribe.com',
      timeout: 30000,
    });

    isInitialized = true;
    return marketplaceSdkInstance;
  } catch (error) {
    console.error('Erro ao inicializar Sharetribe SDK:', error);
    return null;
  }
}

/**
 * Getter para SDK (inicializa sob demanda)
 */
export function getMarketplaceSDK() {
  return initializeSDK();
}

/**
 * Export para compatibilidade com código existente
 */
export const marketplaceSdk = new Proxy({} as any, {
  get(target, prop) {
    const sdk = getMarketplaceSDK();
    if (!sdk) {
      throw new Error('Marketplace SDK not available - this should only run in browser');
    }
    return sdk[prop];
  }
});

// Helpers exportados (só funcionam no cliente)
export const getSharetribeTypes = () => {
  if (typeof window === 'undefined') {
    throw new Error('Sharetribe SDK types only available in browser');
  }
  const sdk = require('sharetribe-flex-sdk');
  return {
    UUID: sdk.types.UUID,
    Money: sdk.types.Money,
    LatLng: sdk.types.LatLng,
  };
};
