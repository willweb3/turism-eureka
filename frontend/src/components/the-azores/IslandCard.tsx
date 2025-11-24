'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Island, formatPopulation, formatArea } from '@/lib/islands-data';
import { MapPin, Users, Maximize2 } from 'lucide-react';

interface IslandCardProps {
  island: Island;
}

export function IslandCard({ island }: IslandCardProps) {
  return (
    <Link
      href={`/ilha/${island.slug}`}
      className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={island.image}
          alt={island.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Island Nickname Badge */}
        <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
          <span className="text-[#11212D] font-hanken font-medium text-sm">
            {island.nickname}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Island Name */}
        <h3 className="text-[#11212D] font-lufga font-semibold text-2xl mb-3 group-hover:text-[#3CA997] transition-colors">
          {island.name}
        </h3>

        {/* Description */}
        <p className="text-[#777777] font-hanken text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
          {island.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
          {/* Population */}
          <div className="flex flex-col items-center text-center">
            <Users className="w-5 h-5 text-[#3CA997] mb-1" />
            <span className="text-[#11212D] font-hanken font-semibold text-sm md:text-base">
              {formatPopulation(island.population)}
            </span>
            <span className="text-[#777777] font-hanken text-xs">
              Population
            </span>
          </div>

          {/* Area */}
          <div className="flex flex-col items-center text-center border-x border-gray-200">
            <Maximize2 className="w-5 h-5 text-[#3CA997] mb-1" />
            <span className="text-[#11212D] font-hanken font-semibold text-sm md:text-base">
              {formatArea(island.area)}
            </span>
            <span className="text-[#777777] font-hanken text-xs">
              Area
            </span>
          </div>

          {/* Capital */}
          <div className="flex flex-col items-center text-center">
            <MapPin className="w-5 h-5 text-[#3CA997] mb-1" />
            <span className="text-[#11212D] font-hanken font-semibold text-sm md:text-base truncate max-w-full px-1">
              {island.capital.split(' ')[0]}
            </span>
            <span className="text-[#777777] font-hanken text-xs">
              Capital
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex items-center justify-center">
          <span className="text-[#3CA997] font-hanken font-medium text-sm group-hover:underline">
            Explore {island.name} →
          </span>
        </div>
      </div>
    </Link>
  );
}
