/**
 * Grid System Configuration
 * Based on Figma design specifications for Azoreon Design System
 *
 * Breakpoints:
 * - Mobile (xs): 320px - 4 columns
 * - Tablet (sm/md): 640px - 8 columns
 * - Laptop (lg): 1024px - 12 columns
 * - Desktop (xl): 1280px - 12 columns
 * - Desktop Large (2xl): 1536px - 12 columns
 */

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface GridBreakpoint {
  /** Breakpoint name */
  name: Breakpoint;
  /** Minimum viewport width in pixels */
  minWidth: number;
  /** Number of columns in the grid */
  columns: number;
  /** Gutter size (gap between columns) in pixels */
  gutter: number;
  /** Maximum content width in pixels */
  contentWidth: number;
}

/**
 * Grid configuration for each breakpoint
 * Values sourced from Figma design specs
 */
export const gridBreakpoints: Record<Breakpoint, GridBreakpoint> = {
  xs: {
    name: 'xs',
    minWidth: 320,
    columns: 4,
    gutter: 16,
    contentWidth: 288,
  },
  sm: {
    name: 'sm',
    minWidth: 640,
    columns: 8,
    gutter: 32,
    contentWidth: 576,
  },
  md: {
    name: 'md',
    minWidth: 640,
    columns: 8,
    gutter: 32,
    contentWidth: 576,
  },
  lg: {
    name: 'lg',
    minWidth: 1024,
    columns: 12,
    gutter: 32,
    contentWidth: 960,
  },
  xl: {
    name: 'xl',
    minWidth: 1280,
    columns: 12,
    gutter: 32,
    contentWidth: 1216,
  },
  '2xl': {
    name: '2xl',
    minWidth: 1536,
    columns: 12,
    gutter: 32,
    contentWidth: 1312,
  },
};

/**
 * Container max-widths for each breakpoint
 */
export const containerMaxWidths: Record<Breakpoint, number> = {
  xs: 288,
  sm: 576,
  md: 576,
  lg: 960,
  xl: 1216,
  '2xl': 1312,
};

/**
 * Get the appropriate grid configuration for a given width
 */
export function getGridConfigForWidth(width: number): GridBreakpoint {
  if (width >= 1536) return gridBreakpoints['2xl'];
  if (width >= 1280) return gridBreakpoints.xl;
  if (width >= 1024) return gridBreakpoints.lg;
  if (width >= 640) return gridBreakpoints.md;
  return gridBreakpoints.xs;
}

/**
 * Get current breakpoint name based on window width
 */
export function getCurrentBreakpoint(width: number): Breakpoint {
  if (width >= 1536) return '2xl';
  if (width >= 1280) return 'xl';
  if (width >= 1024) return 'lg';
  if (width >= 640) return 'md';
  return 'xs';
}

/**
 * Column span utilities
 */
export const columnSpans = {
  full: 12,
  half: 6,
  third: 4,
  quarter: 3,
  twoThirds: 8,
  threeQuarters: 9,
} as const;
