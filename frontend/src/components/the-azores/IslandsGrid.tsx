import { AZORES_ISLANDS } from '@/lib/islands-data';
import { IslandCard } from './IslandCard';

export function IslandsGrid() {
  return (
    <section className="bg-[#F5F5F5] py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#11212D] font-lufga font-semibold text-4xl md:text-5xl mb-4">
            Explore the 9 Islands
          </h2>
          <p className="text-[#777777] font-hanken text-lg md:text-xl max-w-3xl mx-auto">
            Each island is a unique destination with its own personality, landscapes, and experiences waiting to be discovered.
          </p>
        </div>

        {/* Islands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {AZORES_ISLANDS.map((island) => (
            <IslandCard key={island.id} island={island} />
          ))}
        </div>
      </div>
    </section>
  );
}
