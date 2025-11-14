'use client';

import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  size?: 'medium' | 'large';
  onSearch?: (query: string) => void;
}

export function SearchBar({
  placeholder = "Search...",
  size = "medium",
  onSearch
}: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          size={size === 'large' ? 24 : 20}
        />
        <input
          type="search"
          name="search"
          placeholder={placeholder}
          className={`
            w-full pl-12 pr-4 bg-white rounded-full border-0 shadow-xl
            focus:ring-2 focus:ring-primary-500 focus:outline-none
            font-hanken
            ${size === 'large' ? 'h-14 text-lg' : 'h-12 text-base'}
          `}
        />
      </div>
    </form>
  );
}
