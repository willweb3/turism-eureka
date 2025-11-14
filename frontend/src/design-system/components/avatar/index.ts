/**
 * Avatar Components
 * User avatar components with support for images, initials, status indicators, and groups
 *
 * @module Avatar
 *
 * Includes:
 * - Avatar: Individual avatar component
 * - AvatarGroup: Grouped avatars with stacking and truncation
 * - Utility functions for initials and color generation
 * - Complete TypeScript type definitions
 */

// Components
export { Avatar, getInitials, getColorFromName } from './Avatar';
export { AvatarGroup } from './AvatarGroup';

// Types
export type {
  AvatarProps,
  AvatarSize,
  AvatarStatus,
  AvatarState,
  AvatarGroupProps,
  AvatarGroupItem,
  AvatarGroupVariant,
  AvatarGroupSpacing,
} from './Avatar.types';
