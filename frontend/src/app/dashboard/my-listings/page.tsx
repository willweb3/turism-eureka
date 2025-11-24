'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import ListingCard from '@/components/listings/listing-card';
import { Listing } from '@/types/listing';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function MyListingsPage() {
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth();
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Redirect if not authenticated
    if (!authLoading && !user) {
      router.push('/auth?tab=login');
      return;
    }

    // Fetch listings if authenticated
    if (user) {
      fetchListings();
    }
  }, [user, authLoading, router]);

  const fetchListings = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Mock data for testing - Replace with Supabase later
      const mockListings: Listing[] = [
        {
          id: '1',
          title: 'Whale Watching Adventure',
          category: 'Boat Tours',
          location: 'Pico',
          dateRange: 'Year-round',
          price: 65,
          priceUnit: 'per person',
          imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070',
          status: 'confirmed',
          freeCancelation: true,
          statusMessage: undefined,
        },
        {
          id: '2',
          title: 'Wine Tasting Experience',
          category: 'Wine & Food',
          location: 'Terceira',
          dateRange: 'Available daily',
          price: 45,
          priceUnit: 'per person',
          imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070',
          status: 'pending_approval',
          freeCancelation: true,
          statusMessage: 'Your listing is under review. We will notify you soon.',
        },
        {
          id: '3',
          title: 'Hiking Sete Cidades',
          category: 'Hiking',
          location: 'Sao Miguel',
          dateRange: 'Mar - Oct',
          price: 35,
          priceUnit: 'per person',
          imageUrl: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2073',
          status: 'draft',
          freeCancelation: false,
          statusMessage: undefined,
        },
        {
          id: '4',
          title: 'Canyoning Adventure',
          category: 'Adventure',
          location: 'Flores',
          dateRange: 'Apr - Sep',
          price: 85,
          priceUnit: 'per person',
          imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
          status: 'awaiting_payment',
          freeCancelation: true,
          statusMessage: undefined,
        },
        {
          id: '5',
          title: 'Hot Springs Tour',
          category: 'Wellness',
          location: 'Sao Miguel',
          dateRange: 'Year-round',
          price: 40,
          priceUnit: 'per person',
          imageUrl: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=2070',
          status: 'error',
          freeCancelation: true,
          statusMessage: 'Please update your payment information',
        },
        {
          id: '6',
          title: 'Sunset Sailing',
          category: 'Boat Tours',
          location: 'Faial',
          dateRange: 'Jun - Sep',
          price: 75,
          priceUnit: 'per person',
          imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070',
          status: 'closed',
          freeCancelation: false,
          statusMessage: undefined,
        },
      ];

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      setListings(mockListings);

      // TODO: Replace with real Supabase query
      // const supabase = createClientComponentClient();
      // const { data, error: fetchError } = await supabase
      //   .from('listings')
      //   .select('*')
      //   .eq('user_id', user?.id)
      //   .order('created_at', { ascending: false });
    } catch (err) {
      console.error('Error fetching listings:', err);
      setError('Failed to load listings. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading state while checking auth
  if (authLoading || (isLoading && !error)) {
    return (
      <div className="min-h-screen bg-[#F8F9FA]">
        <Header transparent={false} />
        <main className="container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Loading skeleton */}
            <div className="animate-pulse space-y-6">
              <div className="h-10 bg-gray-200 rounded w-64"></div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-48 bg-gray-200 rounded-[16px]"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Don't render if not authenticated (will redirect)
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header transparent={false} />

      <main className="container mx-auto px-4 pt-32 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-[32px] leading-[41.6px] font-bold text-[#11212D] font-lufga mb-2">
              You have {listings.length} {listings.length === 1 ? 'listing' : 'listings'}
            </h1>
            <p className="text-[16px] leading-[24px] text-[#908C8C] font-hanken">
              Manage your experiences and track their performance
            </p>
          </div>

          {/* Error State */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-[14px] text-red-800 font-hanken">{error}</p>
              </div>
              <button
                onClick={fetchListings}
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg text-[14px] font-hanken hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Empty State */}
          {!error && listings.length === 0 && (
            <div className="text-center py-16 px-4">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#F0F0F0] rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-[#908C8C]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h2 className="text-[24px] leading-[31px] font-bold text-[#11212D] font-lufga mb-3">
                  No listings yet
                </h2>
                <p className="text-[16px] leading-[24px] text-[#908C8C] font-hanken mb-6">
                  Start sharing your amazing experiences with travelers from around the world.
                </p>
                <button
                  onClick={() => router.push('/create-listing')}
                  className="px-6 py-3 bg-[#52C6BB] text-[#11212D] rounded-[48px] font-hanken text-[16px] leading-[24px] font-medium hover:bg-[#3CA997] transition-all duration-200 active:scale-[0.98]"
                >
                  Create Your First Listing
                </button>
              </div>
            </div>
          )}

          {/* Listings Grid */}
          {!error && listings.length > 0 && (
            <div className="space-y-4">
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
