/**
 * Input Components Types
 * Shared types for all input components
 */

import { ReactNode } from 'react';

export type InputState = 'default' | 'hover' | 'focus' | 'filled' | 'disabled' | 'error' | 'success';

export type InputSize = 'small' | 'medium' | 'large';

export interface BaseInputProps {
  /** Input label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Input state */
  state?: 'default' | 'error' | 'success' | 'disabled';
  /** Disabled state */
  disabled?: boolean;
  /** Helper text below input */
  helperText?: string;
  /** Additional CSS classes */
  className?: string;
  /** Input ID */
  id?: string;
  /** Input name */
  name?: string;
  /** Required field */
  required?: boolean;
}
