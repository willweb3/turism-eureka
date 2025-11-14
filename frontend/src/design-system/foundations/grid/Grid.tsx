import React from 'react';
import { cn } from '@/lib/utils';

export interface GridProps {
  /** Content to be rendered inside the grid */
  children: React.ReactNode;
  /** Number of columns (mobile, tablet, desktop) */
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  } | number;
  /** Gap between grid items */
  gap?: 'mobile' | 'tablet' | 'desktop' | number;
  /** Additional CSS classes */
  className?: string;
  /** HTML element to render (default: 'div') */
  as?: 'div' | 'section' | 'ul' | 'ol';
}

/**
 * Grid Component
 *
 * Flexible grid system with responsive column configuration.
 * Follows Figma design specs:
 * - Mobile: 4 columns, 16px gutter
 * - Tablet: 8 columns, 32px gutter
 * - Desktop: 12 columns, 32px gutter
 *
 * @example
 * ```tsx
 * // Simple responsive grid
 * <Grid columns={{ xs: 1, md: 2, lg: 3 }}>
 *   <GridItem>Item 1</GridItem>
 *   <GridItem>Item 2</GridItem>
 *   <GridItem>Item 3</GridItem>
 * </Grid>
 *
 * // Fixed columns
 * <Grid columns={4} gap="desktop">
 *   <GridItem>Item 1</GridItem>
 *   <GridItem>Item 2</GridItem>
 * </Grid>
 * ```
 */
export const Grid = React.forwardRef<HTMLElement, GridProps>(
  ({ children, columns = { xs: 1, md: 2, lg: 3 }, gap = 'mobile', className, as: Component = 'div' }, ref) => {
    // Handle gap value
    const getGapClass = () => {
      if (typeof gap === 'number') return `gap-${gap}`;

      const gapMap = {
        mobile: 'gap-4',      // 16px
        tablet: 'gap-8',      // 32px
        desktop: 'gap-8',     // 32px
      };
      return gapMap[gap];
    };

    // Handle columns value
    const getColumnsClass = () => {
      if (typeof columns === 'number') {
        return `grid-cols-${columns}`;
      }

      const classes: string[] = [];
      if (columns.xs) classes.push(`grid-cols-${columns.xs}`);
      if (columns.sm) classes.push(`sm:grid-cols-${columns.sm}`);
      if (columns.md) classes.push(`md:grid-cols-${columns.md}`);
      if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`);
      if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`);
      if (columns['2xl']) classes.push(`2xl:grid-cols-${columns['2xl']}`);

      return classes;
    };

    return (
      <Component
        ref={ref as any}
        className={cn(
          'grid',
          getGapClass(),
          getColumnsClass(),
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

Grid.displayName = 'Grid';
