import { redirect } from 'next/navigation';

/**
 * Design System Page - Root
 * Redirects to the overview page
 */
export default function DesignSystemPage() {
  redirect('/design-system/overview');
}
