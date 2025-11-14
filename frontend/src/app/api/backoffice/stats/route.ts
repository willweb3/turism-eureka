import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const [
      totalUsers,
      totalListings,
      totalTransactions,
      revenueData,
      hostCommissionsData,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.listing.count(),
      prisma.transaction.count(),
      prisma.transaction.aggregate({
        _sum: {
          totalAmount: true,
          platform_fee: true,
        },
        where: {
          status: 'paid',
        },
      }),
      prisma.transaction.aggregate({
        _sum: {
          host_commission: true,
        },
        where: {
          status: 'paid',
          host_id: { not: null },
        },
      }),
    ])

    return NextResponse.json({
      users: totalUsers,
      listings: totalListings,
      transactions: totalTransactions,
      revenue: revenueData._sum.totalAmount || 0,
      platformRevenue: revenueData._sum.platform_fee || 0,
      hostCommissionsPaid: hostCommissionsData._sum.host_commission || 0,
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}
