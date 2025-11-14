// src/app/api/sharetribe/transactions/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  getSharetribeSDK,
  createUUID,
  formatTransaction,
  handleSharetribeError,
} from '@/lib/sharetribe';

/**
 * GET /api/sharetribe/transactions/[id]
 * Fetch a single transaction by ID from Sharetribe
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const sdk = getSharetribeSDK();
    const transactionId = params.id;

    const response = await sdk.transactions.show({
      id: createUUID(transactionId),
      include: ['listing', 'customer', 'provider', 'reviews'],
    });

    const transaction = formatTransaction(response.data.data);

    return NextResponse.json({
      success: true,
      data: transaction,
    });
  } catch (error: any) {
    console.error(
      `Error fetching transaction ${params.id} from Sharetribe:`,
      error
    );
    return NextResponse.json(handleSharetribeError(error), { status: 404 });
  }
}

/**
 * PATCH /api/sharetribe/transactions/[id]
 * Update transaction state (accept, decline, complete, etc.)
 * Body:
 * - transition: string (e.g., 'transition/accept', 'transition/decline')
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const sdk = getSharetribeSDK();
    const transactionId = params.id;
    const body = await request.json();

    const { transition } = body;

    if (!transition) {
      return NextResponse.json(
        { success: false, error: 'transition is required' },
        { status: 400 }
      );
    }

    const response = await sdk.transactions.transition({
      id: createUUID(transactionId),
      transition,
      params: {},
    });

    const transaction = formatTransaction(response.data.data);

    return NextResponse.json({
      success: true,
      data: transaction,
    });
  } catch (error: any) {
    console.error(
      `Error updating transaction ${params.id} in Sharetribe:`,
      error
    );
    return NextResponse.json(handleSharetribeError(error), { status: 500 });
  }
}
