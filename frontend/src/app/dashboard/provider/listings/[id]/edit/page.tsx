'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import ListingWizard from '@/components/listings/ListingWizard'

export default function EditListingPage() {
  const router = useRouter()
  const params = useParams()
  const { user, isProvider, loading: authLoading } = useAuth()
  const [listing, setListing] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!authLoading && (!user || !isProvider)) {
      router.push('/auth/login')
    }
  }, [user, isProvider, authLoading, router])

  useEffect(() => {
    if (!user || !params.id) return

    const fetchListing = async () => {
      try {
        const response = await fetch(`http://localhost:3002/api/listings/${params.id}`)
        const data = await response.json()

        if (response.ok) {
          // Verify that the listing belongs to the current user
          if (data.listing.providerId !== user.id) {
            alert('Você não tem permissão para editar esta listagem')
            router.push('/dashboard/provider')
            return
          }
          setListing(data.listing)
        } else {
          alert('Listagem não encontrada')
          router.push('/dashboard/provider')
        }
      } catch (error) {
        console.error('Error fetching listing:', error)
        alert('Erro ao carregar listagem')
        router.push('/dashboard/provider')
      } finally {
        setLoading(false)
      }
    }

    fetchListing()
  }, [user, params.id, router])

  if (loading || authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Carregando...</div>
      </div>
    )
  }

  if (!user || !isProvider || !listing) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Editar Listing</h1>
        <ListingWizard providerId={user.id} initialData={listing} isEditing={true} />
      </div>
    </div>
  )
}
