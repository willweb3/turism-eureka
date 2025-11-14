'use client';

import React, { useState } from 'react';
import { LinearProgressBar, CircularProgressBar } from '@/components/ProgressBar';

export default function ProgressBarDemo() {
  // Interactive showcase states
  const [linearValue, setLinearValue] = useState(60);
  const [linearShowPercentage, setLinearShowPercentage] = useState(true);
  const [linearLabelPosition, setLinearLabelPosition] = useState<'none' | 'right' | 'top' | 'bottom'>('right');
  const [linearSize, setLinearSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [linearLabelText, setLinearLabelText] = useState('5 items missing');

  const [circularValue, setCircularValue] = useState(40);
  const [circularShape, setCircularShape] = useState<'circle' | 'half-circle'>('circle');
  const [circularSize, setCircularSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [circularShowPercentage, setCircularShowPercentage] = useState(true);
  const [circularLabel, setCircularLabel] = useState('Users');
  const [circularLabelPosition, setCircularLabelPosition] = useState<'inside' | 'outside' | 'none'>('outside');

  return (
    <div className="max-w-6xl space-y-12">
      {/* Hero Section */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Progress Bars</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Linear and circular progress indicators with customizable styles, labels, and animations.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">2</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Components</div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Linear & Circular</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">3</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Sizes</div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Small, Medium, Large</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">WCAG</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Accessible</div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">ARIA attributes</div>
        </div>
      </div>

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">When to Use</h3>
          <div className="grid md:grid-cols-2 gap-4 text-blue-800 dark:text-blue-200">
            <div>
              <strong>Linear Progress Bar:</strong>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• File uploads/downloads</li>
                <li>• Multi-step forms</li>
                <li>• Task completion</li>
                <li>• Loading states</li>
              </ul>
            </div>
            <div>
              <strong>Circular Progress Bar:</strong>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Dashboards & metrics</li>
                <li>• Profile completion</li>
                <li>• KPI visualization</li>
                <li>• Compact spaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Linear Progress Bar - Interactive Showcase */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Linear Progress Bar - Interactive
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          {/* Controls */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Value: {linearValue}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={linearValue}
                onChange={(e) => setLinearValue(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Size
              </label>
              <select
                value={linearSize}
                onChange={(e) => setLinearSize(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Label Position
              </label>
              <select
                value={linearLabelPosition}
                onChange={(e) => setLinearLabelPosition(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              >
                <option value="none">None</option>
                <option value="right">Right</option>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Label Text
              </label>
              <input
                type="text"
                value={linearLabelText}
                onChange={(e) => setLinearLabelText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="linear-show-percentage"
                checked={linearShowPercentage}
                onChange={(e) => setLinearShowPercentage(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="linear-show-percentage" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Show Percentage
              </label>
            </div>
          </div>

          {/* Preview */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <LinearProgressBar
                value={linearValue}
                size={linearSize}
                showPercentage={linearShowPercentage}
                labelPosition={linearLabelPosition}
                labelText={linearLabelPosition !== 'none' && linearLabelPosition !== 'right' ? linearLabelText : undefined}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Linear Progress - Sizes */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Sizes</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Small (6px)</h3>
            <LinearProgressBar value={40} size="small" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Medium (8px) - Default</h3>
            <LinearProgressBar value={60} size="medium" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Large (9px)</h3>
            <LinearProgressBar value={80} size="large" />
          </div>
        </div>
      </section>

      {/* Linear Progress - Label Positions */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Label Positions</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 space-y-8">
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">None (Only percentage)</h3>
            <LinearProgressBar value={40} labelPosition="none" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Right (Default)</h3>
            <LinearProgressBar value={60} labelPosition="right" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Top</h3>
            <LinearProgressBar value={50} labelPosition="top" labelText="5 items missing" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Bottom</h3>
            <LinearProgressBar value={75} labelPosition="bottom" labelText="3 items missing" />
          </div>
        </div>
      </section>

      {/* Linear Progress - States */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">States</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Zero (0%) - No Progress</h3>
            <LinearProgressBar value={0} labelPosition="bottom" labelText="5 items missing" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">In Progress (60%)</h3>
            <LinearProgressBar value={60} labelPosition="bottom" labelText="2 items missing" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Complete (100%) - Success Green</h3>
            <LinearProgressBar value={100} color="success" labelPosition="bottom" labelText="Completed" />
          </div>
        </div>
      </section>

      {/* Circular Progress Bar - Interactive Showcase */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Circular Progress Bar - Interactive
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          {/* Controls */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Value: {circularValue}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={circularValue}
                onChange={(e) => setCircularValue(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Shape
              </label>
              <select
                value={circularShape}
                onChange={(e) => setCircularShape(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              >
                <option value="circle">Circle</option>
                <option value="half-circle">Half Circle</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Size
              </label>
              <select
                value={circularSize}
                onChange={(e) => setCircularSize(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              >
                <option value="small">Small (64px)</option>
                <option value="medium">Medium (160px)</option>
                <option value="large">Large (200px)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Label Position
              </label>
              <select
                value={circularLabelPosition}
                onChange={(e) => setCircularLabelPosition(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              >
                <option value="none">None</option>
                <option value="inside">Inside</option>
                <option value="outside">Outside</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Label Text
              </label>
              <input
                type="text"
                value={circularLabel}
                onChange={(e) => setCircularLabel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="circular-show-percentage"
                checked={circularShowPercentage}
                onChange={(e) => setCircularShowPercentage(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="circular-show-percentage" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Show Percentage
              </label>
            </div>
          </div>

          {/* Preview */}
          <div className="flex justify-center">
            <CircularProgressBar
              value={circularValue}
              shape={circularShape}
              size={circularSize}
              showPercentage={circularShowPercentage}
              label={circularLabelPosition !== 'none' ? circularLabel : undefined}
              labelPosition={circularLabelPosition}
            />
          </div>
        </div>
      </section>

      {/* Circular - Sizes (Circle) */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Circular Sizes</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-8 justify-center items-end">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Small (64px)</span>
              <CircularProgressBar value={40} size="small" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Medium (160px)</span>
              <CircularProgressBar value={60} size="medium" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Large (200px)</span>
              <CircularProgressBar value={80} size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Circular - With Labels */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">With Labels</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-12 justify-center items-start">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Label Outside</span>
              <CircularProgressBar
                value={75}
                size="medium"
                label="Active Users"
                labelPosition="outside"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Label Inside (Small)</span>
              <CircularProgressBar
                value={40}
                size="small"
                label="Tasks"
                labelPosition="inside"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Half-Circle */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Half-Circle Progress</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-12 justify-center items-end">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Small</span>
              <CircularProgressBar
                value={40}
                shape="half-circle"
                size="small"
                label="Progress"
                labelPosition="inside"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Medium</span>
              <CircularProgressBar
                value={65}
                shape="half-circle"
                size="medium"
                label="Completion"
                labelPosition="inside"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Large</span>
              <CircularProgressBar
                value={90}
                shape="half-circle"
                size="large"
                label="Success Rate"
                labelPosition="inside"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Real-World Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Upload Progress */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">File Upload</h3>
            <LinearProgressBar
              value={73}
              labelPosition="bottom"
              labelText="Uploading document.pdf"
            />
          </div>

          {/* Profile Completion */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Profile Completion</h3>
            <div className="flex justify-center">
              <CircularProgressBar
                value={60}
                size="medium"
                label="Profile Complete"
                labelPosition="outside"
              />
            </div>
          </div>

          {/* Onboarding Steps */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Onboarding Steps</h3>
            <LinearProgressBar
              value={50}
              labelPosition="bottom"
              labelText="Step 2 of 4"
              size="large"
            />
          </div>

          {/* Task Progress */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Task Completion</h3>
            <div className="flex justify-center">
              <CircularProgressBar
                value={85}
                shape="half-circle"
                size="medium"
                label="Tasks Done"
                labelPosition="inside"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Code Examples</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Linear - Basic</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<LinearProgressBar value={60} />`}
            </pre>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Linear - With Label</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<LinearProgressBar
  value={60}
  labelPosition="bottom"
  labelText="5 items missing"
/>`}
            </pre>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Circular - Basic</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<CircularProgressBar value={75} size="medium" />`}
            </pre>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Circular - With Label</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<CircularProgressBar
  value={75}
  size="medium"
  label="Active Users"
  labelPosition="outside"
/>`}
            </pre>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Half-Circle</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<CircularProgressBar
  value={65}
  shape="half-circle"
  size="medium"
  label="Progress"
  labelPosition="inside"
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
            <li><strong>ARIA Attributes:</strong> All progress bars include role="progressbar", aria-valuenow, aria-valuemin, aria-valuemax</li>
            <li><strong>Screen Readers:</strong> Use ariaLabel and ariaValueText props for descriptive announcements</li>
            <li><strong>Color Contrast:</strong> Follows WCAG guidelines with sufficient contrast ratios</li>
            <li><strong>Semantic States:</strong> Success state (100%) uses green color for visual clarity</li>
          </ul>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Best Practices</h2>
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">Do's</h3>
          <ul className="space-y-2 text-green-800 dark:text-green-200">
            <li>✓ Use descriptive labels when context isn't obvious</li>
            <li>✓ Show percentage for precision-critical tasks</li>
            <li>✓ Use green color for 100% completion</li>
            <li>✓ Keep animations smooth (300ms default)</li>
            <li>✓ Add ARIA labels for screen readers</li>
          </ul>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mt-4">
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">Don'ts</h3>
          <ul className="space-y-2 text-red-800 dark:text-red-200">
            <li>✗ Don't use for indeterminate progress (use spinner)</li>
            <li>✗ Don't update too frequently (&gt;60fps)</li>
            <li>✗ Don't use circular for very fast processes (&lt;1s)</li>
            <li>✗ Avoid very long label text in small circular bars</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
