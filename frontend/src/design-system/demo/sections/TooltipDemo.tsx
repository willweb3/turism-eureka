'use client';

import React from 'react';
import { Tooltip } from '@/components/Tooltip';
import { Info, HelpCircle, Settings, Download, Copy, Trash2 } from 'lucide-react';

export function TooltipDemo() {
  return (
    <section id="tooltip" className="mb-16 scroll-mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Tooltip</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Small informative pop-ups that appear on hover or focus. Perfect for providing context
          without cluttering the UI.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Placements</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Top, Bottom, Left, Right</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">Radix</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Powered By</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Accessible & Smart</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Auto</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Positioning</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Collision Detection</div>
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">100%</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Accessible</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Keyboard & Screen Reader</div>
        </div>
      </div>

      {/* When to Use */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          When to Use Tooltip vs Popover
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
              ✓ Use Tooltip when:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>Providing brief explanatory text</li>
              <li>Showing on hover or focus</li>
              <li>Content is short (1-2 lines)</li>
              <li>Non-interactive content</li>
              <li>Explaining icons or buttons</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
              ✓ Use Popover when:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>Rich content (forms, links, buttons)</li>
              <li>User needs to interact with content</li>
              <li>Showing on click</li>
              <li>Content is longer or complex</li>
              <li>Needs to stay open while interacting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Basic Tooltip */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Basic Tooltips
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip content="Click to get more information">
            <button className="p-2 rounded-md border border-gray-300 hover:border-gray-400 transition">
              <Info className="w-5 h-5 text-gray-600" />
            </button>
          </Tooltip>

          <Tooltip content="Need help? Contact support">
            <button className="p-2 rounded-md border border-gray-300 hover:border-gray-400 transition">
              <HelpCircle className="w-5 h-5 text-gray-600" />
            </button>
          </Tooltip>

          <Tooltip content="Open settings panel">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              <Settings className="w-4 h-4" />
            </button>
          </Tooltip>
        </div>
      </div>

      {/* All Placements */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">All Placements</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* Top row */}
          <div className="flex justify-center">
            <Tooltip content="Top Start" placement="top-start">
              <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Top Start
              </button>
            </Tooltip>
          </div>
          <div className="flex justify-center">
            <Tooltip content="Top Center" placement="top">
              <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Top
              </button>
            </Tooltip>
          </div>
          <div className="flex justify-center">
            <Tooltip content="Top End" placement="top-end">
              <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Top End
              </button>
            </Tooltip>
          </div>

          {/* Middle row */}
          <div className="flex justify-start">
            <Tooltip content="Left Side" placement="left">
              <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Left
              </button>
            </Tooltip>
          </div>
          <div className="flex justify-center items-center">
            <span className="text-sm text-gray-500">Hover buttons</span>
          </div>
          <div className="flex justify-end">
            <Tooltip content="Right Side" placement="right">
              <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Right
              </button>
            </Tooltip>
          </div>

          {/* Bottom row */}
          <div className="flex justify-center">
            <Tooltip content="Bottom Start" placement="bottom-start">
              <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Bottom Start
              </button>
            </Tooltip>
          </div>
          <div className="flex justify-center">
            <Tooltip content="Bottom Center" placement="bottom">
              <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Bottom
              </button>
            </Tooltip>
          </div>
          <div className="flex justify-center">
            <Tooltip content="Bottom End" placement="bottom-end">
              <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Bottom End
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* With Title (Supporting Text) */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          With Title (Supporting Text)
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip
            title="Pro Feature"
            content="Upgrade to Pro plan to unlock advanced analytics and reporting"
            placement="top"
          >
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
              Advanced Analytics
            </button>
          </Tooltip>

          <Tooltip
            title="Download Report"
            content="Export your data as PDF or CSV format"
            placement="top"
          >
            <button className="p-2 rounded-md border border-gray-300 hover:border-gray-400 transition">
              <Download className="w-5 h-5 text-gray-600" />
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          On Action Buttons
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <Tooltip content="Copy to clipboard">
            <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </Tooltip>

          <Tooltip content="Download file">
            <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <Download className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </Tooltip>

          <Tooltip content="Delete permanently" title="Warning">
            <button className="p-2 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition">
              <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
            </button>
          </Tooltip>
        </div>
      </div>

      {/* No Arrow */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Without Arrow</h3>
        <Tooltip content="This tooltip has no arrow" showArrow={false}>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            No Arrow
          </button>
        </Tooltip>
      </div>

      {/* API Reference */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">API Reference</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`// Basic
<Tooltip content="Simple tooltip">
  <button>Hover me</button>
</Tooltip>

// With title (Supporting Text)
<Tooltip
  title="Pro Feature"
  content="Upgrade to unlock this"
  placement="top"
>
  <button>Advanced</button>
</Tooltip>

// Custom placement
<Tooltip content="Bottom right" placement="bottom-end">
  <button>Button</button>
</Tooltip>

// Without arrow
<Tooltip content="No arrow" showArrow={false}>
  <button>Button</button>
</Tooltip>

// Custom delay
<Tooltip content="Instant" delay={0}>
  <button>Instant</button>
</Tooltip>`}</code>
        </pre>
      </div>
    </section>
  );
}
