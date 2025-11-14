'use client'

import { useEffect, useState } from 'react'

interface User {
  id: string
  full_name: string
  phone: string | null
  userType: string
  stripeAccountId: string | null
  createdAt: string
  _count: {
    listings: number
    transactions_transactions_customer_idToprofiles: number
    promoCodes: number
  }
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [userType, setUserType] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [search, userType])

  const fetchUsers = async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (search) params.append('search', search)
    if (userType) params.append('userType', userType)

    const res = await fetch(`/api/backoffice/users?${params}`)
    const data = await res.json()
    setUsers(data.users)
    setLoading(false)
  }

  const getUserTypeColor = (type: string) => {
    const colors: any = {
      tourist: 'bg-blue-100 text-blue-700',
      provider: 'bg-green-100 text-green-700',
      host: 'bg-orange-100 text-orange-700',
      admin: 'bg-purple-100 text-purple-700',
    }
    return colors[type] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Users</h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          />
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">All User Types</option>
            <option value="tourist">Tourist</option>
            <option value="provider">Provider</option>
            <option value="host">Host</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stats
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {user.full_name}
                    </div>
                    <div className="text-sm text-gray-500">{user.id.substring(0, 8)}...</div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${getUserTypeColor(user.userType)}`}
                    >
                      {user.userType.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {user.phone || '-'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {user.userType === 'provider' && (
                      <span>{user._count.listings} listings</span>
                    )}
                    {user.userType === 'tourist' && (
                      <span>
                        {user._count.transactions_transactions_customer_idToprofiles}{' '}
                        transactions
                      </span>
                    )}
                    {user.userType === 'host' && (
                      <span>{user._count.promoCodes} promo codes</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {users.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No users found
            </div>
          )}
        </div>
      )}
    </div>
  )
}
