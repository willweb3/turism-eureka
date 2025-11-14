'use client';

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { cn } from '@/lib/utils';
import type { RadioGroupProps, RadioGroupContextValue } from './Radio.types';
import { radioGroupVariants } from './Radio.styles';

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export function useRadioGroup() {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error('Radio must be used within RadioGroup');
  }
  return context;
}

export function RadioGroup({
  name,
  value,
  defaultValue,
  onChange,
  disabled,
  required,
  orientation = 'vertical',
  spacing = 'normal',
  children,
  className,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleChange = useCallback(
    (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [isControlled, onChange]
  );

  const contextValue = useMemo<RadioGroupContextValue>(
    () => ({
      name,
      value: currentValue,
      onChange: handleChange,
      disabled,
    }),
    [name, currentValue, handleChange, disabled]
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div
        role="radiogroup"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-required={required}
        className={cn(radioGroupVariants({ orientation, spacing }), className)}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}
