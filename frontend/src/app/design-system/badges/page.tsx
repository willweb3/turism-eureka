import { BadgesDemo } from '@/design-system/demo/sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Badges | Design System | Azoreon',
  description: 'Badge components for status and labels',
};

export default function BadgesPage() {
  return <BadgesDemo />;
}
