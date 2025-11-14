import { cva } from 'class-variance-authority';

export const checkboxVariants = cva(
  'inline-flex items-center justify-center border transition-all cursor-pointer',
  {
    variants: {
      size: {
        sm: 'w-4 h-4',
        md: 'w-[18px] h-[18px]',
        lg: 'w-5 h-5',
      },
      variant: {
        default: 'rounded',
        circle: 'rounded-full',
      },
      state: {
        unchecked: 'bg-transparent border-[#D6D8DF]',
        checked: 'bg-[#3CA997] border-[#3CA997]',
        indeterminate: 'bg-[#3CA997] border-[#3CA997]',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-60',
        false: '',
      },
    },
    compoundVariants: [
      {
        state: 'unchecked',
        disabled: false,
        className: 'hover:border-[#52C6BB] hover:bg-white dark:hover:bg-gray-800',
      },
      {
        state: ['checked', 'indeterminate'],
        disabled: false,
        className: 'hover:bg-[#52C6BB]',
      },
      {
        disabled: false,
        className: 'focus-visible:ring-4 focus-visible:ring-[rgba(60,169,151,0.1)]',
      },
      {
        state: 'unchecked',
        disabled: true,
        className: 'bg-[#F2F6F8] dark:bg-gray-700',
      },
      {
        state: ['checked', 'indeterminate'],
        disabled: true,
        className: 'bg-[#D6D8DF] border-[#D6D8DF] dark:bg-gray-600',
      },
    ],
    defaultVariants: {
      size: 'md',
      variant: 'default',
      state: 'unchecked',
      disabled: false,
    },
  }
);

export const checkboxCheckIconVariants = cva('text-white transition-opacity', {
  variants: {
    size: {
      sm: 'w-3 h-3',
      md: 'w-3.5 h-3.5',
      lg: 'w-4 h-4',
    },
    visible: {
      true: 'opacity-100',
      false: 'opacity-0',
    },
  },
  defaultVariants: {
    size: 'md',
    visible: false,
  },
});

export const checkboxLabelVariants = cva(
  'flex items-start gap-2 cursor-pointer select-none',
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-60',
        false: '',
      },
    },
  }
);
