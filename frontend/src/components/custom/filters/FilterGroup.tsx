'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/Checkbox';
import type { FilterGroupProps } from '@/types/custom-components';

/**
 * FilterGroup Component
 *
 * Group of filter options with checkboxes or radios.
 * Part of the FiltersPanel component.
 */
export function FilterGroup({
  label,
  options,
  selectedOptions,
  onChange,
  type = 'checkbox',
  className,
}: FilterGroupProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <h3 className="text-sm font-semibold text-[#11212D] uppercase tracking-wide">
        {label}
      </h3>

      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-3 cursor-pointer group py-1"
          >
            <Checkbox
              checked={selectedOptions.includes(option.id)}
              onChange={() => onChange(option.id)}
              className="flex-shrink-0"
            />

            <span className="flex-1 text-base text-[#333333] group-hover:text-[#11212D] transition-colors">
              {option.label}
            </span>

            {option.count !== undefined && (
              <span className="text-sm text-[#777777] flex-shrink-0">
                ({option.count})
              </span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}
