import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const status = searchParams.get('status') || ''
    const hostId = searchParams.get('hostId') || ''

    const skip = (page - 1) * limit

    const where: any = {}

    if (status) {
      where.status = status
    }

    if (hostId) {
      where.host_id = hostId
    }

    const [transactions, total] = await Promise.all([
      prisma.transaction.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          profiles_transactions_customer_idToprofiles: {
            select: {
              id: true,
              full_name: true,
            },
          },
          profiles_transactions_provider_idToprofiles: {
            select: {
              id: true,
              full_name: true,
            },
          },
          profiles_transactions_host_idToprofiles: {
            select: {
              id: true,
              full_name: true,
            },
          },
          items: {
            include: {
              listing: {
                select: {
                  title: true,
                  type: true,
                },
              },
            },
          },
        },
      }),
      prisma.transaction.count({ where }),
    ])

    return NextResponse.json({
      transactions,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching transactions:', error)
    return NextResponse.json({ error: 'Failed to fetch transactions' }, { status: 500 })
  }
}
