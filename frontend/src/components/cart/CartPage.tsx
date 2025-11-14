'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/lib/cart/cartStore';
import { CartHeader } from './CartHeader';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { OftenBookedTogether } from './OftenBookedTogether';

export function CartPage() {
  const { items, isLoading } = useCartStore();

  // Empty state
  if (!isLoading && items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <div className="max-w-md text-center space-y-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
            <ShoppingCart className="w-12 h-12 text-gray-400" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#11212D] font-lufga">
              Your cart is empty
            </h2>
            <p className="text-[#777777] font-hanken">
              Looks like you haven't added any experiences yet.
              Start exploring the Azores!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/search"
              className="px-6 py-3 bg-[#52C6BB] hover:bg-[#3CA997] text-[#11212D] font-semibold rounded-full transition-colors font-hanken"
            >
              Browse Experiences
            </Link>

            <Link
              href="/"
              className="px-6 py-3 bg-white border border-[#A7ACB3] hover:bg-gray-50 text-[#11212D] font-semibold rounded-full transition-colors font-hanken"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F6F8]">
      <div className="max-w-[1244px] mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-[28px] font-bold text-[#11212D] mb-6 font-lufga">
          Your Cart
        </h1>

        {/* Timer + Remove All */}
        <CartHeader />

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[743px_1fr] gap-4 mt-6">
          {/* Left Column - Cart Items */}
          <div className="flex flex-col gap-[18px]">
            {isLoading ? (
              <CartItemsSkeleton count={2} />
            ) : (
              items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))
            )}
          </div>

          {/* Right Column - Summary Sidebar */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <CartSummary />
          </div>
        </div>

        {/* Often Booked Together Section */}
        <OftenBookedTogether />
      </div>
    </div>
  );
}

// Loading skeleton
function CartItemsSkeleton({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-3xl p-6 animate-pulse"
        >
          <div className="flex gap-4">
            <div className="w-[111px] h-[108px] bg-gray-200 rounded-xl" />
            <div className="flex-1 space-y-3">
              <div className="h-6 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
