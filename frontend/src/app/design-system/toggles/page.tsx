import { ToggleDemo } from '@/design-system/demo/sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Toggles | Design System | Azoreon',
  description: 'Toggle switch components for binary ON/OFF controls',
};

export default function TogglesPage() {
  return <ToggleDemo />;
}
