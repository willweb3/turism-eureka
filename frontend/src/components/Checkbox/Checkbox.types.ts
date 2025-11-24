import { ReactNode } from 'react';

export type CheckboxSize = 'sm' | 'md' | 'lg';
export type CheckboxVariant = 'default' | 'circle';
export type CheckboxState = 'unchecked' | 'checked' | 'indeterminate';

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  size?: CheckboxSize;
  variant?: CheckboxVariant;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

export interface CheckboxWithLabelProps extends CheckboxProps {
  label: string | ReactNode;
  description?: string;
  error?: string;
  hint?: string;
  labelPlacement?: 'left' | 'right';
}
