/**
 * Spacing System Configuration
 * Design tokens for consistent spacing throughout the application
 *
 * Based on an 4px base unit system
 */

export type SpacingToken = keyof typeof spacingTokens;

/**
 * Spacing tokens with their pixel values
 * All values are multiples of 4px for consistency
 */
export const spacingTokens = {
  /** 4px - Minimum spacing unit */
  '1': 4,
  /** 8px - Extra small spacing */
  '2': 8,
  /** 12px - Small spacing */
  '3': 12,
  /** 16px - Base spacing unit (Mobile gutter) */
  '4': 16,
  /** 20px - Medium-small spacing */
  '5': 20,
  /** 24px - Medium spacing */
  '6': 24,
  /** 28px - Medium-large spacing */
  '7': 28,
  /** 32px - Large spacing (Desktop gutter) */
  '8': 32,
  /** 36px - Extra large spacing */
  '9': 36,
  /** 40px - 2XL spacing */
  '10': 40,
  /** 44px - 3XL spacing */
  '11': 44,
  /** 48px - 4XL spacing */
  '12': 48,
  /** 56px - 5XL spacing */
  '14': 56,
  /** 64px - 6XL spacing */
  '16': 64,
  /** 80px - 7XL spacing */
  '20': 80,
  /** 96px - 8XL spacing */
  '24': 96,
  /** 112px - 9XL spacing */
  '28': 112,
  /** 128px - 10XL spacing */
  '32': 128,
} as const;

/**
 * Semantic spacing names for common use cases
 */
export const semanticSpacing = {
  gutter: {
    mobile: spacingTokens['4'],    // 16px
    tablet: spacingTokens['8'],    // 32px
    desktop: spacingTokens['8'],   // 32px
  },
  section: {
    small: spacingTokens['16'],    // 64px
    medium: spacingTokens['20'],   // 80px
    large: spacingTokens['24'],    // 96px
  },
  component: {
    tight: spacingTokens['2'],     // 8px
    normal: spacingTokens['4'],    // 16px
    relaxed: spacingTokens['6'],   // 24px
    loose: spacingTokens['8'],     // 32px
  },
} as const;

/**
 * Get spacing value in pixels
 */
export function getSpacing(token: SpacingToken): number {
  return spacingTokens[token];
}

/**
 * Get spacing value as rem (assuming 16px base)
 */
export function getSpacingRem(token: SpacingToken): string {
  return `${spacingTokens[token] / 16}rem`;
}

/**
 * Get spacing value as CSS custom property
 */
export function getSpacingVar(token: SpacingToken): string {
  return `var(--spacing-${token})`;
}

/**
 * Helper to create spacing scale for visualizations
 */
export function getSpacingScale(): Array<{ token: SpacingToken; value: number; rem: string }> {
  return Object.entries(spacingTokens).map(([token, value]) => ({
    token: token as SpacingToken,
    value,
    rem: `${value / 16}rem`,
  }));
}
