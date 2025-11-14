/**
 * Progress Bar Components
 *
 * Linear and circular progress indicators with customizable styles and animations.
 *
 * @example
 * ```tsx
 * // Linear progress bar
 * <LinearProgressBar value={60} labelPosition="bottom" labelText="5 items missing" />
 *
 * // Circular progress bar
 * <CircularProgressBar value={75} size="medium" label="Users" labelPosition="outside" />
 *
 * // Half-circle progress bar
 * <CircularProgressBar value={40} shape="half-circle" label="Progress" labelPosition="inside" />
 * ```
 */

export { LinearProgressBar } from './LinearProgressBar';
export { CircularProgressBar } from './CircularProgressBar';

export type {
  LinearProgressBarProps,
  CircularProgressBarProps,
  LabelPosition,
  ProgressSize,
  ProgressColor,
  CircularShape,
  CircularLabelPosition,
} from './ProgressBar.types';

export {
  linearContainerVariants,
  linearTrackVariants,
  linearFillVariants,
  linearPercentageVariants,
  linearLabelVariants,
  circularContainerVariants,
  circularPercentageVariants,
  circularLabelVariants,
  circularSizeConfig,
} from './ProgressBar.styles';
