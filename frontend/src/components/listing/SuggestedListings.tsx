import Link from 'next/link';

interface SuggestedListing {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  rating: number;
  priceUnit: string;
}

interface SuggestedListingsProps {
  listings?: SuggestedListing[];
}

export function SuggestedListings({ listings = [] }: SuggestedListingsProps) {
  // Default suggested listings
  const defaultListings: SuggestedListing[] = [
    {
      id: '1',
      title: 'Pico: Explore, Recharge & Reconnect',
      description: '6 days in the Mountains of this Island of the Azores.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      category: 'ADVENTURE & WELLNESS',
      price: 280,
      rating: 4.9,
      priceUnit: 'Per person'
    },
    {
      id: '2',
      title: 'See the whales in Faial',
      description: '6 days in the Mountains of this Island of the Azores.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      category: 'ISLAND HOPPING',
      price: 125,
      rating: 4.7,
      priceUnit: 'Per person'
    },
    {
      id: '3',
      title: 'Pico: Essential Travel Pack',
      description: '6 Day Pico Adventure: Explore the Azores.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
      category: 'DRIVE & STAY DEALS',
      price: 125,
      rating: 4.7,
      priceUnit: 'Per person'
    }
  ];

  const displayListings = listings.length > 0 ? listings : defaultListings;

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < fullStars ? 'text-[#FBBF24]' : 'text-[#D6D8DF]'}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-[#F7F9FA] py-16">
      <div className="container mx-auto px-4 lg:px-12">
        <h2 className="text-[28px] font-bold text-[#11212D] font-hanken leading-[39.2px] mb-8">
          Suggested for you based on your history
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayListings.map((listing) => (
            <Link
              key={listing.id}
              href={`/experiences/${listing.id}`}
              className="bg-white rounded-3xl overflow-hidden flex flex-col group hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Heart icon */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 17.5L3.5 11C1.5 9 1.5 5.5 3.5 3.5C5.5 1.5 9 1.5 11 3.5L10 4.5L11 3.5C13 1.5 16.5 1.5 18.5 3.5C20.5 5.5 20.5 9 18.5 11L10 17.5Z" stroke="#11212D" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                {/* Category */}
                <div className="text-[#777777] font-hanken text-[12px] font-medium uppercase tracking-wide">
                  {listing.category}
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-bold text-[#11212D] font-hanken leading-[23.4px]">
                  {listing.title}
                </h3>

                {/* Description */}
                <p className="text-[#777777] font-hanken text-[14px] leading-[21px]">
                  {listing.description}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-[#D6D8DF]">
                  {/* Price */}
                  <div className="flex flex-col">
                    <div className="text-[#11212D] font-hanken text-[12px]">From</div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[#11212D] font-hanken text-[20px] font-bold">
                        {listing.price}€
                      </span>
                      <span className="text-[#777777] font-hanken text-[12px]">
                        {listing.priceUnit}
                      </span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <span className="text-[#11212D] font-bold text-[14px]">{listing.rating}</span>
                    <div className="flex gap-0.5 text-[12px]">
                      {renderStars(listing.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
