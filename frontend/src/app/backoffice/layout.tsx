import Link from 'next/link'

export default function BackofficeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-600">AZOREON Admin</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <NavLink href="/backoffice" icon="📊">
            Dashboard
          </NavLink>
          <NavLink href="/backoffice/users" icon="👥">
            Users
          </NavLink>
          <NavLink href="/backoffice/listings" icon="📋">
            Listings
          </NavLink>
          <NavLink href="/backoffice/transactions" icon="💳">
            Transactions
          </NavLink>
          <NavLink href="/backoffice/commissions" icon="💰" highlight>
            Commissions
          </NavLink>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 text-xs text-gray-500">
          <p>AZOREON Backoffice</p>
          <p>v1.0.0</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">{children}</main>
    </div>
  )
}

function NavLink({
  href,
  icon,
  children,
  highlight = false,
}: {
  href: string
  icon: string
  children: React.ReactNode
  highlight?: boolean
}) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
        ${
          highlight
            ? 'bg-orange-50 text-orange-700 hover:bg-orange-100 font-semibold'
            : 'text-gray-700 hover:bg-gray-100'
        }
      `}
    >
      <span className="text-lg">{icon}</span>
      <span>{children}</span>
    </Link>
  )
}
