'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import BookingCard from '@/components/bookings/booking-card';
import { Booking } from '@/types/listing';

export default function BookingsPage() {
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/auth?tab=login');
      return;
    }

    if (user) {
      fetchBookings();
    }
  }, [user, authLoading, router]);

  const fetchBookings = async () => {
    try {
      setIsLoading(true);

      // Mock data for testing
      const mockBookings: Booking[] = [
        {
          id: '1',
          listingId: 'exp-1',
          title: 'Explore the sea in Faial',
          category: 'Adventure & Wellness',
          location: 'Faial',
          dateRange: 'Nov 30 - Dec 1',
          price: 280,
          priceUnit: 'Per person',
          imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070',
          status: 'confirmed',
          freeCancellation: true,
          bookingDate: '2024-11-15',
        },
        {
          id: '2',
          listingId: 'exp-2',
          title: 'Whale Watching Adventure',
          category: 'Marine Life',
          location: 'Pico',
          dateRange: 'Dec 5 - Dec 5',
          price: 65,
          priceUnit: 'Per person',
          imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070',
          status: 'pending',
          freeCancellation: true,
          bookingDate: '2024-11-18',
        },
        {
          id: '3',
          listingId: 'exp-3',
          title: 'Hot Springs Tour',
          category: 'Wellness & Relaxation',
          location: 'Sao Miguel',
          dateRange: 'Oct 15 - Oct 15',
          price: 40,
          priceUnit: 'Per person',
          imageUrl: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=2070',
          status: 'completed',
          freeCancellation: false,
          bookingDate: '2024-10-10',
        },
      ];

      await new Promise(resolve => setTimeout(resolve, 500));
      setBookings(mockBookings);
    } catch (err) {
      console.error('Error fetching bookings:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen bg-[#F8F9FA]">
        <Header transparent={false} />
        <main className="container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-6xl mx-auto">
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

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header transparent={false} />

      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-[32px] leading-[41.6px] font-bold text-[#11212D] font-lufga mb-2">
              You have {bookings.length} {bookings.length === 1 ? 'listing' : 'listings'}
            </h1>
            <p className="text-[16px] leading-[24px] text-[#908C8C] font-hanken">
              View and manage all your reservations and upcoming experiences
            </p>
          </div>

          {/* Bookings List */}
          {bookings.length > 0 ? (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#F0F0F0] rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#908C8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-[24px] leading-[31px] font-bold text-[#11212D] font-lufga mb-3">
                  No listings yet
                </h2>
                <p className="text-[16px] leading-[24px] text-[#908C8C] font-hanken mb-6">
                  Start exploring amazing experiences in the Azores.
                </p>
                <button
                  onClick={() => router.push('/search')}
                  className="px-6 py-3 bg-[#52C6BB] text-[#11212D] rounded-[48px] font-hanken text-[16px] leading-[24px] font-medium hover:bg-[#3CA997] transition-all duration-200 active:scale-[0.98]"
                >
                  Explore Experiences
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
