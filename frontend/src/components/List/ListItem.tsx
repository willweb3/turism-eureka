'use client';

import React, { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/Checkbox';
import type { ListItemProps } from './List.types';
import { listItemVariants, listItemIconVariants } from './List.styles';

/**
 * ListItem Component
 *
 * Individual item in a list with optional icon, checkbox, and selection states.
 * Can render as li, anchor, or button depending on props.
 *
 * @example
 * ```tsx
 * // Basic item
 * <ListItem>Settings</ListItem>
 *
 * // With icon
 * <ListItem icon={<Settings />}>Settings</ListItem>
 *
 * // With checkbox
 * <ListItem checkbox checked={true} onCheckedChange={setChecked}>
 *   Item 1
 * </ListItem>
 *
 * // As link
 * <ListItem href="/settings">Settings</ListItem>
 * ```
 */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      children,
      icon,
      checkbox = false,
      checked = false,
      onCheckedChange,
      selected = false,
      disabled = false,
      onClick,
      href,
      className,
      showBorder = false,
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(checked);
    const isControlled = onCheckedChange !== undefined;
    const checkedState = isControlled ? checked : internalChecked;

    const handleClick = () => {
      if (disabled) return;

      if (checkbox) {
        const newChecked = !checkedState;
        if (!isControlled) {
          setInternalChecked(newChecked);
        }
        onCheckedChange?.(newChecked);
      }

      onClick?.();
    };

    const content = (
      <>
        {checkbox && (
          <Checkbox
            checked={checkedState}
            onChange={(newChecked) => {
              if (!isControlled) {
                setInternalChecked(newChecked);
              }
              onCheckedChange?.(newChecked);
            }}
            disabled={disabled}
            size="sm"
            className={listItemIconVariants({ size: 'sm' })}
          />
        )}

        {icon && !checkbox && (
          <span className={listItemIconVariants({ size: 'md' })}>{icon}</span>
        )}

        <span className="flex-1">{children}</span>
      </>
    );

    // Render as anchor if href is provided
    if (href) {
      return (
        <a
          href={href}
          onClick={handleClick}
          className={cn(
            listItemVariants({
              state: disabled ? 'disabled' : 'hover',
              showBorder,
              selected,
            }),
            className
          )}
          aria-disabled={disabled}
        >
          {content}
        </a>
      );
    }

    // Otherwise render as li
    return (
      <li
        ref={ref}
        onClick={handleClick}
        className={cn(
          listItemVariants({
            state: disabled ? 'disabled' : 'hover',
            showBorder,
            selected,
          }),
          className
        )}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {content}
      </li>
    );
  }
);

ListItem.displayName = 'ListItem';
