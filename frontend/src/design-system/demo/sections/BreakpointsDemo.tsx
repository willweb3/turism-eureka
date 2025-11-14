'use client';

import React, { useState, useEffect } from 'react';
import { gridBreakpoints, getCurrentBreakpoint, type Breakpoint } from '@/design-system/foundations/grid/grid.config';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
}

function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 px-3 py-1 text-xs font-medium bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function BreakpointsDemo() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('xs');
  const [windowWidth, setWindowWidth] = useState(0);
  const [simulatorWidth, setSimulatorWidth] = useState<Breakpoint>('lg');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setCurrentBreakpoint(getCurrentBreakpoint(width));
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  const breakpointsList = Object.values(gridBreakpoints);

  return (
    <section id="breakpoints" className="scroll-mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Breakpoints
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Responsive breakpoints for different device sizes and screen resolutions.
        </p>
      </div>

      {/* Current Viewport Info */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Current Viewport
        </h3>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {windowWidth}px
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Width
            </p>
          </div>
          <div className="h-12 w-px bg-gray-300 dark:bg-gray-600" />
          <div>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {currentBreakpoint}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Breakpoint
            </p>
          </div>
          <div className="h-12 w-px bg-gray-300 dark:bg-gray-600" />
          <div>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {gridBreakpoints[currentBreakpoint].columns}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Columns
            </p>
          </div>
        </div>
      </div>

      {/* Breakpoints Table */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Breakpoint Reference
        </h3>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Min Width</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Columns</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Gutter</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Content Width</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Device</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {breakpointsList.map((bp) => (
                <tr
                  key={bp.name}
                  className={cn(
                    'hover:bg-gray-50 dark:hover:bg-gray-800/50',
                    bp.name === currentBreakpoint && 'bg-blue-50 dark:bg-blue-900/20'
                  )}
                >
                  <td className="py-3 px-4">
                    <code className="text-xs font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-900 dark:text-gray-100">
                      {bp.name}
                    </code>
                    {bp.name === currentBreakpoint && (
                      <span className="ml-2 text-xs text-blue-600 dark:text-blue-400 font-medium">
                        (active)
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{bp.minWidth}px</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{bp.columns}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{bp.gutter}px</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{bp.contentWidth}px</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                    {bp.name === 'xs' && 'Mobile'}
                    {(bp.name === 'sm' || bp.name === 'md') && 'Tablet'}
                    {bp.name === 'lg' && 'Laptop'}
                    {bp.name === 'xl' && 'Desktop'}
                    {bp.name === '2xl' && 'Large Desktop'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Viewport Simulator */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Viewport Simulator
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Preview how content responds to different breakpoints
        </p>

        {/* Breakpoint selector */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {breakpointsList.map((bp) => (
            <button
              key={bp.name}
              onClick={() => setSimulatorWidth(bp.name)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                simulatorWidth === bp.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              )}
            >
              {bp.name} ({bp.minWidth}px)
            </button>
          ))}
        </div>

        {/* Simulator viewport */}
        <div className="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-800 overflow-x-auto">
          <div
            className="mx-auto border-4 border-gray-400 dark:border-gray-500 rounded-lg bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden"
            style={{ width: `${gridBreakpoints[simulatorWidth].minWidth}px` }}
          >
            <div className="bg-blue-600 text-white px-4 py-2 text-sm font-medium">
              Simulated Viewport: {simulatorWidth} ({gridBreakpoints[simulatorWidth].minWidth}px)
            </div>
            <div className="p-4">
              <div className={cn('grid gap-4', `grid-cols-${gridBreakpoints[simulatorWidth].columns > 4 ? '4' : gridBreakpoints[simulatorWidth].columns}`)}>
                {Array.from({ length: gridBreakpoints[simulatorWidth].columns > 4 ? 4 : gridBreakpoints[simulatorWidth].columns }).map((_, i) => (
                  <div key={i} className="bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded p-4">
                    <div className="text-xs text-blue-900 dark:text-blue-100 text-center">Col {i + 1}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <p>Columns: {gridBreakpoints[simulatorWidth].columns}</p>
                <p>Gutter: {gridBreakpoints[simulatorWidth].gutter}px</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Usage Examples
        </h3>

        <div className="space-y-6">
          {/* Responsive Typography */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Responsive Typography
            </h4>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 mb-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Responsive Heading
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 mt-2">
                This text scales based on the breakpoint
              </p>
            </div>
            <CodeBlock
              code={`<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h2>
<p className="text-sm md:text-base lg:text-lg">
  This text scales based on the breakpoint
</p>`}
            />
          </div>

          {/* Responsive Layout */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Responsive Grid Layout
            </h4>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 rounded-lg p-4">
                    <p className="text-sm text-purple-900 dark:text-purple-100 text-center">Item {i}</p>
                  </div>
                ))}
              </div>
            </div>
            <CodeBlock
              code={`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  {/* ... */}
</div>`}
            />
          </div>

          {/* Responsive Visibility */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Responsive Visibility
            </h4>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 mb-2">
              <div className="space-y-2">
                <div className="block md:hidden bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded p-3">
                  <p className="text-sm text-blue-900 dark:text-blue-100">Visible only on mobile</p>
                </div>
                <div className="hidden md:block lg:hidden bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded p-3">
                  <p className="text-sm text-green-900 dark:text-green-100">Visible only on tablet</p>
                </div>
                <div className="hidden lg:block bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 rounded p-3">
                  <p className="text-sm text-purple-900 dark:text-purple-100">Visible only on desktop</p>
                </div>
              </div>
            </div>
            <CodeBlock
              code={`<div className="block md:hidden">
  Visible only on mobile
</div>
<div className="hidden md:block lg:hidden">
  Visible only on tablet
</div>
<div className="hidden lg:block">
  Visible only on desktop
</div>`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
