import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Get all transactions with host commissions
    const transactions = await prisma.transaction.findMany({
      where: {
        host_id: { not: null },
      },
      select: {
        id: true,
        host_commission: true,
        status: true,
        host_id: true,
        createdAt: true,
        profiles_transactions_host_idToprofiles: {
          select: {
            id: true,
            full_name: true,
          },
        },
      },
    })

    // Calculate commission stats
    const totalCommissions = transactions.reduce(
      (sum, t) => sum + t.host_commission,
      0
    )

    const paidCommissions = transactions
      .filter((t) => t.status === 'paid')
      .reduce((sum, t) => sum + t.host_commission, 0)

    const pendingCommissions = transactions
      .filter((t) => t.status === 'pending')
      .reduce((sum, t) => sum + t.host_commission, 0)

    // Group by host
    const commissionsByHost = transactions.reduce((acc: any, t) => {
      if (!t.host_id) return acc

      if (!acc[t.host_id]) {
        acc[t.host_id] = {
          hostId: t.host_id,
          hostName: t.profiles_transactions_host_idToprofiles?.full_name || 'Unknown',
          totalCommission: 0,
          paidCommission: 0,
          pendingCommission: 0,
          transactionCount: 0,
        }
      }

      acc[t.host_id].totalCommission += t.host_commission
      acc[t.host_id].transactionCount += 1

      if (t.status === 'paid') {
        acc[t.host_id].paidCommission += t.host_commission
      } else if (t.status === 'pending') {
        acc[t.host_id].pendingCommission += t.host_commission
      }

      return acc
    }, {})

    const hostCommissions = Object.values(commissionsByHost)

    return NextResponse.json({
      stats: {
        total: totalCommissions,
        paid: paidCommissions,
        pending: pendingCommissions,
        failed: 0, // Not tracking failed separately yet
      },
      hostCommissions,
      transactionCount: transactions.length,
    })
  } catch (error) {
    console.error('Error fetching commission stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch commission stats' },
      { status: 500 }
    )
  }
}
