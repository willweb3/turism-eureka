// src/app/api/sharetribe/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  getSharetribeSDK,
  formatUser,
  handleSharetribeError,
} from '@/lib/sharetribe';

/**
 * GET /api/sharetribe/users
 * Query users from Sharetribe
 * Query params:
 * - perPage: number (default: 20)
 * - page: number (default: 1)
 * - userType: string (host, provider, tourist)
 */
export async function GET(request: NextRequest) {
  try {
    const sdk = getSharetribeSDK();
    const { searchParams } = new URL(request.url);

    const perPage = parseInt(searchParams.get('perPage') || '20');
    const page = parseInt(searchParams.get('page') || '1');
    const userType = searchParams.get('userType');

    const query: any = {
      perPage,
      page,
      include: ['profileImage'],
    };

    // Filter by user type (stored in publicData)
    if (userType) {
      query['pub_userType'] = userType;
    }

    const response = await sdk.users.query(query);

    const users = response.data.data.map(formatUser);

    return NextResponse.json({
      success: true,
      data: users,
      meta: {
        totalItems: response.data.meta.totalItems,
        totalPages: response.data.meta.totalPages,
        page: response.data.meta.page,
        perPage: response.data.meta.perPage,
      },
    });
  } catch (error: any) {
    console.error('Error fetching users from Sharetribe:', error);
    return NextResponse.json(handleSharetribeError(error), { status: 500 });
  }
}
