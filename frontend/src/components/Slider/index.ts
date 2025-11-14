/**
 * Slider Components
 *
 * Range input with single and dual thumb support.
 *
 * @example
 * ```tsx
 * // Single slider
 * <Slider value={50} onChange={setValue} />
 *
 * // Dual slider
 * <Slider type="dual" values={[25, 75]} onChange={setValues} />
 * ```
 */

export { Slider } from './Slider';
export { SliderTooltip } from './SliderTooltip';

export type { SliderProps, SliderTooltipProps, SliderType, LabelPosition } from './Slider.types';

export {
  sliderRootVariants,
  sliderTrackVariants,
  sliderRangeVariants,
  sliderThumbVariants,
  sliderLabelVariants,
  sliderTooltipVariants,
} from './Slider.styles';
