import { TypographyDemo } from '@/design-system/demo/sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Typography | Design System | Azoreon',
  description: 'Typography scale and font families',
};

export default function TypographyPage() {
  return <TypographyDemo />;
}
