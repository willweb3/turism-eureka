/**
 * Chip Components
 * Compact, pill-shaped components for tags, filters, and status indicators
 *
 * @module Chip
 *
 * Includes:
 * - Chip: Individual chip component with 8 color variants
 * - ChipGroup: Grouped chips with truncation and spacing options
 * - Complete TypeScript type definitions
 */

// Components
export { Chip } from './Chip';
export { ChipGroup } from './ChipGroup';

// Types
export type {
  ChipProps,
  ChipVariant,
  ChipSize,
  ChipState,
  ChipContentVariant,
  ChipColorConfig,
  ChipGroupProps,
  ChipGroupItem,
  ChipGroupVariant,
  ChipGroupSpacing,
  ChipGroupDirection,
  SelectableChipGroupProps,
} from './Chip.types';
