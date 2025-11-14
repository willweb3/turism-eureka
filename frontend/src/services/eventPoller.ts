// src/services/eventPoller.ts
import { getSharetribeSDK } from '@/lib/sharetribe';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Track last poll time
let lastPollTime = new Date();

/**
 * Poll Sharetribe events and sync with local DB
 * This syncs:
 * - Transaction events → Update promo code usage
 * - Transaction events → Update QR code conversions
 * - Transaction events → Create commission records
 */
export async function pollSharetribeEvents() {
  try {
    const sdk = getSharetribeSDK();

    // Query events since last poll
    const events = await sdk.events.query({
      createdAtStart: lastPollTime,
      eventTypes: ['transaction/transitioned'],
    });

    console.log(
      `[Event Poller] Found ${events.data.data.length} events since ${lastPollTime}`
    );

    for (const event of events.data.data) {
      await processEvent(event);
    }

    // Update last poll time
    lastPollTime = new Date();
  } catch (error) {
    console.error('[Event Poller] Error polling events:', error);
  }
}

/**
 * Process a single Sharetribe event
 */
async function processEvent(event: any) {
  const eventType = event.attributes.eventType;

  if (eventType === 'transaction/transitioned') {
    await processTransactionEvent(event);
  }
}

/**
 * Process transaction events
 * - Update promo code usage
 * - Update QR code conversions
 * - Create commission records
 */
async function processTransactionEvent(event: any) {
  try {
    const tx = event.attributes.resource;
    const transactionId = tx.id.uuid;
    const lastTransition = tx.attributes.lastTransition;

    // Only process completed transactions
    if (lastTransition !== 'transition/complete') {
      return;
    }

    const protectedData = tx.attributes.protectedData || {};
    const promoCode = protectedData.promoCode;
    const qrCode = protectedData.qrCode;
    const totalAmount = tx.attributes.payinTotal?.amount || 0; // in cents

    console.log(
      `[Event Poller] Processing transaction ${transactionId} (${lastTransition})`
    );

    // 1. Update promo code usage
    if (promoCode) {
      await updatePromoCodeUsage(promoCode);
    }

    // 2. Update QR code conversion
    if (qrCode) {
      await updateQRCodeConversion(qrCode, totalAmount);
    }

    // 3. Create commission record
    await createCommissionRecord(tx, promoCode);
  } catch (error) {
    console.error('[Event Poller] Error processing transaction event:', error);
  }
}

/**
 * Update promo code usage count
 */
async function updatePromoCodeUsage(code: string) {
  try {
    await prisma.promoCode.update({
      where: { code },
      data: {
        usage_count: {
          increment: 1,
        },
      },
    });
    console.log(`[Event Poller] Updated promo code usage: ${code}`);
  } catch (error) {
    console.error(
      `[Event Poller] Error updating promo code ${code}:`,
      error
    );
  }
}

/**
 * Update QR code conversion and revenue
 */
async function updateQRCodeConversion(code: string, amountCents: number) {
  try {
    // Find QR code
    const qrCode = await prisma.qRCode.findUnique({
      where: { code },
    });

    if (!qrCode) {
      console.warn(`[Event Poller] QR code not found: ${code}`);
      return;
    }

    // Calculate host commission (5% of total)
    const hostCommission = Math.round(amountCents * 0.05);

    await prisma.qRCode.update({
      where: { code },
      data: {
        conversionCount: {
          increment: 1,
        },
      },
    });

    console.log(
      `[Event Poller] Updated QR code conversion: ${code} (+€${hostCommission / 100})`
    );
  } catch (error) {
    console.error(`[Event Poller] Error updating QR code ${code}:`, error);
  }
}

/**
 * Create commission record in local DB
 * Platform: 10%, Host: 5% (if promo code used), Provider: 85-90%
 */
async function createCommissionRecord(tx: any, promoCode?: string) {
  try {
    const transactionId = tx.id.uuid;
    const totalAmount = tx.attributes.payinTotal?.amount || 0; // in cents
    const providerId = tx.relationships?.provider?.data?.id?.uuid;
    const customerId = tx.relationships?.customer?.data?.id?.uuid;

    // Calculate commissions
    const platformCommission = Math.round(totalAmount * 0.1); // 10%
    const hostCommission = promoCode ? Math.round(totalAmount * 0.05) : 0; // 5% if promo code
    const providerAmount = totalAmount - platformCommission - hostCommission;

    // Get host ID from promo code
    let hostId = null;
    if (promoCode) {
      const promo = await prisma.promoCode.findUnique({
        where: { code: promoCode },
        select: { hostId: true },
      });
      hostId = promo?.hostId || null;
    }

    // Create commission record
    await prisma.$executeRaw`
      INSERT INTO commissions (
        id,
        transaction_id,
        host_id,
        provider_id,
        platform_amount_cents,
        host_amount_cents,
        provider_amount_cents,
        status,
        created_at
      ) VALUES (
        gen_random_uuid(),
        ${transactionId},
        ${hostId},
        ${providerId},
        ${platformCommission},
        ${hostCommission},
        ${providerAmount},
        'pending',
        NOW()
      )
      ON CONFLICT (transaction_id) DO NOTHING
    `;

    console.log(
      `[Event Poller] Created commission record for transaction ${transactionId}`
    );
  } catch (error) {
    console.error('[Event Poller] Error creating commission record:', error);
  }
}

/**
 * Start the event poller (runs every 10 seconds)
 */
export function startEventPoller() {
  console.log('[Event Poller] Starting event poller...');

  // Run immediately
  pollSharetribeEvents();

  // Then every 10 seconds
  setInterval(pollSharetribeEvents, 10000);
}
