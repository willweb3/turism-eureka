import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const transaction = await prisma.transaction.findUnique({
      where: { id: params.id },
      include: {
        profiles_transactions_customer_idToprofiles: {
          select: {
            id: true,
            full_name: true,
            phone: true,
          },
        },
        profiles_transactions_provider_idToprofiles: {
          select: {
            id: true,
            full_name: true,
            stripeAccountId: true,
          },
        },
        profiles_transactions_host_idToprofiles: {
          select: {
            id: true,
            full_name: true,
            phone: true,
          },
        },
        items: {
          include: {
            listing: {
              select: {
                id: true,
                title: true,
                type: true,
                pricePerUnit: true,
              },
            },
          },
        },
        reviews: {
          include: {
            profiles: {
              select: {
                full_name: true,
              },
            },
          },
        },
      },
    })

    if (!transaction) {
      return NextResponse.json({ error: 'Transaction not found' }, { status: 404 })
    }

    return NextResponse.json(transaction)
  } catch (error) {
    console.error('Error fetching transaction:', error)
    return NextResponse.json(
      { error: 'Failed to fetch transaction' },
      { status: 500 }
    )
  }
}
