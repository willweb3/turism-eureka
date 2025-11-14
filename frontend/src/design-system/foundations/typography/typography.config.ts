/**
 * Typography System Configuration
 * Based on Figma design specifications for Azoreon Design System
 *
 * Font Families:
 * - Hanken Grotesk (Primary - Body & UI)
 * - Lufga (Display - Large Headlines)
 */

export type FontFamily = 'hanken' | 'lufga';
export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingVariant = 'default' | 'alt' | 'xl';
export type BodySize = 'xl' | 'l' | 'm' | 's' | 'xs';
export type LabelSize = 'l' | 'm' | 's';
export type ButtonSize = 'l' | 'm' | 's';

export interface TypeStyle {
  /** Font family */
  fontFamily: FontFamily;
  /** Font size in pixels */
  fontSize: number;
  /** Font size in rem */
  fontSizeRem: string;
  /** Font weight */
  fontWeight: FontWeight;
  /** Line height in pixels */
  lineHeight: number;
  /** Line height in rem */
  lineHeightRem: string;
  /** Line height as percentage */
  lineHeightPercent: string;
  /** Letter spacing in pixels (0 if none) */
  letterSpacing: number;
  /** Text transform */
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
}

/**
 * Font families configuration
 */
export const fontFamilies = {
  hanken: {
    name: 'Hanken Grotesk',
    fallback: ['system-ui', 'sans-serif'],
    usage: 'Primary font for body text, UI elements, and most headlines',
  },
  lufga: {
    name: 'Lufga',
    fallback: ['system-ui', 'sans-serif'],
    usage: 'Display font for large, impactful headlines',
  },
} as const;

/**
 * Font weights with descriptive names
 */
export const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

/**
 * Headlines (H1-H6) - All variants
 */
export const headlineStyles: Record<HeadingLevel, Record<HeadingVariant, TypeStyle>> = {
  1: {
    default: {
      fontFamily: 'hanken',
      fontSize: 60,
      fontSizeRem: '3.75rem',
      fontWeight: 700,
      lineHeight: 78,
      lineHeightRem: '4.875rem',
      lineHeightPercent: '130%',
      letterSpacing: 0,
      textTransform: 'none',
    },
    alt: {
      fontFamily: 'hanken',
      fontSize: 60,
      fontSizeRem: '3.75rem',
      fontWeight: 600,
      lineHeight: 78,
      lineHeightRem: '4.875rem',
      lineHeightPercent: '130%',
      letterSpacing: 0,
      textTransform: 'none',
    },
    xl: {
      fontFamily: 'lufga',
      fontSize: 80,
      fontSizeRem: '5rem',
      fontWeight: 700,
      lineHeight: 104,
      lineHeightRem: '6.5rem',
      lineHeightPercent: '130%',
      letterSpacing: -1.5,
      textTransform: 'none',
    },
  },
  2: {
    default: {
      fontFamily: 'hanken',
      fontSize: 48,
      fontSizeRem: '3rem',
      fontWeight: 700,
      lineHeight: 62.4,
      lineHeightRem: '3.9rem',
      lineHeightPercent: '130%',
      letterSpacing: 0,
      textTransform: 'none',
    },
    alt: {
      fontFamily: 'hanken',
      fontSize: 48,
      fontSizeRem: '3rem',
      fontWeight: 600,
      lineHeight: 62.4,
      lineHeightRem: '3.9rem',
      lineHeightPercent: '130%',
      letterSpacing: 0,
      textTransform: 'none',
    },
    xl: {
      fontFamily: 'lufga',
      fontSize: 72,
      fontSizeRem: '4.5rem',
      fontWeight: 700,
      lineHeight: 93.6,
      lineHeightRem: '5.85rem',
      lineHeightPercent: '130%',
      letterSpacing: -1.5,
      textTransform: 'none',
    },
  },
  3: {
    default: {
      fontFamily: 'hanken',
      fontSize: 40,
      fontSizeRem: '2.5rem',
      fontWeight: 700,
      lineHeight: 52,
      lineHeightRem: '3.25rem',
      lineHeightPercent: '130%',
      letterSpacing: 0,
      textTransform: 'none',
    },
    alt: {
      fontFamily: 'hanken',
      fontSize: 40,
      fontSizeRem: '2.5rem',
      fontWeight: 600,
      lineHeight: 52,
      lineHeightRem: '3.25rem',
      lineHeightPercent: '130%',
      letterSpacing: 0,
      textTransform: 'none',
    },
    xl: {
      fontFamily: 'lufga',
      fontSize: 60,
      fontSizeRem: '3.75rem',
      fontWeight: 700,
      lineHeight: 78,
      lineHeightRem: '4.875rem',
      lineHeightPercent: '130%',
      letterSpacing: -1.5,
      textTransform: 'none',
    },
  },
  4: {
    default: {
      fontFamily: 'hanken',
      fontSize: 32,
      fontSizeRem: '2rem',
      fontWeight: 700,
      lineHeight: 41.6,
      lineHeightRem: '2.6rem',
      lineHeightPercent: '130%',
      letterSpacing: 0,
      textTransform: 'none',
    },
    alt: {
      fontFamily: 'hanken',
      fontSize: 32,
      fontSizeRem: '2rem',
      fontWeight: 600,
      lineHeight: 41.6,
      lineHeightRem: '2.6rem',
      lineHeightPercent: '130%',
      letterSpacing: 0,
      textTransform: 'none',
    },
    xl: {
      fontFamily: 'lufga',
      fontSize: 48,
      fontSizeRem: '3rem',
      fontWeight: 700,
      lineHeight: 62.4,
      lineHeightRem: '3.9rem',
      lineHeightPercent: '130%',
      letterSpacing: -1.5,
      textTransform: 'none',
    },
  },
  5: {
    default: {
      fontFamily: 'hanken',
      fontSize: 24,
      fontSizeRem: '1.5rem',
      fontWeight: 700,
      lineHeight: 31.2,
      lineHeightRem: '1.95rem',
      lineHeightPercent: '130%',
      letterSpacing: 0,
      textTransform: 'none',
    },
    alt: {
      fontFamily: 'hanken',
      fontSize: 24,
      fontSizeRem: '1.5rem',
      fontWeight: 600,
      lineHeight: 31.2,
      lineHeightRem: '1.95rem',
      lineHeightPercent: '130%',
      letterSpacing: 0,
      textTransform: 'none',
    },
    xl: {
      fontFamily: 'lufga',
      fontSize: 36,
      fontSizeRem: '2.25rem',
      fontWeight: 500,
      lineHeight: 46.8,
      lineHeightRem: '2.925rem',
      lineHeightPercent: '130%',
      letterSpacing: -1.5,
      textTransform: 'none',
    },
  },
  6: {
    default: {
      fontFamily: 'hanken',
      fontSize: 20,
      fontSizeRem: '1.25rem',
      fontWeight: 700,
      lineHeight: 26,
      lineHeightRem: '1.625rem',
      lineHeightPercent: '130%',
      letterSpacing: 0,
      textTransform: 'none',
    },
    alt: {
      fontFamily: 'hanken',
      fontSize: 20,
      fontSizeRem: '1.25rem',
      fontWeight: 600,
      lineHeight: 26,
      lineHeightRem: '1.625rem',
      lineHeightPercent: '130%',
      letterSpacing: 0,
      textTransform: 'none',
    },
    xl: {
      fontFamily: 'hanken',
      fontSize: 20,
      fontSizeRem: '1.25rem',
      fontWeight: 700,
      lineHeight: 26,
      lineHeightRem: '1.625rem',
      lineHeightPercent: '130%',
      letterSpacing: 0,
      textTransform: 'none',
    },
  },
};

/**
 * Body text styles
 */
export const bodyStyles: Record<BodySize, TypeStyle> = {
  xl: {
    fontFamily: 'hanken',
    fontSize: 24,
    fontSizeRem: '1.5rem',
    fontWeight: 400,
    lineHeight: 36,
    lineHeightRem: '2.25rem',
    lineHeightPercent: '150%',
    letterSpacing: 0,
    textTransform: 'none',
  },
  l: {
    fontFamily: 'hanken',
    fontSize: 20,
    fontSizeRem: '1.25rem',
    fontWeight: 400,
    lineHeight: 30,
    lineHeightRem: '1.875rem',
    lineHeightPercent: '150%',
    letterSpacing: 0,
    textTransform: 'none',
  },
  m: {
    fontFamily: 'hanken',
    fontSize: 18,
    fontSizeRem: '1.125rem',
    fontWeight: 400,
    lineHeight: 27,
    lineHeightRem: '1.688rem',
    lineHeightPercent: '150%',
    letterSpacing: 0,
    textTransform: 'none',
  },
  s: {
    fontFamily: 'hanken',
    fontSize: 16,
    fontSizeRem: '1rem',
    fontWeight: 400,
    lineHeight: 24,
    lineHeightRem: '1.5rem',
    lineHeightPercent: '150%',
    letterSpacing: 0,
    textTransform: 'none',
  },
  xs: {
    fontFamily: 'hanken',
    fontSize: 14,
    fontSizeRem: '0.875rem',
    fontWeight: 400,
    lineHeight: 21,
    lineHeightRem: '1.313rem',
    lineHeightPercent: '150%',
    letterSpacing: 0,
    textTransform: 'none',
  },
};

/**
 * Label styles
 */
export const labelStyles: Record<LabelSize, TypeStyle> = {
  l: {
    fontFamily: 'hanken',
    fontSize: 16,
    fontSizeRem: '1rem',
    fontWeight: 600,
    lineHeight: 22.4,
    lineHeightRem: '1.4rem',
    lineHeightPercent: '140%',
    letterSpacing: 0,
    textTransform: 'none',
  },
  m: {
    fontFamily: 'hanken',
    fontSize: 14,
    fontSizeRem: '0.875rem',
    fontWeight: 600,
    lineHeight: 19.6,
    lineHeightRem: '1.225rem',
    lineHeightPercent: '140%',
    letterSpacing: 0,
    textTransform: 'none',
  },
  s: {
    fontFamily: 'hanken',
    fontSize: 12,
    fontSizeRem: '0.75rem',
    fontWeight: 600,
    lineHeight: 16.8,
    lineHeightRem: '1.05rem',
    lineHeightPercent: '140%',
    letterSpacing: 0,
    textTransform: 'none',
  },
};

/**
 * Caption style
 */
export const captionStyle: TypeStyle = {
  fontFamily: 'hanken',
  fontSize: 12,
  fontSizeRem: '0.75rem',
  fontWeight: 400,
  lineHeight: 16.8,
  lineHeightRem: '1.05rem',
  lineHeightPercent: '140%',
  letterSpacing: 0.4,
  textTransform: 'uppercase',
};

/**
 * Overline style
 */
export const overlineStyle: TypeStyle = {
  fontFamily: 'hanken',
  fontSize: 10,
  fontSizeRem: '0.625rem',
  fontWeight: 500,
  lineHeight: 14,
  lineHeightRem: '0.875rem',
  lineHeightPercent: '140%',
  letterSpacing: 1,
  textTransform: 'uppercase',
};

/**
 * Button text styles
 */
export const buttonStyles: Record<ButtonSize, TypeStyle> = {
  l: {
    fontFamily: 'hanken',
    fontSize: 18,
    fontSizeRem: '1.125rem',
    fontWeight: 600,
    lineHeight: 18,
    lineHeightRem: '1.125rem',
    lineHeightPercent: '100%',
    letterSpacing: 0,
    textTransform: 'none',
  },
  m: {
    fontFamily: 'hanken',
    fontSize: 16,
    fontSizeRem: '1rem',
    fontWeight: 600,
    lineHeight: 16,
    lineHeightRem: '1rem',
    lineHeightPercent: '100%',
    letterSpacing: 0,
    textTransform: 'none',
  },
  s: {
    fontFamily: 'hanken',
    fontSize: 14,
    fontSizeRem: '0.875rem',
    fontWeight: 600,
    lineHeight: 14,
    lineHeightRem: '0.875rem',
    lineHeightPercent: '100%',
    letterSpacing: 0,
    textTransform: 'none',
  },
};

/**
 * Typography guidelines
 */
export const typographyGuidelines = {
  spacing: {
    headingBody: { min: 16, max: 24, unit: 'px' },
    betweenParagraphs: 16,
    betweenSections: { min: 48, max: 64, unit: 'px' },
    betweenHeadingLevels: 32,
  },
  lineLength: {
    body: { min: 50, max: 75, unit: 'characters' },
    headlines: 'no limit',
    captions: { min: 40, max: 60, unit: 'characters' },
  },
  colors: {
    headlines: ['blue-500', 'neutral-900'],
    body: ['neutral-800', 'neutral-700'],
    captions: ['neutral-600', 'neutral-500'],
    muted: ['neutral-500'],
  },
  hierarchy: {
    h1PerPage: 1,
    followOrder: true,
    consistency: 'Use same heading levels for similar content',
    weightContrast: 'Use weight variations to create visual hierarchy',
  },
} as const;

/**
 * Get heading style by level and variant
 */
export function getHeadingStyle(level: HeadingLevel, variant: HeadingVariant = 'default'): TypeStyle {
  return headlineStyles[level][variant];
}

/**
 * Get body style by size
 */
export function getBodyStyle(size: BodySize = 'm'): TypeStyle {
  return bodyStyles[size];
}

/**
 * Get label style by size
 */
export function getLabelStyle(size: LabelSize = 'm'): TypeStyle {
  return labelStyles[size];
}

/**
 * Get button style by size
 */
export function getButtonStyle(size: ButtonSize = 'm'): TypeStyle {
  return buttonStyles[size];
}

/**
 * Generate Tailwind class string from TypeStyle
 */
export function getTypographyClasses(style: TypeStyle): string {
  const classes: string[] = [];

  // Font family
  classes.push(`font-${style.fontFamily}`);

  // Font size (using Tailwind's predefined sizes or custom)
  const sizeMap: Record<number, string> = {
    10: 'text-[0.625rem]',
    12: 'text-xs',
    14: 'text-sm',
    16: 'text-base',
    18: 'text-lg',
    20: 'text-xl',
    24: 'text-2xl',
    32: 'text-[2rem]',
    36: 'text-[2.25rem]',
    40: 'text-[2.5rem]',
    48: 'text-5xl',
    60: 'text-[3.75rem]',
    72: 'text-[4.5rem]',
    80: 'text-[5rem]',
  };
  classes.push(sizeMap[style.fontSize] || `text-[${style.fontSizeRem}]`);

  // Font weight
  const weightMap: Record<FontWeight, string> = {
    100: 'font-thin',
    200: 'font-extralight',
    300: 'font-light',
    400: 'font-normal',
    500: 'font-medium',
    600: 'font-semibold',
    700: 'font-bold',
    800: 'font-extrabold',
    900: 'font-black',
  };
  classes.push(weightMap[style.fontWeight]);

  // Line height
  classes.push(`leading-[${style.lineHeightRem}]`);

  // Letter spacing
  if (style.letterSpacing !== 0) {
    classes.push(`tracking-[${style.letterSpacing}px]`);
  }

  // Text transform
  if (style.textTransform && style.textTransform !== 'none') {
    classes.push(style.textTransform);
  }

  return classes.join(' ');
}
