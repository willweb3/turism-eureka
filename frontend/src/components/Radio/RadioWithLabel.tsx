'use client';

import React, { useId } from 'react';
import { cn } from '@/lib/utils';
import { Radio } from './Radio';
import type { RadioWithLabelProps } from './Radio.types';

export function RadioWithLabel({
  label,
  description,
  labelPlacement = 'right',
  ...radioProps
}: RadioWithLabelProps) {
  const id = useId();
  const descriptionId = description ? `${id}-desc` : undefined;

  return (
    <div className="flex flex-col gap-1">
      <div
        className={cn(
          'flex items-start gap-2',
          labelPlacement === 'left' && 'flex-row-reverse justify-end'
        )}
      >
        <Radio
          id={id}
          aria-describedby={descriptionId}
          {...radioProps}
        />

        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-900 dark:text-white cursor-pointer select-none"
        >
          {label}
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
    </div>
  );
}
