'use client';

import Link from 'next/link';

export default function BlogCTA() {
  return (
    <div className="w-full max-w-[1140px] h-96 bg-white rounded-[48px] overflow-hidden relative">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Decorative Circles - Bottom Left */}
      <div className="absolute -bottom-32 -left-28 opacity-30 pointer-events-none">
        <div className="w-80 h-80 rounded-full border border-orange-400" />
        <div className="absolute top-10 left-10 w-[453px] h-[485px] rounded-full border border-orange-400" />
        <div className="absolute top-20 left-20 w-[565px] h-[605px] rounded-full border border-orange-400" />
        <div className="absolute top-32 left-24 w-[666px] h-[712px] rounded-full border border-orange-400" />
      </div>

      {/* Decorative Circles - Top Right */}
      <div className="absolute -top-16 -right-32 opacity-30 pointer-events-none">
        <div className="w-96 h-96 rounded-full border border-orange-400" />
        <div className="absolute -top-12 -right-12 w-[510px] h-[521px] rounded-full border border-orange-400" />
        <div className="absolute -top-24 -right-24 w-[636px] h-[649px] rounded-full border border-orange-400" />
        <div className="absolute -top-36 -right-36 w-[749px] h-[765px] rounded-full border border-orange-400" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-[699px] flex flex-col items-center gap-7">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-center text-white text-5xl font-lufga font-semibold">
              Let's start a journey
            </h2>
            <p className="text-center text-white text-base font-hanken font-normal leading-6">
              Don't wait any longer. Start planning your dream vacation today.
              <br />
              Contact us to discuss your travel needs and let us handle the details.
            </p>
          </div>
          <Link
            href="/experiences"
            className="w-48 px-6 py-3 bg-[#3CA997] hover:bg-[#3FA08F] rounded-[40.97px] inline-flex justify-center items-center gap-2.5 overflow-hidden transition-colors"
          >
            <span className="text-[#11212D] text-sm font-medium font-['Poppins'] leading-5">
              Join a Moment
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
