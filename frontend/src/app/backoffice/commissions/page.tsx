'use client'

import { useEffect, useState } from 'react'

interface CommissionStats {
  stats: {
    total: number
    paid: number
    pending: number
    failed: number
  }
  hostCommissions: Array<{
    hostId: string
    hostName: string
    totalCommission: number
    paidCommission: number
    pendingCommission: number
    transactionCount: number
  }>
  transactionCount: number
}

export default function CommissionsPage() {
  const [data, setData] = useState<CommissionStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCommissions()
  }, [])

  const fetchCommissions = async () => {
    setLoading(true)
    const res = await fetch('/api/backoffice/commissions/stats')
    const commissionData = await res.json()
    setData(commissionData)
    setLoading(false)
  }

  const formatCurrency = (cents: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR',
    }).format(cents / 100)
  }

  if (loading) {
    return <div className="text-center py-12">Loading commissions...</div>
  }

  if (!data) {
    return <div className="text-center py-12">Failed to load commissions</div>
  }

  return (
    <div>
      {/* Header with Warning Badge */}
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">Host Commissions</h1>
        <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
          CRITICAL TRACKING
        </span>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Commissions"
          value={formatCurrency(data.stats.total)}
          icon="💵"
          color="orange"
          description={`From ${data.transactionCount} transactions`}
        />
        <StatCard
          title="Paid to Hosts"
          value={formatCurrency(data.stats.paid)}
          icon="✅"
          color="green"
          description="Successfully distributed"
        />
        <StatCard
          title="Pending Payment"
          value={formatCurrency(data.stats.pending)}
          icon="⏳"
          color="yellow"
          description="Awaiting payout"
        />
      </div>

      {/* Commission Model Explanation */}
      <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-bold text-orange-900 mb-3">
          🎯 AZOREON Commission Model
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-semibold text-orange-900">Platform (10%)</p>
            <p className="text-orange-700">Platform operational fee</p>
          </div>
          <div className="bg-orange-100 p-3 rounded border-2 border-orange-400">
            <p className="font-semibold text-orange-900">Host (5%) ⭐</p>
            <p className="text-orange-700">Referral commission - TRACKED HERE</p>
          </div>
          <div>
            <p className="font-semibold text-orange-900">Provider (85%)</p>
            <p className="text-orange-700">Service/product provider</p>
          </div>
        </div>
      </div>

      {/* Host Commissions Table */}
      <div className="bg-white rounded-lg border-2 border-orange-200 overflow-hidden">
        <div className="bg-orange-100 px-6 py-4 border-b-2 border-orange-200">
          <h2 className="text-lg font-semibold text-orange-900">
            Commission by Host
          </h2>
        </div>

        {data.hostCommissions.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No host commissions yet
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Host
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transactions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Commission
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Paid
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pending
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.hostCommissions.map((host) => (
                <tr key={host.hostId} className="hover:bg-orange-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {host.hostName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {host.hostId.substring(0, 8)}...
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {host.transactionCount}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-orange-600">
                      {formatCurrency(host.totalCommission)}
                    </div>
                    <div className="text-xs text-gray-500">
                      (5% of sales)
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-green-600">
                    {formatCurrency(host.paidCommission)}
                  </td>
                  <td className="px-6 py-4 font-medium text-yellow-600">
                    {formatCurrency(host.pendingCommission)}
                  </td>
                  <td className="px-6 py-4">
                    {host.pendingCommission > 0 ? (
                      <span className="px-2 py-1 text-xs font-medium rounded bg-yellow-100 text-yellow-700">
                        PENDING
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-700">
                        UP TO DATE
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Info Box */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">ℹ️ About Host Commissions</h3>
        <p className="text-sm text-blue-800">
          Hosts earn 5% commission on all transactions generated through their referral
          codes or QR codes. This is the core differentiator of the AZOREON business model,
          enabling local hosts to monetize their influence and connections.
        </p>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  icon,
  color,
  description,
}: {
  title: string
  value: string
  icon: string
  color: string
  description?: string
}) {
  const colorClasses: any = {
    orange: 'bg-orange-50 border-orange-300 text-orange-700',
    green: 'bg-green-50 border-green-300 text-green-700',
    yellow: 'bg-yellow-50 border-yellow-300 text-yellow-700',
  }

  return (
    <div className={`p-6 rounded-lg border-2 ${colorClasses[color]}`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold mb-1">{value}</p>
      {description && <p className="text-xs opacity-75">{description}</p>}
    </div>
  )
}
