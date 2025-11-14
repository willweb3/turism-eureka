'use client';

import React, { forwardRef, useState } from 'react';
import { cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar } from './Avatar';
import type { AvatarGroupProps, AvatarGroupItem } from './Avatar.types';

/**
 * AvatarGroup container style variants
 */
const avatarGroupVariants = cva(
  // Base styles
  'flex items-center',
  {
    variants: {
      spacing: {
        tight: '-space-x-2',
        normal: '-space-x-1',
        loose: 'space-x-0',
      },
      direction: {
        left: 'flex-row-reverse',
        right: 'flex-row',
      },
    },
    defaultVariants: {
      spacing: 'normal',
      direction: 'right',
    },
  }
);

/**
 * Counter/badge style for +N indicator
 */
const counterVariants = cva(
  'inline-flex items-center justify-center rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 font-hanken font-medium text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors',
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
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

/**
 * Get z-index for avatar based on position
 * First avatar should have highest z-index
 */
function getAvatarZIndex(index: number, total: number): number {
  return total - index;
}

/**
 * AvatarGroup Component
 *
 * Groups multiple avatars together with optional truncation, tooltips, and dropdown.
 * Avatars overlap with white borders creating a stacked effect.
 *
 * Features:
 * - Multiple display variants (default, truncated, dropdown)
 * - Configurable spacing/overlap
 * - Optional tooltips on hover
 * - +N counter for hidden avatars
 * - Expandable dropdown list
 * - Proper z-index stacking
 * - Full accessibility support
 *
 * @example
 * ```tsx
 * // Basic group
 * <AvatarGroup
 *   avatars={[
 *     { id: '1', name: 'John Doe', src: '...' },
 *     { id: '2', name: 'Jane Smith', initials: 'JS' },
 *     { id: '3', name: 'Bob Wilson' },
 *   ]}
 * />
 *
 * // Truncated with max
 * <AvatarGroup
 *   avatars={users}
 *   max={5}
 *   variant="truncated"
 *   onShowMore={() => console.log('Show more clicked')}
 * />
 *
 * // With tooltips
 * <AvatarGroup
 *   avatars={team}
 *   showTooltips
 *   size="lg"
 * />
 *
 * // Dropdown variant
 * <AvatarGroup
 *   avatars={members}
 *   variant="dropdown"
 *   max={3}
 * />
 * ```
 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      avatars,
      size = 'md',
      max,
      showTooltips = false,
      variant = 'default',
      spacing = 'normal',
      direction = 'right',
      onShowMore,
      className,
      ...props
    },
    ref
  ) => {
    const [hoveredAvatar, setHoveredAvatar] = useState<string | null>(null);
    const [showDropdown, setShowDropdown] = useState(false);

    // Determine which avatars to show
    const shouldTruncate = variant === 'truncated' && max && avatars.length > max;
    const shouldShowDropdown = variant === 'dropdown' && max && avatars.length > max;

    // Visible avatars (leave space for counter if truncating)
    const visibleCount = shouldTruncate || shouldShowDropdown ? Math.max(max - 1, 1) : avatars.length;
    const visibleAvatars = avatars.slice(0, visibleCount);
    const hiddenCount = avatars.length - visibleCount;

    // Handle counter click
    const handleCounterClick = () => {
      if (variant === 'dropdown') {
        setShowDropdown(!showDropdown);
      } else if (onShowMore) {
        onShowMore();
      }
    };

    return (
      <div ref={ref} className={cn('relative inline-flex', className)} {...props}>
        {/* Avatar Stack */}
        <div className={cn(avatarGroupVariants({ spacing, direction }))}>
          {visibleAvatars.map((avatar, index) => {
            const avatarKey = avatar.id;
            const isHovered = hoveredAvatar === avatarKey;

            return (
              <div
                key={avatarKey}
                className="relative"
                style={{ zIndex: getAvatarZIndex(index, visibleAvatars.length + 1) }}
                onMouseEnter={() => showTooltips && setHoveredAvatar(avatarKey)}
                onMouseLeave={() => showTooltips && setHoveredAvatar(null)}
              >
                <Avatar
                  {...avatar}
                  size={size}
                  className={cn(
                    'border-2 border-white dark:border-gray-800',
                    avatar.className
                  )}
                />

                {/* Tooltip */}
                {showTooltips && isHovered && avatar.name && (
                  <div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap pointer-events-none z-50"
                    role="tooltip"
                  >
                    {avatar.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Counter (+N) */}
          {(shouldTruncate || shouldShowDropdown) && hiddenCount > 0 && (
            <div
              className={cn(counterVariants({ size }))}
              style={{ zIndex: 0 }}
              onClick={handleCounterClick}
              role="button"
              tabIndex={0}
              aria-label={`${hiddenCount} more ${hiddenCount === 1 ? 'person' : 'people'}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCounterClick();
                }
              }}
            >
              +{hiddenCount}
            </div>
          )}
        </div>

        {/* Dropdown List */}
        {shouldShowDropdown && showDropdown && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                All Members ({avatars.length})
              </span>
              <button
                onClick={() => setShowDropdown(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Close"
              >
                <ChevronDown size={16} className="rotate-180" />
              </button>
            </div>

            {/* List */}
            <div className="py-2">
              {avatars.map((avatar) => (
                <div
                  key={avatar.id}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                  onClick={() => avatar.onClick?.()}
                >
                  <Avatar {...avatar} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {avatar.name || avatar.alt || 'Unknown User'}
                    </p>
                    {avatar.showStatus && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                        {avatar.status || 'offline'}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dropdown backdrop (click outside to close) */}
        {shouldShowDropdown && showDropdown && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowDropdown(false)}
            aria-hidden="true"
          />
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
