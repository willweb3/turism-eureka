// src/lib/sharetribe.ts
const sharetribe = require('sharetribe-flex-integration-sdk');
const sharetribeFlexSdk = require('sharetribe-flex-sdk');

// Singleton instance for Integration API (server-side)
let sdkInstance: any = null;

/**
 * Get Sharetribe Integration SDK instance (server-side only)
 * Used for admin operations: querying listings, users, transactions
 */
export function getSharetribeSDK() {
  if (!sdkInstance) {
    const clientId = process.env.SHARETRIBE_CLIENT_ID;
    const clientSecret = process.env.SHARETRIBE_CLIENT_SECRET;
    const baseUrl = process.env.SHARETRIBE_API_BASE_URL;

    if (!clientId || !clientSecret) {
      throw new Error(
        'Missing Sharetribe credentials. Please check SHARETRIBE_CLIENT_ID and SHARETRIBE_CLIENT_SECRET in .env.local'
      );
    }

    sdkInstance = sharetribe.createInstance({
      clientId,
      clientSecret,
      baseUrl,
    });
  }
  return sdkInstance;
}

/**
 * Convert Sharetribe Money object (cents) to decimal format
 * @example convertMoney({ amount: 5000, currency: 'EUR' }) => { amount: 50.00, currency: 'EUR' }
 */
export function convertMoney(moneyObject: {
  amount: number;
  currency: string;
}) {
  return {
    amount: moneyObject.amount / 100,
    currency: moneyObject.currency,
  };
}

/**
 * Convert decimal amount to Sharetribe Money format (cents)
 * @example convertToMoney(50.00, 'EUR') => { amount: 5000, currency: 'EUR' }
 */
export function convertToMoney(amount: number, currency: string = 'EUR') {
  return {
    amount: Math.round(amount * 100),
    currency,
  };
}

/**
 * Create UUID object from string
 * Required for Sharetribe API calls
 */
export function createUUID(uuidString: string) {
  return new sharetribeFlexSdk.types.UUID(uuidString);
}

/**
 * Format Sharetribe listing for frontend consumption
 */
export function formatListing(listing: any) {
  return {
    id: listing.id.uuid,
    title: listing.attributes.title,
    description: listing.attributes.description,
    price: listing.attributes.price
      ? convertMoney(listing.attributes.price)
      : null,

    // Images
    images:
      listing.relationships?.images?.data?.map((img: any) => ({
        id: img.id.uuid,
        url:
          img.attributes?.variants?.['landscape-crop']?.url ||
          img.attributes?.variants?.default?.url ||
          null,
      })) || [],

    // Public data (custom fields)
    category: listing.attributes.publicData?.category,
    island: listing.attributes.publicData?.island,
    duration: listing.attributes.publicData?.duration,
    maxSeats: listing.attributes.publicData?.maxSeats,
    type: listing.attributes.publicData?.type,

    // Author info
    author: listing.relationships?.author?.data
      ? {
          id: listing.relationships.author.data.id.uuid,
          name:
            listing.relationships.author.data.attributes?.profile?.displayName,
        }
      : null,

    state: listing.attributes.state,
    createdAt: listing.attributes.createdAt,
    updatedAt: listing.attributes.updatedAt,
  };
}

/**
 * Format Sharetribe user for frontend consumption
 */
export function formatUser(user: any) {
  return {
    id: user.id.uuid,
    email: user.attributes.email,
    firstName: user.attributes.profile?.firstName || '',
    lastName: user.attributes.profile?.lastName || '',
    displayName: user.attributes.profile?.displayName || '',
    bio: user.attributes.profile?.bio || '',
    publicData: user.attributes.publicData || {},
    profileImage: user.relationships?.profileImage?.data?.attributes?.variants
      ?.default?.url,
    emailVerified: user.attributes.emailVerified,
    createdAt: user.attributes.createdAt,
  };
}

/**
 * Format Sharetribe transaction for frontend consumption
 */
export function formatTransaction(tx: any) {
  return {
    id: tx.id.uuid,
    listingId: tx.relationships?.listing?.data?.id?.uuid,
    listingTitle: tx.relationships?.listing?.data?.attributes?.title,
    customerId: tx.relationships?.customer?.data?.id?.uuid,
    customerName:
      tx.relationships?.customer?.data?.attributes?.profile?.displayName,
    providerId: tx.relationships?.provider?.data?.id?.uuid,
    providerName:
      tx.relationships?.provider?.data?.attributes?.profile?.displayName,

    // Pricing
    totalPrice: tx.attributes.payinTotal
      ? convertMoney(tx.attributes.payinTotal)
      : null,
    payoutTotal: tx.attributes.payoutTotal
      ? convertMoney(tx.attributes.payoutTotal)
      : null,

    // Status
    status: tx.attributes.lastTransition,

    // Booking details (from protectedData)
    bookingStart: tx.attributes.protectedData?.bookingStart,
    bookingEnd: tx.attributes.protectedData?.bookingEnd,
    seats: tx.attributes.protectedData?.seats,
    promoCode: tx.attributes.protectedData?.promoCode,
    qrCode: tx.attributes.protectedData?.qrCode,

    createdAt: tx.attributes.createdAt,
    updatedAt: tx.attributes.lastTransitionedAt,
  };
}

/**
 * Error handler for Sharetribe API calls
 */
export function handleSharetribeError(error: any) {
  console.error('Sharetribe API Error:', error);

  if (error.status === 401) {
    return {
      success: false,
      error: 'Unauthorized. Please check your Sharetribe credentials.',
    };
  }

  if (error.status === 404) {
    return {
      success: false,
      error: 'Resource not found.',
    };
  }

  if (error.status === 403) {
    return {
      success: false,
      error: 'Forbidden. You do not have permission to access this resource.',
    };
  }

  return {
    success: false,
    error: error.message || 'An unknown error occurred.',
  };
}
