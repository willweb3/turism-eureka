'use client';

import Image from 'next/image';
import { SearchBar } from '@/components/search/SearchBar';
import { AvatarGroup } from '@/components/ui/avatar-group';

const MOCK_AVATARS = [
  { src: 'https://i.pravatar.cc/150?img=1', alt: 'User 1' },
  { src: 'https://i.pravatar.cc/150?img=2', alt: 'User 2' },
  { src: 'https://i.pravatar.cc/150?img=3', alt: 'User 3' },
  { src: 'https://i.pravatar.cc/150?img=4', alt: 'User 4' },
];

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[854px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920"
          alt="Azores Paradise"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Decorative Blur Circles */}
      <div className="absolute left-[-200px] bottom-[150px] w-[611px] h-[611px] bg-primary-500/30 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute right-[-200px] top-[100px] w-[500px] h-[500px] bg-primary-400/20 rounded-full blur-[90px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-white font-lufga font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 lg:mb-6 max-w-4xl">
          Escape to Paradise
        </h1>

        <p className="text-white text-base md:text-lg lg:text-xl mb-8 lg:mb-10 max-w-2xl font-hanken font-light">
          Discover authentic experiences in the heart of the Azores
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mb-8">
          <SearchBar
            placeholder="Search destinations, experiences, products..."
            size="large"
          />
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-3">
          <AvatarGroup avatars={MOCK_AVATARS} max={4} size="md" />
          <p className="text-white text-base md:text-lg font-hanken">
            +100 Happy Travelers
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
