import { useMemo } from 'react';
import type { UsePaginationProps, PageItem } from './Pagination.types';

/**
 * usePagination Hook
 *
 * Generates the pagination items array with intelligent ellipsis placement.
 * Implements Material-UI style pagination logic.
 *
 * @example
 * ```tsx
 * const pages = usePagination({
 *   currentPage: 5,
 *   totalPages: 50,
 *   siblingCount: 1,
 *   boundaryCount: 1,
 * });
 * // Result: [1, 'ellipsis', 4, 5, 6, 'ellipsis', 50]
 * ```
 */
export function usePagination({
  currentPage,
  totalPages,
  siblingCount = 1,
  boundaryCount = 1,
}: UsePaginationProps): PageItem[] {
  const paginationRange = useMemo(() => {
    // Helper to create range array
    const range = (start: number, end: number): number[] => {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    // Total page numbers to show (excluding ellipsis)
    const totalNumbers = siblingCount * 2 + 3 + boundaryCount * 2;

    // If total pages less than total numbers to show, show all pages
    if (totalPages <= totalNumbers) {
      return range(1, totalPages);
    }

    // Calculate sibling indices
    const leftSiblingIndex = Math.max(currentPage - siblingCount, boundaryCount + 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPages - boundaryCount
    );

    // Determine if we should show ellipsis
    // Show left ellipsis if there's a gap of at least 2 pages
    const shouldShowLeftEllipsis = leftSiblingIndex > boundaryCount + 2;
    const shouldShowRightEllipsis = rightSiblingIndex < totalPages - boundaryCount - 1;

    // First boundary pages
    const firstPages = range(1, boundaryCount);

    // Last boundary pages
    const lastPages = range(totalPages - boundaryCount + 1, totalPages);

    // Case 1: No ellipsis needed (all pages fit)
    if (!shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
      return range(1, totalPages);
    }

    // Case 2: Only left ellipsis
    if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
      const middleRange = range(leftSiblingIndex, totalPages);
      return [...firstPages, 'ellipsis' as const, ...middleRange];
    }

    // Case 3: Only right ellipsis
    if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const middleRange = range(1, rightSiblingIndex);
      return [...middleRange, 'ellipsis' as const, ...lastPages];
    }

    // Case 4: Both ellipsis
    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [
      ...firstPages,
      'ellipsis' as const,
      ...middleRange,
      'ellipsis' as const,
      ...lastPages,
    ];
  }, [currentPage, totalPages, siblingCount, boundaryCount]);

  return paginationRange;
}
