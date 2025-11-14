'use client';

import React, { useState } from 'react';
import {
  ListingCard,
  FAQAccordion,
  ReviewList,
  CTAHero,
  FiltersPanel,
  SummaryCheckout,
} from '@/components/custom';

export default function CustomComponentsDemo() {
  // Filters state
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  const handleFilterChange = (groupId: string, optionId: string) => {
    setFilters((prev) => {
      const groupFilters = prev[groupId] || [];
      const newFilters = groupFilters.includes(optionId)
        ? groupFilters.filter((id) => id !== optionId)
        : [...groupFilters, optionId];
      return { ...prev, [groupId]: newFilters };
    });
  };

  // Sample data
  const listings = [
    {
      id: 'exp-1',
      title: 'Azores: Explore, Recharge & Reconnect',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      price: 45,
      duration: '10-13 November, 2025',
      guests: '1 Adult',
      category: 'experience' as const,
      rating: 4.8,
      reviewCount: 127,
      badge: 'Popular',
    },
    {
      id: 'exp-2',
      title: 'Whale Watching Adventure',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      price: 65,
      duration: '3-4 hours',
      guests: '2-8 Adults',
      category: 'experience' as const,
      rating: 4.9,
      reviewCount: 89,
    },
    {
      id: 'prod-1',
      title: 'Local Wine & Cheese Box',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800',
      price: 35,
      category: 'product' as const,
      rating: 4.7,
      reviewCount: 45,
      badge: 'New',
    },
  ];

  const faqItems = [
    {
      id: 'faq-1',
      question: 'How do I book a trip?',
      answer:
        'You can book a trip by selecting an experience, choosing your dates, and completing the checkout process. Payment is secure through Stripe.',
    },
    {
      id: 'faq-2',
      question: 'What is the cancellation policy?',
      answer:
        'Free cancellation up to 48 hours before the experience starts. After that, a 50% cancellation fee applies.',
    },
    {
      id: 'faq-3',
      question: 'How do promotional codes work?',
      answer:
        'Hosts can share promotional QR codes. When tourists scan them and make a booking, the host earns a commission.',
    },
  ];

  const reviews = [
    {
      id: 'rev-1',
      author: {
        name: 'Maria Silva',
        avatar: 'https://i.pravatar.cc/150?img=1',
        isVerified: true,
      },
      rating: 5,
      date: '2025-10-15',
      comment:
        'Amazing experience! The guide was knowledgeable and friendly. We saw multiple whale species and the boat was comfortable. Highly recommend for anyone visiting the Azores!',
      helpful: 12,
    },
    {
      id: 'rev-2',
      author: {
        name: 'João Costa',
        isVerified: false,
      },
      rating: 4,
      date: '2025-10-10',
      comment:
        'Great tour overall. Weather was perfect and we had good sightings. Would have liked a bit more time on the water though.',
      helpful: 5,
    },
  ];

  const filterGroups = [
    {
      id: 'category',
      label: 'Category',
      type: 'checkbox' as const,
      options: [
        { id: 'experiences', label: 'Experiences', count: 45 },
        { id: 'products', label: 'Products', count: 23 },
        { id: 'events', label: 'Events', count: 12 },
      ],
    },
    {
      id: 'price',
      label: 'Price Range',
      type: 'checkbox' as const,
      options: [
        { id: 'under-50', label: 'Under €50', count: 28 },
        { id: '50-100', label: '€50 - €100', count: 32 },
        { id: 'over-100', label: 'Over €100', count: 20 },
      ],
    },
    {
      id: 'duration',
      label: 'Duration',
      type: 'checkbox' as const,
      options: [
        { id: 'short', label: 'Under 3 hours', count: 18 },
        { id: 'medium', label: '3-6 hours', count: 35 },
        { id: 'long', label: 'Full day', count: 15 },
      ],
    },
  ];

  const checkoutItems = [
    {
      id: 'exp-1',
      title: 'Azores: Explore, Recharge & Reconnect',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      price: 45,
      quantity: 4,
      duration: '10-13 November, 2025',
      guests: '1 Adult',
      category: 'experience' as const,
    },
  ];

  const checkoutSummary = {
    subtotal: 180,
    serviceFee: 27,
    discount: 0,
    total: 207,
  };

  return (
    <div className="max-w-7xl mx-auto space-y-16">
      {/* Hero */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Custom Components
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          AZOREON marketplace-specific components for the tourism platform.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">6</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Components</div>
          <div className="text-xs text-gray-500 mt-1">Ready for production</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">TypeScript</div>
          <div className="text-xs text-gray-500 mt-1">Fully typed</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">WCAG</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Accessible</div>
          <div className="text-xs text-gray-500 mt-1">ARIA compliant</div>
        </div>
      </div>

      {/* 1. Listing Cards */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          1. Listing Cards
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <ListingCard
                key={listing.id}
                {...listing}
                onClick={() => alert(`Clicked: ${listing.title}`)}
                onFavorite={() => alert(`Favorited: ${listing.title}`)}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Code Example
          </h3>
          <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">{`<ListingCard
  title="Azores: Explore, Recharge & Reconnect"
  image="/whale-watching.jpg"
  price={45}
  duration="10-13 November, 2025"
  guests="1 Adult"
  rating={4.8}
  reviewCount={127}
  badge="Popular"
  onClick={() => router.push('/experiences/exp-1')}
/>`}</pre>
        </div>
      </section>

      {/* 2. FAQ Accordion */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          2. FAQ Accordion
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <FAQAccordion items={faqItems} defaultOpen={['faq-1']} />
        </div>
        <div className="mt-4 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Code Example
          </h3>
          <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">{`<FAQAccordion
  items={faqItems}
  defaultOpen={['faq-1']}
  allowMultiple={false}
/>`}</pre>
        </div>
      </section>

      {/* 3. Reviews */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          3. Review Cards
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <ReviewList
            reviews={reviews}
            showLoadMore
            onLoadMore={() => alert('Loading more reviews...')}
          />
        </div>
        <div className="mt-4 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Code Example
          </h3>
          <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">{`<ReviewList
  reviews={reviews}
  showLoadMore
  onLoadMore={fetchMoreReviews}
  loading={isLoading}
/>`}</pre>
        </div>
      </section>

      {/* 4. CTA Hero */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          4. CTA Hero
        </h2>
        <CTAHero
          title="Are you ready to start your adventure?"
          description="Don't wait any longer. Start planning your dream vacation today. Contact us to discuss your travel needs and let us handle the details."
          buttonText="Explore Experiences"
          buttonAction={() => alert('Navigating to experiences...')}
          backgroundImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200"
          backgroundOverlay={0.6}
        />
        <div className="mt-4 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Code Example
          </h3>
          <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">{`<CTAHero
  title="Are you ready to start your adventure?"
  description="Don't wait any longer..."
  buttonText="Explore Experiences"
  buttonAction={() => router.push('/experiences')}
  backgroundImage="/hero.jpg"
  backgroundOverlay={0.6}
/>`}</pre>
        </div>
      </section>

      {/* 5. Filters Panel */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          5. Filters Panel
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="max-w-sm mx-auto">
            <FiltersPanel
              filterGroups={filterGroups}
              selectedFilters={filters}
              onFilterChange={handleFilterChange}
              onApply={() => alert('Applying filters...')}
              onReset={() => setFilters({})}
              resultCount={80}
              variant="sidebar"
            />
          </div>
        </div>
        <div className="mt-4 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Code Example
          </h3>
          <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">{`<FiltersPanel
  filterGroups={filterGroups}
  selectedFilters={filters}
  onFilterChange={handleFilterChange}
  onApply={applyFilters}
  onReset={resetFilters}
  resultCount={80}
  variant="sidebar"
/>`}</pre>
        </div>
      </section>

      {/* 6. Summary Checkout */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          6. Summary Checkout
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="max-w-md mx-auto">
            <SummaryCheckout
              items={checkoutItems}
              summary={checkoutSummary}
              onApplyPromo={(code) => alert(`Applying promo: ${code}`)}
              sticky={false}
            />
          </div>
        </div>
        <div className="mt-4 bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Code Example
          </h3>
          <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">{`<SummaryCheckout
  items={cartItems}
  summary={{
    subtotal: 180,
    serviceFee: 27,
    total: 207
  }}
  onApplyPromo={handlePromoCode}
  sticky
/>`}</pre>
        </div>
      </section>

      {/* Integration Info */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Integration Guide
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                Import Components
              </h3>
              <pre className="text-sm text-blue-800 dark:text-blue-200 bg-blue-100 dark:bg-blue-900/40 p-3 rounded overflow-x-auto">{`import {
  ListingCard,
  FAQAccordion,
  ReviewList,
  CTAHero,
  FiltersPanel,
  SummaryCheckout
} from '@/components/custom';`}</pre>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
                Features
              </h3>
              <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                <li>✓ TypeScript 100%</li>
                <li>✓ Responsive design</li>
                <li>✓ ARIA compliant</li>
                <li>✓ Design System integrated</li>
                <li>✓ Production ready</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
