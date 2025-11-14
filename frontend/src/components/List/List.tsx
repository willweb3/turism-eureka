'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ListItem } from './ListItem';
import type { ListProps } from './List.types';
import { listVariants } from './List.styles';

/**
 * List Component
 *
 * Container for list items with optional borders and variants.
 * Automatically propagates showBorder to child ListItem components.
 *
 * @example
 * ```tsx
 * // Basic list
 * <List>
 *   <ListItem>Item 1</ListItem>
 *   <ListItem>Item 2</ListItem>
 * </List>
 *
 * // With borders
 * <List showBorder>
 *   <ListItem>Item 1</ListItem>
 *   <ListItem>Item 2</ListItem>
 * </List>
 *
 * // Icon variant
 * <List variant="icon">
 *   <ListItem icon={<Home />}>Dashboard</ListItem>
 *   <ListItem icon={<Settings />}>Settings</ListItem>
 * </List>
 * ```
 */
export function List({
  children,
  variant = 'default',
  showBorder = false,
  className,
}: ListProps) {
  return (
    <ul className={cn(listVariants({ padding: true }), className)} role="list">
      {React.Children.map(children, (child) => {
        // Propagate showBorder to ListItem children
        if (React.isValidElement(child) && 'value' in child.props && 'children' in child.props) {
          return React.cloneElement(child as React.ReactElement<any>, {
            ...child.props,
            showBorder,
          });
        }
        return child;
      })}
    </ul>
  );
}
