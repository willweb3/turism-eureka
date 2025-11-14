import { cva } from 'class-variance-authority';

/**
 * Loading Indicator Container Variants
 */
export const loadingContainerVariants = cva('inline-flex items-center justify-center', {
  variants: {
    labelPosition: {
      bottom: 'flex-col gap-4',
      right: 'flex-row gap-3',
    },
  },
  defaultVariants: {
    labelPosition: 'bottom',
  },
});

/**
 * Loading Label Variants
 */
export const loadingLabelVariants = cva('font-normal text-[#777777] dark:text-gray-400 text-center', {
  variants: {
    size: {
      xs: 'text-xs leading-[18px]', // 12px
      sm: 'text-sm leading-[21px]', // 14px
      md: 'text-sm leading-[21px]', // 14px
      lg: 'text-lg leading-[23.40px]', // 18px
      xl: 'text-xl leading-[26px]', // 20px
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

/**
 * Size configurations for loading indicator
 */
export const loadingSizeConfig = {
  xs: {
    size: 24,
    strokeWidth: 3,
    fontSize: 12,
    gap: 12,
  },
  sm: {
    size: 32,
    strokeWidth: 4,
    fontSize: 14,
    gap: 16,
  },
  md: {
    size: 48,
    strokeWidth: 6,
    fontSize: 14,
    gap: 16,
  },
  lg: {
    size: 56,
    strokeWidth: 6,
    fontSize: 18,
    gap: 16,
  },
  xl: {
    size: 64,
    strokeWidth: 8,
    fontSize: 20,
    gap: 20,
  },
} as const;

/**
 * Animation speed configurations
 */
export const speedConfig = {
  fast: 0.8,
  normal: 1,
  slow: 1.5,
} as const;
