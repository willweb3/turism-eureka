import { cva } from 'class-variance-authority';

export const sliderRootVariants = cva(
  'relative flex items-center select-none touch-none w-80',
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

export const sliderTrackVariants = cva(
  'relative h-2 w-full grow overflow-hidden rounded-full bg-[#F2F6F8] dark:bg-gray-700'
);

export const sliderRangeVariants = cva('absolute h-full bg-[#3CA997]');

export const sliderThumbVariants = cva(
  [
    'block h-6 w-6 rounded-full border border-[#3CA997] bg-white',
    'shadow-[0px_2px_4px_-2px_rgba(16,24,40,0.06)]',
    'transition-transform duration-150',
    'hover:scale-110 active:scale-115',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3CA997] focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ]
);

export const sliderLabelVariants = cva(
  'absolute font-medium text-[#11212D] dark:text-white',
  {
    variants: {
      position: {
        bottom: 'top-8 -translate-x-1/2 text-base tracking-[0.02em]',
        'top-floating': '',
        'bottom-floating': '',
      },
    },
    defaultVariants: {
      position: 'bottom',
    },
  }
);

export const sliderTooltipVariants = cva(
  [
    'absolute left-1/2 -translate-x-1/2',
    'px-3 py-2 bg-white rounded-lg',
    'shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03)]',
    'text-sm font-medium text-[#11212D] leading-[21px] tracking-[0.01em]',
    'pointer-events-none transition-opacity duration-150',
  ],
  {
    variants: {
      position: {
        'top-floating': '-top-11',
        'bottom-floating': 'top-7',
      },
      show: {
        true: 'opacity-100',
        false: 'opacity-0',
      },
    },
    defaultVariants: {
      position: 'top-floating',
      show: false,
    },
  }
);
