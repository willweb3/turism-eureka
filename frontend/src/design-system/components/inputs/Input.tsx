'use client';

import React, { useState, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { BaseInputProps } from './input.types';

export interface InputProps extends BaseInputProps {
  /** Left icon */
  leftIcon?: React.ReactNode;
  /** Right icon */
  rightIcon?: React.ReactNode;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  /** Max length */
  maxLength?: number;
  /** On blur handler */
  onBlur?: () => void;
  /** On focus handler */
  onFocus?: () => void;
}

/**
 * Input Component
 *
 * Text input component with multiple states, icons, and validation.
 * Follows Azoreon Design System specifications.
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   placeholder="Enter your email"
 *   leftIcon={<Mail size={20} />}
 *   type="email"
 * />
 *
 * <Input
 *   label="Password"
 *   type="password"
 *   state="error"
 *   helperText="Password is required"
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      leftIcon,
      rightIcon,
      state = 'default',
      disabled = false,
      helperText,
      className,
      type = 'text',
      maxLength,
      onBlur,
      onFocus,
      id,
      name,
      required = false,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(value || '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);
      onChange?.(newValue);
    };

    const handleFocus = () => {
      setIsFocused(true);
      onFocus?.();
    };

    const handleBlur = () => {
      setIsFocused(false);
      onBlur?.();
    };

    // Determine current state for styling
    const currentState = disabled
      ? 'disabled'
      : state !== 'default'
      ? state
      : isFocused
      ? 'focus'
      : internalValue
      ? 'filled'
      : 'default';

    // Border styles based on state
    const getBorderClasses = () => {
      switch (currentState) {
        case 'focus':
          return 'border-2 border-[#11212D]'; // Blue-500, 2px
        case 'error':
          return 'border border-red-500';
        case 'success':
          return 'border border-green-500';
        case 'disabled':
          return 'border border-[#BFC3C9] opacity-50'; // Neutral-500
        case 'filled':
          return 'border border-[#BFC3C9]'; // Neutral-500
        default:
          return 'border border-[#BFC3C9] hover:border-[#7B7E83]'; // Neutral-500 -> Neutral-800
      }
    };

    // Text color based on state
    const getTextClasses = () => {
      switch (currentState) {
        case 'error':
          return 'text-red-500';
        case 'success':
          return 'text-green-500';
        case 'disabled':
          return 'text-[#777777] opacity-50'; // Grey-500
        case 'focus':
        case 'filled':
          return 'text-[#11212D]'; // Blue-500
        default:
          return 'text-[#11212D]';
      }
    };

    // Icon color based on state
    const getIconClasses = () => {
      switch (currentState) {
        case 'error':
          return 'text-red-500';
        case 'success':
          return 'text-green-500';
        case 'disabled':
          return 'text-[#777777] opacity-50';
        case 'focus':
        case 'filled':
          return 'text-[#11212D]';
        default:
          return 'text-[#777777]'; // Grey-500
      }
    };

    // Helper text color
    const getHelperTextClasses = () => {
      switch (state) {
        case 'error':
          return 'text-red-500';
        case 'success':
          return 'text-green-500';
        default:
          return 'text-[#777777]'; // Grey-500
      }
    };

    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={cn('w-full', className)}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[#11212D] dark:text-white mb-2"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div
              className={cn(
                'absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none',
                'transition-colors',
                getIconClasses()
              )}
              style={{ width: '20px', height: '20px' }}
            >
              {leftIcon}
            </div>
          )}

          {/* Input Field */}
          <input
            ref={ref}
            id={inputId}
            name={name}
            type={type}
            value={internalValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            required={required}
            className={cn(
              'w-full rounded-lg bg-[#F2F6F8] transition-all',
              'font-hanken text-sm font-normal',
              'placeholder:text-[#777777]',
              'focus:outline-none',
              'min-h-[45px]',
              getBorderClasses(),
              getTextClasses(),
              leftIcon ? 'pl-11' : 'pl-3',
              rightIcon ? 'pr-11' : 'pr-3',
              'py-3'
            )}
            style={{ fontSize: '14px', padding: '12px' }}
            aria-invalid={state === 'error'}
            aria-describedby={helperText ? `${inputId}-helper` : undefined}
          />

          {/* Right Icon */}
          {rightIcon && (
            <div
              className={cn(
                'absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none',
                'transition-colors',
                getIconClasses()
              )}
              style={{ width: '24px', height: '24px' }}
            >
              {rightIcon}
            </div>
          )}
        </div>

        {/* Helper Text */}
        {helperText && (
          <p
            id={`${inputId}-helper`}
            className={cn('mt-2 text-xs', getHelperTextClasses())}
            style={{ fontSize: '12px' }}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
