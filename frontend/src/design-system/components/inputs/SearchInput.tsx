'use client';

import React, { useState, forwardRef } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SearchInputProps {
  /** Placeholder text */
  placeholder?: string;
  /** Search value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Search button click handler */
  onSearch?: (value: string) => void;
  /** Button label (default: Search icon) */
  buttonLabel?: string;
  /** Container additional classes */
  containerClassName?: string;
  /** Input additional classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Input ID */
  id?: string;
  /** Input name */
  name?: string;
}

/**
 * SearchInput Component
 *
 * Pill-shaped search input with integrated search button.
 * Follows Azoreon Design System specifications with rounded-full shape.
 *
 * @example
 * ```tsx
 * <SearchInput
 *   placeholder="Search products..."
 *   onSearch={(value) => console.log('Searching:', value)}
 * />
 *
 * <SearchInput
 *   value={searchTerm}
 *   onChange={setSearchTerm}
 *   onSearch={handleSearch}
 * />
 * ```
 */
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      placeholder = 'Search',
      value,
      onChange,
      onSearch,
      buttonLabel,
      containerClassName,
      className,
      disabled = false,
      id,
      name,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(value || '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);
      onChange?.(newValue);
    };

    const handleSearch = () => {
      if (!disabled) {
        onSearch?.(internalValue);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    };

    const inputId = id || `search-${Math.random().toString(36).substr(2, 9)}`;
    const isFilled = internalValue.length > 0;

    return (
      <div
        className={cn(
          'inline-flex items-center gap-2 bg-white rounded-full p-2 transition-all',
          isFilled ? 'border border-[#BFC3C9]' : 'border-none',
          disabled && 'opacity-50 cursor-not-allowed',
          containerClassName
        )}
      >
        {/* Input Field */}
        <input
          ref={ref}
          id={inputId}
          name={name}
          type="text"
          value={internalValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            'flex-1 bg-transparent border-none outline-none',
            'font-hanken text-sm font-normal',
            'placeholder:text-[#777777]',
            'text-[#11212D]',
            'pl-6 pr-2 py-2',
            'min-w-[200px]',
            disabled && 'cursor-not-allowed',
            className
          )}
          style={{ fontSize: '14px' }}
        />

        {/* Search Button */}
        <button
          type="button"
          onClick={handleSearch}
          disabled={disabled}
          className={cn(
            'flex items-center justify-center',
            'w-12 h-12 rounded-full',
            'bg-[#3CA997] hover:bg-[#339982] active:bg-[#2d8770]',
            'transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-[#3CA997] focus:ring-offset-2',
            disabled && 'cursor-not-allowed opacity-50'
          )}
          aria-label="Search"
        >
          {buttonLabel ? (
            <span className="text-white text-sm font-medium">{buttonLabel}</span>
          ) : (
            <Search className="text-white" size={24} />
          )}
        </button>
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';
