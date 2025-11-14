import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Footer } from '@/components/layout/Footer'
import { supabase } from '@/lib/supabase'
import { formatPrice, formatDate } from '@/lib/utils'
import BookingForm from '@/components/marketplace/BookingForm'

interface ListingPageProps {
  params: {
    id: string
  }
}

export default async function ListingPage({ params }: ListingPageProps) {
  const { data: listing, error } = await supabase
    .from('listings')
    .select(`
      *,
      provider:profiles!listings_provider_id_fkey(id, full_name)
    `)
    .eq('id', params.id)
    .single()

  if (error || !listing) {
    notFound()
  }

  // Type assertion for Supabase response
  const listingData = listing as any

  // Fetch reviews
  const { data: reviews } = await supabase
    .from('reviews')
    .select(`
      *,
      reviewer:profiles!reviews_reviewer_id_fkey(full_name)
    `)
    .eq('listing_id', params.id)
    .order('created_at', { ascending: false })

  const reviewsData = (reviews as any) || []

  const averageRating = reviewsData.length > 0
    ? reviewsData.reduce((sum: number, r: any) => sum + r.rating, 0) / reviewsData.length
    : 0

  return (
    <>

      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Images Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {listingData.images && listingData.images.length > 0 ? (
              <>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={listingData.images[0]}
                    alt={listingData.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {listingData.images.length > 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    {listingData.images.slice(1, 5).map((img: string, idx: number) => (
                      <div key={idx} className="relative h-44 rounded-lg overflow-hidden">
                        <Image
                          src={img}
                          alt={`${listingData.title} ${idx + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="col-span-2 h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Sem imagens disponíveis</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {listingData.title}
                    </h1>
                    <p className="text-gray-600">
                      Por {listingData.provider?.full_name || 'Prestador'}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary-600">
                      {formatPrice(listingData.price_per_unit, listingData.currency)}
                    </div>
                    {listingData.type === 'service' && (
                      <div className="text-sm text-gray-500">por pessoa</div>
                    )}
                  </div>
                </div>

                {/* Rating */}
                {reviewsData && reviewsData.length > 0 && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.round(averageRating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600">
                      {averageRating.toFixed(1)} ({reviewsData.length} {reviewsData.length === 1 ? 'avaliação' : 'avaliações'})
                    </span>
                  </div>
                )}

                {/* Details */}
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <h2 className="text-xl font-semibold mb-3">Detalhes</h2>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Tipo:</span>
                      <span className="ml-2 font-medium">
                        {listingData.type === 'service' ? 'Serviço' : listingData.type === 'product' ? 'Produto' : 'Evento'}
                      </span>
                    </div>
                    {listingData.type === 'service' && listingData.max_capacity && (
                      <div>
                        <span className="text-gray-600">Capacidade:</span>
                        <span className="ml-2 font-medium">até {listingData.max_capacity} pessoas</span>
                      </div>
                    )}
                    {listingData.type === 'product' && listingData.stock !== null && (
                      <div>
                        <span className="text-gray-600">Stock:</span>
                        <span className="ml-2 font-medium">{listingData.stock} unidades</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="border-t border-gray-200 pt-4">
                  <h2 className="text-xl font-semibold mb-3">Descrição</h2>
                  <p className="text-gray-700 whitespace-pre-line">
                    {listingData.description}
                  </p>
                </div>
              </div>

              {/* Reviews */}
              {reviewsData && reviewsData.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Avaliações</h2>
                  <div className="space-y-4">
                    {reviewsData.map((review: any) => (
                      <div key={review.id} className="border-b border-gray-200 pb-4 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">
                            {review.reviewer?.full_name || 'Anónimo'}
                          </span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        {review.comment && (
                          <p className="text-gray-700 text-sm">{review.comment}</p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">
                          {formatDate(review.created_at)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookingForm listing={listingData} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
