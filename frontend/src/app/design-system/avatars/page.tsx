import { AvatarsDemo } from '@/design-system/demo/sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avatars | Design System | Azoreon',
  description: 'Avatar components for user profiles',
};

export default function AvatarsPage() {
  return <AvatarsDemo />;
}
