'use client';

import React, { useState } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';
import { SliderTooltip } from './SliderTooltip';
import type { SliderProps } from './Slider.types';
import {
  sliderRootVariants,
  sliderTrackVariants,
  sliderRangeVariants,
  sliderThumbVariants,
  sliderLabelVariants,
} from './Slider.styles';

/**
 * Slider Component
 *
 * Range input with single or dual thumb support, built on Radix UI.
 * Includes keyboard navigation, accessibility, and customizable labels.
 *
 * @example
 * ```tsx
 * // Single slider
 * <Slider value={50} onChange={(val) => setValue(val)} />
 *
 * // Dual slider with labels
 * <Slider
 *   type="dual"
 *   values={[25, 75]}
 *   labelPosition="bottom"
 *   formatLabel={(val) => `${val}%`}
 *   onChange={setValues}
 * />
 * ```
 */
export function Slider({
  type = 'single',
  value = 50,
  values = [25, 75],
  min = 0,
  max = 100,
  step = 1,
  showLabels = true,
  labelPosition = 'none',
  formatLabel = (val) => `${val}%`,
  width,
  trackColor,
  fillColor,
  thumbColor,
  disabled = false,
  minRange = 0,
  onChange,
  onChangeComplete,
  ariaLabel,
  id,
  className,
  style,
}: SliderProps) {
  const isDual = type === 'dual' || type === 'range';
  const [isDragging, setIsDragging] = useState(false);

  // Convert single value to array for Radix UI
  const currentValues = isDual ? values : [value];

  const handleValueChange = (newValues: number[]) => {
    if (isDual) {
      // Enforce minRange
      const [start, end] = newValues;
      if (minRange > 0 && end - start < minRange) {
        return;
      }
      onChange?.(newValues as [number, number]);
    } else {
      onChange?.(newValues[0]);
    }
  };

  const handleValueCommit = (newValues: number[]) => {
    if (isDual) {
      onChangeComplete?.(newValues as [number, number]);
    } else {
      onChangeComplete?.(newValues[0]);
    }
    setIsDragging(false);
  };

  const showFloatingTooltip = labelPosition.includes('floating');
  const showFixedLabel = showLabels && labelPosition === 'bottom';

  return (
    <div className="relative" style={{ width: width || '320px' }}>
      <SliderPrimitive.Root
        className={cn(sliderRootVariants({ disabled }), className)}
        value={currentValues}
        onValueChange={handleValueChange}
        onValueCommit={handleValueCommit}
        onPointerDown={() => setIsDragging(true)}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        aria-label={ariaLabel}
        id={id}
        style={style}
      >
        <SliderPrimitive.Track
          className={sliderTrackVariants()}
          style={trackColor ? { backgroundColor: trackColor } : undefined}
        >
          <SliderPrimitive.Range
            className={sliderRangeVariants()}
            style={fillColor ? { backgroundColor: fillColor } : undefined}
          />
        </SliderPrimitive.Track>

        {currentValues.map((val, index) => {
          const percentage = ((val - min) / (max - min)) * 100;

          return (
            <React.Fragment key={index}>
              <SliderPrimitive.Thumb
                className={sliderThumbVariants()}
                style={thumbColor ? { borderColor: thumbColor } : undefined}
              >
                {/* Floating Tooltip */}
                {showFloatingTooltip && (
                  <SliderTooltip
                    value={formatLabel(val)}
                    position={
                      labelPosition as 'top-floating' | 'bottom-floating'
                    }
                    show={isDragging}
                  />
                )}
              </SliderPrimitive.Thumb>

              {/* Fixed Bottom Label */}
              {showFixedLabel && (
                <span
                  className={sliderLabelVariants({ position: 'bottom' })}
                  style={{ left: `${percentage}%` }}
                >
                  {formatLabel(val)}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </SliderPrimitive.Root>
    </div>
  );
}
