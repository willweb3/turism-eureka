'use client'

import { AuthProvider } from '@/contexts/AuthContext'
import { Header } from '@/components/layout/Header'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Header />
      {children}
    </AuthProvider>
  )
}
