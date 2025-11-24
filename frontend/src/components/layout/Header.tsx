'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Heart, User, LogOut, Settings, ShoppingCart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { UserDropdown } from './UserDropdown';
import { UserDropdownAuth } from './UserDropdownAuth';

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  // Função para pegar as iniciais do usuário
  const getUserInitials = () => {
    if (!user || !user.profile) return '';
    const firstInitial = user.profile.firstName?.charAt(0)?.toUpperCase() || '';
    const lastInitial = user.profile.lastName?.charAt(0)?.toUpperCase() || '';
    return `${firstInitial}${lastInitial}` || 'U';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !transparent
          ? 'bg-[#02232F]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/azoreon-logo.png"
              alt="Azoreon"
              width={180}
              height={37}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              href="/about"
              className="text-white hover:text-[#52C6BB] font-hanken font-medium text-[16px] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/search"
              className="text-white hover:text-[#52C6BB] font-hanken font-medium text-[16px] transition-colors"
            >
              Experiences
            </Link>
            <Link
              href="/products"
              className="text-white hover:text-[#52C6BB] font-hanken font-medium text-[16px] transition-colors"
            >
              Products
            </Link>
            <Link
              href="/the-azores"
              className="text-white hover:text-[#52C6BB] font-hanken font-medium text-[16px] transition-colors"
            >
              The Azores
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-[#52C6BB] font-hanken font-medium text-[16px] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="text-white hover:text-[#52C6BB] font-hanken font-medium text-[16px] transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {isAuthenticated && user ? (
              <Link
                href="/submit-listing"
                className="text-white hover:text-[#52C6BB] font-hanken font-medium text-[16px] transition-colors"
              >
                Submit your listing
              </Link>
            ) : (
              <Link
                href="/become-partner"
                className="text-white hover:text-[#52C6BB] font-hanken font-medium text-[16px] transition-colors"
              >
                Become a partner
              </Link>
            )}

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative p-2 text-white hover:text-[#52C6BB] transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={24} />
              {/* Badge for cart items count - uncomment when cart logic is ready */}
              {/* <span className="absolute -top-1 -right-1 bg-[#52C6BB] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span> */}
            </Link>

            {/* Auth Section */}
            {isAuthenticated && user ? (
              <UserDropdownAuth userInitials={getUserInitials()} />
            ) : (
              <UserDropdown />
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/20">
            <nav className="flex flex-col gap-4">
              <Link
                href="/about"
                className="text-white hover:text-[#52C6BB] font-hanken font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/search"
                className="text-white hover:text-[#52C6BB] font-hanken font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experiences
              </Link>
              <Link
                href="/products"
                className="text-white hover:text-[#52C6BB] font-hanken font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/the-azores"
                className="text-white hover:text-[#52C6BB] font-hanken font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                The Azores
              </Link>
              <Link
                href="/blog"
                className="text-white hover:text-[#52C6BB] font-hanken font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="text-white hover:text-[#52C6BB] font-hanken font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
                {isAuthenticated && user ? (
                  <Link
                    href="/submit-listing"
                    className="text-white text-left py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Submit your listing
                  </Link>
                ) : (
                  <Link
                    href="/become-partner"
                    className="text-white text-left py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Become a partner
                  </Link>
                )}
                <Link
                  href="/cart"
                  className="flex items-center gap-2 text-white py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingCart size={20} />
                  Cart
                </Link>

                {/* Mobile Auth Section */}
                {isAuthenticated && user && user.profile ? (
                  <div className="flex flex-col gap-2">
                    <div className="px-4 py-3 bg-white/10 rounded-lg">
                      <p className="text-sm font-semibold text-white font-hanken">
                        {user.profile.firstName || ''} {user.profile.lastName || ''}
                      </p>
                      <p className="text-xs text-white/70 font-hanken truncate">
                        {user.email || ''}
                      </p>
                    </div>
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 text-white py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Settings size={16} />
                      Perfil
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2 text-red-400 py-2"
                    >
                      <LogOut size={16} />
                      Sair
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/auth?tab=signup"
                      className="w-full px-6 py-2 rounded-full font-hanken font-medium text-white hover:text-[#52C6BB] transition-colors text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Register
                    </Link>
                    <Link
                      href="/auth?tab=login"
                      className="w-full px-6 py-2 rounded-full border border-white/30 font-hanken font-medium text-white hover:bg-white/10 transition-colors text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
