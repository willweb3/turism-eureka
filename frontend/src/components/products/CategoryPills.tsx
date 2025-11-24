'use client';

import { Wine, Cookie, Gem, Package } from 'lucide-react';
import { ProductCategory } from '@/types/products';

const CATEGORIES = [
  { id: 'all' as const, label: 'All', icon: null },
  { id: 'wine' as ProductCategory, label: 'Wine', icon: Wine },
  { id: 'cheese' as ProductCategory, label: 'Cheese', icon: Cookie },
  { id: 'jams' as ProductCategory, label: 'Jams', icon: Gem },
  { id: 'packages' as ProductCategory, label: 'Packages', icon: Package },
];

interface CategoryPillsProps {
  activeCategory: string;
  onChange: (category: string) => void;
}

export function CategoryPills({ activeCategory, onChange }: CategoryPillsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {CATEGORIES.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onChange(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-hanken font-medium text-sm whitespace-nowrap transition-all duration-200 ${
              isActive
                ? 'bg-[#11212D] text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-[#3CA997]'
            }`}
          >
            {Icon && <Icon className="w-4 h-4" />}
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
