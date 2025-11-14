'use client';

import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LoadingSpinner } from './LoadingSpinner';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center font-hanken font-semibold transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary: [
          'bg-[#3CA997] text-white',
          'hover:bg-[#13948A]',
          'active:bg-[#10827A]',
          'focus:ring-[#3CA997]',
          'disabled:opacity-40',
        ],
        secondary: [
          'bg-transparent text-[#11212D] border border-[#11212D]',
          'hover:bg-[#F2F6F8]',
          'active:bg-[#E9ECEF]',
          'focus:ring-[#11212D]',
          'disabled:opacity-40',
        ],
        tertiary: [
          'bg-white text-[#11212D]',
          'hover:bg-[#F2F6F8]',
          'active:bg-[#E9ECEF]',
          'focus:ring-[#11212D]',
          'disabled:opacity-40',
        ],
        quaternary: [
          'bg-[#11212D] text-white',
          'hover:bg-black',
          'active:bg-black active:opacity-90',
          'focus:ring-white',
          'disabled:opacity-40',
        ],
        destructive: [
          'bg-[#DC2626] text-white',
          'hover:bg-[#B91C1C]',
          'active:bg-[#991B1B]',
          'focus:ring-[#DC2626]',
          'disabled:opacity-40',
        ],
        text: [
          'bg-transparent text-[#11212D]',
          'hover:underline',
          'active:text-black',
          'focus:ring-[#11212D]',
          'disabled:opacity-40 disabled:no-underline',
        ],
      },
      size: {
        small: 'h-9 px-2.5 py-2.5 text-sm rounded-[32px] gap-2',
        medium: 'h-[46px] px-3 py-3 text-base rounded-[40px] gap-2',
        large: 'h-14 px-4 py-4 text-lg rounded-[48px] gap-2',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
      iconOnly: {
        true: 'p-0',
        false: '',
      },
    },
    compoundVariants: [
      // Icon only buttons should be circular
      {
        iconOnly: true,
        size: 'small',
        className: 'w-9 h-9 rounded-full',
      },
      {
        iconOnly: true,
        size: 'medium',
        className: 'w-[46px] h-[46px] rounded-full',
      },
      {
        iconOnly: true,
        size: 'large',
        className: 'w-14 h-14 rounded-full',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      fullWidth: false,
      iconOnly: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Button content */
  children?: React.ReactNode;
  /** Left icon */
  leftIcon?: React.ReactNode;
  /** Right icon */
  rightIcon?: React.ReactNode;
  /** Loading state */
  loading?: boolean;
  /** Icon only mode (circular button) */
  iconOnly?: boolean;
  /** As link */
  as?: 'button' | 'a';
  /** Href when as="a" */
  href?: string;
}

/**
 * Button Component
 *
 * Versatile button component with multiple variants, sizes, and states.
 * Follows Azoreon Design System specifications.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="medium">
 *   Click me
 * </Button>
 *
 * <Button variant="secondary" leftIcon={<Mail size={20} />}>
 *   Send Email
 * </Button>
 *
 * <Button variant="destructive" loading>
 *   Deleting...
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      iconOnly,
      children,
      leftIcon,
      rightIcon,
      loading = false,
      disabled = false,
      as = 'button',
      href,
      ...props
    },
    ref
  ) => {
    const Component = as === 'a' ? 'a' : 'button';

    // Icon size based on button size
    const getIconSize = () => {
      if (size === 'small') return 16;
      if (size === 'large') return 24;
      return 20;
    };

    // Spinner color based on variant
    const getSpinnerColor = () => {
      if (variant === 'secondary' || variant === 'tertiary' || variant === 'text') {
        return 'text-[#11212D]';
      }
      return 'text-white';
    };

    const isDisabled = disabled || loading;

    const buttonContent = (
      <>
        {loading && !iconOnly && (
          <LoadingSpinner size={getIconSize()} className={getSpinnerColor()} />
        )}
        {!loading && leftIcon && !iconOnly && (
          <span style={{ width: getIconSize(), height: getIconSize() }} className="flex-shrink-0">
            {leftIcon}
          </span>
        )}
        {iconOnly ? (
          loading ? (
            <LoadingSpinner size={getIconSize()} className={getSpinnerColor()} />
          ) : (
            leftIcon || children
          )
        ) : (
          <span className={cn(loading && 'opacity-0')}>{children}</span>
        )}
        {!loading && rightIcon && !iconOnly && (
          <span style={{ width: getIconSize(), height: getIconSize() }} className="flex-shrink-0">
            {rightIcon}
          </span>
        )}
      </>
    );

    if (as === 'a' && href) {
      return (
        <a
          href={href}
          className={cn(buttonVariants({ variant, size, fullWidth, iconOnly }), className)}
          aria-disabled={isDisabled}
          {...(props as any)}
        >
          {buttonContent}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={cn(buttonVariants({ variant, size, fullWidth, iconOnly }), className)}
        aria-busy={loading}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';
