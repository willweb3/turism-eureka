import { TooltipDemo } from '@/design-system/demo/sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tooltip | Design System | Azoreon',
  description: 'Small informative pop-ups for providing context on hover or focus',
};

export default function TooltipPage() {
  return <TooltipDemo />;
}
