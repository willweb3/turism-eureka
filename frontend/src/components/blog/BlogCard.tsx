'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/data/mockBlogPosts';
import { categoryColors } from '@/lib/blogCategoryColors';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const colors = categoryColors[post.category];

  return (
    <article className="flex-1 bg-white rounded-[24px] overflow-hidden flex flex-col gap-4">
      <Link href="/blog/the-enchanting-azores-europe-hidden-paradise" className="flex flex-col h-full">
        {/* Image - 222px height */}
        <div className="relative w-full h-[222px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 px-4 pb-6 flex flex-col gap-3">
          {/* Category Badge */}
          <span
            className={`inline-flex items-center justify-center px-4 py-1 rounded-[48px] text-sm font-hanken font-light w-fit ${colors.bg} ${colors.text}`}
          >
            {post.category}
          </span>

          {/* Title & Excerpt */}
          <div className="flex flex-col gap-1">
            <h3 className="text-[#11212D] text-lg font-hanken font-bold leading-[23.4px]">
              {post.title}
            </h3>
            <p className="text-[#777777] text-sm font-hanken font-normal leading-[21px] line-clamp-2">
              {post.excerpt}
            </p>
          </div>

          {/* Author & Date */}
          <div className="flex items-end gap-2 mt-auto">
            <div className="relative w-12 h-12 rounded-[48px] overflow-hidden flex-shrink-0">
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
