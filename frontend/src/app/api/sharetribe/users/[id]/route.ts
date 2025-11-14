// src/app/api/sharetribe/users/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  getSharetribeSDK,
  createUUID,
  formatUser,
  handleSharetribeError,
} from '@/lib/sharetribe';

/**
 * GET /api/sharetribe/users/[id]
 * Fetch a single user by ID from Sharetribe
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const sdk = getSharetribeSDK();
    const userId = params.id;

    const response = await sdk.users.show({
      id: createUUID(userId),
      include: ['profileImage'],
    });

    const user = formatUser(response.data.data);

    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    console.error(`Error fetching user ${params.id} from Sharetribe:`, error);
    return NextResponse.json(handleSharetribeError(error), { status: 404 });
  }
}
