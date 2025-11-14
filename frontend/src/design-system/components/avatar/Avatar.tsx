'use client';

import React, { forwardRef, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { User } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { AvatarProps, AvatarSize, AvatarStatus } from './Avatar.types';

/**
 * Avatar component style variants using CVA
 */
const avatarVariants = cva(
  // Base styles
  'relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 font-hanken font-medium select-none transition-all',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-[10px]',
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
        xl: 'h-14 w-14 text-lg',
        '2xl': 'h-16 w-16 text-xl',
      },
      state: {
        default: '',
        hover: 'ring-2 ring-gray-300 dark:ring-gray-600',
        focused: 'ring-2 ring-[#3CA997] ring-offset-2',
      },
      interactive: {
        true: 'cursor-pointer hover:opacity-90',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
      interactive: false,
    },
  }
);

/**
 * Status indicator style variants
 */
const statusIndicatorVariants = cva(
  // Base styles
  'absolute rounded-full border-2 border-white dark:border-gray-800',
  {
    variants: {
      size: {
        xs: 'h-1.5 w-1.5 bottom-0 right-0',
        sm: 'h-2 w-2 bottom-0 right-0',
        md: 'h-2.5 w-2.5 bottom-0 right-0',
        lg: 'h-3 w-3 bottom-0.5 right-0.5',
        xl: 'h-3.5 w-3.5 bottom-0.5 right-0.5',
        '2xl': 'h-4 w-4 bottom-1 right-1',
      },
      status: {
        online: 'bg-[#22AE51]',
        offline: 'bg-[#868E96]',
        away: 'bg-[#F8C521]',
        busy: 'bg-[#DC2626]',
      },
    },
    defaultVariants: {
      size: 'md',
      status: 'offline',
    },
  }
);

/**
 * Generate initials from name
 */
function getInitials(name: string): string {
  if (!name) return '';

  const parts = name.trim().split(' ');
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Generate background color from name (deterministic)
 */
function getColorFromName(name: string): string {
  if (!name) return '#868E96';

  const colors = [
    '#3CA997', // Teal
    '#0E97CF', // Blue
    '#7C3AED', // Purple
    '#DC2626', // Red
    '#EA580C', // Orange
    '#16A34A', // Green
    '#CA8A04', // Yellow
    '#DB2777', // Pink
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

/**
 * Get icon size based on avatar size
 */
function getIconSize(size: AvatarSize): number {
  const sizeMap: Record<AvatarSize, number> = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
    '2xl': 32,
  };
  return sizeMap[size];
}

/**
 * Avatar Component
 *
 * Displays user avatars with support for images, initials, placeholders, and status indicators.
 * Fully accessible and supports various sizes and interactive states.
 *
 * Features:
 * - Image display with automatic fallback
 * - Initials generation and display
 * - Placeholder icon when no image/initials
 * - Status indicator (online, offline, away, busy)
 * - 6 size variants (xs to 2xl)
 * - Interactive states (hover, focus)
 * - Full accessibility support
 * - Dark mode compatible
 *
 * @example
 * ```tsx
 * // Avatar with image
 * <Avatar src="https://example.com/avatar.jpg" alt="John Doe" />
 *
 * // Avatar with initials
 * <Avatar name="John Doe" />
 * <Avatar initials="JD" backgroundColor="#3CA997" />
 *
 * // Avatar with status
 * <Avatar src="..." showStatus status="online" />
 *
 * // Interactive avatar
 * <Avatar name="Jane Smith" onClick={() => console.log('clicked')} />
 *
 * // Different sizes
 * <Avatar name="User" size="xs" />
 * <Avatar name="User" size="2xl" />
 * ```
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      initials: initialsProp,
      backgroundColor,
      textColor = 'white',
      showStatus = false,
      status = 'offline',
      showPlaceholder = true,
      size = 'md',
      state: stateProp,
      onClick,
      className,
      name,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false);
    const [internalState, setInternalState] = useState<'default' | 'hover' | 'focused'>('default');

    // Use prop state if provided, otherwise use internal state
    const state = stateProp || internalState;

    // Determine if avatar is interactive
    const isInteractive = !!onClick;

    // Generate initials from name if not provided
    const initials = initialsProp || (name ? getInitials(name) : '');

    // Generate background color from name if not provided
    const bgColor = backgroundColor || (name || initials ? getColorFromName(name || initials) : '#868E96');

    // Determine what to render
    const shouldShowImage = src && !imageError;
    const shouldShowInitials = !shouldShowImage && initials;
    const shouldShowPlaceholder = !shouldShowImage && !shouldShowInitials && showPlaceholder;

    // Accessibility
    const ariaLabel = name || alt || (initials ? `Avatar with initials ${initials}` : 'User avatar');

    return (
      <div
        ref={ref}
        className={cn(
          avatarVariants({ size, state, interactive: isInteractive }),
          className
        )}
        onClick={onClick}
        onMouseEnter={() => isInteractive && setInternalState('hover')}
        onMouseLeave={() => isInteractive && setInternalState('default')}
        onFocus={() => isInteractive && setInternalState('focused')}
        onBlur={() => isInteractive && setInternalState('default')}
        tabIndex={isInteractive ? 0 : undefined}
        role={isInteractive ? 'button' : undefined}
        aria-label={ariaLabel}
        {...props}
      >
        {/* Image */}
        {shouldShowImage && (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        )}

        {/* Initials */}
        {shouldShowInitials && (
          <span
            className="flex h-full w-full items-center justify-center"
            style={{
              backgroundColor: bgColor,
              color: textColor,
            }}
          >
            {initials}
          </span>
        )}

        {/* Placeholder Icon */}
        {shouldShowPlaceholder && (
          <User
            size={getIconSize(size)}
            className="text-gray-400 dark:text-gray-500"
            aria-hidden="true"
          />
        )}

        {/* Status Indicator */}
        {showStatus && (
          <span
            className={cn(statusIndicatorVariants({ size, status }))}
            aria-label={`Status: ${status}`}
            role="status"
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

// Export utilities for external use
export { getInitials, getColorFromName };
