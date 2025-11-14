'use client';

import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';
import type { TooltipProps } from './Tooltip.types';
import {
  tooltipVariants,
  tooltipArrowVariants,
  tooltipTitleVariants,
  tooltipContentVariants,
} from './Tooltip.styles';

/**
 * Tooltip Component
 *
 * Small informative pop-up that appears on hover or focus.
 * Built on Radix UI for accessibility and intelligent positioning.
 *
 * Features:
 * - Auto-positioning with collision detection
 * - Keyboard accessible (focus triggers)
 * - Configurable delay
 * - Optional arrow
 * - Supporting text (title + content)
 *
 * @example
 * ```tsx
 * <Tooltip content="Save your changes">
 *   <button>Save</button>
 * </Tooltip>
 *
 * <Tooltip
 *   title="Pro Feature"
 *   content="Upgrade to Pro to unlock this feature"
 *   placement="top"
 * >
 *   <button>Advanced Settings</button>
 * </Tooltip>
 * ```
 */
export function Tooltip({
  content,
  title,
  children,
  placement = 'top',
  showArrow = true,
  delay = 300,
  disabled = false,
  className,
  contentClassName,
}: TooltipProps) {
  // If disabled, just return the children without tooltip
  if (disabled) {
    return children;
  }

  // Parse placement into side and align for Radix UI
  const [side, alignPart] = placement.split('-') as [
    'top' | 'bottom' | 'left' | 'right',
    string?
  ];
  const align = alignPart === 'start' ? 'start' : alignPart === 'end' ? 'end' : 'center';

  return (
    <TooltipPrimitive.Provider delayDuration={delay}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            sideOffset={8}
            className={cn(tooltipVariants(), className)}
          >
            {title && <div className={tooltipTitleVariants()}>{title}</div>}

            <div className={cn(tooltipContentVariants(), contentClassName)}>{content}</div>

            {showArrow && (
              <TooltipPrimitive.Arrow
                className={tooltipArrowVariants()}
                width={11}
                height={5}
              />
            )}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
