import Image from 'next/image';
import Link from 'next/link';

const STEPS = [
  {
    number: 1,
    title: 'Basic Information',
  },
  {
    number: 2,
    title: 'Submit your activity for review',
  },
  {
    number: 3,
    title: 'Start earning',
  },
];

export function BecomePartner() {
  return (
    <section className="relative py-16 lg:py-24 bg-dark-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
          alt="Become a Partner"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-dark-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-white font-lufga font-semibold text-3xl md:text-4xl lg:text-5xl mb-6">
            Become a partner
          </h2>

          <p className="text-white font-hanken text-base lg:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect seamlessly with 250+ connectivity partners, Create your activity on
            Azoreon for free under 30 minutes.
          </p>

          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-12">
            {STEPS.map((step, index) => (
              <div key={step.number} className="flex items-center gap-4">
                {/* Step */}
                <div className="flex items-center gap-4">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-dark-900 font-hanken font-bold text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <span className="text-white font-hanken font-medium text-sm lg:text-base">
                    {step.title}
                  </span>
                </div>

                {/* Arrow (not on last item) */}
                {index < STEPS.length - 1 && (
                  <svg
                    className="hidden md:block flex-shrink-0 w-6 h-6 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/become-partner"
            className="inline-block px-10 py-4 bg-primary-500 hover:bg-primary-600 text-dark-900 font-hanken font-semibold text-base rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
