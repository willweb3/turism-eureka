'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import BlogHero from '@/components/blog/BlogHero';
import CategoryFilter from '@/components/blog/CategoryFilter';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogPagination from '@/components/blog/BlogPagination';
import BlogCTA from '@/components/blog/BlogCTA';
import { mockBlogPosts } from '@/data/mockBlogPosts';

const POSTS_PER_PAGE = 5;
const categories = ['All', 'Nature', 'Adventure', 'Cities', 'Ocean', 'Gastronomy'];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Get featured post
  const featuredPost = mockBlogPosts.find((post) => post.featured);
  const regularPosts = mockBlogPosts.filter((post) => !post.featured);

  // Filter posts by category and search query
  const filteredPosts = useMemo(() => {
    let filtered = regularPosts;

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter((post) => post.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.author.name.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [regularPosts, activeCategory, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 4;
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#F2F6F8]">
      <Header transparent={false} />

      {/* Section 1: Title + Search + Featured Post */}
      <section className="pt-[169px]">
        <div className="max-w-[1440px] mx-auto px-[157px]">
          {/* Title and Search Row */}
          <div className="flex items-center justify-between mb-[98px]">
            {/* Title */}
            <h1 className="text-[48px] font-lufga font-semibold text-[#11212D] leading-[62.4px]">
              Blog
            </h1>

            {/* Search Bar - same style as homepage */}
            <div className="w-80 pl-8 pr-2 py-2 bg-white rounded-full inline-flex justify-between items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search"
                className="flex-1 bg-transparent text-[#777777] text-sm font-hanken font-normal leading-5 focus:outline-none placeholder:text-[#777777]"
              />
              <button
                className="p-4 bg-[#3CA997] hover:bg-[#3FA08F] rounded-[48px] flex items-center justify-center transition-colors"
                aria-label="Search"
              >
                <Search className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Featured Post Hero */}
          {featuredPost && <BlogHero post={featuredPost} />}
        </div>
      </section>

      {/* Section 2: Category Filters */}
      <section className="pt-[97px]">
        <div className="max-w-[1440px] mx-auto px-[160px]">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </section>

      {/* Section 3: Blog Grid */}
      <section className="pt-[97px]">
        <div className="max-w-[1440px] mx-auto px-[156px]">
          <BlogGrid posts={paginatedPosts} />
        </div>
      </section>

      {/* Section 4: Pagination */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-[156px]">
          <BlogPagination
            currentPage={currentPage}
            totalPages={4}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="pb-20">
        <div className="max-w-[1440px] mx-auto px-[164px]">
          <BlogCTA />
        </div>
      </section>

      <Footer />
    </div>
  );
}
