'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BaseSelectProps, SelectOption } from './select.types';
import * as Checkbox from '@radix-ui/react-checkbox';

export interface MultiSelectProps extends BaseSelectProps {
  /** Select options */
  options: SelectOption[];
  /** Selected values */
  value?: string[];
  /** Change handler */
  onChange?: (value: string[]) => void;
  /** Default values */
  defaultValue?: string[];
  /** Maximum selections allowed */
  maxSelections?: number;
  /** Display mode for selected items */
  displayMode?: 'badges' | 'count';
  /** Show select all option */
  showSelectAll?: boolean;
  /** Show clear all button */
  showClearAll?: boolean;
}

/**
 * MultiSelect Component
 *
 * Multi-select dropdown with checkboxes.
 * Allows selecting multiple options and displays them as badges or count.
 *
 * @example
 * ```tsx
 * <MultiSelect
 *   label="Tags"
 *   placeholder="Select tags"
 *   options={tags}
 *   value={selectedTags}
 *   onChange={setSelectedTags}
 *   displayMode="badges"
 * />
 * ```
 */
export function MultiSelect({
  label,
  placeholder = 'Select options',
  options,
  value = [],
  onChange,
  defaultValue = [],
  maxSelections,
  displayMode = 'badges',
  showSelectAll = false,
  showClearAll = true,
  leftIcon,
  disabled = false,
  error = false,
  success = false,
  helperText,
  className,
  id,
  name,
  required = false,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>(value || defaultValue);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectId = id || `multiselect-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValues(value);
    }
  }, [value]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = (optionValue: string) => {
    let newValues: string[];

    if (selectedValues.includes(optionValue)) {
      newValues = selectedValues.filter((v) => v !== optionValue);
    } else {
      if (maxSelections && selectedValues.length >= maxSelections) {
        return; // Max selections reached
      }
      newValues = [...selectedValues, optionValue];
    }

    setSelectedValues(newValues);
    onChange?.(newValues);
  };

  const handleSelectAll = () => {
    const allValues = options.filter((opt) => !opt.disabled).map((opt) => opt.value);
    setSelectedValues(allValues);
    onChange?.(allValues);
  };

  const handleClearAll = () => {
    setSelectedValues([]);
    onChange?.([]);
  };

  const handleRemoveBadge = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newValues = selectedValues.filter((v) => v !== optionValue);
    setSelectedValues(newValues);
    onChange?.(newValues);
  };

  // Get selected option labels
  const getSelectedLabels = () => {
    return options.filter((opt) => selectedValues.includes(opt.value));
  };

  // Get border classes based on state
  const getBorderClasses = () => {
    if (error) return 'border border-red-500';
    if (success) return 'border border-green-500';
    if (isOpen) return 'border-[1.5px] border-[#3CA997] shadow-[0_0_0_3px_rgba(60,169,151,0.1)]';
    return 'border border-[#BFC3C9] hover:border-[#7B7E83]';
  };

  const getTextClasses = () => {
    if (disabled) return 'text-[#777777] opacity-50';
    if (error) return 'text-red-500';
    if (success) return 'text-green-500';
    if (selectedValues.length === 0) return 'text-[#777777]';
    return 'text-[#11212D]';
  };

  const getIconClasses = () => {
    if (disabled) return 'text-[#777777] opacity-50';
    if (error) return 'text-red-500';
    if (success) return 'text-green-500';
    return 'text-[#11212D]';
  };

  return (
    <div className={cn('w-full', className)} ref={containerRef}>
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

      {/* Trigger */}
      <button
        type="button"
        id={selectId}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          'w-full flex items-center justify-between gap-2',
          'bg-[#F2F6F8] rounded-lg transition-all',
          'font-hanken text-sm font-normal',
          'min-h-[45px] px-3 py-2',
          'focus:outline-none',
          'disabled:cursor-not-allowed disabled:opacity-50',
          getBorderClasses(),
          getTextClasses()
        )}
        style={{ fontSize: '14px', padding: '12px' }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 flex-1 overflow-hidden">
          {/* Left Icon */}
          {leftIcon && (
            <span className={cn('flex-shrink-0', getIconClasses())} style={{ width: '20px', height: '20px' }}>
              {leftIcon}
            </span>
          )}

          {/* Display Selected Values */}
          <div className="flex items-center gap-2 flex-1 overflow-hidden">
            {selectedValues.length === 0 ? (
              <span className="text-[#777777]">{placeholder}</span>
            ) : displayMode === 'badges' ? (
              <div className="flex items-center gap-1 flex-wrap">
                {getSelectedLabels().slice(0, 3).map((opt) => (
                  <span
                    key={opt.value}
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#3CA997] text-white rounded text-xs"
                  >
                    {opt.label}
                    <button
                      type="button"
                      onClick={(e) => handleRemoveBadge(opt.value, e)}
                      className="hover:bg-white/20 rounded"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
                {selectedValues.length > 3 && (
                  <span className="text-xs text-[#777777]">+{selectedValues.length - 3} more</span>
                )}
              </div>
            ) : (
              <span className="text-[#11212D]">{selectedValues.length} selected</span>
            )}
          </div>
        </div>

        {/* Chevron Icon */}
        <ChevronDown
          className={cn('transition-transform duration-200 flex-shrink-0', getIconClasses(), isOpen && 'rotate-180')}
          size={24}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className={cn(
            'absolute z-50 mt-1',
            'bg-white dark:bg-gray-800',
            'border border-[#CACDD4] dark:border-gray-700',
            'rounded-lg',
            'shadow-[0px_4px_24px_rgba(0,0,0,0.08)]',
            'animate-in fade-in-0 slide-in-from-top-2',
            'w-full max-w-md'
          )}
          role="listbox"
          aria-multiselectable="true"
        >
          <div className="p-1 max-h-[280px] overflow-y-auto">
            {/* Select All / Clear All */}
            {(showSelectAll || showClearAll) && (
              <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 dark:border-gray-700 mb-1">
                {showSelectAll && (
                  <button
                    type="button"
                    onClick={handleSelectAll}
                    className="text-xs text-[#3CA997] hover:underline"
                  >
                    Select All
                  </button>
                )}
                {showClearAll && selectedValues.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="text-xs text-[#777777] hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>
            )}

            {/* Options */}
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => !option.disabled && handleToggle(option.value)}
                disabled={option.disabled}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2 rounded-md',
                  'font-hanken text-sm font-normal text-[#11212D] dark:text-white',
                  'cursor-pointer outline-none transition-colors duration-100',
                  'hover:bg-[#F2F6F8] dark:hover:bg-gray-700',
                  selectedValues.includes(option.value) && 'bg-[#F2F6F8] dark:bg-gray-700',
                  option.disabled && 'opacity-50 cursor-not-allowed hover:bg-transparent'
                )}
                role="option"
                aria-selected={selectedValues.includes(option.value)}
              >
                {/* Checkbox */}
                <Checkbox.Root
                  checked={selectedValues.includes(option.value)}
                  className={cn(
                    'w-4 h-4 rounded border border-[#BFC3C9] flex items-center justify-center',
                    'data-[state=checked]:bg-[#3CA997] data-[state=checked]:border-[#3CA997]'
                  )}
                >
                  <Checkbox.Indicator>
                    <Check size={12} className="text-white" />
                  </Checkbox.Indicator>
                </Checkbox.Root>

                {/* Option Content */}
                <div className="flex items-center gap-2 flex-1">
                  {option.icon && (
                    <span style={{ width: '20px', height: '20px' }} className="flex-shrink-0">
                      {option.icon}
                    </span>
                  )}
                  <span>{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Helper Text */}
      {helperText && (
        <p
          className={cn('mt-2 text-xs', error ? 'text-red-500' : success ? 'text-green-500' : 'text-[#777777]')}
          style={{ fontSize: '12px' }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
