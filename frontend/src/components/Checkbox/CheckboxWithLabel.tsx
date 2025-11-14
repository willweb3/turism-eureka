'use client';

import React, { useId } from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from './Checkbox';
import type { CheckboxWithLabelProps } from './Checkbox.types';

export function CheckboxWithLabel({
  label,
  description,
  error,
  hint,
  labelPlacement = 'right',
  ...checkboxProps
}: CheckboxWithLabelProps) {
  const id = useId();
  const descriptionId = description ? `${id}-desc` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;

  const ariaDescribedBy = cn(descriptionId, errorId, hintId);

  return (
    <div className="flex flex-col gap-1">
      <div
        className={cn(
          'flex items-start gap-2',
          labelPlacement === 'left' && 'flex-row-reverse justify-end'
        )}
      >
        <Checkbox
          id={id}
          aria-describedby={ariaDescribedBy || undefined}
          aria-invalid={!!error}
          {...checkboxProps}
        />

        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-900 dark:text-white cursor-pointer select-none"
        >
          {label}
          {checkboxProps.required && (
            <span className="text-red-600 dark:text-red-400 ml-1">*</span>
          )}
        </label>
      </div>

      {description && (
        <p
          id={descriptionId}
          className={cn(
            'text-sm text-gray-600 dark:text-gray-400',
            labelPlacement === 'left' ? 'text-right' : 'ml-6'
          )}
        >
          {description}
        </p>
      )}

      {hint && !error && (
        <p
          id={hintId}
          className={cn(
            'text-xs text-gray-500 dark:text-gray-400',
            labelPlacement === 'left' ? 'text-right' : 'ml-6'
          )}
        >
          {hint}
        </p>
      )}

      {error && (
        <p
          id={errorId}
          className={cn(
            'text-xs text-red-600 dark:text-red-400',
            labelPlacement === 'left' ? 'text-right' : 'ml-6'
          )}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
