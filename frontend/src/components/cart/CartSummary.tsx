'use client';

import { AlertTriangle, Lock, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/cart/cartStore';

export function CartSummary() {
  const { calculateSummary, items } = useCartStore();
  const router = useRouter();
  const summary = calculateSummary();

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const hasNonRefundableItems = items.some((item) => !item.isRefundable);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Summary Card */}
      <div className="bg-white rounded-3xl p-6 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <p className="text-xs font-bold text-[#777777] uppercase leading-5 font-hanken">
              Subtotal
            </p>
            <p className="text-xs text-[#777777] uppercase leading-5 font-hanken">
              ({summary.itemCount} items)
            </p>
          </div>
          <p className="text-[32px] font-semibold text-[#11212D] leading-[41.6px] font-hanken">
            €{Math.round(summary.total)}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <button
            onClick={handleCheckout}
            disabled={items.length === 0}
            className="w-full rounded-full bg-[#52C6BB] hover:bg-[#3CA997] text-[#11212D] font-medium text-base px-6 py-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-hanken"
          >
            Book Now
          </button>
          <p className="text-xs text-[#777777] leading-[18px] font-hanken">
            All taxes and fees included
          </p>
        </div>
      </div>

      {/* Non-refundable Warning */}
      {hasNonRefundableItems && (
        <div className="bg-white rounded-3xl p-6 flex gap-4">
          <div className="w-[27px] h-[27px] flex-shrink-0">
            <AlertTriangle className="w-full h-full text-[#FFBA33]" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium text-[#11212D] leading-6 font-hanken">
              This experience is non-refundable
            </p>
            <p className="text-sm text-[#777777] leading-[21px] font-hanken">
              If you cancel this experience you won't get a refund.
            </p>
          </div>
        </div>
      )}

      {/* Security Badges */}
      <div className="bg-white rounded-3xl p-6 flex items-center justify-center gap-4 text-[#A2A3A4]">
        {/* SSL Encryption */}
        <div className="flex items-center gap-2">
          <Lock className="w-[34px] h-[34px]" />
          <div className="text-[9px] font-bold tracking-[0.9px] leading-[10.8px] uppercase font-hanken">
            SECURE<br />SSL ENCRYPTION
          </div>
        </div>

        {/* Safe Checkout */}
        <div className="flex items-center gap-2">
          <Shield className="w-[34px] h-[34px]" />
          <div className="text-[9px] font-bold tracking-[0.9px] leading-[10.8px] uppercase font-hanken">
            GUARANTEED<br />SAFE CHECKOUT
          </div>
        </div>

        {/* Money Back */}
        <div className="flex items-center gap-2">
          <div className="w-[32px] h-[31px] bg-[#A2A3A4] rounded flex items-center justify-center flex-shrink-0">
            <Lock className="w-4 h-4 text-white" />
          </div>
          <div className="text-[9px] font-bold tracking-[0.9px] leading-[10.8px] uppercase font-hanken">
            MONEY BACK<br />GUARANTEE
          </div>
        </div>
      </div>
    </div>
  );
}
