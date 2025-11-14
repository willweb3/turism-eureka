'use client';

import React, { useState, useCallback, useRef, useEffect, forwardRef } from 'react';
import { Check, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CheckboxProps } from './Checkbox.types';
import { checkboxVariants, checkboxCheckIconVariants } from './Checkbox.styles';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked = false,
      indeterminate = false,
      onChange,
      size = 'md',
      variant = 'default',
      disabled = false,
      required = false,
      name,
      value,
      id,
      className,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const [internalIndeterminate, setInternalIndeterminate] = useState(indeterminate);
    const inputRef = useRef<HTMLInputElement>(null);

    const isControlled = checked !== undefined;
    const checkedState = isControlled ? checked : internalChecked;

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;

        const newChecked = event.target.checked;
        setInternalIndeterminate(false);

        if (!isControlled) {
          setInternalChecked(newChecked);
        }

        onChange?.(newChecked);
      },
      [disabled, isControlled, onChange]
    );

    useEffect(() => {
      setInternalIndeterminate(indeterminate);
    }, [indeterminate]);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = internalIndeterminate;
      }
    }, [internalIndeterminate]);

    React.useImperativeHandle(ref, () => inputRef.current!);

    const state = internalIndeterminate
      ? 'indeterminate'
      : checkedState
      ? 'checked'
      : 'unchecked';

    return (
      <label className={cn('inline-flex items-center', className)}>
        <span
          className={cn(
            checkboxVariants({
              size,
              variant,
              state,
              disabled,
            })
          )}
        >
          {checkedState && !internalIndeterminate && (
            <Check
              className={checkboxCheckIconVariants({ size, visible: true })}
              strokeWidth={2.5}
            />
          )}

          {internalIndeterminate && (
            <Minus
              className={checkboxCheckIconVariants({ size, visible: true })}
              strokeWidth={2.5}
            />
          )}

          <input
            ref={inputRef}
            type="checkbox"
            checked={checkedState}
            onChange={handleChange}
            disabled={disabled}
            required={required}
            name={name}
            value={value}
            id={id}
            className="sr-only"
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
          />
        </span>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
