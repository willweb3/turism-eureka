import ListingCard from './ListingCard'

interface SearchResultsProps {
  searchParams: {
    q?: string
    type?: string
    date?: string
    people?: string
  }
}

export default async function SearchResults({ searchParams }: SearchResultsProps) {
  // Build query parameters for API
  const params = new URLSearchParams()
  params.set('status', 'published')

  if (searchParams.type) {
    params.set('type', searchParams.type)
  }

  if (searchParams.q) {
    params.set('search', searchParams.q)
  }

  // Fetch listings from backoffice API
  let listings: any[] = []
  let error: any = null

  try {
    const response = await fetch(
      `http://localhost:3002/api/listings?${params.toString()}`,
      { cache: 'no-store' }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch listings')
    }

    const data = await response.json()
    listings = data.listings || []

    // Client-side filtering for people count (if needed for services)
    if (searchParams.people && searchParams.type === 'service') {
      const peopleCount = parseInt(searchParams.people)
      listings = listings.filter(
        (listing: any) => listing.maxParticipants >= peopleCount
      )
    }
  } catch (err) {
    console.error('Error fetching listings:', err)
    error = err
  }

  if (error) {
    return (
      <div className="text-center text-gray-500 py-12">
        Erro ao carregar resultados
      </div>
    )
  }

  if (!listings || listings.length === 0) {
    return (
      <div className="text-center py-12">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-2 text-lg font-medium text-gray-900">Nenhum resultado encontrado</h3>
        <p className="mt-1 text-gray-500">Tente ajustar os filtros de pesquisa</p>
      </div>
    )
  }

  return (
    <>
      <div className="mb-4 text-sm text-gray-600">
        {listings.length} {listings.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing: any) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </>
  )
}
