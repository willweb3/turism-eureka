import { ReactNode } from 'react';

/**
 * Toggle size type
 * - sm: 36x20px (thumb 16x16px)
 * - md: 44x24px (thumb 20x20px)
 */
export type ToggleSize = 'sm' | 'md';

/**
 * Toggle state helper type
 */
export type ToggleState = 'checked' | 'unchecked';

/**
 * Base Toggle component props
 *
 * @example
 * ```tsx
 * // Uncontrolled
 * <Toggle defaultChecked={false} onChange={(checked) => console.log(checked)} />
 *
 * // Controlled
 * const [enabled, setEnabled] = useState(false);
 * <Toggle checked={enabled} onChange={setEnabled} />
 * ```
 */
export interface ToggleProps {
  /** Controlled state - toggle is checked or not */
  checked?: boolean;

  /** Default checked state for uncontrolled toggle */
  defaultChecked?: boolean;

  /** Callback when toggle state changes (can be async) */
  onChange?: (checked: boolean) => void | Promise<void>;

  /** Alternative callback for state change */
  onCheckedChange?: (checked: boolean) => void;

  /** Whether toggle is disabled */
  disabled?: boolean;

  /** Size of the toggle
   * @default 'md'
   */
  size?: ToggleSize;

  /** Name attribute for form integration */
  name?: string;

  /** ID attribute */
  id?: string;

  /** Whether field is required (for forms) */
  required?: boolean;

  /** Additional CSS classes for the toggle container */
  className?: string;

  /** Additional CSS classes for the thumb (circular button) */
  thumbClassName?: string;

  /** Show loading spinner in thumb */
  loading?: boolean;

  /** ARIA label for accessibility */
  'aria-label'?: string;

  /** ARIA labelledby for accessibility */
  'aria-labelledby'?: string;

  /** ARIA describedby for accessibility */
  'aria-describedby'?: string;
}

/**
 * Toggle with label component props
 *
 * @example
 * ```tsx
 * <ToggleWithLabel
 *   label="Enable notifications"
 *   description="Receive email notifications for new messages"
 *   checked={notifications}
 *   onChange={setNotifications}
 * />
 * ```
 */
export interface ToggleWithLabelProps extends ToggleProps {
  /** Label text or component */
  label: string | ReactNode;

  /** Optional description below the label */
  description?: string | ReactNode;

  /** Where to place the label relative to toggle
   * @default 'right'
   */
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom';

  /** Show required indicator (*) */
  required?: boolean;

  /** Error message to display */
  error?: string;

  /** Hint text to display when no error */
  hint?: string;
}

/**
 * Return type for useToggle hook
 *
 * @example
 * ```tsx
 * const darkMode = useToggle(false);
 *
 * <Toggle
 *   checked={darkMode.checked}
 *   onChange={darkMode.setChecked}
 * />
 *
 * <button onClick={darkMode.toggle}>Toggle</button>
 * <button onClick={darkMode.setOn}>Turn On</button>
 * <button onClick={darkMode.setOff}>Turn Off</button>
 * ```
 */
export interface UseToggleReturn {
  /** Current checked state */
  checked: boolean;

  /** Toggle between checked/unchecked */
  toggle: () => void;

  /** Set checked state */
  setChecked: (checked: boolean) => void;

  /** Set to checked (ON) */
  setOn: () => void;

  /** Set to unchecked (OFF) */
  setOff: () => void;
}
