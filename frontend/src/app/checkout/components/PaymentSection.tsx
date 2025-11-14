'use client';

import { useState } from 'react';
import { CreditCard } from 'lucide-react';
import Image from 'next/image';
import { useCheckoutStore } from '@/stores/checkoutStore';
import { formatCardNumber } from '@/utils/validation';

export default function PaymentSection() {
  const { updateFormData } = useCheckoutStore();
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');

  const handleCardChange = (value: string) => {
    const formatted = formatCardNumber(value);
    setCardNumber(formatted);
    updateFormData({
      payment: { cardNumber: formatted, expiryMonth: '', expiryYear: '', cvv: '' }
    });
  };

  const handleExpiryChange = (value: string) => {
    // Format as MM / YY
    let formatted = value.replace(/\D/g, '');
    if (formatted.length >= 2) {
      formatted = formatted.slice(0, 2) + ' / ' + formatted.slice(2, 4);
    }
    setExpiry(formatted);
  };

  return (
    <div className="p-6 bg-white rounded-3xl space-y-4">
      <h2 className="text-2xl font-bold text-[#11212D] font-hanken">
        Payment
      </h2>

      {/* Payment Icons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-sm text-[#777777] font-hanken">We accept:</div>
          {/* Placeholder for card logos */}
          <div className="flex gap-2">
            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs">
              VISA
            </div>
            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs">
              MC
            </div>
            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs">
              AMEX
            </div>
          </div>
        </div>
        <div className="text-xs text-[#777777] font-hanken">
          Powered by Stripe
        </div>
      </div>

      <div className="flex gap-4 items-end">
        <div className="flex-1 space-y-2">
          <label className="text-sm font-medium text-[#11212D] font-hanken">
            Payment card details
          </label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#777777]" />
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => handleCardChange(e.target.value)}
              placeholder="1234 1234 1234 1234"
              maxLength={19}
              className="w-full p-3 pl-10 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB]"
            />
          </div>
        </div>

        <div className="w-24">
          <input
            type="text"
            value={expiry}
            onChange={(e) => handleExpiryChange(e.target.value)}
            placeholder="mm / yy"
            maxLength={7}
            className="w-full p-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-center text-[#777777] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB]"
          />
        </div>
      </div>
    </div>
  );
}
