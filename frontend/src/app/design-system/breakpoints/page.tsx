import { BreakpointsDemo } from '@/design-system/demo/sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Breakpoints | Design System | Azoreon',
  description: 'Responsive breakpoints for mobile to desktop',
};

export default function BreakpointsPage() {
  return <BreakpointsDemo />;
}
