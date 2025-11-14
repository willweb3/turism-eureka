'use client';

import React, { useState, useCallback, useId, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { ToggleProps, UseToggleReturn } from './Toggle.types';
import {
  toggleVariants,
  toggleThumbVariants,
  toggleFocusRingVariants,
} from './Toggle.styles';

/**
 * Loading spinner component for toggle
 */
function ToggleSpinner({ size }: { size: 'sm' | 'md' }) {
  const spinnerSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';

  return (
    <svg
      className={cn('animate-spin text-gray-600', spinnerSize)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

/**
 * Toggle (Switch) Component
 *
 * A control for toggling between two states: ON/OFF.
 * Used for settings, preferences, and binary controls.
 *
 * Based on Figma design specifications:
 * - Small: 36x20px (thumb 16x16px)
 * - Medium: 44x24px (thumb 20x20px)
 * - OFF: Neutral-300 (#D6D8DF)
 * - ON: Teal-400 (#3CA997)
 *
 * @example
 * ```tsx
 * // Uncontrolled
 * <Toggle defaultChecked={false} onChange={(checked) => console.log(checked)} />
 *
 * // Controlled
 * const [enabled, setEnabled] = useState(false);
 * <Toggle checked={enabled} onChange={setEnabled} />
 *
 * // With loading
 * <Toggle checked={saving} loading={saving} onChange={handleSave} />
 * ```
 */
export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      checked,
      defaultChecked = false,
      onChange,
      onCheckedChange,
      disabled = false,
      size = 'md',
      name,
      id: providedId,
      required = false,
      className,
      thumbClassName,
      loading = false,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      ...restProps
    },
    ref
  ) => {
    // Generate unique ID if not provided
    const generatedId = useId();
    const id = providedId || generatedId;

    // State management - support both controlled and uncontrolled
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = checked !== undefined;
    const checkedState = isControlled ? checked : internalChecked;

    // Focus state for ring
    const [focused, setFocused] = useState(false);

    // Toggle handler
    const handleToggle = useCallback(async () => {
      if (disabled || loading) return;

      const newChecked = !checkedState;

      // Update internal state if uncontrolled
      if (!isControlled) {
        setInternalChecked(newChecked);
      }

      // Call callbacks
      if (onChange) {
        await onChange(newChecked);
      }

      onCheckedChange?.(newChecked);
    }, [checkedState, disabled, loading, isControlled, onChange, onCheckedChange]);

    // Keyboard support
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          handleToggle();
        }
      },
      [handleToggle]
    );

    // Focus handlers
    const handleFocus = useCallback(() => {
      setFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
      setFocused(false);
    }, []);

    return (
      <>
        <button
          ref={ref}
          type="button"
          role="switch"
          id={id}
          aria-checked={checkedState}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          disabled={disabled || loading}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            toggleVariants({
              size,
              checked: checkedState,
              disabled: disabled || loading,
              loading,
            }),
            toggleFocusRingVariants({ focused }),
            className
          )}
          {...restProps}
        >
          {/* Thumb (circular button) */}
          <span
            className={cn(
              toggleThumbVariants({ size }),
              thumbClassName
            )}
            style={{
              boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.06)',
            }}
          >
            {loading && <ToggleSpinner size={size} />}
          </span>
        </button>

        {/* Hidden input for form integration */}
        {name && (
          <input
            type="checkbox"
            name={name}
            checked={checkedState}
            onChange={() => {}}
            tabIndex={-1}
            required={required}
            className="sr-only"
            aria-hidden="true"
          />
        )}
      </>
    );
  }
);

Toggle.displayName = 'Toggle';

/**
 * Custom hook for managing toggle state
 *
 * @param initialValue - Initial checked state (default: false)
 * @returns Object with state and control functions
 *
 * @example
 * ```tsx
 * const darkMode = useToggle(false);
 *
 * <Toggle
 *   checked={darkMode.checked}
 *   onChange={darkMode.setChecked}
 * />
 *
 * <button onClick={darkMode.toggle}>Toggle</button>
 * <button onClick={darkMode.setOn}>Turn On</button>
 * <button onClick={darkMode.setOff}>Turn Off</button>
 * ```
 */
export function useToggle(initialValue: boolean = false): UseToggleReturn {
  const [checked, setChecked] = useState(initialValue);

  const toggle = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

  const setOn = useCallback(() => {
    setChecked(true);
  }, []);

  const setOff = useCallback(() => {
    setChecked(false);
  }, []);

  return {
    checked,
    setChecked,
    toggle,
    setOn,
    setOff,
  };
}
