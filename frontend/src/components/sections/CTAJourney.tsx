import Image from 'next/image';
import Link from 'next/link';

export function CTAJourney() {
  return (
    <section className="py-16 lg:py-24 bg-[#F1F6F8]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[48px] h-[400px] lg:h-[500px]">
          {/* Background */}
          <Image
            src="/the-azores-section-2.jpg"
            alt="Start your journey"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Decorative Lines */}
          <svg
            className="absolute left-0 bottom-0 w-full h-full pointer-events-none opacity-40"
            viewBox="0 0 1140 417"
            fill="none"
          >
            <line x1="-100" y1="700" x2="200" y2="100" stroke="#E57643" strokeWidth="0.75" />
            <line x1="-80" y1="650" x2="250" y2="80" stroke="#E57643" strokeWidth="0.75" />
            <line x1="-120" y1="750" x2="150" y2="120" stroke="#E57643" strokeWidth="0.75" />
            <line x1="940" y1="-100" x2="1240" y2="400" stroke="#E57643" strokeWidth="0.75" />
            <line x1="900" y1="-80" x2="1200" y2="420" stroke="#E57643" strokeWidth="0.75" />
          </svg>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-white font-lufga font-semibold text-3xl md:text-4xl lg:text-5xl mb-4 max-w-3xl">
              Let's start a journey
            </h2>
            <p className="text-white font-hanken text-base lg:text-lg mb-8 max-w-2xl leading-relaxed">
              Don't wait any longer. Start planning your dream vacation today.
              <br className="hidden md:block" />
              Contact us to discuss your travel needs and let us handle the details.
            </p>
            <Link
              href="/signup"
              className="px-10 py-4 bg-primary-500 hover:bg-primary-600 text-dark-900 font-hanken font-medium text-base rounded-full transition-colors"
            >
              Join a Moment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
