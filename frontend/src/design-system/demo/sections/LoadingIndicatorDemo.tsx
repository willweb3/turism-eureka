'use client';

import React, { useState } from 'react';
import { LoadingIndicator, LoadingOverlay } from '@/components/LoadingIndicator';

export default function LoadingIndicatorDemo() {
  // Interactive playground states
  const [size, setSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  const [variant, setVariant] = useState<'simple' | 'spinner'>('spinner');
  const [showLabel, setShowLabel] = useState(true);
  const [labelText, setLabelText] = useState('Loading...');
  const [color, setColor] = useState('#3CA997');
  const [speed, setSpeed] = useState<'fast' | 'normal' | 'slow'>('normal');

  // Overlay demo
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="max-w-6xl space-y-12">
      {/* Hero Section */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Loading Indicators</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Circular spinners for loading states with customizable sizes, colors, and labels.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">5</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Sizes</div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">XS, SM, MD, LG, XL</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">2</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Variants</div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Simple & Spinner</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">SVG</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Optimized</div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Smooth animations</div>
        </div>
      </div>

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">When to Use</h3>
          <div className="grid md:grid-cols-2 gap-4 text-blue-800 dark:text-blue-200 text-sm">
            <div>
              <strong>Use Loading Indicators for:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Actions taking &gt;0.5s</li>
                <li>• API requests</li>
                <li>• File uploads/downloads</li>
                <li>• Page transitions</li>
                <li>• Data processing</li>
              </ul>
            </div>
            <div>
              <strong>Avoid for:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Instant actions (&lt;0.3s)</li>
                <li>• Structured content (use skeleton)</li>
                <li>• Multiple simultaneous spinners</li>
                <li>• Very fast transitions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Playground */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Interactive Playground
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          {/* Controls */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Size
              </label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              >
                <option value="xs">XS (24px)</option>
                <option value="sm">SM (32px)</option>
                <option value="md">MD (48px)</option>
                <option value="lg">LG (56px)</option>
                <option value="xl">XL (64px)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Variant
              </label>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              >
                <option value="simple">Simple (85%)</option>
                <option value="spinner">Spinner (75%)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Speed
              </label>
              <select
                value={speed}
                onChange={(e) => setSpeed(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              >
                <option value="fast">Fast (0.8s)</option>
                <option value="normal">Normal (1s)</option>
                <option value="slow">Slow (1.5s)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Color
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-12 h-10 rounded border border-gray-300 dark:border-gray-600"
                />
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                  placeholder="#3CA997"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Label Text
              </label>
              <input
                type="text"
                value={labelText}
                onChange={(e) => setLabelText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="show-label"
                checked={showLabel}
                onChange={(e) => setShowLabel(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="show-label" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Show Label
              </label>
            </div>
          </div>

          {/* Preview */}
          <div className="flex justify-center py-8">
            <LoadingIndicator
              size={size}
              variant={variant}
              color={color}
              label={labelText}
              showLabel={showLabel}
              speed={speed}
            />
          </div>
        </div>
      </section>

      {/* Size Variations */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Size Variations</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-12 justify-center items-end">
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">XS (24px)</span>
              <LoadingIndicator size="xs" />
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">SM (32px)</span>
              <LoadingIndicator size="sm" />
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">MD (48px)</span>
              <LoadingIndicator size="md" />
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">LG (56px)</span>
              <LoadingIndicator size="lg" />
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">XL (64px)</span>
              <LoadingIndicator size="xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Style Variants */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Style Variants</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Simple (85%)
            </h3>
            <div className="flex justify-center">
              <LoadingIndicator size="lg" variant="simple" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
              Lighter appearance, shows 85% of circle
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Spinner (75%)
            </h3>
            <div className="flex justify-center">
              <LoadingIndicator size="lg" variant="spinner" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
              More robust appearance, shows 75% of circle
            </p>
          </div>
        </div>
      </section>

      {/* With Labels */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">With Labels</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-12 justify-center">
            <LoadingIndicator size="sm" label="Loading..." showLabel />
            <LoadingIndicator size="md" label="Processing..." showLabel />
            <LoadingIndicator size="lg" label="Please wait..." showLabel />
          </div>
        </div>
      </section>

      {/* Overlay Demo */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Overlay Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Parent Overlay */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Parent Overlay</h3>
            <div className="relative h-48 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
              <p className="text-gray-500">Content being loaded...</p>
              <LoadingOverlay
                show={showOverlay}
                indicatorProps={{ size: 'md', label: 'Loading...', showLabel: true }}
              />
            </div>
            <button
              onClick={() => setShowOverlay(!showOverlay)}
              className="mt-4 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 w-full"
            >
              {showOverlay ? 'Hide' : 'Show'} Overlay
            </button>
          </div>

          {/* Fullscreen Info */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Fullscreen Overlay</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              For fullscreen overlays, use the LoadingOverlay component with <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">fullscreen</code> prop.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded p-3">
              <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<LoadingOverlay
  show={isLoading}
  fullscreen
  indicatorProps={{
    size: 'lg',
    label: 'Loading...',
    showLabel: true
  }}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Inline Button */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Inline (Button)</h3>
            <button
              disabled
              className="px-4 py-2 bg-teal-500 text-white rounded opacity-70 cursor-not-allowed flex items-center gap-2"
            >
              <LoadingIndicator size="xs" />
              <span>Saving...</span>
            </button>
            <div className="mt-4 bg-gray-50 dark:bg-gray-900 rounded p-3">
              <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<button disabled>
  <LoadingIndicator size="xs" />
  Saving...
</button>`}
              </pre>
            </div>
          </div>

          {/* Card Loading */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Card/Section</h3>
            <div className="h-32 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded">
              <LoadingIndicator
                size="md"
                label="Loading data..."
                showLabel
              />
            </div>
            <div className="mt-4 bg-gray-50 dark:bg-gray-900 rounded p-3">
              <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<LoadingIndicator
  size="md"
  label="Loading data..."
  showLabel
/>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Code Examples</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Basic Usage</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<LoadingIndicator />`}
            </pre>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">With Label</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<LoadingIndicator
  size="md"
  label="Loading..."
  showLabel
/>`}
            </pre>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Custom Colors</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<LoadingIndicator
  size="lg"
  color="#DC2626"
  trackColor="#FEE2E2"
  label="Processing..."
  showLabel
/>`}
            </pre>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">With Overlay</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<LoadingOverlay
  show={isLoading}
  fullscreen
  indicatorProps={{
    size: 'lg',
    label: 'Loading application...',
    showLabel: true
  }}
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Accessibility</h2>
        <div className="prose dark:prose-invert max-w-none">
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li><strong>ARIA Attributes:</strong> Includes role="status", aria-label, and aria-live="polite"</li>
            <li><strong>Screen Readers:</strong> Announces loading state with descriptive labels</li>
            <li><strong>Semantic Roles:</strong> Uses "status" for non-urgent updates, "alert" for critical operations</li>
            <li><strong>Focus Management:</strong> Does not trap focus, preserves context when loading completes</li>
          </ul>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">Do's</h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>✓ Use for operations &gt;0.5s</li>
              <li>✓ Show descriptive labels for long processes</li>
              <li>✓ Use appropriate sizes for context</li>
              <li>✓ Add delay before showing (300-500ms)</li>
              <li>✓ Keep minimum display time (800ms)</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">Don'ts</h3>
            <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
              <li>✗ Don't use for instant actions (&lt;0.3s)</li>
              <li>✗ Avoid multiple spinners simultaneously</li>
              <li>✗ Don't block entire UI unnecessarily</li>
              <li>✗ Avoid very small sizes (hard to see)</li>
              <li>✗ Don't use extreme animation speeds</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
