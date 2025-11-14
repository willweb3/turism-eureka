import { cva } from 'class-variance-authority';

/**
 * Linear Progress Bar Variants
 */

export const linearContainerVariants = cva('w-full', {
  variants: {
    labelPosition: {
      none: 'flex items-center gap-3',
      right: 'flex items-center gap-3',
      top: 'flex flex-col gap-2',
      bottom: 'flex flex-col gap-2',
    },
  },
  defaultVariants: {
    labelPosition: 'right',
  },
});

export const linearTrackVariants = cva(
  'bg-[#F2F6F8] dark:bg-gray-700 overflow-hidden flex-1',
  {
    variants: {
      size: {
        small: 'h-1.5 rounded-[3px]', // 6px
        medium: 'h-2 rounded', // 8px
        large: 'h-[9px] rounded-[10px]', // 9px, mais arredondado
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

export const linearFillVariants = cva('h-full transition-all', {
  variants: {
    color: {
      teal: 'bg-[#3CA997]', // Teal-400
      success: 'bg-[#29B268]', // Success-500 / Green-500
      custom: '', // Aplicado via style inline
    },
    size: {
      small: 'rounded-[3px]',
      medium: 'rounded',
      large: 'rounded-[10px]',
    },
    animated: {
      true: 'transition-all ease-out',
      false: '',
    },
  },
  defaultVariants: {
    color: 'teal',
    size: 'medium',
    animated: true,
  },
});

export const linearPercentageVariants = cva(
  'font-normal text-[#11212D] dark:text-white whitespace-nowrap',
  {
    variants: {
      size: {
        small: 'text-xs leading-[18px]', // 12px
        medium: 'text-sm leading-[21px]', // 14px
        large: 'text-sm leading-[21px]', // 14px
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

export const linearLabelVariants = cva('font-normal', {
  variants: {
    size: {
      small: 'text-xs leading-[18px]',
      medium: 'text-xs leading-[18px]',
      large: 'text-xs leading-[18px]',
    },
    state: {
      zero: 'text-[#908C8C]', // Grey-400
      progress: 'text-[#777777]', // Grey-500
      complete: 'text-[#218F51]', // Success-600
    },
  },
  defaultVariants: {
    size: 'medium',
    state: 'progress',
  },
});

/**
 * Circular Progress Bar Variants
 */

export const circularContainerVariants = cva('inline-flex flex-col items-center', {
  variants: {
    labelPosition: {
      none: '',
      inside: '',
      outside: 'gap-3',
    },
  },
  defaultVariants: {
    labelPosition: 'none',
  },
});

export const circularPercentageVariants = cva(
  'font-medium text-[#11212D] dark:text-white',
  {
    variants: {
      size: {
        small: 'text-sm leading-[21px]', // 14px
        medium: 'text-2xl leading-[31.20px]', // 24px
        large: 'text-[32px] leading-[41.60px]', // 32px
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

export const circularLabelVariants = cva('text-[#908C8C] dark:text-gray-400', {
  variants: {
    size: {
      small: 'text-xs font-normal', // 12px
      medium: 'text-xs font-medium', // 12px
      large: 'text-sm font-medium', // 14px
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
    },
  },
  defaultVariants: {
    size: 'medium',
    weight: 'medium',
  },
});

/**
 * Size configurations for circular progress
 */
export const circularSizeConfig = {
  small: {
    diameter: 64,
    strokeWidth: 6,
    viewBox: 64,
  },
  medium: {
    diameter: 160,
    circleSize: 144,
    strokeWidth: 16,
    viewBox: 160,
  },
  large: {
    diameter: 200,
    circleSize: 176,
    strokeWidth: 16,
    viewBox: 200,
  },
} as const;
