// src/app/api/cron/event-poller/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { pollSharetribeEvents } from '@/services/eventPoller';

/**
 * GET /api/cron/event-poller
 * Cron job endpoint to poll Sharetribe events
 *
 * Configure in vercel.json:
 * {
 *   "crons": [{
 *     "path": "/api/cron/event-poller",
 *     "schedule": "* /10 * * * *"
 *   }]
 * }
 */
export async function GET(request: NextRequest) {
  try {
    // Verify cron secret (optional but recommended)
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Poll events
    await pollSharetribeEvents();

    return NextResponse.json({
      success: true,
      message: 'Event polling completed',
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('[Cron] Event poller failed:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
