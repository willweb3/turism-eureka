'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { ExperienceCardProps } from '@/types/homepage.types';

/**
 * ExperienceCard Component
 *
 * Card for displaying experiences in the Featured Experiences and Based on History sections.
 * Matches the Landing Page design with badge, image, title, description, price, and rating.
 *
 * @example
 * ```tsx
 * <ExperienceCard
 *   id="exp-001"
 *   title="Pico: Explore, Recharge & Reconnect"
 *   description="6 days in the Mountains of this Island of the Azores."
 *   image="/images/pico-mountain.jpg"
 *   badge="Adventure & Wellness"
 *   category={['adventure', 'health-wellbeing']}
 *   price={280}
 *   rating={4.9}
 *   onClick={() => router.push('/experiences/exp-001')}
 * />
 * ```
 */
export function ExperienceCard({
  id,
  title,
  description,
  image,
  imageAlt,
  badge,
  price,
  priceUnit = 'Per person',
  currency = '€',
  rating,
  reviewCount,
  onClick,
  onFavorite,
  className,
}: ExperienceCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    onFavorite?.();
  };

  return (
    <article
      style={{
        alignSelf: 'stretch',
        position: 'relative',
        background: 'white',
        overflow: 'hidden',
        borderRadius: '20px',
        border: '1px solid #E5E7EB',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '18px',
        display: 'inline-flex',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      className="hover:shadow-2xl hover:-translate-y-2"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      {/* Image Section */}
      <div style={{ alignSelf: 'stretch', height: '222px', position: 'relative' }}>
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div
        style={{
          alignSelf: 'stretch',
          paddingBottom: '24px',
          paddingLeft: '16px',
          paddingRight: '16px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '12px',
          display: 'flex',
        }}
      >
        {/* Badge + Title + Description */}
        <div
          style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '4px',
            display: 'flex',
          }}
        >
          {/* Badge */}
          {badge && (
            <div
              style={{
                alignSelf: 'stretch',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: '#777777',
                fontSize: '10px',
                fontFamily: 'Hanken Grotesk',
                fontWeight: 500,
                textTransform: 'uppercase',
                lineHeight: '18px',
                letterSpacing: '0.30px',
                wordWrap: 'break-word',
              }}
            >
              {badge}
            </div>
          )}

          <div
            style={{
              alignSelf: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '4px',
              display: 'flex',
            }}
          >
            {/* Title */}
            <div
              style={{
                alignSelf: 'stretch',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: '#11212D',
                fontSize: '19px',
                fontFamily: 'Hanken Grotesk',
                fontWeight: 700,
                lineHeight: '26.60px',
                wordWrap: 'break-word',
              }}
            >
              {title}
            </div>

            {/* Description */}
            <div
              style={{
                alignSelf: 'stretch',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: '#777777',
                fontSize: '14px',
                fontFamily: 'Hanken Grotesk',
                fontWeight: 400,
                lineHeight: '18.20px',
                wordWrap: 'break-word',
              }}
            >
              {description}
            </div>
          </div>
        </div>

        {/* Price and Rating Section */}
        <div
          style={{
            alignSelf: 'stretch',
            height: '36px',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          {/* "From" label */}
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              color: '#11212D',
              fontSize: '12px',
              fontFamily: 'Hanken Grotesk',
              fontWeight: 400,
              lineHeight: '14.40px',
              wordWrap: 'break-word',
            }}
          >
            From
          </div>

          {/* Price and Rating Row */}
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              display: 'inline-flex',
            }}
          >
            {/* Price */}
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '4px',
              }}
            >
              <span
                style={{
                  color: '#11212D',
                  fontSize: '22px',
                  fontFamily: 'Hanken Grotesk',
                  fontWeight: 600,
                  lineHeight: '17.60px',
                  wordWrap: 'break-word',
                }}
              >
                {currency}{price}
              </span>
              <span
                style={{
                  color: '#11212D',
                  fontSize: '12px',
                  fontFamily: 'Hanken Grotesk',
                  fontWeight: 400,
                  lineHeight: '9.60px',
                  wordWrap: 'break-word',
                }}
              >
                /{priceUnit}
              </span>
            </div>

            {/* Rating */}
            {rating !== undefined && (
              <div
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '4px',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#11212D',
                    fontSize: '14px',
                    fontFamily: 'Hanken Grotesk',
                    fontWeight: 500,
                    lineHeight: '14px',
                    letterSpacing: '0.05px',
                    wordWrap: 'break-word',
                  }}
                >
                  {rating.toFixed(1)}
                </div>
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/icon-star.svg"
                    alt="Star rating"
                    width={12}
                    height={12}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Favorite Heart Icon */}
      <div
        style={{
          width: '22px',
          height: '22px',
          right: '16px',
          top: '16px',
          position: 'absolute',
          overflow: 'hidden',
          cursor: 'pointer',
          zIndex: 10,
        }}
        onClick={handleFavoriteClick}
      >
        <Image
          src={isFavorited ? '/icon-heart-fill.svg' : '/icon-heart.svg'}
          alt={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          width={22}
          height={22}
        />
      </div>
    </article>
  );
}
