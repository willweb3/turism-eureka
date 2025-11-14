'use client';

import React, { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from './Checkbox';
import type { CheckboxProps } from './Checkbox.types';

/**
 * CheckboxCard Props
 *
 * Rich card component with integrated checkbox for selecting options with detailed information.
 */
export interface CheckboxCardProps extends Omit<CheckboxProps, 'className'> {
  /** Card title */
  title: string | React.ReactNode;
  /** Card description */
  description?: string | React.ReactNode;
  /** Icon to display (20x20) */
  icon?: React.ReactNode;
  /** Badge text (e.g., "New", "Popular") */
  badge?: string;
  /** Custom className for the card */
  className?: string;
  /** Custom className for the content area */
  contentClassName?: string;
}

/**
 * CheckboxCard Component
 *
 * A rich card component that wraps a checkbox with title, description, icon, and badge.
 * Perfect for selecting features, add-ons, or options with detailed information.
 *
 * @example
 * ```tsx
 * <CheckboxCard
 *   value="analytics"
 *   title="Advanced Analytics"
 *   description="Track user behavior and conversions"
 *   icon={<BarChart className="w-5 h-5" />}
 *   badge="Popular"
 *   checked={selected.includes('analytics')}
 *   onChange={(checked) => handleFeatureToggle('analytics', checked)}
 * />
 * ```
 */
export const CheckboxCard = forwardRef<HTMLLabelElement, CheckboxCardProps>(
  (
    {
      title,
      description,
      icon,
      badge,
      checked,
      disabled,
      onChange,
      className,
      contentClassName,
      ...checkboxProps
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
      <label
        ref={ref}
        className={cn(
          // Base styles
          'group relative flex items-start gap-4 p-4 rounded-lg transition-all',
          !disabled && 'cursor-pointer',

          // Border and background - default
          'bg-white dark:bg-gray-900',
          'border border-[#CACDD4] dark:border-gray-700',

          // Hover state
          !disabled && !checked && 'hover:bg-[#F2F6F8] dark:hover:bg-gray-800',

          // Selected state
          checked && [
            'border-[#3CA997] dark:border-[#3CA997]',
            'border-[1.5px]',
          ],

          // Focus state
          isFocused && [
            'rounded-xl',
            'border-[#3CA997]',
            'ring-4 ring-[rgba(60,169,151,0.1)]',
          ],

          // Disabled state
          disabled && [
            'bg-[#F2F6F8] dark:bg-gray-800',
            'opacity-60',
            'cursor-not-allowed',
          ],

          className
        )}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon */}
        {icon && (
          <div className="relative w-8 h-8 shrink-0">
            <div
              className={cn(
                'absolute -left-1 -top-1 w-10 h-10 rounded-[28px] flex items-center justify-center transition-colors',
                // Icon background colors
                isHovered || disabled
                  ? 'bg-[#C3EEE8] dark:bg-[#C3EEE8]/20'
                  : 'bg-[#D7F4F0] dark:bg-[#D7F4F0]/20'
              )}
            >
              <div className="w-5 h-5 text-[#11212D] dark:text-white">
                {icon}
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className={cn('flex-1 min-w-0', contentClassName)}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-0.5">
              {/* Title */}
              <div className="flex items-center gap-2">
                <div className="text-base font-medium text-[#11212D] dark:text-white leading-6">
                  {title}
                </div>
                {badge && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#D7F4F0] dark:bg-[#D7F4F0]/20 text-[#3CA997] dark:text-[#52C6BB]">
                    {badge}
                  </span>
                )}
              </div>

              {/* Description */}
              {description && (
                <div className="text-sm text-[#777777] dark:text-gray-400 leading-[21px]">
                  {description}
                </div>
              )}
            </div>

            {/* Checkbox */}
            <Checkbox
              {...checkboxProps}
              checked={checked}
              disabled={disabled}
              onChange={onChange}
              variant="circle"
              size="lg"
              className="shrink-0 mt-0.5"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
        </div>
      </label>
    );
  }
);

CheckboxCard.displayName = 'CheckboxCard';
