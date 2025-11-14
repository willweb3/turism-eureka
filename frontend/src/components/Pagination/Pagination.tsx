'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { usePagination } from './usePagination';
import { PaginationButton } from './PaginationButton';
import {
  paginationContainerVariants,
  paginationListVariants,
  ellipsisVariants,
  pageSizeContainerVariants,
  pageSizeSelectVariants,
} from './Pagination.styles';
import type { PaginationProps } from './Pagination.types';

/**
 * Pagination Component
 *
 * Flexible pagination component with intelligent ellipsis placement,
 * keyboard navigation, and full accessibility support.
 *
 * @example
 * ```tsx
 * // Basic pagination
 * <Pagination
 *   currentPage={1}
 *   totalPages={9}
 *   onPageChange={setPage}
 * />
 *
 * // With navigation and ellipsis
 * <Pagination
 *   currentPage={5}
 *   totalPages={50}
 *   showPrevNext
 *   siblingCount={1}
 *   boundaryCount={1}
 *   onPageChange={setPage}
 * />
 *
 * // With page size selector
 * <Pagination
 *   currentPage={1}
 *   totalPages={10}
 *   showPageSize
 *   pageSize={25}
 *   pageSizeOptions={[10, 25, 50, 100]}
 *   onPageChange={setPage}
 *   onPageSizeChange={setPageSize}
 * />
 * ```
 */
export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'with-navigation',
  size = 'md',
  showPrevNext = true,
  showFirstLast = false,
  siblingCount = 1,
  boundaryCount = 1,
  showEllipsis = true,
  prevLabel = '←',
  nextLabel = '→',
  firstLabel = 'First',
  lastLabel = 'Last',
  showPageSize = false,
  pageSize = 10,
  pageSizeOptions = [10, 25, 50, 100],
  onPageSizeChange,
  disabled = false,
  ariaLabel = 'Pagination',
  className,
  buttonClassName,
}: PaginationProps) {
  // Generate pagination items using the hook
  const pages = usePagination({
    currentPage,
    totalPages,
    siblingCount,
    boundaryCount,
  });

  // Handle page change
  const handlePageChange = (page: number) => {
    if (disabled || page === currentPage) return;
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  // Determine if prev/next should be disabled
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // Handle page size change
  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = Number(event.target.value);
    onPageSizeChange?.(newSize);
  };

  return (
    <nav
      role="navigation"
      aria-label={ariaLabel}
      className={cn(paginationContainerVariants({ disabled }), className)}
    >
      <div className={paginationListVariants()}>
        {/* First button */}
        {showFirstLast && (
          <PaginationButton
            onClick={() => handlePageChange(1)}
            disabled={disabled || isFirstPage}
            size={size}
            className={buttonClassName}
            aria-label="Go to first page"
          >
            {firstLabel}
          </PaginationButton>
        )}

        {/* Previous button */}
        {showPrevNext && (
          <PaginationButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={disabled || isFirstPage}
            size={size}
            className={buttonClassName}
            aria-label="Go to previous page"
          >
            {prevLabel}
          </PaginationButton>
        )}

        {/* Page numbers and ellipsis */}
        {pages.map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <div
                key={`ellipsis-${index}`}
                className={ellipsisVariants({ size })}
                aria-hidden="true"
              >
                ...
              </div>
            );
          }

          const pageNumber = page as number;
          const isSelected = pageNumber === currentPage;

          return (
            <PaginationButton
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              selected={isSelected}
              disabled={disabled}
              size={size}
              className={buttonClassName}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={isSelected ? 'page' : undefined}
            >
              {pageNumber}
            </PaginationButton>
          );
        })}

        {/* Next button */}
        {showPrevNext && (
          <PaginationButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={disabled || isLastPage}
            size={size}
            className={buttonClassName}
            aria-label="Go to next page"
          >
            {nextLabel}
          </PaginationButton>
        )}

        {/* Last button */}
        {showFirstLast && (
          <PaginationButton
            onClick={() => handlePageChange(totalPages)}
            disabled={disabled || isLastPage}
            size={size}
            className={buttonClassName}
            aria-label="Go to last page"
          >
            {lastLabel}
          </PaginationButton>
        )}
      </div>

      {/* Page size selector */}
      {showPageSize && onPageSizeChange && (
        <div className={pageSizeContainerVariants()}>
          <span className="text-sm text-[#777777]">Items per page:</span>
          <select
            value={pageSize}
            onChange={handlePageSizeChange}
            disabled={disabled}
            className={pageSizeSelectVariants()}
            aria-label="Select items per page"
          >
            {pageSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </nav>
  );
}
