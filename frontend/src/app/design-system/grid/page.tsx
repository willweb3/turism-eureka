import { GridDemo } from '@/design-system/demo/sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grid System | Design System | Azoreon',
  description: 'Responsive grid system with 4, 8, and 12 column layouts',
};

export default function GridPage() {
  return <GridDemo />;
}
