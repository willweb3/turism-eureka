import { ReactNode } from 'react';

/**
 * Divider orientation type
 */
export type DividerOrientation = 'horizontal' | 'vertical';

/**
 * Divider variant type
 */
export type DividerVariant = 'solid' | 'dashed' | 'dotted';

/**
 * Divider type - defines the visual style
 */
export type DividerType = 'simple' | 'with-label' | 'with-cta';

/**
 * Divider color variants based on design system
 */
export type DividerColor = 'neutral' | 'blue' | 'gray';

/**
 * CTA button props for with-cta variant
 */
export interface DividerCTAProps {
  /** Icon to display in the CTA button */
  icon: ReactNode;
  /** Click handler for the CTA button */
  onClick?: () => void;
  /** Accessible label for the CTA button */
  ariaLabel?: string;
}

/**
 * Base Divider props
 */
export interface DividerBaseProps {
  /** Divider orientation - default: 'horizontal' */
  orientation?: DividerOrientation;
  /** Divider variant style - default: 'solid' */
  variant?: DividerVariant;
  /** Divider color - default: 'neutral' */
  color?: DividerColor;
  /** Additional CSS classes */
  className?: string;
  /** Role for accessibility - default: 'separator' */
  role?: 'separator' | 'presentation' | 'none';
  /** ARIA orientation for accessibility */
  'aria-orientation'?: 'horizontal' | 'vertical';
}

/**
 * Divider props for simple variant (no label, no CTA)
 */
export interface DividerSimpleProps extends DividerBaseProps {
  type?: 'simple';
  label?: never;
  cta?: never;
}

/**
 * Divider props for with-label variant
 */
export interface DividerWithLabelProps extends DividerBaseProps {
  type: 'with-label';
  /** Text label to display in center of divider */
  label: string;
  cta?: never;
}

/**
 * Divider props for with-cta variant
 */
export interface DividerWithCTAProps extends DividerBaseProps {
  type: 'with-cta';
  label?: never;
  /** CTA button configuration */
  cta: DividerCTAProps;
}

/**
 * Union type of all Divider props variants
 */
export type DividerProps =
  | DividerSimpleProps
  | DividerWithLabelProps
  | DividerWithCTAProps;
