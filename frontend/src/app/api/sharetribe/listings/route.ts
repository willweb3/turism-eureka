// src/app/api/sharetribe/listings/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  getSharetribeSDK,
  formatListing,
  handleSharetribeError,
} from '@/lib/sharetribe';

/**
 * GET /api/sharetribe/listings
 * Fetch listings from Sharetribe
 * Query params:
 * - perPage: number (default: 20)
 * - page: number (default: 1)
 * - category: string (filter by category)
 * - island: string (filter by island)
 * - type: string (service, product, event)
 * - minPrice: number (filter by min price in cents)
 * - maxPrice: number (filter by max price in cents)
 */
export async function GET(request: NextRequest) {
  try {
    const sdk = getSharetribeSDK();
    const { searchParams } = new URL(request.url);

    // Parse query params
    const perPage = parseInt(searchParams.get('perPage') || '20');
    const page = parseInt(searchParams.get('page') || '1');
    const category = searchParams.get('category');
    const island = searchParams.get('island');
    const type = searchParams.get('type');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    // Build query
    const query: any = {
      perPage,
      page,
      include: ['author', 'images'],
      states: ['published'],
      'fields.image': ['variants.landscape-crop', 'variants.landscape-crop2x'],
    };

    // Add filters based on publicData
    if (category) {
      query['pub_category'] = category;
    }
    if (island) {
      query['pub_island'] = island;
    }
    if (type) {
      query['pub_type'] = type;
    }

    // Price filters (in cents)
    if (minPrice) {
      query.price = query.price || {};
      query.price.gte = parseInt(minPrice);
    }
    if (maxPrice) {
      query.price = query.price || {};
      query.price.lte = parseInt(maxPrice);
    }

    // Fetch from Sharetribe
    const response = await sdk.listings.query(query);

    // Transform for frontend
    const listings = response.data.data.map(formatListing);

    return NextResponse.json({
      success: true,
      data: listings,
      meta: {
        totalItems: response.data.meta.totalItems,
        totalPages: response.data.meta.totalPages,
        page: response.data.meta.page,
        perPage: response.data.meta.perPage,
      },
    });
  } catch (error: any) {
    console.error('Error fetching listings from Sharetribe:', error);
    return NextResponse.json(handleSharetribeError(error), { status: 500 });
  }
}
