import { ButtonsDemo } from '@/design-system/demo/sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buttons | Design System | Azoreon',
  description: 'Button components with variants and sizes',
};

export default function ButtonsPage() {
  return <ButtonsDemo />;
}
