'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { List } from './List';
import type { ListItemGroupProps } from './List.types';
import { listItemGroupTitleVariants } from './List.styles';

/**
 * ListItemGroup Component
 *
 * Groups related list items with an optional title.
 * Useful for organizing lists into sections.
 *
 * @example
 * ```tsx
 * <ListItemGroup title="General">
 *   <ListItem icon={<User />}>Profile</ListItem>
 *   <ListItem icon={<Bell />}>Notifications</ListItem>
 * </ListItemGroup>
 *
 * <ListItemGroup title="Advanced">
 *   <ListItem icon={<Lock />}>Security</ListItem>
 *   <ListItem icon={<Key />}>API Keys</ListItem>
 * </ListItemGroup>
 * ```
 */
export function ListItemGroup({ title, children, className }: ListItemGroupProps) {
  return (
    <div className={cn('mb-4 last:mb-0', className)}>
      {title && <h3 className={listItemGroupTitleVariants()}>{title}</h3>}
      <List>{children}</List>
    </div>
  );
}
