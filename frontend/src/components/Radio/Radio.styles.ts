import { cva } from 'class-variance-authority';

export const radioVariants = cva(
  'inline-flex items-center justify-center border rounded-full transition-all cursor-pointer group',
  {
    variants: {
      size: {
        sm: 'w-4 h-4',
        md: 'w-[18px] h-[18px]',
        lg: 'w-5 h-5',
      },
      checked: {
        true: 'border-[#3CA997]',
        false: 'border-[#D6D8DF] bg-transparent',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-60',
        false: '',
      },
    },
    compoundVariants: [
      {
        checked: false,
        disabled: false,
        className: 'hover:border-[#52C6BB] hover:bg-white dark:hover:bg-gray-800',
      },
      {
        disabled: false,
        className: 'focus-visible:ring-4 focus-visible:ring-[rgba(60,169,151,0.1)]',
      },
      {
        checked: false,
        disabled: true,
        className: 'bg-[#F2F6F8] dark:bg-gray-700',
      },
    ],
    defaultVariants: {
      size: 'md',
      checked: false,
      disabled: false,
    },
  }
);

export const radioDotVariants = cva('rounded-full transition-all bg-[#3CA997]', {
  variants: {
    size: {
      sm: 'w-1.5 h-1.5',
      md: 'w-2 h-2',
      lg: 'w-2 h-2',
    },
    visible: {
      true: 'scale-100 opacity-100',
      false: 'scale-0 opacity-0',
    },
    disabled: {
      true: 'bg-[#D6D8DF] dark:bg-gray-500',
      false: '',
    },
  },
  compoundVariants: [
    {
      visible: true,
      disabled: false,
      className: 'group-hover:bg-[#52C6BB]',
    },
  ],
  defaultVariants: {
    size: 'md',
    visible: false,
    disabled: false,
  },
});

export const radioLabelVariants = cva(
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

export const radioGroupVariants = cva('flex', {
  variants: {
    orientation: {
      vertical: 'flex-col',
      horizontal: 'flex-row flex-wrap',
    },
    spacing: {
      tight: 'gap-2',
      normal: 'gap-3',
      loose: 'gap-4',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    spacing: 'normal',
  },
});
