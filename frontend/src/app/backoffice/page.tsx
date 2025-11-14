export default async function BackofficeDashboard() {
  const res = await fetch('http://localhost:3000/api/backoffice/stats', {
    cache: 'no-store',
  })
  const stats = await res.json()

  const formatCurrency = (cents: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR',
    }).format(cents / 100)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Users */}
        <StatCard
          title="Total Users"
          value={stats.users}
          icon="👥"
          color="blue"
        />

        {/* Total Listings */}
        <StatCard
          title="Total Listings"
          value={stats.listings}
          icon="📋"
          color="green"
        />

        {/* Total Transactions */}
        <StatCard
          title="Transactions"
          value={stats.transactions}
          icon="💳"
          color="purple"
        />

        {/* Total Revenue */}
        <StatCard
          title="Total Revenue"
          value={formatCurrency(stats.revenue)}
          icon="💵"
          color="indigo"
        />

        {/* Platform Revenue */}
        <StatCard
          title="Platform Revenue (10%)"
          value={formatCurrency(stats.platformRevenue)}
          icon="🏦"
          color="blue"
        />

        {/* Host Commissions Paid - HIGHLIGHTED */}
        <StatCard
          title="Host Commissions Paid (5%)"
          value={formatCurrency(stats.hostCommissionsPaid)}
          icon="💰"
          color="orange"
          highlight
        />
      </div>

      {/* Quick Links */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <QuickLink href="/backoffice/users" icon="👥" title="Manage Users" />
          <QuickLink
            href="/backoffice/listings"
            icon="📋"
            title="Review Listings"
          />
          <QuickLink
            href="/backoffice/transactions"
            icon="💳"
            title="View Transactions"
          />
          <QuickLink
            href="/backoffice/commissions"
            icon="💰"
            title="Track Commissions"
            highlight
          />
        </div>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  icon,
  color,
  highlight = false,
}: {
  title: string
  value: string | number
  icon: string
  color: string
  highlight?: boolean
}) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-700',
    green: 'bg-green-50 text-green-700',
    purple: 'bg-purple-50 text-purple-700',
    indigo: 'bg-indigo-50 text-indigo-700',
    orange: 'bg-orange-50 text-orange-700',
  }

  return (
    <div
      className={`
      p-6 rounded-lg border-2
      ${highlight ? 'border-orange-300 shadow-lg' : 'border-gray-200 bg-white'}
    `}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        {highlight && (
          <span className="text-xs font-semibold px-2 py-1 bg-orange-100 text-orange-700 rounded">
            CRITICAL
          </span>
        )}
      </div>
      <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
      <p
        className={`text-2xl font-bold ${highlight ? 'text-orange-600' : 'text-gray-900'}`}
      >
        {value}
      </p>
    </div>
  )
}

function QuickLink({
  href,
  icon,
  title,
  highlight = false,
}: {
  href: string
  icon: string
  title: string
  highlight?: boolean
}) {
  return (
    <a
      href={href}
      className={`
        flex items-center gap-4 p-4 rounded-lg border-2 transition-all hover:shadow-md
        ${
          highlight
            ? 'border-orange-300 bg-orange-50 hover:bg-orange-100'
            : 'border-gray-200 bg-white hover:border-gray-300'
        }
      `}
    >
      <span className="text-2xl">{icon}</span>
      <span
        className={`font-medium ${highlight ? 'text-orange-700' : 'text-gray-900'}`}
      >
        {title}
      </span>
    </a>
  )
}
