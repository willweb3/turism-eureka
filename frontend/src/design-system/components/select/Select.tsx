'use client';

import React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BaseSelectProps, SelectOption } from './select.types';

export interface SelectProps extends BaseSelectProps {
  /** Select options */
  options: SelectOption[];
  /** Selected value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Default value */
  defaultValue?: string;
}

/**
 * Select Component
 *
 * Single-select dropdown component built with Radix UI.
 * Follows Azoreon Design System specifications.
 *
 * @example
 * ```tsx
 * <Select
 *   label="Country"
 *   placeholder="Select a country"
 *   options={countries}
 *   value={selectedCountry}
 *   onChange={setSelectedCountry}
 * />
 * ```
 */
export function Select({
  label,
  placeholder = 'Select an option',
  options,
  value,
  onChange,
  defaultValue,
  leftIcon,
  disabled = false,
  error = false,
  success = false,
  helperText,
  className,
  id,
  name,
  required = false,
}: SelectProps) {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  // Get border classes based on state
  const getBorderClasses = (open: boolean) => {
    if (error) return 'border border-red-500';
    if (success) return 'border border-green-500';
    if (open) return 'border-[1.5px] border-[#3CA997] shadow-[0_0_0_3px_rgba(60,169,151,0.1)]';
    return 'border border-[#BFC3C9] hover:border-[#7B7E83]';
  };

  // Get text color based on state
  const getTextClasses = (hasValue: boolean) => {
    if (disabled) return 'text-[#777777] opacity-50';
    if (error) return 'text-red-500';
    if (success) return 'text-green-500';
    if (!hasValue) return 'text-[#777777]'; // Placeholder
    return 'text-[#11212D]'; // Selected
  };

  // Get icon color based on state
  const getIconClasses = () => {
    if (disabled) return 'text-[#777777] opacity-50';
    if (error) return 'text-red-500';
    if (success) return 'text-green-500';
    return 'text-[#11212D]';
  };

  // Get helper text color
  const getHelperTextClasses = () => {
    if (error) return 'text-red-500';
    if (success) return 'text-green-500';
    return 'text-[#777777]';
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Label */}
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-[#11212D] dark:text-white mb-2"
          style={{ fontSize: '14px', fontWeight: 500 }}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Select Component */}
      <RadixSelect.Root
        value={value}
        onValueChange={onChange}
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
      >
        <RadixSelect.Trigger
          id={selectId}
          className={cn(
            'w-full flex items-center justify-between gap-2',
            'bg-[#F2F6F8] rounded-lg transition-all',
            'font-hanken text-sm font-normal',
            'min-h-[45px] px-3 py-3',
            'focus:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'data-[state=open]:border-[1.5px] data-[state=open]:border-[#3CA997]',
            'data-[state=open]:shadow-[0_0_0_3px_rgba(60,169,151,0.1)]',
            getBorderClasses(false),
            getTextClasses(!!value)
          )}
          style={{ fontSize: '14px', padding: '12px' }}
          aria-label={label || placeholder}
          aria-required={required}
          aria-invalid={error}
        >
          <div className="flex items-center gap-2 flex-1 overflow-hidden">
            {/* Left Icon */}
            {leftIcon && (
              <span className={cn('flex-shrink-0', getIconClasses())} style={{ width: '20px', height: '20px' }}>
                {leftIcon}
              </span>
            )}

            {/* Selected Value or Placeholder */}
            <RadixSelect.Value placeholder={placeholder} />
          </div>

          {/* Chevron Icon */}
          <RadixSelect.Icon className="flex-shrink-0">
            <ChevronDown
              className={cn('transition-transform duration-200', getIconClasses())}
              size={24}
            />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        {/* Dropdown Portal */}
        <RadixSelect.Portal>
          <RadixSelect.Content
            className={cn(
              'bg-white dark:bg-gray-800',
              'border border-[#CACDD4] dark:border-gray-700',
              'rounded-lg',
              'shadow-[0px_4px_24px_rgba(0,0,0,0.08)]',
              'overflow-hidden',
              'z-50',
              'animate-in fade-in-0 zoom-in-95',
              'data-[side=bottom]:slide-in-from-top-2',
              'data-[side=top]:slide-in-from-bottom-2'
            )}
            position="popper"
            sideOffset={4}
          >
            <RadixSelect.Viewport className="p-1 max-h-[280px]">
              {options.map((option) => (
                <RadixSelect.Item
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                  className={cn(
                    'flex items-center justify-between gap-2',
                    'px-3 py-2 rounded-md',
                    'font-hanken text-sm font-normal text-[#11212D] dark:text-white',
                    'cursor-pointer outline-none',
                    'transition-colors duration-100',
                    'hover:bg-[#F2F6F8] dark:hover:bg-gray-700',
                    'focus:bg-[#F2F6F8] dark:focus:bg-gray-700',
                    'data-[state=checked]:bg-[#F2F6F8] dark:data-[state=checked]:bg-gray-700',
                    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent',
                    'select-none'
                  )}
                  style={{ fontSize: '14px', lineHeight: '21px' }}
                >
                  <div className="flex items-center gap-2 flex-1">
                    {option.icon && (
                      <span style={{ width: '20px', height: '20px' }} className="flex-shrink-0">
                        {option.icon}
                      </span>
                    )}
                    <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                  </div>

                  {/* Check Icon for Selected Item */}
                  <RadixSelect.ItemIndicator>
                    <Check className="text-[#3CA997]" size={20} />
                  </RadixSelect.ItemIndicator>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>

      {/* Helper Text */}
      {helperText && (
        <p
          className={cn('mt-2 text-xs', getHelperTextClasses())}
          style={{ fontSize: '12px' }}
          id={`${selectId}-helper`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
