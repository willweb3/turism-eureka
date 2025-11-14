'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ListingCardProps } from '@/types/custom-components';

/**
 * ListingCard Component
 *
 * Card for displaying experiences/products in the AZOREON marketplace.
 * Shows image, title, price, duration, and basic information.
 *
 * @example
 * ```tsx
 * <ListingCard
 *   id="exp-001"
 *   title="Azores: Explore, Recharge & Reconnect"
 *   image="/images/whale-watching.jpg"
 *   price={45}
 *   duration="10-13 November, 2025"
 *   guests="1 Adult"
 *   category="experience"
 *   rating={4.8}
 *   reviewCount={127}
 *   onClick={() => router.push('/experiences/exp-001')}
 * />
 * ```
 */
export function ListingCard({
  id,
  title,
  image,
  imageAlt = title,
  price,
  priceUnit = 'per person',
  currency = '€',
  duration,
  guests,
  category,
  featured = false,
  badge,
  rating,
  reviewCount,
  onClick,
  onFavorite,
  className,
  compact = false,
}: ListingCardProps) {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFavorite?.();
  };

  return (
    <article
      className={cn(
        'listing-card group',
        'overflow-hidden rounded-3xl bg-white',
        'transition-all duration-300',
        'hover:shadow-xl hover:-translate-y-1',
        'cursor-pointer',
        compact ? 'max-w-sm' : 'max-w-md',
        className
      )}
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Badge Overlay */}
        {badge && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-[#52C6BB] rounded-full text-sm font-medium text-[#11212D]">
            {badge}
          </div>
        )}

        {/* Favorite Button */}
        {onFavorite && (
          <button
            onClick={handleFavoriteClick}
            className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition"
            aria-label="Add to favorites"
          >
            <Heart className="w-5 h-5 text-[#11212D]" />
          </button>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col gap-4">
        {/* Title & Price */}
        <div className="flex flex-col gap-2">
          <h3 className="font-hanken text-xl font-semibold text-[#11212D] line-clamp-2 leading-[26px]">
            {title}
          </h3>

          <div className="flex items-baseline gap-1">
            <span className="font-hanken text-3xl font-bold text-[#11212D] leading-[41.6px]">
              {currency} {price}
            </span>
            <span className="text-sm text-[#777777] font-normal">
              /{priceUnit}
            </span>
          </div>
        </div>

        {/* Duration */}
        {duration && (
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-[#777777] uppercase tracking-wide">
              Duration
            </span>
            <span className="text-lg font-medium text-[#11212D] leading-[23.4px]">
              {duration}
            </span>
          </div>
        )}

        {/* Divider */}
        {duration && guests && (
          <div className="border-t border-[#D6D8DF]" />
        )}

        {/* Guests */}
        {guests && (
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-[#777777] uppercase tracking-wide">
              Guests
            </span>
            <span className="text-lg font-medium text-[#11212D] leading-[23.4px]">
              {guests}
            </span>
          </div>
        )}

        {/* Rating */}
        {rating !== undefined && (
          <div className="flex items-center gap-2 pt-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-4 h-4',
                    i < Math.floor(rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-[#D6D8DF]'
                  )}
                />
              ))}
            </div>
            {reviewCount !== undefined && (
              <span className="text-sm text-[#777777]">
                ({reviewCount} reviews)
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
