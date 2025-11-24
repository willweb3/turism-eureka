'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogOut, Settings, Calendar, Heart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface UserDropdownAuthProps {
  userInitials: string;
}

export function UserDropdownAuth({ userInitials }: UserDropdownAuthProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.user-dropdown-auth-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <div className="relative user-dropdown-auth-container">
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border-2 border-white/30 font-hanken font-semibold text-[14px] text-white hover:bg-white/20 hover:border-white/50 transition-all"
        aria-label="User menu"
      >
        {userInitials}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[#CACDD4] overflow-hidden z-50">
          <div className="py-1">
            {/* Item 1: Log out - com background neutral-50 */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 w-full bg-[#F2F6F8] text-[#11212D] hover:bg-[#F2F6F8]/80 transition-colors font-hanken text-[14px] leading-[21px]"
            >
              <LogOut size={18} className="text-[#11212D]" />
              <span>Log out</span>
            </button>

            {/* Item 2: My account */}
            <Link
              href="/account"
              className="flex items-center gap-2 px-3 py-2 text-[#11212D] hover:bg-[#F2F6F8] transition-colors font-hanken text-[14px] leading-[21px]"
              onClick={() => setIsOpen(false)}
            >
              <Settings size={18} className="text-[#11212D]" />
              <span>My account</span>
            </Link>

            {/* Item 3: My bookings */}
            <Link
              href="/bookings"
              className="flex items-center gap-2 px-3 py-2 text-[#11212D] hover:bg-[#F2F6F8] transition-colors font-hanken text-[14px] leading-[21px]"
              onClick={() => setIsOpen(false)}
            >
              <Calendar size={18} className="text-[#11212D]" />
              <span>My bookings</span>
            </Link>

            {/* Item 4: Wishlists */}
            <Link
              href="/wishlists"
              className="flex items-center gap-2 px-3 py-2 text-[#11212D] hover:bg-[#F2F6F8] transition-colors font-hanken text-[14px] leading-[21px]"
              onClick={() => setIsOpen(false)}
            >
              <Heart size={18} className="text-[#11212D]" />
              <span>Wishlists</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
