'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { PaginationButton } from './PaginationButton';
import { compactContainerVariants, compactTextVariants } from './Pagination.styles';
import type { CompactPaginationProps } from './Pagination.types';

/**
 * CompactPagination Component
 *
 * A space-efficient pagination variant ideal for mobile devices and
 * constrained layouts. Shows "Page X of Y" instead of page numbers.
 *
 * @example
 * ```tsx
 * <CompactPagination
 *   currentPage={3}
 *   totalPages={10}
 *   onPageChange={setPage}
 * />
 * ```
 */
export function CompactPagination({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
  prevLabel = '←',
  nextLabel = '→',
  className,
  ariaLabel = 'Pagination',
}: CompactPaginationProps) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    if (disabled || page === currentPage) return;
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <nav
      role="navigation"
      aria-label={ariaLabel}
      className={cn(compactContainerVariants(), className)}
    >
      <PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={disabled || isFirstPage}
        aria-label="Go to previous page"
      >
        {prevLabel}
      </PaginationButton>

      <span className={compactTextVariants({ disabled })}>
        Page {currentPage} of {totalPages}
      </span>

      <PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={disabled || isLastPage}
        aria-label="Go to next page"
      >
        {nextLabel}
      </PaginationButton>
    </nav>
  );
}
