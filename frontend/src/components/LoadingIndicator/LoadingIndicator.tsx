'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import type { LoadingIndicatorProps } from './LoadingIndicator.types';
import {
  loadingContainerVariants,
  loadingLabelVariants,
  loadingSizeConfig,
  speedConfig,
} from './LoadingIndicator.styles';

/**
 * LoadingIndicator Component
 *
 * Circular spinner with customizable sizes, colors, and labels.
 * Uses SVG for smooth rendering and performance.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <LoadingIndicator />
 *
 * // With label
 * <LoadingIndicator
 *   size="md"
 *   label="Loading..."
 *   showLabel
 * />
 *
 * // Custom colors and speed
 * <LoadingIndicator
 *   size="lg"
 *   color="#DC2626"
 *   trackColor="#FEE2E2"
 *   speed="slow"
 * />
 * ```
 */
export function LoadingIndicator({
  size = 'md',
  customSize,
  variant = 'spinner',
  color = '#3CA997',
  trackColor = '#F2F6F8',
  label,
  showLabel = false,
  labelPosition = 'bottom',
  speed = 'normal',
  customDuration,
  ariaLabel,
  role = 'status',
  className,
  style,
}: LoadingIndicatorProps) {
  // Get size configuration
  const sizeConfig = loadingSizeConfig[size];
  const pixelSize = customSize || sizeConfig.size;
  const strokeWidth = sizeConfig.strokeWidth;

  // Calculate circle properties
  const radius = (pixelSize - strokeWidth) / 2;
  const center = pixelSize / 2;
  const circumference = 2 * Math.PI * radius;

  // Determine dash array based on variant
  // Spinner shows 75% of circle, Simple shows 85%
  const percentage = variant === 'spinner' ? 0.75 : 0.85;
  const dashLength = circumference * percentage;
  const gapLength = circumference * (1 - percentage);

  // Get animation duration
  const duration = customDuration || speedConfig[speed];

  return (
    <div
      className={cn(loadingContainerVariants({ labelPosition }), className)}
      style={style}
    >
      {/* SVG Spinner */}
      <svg
        width={pixelSize}
        height={pixelSize}
        viewBox={`0 0 ${pixelSize} ${pixelSize}`}
        className="animate-spin"
        style={{ animationDuration: `${duration}s` }}
        role={role}
        aria-label={ariaLabel || (typeof label === 'string' ? label : 'Loading')}
        aria-live="polite"
      >
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
          className="dark:stroke-white/20"
        />

        {/* Animated spinner circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${dashLength} ${gapLength}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${center} ${center})`}
          style={{
            transformOrigin: 'center',
          }}
        />
      </svg>

      {/* Label */}
      {showLabel && label && (
        <span className={loadingLabelVariants({ size })}>
          {label}
        </span>
      )}
    </div>
  );
}
