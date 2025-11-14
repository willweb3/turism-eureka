import Link from 'next/link'
import Image from 'next/image'

interface ListingCardProps {
  listing: any
}

export default function ListingCard({ listing }: ListingCardProps) {
  const imageSrc = listing.mainImage || listing.gallery?.[0] || '/placeholder.jpg'

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'service':
        return 'Serviço'
      case 'product':
        return 'Produto'
      case 'event':
        return 'Evento'
      default:
        return type
    }
  }

  const formatPrice = (priceInCents: number) => {
    return `€${(priceInCents / 100).toFixed(2)}`
  }

  return (
    <Link href={`/listings/${listing.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 bg-gray-200">
          {listing.mainImage || (listing.gallery && listing.gallery.length > 0) ? (
            <Image
              src={imageSrc}
              alt={listing.title_pt}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
            {getTypeLabel(listing.type)}
          </span>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
            {listing.title_pt}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {listing.short_desc_pt || listing.full_desc_pt}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary-600">
                {formatPrice(listing.discountPrice || listing.basePrice)}
              </span>
              {listing.type === 'service' && (
                <span className="text-sm text-gray-500"> / pessoa</span>
              )}
            </div>

            {listing.type === 'service' && listing.maxParticipants && (
              <div className="text-sm text-gray-500">
                <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                até {listing.maxParticipants}
              </div>
            )}

            {listing.type === 'product' && listing.stock !== null && listing.stock !== undefined && (
              <div className="text-sm text-gray-500">
                Stock: {listing.stock}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
