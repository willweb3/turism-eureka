import { cva } from 'class-variance-authority';

/**
 * Tooltip container variants
 *
 * Positioning is handled by Radix UI's Tooltip.Content
 * These styles define the visual appearance
 */
export const tooltipVariants = cva(
  [
    // Base styles from Figma
    'z-50 px-3 py-2',
    'text-[13px] font-normal leading-[1.4] text-white',
    'bg-[#11212D]', // Blue-500 from Figma
    'rounded-lg shadow-lg',
    'max-w-xs',
    // Animations
    'animate-in fade-in-0 zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    // Smooth transitions
    'duration-200',
  ],
  {
    variants: {},
  }
);

/**
 * Tooltip arrow variants
 *
 * 6x6px rotated 45° as per Figma
 * Color matches tooltip background
 */
export const tooltipArrowVariants = cva([
  'fill-[#11212D]', // Blue-500 to match tooltip background
]);

/**
 * Tooltip title styles
 * Used when Supporting Text = true
 */
export const tooltipTitleVariants = cva([
  'text-[13px] font-semibold leading-[1.4]',
  'mb-1',
]);

/**
 * Tooltip content styles
 * Main text content
 */
export const tooltipContentVariants = cva([
  'text-[13px] font-normal leading-[1.4]',
]);
