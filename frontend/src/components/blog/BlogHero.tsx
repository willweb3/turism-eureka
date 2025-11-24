'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/data/mockBlogPosts';
import { categoryColors } from '@/lib/blogCategoryColors';

interface BlogHeroProps {
  post: BlogPost;
}

export default function BlogHero({ post }: BlogHeroProps) {
  const colors = categoryColors[post.category];

  return (
    <article className="w-[1129px] py-4 pl-4 pr-8 bg-white rounded-[32px] inline-flex items-center gap-[47px]">
      <Link href="/blog/the-enchanting-azores-europe-hidden-paradise" className="flex items-center gap-[47px] w-full">
        {/* Image */}
        <div className="relative w-[605px] h-[422px] rounded-[29.27px] overflow-hidden flex-shrink-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Badge + Title + Excerpt */}
          <div className="flex flex-col gap-2">
            {/* Category Badge */}
            <span
              className={`inline-flex items-center justify-center px-4 py-1 rounded-[48px] text-sm font-hanken font-light w-fit ${colors.bg} ${colors.text}`}
            >
              {post.category}
            </span>

            {/* Title + Excerpt */}
            <div className="flex flex-col gap-1">
              {/* Title - 32px */}
              <h2 className="text-[#11212D] text-[32px] font-hanken font-semibold leading-[41.6px]">
                {post.title}
              </h2>

              {/* Excerpt - 14px */}
              <p className="text-[#777777] text-sm font-hanken font-normal leading-[21px]">
                {post.excerpt}
              </p>
            </div>
          </div>

          {/* Author & Date */}
          <div className="flex items-end gap-4">
            <div className="relative w-[53px] h-[53px] rounded-[53px] overflow-hidden flex-shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#11212D] text-lg font-hanken font-medium leading-[23.4px]">
                {post.author.name}
              </span>
              <span className="text-[#777777] text-sm font-hanken font-normal leading-[21px]">
                {post.date}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
