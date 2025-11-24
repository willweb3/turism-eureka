'use client';

import { BlogPost } from '@/data/mockBlogPosts';
import BlogCard from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPost[];
  currentPostId: string;
}

export default function RelatedPosts({ posts, currentPostId }: RelatedPostsProps) {
  // Filter out current post
  const filteredPosts = posts.filter(post => post.id !== currentPostId).slice(0, 3);

  if (filteredPosts.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[28px] font-hanken font-bold leading-[36.4px] text-[#11212D]">
        Related Posts
      </h2>

      <div className="w-[1043px] inline-flex items-start gap-6">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
