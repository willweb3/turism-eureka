/**
 * ChipGroup Component
 *
 * Displays multiple chips in a group with support for:
 * - Flexible layouts (horizontal/vertical)
 * - Truncation with +N counter
 * - Configurable spacing and wrapping
 * - Event propagation for click and remove actions
 *
 * @example
 * ```tsx
 * <ChipGroup chips={chips} spacing="normal" wrap />
 * <ChipGroup chips={chips} variant="truncated" max={5} />
 * ```
 */

'use client';

import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Chip } from './Chip';
import type { ChipGroupProps, ChipGroupItem } from './Chip.types';

/**
 * ChipGroup Container Variants
 */
const chipGroupVariants = cva('flex', {
  variants: {
    direction: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    spacing: {
      tight: 'gap-1',
      normal: 'gap-2',
      loose: 'gap-3',
    },
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
    spacing: 'normal',
    wrap: true,
  },
});

/**
 * Counter Chip for Truncated Variant
 * Shows +N for hidden chips
 */
const CounterChip = React.forwardRef<
  HTMLDivElement,
  {
    count: number;
    onClick?: () => void;
    size?: 'sm' | 'md' | 'lg';
  }
>(({ count, onClick, size = 'md' }, ref) => {
  return (
    <div
      ref={ref}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        'inline-flex items-center justify-center rounded-[48px] font-hanken font-light text-xs transition-all duration-200',
        'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700',
        onClick && 'cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700',
        size === 'sm' && 'px-3 py-1 min-h-[24px]',
        size === 'md' && 'px-3 py-1 min-h-[28px]',
        size === 'lg' && 'px-4 py-1.5 min-h-[32px]'
      )}
    >
      +{count}
    </div>
  );
});

CounterChip.displayName = 'CounterChip';

/**
 * Tooltip Component for Truncated Chips
 * Shows hidden chips in a dropdown
 */
const TruncatedTooltip = ({
  chips,
  size,
  onRemove,
  onClick,
  onClose,
}: {
  chips: ChipGroupItem[];
  size?: 'sm' | 'md' | 'lg';
  onRemove?: (chipId: string, event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: (chipId: string, event: React.MouseEvent<HTMLDivElement>) => void;
  onClose: () => void;
}) => {
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Tooltip */}
      <div className="absolute top-full left-0 mt-2 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 min-w-[200px]">
        <div className="flex flex-col gap-2">
          {chips.map((chip) => (
            <Chip
              key={chip.id}
              {...chip}
              size={size}
              onRemove={
                onRemove
                  ? (event) => {
                      onRemove(chip.id, event);
                      onClose();
                    }
                  : chip.onRemove
              }
              onClick={
                onClick
                  ? (event) => {
                      onClick(chip.id, event);
                      onClose();
                    }
                  : chip.onClick
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

/**
 * ChipGroup Component
 */
export const ChipGroup = React.forwardRef<HTMLDivElement, ChipGroupProps>(
  (
    {
      chips,
      size = 'md',
      variant = 'default',
      max = 3,
      spacing = 'normal',
      direction = 'horizontal',
      wrap = true,
      onRemove,
      onClick,
      showTruncatedTooltip = false,
      className,
      ...props
    },
    ref
  ) => {
    const [showTooltip, setShowTooltip] = useState(false);

    // Determine which chips to show
    const shouldTruncate = variant === 'truncated' && max && chips.length > max;
    const visibleChips = shouldTruncate ? chips.slice(0, max - 1) : chips;
    const hiddenChips = shouldTruncate ? chips.slice(max - 1) : [];
    const hiddenCount = hiddenChips.length;

    // Handle chip remove
    const handleRemove = (chipId: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onRemove) {
        onRemove(chipId, event);
      }
    };

    // Handle chip click
    const handleClick = (chipId: string) => (event: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        onClick(chipId, event);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          chipGroupVariants({
            direction,
            spacing,
            wrap: wrap && variant !== 'truncated',
          }),
          'relative',
          className
        )}
        role="group"
        aria-label="Chip group"
        {...props}
      >
        {/* Visible chips */}
        {visibleChips.map((chip) => (
          <Chip
            key={chip.id}
            {...chip}
            size={size}
            onRemove={onRemove ? handleRemove(chip.id) : chip.onRemove}
            onClick={onClick ? handleClick(chip.id) : chip.onClick}
          />
        ))}

        {/* Counter chip for truncated variant */}
        {shouldTruncate && hiddenCount > 0 && (
          <div className="relative">
            <CounterChip
              count={hiddenCount}
              size={size}
              onClick={
                showTruncatedTooltip ? () => setShowTooltip(!showTooltip) : undefined
              }
            />

            {/* Tooltip with hidden chips */}
            {showTruncatedTooltip && showTooltip && (
              <TruncatedTooltip
                chips={hiddenChips}
                size={size}
                onRemove={onRemove}
                onClick={onClick}
                onClose={() => setShowTooltip(false)}
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

ChipGroup.displayName = 'ChipGroup';
