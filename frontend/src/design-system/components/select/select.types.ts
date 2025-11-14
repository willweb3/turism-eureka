/**
 * Select Components Types
 * Shared types for all select/dropdown components
 */

import { ReactNode } from 'react';

export interface SelectOption {
  /** Option value */
  value: string;
  /** Display label */
  label: string;
  /** Optional icon */
  icon?: ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Group name (for grouped selects) */
  group?: string;
}

export interface SelectGroup {
  /** Group label */
  label: string;
  /** Group options */
  options: SelectOption[];
}

export interface BaseSelectProps {
  /** Select label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Helper text below select */
  helperText?: string;
  /** Left icon */
  leftIcon?: ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Success state */
  success?: boolean;
  /** Required field */
  required?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Select ID */
  id?: string;
  /** Select name */
  name?: string;
}

export type SelectState = 'default' | 'open' | 'disabled' | 'error' | 'success';
