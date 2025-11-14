'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ReviewCard } from './ReviewCard';
import { LoadingIndicator } from '@/components/LoadingIndicator';
import type { ReviewListProps } from '@/types/custom-components';

/**
 * ReviewList Component
 *
 * List of review cards with optional load more functionality.
 *
 * @example
 * ```tsx
 * <ReviewList
 *   reviews={reviews}
 *   showLoadMore
 *   onLoadMore={fetchMoreReviews}
 *   loading={isLoading}
 * />
 * ```
 */
export function ReviewList({
  reviews,
  showLoadMore = false,
  onLoadMore,
  loading = false,
  className,
}: ReviewListProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      {/* Reviews */}
      <div className="flex flex-col gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>

      {/* Load More Button */}
      {showLoadMore && onLoadMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={onLoadMore}
            disabled={loading}
            className={cn(
              'px-6 py-3 bg-white border-2 border-[#D6D8DF] rounded-full',
              'font-hanken font-medium text-[#11212D]',
              'hover:border-[#3CA997] hover:bg-[#3CA997]/5 transition-all',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'flex items-center gap-2'
            )}
          >
            {loading ? (
              <>
                <LoadingIndicator size="sm" />
                <span>Loading...</span>
              </>
            ) : (
              'Load More Reviews'
            )}
          </button>
        </div>
      )}

      {/* Empty State */}
      {reviews.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-[#777777] font-hanken">No reviews yet.</p>
        </div>
      )}
    </div>
  );
}
