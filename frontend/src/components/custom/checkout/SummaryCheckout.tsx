'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Input } from '@/design-system/components/inputs';
import type { SummaryCheckoutProps } from '@/types/custom-components';

/**
 * SummaryCheckout Component
 *
 * Sidebar summary for checkout showing items, pricing breakdown, and total.
 * Sticky positioned on desktop for easy reference during checkout.
 *
 * @example
 * ```tsx
 * <SummaryCheckout
 *   items={cartItems}
 *   summary={{ subtotal: 180, serviceFee: 27, total: 207 }}
 *   onApplyPromo={handlePromoCode}
 *   sticky
 * />
 * ```
 */
export function SummaryCheckout({
  items,
  summary,
  currency = '€',
  promoCode,
  onApplyPromo,
  className,
  sticky = true,
}: SummaryCheckoutProps) {
  const [promoInput, setPromoInput] = useState(promoCode || '');
  const [isApplying, setIsApplying] = useState(false);

  const handleApplyPromo = async () => {
    if (!promoInput.trim() || !onApplyPromo) return;

    setIsApplying(true);
    try {
      await onApplyPromo(promoInput);
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <aside
      className={cn(
        'w-full max-w-[473px] bg-white rounded-3xl overflow-hidden shadow-lg',
        'flex flex-col',
        sticky && 'lg:sticky lg:top-24',
        className
      )}
    >
      {items.map((item, index) => (
        <div key={item.id} className="relative">
          {/* Item Image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 473px"
            />
          </div>

          {/* Item Content */}
          <div className="p-6 flex flex-col gap-4">
            {/* Title & Price */}
            <div className="flex flex-col gap-2">
              <h3 className="font-hanken text-xl font-semibold text-[#11212D] leading-[26px]">
                {item.title}
              </h3>

              <div className="flex items-baseline gap-1">
                <span className="font-hanken text-3xl font-bold text-[#11212D] leading-[41.6px]">
                  {currency} {item.price}
                </span>
                <span className="text-sm text-[#777777]">/per person</span>
              </div>
            </div>

            {/* Duration */}
            {item.duration && (
              <>
                <div className="border-t border-[#D6D8DF]" />
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-[#777777] uppercase tracking-wide">
                    Duration
                  </span>
                  <span className="text-lg font-medium text-[#11212D] leading-[23.4px]">
                    {item.duration}
                  </span>
                </div>
              </>
            )}

            {/* Guests */}
            {item.guests && (
              <>
                <div className="border-t border-[#D6D8DF]" />
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-[#777777] uppercase tracking-wide">
                    Guests
                  </span>
                  <span className="text-lg font-medium text-[#11212D] leading-[23.4px]">
                    {item.guests}
                  </span>
                </div>
              </>
            )}

            {/* Summary Breakdown */}
            <div className="border-t border-[#D6D8DF]" />
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#777777] uppercase tracking-wide">
                Summary
              </span>

              <div className="flex flex-col gap-3">
                {/* Subtotal Line */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#333333]">
                    {currency}{item.price} x {item.quantity || 1}{' '}
                    {item.quantity && item.quantity > 1 ? 'days' : 'day'}
                  </span>
                  <span className="text-lg font-semibold text-[#11212D]">
                    {currency}
                    {item.price * (item.quantity || 1)}
                  </span>
                </div>

                {/* Service Fee (only show once for all items) */}
                {index === items.length - 1 && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#333333]">Service fee</span>
                    <span className="text-lg font-semibold text-[#11212D]">
                      {currency}
                      {summary.serviceFee}
                    </span>
                  </div>
                )}

                {/* Discount (if any) */}
                {index === items.length - 1 &&
                  summary.discount &&
                  summary.discount > 0 && (
                    <div className="flex justify-between items-center text-[#3CA997]">
                      <span className="text-sm">Discount</span>
                      <span className="text-lg font-semibold">
                        -{currency}
                        {summary.discount}
                      </span>
                    </div>
                  )}
              </div>
            </div>

            {/* Promo Code Input (only show once) */}
            {index === items.length - 1 && onApplyPromo && (
              <>
                <div className="border-t border-[#D6D8DF]" />
                <div className="flex gap-2">
                  <Input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Promo code"
                    className="flex-1"
                    disabled={isApplying}
                  />
                  <button
                    onClick={handleApplyPromo}
                    disabled={!promoInput.trim() || isApplying}
                    className={cn(
                      'px-4 py-2 bg-[#3CA997] text-white rounded-lg font-medium text-sm',
                      'hover:bg-[#2fa58b] transition-colors',
                      'disabled:opacity-50 disabled:cursor-not-allowed'
                    )}
                  >
                    {isApplying ? 'Applying...' : 'Apply'}
                  </button>
                </div>
              </>
            )}

            {/* Total (only show once) */}
            {index === items.length - 1 && (
              <div className="border-t-2 border-[#D6D8DF] pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-[#333333]">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-[#11212D]">
                    {currency}
                    {summary.total.toFixed(2)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </aside>
  );
}
