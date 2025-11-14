/**
 * Color System Configuration
 * Based on Figma design specifications for Azoreon Design System
 *
 * All colors include WCAG 2.1 contrast ratios against white background
 * AA = 4.5:1 for normal text
 * AAA = 7:1 for normal text
 * A = 3:1 for large text
 */

export type ColorTone = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export type WCAGLevel = 'AAA' | 'AA' | 'A' | 'Fail';
export type ColorUsage = 'Normal text' | 'Large text' | 'UI only';

export interface ColorShade {
  /** Tone level (50-950) */
  tone: ColorTone;
  /** Hex color value */
  hex: string;
  /** Contrast ratio against white */
  contrast: number;
  /** WCAG compliance level */
  wcag: WCAGLevel;
  /** Recommended usage */
  usage: ColorUsage;
  /** RGB values */
  rgb: { r: number; g: number; b: number };
  /** HSL values */
  hsl: { h: number; s: number; l: number };
}

export interface ColorPalette {
  /** Palette name */
  name: string;
  /** Palette slug for CSS */
  slug: string;
  /** Palette description */
  description: string;
  /** Is this a primary palette? */
  isPrimary?: boolean;
  /** All shades in this palette */
  shades: ColorShade[];
}

/**
 * Teal Palette (Primary)
 */
export const tealPalette: ColorPalette = {
  name: 'Teal',
  slug: 'teal',
  description: 'Primary brand color for Azoreon',
  isPrimary: true,
  shades: [
    { tone: 50, hex: '#D7F4F0', contrast: 85, wcag: 'AA', usage: 'Normal text', rgb: { r: 215, g: 244, b: 240 }, hsl: { h: 172, s: 60, l: 90 } },
    { tone: 100, hex: '#C3EEE8', contrast: 76, wcag: 'AA', usage: 'Normal text', rgb: { r: 195, g: 238, b: 232 }, hsl: { h: 172, s: 60, l: 85 } },
    { tone: 200, hex: '#70D1C2', contrast: 67, wcag: 'AA', usage: 'Normal text', rgb: { r: 112, g: 209, b: 194 }, hsl: { h: 171, s: 52, l: 63 } },
    { tone: 300, hex: '#52C6BB', contrast: 59, wcag: 'A', usage: 'Large text', rgb: { r: 82, g: 198, b: 187 }, hsl: { h: 174, s: 50, l: 55 } },
    { tone: 400, hex: '#1DB0A2', contrast: 47, wcag: 'Fail', usage: 'UI only', rgb: { r: 29, g: 176, b: 162 }, hsl: { h: 174, s: 72, l: 40 } },
    { tone: 500, hex: '#13948A', contrast: 35, wcag: 'Fail', usage: 'UI only', rgb: { r: 19, g: 148, b: 138 }, hsl: { h: 175, s: 77, l: 33 } },
    { tone: 600, hex: '#10827A', contrast: 30, wcag: 'Fail', usage: 'UI only', rgb: { r: 16, g: 130, b: 122 }, hsl: { h: 176, s: 78, l: 29 } },
    { tone: 700, hex: '#0C665F', contrast: 23, wcag: 'Fail', usage: 'UI only', rgb: { r: 12, g: 102, b: 95 }, hsl: { h: 175, s: 79, l: 22 } },
    { tone: 800, hex: '#094A45', contrast: 17, wcag: 'Fail', usage: 'UI only', rgb: { r: 9, g: 74, b: 69 }, hsl: { h: 175, s: 78, l: 16 } },
    { tone: 900, hex: '#052E2B', contrast: 10, wcag: 'Fail', usage: 'UI only', rgb: { r: 5, g: 46, b: 43 }, hsl: { h: 176, s: 80, l: 10 } },
    { tone: 950, hex: '#021210', contrast: 4, wcag: 'Fail', usage: 'UI only', rgb: { r: 2, g: 18, b: 16 }, hsl: { h: 172, s: 80, l: 4 } },
  ],
};

/**
 * Blue Palette
 */
export const bluePalette: ColorPalette = {
  name: 'Blue',
  slug: 'blue',
  description: 'Secondary color for information and links',
  shades: [
    { tone: 50, hex: '#EAF6FC', contrast: 92, wcag: 'AAA', usage: 'Normal text', rgb: { r: 234, g: 246, b: 252 }, hsl: { h: 200, s: 70, l: 95 } },
    { tone: 100, hex: '#CCE8F7', contrast: 84, wcag: 'AA', usage: 'Normal text', rgb: { r: 204, g: 232, b: 247 }, hsl: { h: 201, s: 72, l: 88 } },
    { tone: 200, hex: '#99D2EF', contrast: 75, wcag: 'AA', usage: 'Normal text', rgb: { r: 153, g: 210, b: 239 }, hsl: { h: 200, s: 73, l: 77 } },
    { tone: 300, hex: '#66BBE6', contrast: 67, wcag: 'AA', usage: 'Normal text', rgb: { r: 102, g: 187, b: 230 }, hsl: { h: 200, s: 72, l: 65 } },
    { tone: 400, hex: '#41AADF', contrast: 60, wcag: 'A', usage: 'Large text', rgb: { r: 65, g: 170, b: 223 }, hsl: { h: 200, s: 71, l: 56 } },
    { tone: 500, hex: '#0E97CF', contrast: 50, wcag: 'Fail', usage: 'UI only', rgb: { r: 14, g: 151, b: 207 }, hsl: { h: 197, s: 87, l: 43 } },
    { tone: 600, hex: '#0C80B0', contrast: 42, wcag: 'Fail', usage: 'UI only', rgb: { r: 12, g: 128, b: 176 }, hsl: { h: 198, s: 87, l: 37 } },
    { tone: 700, hex: '#096180', contrast: 30, wcag: 'Fail', usage: 'UI only', rgb: { r: 9, g: 97, b: 128 }, hsl: { h: 196, s: 87, l: 27 } },
    { tone: 800, hex: '#064150', contrast: 19, wcag: 'Fail', usage: 'UI only', rgb: { r: 6, g: 65, b: 80 }, hsl: { h: 192, s: 86, l: 17 } },
    { tone: 900, hex: '#032130', contrast: 10, wcag: 'Fail', usage: 'UI only', rgb: { r: 3, g: 33, b: 48 }, hsl: { h: 200, s: 88, l: 10 } },
    { tone: 950, hex: '#010E17', contrast: 4, wcag: 'Fail', usage: 'UI only', rgb: { r: 1, g: 14, b: 23 }, hsl: { h: 205, s: 92, l: 5 } },
  ],
};

/**
 * Yellow Palette
 */
export const yellowPalette: ColorPalette = {
  name: 'Yellow',
  slug: 'yellow',
  description: 'Warning and highlight color',
  shades: [
    { tone: 50, hex: '#FEF9E7', contrast: 98, wcag: 'AAA', usage: 'Normal text', rgb: { r: 254, g: 249, b: 231 }, hsl: { h: 47, s: 92, l: 95 } },
    { tone: 100, hex: '#FEF4CF', contrast: 96, wcag: 'AAA', usage: 'Normal text', rgb: { r: 254, g: 244, b: 207 }, hsl: { h: 47, s: 94, l: 90 } },
    { tone: 200, hex: '#FCE89F', contrast: 93, wcag: 'AAA', usage: 'Normal text', rgb: { r: 252, g: 232, b: 159 }, hsl: { h: 47, s: 94, l: 81 } },
    { tone: 300, hex: '#FBDC70', contrast: 90, wcag: 'AAA', usage: 'Normal text', rgb: { r: 251, g: 220, b: 112 }, hsl: { h: 47, s: 94, l: 71 } },
    { tone: 400, hex: '#FAD352', contrast: 88, wcag: 'AAA', usage: 'Normal text', rgb: { r: 250, g: 211, b: 82 }, hsl: { h: 46, s: 94, l: 65 } },
    { tone: 500, hex: '#F8C521', contrast: 81, wcag: 'AA', usage: 'Normal text', rgb: { r: 248, g: 197, b: 33 }, hsl: { h: 46, s: 93, l: 55 } },
    { tone: 600, hex: '#D5A20B', contrast: 70, wcag: 'AA', usage: 'Normal text', rgb: { r: 213, g: 162, b: 11 }, hsl: { h: 45, s: 90, l: 44 } },
    { tone: 700, hex: '#B17E08', contrast: 57, wcag: 'A', usage: 'Large text', rgb: { r: 177, g: 126, b: 8 }, hsl: { h: 42, s: 91, l: 36 } },
    { tone: 800, hex: '#8E5A06', contrast: 43, wcag: 'Fail', usage: 'UI only', rgb: { r: 142, g: 90, b: 6 }, hsl: { h: 37, s: 92, l: 29 } },
    { tone: 900, hex: '#6A3604', contrast: 29, wcag: 'Fail', usage: 'UI only', rgb: { r: 106, g: 54, b: 4 }, hsl: { h: 29, s: 93, l: 22 } },
    { tone: 950, hex: '#3F1B02', contrast: 15, wcag: 'Fail', usage: 'UI only', rgb: { r: 63, g: 27, b: 2 }, hsl: { h: 25, s: 94, l: 13 } },
  ],
};

/**
 * Orange Palette
 */
export const orangePalette: ColorPalette = {
  name: 'Orange',
  slug: 'orange',
  description: 'Accent color for emphasis',
  shades: [
    { tone: 50, hex: '#FFF0E5', contrast: 96, wcag: 'AAA', usage: 'Normal text', rgb: { r: 255, g: 240, b: 229 }, hsl: { h: 25, s: 100, l: 95 } },
    { tone: 100, hex: '#FFE1CC', contrast: 92, wcag: 'AAA', usage: 'Normal text', rgb: { r: 255, g: 225, b: 204 }, hsl: { h: 25, s: 100, l: 90 } },
    { tone: 200, hex: '#FFC399', contrast: 87, wcag: 'AAA', usage: 'Normal text', rgb: { r: 255, g: 195, b: 153 }, hsl: { h: 25, s: 100, l: 80 } },
    { tone: 300, hex: '#FFA666', contrast: 82, wcag: 'AA', usage: 'Normal text', rgb: { r: 255, g: 166, b: 102 }, hsl: { h: 25, s: 100, l: 70 } },
    { tone: 400, hex: '#FF8A3F', contrast: 77, wcag: 'AA', usage: 'Normal text', rgb: { r: 255, g: 138, b: 63 }, hsl: { h: 23, s: 100, l: 62 } },
    { tone: 500, hex: '#FF6D0D', contrast: 68, wcag: 'AA', usage: 'Normal text', rgb: { r: 255, g: 109, b: 13 }, hsl: { h: 24, s: 100, l: 53 } },
    { tone: 600, hex: '#D9510C', contrast: 54, wcag: 'A', usage: 'Large text', rgb: { r: 217, g: 81, b: 12 }, hsl: { h: 20, s: 90, l: 45 } },
    { tone: 700, hex: '#B33508', contrast: 41, wcag: 'Fail', usage: 'UI only', rgb: { r: 179, g: 53, b: 8 }, hsl: { h: 16, s: 91, l: 37 } },
    { tone: 800, hex: '#8D1905', contrast: 28, wcag: 'Fail', usage: 'UI only', rgb: { r: 141, g: 25, b: 5 }, hsl: { h: 9, s: 93, l: 29 } },
    { tone: 900, hex: '#660103', contrast: 16, wcag: 'Fail', usage: 'UI only', rgb: { r: 102, g: 1, b: 3 }, hsl: { h: 358, s: 98, l: 20 } },
    { tone: 950, hex: '#400001', contrast: 8, wcag: 'Fail', usage: 'UI only', rgb: { r: 64, g: 0, b: 1 }, hsl: { h: 359, s: 100, l: 13 } },
  ],
};

/**
 * Red Palette
 */
export const redPalette: ColorPalette = {
  name: 'Red',
  slug: 'red',
  description: 'Error and danger color',
  shades: [
    { tone: 50, hex: '#FEE5E9', contrast: 90, wcag: 'AAA', usage: 'Normal text', rgb: { r: 254, g: 229, b: 233 }, hsl: { h: 350, s: 93, l: 95 } },
    { tone: 100, hex: '#FCCBD2', contrast: 82, wcag: 'AA', usage: 'Normal text', rgb: { r: 252, g: 203, b: 210 }, hsl: { h: 351, s: 92, l: 89 } },
    { tone: 200, hex: '#FA97A6', contrast: 73, wcag: 'AA', usage: 'Normal text', rgb: { r: 250, g: 151, b: 166 }, hsl: { h: 351, s: 91, l: 79 } },
    { tone: 300, hex: '#F7637A', contrast: 64, wcag: 'A', usage: 'Large text', rgb: { r: 247, g: 99, b: 122 }, hsl: { h: 351, s: 90, l: 68 } },
    { tone: 400, hex: '#F5405C', contrast: 57, wcag: 'A', usage: 'Large text', rgb: { r: 245, g: 64, b: 92 }, hsl: { h: 351, s: 89, l: 61 } },
    { tone: 500, hex: '#F21330', contrast: 46, wcag: 'Fail', usage: 'UI only', rgb: { r: 242, g: 19, b: 48 }, hsl: { h: 352, s: 90, l: 51 } },
    { tone: 600, hex: '#CF0C2C', contrast: 37, wcag: 'Fail', usage: 'UI only', rgb: { r: 207, g: 12, b: 44 }, hsl: { h: 350, s: 89, l: 43 } },
    { tone: 700, hex: '#AC0721', contrast: 29, wcag: 'Fail', usage: 'UI only', rgb: { r: 172, g: 7, b: 33 }, hsl: { h: 351, s: 92, l: 35 } },
    { tone: 800, hex: '#890216', contrast: 21, wcag: 'Fail', usage: 'UI only', rgb: { r: 137, g: 2, b: 22 }, hsl: { h: 351, s: 97, l: 27 } },
    { tone: 900, hex: '#66000E', contrast: 14, wcag: 'Fail', usage: 'UI only', rgb: { r: 102, g: 0, b: 14 }, hsl: { h: 352, s: 100, l: 20 } },
    { tone: 950, hex: '#430007', contrast: 7, wcag: 'Fail', usage: 'UI only', rgb: { r: 67, g: 0, b: 7 }, hsl: { h: 354, s: 100, l: 13 } },
  ],
};

/**
 * Green Palette
 */
export const greenPalette: ColorPalette = {
  name: 'Green',
  slug: 'green',
  description: 'Success and positive color',
  shades: [
    { tone: 50, hex: '#E7F7EC', contrast: 94, wcag: 'AAA', usage: 'Normal text', rgb: { r: 231, g: 247, b: 236 }, hsl: { h: 139, s: 53, l: 94 } },
    { tone: 100, hex: '#D0EFD9', contrast: 88, wcag: 'AAA', usage: 'Normal text', rgb: { r: 208, g: 239, b: 217 }, hsl: { h: 137, s: 53, l: 88 } },
    { tone: 200, hex: '#A0DFB4', contrast: 81, wcag: 'AA', usage: 'Normal text', rgb: { r: 160, g: 223, b: 180 }, hsl: { h: 139, s: 49, l: 75 } },
    { tone: 300, hex: '#71CF8E', contrast: 73, wcag: 'AA', usage: 'Normal text', rgb: { r: 113, g: 207, b: 142 }, hsl: { h: 139, s: 49, l: 63 } },
    { tone: 400, hex: '#51C274', contrast: 68, wcag: 'AA', usage: 'Normal text', rgb: { r: 81, g: 194, b: 116 }, hsl: { h: 139, s: 48, l: 54 } },
    { tone: 500, hex: '#22AE51', contrast: 59, wcag: 'A', usage: 'Large text', rgb: { r: 34, g: 174, b: 81 }, hsl: { h: 140, s: 67, l: 41 } },
    { tone: 600, hex: '#159540', contrast: 48, wcag: 'Fail', usage: 'UI only', rgb: { r: 21, g: 149, b: 64 }, hsl: { h: 140, s: 75, l: 33 } },
    { tone: 700, hex: '#0F7C2F', contrast: 38, wcag: 'Fail', usage: 'UI only', rgb: { r: 15, g: 124, b: 47 }, hsl: { h: 138, s: 78, l: 27 } },
    { tone: 800, hex: '#09631F', contrast: 28, wcag: 'Fail', usage: 'UI only', rgb: { r: 9, g: 99, b: 31 }, hsl: { h: 135, s: 83, l: 21 } },
    { tone: 900, hex: '#054A10', contrast: 18, wcag: 'Fail', usage: 'UI only', rgb: { r: 5, g: 74, b: 16 }, hsl: { h: 130, s: 87, l: 15 } },
    { tone: 950, hex: '#023106', contrast: 9, wcag: 'Fail', usage: 'UI only', rgb: { r: 2, g: 49, b: 6 }, hsl: { h: 125, s: 92, l: 10 } },
  ],
};

/**
 * Neutral (Gray) Palette
 */
export const neutralPalette: ColorPalette = {
  name: 'Neutral',
  slug: 'neutral',
  description: 'Grayscale colors for text and backgrounds',
  shades: [
    { tone: 50, hex: '#F8F9FA', contrast: 98, wcag: 'AAA', usage: 'Normal text', rgb: { r: 248, g: 249, b: 250 }, hsl: { h: 210, s: 17, l: 98 } },
    { tone: 100, hex: '#F1F3F5', contrast: 96, wcag: 'AAA', usage: 'Normal text', rgb: { r: 241, g: 243, b: 245 }, hsl: { h: 210, s: 17, l: 95 } },
    { tone: 200, hex: '#E9ECEF', contrast: 93, wcag: 'AAA', usage: 'Normal text', rgb: { r: 233, g: 236, b: 239 }, hsl: { h: 210, s: 16, l: 93 } },
    { tone: 300, hex: '#DEE2E6', contrast: 90, wcag: 'AAA', usage: 'Normal text', rgb: { r: 222, g: 226, b: 230 }, hsl: { h: 210, s: 14, l: 89 } },
    { tone: 400, hex: '#CED4DA', contrast: 84, wcag: 'AA', usage: 'Normal text', rgb: { r: 206, g: 212, b: 218 }, hsl: { h: 210, s: 14, l: 83 } },
    { tone: 500, hex: '#ADB5BD', contrast: 73, wcag: 'AA', usage: 'Normal text', rgb: { r: 173, g: 181, b: 189 }, hsl: { h: 210, s: 11, l: 71 } },
    { tone: 600, hex: '#868E96', contrast: 57, wcag: 'A', usage: 'Large text', rgb: { r: 134, g: 142, b: 150 }, hsl: { h: 210, s: 7, l: 56 } },
    { tone: 700, hex: '#495057', contrast: 33, wcag: 'Fail', usage: 'UI only', rgb: { r: 73, g: 80, b: 87 }, hsl: { h: 210, s: 9, l: 31 } },
    { tone: 800, hex: '#343A40', contrast: 23, wcag: 'Fail', usage: 'UI only', rgb: { r: 52, g: 58, b: 64 }, hsl: { h: 210, s: 10, l: 23 } },
    { tone: 900, hex: '#212529', contrast: 15, wcag: 'Fail', usage: 'UI only', rgb: { r: 33, g: 37, b: 41 }, hsl: { h: 210, s: 11, l: 15 } },
    { tone: 950, hex: '#0D0F12', contrast: 6, wcag: 'Fail', usage: 'UI only', rgb: { r: 13, g: 15, b: 18 }, hsl: { h: 216, s: 16, l: 6 } },
  ],
};

/**
 * Purple Palette
 */
export const purplePalette: ColorPalette = {
  name: 'Purple',
  slug: 'purple',
  description: 'Accent color for creative elements',
  shades: [
    { tone: 50, hex: '#F3E8FA', contrast: 92, wcag: 'AAA', usage: 'Normal text', rgb: { r: 243, g: 232, b: 250 }, hsl: { h: 277, s: 64, l: 95 } },
    { tone: 100, hex: '#E6D1F5', contrast: 85, wcag: 'AA', usage: 'Normal text', rgb: { r: 230, g: 209, b: 245 }, hsl: { h: 275, s: 64, l: 89 } },
    { tone: 200, hex: '#CEA3EB', contrast: 77, wcag: 'AA', usage: 'Normal text', rgb: { r: 206, g: 163, b: 235 }, hsl: { h: 276, s: 63, l: 78 } },
    { tone: 300, hex: '#B574E0', contrast: 68, wcag: 'AA', usage: 'Normal text', rgb: { r: 181, g: 116, b: 224 }, hsl: { h: 276, s: 65, l: 67 } },
    { tone: 400, hex: '#A252D8', contrast: 61, wcag: 'A', usage: 'Large text', rgb: { r: 162, g: 82, b: 216 }, hsl: { h: 276, s: 64, l: 58 } },
    { tone: 500, hex: '#8A26CD', contrast: 51, wcag: 'Fail', usage: 'UI only', rgb: { r: 138, g: 38, b: 205 }, hsl: { h: 276, s: 69, l: 48 } },
    { tone: 600, hex: '#7519B0', contrast: 41, wcag: 'Fail', usage: 'UI only', rgb: { r: 117, g: 25, b: 176 }, hsl: { h: 277, s: 75, l: 39 } },
    { tone: 700, hex: '#601193', contrast: 32, wcag: 'Fail', usage: 'UI only', rgb: { r: 96, g: 17, b: 147 }, hsl: { h: 277, s: 79, l: 32 } },
    { tone: 800, hex: '#4A0976', contrast: 23, wcag: 'Fail', usage: 'UI only', rgb: { r: 74, g: 9, b: 118 }, hsl: { h: 276, s: 86, l: 25 } },
    { tone: 900, hex: '#350459', contrast: 15, wcag: 'Fail', usage: 'UI only', rgb: { r: 53, g: 4, b: 89 }, hsl: { h: 275, s: 91, l: 18 } },
    { tone: 950, hex: '#1F013C', contrast: 8, wcag: 'Fail', usage: 'UI only', rgb: { r: 31, g: 1, b: 60 }, hsl: { h: 271, s: 97, l: 12 } },
  ],
};

/**
 * Pink Palette
 */
export const pinkPalette: ColorPalette = {
  name: 'Pink',
  slug: 'pink',
  description: 'Accent color for highlights',
  shades: [
    { tone: 50, hex: '#FCE8F2', contrast: 91, wcag: 'AAA', usage: 'Normal text', rgb: { r: 252, g: 232, b: 242 }, hsl: { h: 330, s: 77, l: 95 } },
    { tone: 100, hex: '#F9D1E6', contrast: 83, wcag: 'AA', usage: 'Normal text', rgb: { r: 249, g: 209, b: 230 }, hsl: { h: 329, s: 77, l: 90 } },
    { tone: 200, hex: '#F4A3CD', contrast: 75, wcag: 'AA', usage: 'Normal text', rgb: { r: 244, g: 163, b: 205 }, hsl: { h: 329, s: 76, l: 80 } },
    { tone: 300, hex: '#EE75B4', contrast: 66, wcag: 'AA', usage: 'Normal text', rgb: { r: 238, g: 117, b: 180 }, hsl: { h: 329, s: 78, l: 70 } },
    { tone: 400, hex: '#EA549F', contrast: 59, wcag: 'A', usage: 'Large text', rgb: { r: 234, g: 84, b: 159 }, hsl: { h: 330, s: 78, l: 62 } },
    { tone: 500, hex: '#E52687', contrast: 50, wcag: 'Fail', usage: 'UI only', rgb: { r: 229, g: 38, b: 135 }, hsl: { h: 330, s: 79, l: 52 } },
    { tone: 600, hex: '#C71A73', contrast: 40, wcag: 'Fail', usage: 'UI only', rgb: { r: 199, g: 26, b: 115 }, hsl: { h: 329, s: 77, l: 44 } },
    { tone: 700, hex: '#A9105F', contrast: 31, wcag: 'Fail', usage: 'UI only', rgb: { r: 169, g: 16, b: 95 }, hsl: { h: 329, s: 83, l: 36 } },
    { tone: 800, hex: '#8B084B', contrast: 22, wcag: 'Fail', usage: 'UI only', rgb: { r: 139, g: 8, b: 75 }, hsl: { h: 329, s: 89, l: 29 } },
    { tone: 900, hex: '#6D0237', contrast: 14, wcag: 'Fail', usage: 'UI only', rgb: { r: 109, g: 2, b: 55 }, hsl: { h: 330, s: 96, l: 22 } },
    { tone: 950, hex: '#4F0023', contrast: 7, wcag: 'Fail', usage: 'UI only', rgb: { r: 79, g: 0, b: 35 }, hsl: { h: 333, s: 100, l: 15 } },
  ],
};

/**
 * Indigo Palette
 */
export const indigoPalette: ColorPalette = {
  name: 'Indigo',
  slug: 'indigo',
  description: 'Deep blue accent color',
  shades: [
    { tone: 50, hex: '#E8EBFA', contrast: 91, wcag: 'AAA', usage: 'Normal text', rgb: { r: 232, g: 235, b: 250 }, hsl: { h: 230, s: 64, l: 95 } },
    { tone: 100, hex: '#D1D7F5', contrast: 83, wcag: 'AA', usage: 'Normal text', rgb: { r: 209, g: 215, b: 245 }, hsl: { h: 230, s: 64, l: 89 } },
    { tone: 200, hex: '#A3AFEB', contrast: 74, wcag: 'AA', usage: 'Normal text', rgb: { r: 163, g: 175, b: 235 }, hsl: { h: 230, s: 64, l: 78 } },
    { tone: 300, hex: '#7587E0', contrast: 65, wcag: 'A', usage: 'Large text', rgb: { r: 117, g: 135, b: 224 }, hsl: { h: 230, s: 65, l: 67 } },
    { tone: 400, hex: '#5466D8', contrast: 58, wcag: 'A', usage: 'Large text', rgb: { r: 84, g: 102, b: 216 }, hsl: { h: 232, s: 64, l: 59 } },
    { tone: 500, hex: '#263ECD', contrast: 47, wcag: 'Fail', usage: 'UI only', rgb: { r: 38, g: 62, b: 205 }, hsl: { h: 231, s: 69, l: 48 } },
    { tone: 600, hex: '#1C2FB0', contrast: 38, wcag: 'Fail', usage: 'UI only', rgb: { r: 28, g: 47, b: 176 }, hsl: { h: 232, s: 73, l: 40 } },
    { tone: 700, hex: '#132093', contrast: 29, wcag: 'Fail', usage: 'UI only', rgb: { r: 19, g: 32, b: 147 }, hsl: { h: 234, s: 77, l: 33 } },
    { tone: 800, hex: '#0B1176', contrast: 20, wcag: 'Fail', usage: 'UI only', rgb: { r: 11, g: 17, b: 118 }, hsl: { h: 237, s: 83, l: 25 } },
    { tone: 900, hex: '#050659', contrast: 12, wcag: 'Fail', usage: 'UI only', rgb: { r: 5, g: 6, b: 89 }, hsl: { h: 239, s: 89, l: 18 } },
    { tone: 950, hex: '#01013C', contrast: 5, wcag: 'Fail', usage: 'UI only', rgb: { r: 1, g: 1, b: 60 }, hsl: { h: 240, s: 97, l: 12 } },
  ],
};

/**
 * Forest (Dark Green) Palette
 */
export const forestPalette: ColorPalette = {
  name: 'Forest',
  slug: 'forest',
  description: 'Dark green nature color',
  shades: [
    { tone: 50, hex: '#E8F0EA', contrast: 93, wcag: 'AAA', usage: 'Normal text', rgb: { r: 232, g: 240, b: 234 }, hsl: { h: 135, s: 25, l: 93 } },
    { tone: 100, hex: '#D1E1D5', contrast: 86, wcag: 'AAA', usage: 'Normal text', rgb: { r: 209, g: 225, b: 213 }, hsl: { h: 135, s: 25, l: 85 } },
    { tone: 200, hex: '#A3C3AB', contrast: 78, wcag: 'AA', usage: 'Normal text', rgb: { r: 163, g: 195, b: 171 }, hsl: { h: 135, s: 22, l: 70 } },
    { tone: 300, hex: '#75A582', contrast: 69, wcag: 'AA', usage: 'Normal text', rgb: { r: 117, g: 165, b: 130 }, hsl: { h: 136, s: 22, l: 55 } },
    { tone: 400, hex: '#548E63', contrast: 62, wcag: 'A', usage: 'Large text', rgb: { r: 84, g: 142, b: 99 }, hsl: { h: 136, s: 26, l: 44 } },
    { tone: 500, hex: '#2D703E', contrast: 51, wcag: 'Fail', usage: 'UI only', rgb: { r: 45, g: 112, b: 62 }, hsl: { h: 135, s: 43, l: 31 } },
    { tone: 600, hex: '#1F5D2E', contrast: 42, wcag: 'Fail', usage: 'UI only', rgb: { r: 31, g: 93, b: 46 }, hsl: { h: 135, s: 50, l: 24 } },
    { tone: 700, hex: '#154A1F', contrast: 32, wcag: 'Fail', usage: 'UI only', rgb: { r: 21, g: 74, b: 31 }, hsl: { h: 131, s: 56, l: 19 } },
    { tone: 800, hex: '#0C3710', contrast: 22, wcag: 'Fail', usage: 'UI only', rgb: { r: 12, g: 55, b: 16 }, hsl: { h: 126, s: 64, l: 13 } },
    { tone: 900, hex: '#052407', contrast: 13, wcag: 'Fail', usage: 'UI only', rgb: { r: 5, g: 36, b: 7 }, hsl: { h: 124, s: 76, l: 8 } },
    { tone: 950, hex: '#010402', contrast: 5, wcag: 'Fail', usage: 'UI only', rgb: { r: 1, g: 4, b: 2 }, hsl: { h: 140, s: 60, l: 1 } },
  ],
};

/**
 * Base Colors (White & Black)
 */
export const baseColors = {
  white: { hex: '#FDFCFC', rgb: { r: 253, g: 252, b: 252 }, contrast: 104 },
  black: { hex: '#000000', rgb: { r: 0, g: 0, b: 0 }, contrast: 104 },
};

/**
 * All color palettes
 */
export const allPalettes: ColorPalette[] = [
  tealPalette,
  bluePalette,
  yellowPalette,
  orangePalette,
  redPalette,
  greenPalette,
  neutralPalette,
  purplePalette,
  pinkPalette,
  indigoPalette,
  forestPalette,
];

/**
 * Get palette by slug
 */
export function getPaletteBySlug(slug: string): ColorPalette | undefined {
  return allPalettes.find((p) => p.slug === slug);
}

/**
 * Get color shade from palette
 */
export function getColorShade(
  paletteSlug: string,
  tone: ColorTone
): ColorShade | undefined {
  const palette = getPaletteBySlug(paletteSlug);
  return palette?.shades.find((s) => s.tone === tone);
}

/**
 * Calculate WCAG contrast ratio
 */
export function calculateContrastRatio(
  color1: { r: number; g: number; b: number },
  color2: { r: number; g: number; b: number }
): number {
  const getLuminance = (rgb: { r: number; g: number; b: number }) => {
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((val) => {
      const srgb = val / 255;
      return srgb <= 0.03928 ? srgb / 12.92 : Math.pow((srgb + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Get WCAG level from contrast ratio
 */
export function getWCAGLevel(contrast: number): WCAGLevel {
  if (contrast >= 7) return 'AAA';
  if (contrast >= 4.5) return 'AA';
  if (contrast >= 3) return 'A';
  return 'Fail';
}

/**
 * Check if color passes WCAG for text
 */
export function passesWCAGForText(
  contrast: number,
  level: 'AA' | 'AAA' = 'AA'
): boolean {
  return level === 'AA' ? contrast >= 4.5 : contrast >= 7;
}

/**
 * Check if color passes WCAG for large text
 */
export function passesWCAGForLargeText(
  contrast: number,
  level: 'AA' | 'AAA' = 'AA'
): boolean {
  return level === 'AA' ? contrast >= 3 : contrast >= 4.5;
}
