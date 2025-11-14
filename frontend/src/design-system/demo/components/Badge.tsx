import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info' | 'AAA' | 'AA' | 'A' | 'Fail';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100',
  success: 'bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100',
  warning: 'bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100',
  error: 'bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100',
  info: 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100',
  AAA: 'bg-green-600 text-white font-semibold',
  AA: 'bg-green-500 text-white font-semibold',
  A: 'bg-yellow-500 text-white font-semibold',
  Fail: 'bg-red-500 text-white font-semibold',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
};

/**
 * Badge Component
 * Status and label indicators
 */
export function Badge({ children, variant = 'default', size = 'sm', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md font-medium',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
