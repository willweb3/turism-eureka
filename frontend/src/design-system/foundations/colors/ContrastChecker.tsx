'use client';

import React, { useState, useMemo } from 'react';
import { calculateContrastRatio, getWCAGLevel, passesWCAGForText, passesWCAGForLargeText } from './colors.config';
import { Badge } from '@/design-system/demo/components/Badge';
import { cn } from '@/lib/utils';

/**
 * ContrastChecker Component
 * Interactive tool to check color contrast ratios and WCAG compliance
 */
export function ContrastChecker() {
  const [foreground, setForeground] = useState('#000000');
  const [background, setBackground] = useState('#FFFFFF');

  // Parse hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  // Calculate contrast ratio
  const contrastRatio = useMemo(() => {
    const fgRgb = hexToRgb(foreground);
    const bgRgb = hexToRgb(background);
    return calculateContrastRatio(fgRgb, bgRgb);
  }, [foreground, background]);

  const wcagLevel = getWCAGLevel(contrastRatio);
  const passesTextAA = passesWCAGForText(contrastRatio, 'AA');
  const passesTextAAA = passesWCAGForText(contrastRatio, 'AAA');
  const passesLargeTextAA = passesWCAGForLargeText(contrastRatio, 'AA');
  const passesLargeTextAAA = passesWCAGForLargeText(contrastRatio, 'AAA');

  return (
    <div className="space-y-6">
      {/* Color inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Foreground */}
        <div>
          <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
            Foreground (Text)
          </label>
          <div className="flex gap-3">
            <input
              type="color"
              value={foreground}
              onChange={(e) => setForeground(e.target.value)}
              className="w-16 h-16 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 cursor-pointer"
            />
            <input
              type="text"
              value={foreground}
              onChange={(e) => setForeground(e.target.value)}
              className="flex-1 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-mono"
              placeholder="#000000"
            />
          </div>
        </div>

        {/* Background */}
        <div>
          <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
            Background
          </label>
          <div className="flex gap-3">
            <input
              type="color"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className="w-16 h-16 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 cursor-pointer"
            />
            <input
              type="text"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className="flex-1 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-mono"
              placeholder="#FFFFFF"
            />
          </div>
        </div>
      </div>

      {/* Live preview */}
      <div
        className="p-8 rounded-lg border-2 border-neutral-300 dark:border-neutral-700"
        style={{ backgroundColor: background }}
      >
        <div style={{ color: foreground }} className="space-y-4">
          <h2 className="text-3xl font-bold">Large Text (18pt/24px+)</h2>
          <p className="text-base">
            Normal text (16px) - The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-sm">
            Small text (14px) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Contrast ratio display */}
      <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div className="text-center mb-4">
          <div className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">
            {contrastRatio.toFixed(2)}:1
          </div>
          <div className="flex justify-center gap-2">
            <Badge variant={wcagLevel} size="md">
              {wcagLevel}
            </Badge>
          </div>
        </div>

        {/* Compliance grid */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* Normal Text */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
              Normal Text
            </h4>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">AA (4.5:1)</span>
                <Badge variant={passesTextAA ? 'AA' : 'Fail'} size="sm">
                  {passesTextAA ? 'Pass' : 'Fail'}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">AAA (7:1)</span>
                <Badge variant={passesTextAAA ? 'AAA' : 'Fail'} size="sm">
                  {passesTextAAA ? 'Pass' : 'Fail'}
                </Badge>
              </div>
            </div>
          </div>

          {/* Large Text */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
              Large Text
            </h4>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">AA (3:1)</span>
                <Badge variant={passesLargeTextAA ? 'AA' : 'Fail'} size="sm">
                  {passesLargeTextAA ? 'Pass' : 'Fail'}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">AAA (4.5:1)</span>
                <Badge variant={passesLargeTextAAA ? 'AAA' : 'Fail'} size="sm">
                  {passesLargeTextAAA ? 'Pass' : 'Fail'}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
