'use client';

import Image from 'next/image';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AvatarGroup } from '@/components/ui/avatar-group';

const MOCK_AVATARS = [
  { src: 'https://i.pravatar.cc/150?img=1', alt: 'User 1' },
  { src: 'https://i.pravatar.cc/150?img=2', alt: 'User 2' },
  { src: 'https://i.pravatar.cc/150?img=3', alt: 'User 3' },
  { src: 'https://i.pravatar.cc/150?img=4', alt: 'User 4' },
];

export function HeroSection() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    } else {
      router.push('/search');
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[854px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/homepage-hero.jpg"
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
          Discover the Azores
        </h1>

        <p className="text-white text-base md:text-lg lg:text-xl mb-8 lg:mb-10 max-w-2xl font-hanken font-light">
          Discover the best activities on Azores Islands: epic hikes, breathtaking
          landscapes and authentic experiences in the Azores.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="w-full mb-8" style={{ maxWidth: '614px' }}>
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find your next experience"
              className="w-full h-14 pl-6 pr-16 rounded-full text-[#11212D] font-hanken text-base placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-white/30 shadow-xl bg-white"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#3FA08F] hover:bg-[#358F7E] transition-colors rounded-full text-white flex items-center justify-center shadow-lg"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>

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
