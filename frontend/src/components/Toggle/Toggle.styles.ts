import { cva } from 'class-variance-authority';

/**
 * Toggle track (container) variants
 * Based on Figma specs
 */
export const toggleVariants = cva(
  // Base styles - track/container
  'inline-flex items-center rounded-xl overflow-hidden transition-all duration-200 ease-in-out p-0.5',
  {
    variants: {
      size: {
        sm: 'w-9 h-5',      // 36x20px, padding 2px
        md: 'w-11 h-6',     // 44x24px, padding 2px
      },
      checked: {
        true: 'justify-end',       // thumb à direita
        false: 'justify-start',    // thumb à esquerda
      },
      disabled: {
        true: 'cursor-not-allowed opacity-60',
        false: 'cursor-pointer',
      },
      loading: {
        true: 'cursor-wait',
        false: '',
      },
    },
    compoundVariants: [
      // OFF states
      {
        checked: false,
        disabled: false,
        className: 'bg-[#D6D8DF] hover:bg-[#E2E3EA] dark:bg-gray-600 dark:hover:bg-gray-500',
      },
      {
        checked: false,
        disabled: true,
        className: 'bg-[#EFEFF4] dark:bg-gray-700',
      },
      // ON states
      {
        checked: true,
        disabled: false,
        className: 'bg-[#3CA997] hover:bg-[#52C6BB] dark:bg-teal-500 dark:hover:bg-teal-400',
      },
      {
        checked: true,
        disabled: true,
        className: 'bg-[#EFEFF4] dark:bg-gray-700',
      },
    ],
    defaultVariants: {
      size: 'md',
      checked: false,
      disabled: false,
      loading: false,
    },
  }
);

/**
 * Toggle thumb (circular button) variants
 */
export const toggleThumbVariants = cva(
  // Base styles - thumb
  'bg-white rounded-full shadow-sm transition-all duration-200 flex items-center justify-center',
  {
    variants: {
      size: {
        sm: 'w-4 h-4',     // 16x16px
        md: 'w-5 h-5',     // 20x20px
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

/**
 * Toggle focus ring variants
 * Figma spec: 0px 0px 0px 4px rgba(82, 198, 187, 0.10)
 */
export const toggleFocusRingVariants = cva(
  '',
  {
    variants: {
      focused: {
        true: 'ring-4 ring-[rgba(82,198,187,0.10)] dark:ring-teal-400/20',
        false: '',
      },
    },
    defaultVariants: {
      focused: false,
    },
  }
);

/**
 * Toggle label container variants
 */
export const toggleLabelVariants = cva(
  'flex gap-3',
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-60',
        false: 'cursor-pointer',
      },
      orientation: {
        horizontal: 'flex-row items-center',
        vertical: 'flex-col items-start',
      },
    },
    defaultVariants: {
      disabled: false,
      orientation: 'horizontal',
    },
  }
);

/**
 * Color constants from Figma
 */
export const toggleColors = {
  off: {
    default: 'var(--Neutral-300, #D6D8DF)',
    hover: 'var(--Neutral-200, #E2E3EA)',
    disabled: 'var(--Neutral-100, #EFEFF4)',
  },
  on: {
    default: 'var(--Teal-400, #3CA997)',
    hover: 'var(--Teal-300, #52C6BB)',
    disabled: 'var(--Neutral-100, #EFEFF4)',
  },
  thumb: {
    background: 'var(--Commun-White, white)',
    shadow: '0px 1px 2px rgba(16, 24, 40, 0.06)',
  },
  focus: {
    ring: 'rgba(82, 198, 187, 0.10)',
  },
};

/**
 * Animation configurations
 */
export const toggleAnimations = {
  transition: 'all 200ms ease-in-out',
  thumbTransition: 'transform 200ms ease-in-out',
};
