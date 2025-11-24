'use client';

import React from 'react';
import { MapPin, Package, Heart, Church, Mountain, UtensilsCrossed, Wine, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CategoryFilterProps } from '@/types/homepage.types';

// Icon mapping for categories
const CATEGORY_ICONS = {
  'all': null,
  'nearby-packages': MapPin,
  'packages': Package,
  'health-wellbeing': Heart,
  'cultural': Church,
  'adventure': Mountain,
  'gastronomy': UtensilsCrossed,
  'wine-tasting': Wine,
};

/**
 * CategoryFilter Component
 *
 * Tab-based category filter for Featured Experiences section.
 * Horizontal scrolling on mobile, full width on desktop.
 *
 * @example
 * ```tsx
 * <CategoryFilter
 *   categories={CATEGORY_TABS}
 *   activeCategory="all"
 *   onChange={(category) => setActiveCategory(category)}
 * />
 * ```
 */
export function CategoryFilter({
  categories,
  activeCategory,
  onChange,
  className,
}: CategoryFilterProps) {
  return (
    <div className={cn('category-filter w-full', className)}>
      {/* Scrollable container for mobile */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 min-w-max md:min-w-0 md:flex-wrap md:justify-center">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            const Icon = CATEGORY_ICONS[category.id as keyof typeof CATEGORY_ICONS];

            return (
              <button
                key={category.id}
                onClick={() => onChange(category.id)}
                className={cn(
                  'px-5 py-2.5 rounded-full font-hanken font-medium text-sm',
                  'transition-all duration-200',
                  'whitespace-nowrap',
                  'flex items-center gap-2',
                  'focus:outline-none focus:ring-2 focus:ring-offset-2',
                  isActive
                    ? 'bg-dark-900 text-white shadow-md focus:ring-dark-700'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-300 focus:ring-primary-500'
                )}
                aria-pressed={isActive}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {category.label}
              </button>
            );
          })}

          {/* More button */}
          <button
            className={cn(
              'px-4 py-2.5 rounded-full font-hanken font-medium text-sm',
              'transition-all duration-200',
              'whitespace-nowrap',
              'flex items-center gap-2',
              'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-300',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
            )}
            aria-label="More categories"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
