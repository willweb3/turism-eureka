'use client'

import { useEffect, useState } from 'react'

interface Transaction {
  id: string
  totalAmount: number
  platform_fee: number
  host_commission: number
  providerAmount: number
  status: string
  createdAt: string
  profiles_transactions_customer_idToprofiles: {
    full_name: string
  }
  profiles_transactions_provider_idToprofiles: {
    full_name: string
  }
  profiles_transactions_host_idToprofiles: {
    full_name: string
  } | null
  items: Array<{
    listing: {
      title: string
      type: string
    }
    quantity: number
  }>
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState('')

  useEffect(() => {
    fetchTransactions()
  }, [status])

  const fetchTransactions = async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (status) params.append('status', status)

    const res = await fetch(`/api/backoffice/transactions?${params}`)
    const data = await res.json()
    setTransactions(data.transactions)
    setLoading(false)
  }

  const getStatusColor = (status: string) => {
    const colors: any = {
      paid: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      cancelled: 'bg-red-100 text-red-700',
      refunded: 'bg-gray-100 text-gray-700',
    }
    return colors[status] || 'bg-gray-100 text-gray-700'
  }

  const formatCurrency = (cents: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR',
    }).format(cents / 100)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Transactions</h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="">All Statuses</option>
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
          <option value="refunded">Refunded</option>
        </select>
      </div>

      {/* Transactions List */}
      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg">
                      {formatCurrency(transaction.totalAmount)}
                    </h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(transaction.status)}`}
                    >
                      {transaction.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    ID: {transaction.id.substring(0, 16)}...
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(transaction.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Participants */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Customer</p>
                  <p className="font-medium">
                    {transaction.profiles_transactions_customer_idToprofiles.full_name}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Provider</p>
                  <p className="font-medium">
                    {transaction.profiles_transactions_provider_idToprofiles.full_name}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Host (Referral)</p>
                  <p className="font-medium">
                    {transaction.profiles_transactions_host_idToprofiles?.full_name || '-'}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-700 mb-2">Items:</p>
                {transaction.items.map((item, idx) => (
                  <div key={idx} className="text-sm text-gray-600">
                    • {item.listing.title} ({item.listing.type}) x{item.quantity}
                  </div>
                ))}
              </div>

              {/* Commission Breakdown - HIGHLIGHTED */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-sm text-orange-900 mb-3">
                  💰 Commission Breakdown
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Platform Fee (10%)</p>
                    <p className="font-bold text-blue-600">
                      {formatCurrency(transaction.platform_fee)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Host Commission (5%)</p>
                    <p className="font-bold text-orange-600">
                      {formatCurrency(transaction.host_commission)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Provider Amount (85%)</p>
                    <p className="font-bold text-green-600">
                      {formatCurrency(transaction.providerAmount)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {transactions.length === 0 && (
            <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-gray-200">
              No transactions found
            </div>
          )}
        </div>
      )}
    </div>
  )
}
