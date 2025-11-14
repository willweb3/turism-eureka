/**
 * Toggle (Switch) Component
 *
 * Componente para alternar entre dois estados: ON/OFF.
 * Usado para configurações, preferências e controles binários.
 *
 * @module Toggle
 */

// Componentes
export { Toggle } from './Toggle';
export { ToggleWithLabel } from './ToggleWithLabel';

// Types
export type {
  ToggleProps,
  ToggleWithLabelProps,
  ToggleSize,
  ToggleState,
  UseToggleReturn,
} from './Toggle.types';

// Hooks
export { useToggle } from './Toggle';

// Estilos (opcional - para customização avançada)
export {
  toggleVariants,
  toggleThumbVariants,
  toggleFocusRingVariants,
  toggleLabelVariants,
  toggleColors,
  toggleAnimations,
} from './Toggle.styles';
