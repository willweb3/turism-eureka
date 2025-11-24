import Image from 'next/image';
import { JourneyCard } from '@/components/cards/JourneyCard';

const JOURNEYS = [
  {
    id: '1',
    title: 'Restaurants experience',
    description: 'We manage planning and booking for your adventure. Our services ensure a smooth travel experience.',
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=600',
  },
  {
    id: '2',
    title: 'Cultural Tours',
    description: 'We handle the planning and booking for your adventure, ensuring every detail is covered for a seamless travel experience.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600',
  },
  {
    id: '3',
    title: 'Adventure',
    description: 'Let us take care of your adventure planning and bookings, so you can enjoy a hassle-free travel journey.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
  },
];

export function UnforgettableJourneys() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
          alt="Azores Landscape"
          fill
          className="object-cover mix-blend-soft-light opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent" />
      </div>

      {/* Decorative Blur */}
      <div className="absolute left-[-150px] top-[150px] w-[611px] h-[611px] bg-primary-500/30 rounded-full blur-[90px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-white font-lufga font-semibold text-3xl md:text-4xl lg:text-5xl mb-4">
            Unforgettable journeys on Azores
          </h2>
          <p className="text-white/80 font-hanken text-base lg:text-lg max-w-2xl mx-auto">
            We manage planning and booking for your adventure.
          </p>
        </div>

        {/* Journeys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {JOURNEYS.map((journey) => (
            <JourneyCard key={journey.id} {...journey} />
          ))}
        </div>
      </div>
    </section>
  );
}
