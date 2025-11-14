'use client';

import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

/**
 * CheckboxCardGroup Props
 */
export interface CheckboxCardGroupProps {
  /** Selected values (controlled) */
  value?: string[];
  /** Default selected values (uncontrolled) */
  defaultValue?: string[];
  /** Called when selection changes */
  onChange?: (value: string[]) => void;
  /** Children CheckboxCard components */
  children: React.ReactNode;
  /** Custom className */
  className?: string;
  /** Spacing between cards */
  spacing?: 'tight' | 'normal' | 'loose';
  /** Disable all cards */
  disabled?: boolean;
}

/**
 * CheckboxCardGroup Component
 *
 * Container for managing multiple CheckboxCard selections.
 * Handles state management and propagates checked state to children.
 *
 * @example
 * ```tsx
 * <CheckboxCardGroup
 *   value={selectedFeatures}
 *   onChange={setSelectedFeatures}
 * >
 *   <CheckboxCard value="analytics" title="Analytics" />
 *   <CheckboxCard value="api" title="API Access" />
 * </CheckboxCardGroup>
 * ```
 */
export function CheckboxCardGroup({
  value,
  defaultValue,
  onChange,
  children,
  className,
  spacing = 'normal',
  disabled,
}: CheckboxCardGroupProps) {
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue ?? []);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const spacingClasses = {
    tight: 'gap-2',
    normal: 'gap-3',
    loose: 'gap-4',
  };

  const handleCardChange = useCallback(
    (cardValue: string, checked: boolean) => {
      const newValue = checked
        ? [...currentValue, cardValue]
        : currentValue.filter((v) => v !== cardValue);

      if (!isControlled) {
        setInternalValue(newValue);
      }

      onChange?.(newValue);
    },
    [currentValue, isControlled, onChange]
  );

  return (
    <div className={cn('flex flex-col', spacingClasses[spacing], className)}>
      {React.Children.map(children, (child) => {
        // Only process CheckboxCard components
        if (React.isValidElement(child) && 'value' in child.props && 'title' in child.props) {
          const childValue = child.props.value;
          const isChecked = childValue ? currentValue.includes(childValue) : false;

          return React.cloneElement(child as React.ReactElement<any>, {
            ...child.props,
            checked: isChecked,
            disabled: disabled || child.props.disabled,
            onChange: (checked: boolean) => {
              if (childValue) {
                handleCardChange(childValue, checked);
              }
              child.props.onChange?.(checked);
            },
          });
        }
        return child;
      })}
    </div>
  );
}
