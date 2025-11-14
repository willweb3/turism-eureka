'use client';

import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
  disabled = false,
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (value > min && !disabled) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max && !disabled) {
      onChange(value + 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Minus Button */}
      <button
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        className="w-5 h-5 rounded-full border-[1.2px] border-[#777777] flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus className="w-3 h-3 text-[#777777]" strokeWidth={1.2} />
      </button>

      {/* Value Display */}
      <span className="w-[14px] text-center text-base font-medium text-[#11212D]">
        {value}
      </span>

      {/* Plus Button */}
      <button
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        className="w-5 h-5 rounded-full border-[1.2px] border-[#777777] flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className="w-3 h-3 text-[#777777]" strokeWidth={1.2} />
      </button>
    </div>
  );
}
