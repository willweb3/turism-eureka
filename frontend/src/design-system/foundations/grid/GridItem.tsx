import React from 'react';
import { cn } from '@/lib/utils';

export interface GridItemProps {
  /** Content to be rendered inside the grid item */
  children: React.ReactNode;
  /** Column span (number of columns to occupy) */
  span?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  } | number;
  /** Column start position */
  start?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  } | number;
  /** Additional CSS classes */
  className?: string;
  /** HTML element to render (default: 'div') */
  as?: 'div' | 'li' | 'article' | 'section';
}

/**
 * GridItem Component
 *
 * Individual grid item with responsive span and start position controls.
 *
 * @example
 * ```tsx
 * // Span full width on mobile, half on desktop
 * <GridItem span={{ xs: 4, lg: 6 }}>
 *   <Card>Content</Card>
 * </GridItem>
 *
 * // Start at specific column
 * <GridItem span={4} start={3}>
 *   <Card>Offset content</Card>
 * </GridItem>
 *
 * // Span specific columns per breakpoint
 * <GridItem span={{ xs: 4, md: 8, lg: 12 }}>
 *   <Hero />
 * </GridItem>
 * ```
 */
export const GridItem = React.forwardRef<HTMLElement, GridItemProps>(
  ({ children, span, start, className, as: Component = 'div' }, ref) => {
    // Handle span value
    const getSpanClass = () => {
      if (!span) return null;

      if (typeof span === 'number') {
        return `col-span-${span}`;
      }

      const classes: string[] = [];
      if (span.xs) classes.push(`col-span-${span.xs}`);
      if (span.sm) classes.push(`sm:col-span-${span.sm}`);
      if (span.md) classes.push(`md:col-span-${span.md}`);
      if (span.lg) classes.push(`lg:col-span-${span.lg}`);
      if (span.xl) classes.push(`xl:col-span-${span.xl}`);
      if (span['2xl']) classes.push(`2xl:col-span-${span['2xl']}`);

      return classes;
    };

    // Handle start value
    const getStartClass = () => {
      if (!start) return null;

      if (typeof start === 'number') {
        return `col-start-${start}`;
      }

      const classes: string[] = [];
      if (start.xs) classes.push(`col-start-${start.xs}`);
      if (start.sm) classes.push(`sm:col-start-${start.sm}`);
      if (start.md) classes.push(`md:col-start-${start.md}`);
      if (start.lg) classes.push(`lg:col-start-${start.lg}`);
      if (start.xl) classes.push(`xl:col-start-${start.xl}`);
      if (start['2xl']) classes.push(`2xl:col-start-${start['2xl']}`);

      return classes;
    };

    return (
      <Component
        ref={ref as any}
        className={cn(
          getSpanClass(),
          getStartClass(),
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

GridItem.displayName = 'GridItem';
