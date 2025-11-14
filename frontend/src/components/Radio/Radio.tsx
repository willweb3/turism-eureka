'use client';

import React, { forwardRef, useContext } from 'react';
import { cn } from '@/lib/utils';
import type { RadioProps } from './Radio.types';
import { radioVariants, radioDotVariants } from './Radio.styles';
import { RadioGroupContext } from './RadioGroup';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      checked,
      value,
      onChange,
      size = 'md',
      disabled = false,
      name,
      id,
      className,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
    },
    ref
  ) => {
    const groupContext = useContext(RadioGroupContext);

    const actualName = name || groupContext?.name;
    const isChecked =
      checked !== undefined ? checked : groupContext?.value === value;
    const isDisabled = disabled || groupContext?.disabled;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      groupContext?.onChange(value);
    };

    return (
      <label className={cn('inline-flex items-center group', className)}>
        <span
          className={cn(
            radioVariants({
              size,
              checked: isChecked,
              disabled: isDisabled,
            })
          )}
        >
          <span
            className={cn(
              radioDotVariants({
                size,
                visible: isChecked,
                disabled: isDisabled,
              })
            )}
          />

          <input
            ref={ref}
            type="radio"
            value={value}
            checked={isChecked}
            onChange={handleChange}
            disabled={isDisabled}
            name={actualName}
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

Radio.displayName = 'Radio';
