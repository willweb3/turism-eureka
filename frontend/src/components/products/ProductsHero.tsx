'use client';

import Image from 'next/image';

export function ProductsHero() {
  return (
    <section className="relative h-[400px] md:h-[300px] sm:h-[250px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        alt="Azores Products"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#11212D]/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center">
        <h1 className="font-lufga font-semibold text-5xl leading-[76.8px] mb-2">
          Products
        </h1>
        <p className="font-hanken font-light text-lg leading-[29.52px]">
          Just a quote about products
        </p>
      </div>
    </section>
  );
}
