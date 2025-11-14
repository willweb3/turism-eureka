'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import ListingWizard from '@/components/listings/ListingWizard'

export default function NewListingPage() {
  const router = useRouter()
  const { user, isProvider, loading } = useAuth()

  useEffect(() => {
    if (!loading && (!user || !isProvider)) {
      router.push('/auth/login')
    }
  }, [user, isProvider, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Carregando...</div>
      </div>
    )
  }

  if (!user || !isProvider) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Nova Listing</h1>
        <ListingWizard providerId={user.id} />
      </div>
    </div>
  )
}
