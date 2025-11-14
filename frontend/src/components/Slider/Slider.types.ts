/**
 * Slider Types
 */

export type SliderType = 'single' | 'dual' | 'range';
export type LabelPosition = 'none' | 'bottom' | 'top-floating' | 'bottom-floating';

export interface SliderProps {
  /** Slider type */
  type?: SliderType;

  /** Single slider value */
  value?: number;

  /** Dual slider values [min, max] */
  values?: [number, number];

  /** Minimum value */
  min?: number;

  /** Maximum value */
  max?: number;

  /** Step increment */
  step?: number;

  /** Show labels */
  showLabels?: boolean;

  /** Label position */
  labelPosition?: LabelPosition;

  /** Format label function */
  formatLabel?: (value: number) => string;

  /** Slider width */
  width?: string | number;

  /** Track background color */
  trackColor?: string;

  /** Fill color */
  fillColor?: string;

  /** Thumb color */
  thumbColor?: string;

  /** Disabled state */
  disabled?: boolean;

  /** Minimum range between thumbs (dual mode) */
  minRange?: number;

  /** Snap to step */
  snapToStep?: boolean;

  /** On change callback */
  onChange?: (value: number | [number, number]) => void;

  /** On change complete callback */
  onChangeComplete?: (value: number | [number, number]) => void;

  /** ARIA label */
  ariaLabel?: string;

  /** ARIA value text */
  ariaValueText?: string;

  /** ID */
  id?: string;

  /** Class name */
  className?: string;

  /** Style */
  style?: React.CSSProperties;
}

export interface SliderTooltipProps {
  value: string;
  position: 'top-floating' | 'bottom-floating';
  show: boolean;
}
