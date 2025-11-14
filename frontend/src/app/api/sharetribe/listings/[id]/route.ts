// src/app/api/sharetribe/listings/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  getSharetribeSDK,
  createUUID,
  formatListing,
  handleSharetribeError,
} from '@/lib/sharetribe';

/**
 * GET /api/sharetribe/listings/[id]
 * Fetch a single listing by ID from Sharetribe
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const sdk = getSharetribeSDK();
    const listingId = params.id;

    const response = await sdk.listings.show({
      id: createUUID(listingId),
      include: ['author', 'images', 'currentStock'],
      'fields.image': ['variants.landscape-crop', 'variants.landscape-crop2x'],
    });

    const listing = formatListing(response.data.data);

    return NextResponse.json({
      success: true,
      data: listing,
    });
  } catch (error: any) {
    console.error(
      `Error fetching listing ${params.id} from Sharetribe:`,
      error
    );
    return NextResponse.json(handleSharetribeError(error), { status: 404 });
  }
}
