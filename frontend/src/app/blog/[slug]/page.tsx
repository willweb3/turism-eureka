import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import BlogPostHero from '@/components/blog/BlogPostHero';
import BlogPostContent from '@/components/blog/BlogPostContent';
import SocialShare from '@/components/blog/SocialShare';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogCTA from '@/components/blog/BlogCTA';
import { mockBlogPostsDetail, getPostBySlug } from '@/data/mockBlogPostDetail';
import { mockBlogPosts } from '@/data/mockBlogPosts';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return mockBlogPostsDetail.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | AZOREON Blog',
    };
  }

  return {
    title: `${post.title} | AZOREON Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = mockBlogPosts.filter(
    (p) => post.relatedPosts?.includes(p.id) && p.id !== post.id
  );

  // Current URL for sharing
  const currentUrl = `https://azoreon.com/blog/${params.slug}`;

  return (
    <div className="min-h-screen bg-[#F2F6F8]">
      <Header transparent={false} />

      {/* Hero Section */}
      <section className="pt-[140px] pb-12">
        <div className="max-w-[1440px] mx-auto px-[200px]">
          <BlogPostHero
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
          />
        </div>
      </section>

      {/* Meta + Social Share */}
      <section className="pb-12">
        <div className="max-w-[1440px] mx-auto px-[200px]">
          <div className="max-w-[1040px] mx-auto">
            <div className="flex items-center justify-between">
              {/* Author Info */}
              <div className="flex items-end gap-4">
                <div className="relative w-[53px] h-[53px] rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-hanken font-medium text-[#11212D] leading-[23.4px]">
                    {post.author.name}
                  </span>
                  <span className="text-sm font-hanken font-normal text-[#777777] leading-[21px]">
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Social Share */}
              <SocialShare url={currentUrl} title={post.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="pb-16">
        <div className="max-w-[1440px] mx-auto px-[200px]">
          <div className="max-w-[1040px] mx-auto">
            <BlogPostContent content={post.content} />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="pb-16">
          <div className="max-w-[1440px] mx-auto px-[200px]">
            <RelatedPosts posts={relatedPosts} currentPostId={post.id} />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="pb-20">
        <div className="max-w-[1440px] mx-auto px-[164px]">
          <BlogCTA />
        </div>
      </section>

      <Footer />
    </div>
  );
}
