'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface DesignSystemLayoutProps {
  children: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'overview', label: 'Overview', href: '/design-system/overview' },
  { id: 'grid', label: 'Grid System', href: '/design-system/grid' },
  { id: 'spacing', label: 'Spacing', href: '/design-system/spacing' },
  { id: 'breakpoints', label: 'Breakpoints', href: '/design-system/breakpoints' },
  { id: 'colors', label: 'Colors', href: '/design-system/colors' },
  { id: 'typography', label: 'Typography', href: '/design-system/typography' },
  { id: 'inputs', label: 'Inputs', href: '/design-system/inputs' },
  { id: 'dropdowns', label: 'Dropdowns', href: '/design-system/dropdowns' },
  { id: 'buttons', label: 'Buttons', href: '/design-system/buttons' },
  { id: 'badges', label: 'Badges', href: '/design-system/badges' },
  { id: 'avatars', label: 'Avatars', href: '/design-system/avatars' },
  { id: 'chips', label: 'Chips', href: '/design-system/chips' },
  { id: 'dividers', label: 'Dividers', href: '/design-system/dividers' },
  { id: 'toggles', label: 'Toggles', href: '/design-system/toggles' },
  { id: 'checkbox-radio', label: 'Checkbox & Radio', href: '/design-system/checkbox-radio' },
  { id: 'tooltip', label: 'Tooltip', href: '/design-system/tooltip' },
  { id: 'list', label: 'List', href: '/design-system/list' },
  { id: 'progress-bars', label: 'Progress Bars', href: '/design-system/progress-bars' },
  { id: 'loading-indicators', label: 'Loading Indicators', href: '/design-system/loading-indicators' },
  { id: 'sliders', label: 'Sliders', href: '/design-system/sliders' },
  { id: 'pagination', label: 'Pagination', href: '/design-system/pagination' },
  { id: 'custom-components', label: 'Custom Components', href: '/design-system/custom-components' },
];

/**
 * DesignSystemLayout Component
 *
 * Layout wrapper for the Design System demo page with:
 * - Sidebar navigation
 * - Dark mode toggle
 * - Responsive design
 */
export function DesignSystemLayout({ children }: DesignSystemLayoutProps) {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={cn('min-h-screen bg-white dark:bg-gray-900 transition-colors', darkMode && 'dark')}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Azoreon Design System
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Design specifications & component library
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* GitHub link */}
            <a
              href="https://github.com/azoreon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="View on GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Sidebar - Normal static column */}
        <aside className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-y-auto shrink-0">
          <nav className="p-4 sticky top-16">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      'hover:bg-gray-100 dark:hover:bg-gray-800',
                      pathname === item.href
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                        : 'text-gray-700 dark:text-gray-300'
                    )}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Resources
              </p>
              <ul className="mt-4 space-y-1">
                <li>
                  <a
                    href="https://figma.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Figma Designs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 w-full overflow-y-auto">
          <div className="p-6 lg:p-8 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
