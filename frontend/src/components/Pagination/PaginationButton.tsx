'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { paginationButtonVariants } from './Pagination.styles';
import type { PaginationButtonProps } from './Pagination.types';
import type { PaginationSize } from './Pagination.types';

interface ExtendedPaginationButtonProps extends PaginationButtonProps {
  size?: PaginationSize;
}

/**
 * PaginationButton Component
 *
 * Individual button used in pagination component.
 * Supports selected, disabled, and various size states.
 *
 * @example
 * ```tsx
 * <PaginationButton
 *   selected
 *   onClick={() => handlePageChange(1)}
 *   aria-label="Go to page 1"
 *   aria-current="page"
 * >
 *   1
 * </PaginationButton>
 * ```
 */
export function PaginationButton({
  children,
  onClick,
  selected = false,
  disabled = false,
  size = 'md',
  className,
  ...props
}: ExtendedPaginationButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(paginationButtonVariants({ selected, disabled, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
