/**
 * Chip Component Type Definitions
 *
 * Type system for Chip and ChipGroup components with support for:
 * - 8 color variants (default, black, teal, error, warning, orange, info, success)
 * - 3 sizes (sm, md, lg)
 * - Content variants (label, icon+label, label+close, icon+label+close)
 * - Removable functionality
 * - Group management with truncation
 */

import React from 'react';

/**
 * Chip Color Variants
 *
 * - default: Neutral/outline style
 * - black: Dark solid background
 * - teal: Primary brand color
 * - error: Red for errors/destructive actions
 * - warning: Yellow for warnings
 * - orange: Orange for notifications
 * - info: Blue for informational messages
 * - success: Green for success states
 */
export type ChipVariant =
  | 'default'
  | 'black'
  | 'teal'
  | 'error'
  | 'warning'
  | 'orange'
  | 'info'
  | 'success';

/**
 * Chip Sizes
 *
 * All sizes use:
 * - 48px border radius (pill shape)
 * - 12px font size
 * - Font weight 300
 * - Hanken Grotesk font
 */
export type ChipSize = 'sm' | 'md' | 'lg';

/**
 * Chip State
 * Used for interactive states
 */
export type ChipState = 'default' | 'hover' | 'focused' | 'pressed' | 'disabled';

/**
 * Chip Content Variant
 * Determines which elements are displayed
 */
export type ChipContentVariant =
  | 'label' // Label only
  | 'icon-label' // Icon + Label
  | 'label-close' // Label + Close button
  | 'icon-label-close'; // Icon + Label + Close button

/**
 * Color Configuration for Each Variant
 * Defines the visual appearance of each color variant
 */
export interface ChipColorConfig {
  variant: ChipVariant;
  backgroundColor: string;
  textColor: string;
  borderColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  focusRingColor?: string;
}

/**
 * Main Chip Component Props
 */
export interface ChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * The chip label text (required)
   */
  label: string;

  /**
   * Color variant
   * @default 'default'
   */
  variant?: ChipVariant;

  /**
   * Size variant
   * @default 'md'
   */
  size?: ChipSize;

  /**
   * Icon to display before the label
   * Can be a React node (e.g., <IconComponent />)
   */
  icon?: React.ReactNode;

  /**
   * Whether the chip can be removed
   * Shows close button when true
   * @default false
   */
  removable?: boolean;

  /**
   * Callback when remove button is clicked
   */
  onRemove?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Callback when chip is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

  /**
   * Whether the chip is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the chip is selected (for selectable chips)
   * @default false
   */
  selected?: boolean;

  /**
   * Current state of the chip
   * @default 'default'
   */
  state?: ChipState;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Unique identifier for the chip (used in groups)
   */
  id?: string;

  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string;
}

/**
 * Chip Group Item
 * Used for managing chips in a group
 */
export interface ChipGroupItem extends Omit<ChipProps, 'size' | 'state'> {
  /**
   * Unique identifier (required for groups)
   */
  id: string;
}

/**
 * Chip Group Variant
 * Controls how chips are displayed in a group
 */
export type ChipGroupVariant =
  | 'default' // Show all chips
  | 'truncated'; // Show max chips with +N counter

/**
 * Chip Group Spacing
 * Controls gap between chips
 */
export type ChipGroupSpacing = 'tight' | 'normal' | 'loose';

/**
 * Chip Group Layout Direction
 */
export type ChipGroupDirection = 'horizontal' | 'vertical';

/**
 * Chip Group Props
 */
export interface ChipGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of chips to display
   */
  chips: ChipGroupItem[];

  /**
   * Size for all chips in the group
   * @default 'md'
   */
  size?: ChipSize;

  /**
   * Variant controlling display behavior
   * @default 'default'
   */
  variant?: ChipGroupVariant;

  /**
   * Maximum number of chips to show before truncating
   * Only applies when variant is 'truncated'
   * @default 3
   */
  max?: number;

  /**
   * Spacing between chips
   * @default 'normal'
   */
  spacing?: ChipGroupSpacing;

  /**
   * Layout direction
   * @default 'horizontal'
   */
  direction?: ChipGroupDirection;

  /**
   * Whether chips wrap to new lines
   * @default true
   */
  wrap?: boolean;

  /**
   * Callback when a chip is removed
   */
  onRemove?: (chipId: string, event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Callback when a chip is clicked
   */
  onClick?: (chipId: string, event: React.MouseEvent<HTMLDivElement>) => void;

  /**
   * Whether to show truncated chips in a tooltip/dropdown
   * @default false
   */
  showTruncatedTooltip?: boolean;

  /**
   * Additional CSS class name
   */
  className?: string;
}

/**
 * Selectable Chip Group Props
 * Extends ChipGroupProps for multi-select functionality
 */
export interface SelectableChipGroupProps extends Omit<ChipGroupProps, 'chips'> {
  /**
   * Array of chips with selection state
   */
  chips: (ChipGroupItem & { selected?: boolean })[];

  /**
   * Currently selected chip IDs
   */
  selectedIds?: string[];

  /**
   * Callback when selection changes
   */
  onSelectionChange?: (selectedIds: string[]) => void;

  /**
   * Whether multiple chips can be selected
   * @default true
   */
  multiSelect?: boolean;
}
