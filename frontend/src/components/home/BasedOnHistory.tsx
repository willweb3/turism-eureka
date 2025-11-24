'use client';

import { ExperienceCard } from './ExperienceCard';
import type { Experience } from '@/types/homepage.types';

// Mock experiences data (will be replaced with personalized recommendations)
const MOCK_EXPERIENCES: Experience[] = [
  {
    id: '1',
    title: 'Pico: Explore, Recharge & Reconnect',
    description: '6 days in the Mountains of this Island of the Azores.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    badge: 'Adventure & Wellness',
    category: ['adventure', 'health-wellbeing'],
    price: 280,
    rating: 4.9,
  },
  {
    id: '2',
    title: 'See the whales in Faial',
    description: '6 days in the Mountains of this Island of the Azores.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    badge: 'Packages Adventures',
    category: ['adventure', 'nearby-packages'],
    price: 125,
    rating: 4.7,
  },
  {
    id: '3',
    title: 'Pico: Essential Travel Pack',
    description: '4-Day Pico Adventure: Explore the Azores.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800',
    badge: 'Drive & Stay Deals',
    category: ['nearby-packages'],
    price: 125,
    rating: 4.7,
  },
];

interface BasedOnHistoryProps {
  experiences?: Experience[];
}

export function BasedOnHistory({ experiences = MOCK_EXPERIENCES }: BasedOnHistoryProps) {
  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header - Left aligned */}
        <div className="mb-12">
          <h2 className="text-dark-900 font-lufga font-semibold text-3xl md:text-4xl lg:text-5xl">
            Based on your history
          </h2>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ marginBottom: '96px' }}>
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              {...experience}
              onClick={() => {
                // Navigate to experience detail page
                window.location.href = `/experiences/${experience.id}`;
              }}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="relative overflow-hidden rounded-[32px]"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '478px',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Decorative Lines */}
          <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none opacity-20">
            <svg viewBox="0 0 256 400" className="w-full h-full">
              <path
                d="M 0 0 Q 128 80 0 160 T 0 320"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M 40 0 Q 168 80 40 160 T 40 320"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M 80 0 Q 208 80 80 160 T 80 320"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
            <h3 className="text-white font-lufga font-semibold text-3xl lg:text-4xl mb-4">
              Are you ready to start your adventure?
            </h3>
            <p className="text-white/90 font-hanken text-base lg:text-lg mb-8 max-w-2xl">
              Don't wait any longer. Start planning your dream vacation today.
              <br />
              Contact us to discuss your travel needs and let us handle the details.
            </p>
            <button className="px-10 py-4 bg-primary-500 hover:bg-primary-600 text-dark-900 font-hanken font-semibold text-base rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
              Join a Moment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
