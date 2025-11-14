import React from 'react';
import { cn } from '@/lib/utils';
import { getHeadingStyle, getTypographyClasses, type HeadingLevel, type HeadingVariant } from './typography.config';

export interface HeadingProps {
  /** Heading level (1-6) */
  level: HeadingLevel;
  /** Style variant */
  variant?: HeadingVariant;
  /** Content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Custom font weight (overrides variant default) */
  weight?: number;
}

/**
 * Heading Component
 *
 * Semantic heading component with predefined styles from design system.
 * Supports H1-H6 with multiple variants (default, alt, xl).
 *
 * @example
 * ```tsx
 * <Heading level={1} variant="xl">
 *   Hero Headline
 * </Heading>
 *
 * <Heading level={2} variant="alt">
 *   Section Title
 * </Heading>
 * ```
 */
export function Heading({ level, variant = 'default', children, className, weight }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const style = getHeadingStyle(level, variant);
  const classes = getTypographyClasses(style);

  return (
    <Tag
      className={cn(
        classes,
        weight && `font-[${weight}]`,
        'text-neutral-900 dark:text-white',
        className
      )}
      style={weight ? { fontWeight: weight } : undefined}
    >
      {children}
    </Tag>
  );
}
