'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Product } from '@/types/products';

interface ProductCardProps {
  product: Product;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string) => void;
}

export function ProductCard({ product, isFavorite = false, onFavoriteToggle }: ProductCardProps) {
  const [isLocalFavorite, setIsLocalFavorite] = useState(isFavorite);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLocalFavorite(!isLocalFavorite);
    onFavoriteToggle?.(product.id);
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] bg-gray-100">
        <Image
          src={product.image_url}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          aria-label={isLocalFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-5 h-5 ${isLocalFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="font-lufga font-semibold text-base text-[#11212D] mb-1 line-clamp-2">
          {product.title}
        </h3>

        <p className="font-hanken text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          {/* Price */}
          <span className="font-lufga font-bold text-lg text-[#11212D]">
            €{product.price.toFixed(2)}
          </span>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Image
              src="/icon-star.svg"
              alt="Star rating"
              width={16}
              height={16}
            />
            <span className="font-hanken text-sm font-medium text-[#11212D]">
              {product.rating_avg.toFixed(1)}
            </span>
            <span className="font-hanken text-xs text-gray-500">
              ({product.rating_count})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
