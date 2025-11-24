'use client';

import Link from 'next/link';

export function HeroSection() {
  const steps = [
    { line1: 'Basic', line2: 'Information' },
    { line1: 'Submit your activity', line2: 'for review' },
    { line1: 'Start', line2: 'earning' }
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/become-partner-hero.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-[1140px] py-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-[32px] md:text-[42px] lg:text-[48px] leading-[1.6] font-lufga font-semibold text-white mb-6">
            Stronger conversion rates. Boosted sales. Bigger commission payouts.
          </h1>

          {/* Subtitle */}
          <p className="text-[16px] md:text-[18px] leading-[26.24px] font-hanken text-white/90 mb-10 max-w-3xl mx-auto">
            Connect seamlessly with 250+ connectivity partners. Create your activity on Azoreon for free under 30 minutes.
          </p>

          {/* CTA Button */}
          <Link
            href="/auth?tab=signup"
            className="inline-block px-8 py-4 bg-[#52C6BB] text-[#11212D] rounded-[48px] font-hanken text-[16px] leading-[24px] font-semibold hover:bg-[#3CA997] transition-all duration-200 active:scale-[0.98]"
          >
            Get Started
          </Link>

          {/* Steps Indicator */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-16 pt-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* Circle with Number */}
                <div className="flex-shrink-0 w-[37.5px] h-[38px] rounded-[30px] bg-[#616161] flex items-center justify-center">
                  <span className="text-[#65CDC2] font-lufga font-semibold text-[17.5px] leading-[22.75px]">
                    {index + 1}
                  </span>
                </div>

                {/* Step Text */}
                <div className="text-left flex flex-col justify-center">
                  <p className="text-white font-hanken text-[16px] leading-[24px]">
                    {step.line1}
                  </p>
                  <p className="text-white font-hanken text-[16px] leading-[24px]">
                    {step.line2}
                  </p>
                </div>

                {/* Vertical Bar Separator (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block">
                    <div className="w-[1px] h-10 bg-white/40"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
