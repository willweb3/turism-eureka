/**
 * Loading Indicator Types
 */

/**
 * Loading indicator size variants
 */
export type LoadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Loading indicator style variants
 */
export type LoadingVariant = 'simple' | 'spinner';

/**
 * Animation speed presets
 */
export type LoadingSpeed = 'fast' | 'normal' | 'slow';

/**
 * Label position
 */
export type LabelPosition = 'bottom' | 'right';

/**
 * Loading Indicator Props
 */
export interface LoadingIndicatorProps {
  /** Size variant */
  size?: LoadingSize;

  /** Custom size in pixels (overrides size variant) */
  customSize?: number;

  /** Visual style variant */
  variant?: LoadingVariant;

  /** Spinner color (hex) */
  color?: string;

  /** Track (background) color (hex) */
  trackColor?: string;

  /** Label text or element */
  label?: string | React.ReactNode;

  /** Show label */
  showLabel?: boolean;

  /** Label position */
  labelPosition?: LabelPosition;

  /** Animation speed */
  speed?: LoadingSpeed;

  /** Custom animation duration in seconds */
  customDuration?: number;

  /** ARIA label for accessibility */
  ariaLabel?: string;

  /** ARIA role */
  role?: 'status' | 'alert';

  /** Custom className */
  className?: string;

  /** Custom inline styles */
  style?: React.CSSProperties;
}

/**
 * Loading Overlay Props
 */
export interface LoadingOverlayProps {
  /** Show/hide overlay */
  show: boolean;

  /** Fullscreen mode (fixed position) */
  fullscreen?: boolean;

  /** Overlay background color */
  overlayColor?: string;

  /** Overlay opacity (0-1) */
  overlayOpacity?: number;

  /** Loading indicator props */
  indicatorProps?: LoadingIndicatorProps;

  /** Children (custom content instead of default indicator) */
  children?: React.ReactNode;

  /** Custom className */
  className?: string;

  /** z-index for overlay */
  zIndex?: number;
}
