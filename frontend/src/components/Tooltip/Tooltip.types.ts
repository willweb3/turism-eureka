/**
 * Tooltip Types
 */

/**
 * Tooltip placement positions
 * Determines where the tooltip appears relative to the trigger element
 */
export type TooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'right';

/**
 * Tooltip Props
 *
 * Small informative pop-ups that appear on hover or focus.
 * Use for providing context without cluttering the UI.
 */
export interface TooltipProps {
  /** Content to display in the tooltip */
  content: React.ReactNode;

  /** Optional title (Supporting Text = true in Figma) */
  title?: string;

  /** Element that triggers the tooltip */
  children: React.ReactElement;

  /** Placement of the tooltip relative to trigger */
  placement?: TooltipPlacement;

  /** Show arrow pointing to trigger */
  showArrow?: boolean;

  /** Delay in ms before showing tooltip */
  delay?: number;

  /** Disable the tooltip */
  disabled?: boolean;

  /** Custom className for tooltip container */
  className?: string;

  /** Custom className for content area */
  contentClassName?: string;
}
