'use client';

import { ChevronDown } from 'lucide-react';
import { SortOption } from '@/types/products';

const SORT_OPTIONS = [
  { value: 'recommended' as SortOption, label: 'Recommended' },
  { value: 'price-asc' as SortOption, label: 'Price: Low to High' },
  { value: 'price-desc' as SortOption, label: 'Price: High to Low' },
  { value: 'rating' as SortOption, label: 'Highest Rated' },
  { value: 'newest' as SortOption, label: 'Newest First' },
];

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  const currentSort = SORT_OPTIONS.find(opt => opt.value === value);

  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 font-hanken text-sm cursor-pointer hover:border-[#3CA997] transition-colors"
        style={{ minWidth: '200px' }}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            Sort by: {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
    </div>
  );
}
