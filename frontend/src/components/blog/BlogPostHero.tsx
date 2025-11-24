'use client';

import Image from 'next/image';

interface BlogPostHeroProps {
  title: string;
  excerpt: string;
  image: string;
}

export default function BlogPostHero({ title, excerpt, image }: BlogPostHeroProps) {
  return (
    <div className="w-full max-w-[1040px] mx-auto flex flex-col items-center">
      {/* Title */}
      <h1 className="text-[48px] font-lufga font-semibold text-[#11212D] leading-[62.4px] text-center mb-1">
        {title}
      </h1>

      {/* Excerpt */}
      <p className="text-lg font-hanken font-normal text-[#777777] text-center max-w-[800px]">
        {excerpt}
      </p>

      {/* Hero Image */}
      <div className="relative w-full h-[495px] rounded-[32px] overflow-hidden mt-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
