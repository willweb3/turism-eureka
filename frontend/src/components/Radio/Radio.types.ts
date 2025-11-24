import { ReactNode } from 'react';

export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioProps {
  checked?: boolean;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: RadioSize;
  disabled?: boolean;
  name?: string;
  id?: string;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

export interface RadioGroupProps {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  orientation?: 'vertical' | 'horizontal';
  spacing?: 'tight' | 'normal' | 'loose';
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export interface RadioGroupContextValue {
  name: string;
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  size?: RadioSize;
}

export interface RadioWithLabelProps extends RadioProps {
  label: string | ReactNode;
  description?: string;
  labelPlacement?: 'left' | 'right';
}
