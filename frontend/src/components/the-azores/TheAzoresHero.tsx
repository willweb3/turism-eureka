'use client';

import Image from 'next/image';

export function TheAzoresHero() {
  return (
    <section className="relative h-[600px] md:h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/the-azores-section-1.jpg"
        alt="São Miguel - The Green Island"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="font-lufga font-semibold text-5xl md:text-6xl lg:text-7xl mb-6">
          São Miguel
        </h1>
        <p className="font-hanken text-xl md:text-2xl font-light">
          The Green Island
        </p>
      </div>
    </section>
  );
}
