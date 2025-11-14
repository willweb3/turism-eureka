import { ChipsDemo } from '@/design-system/demo/sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chips | Design System | Azoreon',
  description: 'Chip components for tags and filters',
};

export default function ChipsPage() {
  return <ChipsDemo />;
}
