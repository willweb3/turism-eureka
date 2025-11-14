import { DestinationCard } from '@/components/cards/DestinationCard';

const DESTINATIONS = [
  {
    id: '1',
    title: 'Pico Island',
    subtitle: 'Mountain & Vineyards',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.8,
    reviewCount: 234,
    href: '/destinations/pico'
  },
  {
    id: '2',
    title: 'São Miguel',
    subtitle: 'Green Island Paradise',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    rating: 4.9,
    reviewCount: 456,
    href: '/destinations/sao-miguel'
  },
  {
    id: '3',
    title: 'Terceira',
    subtitle: 'Historical & Cultural',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.7,
    reviewCount: 189,
    href: '/destinations/terceira'
  },
  {
    id: '4',
    title: 'Faial',
    subtitle: 'Blue Island Marina',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    rating: 4.6,
    reviewCount: 142,
    href: '/destinations/faial'
  },
  {
    id: '5',
    title: 'São Jorge',
    subtitle: 'Coastal Cliffs & Fajãs',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.7,
    reviewCount: 167,
    href: '/destinations/sao-jorge'
  },
  {
    id: '6',
    title: 'Flores',
    subtitle: 'Waterfalls & Nature',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    rating: 4.9,
    reviewCount: 203,
    href: '/destinations/flores'
  },
];

export function ExploreDestinations() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-dark-900 font-lufga font-semibold text-3xl md:text-4xl lg:text-5xl">
            Explore Exotic Destinations
          </h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DESTINATIONS.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
