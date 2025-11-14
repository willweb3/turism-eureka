/**
 * Chip Component
 *
 * Compact, pill-shaped component for tags, filters, and status indicators.
 *
 * Features:
 * - 8 color variants (default, black, teal, error, warning, orange, info, success)
 * - 3 sizes with consistent styling (sm, md, lg)
 * - Optional icon and remove button
 * - Pill shape (48px border radius)
 * - 12px font size, weight 300, Hanken Grotesk
 * - Full accessibility support
 *
 * @example
 * ```tsx
 * <Chip label="Tag" variant="teal" />
 * <Chip label="Filter" icon={<FilterIcon />} removable onRemove={handleRemove} />
 * <Chip label="Status" variant="success" />
 * ```
 */

'use client';

import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { ChipProps } from './Chip.types';

/**
 * Chip Variants using CVA
 *
 * Defines styling for:
 * - 8 color variants with specific background/text/border colors
 * - 3 sizes with consistent padding and spacing
 * - Interactive states (hover, focus, disabled)
 */
const chipVariants = cva(
  // Base styles - pill shape, font, transitions
  'inline-flex items-center justify-center rounded-[48px] font-hanken font-light text-xs transition-all duration-200 select-none focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        // Default: Neutral outline style
        default:
          'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-gray-400',

        // Black: Dark solid background
        black:
          'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-0 hover:bg-gray-800 dark:hover:bg-gray-200 focus:ring-gray-600',

        // Teal: Primary brand color
        teal:
          'bg-[#3CA997] text-white border-0 hover:bg-[#35967F] focus:ring-[#3CA997]',

        // Error: Red for errors/destructive actions
        error:
          'bg-[#DC2626] text-white border-0 hover:bg-[#B91C1C] focus:ring-[#DC2626]',

        // Warning: Yellow for warnings
        warning:
          'bg-[#F8C521] text-gray-900 border-0 hover:bg-[#E5B41F] focus:ring-[#F8C521]',

        // Orange: Orange for notifications
        orange:
          'bg-[#EA580C] text-white border-0 hover:bg-[#C2410C] focus:ring-[#EA580C]',

        // Info: Blue for informational messages
        info:
          'bg-[#0E97CF] text-white border-0 hover:bg-[#0C7AA3] focus:ring-[#0E97CF]',

        // Success: Green for success states
        success:
          'bg-[#22AE51] text-white border-0 hover:bg-[#1D9444] focus:ring-[#22AE51]',
      },
      size: {
        // Small: Compact size
        sm: 'px-3 py-1 gap-1 min-h-[24px]',
        // Medium: Default size - 12px horizontal, 4px vertical padding
        md: 'px-3 py-1 gap-1 min-h-[28px]',
        // Large: More prominent
        lg: 'px-4 py-1.5 gap-2 min-h-[32px]',
      },
      state: {
        default: '',
        hover: 'shadow-sm',
        focused: '',
        pressed: 'scale-95',
        disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
      },
      clickable: {
        true: 'cursor-pointer',
        false: 'cursor-default',
      },
      selected: {
        true: 'ring-2 ring-offset-2',
        false: '',
      },
    },
    compoundVariants: [
      // Selected state with different ring colors per variant
      {
        variant: 'teal',
        selected: true,
        class: 'ring-[#3CA997]',
      },
      {
        variant: 'error',
        selected: true,
        class: 'ring-[#DC2626]',
      },
      {
        variant: 'success',
        selected: true,
        class: 'ring-[#22AE51]',
      },
      {
        variant: 'info',
        selected: true,
        class: 'ring-[#0E97CF]',
      },
      {
        variant: 'warning',
        selected: true,
        class: 'ring-[#F8C521]',
      },
      {
        variant: 'orange',
        selected: true,
        class: 'ring-[#EA580C]',
      },
      {
        variant: 'black',
        selected: true,
        class: 'ring-gray-900 dark:ring-gray-100',
      },
      {
        variant: 'default',
        selected: true,
        class: 'ring-gray-400',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      state: 'default',
      clickable: false,
      selected: false,
    },
  }
);

/**
 * Icon Container Variants
 * Sizes for icon based on chip size
 */
const iconVariants = cva('flex-shrink-0', {
  variants: {
    size: {
      sm: 'w-3 h-3',
      md: 'w-3.5 h-3.5',
      lg: 'w-4 h-4',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

/**
 * Remove Button Variants
 * Styling for the close button
 */
const removeButtonVariants = cva(
  'flex-shrink-0 rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-white',
  {
    variants: {
      size: {
        sm: 'w-3 h-3 p-0',
        md: 'w-3.5 h-3.5 p-0',
        lg: 'w-4 h-4 p-0',
      },
      variant: {
        default: 'hover:bg-gray-200 dark:hover:bg-gray-700',
        black: 'hover:bg-gray-700 dark:hover:bg-gray-300',
        teal: 'hover:bg-[#35967F]',
        error: 'hover:bg-[#B91C1C]',
        warning: 'hover:bg-[#E5B41F]',
        orange: 'hover:bg-[#C2410C]',
        info: 'hover:bg-[#0C7AA3]',
        success: 'hover:bg-[#1D9444]',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

/**
 * X Icon Component
 * Used for remove button
 */
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 14 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" />
    </svg>
  );
}

/**
 * Chip Component
 */
export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      label,
      variant = 'default',
      size = 'md',
      icon,
      removable = false,
      onRemove,
      onClick,
      disabled = false,
      selected = false,
      state = 'default',
      className,
      id,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const [internalState, setInternalState] = useState<ChipProps['state']>(state);

    // Determine if chip is clickable
    const isClickable = Boolean(onClick) && !disabled;

    // Handle chip click
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      if (onClick) {
        onClick(event);
      }
    };

    // Handle remove button click
    const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation(); // Prevent chip onClick from firing
      if (onRemove && !disabled) {
        onRemove(event);
      }
    };

    // Handle keyboard interactions
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        if (onClick) {
          onClick(event as any);
        }
      }
    };

    // Determine final state
    const finalState = disabled ? 'disabled' : internalState || state;

    return (
      <div
        ref={ref}
        id={id}
        role={isClickable ? 'button' : undefined}
        tabIndex={isClickable && !disabled ? 0 : undefined}
        aria-label={ariaLabel || label}
        aria-disabled={disabled}
        className={cn(
          chipVariants({
            variant,
            size,
            state: finalState,
            clickable: isClickable,
            selected,
          }),
          className
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => !disabled && setInternalState('hover')}
        onMouseLeave={() => !disabled && setInternalState('default')}
        onMouseDown={() => !disabled && setInternalState('pressed')}
        onMouseUp={() => !disabled && setInternalState('hover')}
        onFocus={() => !disabled && setInternalState('focused')}
        onBlur={() => !disabled && setInternalState('default')}
        {...props}
      >
        {/* Icon */}
        {icon && (
          <span className={iconVariants({ size })} aria-hidden="true">
            {icon}
          </span>
        )}

        {/* Label */}
        <span className="truncate">{label}</span>

        {/* Remove Button */}
        {removable && (
          <button
            type="button"
            onClick={handleRemove}
            disabled={disabled}
            aria-label={`Remove ${label}`}
            className={removeButtonVariants({ size, variant })}
          >
            <XIcon className="w-full h-full" />
          </button>
        )}
      </div>
    );
  }
);

Chip.displayName = 'Chip';
