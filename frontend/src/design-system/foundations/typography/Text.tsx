import React from 'react';
import { cn } from '@/lib/utils';
import { getBodyStyle, getTypographyClasses, type BodySize } from './typography.config';

export interface TextProps {
  /** Text size variant */
  size?: BodySize;
  /** Content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** HTML element to render */
  as?: 'p' | 'span' | 'div';
  /** Custom font weight */
  weight?: number;
}

/**
 * Text Component
 *
 * Body text component with predefined sizes from design system.
 * Default is 'Body M' (18px/1.125rem).
 *
 * @example
 * ```tsx
 * <Text size="xl">
 *   Large introductory paragraph
 * </Text>
 *
 * <Text size="s">
 *   Small supporting text
 * </Text>
 * ```
 */
export function Text({ size = 'm', children, className, as: Component = 'p', weight }: TextProps) {
  const style = getBodyStyle(size);
  const classes = getTypographyClasses(style);

  return (
    <Component
      className={cn(
        classes,
        weight && `font-[${weight}]`,
        'text-neutral-800 dark:text-neutral-200',
        className
      )}
      style={weight ? { fontWeight: weight } : undefined}
    >
      {children}
    </Component>
  );
}
