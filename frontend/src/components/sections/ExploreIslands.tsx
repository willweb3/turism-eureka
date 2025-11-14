import Image from 'next/image';
import Link from 'next/link';

const ISLANDS = [
  { id: '1', title: 'Volcanic Landscapes', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600', span: 'row-span-2' },
  { id: '2', title: 'Coastal Views', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400', span: '' },
  { id: '3', title: 'Green Valleys', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400', span: '' },
  { id: '4', title: 'Ocean Sunsets', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600', span: 'row-span-2' },
  { id: '5', title: 'Mountain Peaks', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400', span: '' },
  { id: '6', title: 'Hidden Beaches', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400', span: '' },
  { id: '7', title: 'Traditional Villages', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600', span: 'row-span-2' },
  { id: '8', title: 'Wine Routes', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400', span: '' },
  { id: '9', title: 'Marine Life', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400', span: '' },
  { id: '10', title: 'Local Cuisine', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400', span: '' },
  { id: '11', title: 'Adventure Sports', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600', span: 'row-span-2' },
  { id: '12', title: 'Cultural Heritage', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400', span: '' },
];

export function ExploreIslands() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-dark-900 font-lufga font-semibold text-3xl md:text-4xl lg:text-5xl">
            Explore Islands
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {ISLANDS.map((island) => (
            <Link
              key={island.id}
              href={`/islands/${island.id}`}
              className={`group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105 hover:z-10 ${island.span}`}
            >
              <Image
                src={island.image}
                alt={island.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-hanken font-semibold text-sm lg:text-base">
                  {island.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
