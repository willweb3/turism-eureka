'use client';

import { Search } from 'lucide-react';
import { useFAQ } from './faq-context';
import { useEffect, useState } from 'react';

export function FAQSearch() {
  const { searchQuery, setSearchQuery } = useFAQ();
  const [localQuery, setLocalQuery] = useState(searchQuery);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(localQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [localQuery, setSearchQuery]);

  return (
    <div className="relative mx-auto" style={{ maxWidth: '614px' }}>
      <div className="relative">
        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Search"
          className="w-full h-12 pl-4 pr-14 bg-white border-0 rounded-full text-[14px] text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB] placeholder:text-[#777777] shadow-sm"
          aria-label="Search FAQ"
        />
        <button
          className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#52C6BB] rounded-full flex items-center justify-center hover:bg-[#3FA08F] transition-colors"
          aria-label="Search"
        >
          <Search className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
