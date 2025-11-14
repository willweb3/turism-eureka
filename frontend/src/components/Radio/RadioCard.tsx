'use client';

import React, { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Radio } from './Radio';
import { Check } from 'lucide-react';
import type { RadioProps } from './Radio.types';

/**
 * RadioCard Props
 *
 * Rich card component with integrated radio button for selecting one option from multiple choices.
 */
export interface RadioCardProps extends Omit<RadioProps, 'className'> {
  /** Card title */
  title: string | React.ReactNode;
  /** Card description */
  description?: string | React.ReactNode;
  /** Icon to display (20x20) */
  icon?: React.ReactNode;
  /** Badge text (e.g., "Popular", "Recommended") */
  badge?: string;
  /** Price to display (string or number) */
  price?: string | number;
  /** List of features to display */
  features?: string[];
  /** Custom className for the card */
  className?: string;
  /** Custom className for the content area */
  contentClassName?: string;
}

/**
 * RadioCard Component
 *
 * A rich card component that wraps a radio button with title, description, icon, badge, price, and features.
 * Perfect for pricing plans, shipping options, or any single-choice selection with detailed information.
 *
 * Must be used within a RadioGroup.
 *
 * @example
 * ```tsx
 * <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
 *   <RadioCard
 *     value="pro"
 *     name="plan"
 *     title="Pro Plan"
 *     description="For professionals and teams"
 *     icon={<Rocket className="w-5 h-5" />}
 *     badge="Popular"
 *     price="$29"
 *     features={['Unlimited projects', 'Priority support']}
 *   />
 * </RadioGroup>
 * ```
 */
export const RadioCard = forwardRef<HTMLLabelElement, RadioCardProps>(
  (
    {
      title,
      description,
      icon,
      badge,
      price,
      features,
      checked,
      disabled,
      value,
      name,
      onChange,
      className,
      contentClassName,
      ...radioProps
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
            <div className="flex-1 space-y-1">
              {/* Title with badge and price */}
              <div className="flex items-baseline gap-2 flex-wrap">
                <div className="text-base font-medium text-[#11212D] dark:text-white leading-6">
                  {title}
                </div>
                {badge && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#D7F4F0] dark:bg-[#D7F4F0]/20 text-[#3CA997] dark:text-[#52C6BB]">
                    {badge}
                  </span>
                )}
                {price && (
                  <div className="ml-auto text-lg font-semibold text-[#11212D] dark:text-white">
                    {typeof price === 'number' ? `$${price}` : price}
                  </div>
                )}
              </div>

              {/* Description */}
              {description && (
                <div className="text-sm text-[#777777] dark:text-gray-400 leading-[21px]">
                  {description}
                </div>
              )}

              {/* Features list */}
              {features && features.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
                    >
                      <Check className="w-4 h-4 text-[#3CA997] dark:text-[#52C6BB] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Radio */}
            <Radio
              {...radioProps}
              value={value}
              name={name}
              checked={checked}
              disabled={disabled}
              onChange={onChange}
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

RadioCard.displayName = 'RadioCard';
