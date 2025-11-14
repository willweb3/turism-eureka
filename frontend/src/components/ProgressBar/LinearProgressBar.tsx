'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import type { LinearProgressBarProps } from './ProgressBar.types';
import {
  linearContainerVariants,
  linearTrackVariants,
  linearFillVariants,
  linearPercentageVariants,
  linearLabelVariants,
} from './ProgressBar.styles';

/**
 * LinearProgressBar Component
 *
 * Horizontal progress bar with customizable labels, sizes, and colors.
 * Follows Figma design specifications with support for different states.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <LinearProgressBar value={40} />
 *
 * // With label
 * <LinearProgressBar
 *   value={60}
 *   labelPosition="bottom"
 *   labelText="5 items missing"
 * />
 *
 * // Complete state
 * <LinearProgressBar
 *   value={100}
 *   color="success"
 *   labelPosition="bottom"
 *   labelText="Completed"
 * />
 * ```
 */
export function LinearProgressBar({
  value,
  size = 'medium',
  color = 'teal',
  customColor,
  showPercentage = true,
  labelPosition = 'right',
  labelText,
  animated = true,
  transitionDuration = 300,
  ariaLabel,
  ariaValueText,
  className,
  trackColor,
}: LinearProgressBarProps) {
  // Clamp value between 0 and 100
  const clampedValue = Math.min(100, Math.max(0, value));

  // Determine label state
  const labelState = clampedValue === 0 ? 'zero' : clampedValue === 100 ? 'complete' : 'progress';

  // Determine fill color
  const fillColor =
    color === 'custom' && customColor
      ? customColor
      : clampedValue === 100
      ? '#29B268' // Success green for 100%
      : '#3CA997'; // Teal for in progress

  // Build wrapper classes based on label position
  const wrapperClasses = labelPosition === 'none' || labelPosition === 'right';
  const showTopLabel = labelPosition === 'top' && labelText;
  const showBottomLabel = labelPosition === 'bottom' && labelText;

  return (
    <div className={cn(linearContainerVariants({ labelPosition }), className)}>
      {/* Top label */}
      {showTopLabel && (
        <span className={linearLabelVariants({ size, state: labelState })}>
          {labelText}
        </span>
      )}

      {/* Progress bar wrapper */}
      <div className="flex items-center gap-3 flex-1">
        {/* Track and fill */}
        <div
          className={linearTrackVariants({ size })}
          style={trackColor ? { backgroundColor: trackColor } : undefined}
        >
          <div
            className={linearFillVariants({ color, size, animated })}
            style={{
              width: `${clampedValue}%`,
              backgroundColor: color === 'custom' ? fillColor : undefined,
              transitionDuration: animated ? `${transitionDuration}ms` : undefined,
            }}
            role="progressbar"
            aria-valuenow={clampedValue}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={ariaLabel}
            aria-valuetext={ariaValueText || `${clampedValue}%`}
          />
        </div>

        {/* Percentage label (inline) */}
        {showPercentage && (
          <span className={linearPercentageVariants({ size })}>
            {Math.round(clampedValue)}%
          </span>
        )}
      </div>

      {/* Bottom label */}
      {showBottomLabel && (
        <span className={linearLabelVariants({ size, state: labelState })}>
          {labelText}
        </span>
      )}
    </div>
  );
}
