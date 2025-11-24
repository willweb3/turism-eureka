'use client';

import Link from 'next/link';
import Image from 'next/image';

export function PartnersSection() {
  // Partner logos - 6 per row, 2 rows = 12 total
  const partnersRow1 = [
    { name: 'Instacart', logo: '/partners/instacart.svg' },
    { name: 'OnActivities', logo: '/partners/onactivities.svg' },
    { name: 'Shopify', logo: '/partners/shopify.svg' },
    { name: 'Klarna', logo: '/partners/klarna.svg' },
    { name: 'Reddit', logo: '/partners/reddit.svg' },
  ];

  const partnersRow2 = [
    { name: 'Instacart', logo: '/partners/instacart.svg' },
    { name: 'OnActivities', logo: '/partners/onactivities.svg' },
    { name: 'Shopify', logo: '/partners/shopify.svg' },
    { name: 'Klarna', logo: '/partners/klarna.svg' },
    { name: 'Reddit', logo: '/partners/reddit.svg' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px]">
        {/* Section Container with rounded corners and background */}
        <div className="relative bg-[#0E1B25] rounded-[48px] px-[82px] py-20 overflow-hidden">
          {/* Decorative Background Pattern - Circular lines on corners */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top right corner circles */}
            <div className="absolute top-0 right-0 w-64 h-64">
              <div className="absolute top-8 right-8 w-32 h-32 border border-[#3CA997]/20 rounded-full"></div>
              <div className="absolute top-12 right-12 w-40 h-40 border border-[#3CA997]/20 rounded-full"></div>
              <div className="absolute top-16 right-16 w-48 h-48 border border-[#3CA997]/20 rounded-full"></div>
            </div>

            {/* Bottom left corner circles */}
            <div className="absolute bottom-0 left-0 w-64 h-64">
              <div className="absolute bottom-8 left-8 w-32 h-32 border border-[#3CA997]/20 rounded-full"></div>
              <div className="absolute bottom-12 left-12 w-40 h-40 border border-[#3CA997]/20 rounded-full"></div>
              <div className="absolute bottom-16 left-16 w-48 h-48 border border-[#3CA997]/20 rounded-full"></div>
            </div>
          </div>

          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[42px] leading-[54.6px] font-lufga font-semibold text-white mb-4">
                Connect seamlessly with 250+<br />
                connectivity partners
              </h2>
              <p className="text-[18px] leading-[27px] font-hanken text-white max-w-[686px] mx-auto">
                Access the largest marketplace for local experiences with our solutions. We provide integration tools like data feeds, API, and white label for seamless bookings.
              </p>
            </div>

            {/* Partner Logos - 2 rows */}
            <div className="flex flex-col items-center gap-8 mb-12">
              {/* Row 1 */}
              <div className="flex items-center justify-center gap-12 flex-wrap max-w-[984px]">
                {partnersRow1.map((partner, index) => (
                  <div
                    key={`row1-${index}`}
                    className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                    style={{ mixBlendMode: 'screen' }}
                  >
                    {/* Placeholder for partner logo */}
                    <div className="w-32 h-12 bg-white/10 rounded flex items-center justify-center">
                      <span className="text-white/60 text-xs font-hanken">{partner.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-center gap-12 flex-wrap max-w-[984px]">
                {partnersRow2.map((partner, index) => (
                  <div
                    key={`row2-${index}`}
                    className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                    style={{ mixBlendMode: 'screen' }}
                  >
                    {/* Placeholder for partner logo */}
                    <div className="w-32 h-12 bg-white/10 rounded flex items-center justify-center">
                      <span className="text-white/60 text-xs font-hanken">{partner.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href="/auth/signup"
                className="inline-block px-8 py-4 bg-[#3CA997] text-white rounded-[48px] font-hanken text-[16px] leading-[24px] font-semibold hover:bg-[#34a589] transition-all duration-200 active:scale-[0.98]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
