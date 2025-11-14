'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { sliderTooltipVariants } from './Slider.styles';
import type { SliderTooltipProps } from './Slider.types';

export function SliderTooltip({ value, position, show }: SliderTooltipProps) {
  const isTop = position === 'top-floating';

  return (
    <div className={cn(sliderTooltipVariants({ position, show }))}>
      {/* Arrow */}
      {isTop && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
      )}

      {/* Content */}
      <div className="text-center">{value}</div>

      {/* Arrow */}
      {!isTop && (
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white" />
      )}
    </div>
  );
}
