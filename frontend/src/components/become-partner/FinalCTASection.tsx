'use client';

import Link from 'next/link';

export function FinalCTASection() {
  return (
    <section className="py-20 bg-[#F2F6F8]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px]">
        {/* CTA Container with rounded corners */}
        <div className="relative min-h-[400px] rounded-[48px] overflow-hidden flex items-center justify-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/images/become-partner-cta.jpg)',
              }}
            />
            <div className="absolute inset-0 bg-[#0E1B25]/60" />
          </div>

          {/* Decorative Circles - Bottom right */}
          <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none opacity-30">
            <div className="absolute bottom-8 right-8 w-24 h-24 border border-[#D4A574] rounded-full"></div>
            <div className="absolute bottom-12 right-12 w-32 h-32 border border-[#D4A574] rounded-full"></div>
            <div className="absolute bottom-16 right-16 w-40 h-40 border border-[#D4A574] rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#D4A574] rounded-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 lg:px-12 py-20">
            <div className="text-center max-w-[699px] mx-auto flex flex-col items-center gap-4">
              {/* Heading */}
              <h2 className="text-[32px] md:text-[48px] leading-[62.4px] font-lufga font-semibold text-white">
                Start earning with Azoreon?
              </h2>

              {/* Subtitle */}
              <p className="text-[16px] leading-[24px] font-hanken text-white">
                Connect seamlessly with 250+ connectivity partners,<br />
                Create your activity on Azoreon for free under 30 minutes.
              </p>

              {/* CTA Button */}
              <Link
                href="/auth/signup"
                className="inline-flex items-center justify-center px-6 py-4 bg-[#52C6BB] text-[#11212D] rounded-[48px] font-hanken text-[16px] leading-[24px] font-medium hover:bg-[#3CA997] transition-all duration-200 active:scale-[0.98] min-w-[215px]"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
