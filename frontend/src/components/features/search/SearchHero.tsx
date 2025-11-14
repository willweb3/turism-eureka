'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchHeroProps {
  initialQuery?: string;
  onSearch?: (query: string) => void;
}

export function SearchHero({ initialQuery = '', onSearch }: SearchHeroProps) {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
          alt="Azores landscape"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-[900px] py-16 lg:py-20">
        {/* Título e Subtítulo */}
        <div className="text-center mb-8">
          <h1 className="text-white font-lufga font-semibold text-5xl lg:text-6xl mb-4">
            Search Results
          </h1>
          <p className="text-white/90 font-hanken text-lg lg:text-xl">
            Just a quote about search results
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find your next experience"
              className="w-full h-16 pl-6 pr-16 rounded-full text-[#11212D] font-hanken text-base placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-white/30 shadow-xl bg-white"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#3FA08F] hover:bg-[#358F7E] transition-colors rounded-full text-white flex items-center justify-center shadow-lg"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
