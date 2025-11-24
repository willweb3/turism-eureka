'use client';

import React, { useState } from 'react';
import { ExperienceCard } from './ExperienceCard';
import { CategoryFilter } from './CategoryFilter';
import type { Experience, ExperienceCategory, CategoryTab } from '@/types/homepage.types';

// Category tabs matching the design
const CATEGORY_TABS: CategoryTab[] = [
  { id: 'all', label: 'All' },
  { id: 'nearby-packages', label: 'Nearby' },
  { id: 'packages', label: 'Packages' },
  { id: 'health-wellbeing', label: 'Health & Wellbeing' },
  { id: 'cultural', label: 'Cultural' },
  { id: 'adventure', label: 'Adventure' },
  { id: 'gastronomy', label: 'Gastronomy' },
  { id: 'wine-tasting', label: 'Wine Tasting' },
];

// Mock experiences data (will be replaced with Supabase data)
const MOCK_EXPERIENCES: Experience[] = [
  {
    id: '1',
    title: 'Pico: Explore, Recharge & Reconnect',
    description: '6 days in the Mountains of this Island of the Azores.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    badge: 'ADVENTURE & WELLNESS',
    category: ['adventure', 'health-wellbeing'],
    price: 280,
    rating: 4.9,
    featured: true,
  },
  {
    id: '2',
    title: 'See the whales in Faial',
    description: '6 days in the Mountains of this Island of the Azores.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    badge: 'PACKAGES • ADVENTURES',
    category: ['adventure', 'packages'],
    price: 125,
    rating: 4.7,
  },
  {
    id: '3',
    title: 'Pico: Essential Travel Pack',
    description: '4-Day Pico Adventure: Explore the Azores.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800',
    badge: 'DRIVE & STAY DEALS',
    category: ['nearby-packages'],
    price: 125,
    rating: 4.7,
  },
  {
    id: '4',
    title: 'Pico: Explore, Recharge & Reconnect',
    description: '6 days in the Mountains of this Island of the Azores.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    badge: 'ADVENTURE & WELLNESS',
    category: ['adventure', 'health-wellbeing'],
    price: 280,
    rating: 4.9,
  },
  {
    id: '5',
    title: 'See the whales in Faial',
    description: '6 days in the Mountains of this Island of the Azores.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    badge: 'ISLAND HOPPING',
    category: ['adventure', 'nearby-packages'],
    price: 125,
    rating: 4.7,
  },
  {
    id: '6',
    title: 'Pico: Essential Travel Pack',
    description: '4-Day Pico Adventure: Explore the Azores.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    badge: 'DRIVE & STAY DEALS',
    category: ['nearby-packages'],
    price: 125,
    rating: 4.7,
  },
];

interface FeaturedExperiencesProps {
  experiences?: Experience[];
}

export function FeaturedExperiences({ experiences = MOCK_EXPERIENCES }: FeaturedExperiencesProps) {
  const [activeCategory, setActiveCategory] = useState<ExperienceCategory>('all');

  // Filter experiences based on active category
  const filteredExperiences = activeCategory === 'all'
    ? experiences
    : experiences.filter((exp) => exp.category.includes(activeCategory));

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-dark-900 font-lufga font-semibold text-3xl md:text-4xl lg:text-5xl mb-8">
            Featured Experiences
          </h2>

          {/* Category Filter */}
          <CategoryFilter
            categories={CATEGORY_TABS}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              {...experience}
              onClick={() => {
                // Navigate to experience detail page
                window.location.href = `/experiences/${experience.id}`;
              }}
            />
          ))}
        </div>

        {/* No results message */}
        {filteredExperiences.length === 0 && (
          <div className="text-center py-16">
            <p className="text-neutral-600 font-hanken text-lg">
              No experiences found in this category. Try selecting a different category.
            </p>
          </div>
        )}

        {/* Explore More Button */}
        {filteredExperiences.length > 0 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => window.location.href = '/search'}
              className="px-8 py-3 rounded-full border border-neutral-300 bg-white text-neutral-700 font-hanken font-medium text-sm hover:bg-neutral-50 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Explore more
              <span className="text-neutral-400">···</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
