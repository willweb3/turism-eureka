'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Edit, Trash2 } from 'lucide-react';
import { QuantitySelector } from './QuantitySelector';
import { useCartStore } from '@/lib/cart/cartStore';
import type { CartItem as CartItemType } from '@/lib/cart/cartTypes';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCartStore();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantityChange = async (newQuantity: number) => {
    if (isUpdating) return;

    setIsUpdating(true);
    try {
      await updateQuantity(item.id, newQuantity);
    } catch (error) {
      console.error('Error updating quantity:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleRemove = async () => {
    if (isUpdating) return;

    setIsUpdating(true);
    try {
      await removeItem(item.id);
    } catch (error) {
      console.error('Error removing item:', error);
      setIsUpdating(false);
    }
  };

  const totalPrice = item.price * item.quantity;

  return (
    <div className="bg-white rounded-3xl p-6 flex gap-4 relative">
      {/* Image */}
      <div className="relative w-[111px] h-[108px] flex-shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover rounded-xl"
          sizes="111px"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Header Row */}
        <div className="flex justify-between items-start">
          {/* Title & Rating */}
          <div className="flex-1 pr-4">
            <h3 className="text-2xl font-bold text-[#11212D] leading-tight font-hanken">
              {item.title}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-lg font-bold text-[#11212D] font-hanken">
                {item.rating.toFixed(1)}
              </span>
              <Star className="w-2.5 h-2.5 fill-[#FFBA33] text-[#FFBA33]" />
              <span className="text-sm text-[#908C8C] font-hanken">
                ({item.reviewCount} reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-[32px] font-bold text-[#11212D] leading-tight font-hanken">
              €{totalPrice}
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="text-base text-[#11212D] leading-[27.2px] space-y-0.5 font-hanken">
          {item.subtitle && <p className="text-[#777777]">{item.subtitle}</p>}
          <p>
            {new Date(item.selectedDate).toLocaleDateString('pt-PT', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p>
            {item.guests.adults} Adult{item.guests.adults > 1 ? 's' : ''}
            {item.guests.children > 0 &&
              `, ${item.guests.children} Child${item.guests.children > 1 ? 'ren' : ''}`}
          </p>
          <p className="text-sm text-[#777777]">
            {item.isRefundable
              ? 'Free cancellation'
              : 'This experience is non-refundable'}
          </p>
        </div>

        {/* Quantity Selector - Absolute Positioned */}
        <div className="absolute right-6 bottom-[121px]">
          <QuantitySelector
            value={item.quantity}
            onChange={handleQuantityChange}
            min={1}
            max={10}
            disabled={isUpdating}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            className="px-4 py-2 rounded-full border border-[#A7ACB3] text-[#777777] text-sm font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 flex items-center gap-2 font-hanken"
            disabled={isUpdating}
          >
            <Edit className="w-5 h-5" />
            Edit
          </button>
          <button
            className="px-4 py-2 rounded-full border border-[#A7ACB3] text-[#777777] text-sm font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 flex items-center gap-2 font-hanken"
            onClick={handleRemove}
            disabled={isUpdating}
          >
            <Trash2 className="w-5 h-5" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
