import { InputsDemo } from '@/design-system/demo/sections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inputs | Design System | Azoreon',
  description: 'Input components and form controls',
};

export default function InputsPage() {
  return <InputsDemo />;
}
