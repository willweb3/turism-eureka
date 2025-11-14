/**
 * Progress Bar Types
 */

/**
 * Label position for linear progress bar
 */
export type LabelPosition = 'none' | 'right' | 'top' | 'bottom';

/**
 * Progress bar size variants
 */
export type ProgressSize = 'small' | 'medium' | 'large';

/**
 * Progress bar color variants
 */
export type ProgressColor = 'teal' | 'success' | 'custom';

/**
 * Circular progress bar shape
 */
export type CircularShape = 'circle' | 'half-circle';

/**
 * Circular progress label position
 */
export type CircularLabelPosition = 'inside' | 'outside' | 'none';

/**
 * Linear Progress Bar Props
 */
export interface LinearProgressBarProps {
  /** Progress value (0-100) */
  value: number;

  /** Visual size variant */
  size?: ProgressSize;

  /** Color variant */
  color?: ProgressColor;

  /** Custom color (hex) when color="custom" */
  customColor?: string;

  /** Show percentage label */
  showPercentage?: boolean;

  /** Label position */
  labelPosition?: LabelPosition;

  /** Label text (e.g., "5 items missing", "Completed") */
  labelText?: string;

  /** Enable smooth animation */
  animated?: boolean;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** ARIA label for accessibility */
  ariaLabel?: string;

  /** ARIA value text for accessibility */
  ariaValueText?: string;

  /** Custom className */
  className?: string;

  /** Custom track (background) color */
  trackColor?: string;
}

/**
 * Circular Progress Bar Props
 */
export interface CircularProgressBarProps {
  /** Progress value (0-100) */
  value: number;

  /** Shape variant */
  shape?: CircularShape;

  /** Visual size variant */
  size?: ProgressSize;

  /** Custom size in pixels */
  customSize?: number;

  /** Custom stroke width in pixels */
  strokeWidth?: number;

  /** Progress color */
  color?: string;

  /** Track (background) color */
  trackColor?: string;

  /** Show percentage in center */
  showPercentage?: boolean;

  /** Label text below/inside */
  label?: string;

  /** Label position */
  labelPosition?: CircularLabelPosition;

  /** Enable smooth animation */
  animated?: boolean;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** ARIA label for accessibility */
  ariaLabel?: string;

  /** Custom className */
  className?: string;
}
