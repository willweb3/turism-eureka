'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';

interface Experience {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  isFavorite?: boolean;
}

const experiences: Experience[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
    category: 'ADVENTURE & WELLNESS',
    title: 'Pico: Explore, Recharge & Reconnect',
    description: '6 days in the Mountains of this island of the Azores.',
    price: 280,
    rating: 4.9,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
    category: 'ISLAND HOPPING',
    title: 'See the whales in Faial',
    description: '6 days in the Mountains of this island of the Azores.',
    price: 125,
    rating: 4.7,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    category: 'DRIVE & STAY DEALS',
    title: 'Pico: Essential Travel Pack',
    description: '4 Day Pico Adventure: Explore the Azores.',
    price: 125,
    rating: 4.7,
  },
];

export function OftenBookedTogether() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="mt-16">
      <h2 className="text-[28px] font-bold text-[#11212D] mb-6 font-lufga">
        Often booked together
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience) => (
          <Link
            key={experience.id}
            href={`/experiences/${experience.id}`}
            className="bg-white rounded-3xl overflow-hidden group cursor-pointer block hover:shadow-lg transition-shadow"
          >
            {/* Image Container */}
            <div className="relative h-[224px] overflow-hidden">
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Favorite Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(experience.id);
                }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Add to favorites"
              >
                <Heart
                  className={`w-5 h-5 ${
                    favorites.has(experience.id)
                      ? 'fill-red-500 text-red-500'
                      : 'text-[#777777]'
                  } transition-colors`}
                />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Category */}
              <p className="text-xs font-bold text-[#777777] uppercase tracking-wider mb-2 font-hanken">
                {experience.category}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#11212D] mb-2 font-hanken leading-tight">
                {experience.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#777777] mb-4 font-hanken leading-relaxed">
                {experience.description}
              </p>

              {/* Price & Rating */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-[#777777] font-hanken">From</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-[#11212D] font-hanken">
                      {experience.price}€
                    </span>
                    <span className="text-sm text-[#777777] font-hanken">
                      /Per person
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-[#11212D] font-hanken">
                    {experience.rating}
                  </span>
                  <Star className="w-4 h-4 fill-[#FFBA33] text-[#FFBA33]" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
