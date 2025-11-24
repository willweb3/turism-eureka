'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useAuth } from '@/hooks/useAuth';

export default function WishlistsPage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto w-full">
          <Heart className="mx-auto mb-4 text-[#3CA997]" size={48} />
          <h1 className="font-lufga text-3xl md:text-4xl font-bold text-[#11212D] mb-4">
            Your Wishlists
          </h1>
          <p className="font-hanken text-lg text-[#777777] mb-8">
            {isAuthenticated ? (
              <>Save your favorite experiences and accommodations here.</>
            ) : (
              <>
                Save your favorite experiences and accommodations here.
                <br />
                Sign in to start creating your wishlists.
              </>
            )}
          </p>

          {isAuthenticated ? (
            <div className="mt-8 p-12 border border-[#E5E7EB] rounded-lg bg-white">
              <Heart className="mx-auto mb-4 text-[#9CA3AF]" size={32} />
              <p className="text-[#777777] font-hanken mb-4">Your wishlist is empty</p>
              <Link
                href="/search"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#3CA997] hover:bg-[#3CA997]/90 text-white font-hanken font-medium text-base rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Start Adding Favorites
              </Link>
            </div>
          ) : (
            <Link
              href="/auth"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#3CA997] hover:bg-[#3CA997]/90 text-white font-hanken font-medium text-base rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Sign In
            </Link>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
