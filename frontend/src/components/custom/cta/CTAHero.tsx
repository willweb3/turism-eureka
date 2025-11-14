'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/design-system/components/button';
import type { CTAHeroProps } from '@/types/custom-components';

/**
 * CTAHero Component
 *
 * Hero section with call-to-action for user engagement.
 * Used throughout the site to encourage bookings and exploration.
 *
 * @example
 * ```tsx
 * <CTAHero
 *   title="Are you ready to start your adventure?"
 *   description="Don't wait any longer. Start planning your dream vacation today."
 *   buttonText="Join a Moment"
 *   buttonAction={() => router.push('/experiences')}
 *   backgroundImage="/images/cta-hero.jpg"
 * />
 * ```
 */
export function CTAHero({
  title,
  description,
  buttonText,
  buttonAction,
  backgroundImage,
  backgroundOverlay = 0.5,
  showDecorations = true,
  className,
}: CTAHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-[48px]',
        'py-24 px-10 md:py-32 md:px-16',
        'flex flex-col items-center justify-center gap-10',
        'min-h-[400px]',
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />
        <div
          className="absolute inset-0 bg-black transition-opacity"
          style={{ opacity: backgroundOverlay }}
        />
      </div>

      {/* Decorative Geometric Shapes */}
      {showDecorations && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Multiple rotated squares */}
            {[
              { size: 288, rotation: 54 },
              { size: 218, rotation: 54 },
              { size: 359, rotation: 54 },
              { size: 423, rotation: 54 },
            ].map((shape, i) => (
              <div
                key={i}
                className="absolute border border-[#52C6BB]/20 rounded-lg"
                style={{
                  width: shape.size,
                  height: shape.size,
                  transform: `rotate(${shape.rotation}deg)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: -shape.size / 2,
                  marginTop: -shape.size / 2,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl text-center">
        <h2 className="font-lufga text-4xl md:text-5xl font-semibold text-white leading-tight">
          {title}
        </h2>

        {description && (
          <p className="font-hanken text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
            {description}
          </p>
        )}
      </div>

      {/* CTA Button */}
      <div className="relative z-10">
        <Button
          variant="primary"
          size="large"
          onClick={buttonAction}
          className="bg-[#52C6BB] hover:bg-[#45b5aa] text-[#11212D] font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
