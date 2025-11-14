'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import type { CircularProgressBarProps } from './ProgressBar.types';
import {
  circularContainerVariants,
  circularPercentageVariants,
  circularLabelVariants,
  circularSizeConfig,
} from './ProgressBar.styles';

/**
 * CircularProgressBar Component
 *
 * Circular or half-circle progress bar with customizable sizes and labels.
 * Uses SVG for smooth rendering and animations.
 *
 * @example
 * ```tsx
 * // Basic circle
 * <CircularProgressBar value={40} size="medium" />
 *
 * // With label
 * <CircularProgressBar
 *   value={40}
 *   size="medium"
 *   label="Users"
 *   labelPosition="outside"
 * />
 *
 * // Half-circle
 * <CircularProgressBar
 *   value={40}
 *   shape="half-circle"
 *   size="small"
 *   label="Progress"
 *   labelPosition="inside"
 * />
 * ```
 */
export function CircularProgressBar({
  value,
  shape = 'circle',
  size = 'medium',
  customSize,
  strokeWidth: customStrokeWidth,
  color = '#3CA997',
  trackColor = '#F2F6F8',
  showPercentage = true,
  label,
  labelPosition = 'none',
  animated = true,
  transitionDuration = 300,
  ariaLabel,
  className,
}: CircularProgressBarProps) {
  // Clamp value between 0 and 100
  const clampedValue = Math.min(100, Math.max(0, value));

  // Get size configuration
  const sizeConfig = circularSizeConfig[size];
  const diameter = customSize || sizeConfig.diameter;
  const strokeWidth = customStrokeWidth || sizeConfig.strokeWidth;

  // Calculate circle properties
  const radius = (diameter - strokeWidth) / 2;
  const center = diameter / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate stroke offset for progress
  const offset = shape === 'circle'
    ? circumference - (clampedValue / 100) * circumference
    : (circumference / 2) - (clampedValue / 100) * (circumference / 2);

  // SVG rotation and arc settings based on shape
  const isHalfCircle = shape === 'half-circle';
  const rotation = isHalfCircle ? 'rotate(0)' : 'rotate(-90)';
  const viewBoxHeight = isHalfCircle ? diameter / 2 + strokeWidth : diameter;

  // Helper function to describe an arc path (for half-circle)
  const describeArc = (
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    return [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(' ');
  };

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  // Calculate progress arc path for half-circle
  const progressArcPath = isHalfCircle
    ? describeArc(center, center, radius, 180, 180 + clampedValue * 1.8)
    : '';

  const backgroundArcPath = isHalfCircle
    ? describeArc(center, center, radius, 180, 0)
    : '';

  return (
    <div className={cn(circularContainerVariants({ labelPosition }), className)}>
      <svg
        width={diameter}
        height={viewBoxHeight}
        viewBox={`0 0 ${diameter} ${viewBoxHeight}`}
        className="overflow-visible"
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel || `${clampedValue}% progress`}
      >
        {/* Background circle/arc */}
        {isHalfCircle ? (
          <path
            d={backgroundArcPath}
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        ) : (
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeWidth}
          />
        )}

        {/* Progress circle/arc */}
        {isHalfCircle ? (
          <path
            d={progressArcPath}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{
              transition: animated ? `d ${transitionDuration}ms ease-out` : undefined,
            }}
          />
        ) : (
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform={`${rotation} ${center} ${center}`}
            style={{
              transition: animated
                ? `stroke-dashoffset ${transitionDuration}ms ease-out`
                : undefined,
            }}
          />
        )}

        {/* Percentage text */}
        {showPercentage && (
          <text
            x={center}
            y={isHalfCircle ? center - 10 : center}
            textAnchor="middle"
            dominantBaseline="middle"
            className={circularPercentageVariants({ size })}
          >
            {Math.round(clampedValue)}%
          </text>
        )}

        {/* Label inside (for half-circle or small circles) */}
        {label && labelPosition === 'inside' && (
          <text
            x={center}
            y={isHalfCircle ? center + 15 : center + 20}
            textAnchor="middle"
            dominantBaseline="middle"
            className={circularLabelVariants({ size })}
          >
            {label}
          </text>
        )}
      </svg>

      {/* Label outside */}
      {label && labelPosition === 'outside' && (
        <span className={circularLabelVariants({ size })}>{label}</span>
      )}
    </div>
  );
}
