import { cva } from 'class-variance-authority';

/**
 * Pagination container variants
 */
export const paginationContainerVariants = cva('flex items-center justify-center', {
  variants: {
    disabled: {
      true: 'opacity-50 pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

/**
 * Pagination list variants (the actual button container)
 */
export const paginationListVariants = cva('flex items-center gap-3');

/**
 * Pagination button variants
 */
export const paginationButtonVariants = cva(
  [
    'flex items-center justify-center',
    'font-hanken text-base font-normal leading-6',
    'rounded-lg',
    'transition-all duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3CA997] focus-visible:ring-offset-2',
  ],
  {
    variants: {
      selected: {
        true: 'bg-[#11212D] text-white shadow-[0px_0px_20px_rgba(0,0,0,0.05)]',
        false: 'bg-white text-[#777777] shadow-[0px_0px_20px_rgba(0,0,0,0.05)]',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'cursor-pointer hover:scale-105 hover:bg-gray-50',
      },
      size: {
        sm: 'w-8 h-8 text-sm',
        md: 'w-11 h-11 text-base',
        lg: 'w-14 h-14 text-lg',
      },
    },
    compoundVariants: [
      {
        selected: true,
        disabled: false,
        className: 'hover:bg-[#0f1d27]',
      },
      {
        disabled: true,
        className: 'hover:scale-100',
      },
    ],
    defaultVariants: {
      selected: false,
      disabled: false,
      size: 'md',
    },
  }
);

/**
 * Ellipsis variants
 */
export const ellipsisVariants = cva(
  'flex items-center justify-center text-[#777777] select-none',
  {
    variants: {
      size: {
        sm: 'w-8 h-8 text-sm',
        md: 'w-11 h-11 text-base',
        lg: 'w-14 h-14 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

/**
 * Compact pagination container variants
 */
export const compactContainerVariants = cva('flex items-center gap-4');

/**
 * Compact pagination text variants
 */
export const compactTextVariants = cva(
  'text-sm text-[#11212D] font-medium select-none',
  {
    variants: {
      disabled: {
        true: 'opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

/**
 * Page size selector container
 */
export const pageSizeContainerVariants = cva(
  'flex items-center gap-3 ml-6 pl-6 border-l border-gray-200'
);

/**
 * Page size selector variants
 */
export const pageSizeSelectVariants = cva([
  'px-3 py-2',
  'bg-white border border-gray-300 rounded-lg',
  'text-sm text-[#11212D] font-medium',
  'cursor-pointer',
  'hover:border-gray-400',
  'focus:outline-none focus:ring-2 focus:ring-[#3CA997] focus:ring-offset-2',
  'transition-colors duration-150',
]);
