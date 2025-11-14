'use client';

import { Grid3x3, List, ChevronDown } from 'lucide-react';
import { SearchFilters } from '@/types/listing';

interface SearchControlsProps {
  resultCount: number;
  searchQuery?: string;
  sortBy: SearchFilters['sortBy'];
  onSortChange: (sortBy: SearchFilters['sortBy']) => void;
  viewMode?: 'grid' | 'list';
  onViewModeChange?: (mode: 'grid' | 'list') => void;
}

export function SearchControls({
  resultCount,
  searchQuery,
  sortBy = 'relevance',
  onSortChange,
  viewMode = 'grid',
  onViewModeChange,
}: SearchControlsProps) {
  const sortOptions = [
    { value: 'relevance', label: 'Recommended' },
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' },
  ] as const;

  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      {/* Result Count */}
      <div className="flex-1">
        <h2 className="text-[#11212D] font-hanken text-xl font-semibold">
          {resultCount} Results{searchQuery && ` for "${searchQuery}"`}
        </h2>
      </div>

      {/* Sort Dropdown & View Toggle */}
      <div className="flex items-center gap-3">
        {/* Sort by */}
        <div className="flex items-center gap-2">
          <span className="text-[#11212D] font-hanken text-sm font-medium hidden sm:inline">
            Sort by:
          </span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SearchFilters['sortBy'])}
              className="appearance-none h-10 pl-3 pr-10 bg-white border-0 text-[#11212D] font-hanken text-sm font-medium focus:outline-none cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#11212D] pointer-events-none" />
          </div>
        </div>

        {/* View Mode Toggle */}
        {onViewModeChange && (
          <div className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`w-9 h-9 flex items-center justify-center rounded transition-colors ${
                viewMode === 'grid'
                  ? 'bg-[#11212D] text-white'
                  : 'bg-white text-[#777777] hover:text-[#11212D]'
              }`}
              aria-label="Grid view"
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`w-9 h-9 flex items-center justify-center rounded transition-colors ${
                viewMode === 'list'
                  ? 'bg-[#11212D] text-white'
                  : 'bg-white text-[#777777] hover:text-[#11212D]'
              }`}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
