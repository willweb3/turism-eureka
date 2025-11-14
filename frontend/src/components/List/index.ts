/**
 * List Components
 *
 * Flexible list components with optional icons, checkboxes, and grouping.
 *
 * @example
 * ```tsx
 * // Basic list
 * <List>
 *   <ListItem>Settings</ListItem>
 *   <ListItem>Profile</ListItem>
 * </List>
 *
 * // With icons
 * <List>
 *   <ListItem icon={<Settings />}>Settings</ListItem>
 *   <ListItem icon={<User />}>Profile</ListItem>
 * </List>
 *
 * // With checkboxes
 * <List>
 *   <ListItem checkbox checked={checked1} onCheckedChange={setChecked1}>
 *     Item 1
 *   </ListItem>
 *   <ListItem checkbox checked={checked2} onCheckedChange={setChecked2}>
 *     Item 2
 *   </ListItem>
 * </List>
 *
 * // With borders
 * <List showBorder>
 *   <ListItem>Item 1</ListItem>
 *   <ListItem>Item 2</ListItem>
 * </List>
 *
 * // Grouped lists
 * <div>
 *   <ListItemGroup title="General">
 *     <ListItem icon={<User />}>Profile</ListItem>
 *     <ListItem icon={<Bell />}>Notifications</ListItem>
 *   </ListItemGroup>
 *
 *   <ListItemGroup title="Advanced">
 *     <ListItem icon={<Lock />}>Security</ListItem>
 *     <ListItem icon={<Key />}>API Keys</ListItem>
 *   </ListItemGroup>
 * </div>
 * ```
 */

export { List } from './List';
export { ListItem } from './ListItem';
export { ListItemGroup } from './ListItemGroup';

export type { ListProps, ListItemProps, ListItemGroupProps, ListVariant } from './List.types';

export { listVariants, listItemVariants, listItemIconVariants, listItemGroupTitleVariants } from './List.styles';
