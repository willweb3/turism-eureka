'use client';

import { useState } from 'react';
import { ExperienceCard } from '@/components/home/ExperienceCard';
import { theAzoresMockListings } from '@/data/theAzoresMockListings';

export function FeaturedExperiencesSection() {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Usar as 6 experiências específicas de São Miguel
  const featuredExperiences = theAzoresMockListings;

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-[#F1F6F8] py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-[#11212D] font-lufga font-semibold text-3xl md:text-4xl mb-2">
              Local Experiences
            </h2>
            <p className="text-[#777777] font-hanken text-base md:text-lg">
              Discover unique activities across the Azores islands
            </p>
          </div>

          {/* Filters - Optional */}
          <div className="hidden lg:flex items-center gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-hanken text-[#777777] bg-white focus:outline-none focus:ring-2 focus:ring-[#3CA997]">
              <option>Points of Interest</option>
              <option>All Islands</option>
              <option>São Miguel</option>
              <option>Pico</option>
              <option>Terceira</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-hanken text-[#777777] bg-white focus:outline-none focus:ring-2 focus:ring-[#3CA997]">
              <option>Sort by: Recommended</option>
              <option>Sort by: Price (Low to High)</option>
              <option>Sort by: Price (High to Low)</option>
              <option>Sort by: Rating</option>
            </select>
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredExperiences.map((listing) => (
            <ExperienceCard
              key={listing.id}
              id={listing.id}
              title={listing.title}
              description={listing.shortDescription || listing.description}
              image={listing.images[0]}
              imageAlt={listing.title}
              badge={listing.category}
              category={[listing.type as any]}
              price={listing.price}
              priceUnit={listing.priceUnit}
              currency={listing.currency}
              rating={listing.rating.average}
              reviewCount={listing.rating.count}
              onClick={() => window.location.href = `/experiences/${listing.id}`}
              onFavorite={() => toggleFavorite(listing.id)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="/search"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#3CA997] hover:bg-[#3CA997]/90 text-white font-hanken font-medium text-base rounded-full transition-all duration-300 hover:shadow-lg"
          >
            View All Experiences
          </a>
        </div>
      </div>
    </section>
  );
}
