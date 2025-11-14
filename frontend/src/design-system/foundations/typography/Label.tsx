import React from 'react';
import { cn } from '@/lib/utils';
import { getLabelStyle, captionStyle, overlineStyle, getTypographyClasses, type LabelSize } from './typography.config';

export interface LabelProps {
  /** Label size */
  size?: LabelSize;
  /** Content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** HTML element */
  as?: 'label' | 'span' | 'div';
}

/**
 * Label Component
 *
 * Label text for forms and UI elements.
 * Semibold weight, optimized for clarity.
 *
 * @example
 * ```tsx
 * <Label size="l">Email Address</Label>
 * <Label size="s">Optional field</Label>
 * ```
 */
export function Label({ size = 'm', children, className, as: Component = 'label' }: LabelProps) {
  const style = getLabelStyle(size);
  const classes = getTypographyClasses(style);

  return (
    <Component
      className={cn(
        classes,
        'text-neutral-900 dark:text-white',
        className
      )}
    >
      {children}
    </Component>
  );
}

export interface CaptionProps {
  /** Content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** HTML element */
  as?: 'span' | 'div' | 'p';
}

/**
 * Caption Component
 *
 * Small uppercase text for captions, badges, or secondary information.
 * 12px, uppercase, with letter spacing.
 *
 * @example
 * ```tsx
 * <Caption>NEW FEATURE</Caption>
 * <Caption>TRENDING</Caption>
 * ```
 */
export function Caption({ children, className, as: Component = 'span' }: CaptionProps) {
  const classes = getTypographyClasses(captionStyle);

  return (
    <Component
      className={cn(
        classes,
        'text-neutral-600 dark:text-neutral-400',
        className
      )}
    >
      {children}
    </Component>
  );
}

export interface OverlineProps {
  /** Content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** HTML element */
  as?: 'span' | 'div' | 'p';
}

/**
 * Overline Component
 *
 * Very small uppercase text for overlines, tags, or labels.
 * 10px, uppercase, medium weight, increased letter spacing.
 *
 * @example
 * ```tsx
 * <Overline>CATEGORY</Overline>
 * <Overline>SECTION LABEL</Overline>
 * ```
 */
export function Overline({ children, className, as: Component = 'span' }: OverlineProps) {
  const classes = getTypographyClasses(overlineStyle);

  return (
    <Component
      className={cn(
        classes,
        'text-neutral-500 dark:text-neutral-500',
        className
      )}
    >
      {children}
    </Component>
  );
}
