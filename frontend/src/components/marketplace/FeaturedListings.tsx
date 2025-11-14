import { supabase } from '@/lib/supabase'
import { ListingType } from '@/types/database.types'
import ListingCard from './ListingCard'

interface FeaturedListingsProps {
  type: ListingType
  limit?: number
}

export default async function FeaturedListings({ type, limit = 4 }: FeaturedListingsProps) {
  const { data: listings, error } = await supabase
    .from('listings')
    .select('*')
    .eq('type', type)
    .eq('status', 'approved')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching listings:', error)
    return (
      <div className="text-center text-gray-500 py-12">
        Erro ao carregar listagens
      </div>
    )
  }

  if (!listings || listings.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        Nenhuma listagem disponível
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {listings.map((listing: any) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  )
}
