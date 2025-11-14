'use client';

import React, { useState, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { BaseInputProps } from './input.types';

export interface MessageInputProps extends Omit<BaseInputProps, 'state'> {
  /** Number of visible rows */
  rows?: number;
  /** Maximum character length */
  maxLength?: number;
  /** Resize behavior */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  /** Show character counter */
  showCounter?: boolean;
  /** On blur handler */
  onBlur?: () => void;
  /** On focus handler */
  onFocus?: () => void;
  /** State (only default, hover, error for textarea) */
  state?: 'default' | 'error';
}

/**
 * MessageInput Component (Textarea)
 *
 * Multi-line text input for longer content like messages, comments, descriptions.
 * Follows Azoreon Design System specifications with 12px border radius.
 *
 * @example
 * ```tsx
 * <MessageInput
 *   label="Message"
 *   placeholder="Enter your message"
 *   rows={4}
 *   maxLength={500}
 *   showCounter
 * />
 *
 * <MessageInput
 *   label="Description"
 *   state="error"
 *   helperText="Description is required"
 * />
 * ```
 */
export const MessageInput = forwardRef<HTMLTextAreaElement, MessageInputProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      state = 'default',
      disabled = false,
      helperText,
      className,
      rows = 4,
      maxLength,
      resize = 'vertical',
      showCounter = false,
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

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      : state === 'error'
      ? 'error'
      : isFocused
      ? 'focus'
      : 'default';

    // Border styles based on state
    const getBorderClasses = () => {
      switch (currentState) {
        case 'focus':
          return 'border-2 border-[#11212D]'; // Blue-500
        case 'error':
          return 'border border-red-500';
        case 'disabled':
          return 'border border-[#BFC3C9] opacity-50'; // Neutral-500
        default:
          return 'border border-[#BFC3C9] hover:border-[#7B7E83]'; // Neutral-500 -> Neutral-800
      }
    };

    // Text color based on state
    const getTextClasses = () => {
      switch (currentState) {
        case 'error':
          return 'text-red-500';
        case 'disabled':
          return 'text-[#777777] opacity-50';
        default:
          return 'text-[#11212D]'; // Blue-500
      }
    };

    // Helper text color
    const getHelperTextClasses = () => {
      return state === 'error' ? 'text-red-500' : 'text-[#777777]';
    };

    // Resize class
    const getResizeClass = () => {
      switch (resize) {
        case 'none':
          return 'resize-none';
        case 'vertical':
          return 'resize-y';
        case 'horizontal':
          return 'resize-x';
        case 'both':
          return 'resize';
        default:
          return 'resize-y';
      }
    };

    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const characterCount = internalValue.length;
    const isOverLimit = maxLength ? characterCount > maxLength : false;

    return (
      <div className={cn('w-full', className)}>
        {/* Label */}
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-[#11212D] dark:text-white mb-2"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Textarea Container */}
        <div className="relative">
          <textarea
            ref={ref}
            id={textareaId}
            name={name}
            value={internalValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            required={required}
            rows={rows}
            className={cn(
              'w-full rounded-xl bg-[#F2F6F8] transition-all',
              'font-hanken text-sm font-normal',
              'placeholder:text-[#777777]',
              'focus:outline-none',
              'min-h-[106px] p-3',
              getBorderClasses(),
              getTextClasses(),
              getResizeClass()
            )}
            style={{ fontSize: '14px', padding: '12px' }}
            aria-invalid={state === 'error'}
            aria-describedby={helperText ? `${textareaId}-helper` : undefined}
          />
        </div>

        {/* Footer with Helper Text and Character Counter */}
        <div className="mt-2 flex items-center justify-between">
          {/* Helper Text */}
          {helperText && (
            <p
              id={`${textareaId}-helper`}
              className={cn('text-xs', getHelperTextClasses())}
              style={{ fontSize: '12px' }}
            >
              {helperText}
            </p>
          )}

          {/* Character Counter */}
          {showCounter && maxLength && (
            <p
              className={cn(
                'text-xs ml-auto',
                isOverLimit ? 'text-red-500' : 'text-[#777777]'
              )}
              style={{ fontSize: '12px' }}
            >
              {characterCount} / {maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

MessageInput.displayName = 'MessageInput';
