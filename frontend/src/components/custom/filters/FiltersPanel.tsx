'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/design-system/components/button';
import { FilterGroup } from './FilterGroup';
import type { FiltersPanelProps } from '@/types/custom-components';

/**
 * FiltersPanel Component
 *
 * Sidebar or modal panel with multiple filter groups for search/browsing.
 * Used in experience/product listing pages.
 *
 * @example
 * ```tsx
 * <FiltersPanel
 *   filterGroups={filterGroups}
 *   selectedFilters={filters}
 *   onFilterChange={handleFilterChange}
 *   onApply={applyFilters}
 *   onReset={resetFilters}
 *   resultCount={70}
 *   variant="sidebar"
 * />
 * ```
 */
export function FiltersPanel({
  filterGroups,
  selectedFilters,
  onFilterChange,
  onApply,
  onReset,
  resultCount,
  variant = 'sidebar',
  className,
}: FiltersPanelProps) {
  const hasFilters = Object.values(selectedFilters).some(
    (arr) => arr.length > 0
  );

  return (
    <aside
      className={cn(
        'bg-white flex flex-col',
        variant === 'sidebar' &&
          'w-80 border-r border-[#D6D8DF] p-6 h-full sticky top-24',
        variant === 'modal' && 'rounded-2xl p-6 max-h-[80vh]',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E7EB]">
        <h2 className="text-xl font-semibold text-[#11212D]">Filters</h2>

        {hasFilters && (
          <button
            onClick={onReset}
            className="text-sm text-[#3CA997] hover:text-[#2fa58b] font-medium transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Filter Groups - Scrollable */}
      <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2 -mr-2">
        {filterGroups.map((group) => (
          <FilterGroup
            key={group.id}
            label={group.label}
            options={group.options}
            selectedOptions={selectedFilters[group.id] || []}
            onChange={(optionId) => onFilterChange(group.id, optionId)}
            type={group.type}
          />
        ))}
      </div>

      {/* Actions */}
      <div className="pt-6 mt-6 border-t border-[#E5E7EB] space-y-3">
        {resultCount !== undefined && (
          <p className="text-sm text-[#777777] text-center font-medium">
            {resultCount} result{resultCount !== 1 ? 's' : ''} found
          </p>
        )}

        <Button
          variant="primary"
          size="medium"
          onClick={onApply}
          className="w-full bg-[#3CA997] hover:bg-[#2fa58b] text-white"
        >
          Apply Filters
        </Button>
      </div>
    </aside>
  );
}
