'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ThumbsUp, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import type { ReviewCardProps } from '@/types/custom-components';

/**
 * ReviewCard Component
 *
 * Individual review card with avatar, rating, comment, and helpful button.
 * Part of the ReviewList component.
 */
export function ReviewCard({
  id,
  author,
  rating,
  date,
  comment,
  helpful,
  images,
  onHelpful,
  className,
  compact = false,
}: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = comment.length > 200;

  const formattedDate =
    typeof date === 'string'
      ? date
      : formatDistanceToNow(new Date(date), { addSuffix: true });

  return (
    <article
      className={cn(
        'p-6 bg-white rounded-2xl border border-[#D6D8DF]',
        'flex flex-col gap-4',
        className
      )}
    >
      {/* Header: Avatar + Name + Rating */}
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-100 flex-shrink-0">
          {author.avatar ? (
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#11212D] font-semibold text-lg">
              {author.name.charAt(0).toUpperCase()}
            </div>
          )}

          {author.isVerified && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#52C6BB] rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white fill-white" />
            </div>
          )}
        </div>

        {/* Name & Date */}
        <div className="flex-1 min-w-0">
          <h4 className="font-hanken text-base font-semibold text-[#11212D]">
            {author.name}
          </h4>
          <p className="text-sm text-[#777777]">{formattedDate}</p>
        </div>

        {/* Rating */}
        <div className="flex gap-0.5 flex-shrink-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-4 h-4',
                i < rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-[#D6D8DF]'
              )}
            />
          ))}
        </div>
      </div>

      {/* Comment */}
      <div className="text-base text-[#333333] leading-6">
        {shouldTruncate && !expanded ? (
          <>
            {comment.slice(0, 200)}...
            <button
              onClick={() => setExpanded(true)}
              className="ml-2 text-[#3CA997] hover:text-[#2fa58b] font-medium transition-colors"
            >
              Read more
            </button>
          </>
        ) : (
          comment
        )}
      </div>

      {/* Review Images */}
      {images && images.length > 0 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer hover:opacity-90 transition"
            >
              <Image src={img} alt={`Review image ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* Helpful Button */}
      {onHelpful && (
        <div className="flex items-center gap-2 pt-2 border-t border-[#E5E7EB]">
          <button
            onClick={onHelpful}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-neutral-50 transition text-sm text-[#777777] hover:text-[#11212D]"
          >
            <ThumbsUp className="w-4 h-4" />
            <span>Helpful</span>
            {helpful !== undefined && helpful > 0 && (
              <span className="font-medium text-[#11212D]">({helpful})</span>
            )}
          </button>
        </div>
      )}
    </article>
  );
}
