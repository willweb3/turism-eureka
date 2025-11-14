'use client';

import { useState } from 'react';
import { ListingDetail } from '@/types/listing-detail';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ListingHeroProps {
  listing: ListingDetail;
}

export function ListingHero({ listing }: ListingHeroProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const slides = listing.images.map((image) => ({
    src: image,
  }));

  return (
    <section className="container mx-auto px-4 lg:px-12 py-8">
      <div className="space-y-4">
        {/* Header with featured badge */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3 flex-1">
            {listing.featured && (
              <span className="inline-block px-4 py-1.5 bg-[#FFBA33] text-[#11212D] font-hanken font-medium text-sm rounded-full">
                Featured
              </span>
            )}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#11212D] font-lufga">
              {listing.title}
            </h1>
            <div className="flex items-center gap-4 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-[#11212D] font-bold">{listing.rating.average}</span>
                <span className="text-[#FBBF24]">★★★★☆</span>
              </div>
              <button className="text-[#11212D] hover:underline font-hanken">
                {listing.rating.count} Reviews
              </button>
              <span className="text-[#777777]">•</span>
              <span className="text-[#777777] font-hanken">
                Activity operator:{' '}
                <button className="text-[#11212D] hover:underline">
                  {listing.operator.name}
                </button>
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-[#BFC3C9] rounded-full hover:bg-[#F2F6F8] transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 17.5L3.5 11C1.5 9 1.5 5.5 3.5 3.5C5.5 1.5 9 1.5 11 3.5L10 4.5L11 3.5C13 1.5 16.5 1.5 18.5 3.5C20.5 5.5 20.5 9 18.5 11L10 17.5Z" stroke="#11212D" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <span className="text-[#11212D] font-hanken text-sm font-medium">Add to favorites</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#BFC3C9] rounded-full hover:bg-[#F2F6F8] transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 11L17 7L13 3M17 7H7M7 17H5C3.89543 17 3 16.1046 3 15V5C3 3.89543 3.89543 3 5 3H7" stroke="#11212D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[#11212D] font-hanken text-sm font-medium">Share</span>
            </button>
          </div>
        </div>

        {/* Image Gallery - 3 images layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full h-[400px] lg:h-[500px]">
          {/* Main image - Left side */}
          <div
            className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(0)}
          >
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>

          {/* Secondary images - Right side (2 images stacked) */}
          <div className="hidden lg:grid grid-rows-2 gap-3 h-full">
            <div
              className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(1)}
            >
              <img
                src={listing.images[1]}
                alt={`${listing.title} - 2`}
                className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            <div
              className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(2)}
            >
              <img
                src={listing.images[2]}
                alt={`${listing.title} - 3`}
                className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxOpen(true);
                }}
                className="absolute bottom-4 right-4 px-4 py-2 bg-white rounded-lg text-sm font-hanken font-medium text-[#11212D] hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-md z-10"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 10V14H10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 6V2H6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 2H2V6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 14H14V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Show all photos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
      />
    </section>
  );
}
