'use client';

import { Calendar, MapPin, Package, Compass, Wine, UtensilsCrossed, Landmark, MoreHorizontal, SlidersHorizontal } from 'lucide-react';

interface HorizontalFiltersProps {
  onFilterClick?: (filter: string) => void;
  activeFilter?: string;
}

const filters = [
  { id: 'dates', label: 'Dates', icon: Calendar },
  { id: 'nearby', label: 'Nearby', icon: MapPin },
  { id: 'packages', label: 'Packages', icon: Package },
  { id: 'adventure', label: 'Adventure', icon: Compass },
  { id: 'gastronomy', label: 'Gastronomy', icon: UtensilsCrossed },
  { id: 'culture', label: 'Culture', icon: Landmark },
  { id: 'wine-tasting', label: 'Wine Tasting', icon: Wine },
  { id: 'more', label: 'More ...', icon: MoreHorizontal },
];

export function HorizontalFilters({ onFilterClick, activeFilter }: HorizontalFiltersProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {/* Filter Chips */}
      {filters.map((filter) => {
        const Icon = filter.icon;
        const isActive = activeFilter === filter.id;

        return (
          <button
            key={filter.id}
            onClick={() => onFilterClick?.(filter.id)}
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-full border whitespace-nowrap
              transition-all duration-200 flex-shrink-0
              ${
                isActive
                  ? 'bg-[#11212D] border-[#11212D] text-white'
                  : 'bg-white border-[#CBD5E1] text-[#11212D] hover:border-[#11212D]'
              }
            `}
          >
            <Icon className="w-4 h-4" />
            <span className="font-hanken text-sm font-medium">{filter.label}</span>
          </button>
        );
      })}

      {/* Filters Button (Green) */}
      <button
        onClick={() => onFilterClick?.('filters')}
        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3FA08F] hover:bg-[#358F7E] text-white border-0 transition-colors flex-shrink-0 ml-2"
      >
        <SlidersHorizontal className="w-4 h-4" />
        <span className="font-hanken text-sm font-medium">Filters</span>
      </button>
    </div>
  );
}
