import Image from 'next/image';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1140px]">
        {/* CTA Card com background image e border-radius */}
        <div className="relative overflow-hidden rounded-[28px] min-h-[420px] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90"
              alt="Azores mountains landscape"
              fill
              className="object-cover"
              quality={90}
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-[1]" />

          {/* Elementos decorativos - Círculos laranja */}
          <div className="absolute bottom-0 left-0 w-[280px] h-[280px] z-[2]">
            <div className="absolute inset-0 border-2 border-[#FF9966]/20 rounded-full" />
            <div className="absolute inset-4 border-2 border-[#FF9966]/15 rounded-full" />
            <div className="absolute inset-8 border-2 border-[#FF9966]/10 rounded-full" />
          </div>
          <div className="absolute top-0 right-0 w-[280px] h-[280px] z-[2]">
            <div className="absolute inset-0 border-2 border-[#FF9966]/20 rounded-full" />
            <div className="absolute inset-4 border-2 border-[#FF9966]/15 rounded-full" />
            <div className="absolute inset-8 border-2 border-[#FF9966]/10 rounded-full" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 py-20 max-w-[700px]">
            <h2 className="text-white font-lufga font-semibold text-4xl lg:text-5xl mb-5">
              Let's start a journey
            </h2>
            <p className="text-white/90 font-hanken text-base leading-[1.6] mb-8 max-w-[650px] mx-auto">
              Don't wait any longer. Start planning your dream vacation today. Contact us to discuss your travel needs and let us handle the details.
            </p>
            <Link
              href="/auth/signup"
              className="inline-block bg-[#52C6BB] hover:bg-[#3FA08F] text-white font-hanken font-medium px-10 py-4 rounded-[28px] text-base transition-all duration-300 hover:shadow-lg"
            >
              Join a Moment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
