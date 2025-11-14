'use client';

import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  // Base styles
  'inline-flex items-center justify-center font-hanken font-medium transition-all',
  {
    variants: {
      variant: {
        dot: 'rounded-full border-2 border-white',
        numeric: 'rounded-[48px]',
      },
      size: {
        small: '',
        large: '',
      },
      color: {
        primary: '',
        success: '',
        warning: '',
        error: '',
        info: '',
        neutral: '',
      },
      standalone: {
        true: 'relative',
        false: 'absolute z-10',
      },
      pulse: {
        true: 'animate-pulse',
        false: '',
      },
    },
    compoundVariants: [
      // Dot Badge - Small
      {
        variant: 'dot',
        size: 'small',
        className: 'w-[6px] h-[6px]',
      },
      // Dot Badge - Large
      {
        variant: 'dot',
        size: 'large',
        className: 'w-[10px] h-[10px]',
      },
      // Numeric Badge - Small
      {
        variant: 'numeric',
        size: 'small',
        className: 'min-w-[16px] max-w-[34px] h-[18px] px-1 text-xs leading-[18px]',
      },
      // Numeric Badge - Large
      {
        variant: 'numeric',
        size: 'large',
        className: 'min-w-[20px] max-w-[40px] h-[22px] px-1.5 text-sm leading-[22px]',
      },
      // Primary Color - Dot
      {
        variant: 'dot',
        color: 'primary',
        className: 'bg-[#3CA997]',
      },
      // Primary Color - Numeric
      {
        variant: 'numeric',
        color: 'primary',
        className: 'bg-[#3CA997] text-white',
      },
      // Success Color - Dot
      {
        variant: 'dot',
        color: 'success',
        className: 'bg-[#22AE51]',
      },
      // Success Color - Numeric
      {
        variant: 'numeric',
        color: 'success',
        className: 'bg-[#22AE51] text-white',
      },
      // Warning Color - Dot
      {
        variant: 'dot',
        color: 'warning',
        className: 'bg-[#F8C521]',
      },
      // Warning Color - Numeric (dark text)
      {
        variant: 'numeric',
        color: 'warning',
        className: 'bg-[#F8C521] text-[#11212D]',
      },
      // Error Color - Dot
      {
        variant: 'dot',
        color: 'error',
        className: 'bg-[#DC2626]',
      },
      // Error Color - Numeric
      {
        variant: 'numeric',
        color: 'error',
        className: 'bg-[#DC2626] text-white',
      },
      // Info Color - Dot
      {
        variant: 'dot',
        color: 'info',
        className: 'bg-[#0E97CF]',
      },
      // Info Color - Numeric
      {
        variant: 'numeric',
        color: 'info',
        className: 'bg-[#0E97CF] text-white',
      },
      // Neutral Color - Dot
      {
        variant: 'dot',
        color: 'neutral',
        className: 'bg-[#868E96]',
      },
      // Neutral Color - Numeric
      {
        variant: 'numeric',
        color: 'neutral',
        className: 'bg-[#868E96] text-white',
      },
    ],
    defaultVariants: {
      variant: 'numeric',
      size: 'small',
      color: 'primary',
      standalone: false,
      pulse: false,
    },
  }
);

const positionClasses = {
  'top-right': '-top-1 -right-1',
  'top-left': '-top-1 -left-1',
  'bottom-right': '-bottom-1 -right-1',
  'bottom-left': '-bottom-1 -left-1',
};

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof badgeVariants> {
  /** Badge content - number for numeric badges */
  count?: number;
  /** Maximum number to display before showing "+" (default: 99) */
  max?: number;
  /** Show badge when count is 0 */
  showZero?: boolean;
  /** Position when badge is attached to an element */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  /** Use dot variant (shorthand) */
  dot?: boolean;
  /** Children element to attach badge to */
  children?: React.ReactNode;
  /** Additional className for badge element */
  badgeClassName?: string;
  /** ARIA label for accessibility */
  ariaLabel?: string;
}

/**
 * Badge Component
 *
 * Badges are small visual indicators used to display counts, status, or notifications.
 * They can be used as standalone elements or attached to other components.
 *
 * Features:
 * - Dot badges (simple circular indicators)
 * - Numeric badges (with counter)
 * - Multiple color variants
 * - Two sizes (small, large)
 * - Flexible positioning
 * - Overflow handling (99+)
 * - Pulse animation
 * - Full accessibility
 *
 * @example
 * ```tsx
 * // Dot badge
 * <Badge dot color="success" />
 *
 * // Numeric badge standalone
 * <Badge count={5} standalone />
 *
 * // Badge attached to element
 * <Badge count={3} position="top-right">
 *   <IconButton>
 *     <Bell />
 *   </IconButton>
 * </Badge>
 *
 * // Badge with pulse animation
 * <Badge count={1} pulse color="error">
 *   <Button>Notifications</Button>
 * </Badge>
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      badgeClassName,
      variant: variantProp,
      size = 'small',
      color = 'primary',
      standalone = false,
      pulse = false,
      count,
      max = 99,
      showZero = false,
      position = 'top-right',
      dot = false,
      children,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    // Determine variant based on dot prop or explicit variant
    const variant = dot ? 'dot' : variantProp || 'numeric';

    // Don't render if count is 0 or undefined and showZero is false
    const shouldRenderNumeric = variant === 'numeric' && (count !== undefined && count !== null) && (count > 0 || showZero);
    const shouldRenderDot = variant === 'dot';

    if (!shouldRenderNumeric && !shouldRenderDot) {
      // If badge shouldn't render but has children, return children only
      return children ? <>{children}</> : null;
    }

    // Format count for display
    const getDisplayCount = () => {
      if (variant === 'dot' || count === undefined || count === null) return '';
      if (count > max) return `${max}+`;
      return count.toString();
    };

    const displayCount = getDisplayCount();

    // Generate ARIA label
    const getAriaLabel = () => {
      if (ariaLabel) return ariaLabel;
      if (variant === 'numeric' && count !== undefined && count !== null) {
        return `${count} notification${count !== 1 ? 's' : ''}`;
      }
      return undefined;
    };

    // Determine if badge is standalone or attached
    const isStandalone = standalone || !children;

    const badgeElement = (
      <span
        ref={ref}
        className={cn(
          badgeVariants({ variant, size, color, standalone: isStandalone, pulse }),
          !isStandalone && positionClasses[position],
          badgeClassName
        )}
        role="status"
        aria-label={getAriaLabel()}
        aria-live="polite"
        {...props}
      >
        {variant === 'numeric' && displayCount}
      </span>
    );

    // If badge has children, wrap them with badge
    if (children) {
      return (
        <span className={cn('relative inline-flex', className)}>
          {children}
          {badgeElement}
        </span>
      );
    }

    // Standalone badge
    return badgeElement;
  }
);

Badge.displayName = 'Badge';
