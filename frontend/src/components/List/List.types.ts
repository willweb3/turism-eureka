/**
 * List Types
 */

/**
 * List variant determines the structure of list items
 */
export type ListVariant = 'default' | 'icon' | 'checkbox';

/**
 * List Props
 *
 * Container for list items with optional borders and variants
 */
export interface ListProps {
  /** List items */
  children: React.ReactNode;
  /** Visual variant */
  variant?: ListVariant;
  /** Show borders around items */
  showBorder?: boolean;
  /** Custom className */
  className?: string;
}

/**
 * ListItem Props
 *
 * Individual item in a list with optional icon, checkbox, and selection states
 */
export interface ListItemProps {
  /** Item content */
  children: React.ReactNode;
  /** Leading icon (20x20px) */
  icon?: React.ReactNode;
  /** Show as checkbox item */
  checkbox?: boolean;
  /** Checkbox checked state (controlled) */
  checked?: boolean;
  /** Checkbox change handler */
  onCheckedChange?: (checked: boolean) => void;
  /** Visual selected state */
  selected?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Link href (renders as anchor) */
  href?: string;
  /** Custom className */
  className?: string;
  /** Show border (propagated from List) */
  showBorder?: boolean;
}

/**
 * ListItemGroup Props
 *
 * Groups related list items with optional title
 */
export interface ListItemGroupProps {
  /** Group title */
  title?: string;
  /** List items */
  children: React.ReactNode;
  /** Custom className */
  className?: string;
}
