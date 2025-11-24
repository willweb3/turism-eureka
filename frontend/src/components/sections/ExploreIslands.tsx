'use client';

import Image from 'next/image';
import Link from 'next/link';

const ISLANDS_BASE = [
  { id: 'terceira', name: 'Terceira', image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=400' },
  { id: 'pico', name: 'Pico', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
  { id: 'faial', name: 'Faial', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
  { id: 'graciosa', name: 'Graciosa', image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400' },
  { id: 'santa-maria', name: 'Santa Maria', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400' },
  { id: 'sao-jorge', name: 'São Jorge', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400' },
  { id: 'flores', name: 'Flores', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
  { id: 'corvo', name: 'Corvo', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
];

// Duplicate islands for infinite scroll
const ISLANDS = [...ISLANDS_BASE, ...ISLANDS_BASE];

export function ExploreIslands() {
  return (
    <section className="py-16 lg:py-24 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-dark-900 font-lufga font-semibold text-3xl md:text-4xl lg:text-5xl mb-3">
            Explore Islands
          </h2>
          <p className="text-neutral-600 font-hanken text-base lg:text-lg">
            Explore all Azores islands experiences
          </p>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative">
        <div
          className="flex gap-4 animate-islands-scroll"
          style={{
            animation: 'islands-scroll 40s linear infinite'
          }}
        >
          {ISLANDS.map((island, index) => (
            <Link
              key={`${island.id}-${index}`}
              href={`/islands/${island.id}`}
              className="group relative overflow-hidden rounded-2xl flex-shrink-0 w-[180px] h-[270px] transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={island.image}
                alt={island.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-hanken font-semibold text-lg text-center">
                  {island.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-neutral-50 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-neutral-50 to-transparent pointer-events-none z-10" />
      </div>

      {/* Explore More Link */}
      <div className="container mx-auto px-6 lg:px-8 mt-12">
        <div className="text-center">
          <Link
            href="/islands"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-hanken font-medium text-base transition-colors group"
          >
            Explore more
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
