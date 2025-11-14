import { cva } from 'class-variance-authority';

/**
 * List container variants
 *
 * Container for list items with padding
 */
export const listVariants = cva('flex flex-col w-60', {
  // 240px width from Figma
  variants: {
    padding: {
      true: 'p-1', // 4px padding
      false: '',
    },
  },
  defaultVariants: {
    padding: true,
  },
});

/**
 * ListItem variants
 *
 * Individual item styles with states from Figma
 */
export const listItemVariants = cva(
  [
    // Base styles
    'flex items-center gap-3 p-2',
    'text-sm font-normal leading-[21px]',
    'rounded transition-colors',
    'cursor-pointer select-none',
  ],
  {
    variants: {
      state: {
        default: 'text-[#11212D] dark:text-white', // Blue-500
        hover: 'hover:bg-[#F2F6F8] dark:hover:bg-gray-700', // Neutral-50
        focused: 'bg-[#C3EEE8] dark:bg-[#C3EEE8]/20 border border-[#52C6BB]', // Teal-100, Teal-300
        disabled: 'text-gray-400 opacity-50 cursor-not-allowed pointer-events-none',
      },
      showBorder: {
        true: 'border border-[#D6D8DF] dark:border-gray-600', // Neutral-300
        false: '',
      },
      selected: {
        true: 'bg-[#D7F4F0] dark:bg-[#D7F4F0]/20 border border-[#52C6BB]', // Teal-50, Teal-300
        false: '',
      },
    },
    compoundVariants: [
      {
        state: 'hover',
        showBorder: true,
        className: 'hover:border-[#D6D8DF]',
      },
      {
        state: 'disabled',
        className: 'hover:bg-transparent',
      },
    ],
    defaultVariants: {
      state: 'default',
      showBorder: false,
      selected: false,
    },
  }
);

/**
 * ListItem icon variants
 *
 * Leading icon or checkbox sizing
 */
export const listItemIconVariants = cva('shrink-0', {
  variants: {
    size: {
      sm: 'w-4 h-4', // 16px for checkbox
      md: 'w-5 h-5', // 20px for icons
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

/**
 * ListItemGroup title variants
 */
export const listItemGroupTitleVariants = cva([
  'px-2 py-1',
  'text-xs font-semibold uppercase tracking-wider',
  'text-gray-500 dark:text-gray-400',
]);
