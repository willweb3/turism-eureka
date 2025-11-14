/**
 * Loading Indicator Components
 *
 * Circular spinners and overlay components for loading states.
 *
 * @example
 * ```tsx
 * // Basic spinner
 * <LoadingIndicator />
 *
 * // With label
 * <LoadingIndicator size="md" label="Loading..." showLabel />
 *
 * // Fullscreen overlay
 * <LoadingOverlay
 *   show={isLoading}
 *   fullscreen
 *   indicatorProps={{ size: 'lg', label: 'Loading...', showLabel: true }}
 * />
 * ```
 */

export { LoadingIndicator } from './LoadingIndicator';
export { LoadingOverlay } from './LoadingOverlay';

export type {
  LoadingIndicatorProps,
  LoadingOverlayProps,
  LoadingSize,
  LoadingVariant,
  LoadingSpeed,
  LabelPosition,
} from './LoadingIndicator.types';

export {
  loadingContainerVariants,
  loadingLabelVariants,
  loadingSizeConfig,
  speedConfig,
} from './LoadingIndicator.styles';
