'use client';

import { Search } from 'lucide-react';

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BlogSearch({ value, onChange }: BlogSearchProps) {
  return (
    <div className="w-80 pl-8 pr-2 py-2 bg-white rounded-full inline-flex justify-between items-center">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
        className="flex-1 bg-transparent text-[#777777] text-sm font-hanken font-normal leading-5 focus:outline-none placeholder:text-[#777777]"
      />
      <button
        className="p-4 bg-[#3CA997] hover:bg-[#3FA08F] rounded-[48px] flex items-center justify-center transition-colors"
        aria-label="Search"
      >
        <Search className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
