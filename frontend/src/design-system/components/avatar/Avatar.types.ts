/**
 * Avatar Component Types
 * Type definitions for Avatar and AvatarGroup components
 */

/**
 * Avatar size variants
 * - xs: 24px (Extra small - for compact lists)
 * - sm: 32px (Small - for tight spaces)
 * - md: 40px (Medium - default size)
 * - lg: 48px (Large - for emphasis)
 * - xl: 56px (Extra large - for profiles)
 * - 2xl: 64px (Double extra large - for headers)
 */
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Avatar status indicator variants
 * - online: User is currently active (green)
 * - offline: User is not available (gray)
 * - away: User is away from keyboard (yellow)
 * - busy: User is busy, do not disturb (red)
 */
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

/**
 * Avatar visual state
 * - default: Normal appearance
 * - hover: Mouse over state
 * - focused: Keyboard focus state
 */
export type AvatarState = 'default' | 'hover' | 'focused';

/**
 * Avatar component props
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Image source URL
   * If provided and loads successfully, displays the image
   */
  src?: string;

  /**
   * Alternative text for the image
   * Important for accessibility
   */
  alt?: string;

  /**
   * Initials to display when no image is available
   * Typically 1-2 characters (e.g., "JD" for John Doe)
   */
  initials?: string;

  /**
   * Background color for initials display
   * Accepts any valid CSS color value
   * @default Generated from name/initials hash
   */
  backgroundColor?: string;

  /**
   * Text color for initials
   * Accepts any valid CSS color value
   * @default white
   */
  textColor?: string;

  /**
   * Show status indicator dot
   * @default false
   */
  showStatus?: boolean;

  /**
   * Status indicator color/type
   * @default 'offline'
   */
  status?: AvatarStatus;

  /**
   * Show placeholder icon when no image or initials
   * @default true
   */
  showPlaceholder?: boolean;

  /**
   * Avatar size variant
   * @default 'md'
   */
  size?: AvatarSize;

  /**
   * Visual state of the avatar
   * Used internally for hover/focus effects
   * @default 'default'
   */
  state?: AvatarState;

  /**
   * Click handler - makes avatar interactive
   * When provided, avatar becomes clickable and keyboard accessible
   */
  onClick?: () => void;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Name of the user (for tooltip and aria-label)
   * Also used to generate initials if initials prop not provided
   */
  name?: string;
}

/**
 * Avatar item for use in AvatarGroup
 * Extends AvatarProps but requires an id and excludes size (controlled by group)
 */
export interface AvatarGroupItem extends Omit<AvatarProps, 'size' | 'state'> {
  /**
   * Unique identifier for the avatar
   * Required for proper React key management
   */
  id: string;
}

/**
 * AvatarGroup display variant
 * - default: Shows all avatars, no truncation
 * - truncated: Shows max avatars, rest indicated by +N counter
 * - dropdown: Shows max avatars with expandable dropdown list
 */
export type AvatarGroupVariant = 'default' | 'truncated' | 'dropdown';

/**
 * AvatarGroup spacing between avatars
 * - tight: -8px overlap (closer together)
 * - normal: -4px overlap (default)
 * - loose: 0px overlap (no overlap, touching)
 */
export type AvatarGroupSpacing = 'tight' | 'normal' | 'loose';

/**
 * AvatarGroup component props
 */
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of avatar items to display
   * Each item should have a unique id
   */
  avatars: AvatarGroupItem[];

  /**
   * Size applied to all avatars in the group
   * @default 'md'
   */
  size?: AvatarSize;

  /**
   * Maximum number of avatars to display
   * When exceeded, remaining count shown as +N
   * @default undefined (show all)
   */
  max?: number;

  /**
   * Show tooltips with user names on hover
   * @default true
   */
  showTooltips?: boolean;

  /**
   * Display variant of the group
   * @default 'default'
   */
  variant?: AvatarGroupVariant;

  /**
   * Spacing/overlap between avatars
   * @default 'normal'
   */
  spacing?: AvatarGroupSpacing;

  /**
   * Callback when "Show More" is clicked
   * Used with truncated or dropdown variants
   */
  onShowMore?: () => void;

  /**
   * Additional CSS classes for the group container
   */
  className?: string;

  /**
   * Direction of avatar stacking
   * @default 'right' (avatars overlap to the right)
   */
  direction?: 'left' | 'right';
}
