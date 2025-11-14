'use client';

import React from 'react';
import { ColorSwatch } from './ColorSwatch';
import { Badge } from '@/design-system/demo/components/Badge';
import type { ColorPalette as ColorPaletteType } from './colors.config';
import { cn } from '@/lib/utils';

export interface ColorPaletteProps {
  palette: ColorPaletteType;
  className?: string;
}

/**
 * ColorPalette Component
 * Displays a complete color palette with all its shades
 */
export function ColorPalette({ palette, className }: ColorPaletteProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {/* Palette header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white capitalize">
            {palette.name}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {palette.description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {palette.isPrimary && (
            <Badge variant="info" size="sm">
              Primary
            </Badge>
          )}
          <Badge variant="default" size="sm">
            {palette.shades.length} shades
          </Badge>
        </div>
      </div>

      {/* Color swatches grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-4">
        {palette.shades.map((shade) => (
          <ColorSwatch
            key={shade.tone}
            shade={shade}
            paletteSlug={palette.slug}
          />
        ))}
      </div>

      {/* Quick Tailwind reference */}
      <div className="pt-2 border-t border-neutral-200 dark:border-neutral-700">
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          <span className="font-semibold">Tailwind:</span>{' '}
          <code className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-900 dark:text-neutral-100">
            bg-{palette.slug}-[tone]
          </code>
          ,{' '}
          <code className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-900 dark:text-neutral-100">
            text-{palette.slug}-[tone]
          </code>
          ,{' '}
          <code className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-900 dark:text-neutral-100">
            border-{palette.slug}-[tone]
          </code>
        </p>
      </div>
    </div>
  );
}
