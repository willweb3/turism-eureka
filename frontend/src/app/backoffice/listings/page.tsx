'use client'

import { useEffect, useState } from 'react'

interface Listing {
  id: string
  title: string
  type: string
  status: string
  pricePerUnit: number
  provider: {
    full_name: string
  }
  _count: {
    reviews: number
    transactionItems: number
  }
  createdAt: string
}

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    fetchListings()
  }, [status, type])

  const fetchListings = async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (status) params.append('status', status)
    if (type) params.append('type', type)

    const res = await fetch(`/api/backoffice/listings?${params}`)
    const data = await res.json()
    setListings(data.listings)
    setLoading(false)
  }

  const getStatusColor = (status: string) => {
    const colors: any = {
      approved: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      rejected: 'bg-red-100 text-red-700',
      draft: 'bg-gray-100 text-gray-700',
    }
    return colors[status] || 'bg-gray-100 text-gray-700'
  }

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR',
    }).format(cents / 100)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Listings</h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">All Statuses</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
            <option value="draft">Draft</option>
          </select>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">All Types</option>
            <option value="service">Service</option>
            <option value="product">Product</option>
            <option value="event">Event</option>
          </select>
        </div>
      </div>

      {/* Listings Table */}
      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Listing
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Provider
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stats
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {listings.map((listing) => (
                <tr key={listing.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {listing.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {listing.id.substring(0, 8)}...
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {listing.provider.full_name}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-700">
                      {listing.type.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {formatPrice(listing.pricePerUnit)}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(listing.status)}`}
                    >
                      {listing.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div>{listing._count.transactionItems} sales</div>
                    <div>{listing._count.reviews} reviews</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {listings.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No listings found
            </div>
          )}
        </div>
      )}
    </div>
  )
}
