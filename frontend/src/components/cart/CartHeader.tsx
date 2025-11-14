'use client';

import { Info } from 'lucide-react';
import { useCartStore } from '@/lib/cart/cartStore';
import { useCartTimer } from '@/hooks/useCartTimer';

export function CartHeader() {
  const { items, clearCart } = useCartStore();
  const { timeLeft, hasExpired } = useCartTimer(items);

  const handleRemoveAll = async () => {
    if (confirm('Are you sure you want to remove all items from your cart?')) {
      await clearCart();
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="flex justify-between items-center">
      {/* Timer Badge */}
      <div className="flex items-center gap-1.5 bg-[#D7E6F0] text-[#2C4E63] rounded-full px-3 py-1 text-xs font-light font-hanken">
        <Info className="w-3.5 h-3.5" />
        <span>
          {hasExpired
            ? 'Reservation expired'
            : `Your experiences will be reserved for ${timeLeft} minutes`}
        </span>
      </div>

      {/* Remove All Button */}
      <button
        onClick={handleRemoveAll}
        className="px-4 py-2 rounded-full border border-[#A7ACB3] text-[#777777] text-sm font-medium hover:bg-gray-50 transition-colors font-hanken"
      >
        Remove all activity
      </button>
    </div>
  );
}
