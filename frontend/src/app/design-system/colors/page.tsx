import { ColorSystemDemo } from '@/design-system/demo/sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Colors | Design System | Azoreon',
  description: 'Color system with 12 palettes and WCAG compliance',
};

export default function ColorsPage() {
  return <ColorSystemDemo />;
}
