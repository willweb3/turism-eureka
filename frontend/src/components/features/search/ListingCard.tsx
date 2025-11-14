'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin, Heart } from 'lucide-react';
import { Listing } from '@/types/listing';
import { useState } from 'react';

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link
      href={`/experiences/${listing.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F2F6F8]">
        {!imageError ? (
          <Image
            src={listing.thumbnail}
            alt={listing.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#F2F6F8]">
            <MapPin className="w-12 h-12 text-[#CBD5E1]" />
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite
                ? 'fill-[#FF6B35] text-[#FF6B35]'
                : 'text-[#11212D]'
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="text-[#777777] font-hanken text-xs font-medium uppercase tracking-wide">
            {listing.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[#11212D] font-hanken font-semibold text-xl mb-3 line-clamp-2 leading-snug">
          {listing.title}
        </h3>

        {/* Description */}
        <p className="text-[#777777] font-hanken text-sm mb-4 line-clamp-1">
          {listing.shortDescription || listing.description}
        </p>

        {/* Price & Rating */}
        <div className="flex items-end justify-between">
          {/* Price */}
          <div>
            <p className="text-[#777777] font-hanken text-xs mb-1">From</p>
            <div className="flex items-baseline gap-0.5">
              <span className="text-[#11212D] font-hanken font-bold text-2xl">
                €{listing.price}
              </span>
              <span className="text-[#777777] font-hanken text-sm">
                /Per person
              </span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <span className="text-[#11212D] font-hanken font-semibold text-base">
              {listing.rating.average.toFixed(1)}
            </span>
            <Star className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
          </div>
        </div>
      </div>
    </Link>
  );
}
