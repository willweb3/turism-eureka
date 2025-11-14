import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { DividerProps } from './Divider.types';

/**
 * Divider line styles using CVA
 * Based on Figma specs: 1px solid var(--Neutral-300, #D6D8DF)
 */
const dividerLineVariants = cva('', {
  variants: {
    orientation: {
      horizontal: 'w-full h-px',
      vertical: 'h-full w-px',
    },
    variant: {
      solid: 'border-solid',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    },
    color: {
      neutral: 'border-[#D6D8DF] dark:border-gray-700',
      blue: 'border-blue-300 dark:border-blue-700',
      gray: 'border-gray-300 dark:border-gray-600',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'solid',
    color: 'neutral',
  },
});

/**
 * Container styles for dividers with label or CTA
 */
const dividerContainerVariants = cva('flex items-center', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

/**
 * Label styles
 * Figma specs: Hanken Grotesk, 16px, weight 400, color #11212D
 */
const dividerLabelVariants = cva(
  'text-[#11212D] dark:text-gray-200 font-normal text-base leading-[1.5]',
  {
    variants: {
      orientation: {
        horizontal: 'px-2',
        vertical: 'py-2',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }
);

/**
 * CTA Button styles
 * Figma specs: 8px padding, border-radius 48px, icon 20x20px
 */
const dividerCTAVariants = cva(
  'flex items-center justify-center bg-white dark:bg-gray-800 border border-[#D6D8DF] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer',
  {
    variants: {
      orientation: {
        horizontal: 'mx-2 p-2 rounded-full',
        vertical: 'my-2 p-2 rounded-full',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }
);

/**
 * Content Divider Component
 *
 * A flexible divider component with three variants:
 * 1. Simple - Just a horizontal or vertical line
 * 2. With Label - Line with text in the center
 * 3. With CTA - Line with a clickable button/icon in the center
 *
 * Based on Figma design specifications.
 *
 * @example
 * // Simple divider
 * <Divider />
 *
 * @example
 * // With label
 * <Divider type="with-label" label="or" />
 *
 * @example
 * // With CTA
 * <Divider
 *   type="with-cta"
 *   cta={{
 *     icon: <PlusIcon />,
 *     onClick: () => console.log('clicked'),
 *     ariaLabel: 'Add item'
 *   }}
 * />
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (props, ref) => {
    const {
      type = 'simple',
      orientation = 'horizontal',
      variant = 'solid',
      color = 'neutral',
      className,
      role = 'separator',
      'aria-orientation': ariaOrientation,
      ...restProps
    } = props;

    // Get the appropriate aria-orientation
    const finalAriaOrientation = ariaOrientation || orientation;

    // Simple divider - just a line
    if (type === 'simple') {
      return (
        <div
          ref={ref}
          role={role}
          aria-orientation={finalAriaOrientation}
          className={cn(
            dividerLineVariants({ orientation, variant }),
            orientation === 'horizontal' ? 'border-t' : 'border-l',
            color === 'neutral' && 'border-[#D6D8DF] dark:border-gray-700',
            color === 'blue' && 'border-blue-300 dark:border-blue-700',
            color === 'gray' && 'border-gray-300 dark:border-gray-600',
            className
          )}
          {...restProps}
        />
      );
    }

    // Divider with label
    if (type === 'with-label' && 'label' in props) {
      return (
        <div
          ref={ref}
          role={role}
          aria-orientation={finalAriaOrientation}
          className={cn(dividerContainerVariants({ orientation }), 'gap-2', className)}
          {...restProps}
        >
          <div
            className={cn(
              'flex-1',
              orientation === 'horizontal' ? 'border-t' : 'border-l',
              color === 'neutral' && 'border-[#D6D8DF] dark:border-gray-700',
              color === 'blue' && 'border-blue-300 dark:border-blue-700',
              color === 'gray' && 'border-gray-300 dark:border-gray-600',
              variant === 'dashed' && 'border-dashed',
              variant === 'dotted' && 'border-dotted'
            )}
          />
          <span
            className={dividerLabelVariants({ orientation })}
            role="presentation"
          >
            {props.label}
          </span>
          <div
            className={cn(
              'flex-1',
              orientation === 'horizontal' ? 'border-t' : 'border-l',
              color === 'neutral' && 'border-[#D6D8DF] dark:border-gray-700',
              color === 'blue' && 'border-blue-300 dark:border-blue-700',
              color === 'gray' && 'border-gray-300 dark:border-gray-600',
              variant === 'dashed' && 'border-dashed',
              variant === 'dotted' && 'border-dotted'
            )}
          />
        </div>
      );
    }

    // Divider with CTA
    if (type === 'with-cta' && 'cta' in props) {
      const { icon, onClick, ariaLabel } = props.cta;

      return (
        <div
          ref={ref}
          role={role}
          aria-orientation={finalAriaOrientation}
          className={cn(dividerContainerVariants({ orientation }), 'gap-2', className)}
          {...restProps}
        >
          <div
            className={cn(
              'flex-1',
              orientation === 'horizontal' ? 'border-t' : 'border-l',
              color === 'neutral' && 'border-[#D6D8DF] dark:border-gray-700',
              color === 'blue' && 'border-blue-300 dark:border-blue-700',
              color === 'gray' && 'border-gray-300 dark:border-gray-600',
              variant === 'dashed' && 'border-dashed',
              variant === 'dotted' && 'border-dotted'
            )}
          />
          <button
            type="button"
            onClick={onClick}
            aria-label={ariaLabel}
            className={dividerCTAVariants({ orientation })}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              {icon}
            </div>
          </button>
          <div
            className={cn(
              'flex-1',
              orientation === 'horizontal' ? 'border-t' : 'border-l',
              color === 'neutral' && 'border-[#D6D8DF] dark:border-gray-700',
              color === 'blue' && 'border-blue-300 dark:border-blue-700',
              color === 'gray' && 'border-gray-300 dark:border-gray-600',
              variant === 'dashed' && 'border-dashed',
              variant === 'dotted' && 'border-dotted'
            )}
          />
        </div>
      );
    }

    // Fallback to simple divider
    return (
      <div
        ref={ref}
        role={role}
        aria-orientation={finalAriaOrientation}
        className={cn(
          dividerLineVariants({ orientation, variant }),
          orientation === 'horizontal' ? 'border-t' : 'border-l',
          color === 'neutral' && 'border-[#D6D8DF] dark:border-gray-700',
          color === 'blue' && 'border-blue-300 dark:border-blue-700',
          color === 'gray' && 'border-gray-300 dark:border-gray-600',
          className
        )}
        {...restProps}
      />
    );
  }
);

Divider.displayName = 'Divider';
