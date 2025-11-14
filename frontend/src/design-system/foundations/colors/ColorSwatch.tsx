'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import type { ColorShade } from './colors.config';

export interface ColorSwatchProps {
  shade: ColorShade;
  paletteSlug: string;
  onClick?: () => void;
  className?: string;
}

/**
 * ColorSwatch Component
 * Individual color swatch with hover details and copy functionality
 */
export function ColorSwatch({ shade, paletteSlug, onClick, className }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const copyHex = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(shade.hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        'group relative cursor-pointer transition-transform hover:scale-105',
        className
      )}
    >
      {/* Color box */}
      <div
        className="w-full h-20 rounded-lg shadow-md transition-shadow hover:shadow-lg"
        style={{ backgroundColor: shade.hex }}
      />

      {/* Info */}
      <div className="mt-2 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
            {shade.tone}
          </span>
          <button
            onClick={copyHex}
            className="text-xs text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            title="Click to copy hex"
          >
            {copied ? '✓' : shade.hex}
          </button>
        </div>

        {/* WCAG badge - only show on hover for cleaner look */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <span
            className={cn(
              'inline-block px-1.5 py-0.5 text-xs font-semibold rounded',
              shade.wcag === 'AAA' && 'bg-green-600 text-white',
              shade.wcag === 'AA' && 'bg-green-500 text-white',
              shade.wcag === 'A' && 'bg-yellow-500 text-white',
              shade.wcag === 'Fail' && 'bg-red-500 text-white'
            )}
          >
            {shade.wcag}
          </span>
          <span className="ml-2 text-xs text-neutral-600 dark:text-neutral-400">
            {shade.contrast}:1
          </span>
        </div>
      </div>
    </div>
  );
}
