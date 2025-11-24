'use client';

import { BlogPost } from '@/data/mockBlogPosts';
import BlogCard from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-lg font-hanken text-[#777777]">
          No posts found. Try adjusting your filters.
        </p>
      </div>
    );
  }

  // First row: 3 cards
  const firstRow = posts.slice(0, 3);
  // Second row: 2 cards
  const secondRow = posts.slice(3, 5);

  return (
    <div className="w-[1140px] flex flex-col gap-6">
      {/* First row - 3 cards */}
      {firstRow.length > 0 && (
        <div className="w-[1140px] inline-flex items-center gap-6">
          {firstRow.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {/* Second row - 2 cards */}
      {secondRow.length > 0 && (
        <div className="w-[1140px] inline-flex items-center gap-6">
          {secondRow.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
