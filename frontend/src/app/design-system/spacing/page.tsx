import { SpacingDemo } from '@/design-system/demo/sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spacing | Design System | Azoreon',
  description: 'Spacing system based on 4px base unit',
};

export default function SpacingPage() {
  return <SpacingDemo />;
}
