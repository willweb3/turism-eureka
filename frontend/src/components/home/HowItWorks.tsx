import Link from 'next/link';
import { Calendar, MapPin, Star } from 'lucide-react';

const STEPS = [
  {
    number: 1,
    title: 'Browse and book',
    description: 'Start by searching for a location. Once you find a tour that you like, simply confirm availability, make your reservation and pay securely.',
    icon: Calendar,
  },
  {
    number: 2,
    title: 'Have a fantastic Azoreon',
    description: 'Find your ideal experience on the chosen date and book. We take care of payments, so you can concentrate on enjoying it!',
    icon: MapPin,
  },
  {
    number: 3,
    title: 'Review your experience',
    description: 'If you liked your experience, share with other Azoreon users what was great and help them find the ideal experience!',
    icon: Star,
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-dark-900 font-lufga font-semibold text-3xl md:text-4xl lg:text-5xl">
            How it works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-12">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col items-start text-left group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#F2F6F8] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary-500/20">
                    <Icon
                      size={28}
                      className="text-primary-500"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-dark-900 font-hanken font-semibold text-xl mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 font-hanken text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/experiences"
            className="inline-block px-10 py-4 bg-primary-500 hover:bg-primary-600 text-dark-900 font-hanken font-semibold text-base rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
