/**
 * Pagination Components
 *
 * Flexible pagination with intelligent ellipsis placement and full accessibility.
 *
 * @example
 * ```tsx
 * // Standard pagination
 * <Pagination
 *   currentPage={5}
 *   totalPages={50}
 *   onPageChange={setPage}
 * />
 *
 * // Compact variant
 * <CompactPagination
 *   currentPage={3}
 *   totalPages={10}
 *   onPageChange={setPage}
 * />
 * ```
 */

export { Pagination } from './Pagination';
export { CompactPagination } from './CompactPagination';
export { PaginationButton } from './PaginationButton';
export { usePagination } from './usePagination';

export type {
  PaginationProps,
  CompactPaginationProps,
  PaginationButtonProps,
  UsePaginationProps,
  PaginationVariant,
  PaginationSize,
  PageItem,
} from './Pagination.types';

export {
  paginationContainerVariants,
  paginationListVariants,
  paginationButtonVariants,
  ellipsisVariants,
  compactContainerVariants,
  compactTextVariants,
  pageSizeContainerVariants,
  pageSizeSelectVariants,
} from './Pagination.styles';
