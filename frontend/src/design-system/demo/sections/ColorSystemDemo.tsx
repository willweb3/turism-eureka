'use client';

import React, { useState } from 'react';
import { allPalettes, baseColors } from '@/design-system/foundations/colors';
import { ColorPalette } from '@/design-system/foundations/colors';
import { ContrastChecker } from '@/design-system/foundations/colors';
import { CodeBlock } from '../components/CodeBlock';
import { Badge } from '../components/Badge';

/**
 * ColorSystemDemo Component
 * Complete demonstration of the color system with all 12 palettes
 */
export function ColorSystemDemo() {
  const [activeTab, setActiveTab] = useState<'palettes' | 'contrast' | 'usage'>('palettes');

  return (
    <section id="colors" className="scroll-mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
          Color System
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          A comprehensive color palette with 12 palettes (132 colors total) designed for accessibility and WCAG 2.1 compliance.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border border-teal-200 dark:border-teal-800 rounded-lg p-6">
          <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">12</div>
          <div className="text-sm font-medium text-neutral-900 dark:text-white">Palettes</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">132</div>
          <div className="text-sm font-medium text-neutral-900 dark:text-white">Total Colors</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">11</div>
          <div className="text-sm font-medium text-neutral-900 dark:text-white">Shades Each</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">WCAG</div>
          <div className="text-sm font-medium text-neutral-900 dark:text-white">Compliant</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-neutral-200 dark:border-neutral-700">
        <button
          onClick={() => setActiveTab('palettes')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'palettes'
              ? 'border-teal-500 text-teal-600 dark:text-teal-400'
              : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
          }`}
        >
          Color Palettes
        </button>
        <button
          onClick={() => setActiveTab('contrast')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'contrast'
              ? 'border-teal-500 text-teal-600 dark:text-teal-400'
              : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
          }`}
        >
          Contrast Checker
        </button>
        <button
          onClick={() => setActiveTab('usage')}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'usage'
              ? 'border-teal-500 text-teal-600 dark:text-teal-400'
              : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
          }`}
        >
          Usage Examples
        </button>
      </div>

      {/* Color Palettes Tab */}
      {activeTab === 'palettes' && (
        <div className="space-y-12">
          {/* Base colors */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Base Colors</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div
                  className="h-24 rounded-lg border-2 border-neutral-300 shadow-md"
                  style={{ backgroundColor: baseColors.white.hex }}
                />
                <div className="text-sm">
                  <p className="font-semibold text-neutral-900 dark:text-white">White</p>
                  <p className="text-neutral-600 dark:text-neutral-400 font-mono">{baseColors.white.hex}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div
                  className="h-24 rounded-lg border-2 border-neutral-300 shadow-md"
                  style={{ backgroundColor: baseColors.black.hex }}
                />
                <div className="text-sm">
                  <p className="font-semibold text-neutral-900 dark:text-white">Black</p>
                  <p className="text-neutral-600 dark:text-neutral-400 font-mono">{baseColors.black.hex}</p>
                </div>
              </div>
            </div>
          </div>

          {/* All palettes */}
          {allPalettes.map((palette) => (
            <ColorPalette key={palette.slug} palette={palette} />
          ))}

          {/* WCAG Legend */}
          <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">WCAG Compliance Legend</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="AAA" size="md">AAA</Badge>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">7:1+ contrast (Best)</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="AA" size="md">AA</Badge>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">4.5:1+ contrast (Good)</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="A" size="md">A</Badge>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">3:1+ (Large text only)</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="Fail" size="md">Fail</Badge>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">UI elements only</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contrast Checker Tab */}
      {activeTab === 'contrast' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Contrast Checker
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              Test color combinations for WCAG 2.1 compliance. All contrast ratios are calculated against white (#FFFFFF) by default.
            </p>
          </div>

          <ContrastChecker />

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
              WCAG 2.1 Requirements
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• <strong>Normal text (AA):</strong> 4.5:1 minimum contrast ratio</li>
              <li>• <strong>Normal text (AAA):</strong> 7:1 minimum contrast ratio</li>
              <li>• <strong>Large text (AA):</strong> 3:1 minimum contrast ratio</li>
              <li>• <strong>Large text (AAA):</strong> 4.5:1 minimum contrast ratio</li>
              <li>• <strong>Large text:</strong> 18pt+ (24px) or 14pt+ (18.66px) bold</li>
            </ul>
          </div>
        </div>
      )}

      {/* Usage Examples Tab */}
      {activeTab === 'usage' && (
        <div className="space-y-8">
          {/* Tailwind usage */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Tailwind CSS Usage
            </h3>
            <CodeBlock
              code={`// Background colors
<div className="bg-teal-500">Primary button</div>
<div className="bg-blue-100">Light background</div>

// Text colors
<h1 className="text-neutral-900">Heading</h1>
<p className="text-neutral-600">Body text</p>

// Border colors
<div className="border-2 border-teal-500">Card</div>

// Hover states
<button className="bg-teal-500 hover:bg-teal-600">
  Hover me
</button>

// Dark mode
<div className="bg-white dark:bg-neutral-900">
  <p className="text-neutral-900 dark:text-white">
    Auto dark mode support
  </p>
</div>`}
            />
          </div>

          {/* Component examples */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Component Examples
            </h3>

            <div className="space-y-6">
              {/* Buttons */}
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">Buttons</h4>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors">
                    Primary
                  </button>
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
                    Secondary
                  </button>
                  <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors">
                    Success
                  </button>
                  <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors">
                    Danger
                  </button>
                  <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors">
                    Warning
                  </button>
                </div>
              </div>

              {/* Alerts */}
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">Alerts</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm font-medium text-green-900">Success! Your changes have been saved.</p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm font-medium text-blue-900">Info: New features are now available.</p>
                  </div>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm font-medium text-yellow-900">Warning: Please review your settings.</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm font-medium text-red-900">Error: Something went wrong.</p>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">Badges</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">Teal</span>
                  <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Blue</span>
                  <span className="px-2.5 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Green</span>
                  <span className="px-2.5 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">Yellow</span>
                  <span className="px-2.5 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">Orange</span>
                  <span className="px-2.5 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Red</span>
                  <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Purple</span>
                  <span className="px-2.5 py-1 bg-pink-100 text-pink-800 text-xs font-medium rounded-full">Pink</span>
                </div>
              </div>
            </div>
          </div>

          {/* Best practices */}
          <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Best Practices</h4>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
              <li>✓ Use tones 50-400 for backgrounds and light UI elements</li>
              <li>✓ Use tones 500-700 for interactive elements (buttons, links)</li>
              <li>✓ Use tones 700-950 for text on light backgrounds</li>
              <li>✓ Always check contrast ratios for text (minimum 4.5:1 for AA)</li>
              <li>✓ Use semantic colors: green for success, red for errors, yellow for warnings</li>
              <li>✓ Provide dark mode alternatives for all color combinations</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
