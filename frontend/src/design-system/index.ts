/**
 * Azoreon Design System
 * Main export file for all design system components and utilities
 */

// Grid System
export { Container, Grid, GridItem } from './foundations/grid';
export type { ContainerProps, GridProps, GridItemProps } from './foundations/grid';

// Foundations
export {
  gridBreakpoints,
  containerMaxWidths,
  getGridConfigForWidth,
  getCurrentBreakpoint,
  columnSpans,
  spacingTokens,
  semanticSpacing,
  getSpacing,
  getSpacingRem,
  getSpacingVar,
  getSpacingScale,
} from './foundations';

export type { Breakpoint, GridBreakpoint, SpacingToken } from './foundations';
