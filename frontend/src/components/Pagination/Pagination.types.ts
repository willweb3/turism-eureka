import type { ReactNode } from 'react';

/**
 * Pagination variant types
 */
export type PaginationVariant = 'simple' | 'with-navigation' | 'with-ellipsis' | 'compact';

/**
 * Pagination size options
 */
export type PaginationSize = 'sm' | 'md' | 'lg';

/**
 * Page item type - can be a number or ellipsis
 */
export type PageItem = number | 'ellipsis';

/**
 * Props for usePagination hook
 */
export interface UsePaginationProps {
  currentPage: number;
  totalPages: number;
  siblingCount?: number;
  boundaryCount?: number;
}

/**
 * Props for PaginationButton component
 */
export interface PaginationButtonProps {
  children: ReactNode;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
  'aria-current'?: 'page' | undefined;
}

/**
 * Props for Pagination component
 */
export interface PaginationProps {
  // Required
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;

  // Visual
  variant?: PaginationVariant;
  size?: PaginationSize;

  // Behavior
  showPrevNext?: boolean;
  showFirstLast?: boolean;
  siblingCount?: number;
  boundaryCount?: number;

  // Ellipsis
  showEllipsis?: boolean;
  ellipsisThreshold?: number;

  // Navigation labels
  prevLabel?: ReactNode;
  nextLabel?: ReactNode;
  firstLabel?: ReactNode;
  lastLabel?: ReactNode;

  // Items per page
  showPageSize?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  onPageSizeChange?: (size: number) => void;

  // State
  disabled?: boolean;

  // Accessibility
  ariaLabel?: string;

  // Style
  className?: string;
  buttonClassName?: string;
}

/**
 * Props for CompactPagination component
 */
export interface CompactPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
  prevLabel?: ReactNode;
  nextLabel?: ReactNode;
  className?: string;
  ariaLabel?: string;
}
