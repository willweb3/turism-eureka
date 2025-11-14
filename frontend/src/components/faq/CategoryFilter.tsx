'use client';

import { FAQCategory } from '@/types/faq';
import { useFAQ } from './faq-context';

const categories: { value: FAQCategory | 'all'; label: string }[] = [
  { value: 'travelers', label: 'Travelers' },
  { value: 'operators', label: 'Operators' },
  { value: 'hosts', label: 'Hosts' },
];

export function CategoryFilter() {
  const { activeCategory, setActiveCategory } = useFAQ();

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => setActiveCategory(category.value)}
          className={`px-5 py-2 rounded-full font-hanken font-medium text-[14px] transition-all ${
            activeCategory === category.value
              ? 'bg-[#11212D] text-white'
              : 'bg-white text-[#11212D] border border-[#E5E7EB] hover:border-[#11212D]'
          }`}
          aria-pressed={activeCategory === category.value}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
