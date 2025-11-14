'use client';

import React from 'react';
import { DesignSystemLayout } from './DesignSystemLayout';
import { GridDemo, SpacingDemo, BreakpointsDemo, ColorSystemDemo, TypographyDemo, InputsDemo, DropdownsDemo, ButtonsDemo, BadgesDemo, AvatarsDemo, ChipsDemo } from './sections';
import { Container } from '@/design-system/foundations/grid';

/**
 * DesignSystemDemo Component
 *
 * Main demo page showcasing the entire design system with:
 * - Grid system with interactive examples
 * - Spacing tokens and usage
 * - Breakpoint specifications
 * - Live code examples
 * - Copy-to-clipboard functionality
 * - Dark mode support
 */
export function DesignSystemDemo() {
  return (
    <DesignSystemLayout>
      {/* Overview Section */}
      <section id="overview" className="mb-16 scroll-mt-16">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Design System
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Welcome to the Azoreon Design System. This comprehensive guide provides specifications,
            components, and best practices for building consistent user interfaces.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              3
            </div>
            <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
              Grid Layouts
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              4, 8, and 12 column grids
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              6
            </div>
            <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
              Breakpoints
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              From mobile to large desktop
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              17
            </div>
            <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
              Spacing Tokens
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              4px base unit system
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border border-teal-200 dark:border-teal-800 rounded-lg p-6">
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
              132
            </div>
            <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
              Color Shades
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              12 palettes, WCAG compliant
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Getting Started
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                1. Import Components
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`import { Container, Grid, GridItem } from '@/design-system/foundations/grid';`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                2. Use Tailwind Classes
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<div className="p-4 m-6 gap-8">
  {/* 16px padding, 24px margin, 32px gap */}
</div>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                3. Responsive Design
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<Grid columns={{ xs: 1, md: 2, lg: 3 }} gap={8}>
  <GridItem span={{ xs: 1, md: 2 }}>
    {/* Content */}
  </GridItem>
</Grid>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Grid System Section */}
      <GridDemo />

      {/* Spacing Section */}
      <SpacingDemo />

      {/* Breakpoints Section */}
      <BreakpointsDemo />

      {/* Color System Section */}
      <ColorSystemDemo />

      {/* Typography Section */}
      <TypographyDemo />

      {/* Inputs Section */}
      <InputsDemo />

      {/* Dropdowns Section */}
      <DropdownsDemo />

      {/* Buttons Section */}
      <ButtonsDemo />

      {/* Badges Section */}
      <BadgesDemo />

      {/* Avatars Section */}
      <AvatarsDemo />

      {/* Chips Section */}
      <ChipsDemo />

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Azoreon Design System · Built with Next.js, TypeScript & Tailwind CSS
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/azoreon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Figma
            </a>
          </div>
        </div>
      </footer>
    </DesignSystemLayout>
  );
}
