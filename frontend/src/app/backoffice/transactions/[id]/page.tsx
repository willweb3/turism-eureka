export default async function TransactionDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const res = await fetch(
    `http://localhost:3000/api/backoffice/transactions/${params.id}`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    return <div className="text-center py-12">Transaction not found</div>
  }

  const transaction = await res.json()

  const formatCurrency = (cents: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR',
    }).format(cents / 100)
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

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <a
          href="/backoffice/transactions"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Back to Transactions
        </a>
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Transaction Detail</h1>
          <span
            className={`px-3 py-1 text-sm font-medium rounded ${getStatusColor(transaction.status)}`}
          >
            {transaction.status.toUpperCase()}
          </span>
        </div>
        <p className="text-gray-500 mt-2">ID: {transaction.id}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Transaction Overview */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(transaction.totalAmount)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">
                  {new Date(transaction.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Participants */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Participants</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Customer</p>
                <p className="font-medium">
                  {transaction.profiles_transactions_customer_idToprofiles.full_name}
                </p>
                <p className="text-sm text-gray-500">
                  {transaction.profiles_transactions_customer_idToprofiles.phone || '-'}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Provider</p>
                <p className="font-medium">
                  {transaction.profiles_transactions_provider_idToprofiles.full_name}
                </p>
                <p className="text-sm text-gray-500">
                  {transaction.profiles_transactions_provider_idToprofiles
                    .stripeAccountId
                    ? '✓ Stripe Connected'
                    : 'No Stripe'}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Host (Referral)</p>
                <p className="font-medium">
                  {transaction.profiles_transactions_host_idToprofiles?.full_name || 'None'}
                </p>
                {transaction.profiles_transactions_host_idToprofiles && (
                  <p className="text-sm text-gray-500">
                    {transaction.profiles_transactions_host_idToprofiles.phone || '-'}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Items</h2>
            <div className="space-y-3">
              {transaction.items.map((item: any) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded"
                >
                  <div>
                    <p className="font-medium">{item.listing.title}</p>
                    <p className="text-sm text-gray-500">
                      {item.listing.type} • Quantity: {item.quantity}
                    </p>
                    {item.bookingDate && (
                      <p className="text-sm text-gray-500">
                        Booking: {new Date(item.bookingDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {formatCurrency(item.price_at_purchase * item.quantity)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatCurrency(item.price_at_purchase)} each
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          {transaction.reviews && transaction.reviews.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Reviews</h2>
              {transaction.reviews.map((review: any) => (
                <div key={review.id} className="border-l-4 border-yellow-400 pl-4 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                    <span className="font-medium">{review.profiles.full_name}</span>
                  </div>
                  {review.comment && (
                    <p className="text-gray-600">{review.comment}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar - Commission Breakdown */}
        <div className="lg:col-span-1">
          <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-orange-900 mb-4">
              💰 Commission Breakdown
            </h2>

            <div className="space-y-4">
              <div className="pb-4 border-b border-orange-200">
                <p className="text-sm text-orange-700 mb-1">Total Amount</p>
                <p className="text-2xl font-bold text-orange-900">
                  {formatCurrency(transaction.totalAmount)}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Platform Fee (10%)</span>
                  <span className="font-semibold text-blue-600">
                    {formatCurrency(transaction.platform_fee)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '10%' }} />
                </div>
              </div>

              <div className="bg-orange-100 p-3 rounded border border-orange-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-orange-900">
                    Host Commission (5%)
                  </span>
                  <span className="font-bold text-orange-600">
                    {formatCurrency(transaction.host_commission)}
                  </span>
                </div>
                <div className="w-full bg-orange-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '5%' }} />
                </div>
                {transaction.profiles_transactions_host_idToprofiles && (
                  <p className="text-xs text-orange-700 mt-2">
                    Paid to:{' '}
                    {transaction.profiles_transactions_host_idToprofiles.full_name}
                  </p>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Provider Amount (85%)</span>
                  <span className="font-semibold text-green-600">
                    {formatCurrency(transaction.providerAmount)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-orange-200">
              <p className="text-xs text-orange-700">
                This 5% host commission is what makes AZOREON unique - rewarding local
                influencers for bringing customers to the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
