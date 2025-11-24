import Link from 'next/link';

export function TheAzoresCTA() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3CA997]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3CA997]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon/Visual Element */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-[#3CA997] rounded-full flex items-center justify-center shadow-xl">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-[#11212D] font-lufga font-semibold text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to Explore the Azores?
          </h2>

          {/* Description */}
          <p className="text-[#777777] font-hanken text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Discover unique experiences across all nine islands. From volcanic hikes to whale watching,
            your Azorean adventure starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/search"
              className="w-full sm:w-auto px-10 py-4 bg-[#3CA997] hover:bg-[#3CA997]/90 text-white font-hanken font-medium text-lg rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Browse Experiences
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto px-10 py-4 border-2 border-[#3CA997] text-[#3CA997] hover:bg-[#3CA997]/5 font-hanken font-medium text-lg rounded-full transition-all duration-300"
            >
              Shop Local Products
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-[#3CA997] font-lufga font-semibold text-4xl md:text-5xl mb-2">
                9
              </div>
              <div className="text-[#777777] font-hanken text-sm md:text-base">
                Unique Islands
              </div>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-[#3CA997] font-lufga font-semibold text-4xl md:text-5xl mb-2">
                100+
              </div>
              <div className="text-[#777777] font-hanken text-sm md:text-base">
                Experiences
              </div>
            </div>
            <div className="text-center">
              <div className="text-[#3CA997] font-lufga font-semibold text-4xl md:text-5xl mb-2">
                245K
              </div>
              <div className="text-[#777777] font-hanken text-sm md:text-base">
                Residents
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
