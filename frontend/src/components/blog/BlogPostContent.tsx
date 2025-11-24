'use client';

interface BlogPostContentProps {
  content: string;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div
      className="blog-post-content flex flex-col gap-6"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
