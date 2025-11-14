// src/app/api/sharetribe/transactions/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  getSharetribeSDK,
  createUUID,
  convertToMoney,
  formatTransaction,
  handleSharetribeError,
} from '@/lib/sharetribe';

/**
 * GET /api/sharetribe/transactions
 * Query transactions from Sharetribe
 * Query params:
 * - perPage: number (default: 50)
 * - only: 'sale' | 'order' (perspective: provider or customer)
 */
export async function GET(request: NextRequest) {
  try {
    const sdk = getSharetribeSDK();
    const { searchParams } = new URL(request.url);

    const perPage = parseInt(searchParams.get('perPage') || '50');
    const only = searchParams.get('only') || 'sale'; // 'sale' or 'order'

    const response = await sdk.transactions.query({
      only,
      lastTransitions: [
        'transition/accept',
        'transition/complete',
        'transition/request-payment',
      ],
      include: ['listing', 'customer', 'provider'],
      perPage,
    });

    const transactions = response.data.data.map(formatTransaction);

    return NextResponse.json({
      success: true,
      data: transactions,
      meta: {
        totalItems: response.data.meta.totalItems,
        totalPages: response.data.meta.totalPages,
        page: response.data.meta.page,
        perPage: response.data.meta.perPage,
      },
    });
  } catch (error: any) {
    console.error('Error fetching transactions from Sharetribe:', error);
    return NextResponse.json(handleSharetribeError(error), { status: 500 });
  }
}

/**
 * POST /api/sharetribe/transactions
 * Create a new booking/transaction in Sharetribe
 * Body:
 * - listingId: string (UUID)
 * - bookingStart: string (ISO date)
 * - bookingEnd: string (ISO date)
 * - seats: number
 * - promoCode?: string
 * - qrCode?: string
 */
export async function POST(request: NextRequest) {
  try {
    const sdk = getSharetribeSDK();
    const body = await request.json();

    const { listingId, bookingStart, bookingEnd, seats, promoCode, qrCode } =
      body;

    // Validate required fields
    if (!listingId) {
      return NextResponse.json(
        { success: false, error: 'listingId is required' },
        { status: 400 }
      );
    }

    // Initiate transaction
    const response = await sdk.transactions.initiate({
      processAlias: 'default-booking/release-1', // Your process alias
      transition: 'transition/request-payment',
      params: {
        listingId: createUUID(listingId),
        protectedData: {
          bookingStart,
          bookingEnd,
          seats,
          promoCode: promoCode || null,
          qrCode: qrCode || null,
        },
      },
    });

    const transaction = formatTransaction(response.data.data);

    return NextResponse.json({
      success: true,
      data: transaction,
    });
  } catch (error: any) {
    console.error('Error creating transaction in Sharetribe:', error);
    return NextResponse.json(handleSharetribeError(error), { status: 500 });
  }
}
