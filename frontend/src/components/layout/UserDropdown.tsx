'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, Heart, HelpCircle } from 'lucide-react';

export function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.user-dropdown-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative user-dropdown-container">
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all"
        aria-label="User menu"
      >
        <User size={20} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[#CACDD4] overflow-hidden z-50">
          <div className="py-1">
            {/* Item 1: Log in / Sign up - com background neutral-50 */}
            <Link
              href="/auth"
              className="flex items-center gap-2 px-3 py-2 bg-[#F2F6F8] text-[#11212D] hover:bg-[#F2F6F8]/80 transition-colors font-hanken text-[14px] leading-[21px]"
              onClick={() => setIsOpen(false)}
            >
              <User size={18} className="text-[#11212D]" />
              <span>Log in/ Sign up</span>
            </Link>

            {/* Item 2: Wishlists */}
            <Link
              href="/wishlists"
              className="flex items-center gap-2 px-3 py-2 text-[#11212D] hover:bg-[#F2F6F8] transition-colors font-hanken text-[14px] leading-[21px]"
              onClick={() => setIsOpen(false)}
            >
              <Heart size={18} className="text-[#11212D]" />
              <span>Wishlists</span>
            </Link>

            {/* Item 3: Help */}
            <Link
              href="/help"
              className="flex items-center gap-2 px-3 py-2 text-[#11212D] hover:bg-[#F2F6F8] transition-colors font-hanken text-[14px] leading-[21px]"
              onClick={() => setIsOpen(false)}
            >
              <HelpCircle size={18} className="text-[#11212D]" />
              <span>Help</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
