'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { LoadingIndicator } from './LoadingIndicator';
import type { LoadingOverlayProps } from './LoadingIndicator.types';

/**
 * LoadingOverlay Component
 *
 * Full-screen or parent-relative overlay with loading indicator.
 * Useful for blocking UI during async operations.
 *
 * @example
 * ```tsx
 * // Fullscreen overlay
 * <LoadingOverlay
 *   show={isLoading}
 *   fullscreen
 *   indicatorProps={{ size: 'lg', label: 'Loading...', showLabel: true }}
 * />
 *
 * // Parent-relative overlay
 * <div className="relative">
 *   <LoadingOverlay
 *     show={isLoading}
 *     indicatorProps={{ size: 'md' }}
 *   />
 *   <YourContent />
 * </div>
 * ```
 */
export function LoadingOverlay({
  show,
  fullscreen = false,
  overlayColor = 'rgba(255, 255, 255, 0.9)',
  overlayOpacity,
  indicatorProps,
  children,
  className,
  zIndex = 50,
}: LoadingOverlayProps) {
  if (!show) return null;

  // Determine final overlay color with opacity
  const finalOverlayColor = overlayOpacity !== undefined
    ? `rgba(255, 255, 255, ${overlayOpacity})`
    : overlayColor;

  return (
    <div
      className={cn(
        'flex items-center justify-center',
        fullscreen ? 'fixed inset-0' : 'absolute inset-0',
        className
      )}
      style={{
        backgroundColor: finalOverlayColor,
        zIndex,
      }}
      role="dialog"
      aria-busy="true"
      aria-live="polite"
    >
      {children || (
        <LoadingIndicator
          size="lg"
          label="Loading..."
          showLabel
          {...indicatorProps}
        />
      )}
    </div>
  );
}
