'use client';

import React, { useState, useEffect } from 'react';
import { Container, Grid, GridItem } from '@/design-system/foundations/grid';
import { gridBreakpoints, getCurrentBreakpoint } from '@/design-system/foundations/grid/grid.config';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
}

function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
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
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

interface DemoSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
}

function DemoSection({ title, description, children, code }: DemoSectionProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="mb-12">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        )}
      </div>

      {code && (
        <div className="flex gap-2 mb-4 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('preview')}
            className={cn(
              'px-4 py-2 text-sm font-medium border-b-2 transition-colors',
              activeTab === 'preview'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={cn(
              'px-4 py-2 text-sm font-medium border-b-2 transition-colors',
              activeTab === 'code'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            )}
          >
            Code
          </button>
        </div>
      )}

      {activeTab === 'preview' ? (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
          {children}
        </div>
      ) : (
        code && <CodeBlock code={code} />
      )}
    </div>
  );
}

export function GridDemo() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('xs');
  const [showGridOverlay, setShowGridOverlay] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

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

  const currentConfig = gridBreakpoints[currentBreakpoint as keyof typeof gridBreakpoints];

  return (
    <section id="grid" className="scroll-mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Grid System
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          A responsive grid system based on Figma design specifications with 4, 8, and 12 column layouts.
        </p>
      </div>

      {/* Current Breakpoint Indicator */}
      <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
              Current Breakpoint: {currentBreakpoint}
            </h4>
            <p className="text-xs text-blue-700 dark:text-blue-300">
              {currentConfig.columns} columns · {currentConfig.gutter}px gutter · {windowWidth}px viewport
            </p>
          </div>
          <button
            onClick={() => setShowGridOverlay(!showGridOverlay)}
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-md transition-colors',
              showGridOverlay
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400'
            )}
          >
            {showGridOverlay ? 'Hide' : 'Show'} Grid Overlay
          </button>
        </div>
      </div>

      {/* Grid Overlay */}
      {showGridOverlay && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <Container>
            <div className={cn('grid h-screen', `grid-cols-${currentConfig.columns}`, 'gap-8')}>
              {Array.from({ length: currentConfig.columns }).map((_, i) => (
                <div key={i} className="bg-blue-500/10 border-x border-blue-500/20" />
              ))}
            </div>
          </Container>
        </div>
      )}

      {/* Breakpoint Specs Table */}
      <DemoSection
        title="Breakpoint Specifications"
        description="Grid configuration for each responsive breakpoint"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Breakpoint</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Min Width</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Columns</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Gutter</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Content Width</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(gridBreakpoints).map((bp) => (
                <tr
                  key={bp.name}
                  className={cn(
                    'border-b border-gray-100 dark:border-gray-800',
                    bp.name === currentBreakpoint && 'bg-blue-50 dark:bg-blue-900/20'
                  )}
                >
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                    {bp.name}
                    {bp.name === currentBreakpoint && (
                      <span className="ml-2 text-xs text-blue-600 dark:text-blue-400">(active)</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{bp.minWidth}px</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{bp.columns}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{bp.gutter}px</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{bp.contentWidth}px</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DemoSection>

      {/* Container Example */}
      <DemoSection
        title="Container Component"
        description="Responsive container with max-width constraints"
        code={`import { Container } from '@/design-system/foundations/grid';

<Container>
  <h1>Content goes here</h1>
</Container>`}
      >
        <Container className="bg-white dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 p-4">
          <p className="text-center text-gray-600 dark:text-gray-300">
            This content is inside a Container component
          </p>
        </Container>
      </DemoSection>

      {/* Basic Grid Examples */}
      <DemoSection
        title="Equal Columns"
        description="Grid with equal-width columns"
        code={`import { Grid, GridItem } from '@/design-system/foundations/grid';

<Grid columns={{ xs: 1, md: 2, lg: 3 }} gap="desktop">
  <GridItem>Item 1</GridItem>
  <GridItem>Item 2</GridItem>
  <GridItem>Item 3</GridItem>
</Grid>`}
      >
        <Grid columns={{ xs: 1, md: 2, lg: 3 }} gap={8}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <GridItem key={i}>
              <div className="bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded-lg p-6 text-center">
                <span className="font-medium text-blue-900 dark:text-blue-100">Item {i}</span>
              </div>
            </GridItem>
          ))}
        </Grid>
      </DemoSection>

      {/* Column Span Example */}
      <DemoSection
        title="Column Spanning"
        description="Items spanning multiple columns"
        code={`<Grid columns={{ xs: 1, md: 12 }} gap={8}>
  <GridItem span={{ xs: 1, md: 12 }}>
    <div>Full Width</div>
  </GridItem>
  <GridItem span={{ xs: 1, md: 8 }}>
    <div>8 Columns</div>
  </GridItem>
  <GridItem span={{ xs: 1, md: 4 }}>
    <div>4 Columns</div>
  </GridItem>
  <GridItem span={{ xs: 1, md: 6 }}>
    <div>6 Columns</div>
  </GridItem>
  <GridItem span={{ xs: 1, md: 6 }}>
    <div>6 Columns</div>
  </GridItem>
</Grid>`}
      >
        <Grid columns={{ xs: 1, md: 12 }} gap={8}>
          <GridItem span={{ xs: 1, md: 12 }}>
            <div className="bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 rounded-lg p-6 text-center">
              <span className="font-medium text-purple-900 dark:text-purple-100">Full Width (12 cols)</span>
            </div>
          </GridItem>
          <GridItem span={{ xs: 1, md: 8 }}>
            <div className="bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 rounded-lg p-6 text-center">
              <span className="font-medium text-purple-900 dark:text-purple-100">8 Columns</span>
            </div>
          </GridItem>
          <GridItem span={{ xs: 1, md: 4 }}>
            <div className="bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 rounded-lg p-6 text-center">
              <span className="font-medium text-purple-900 dark:text-purple-100">4 Columns</span>
            </div>
          </GridItem>
          <GridItem span={{ xs: 1, md: 6 }}>
            <div className="bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 rounded-lg p-6 text-center">
              <span className="font-medium text-purple-900 dark:text-purple-100">6 Columns</span>
            </div>
          </GridItem>
          <GridItem span={{ xs: 1, md: 6 }}>
            <div className="bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 rounded-lg p-6 text-center">
              <span className="font-medium text-purple-900 dark:text-purple-100">6 Columns</span>
            </div>
          </GridItem>
        </Grid>
      </DemoSection>

      {/* Complex Layout */}
      <DemoSection
        title="Complex Layout"
        description="Sidebar + main content layout"
        code={`<Grid columns={{ xs: 1, lg: 12 }} gap={8}>
  <GridItem span={{ xs: 1, lg: 3 }}>
    <div>Sidebar</div>
  </GridItem>
  <GridItem span={{ xs: 1, lg: 9 }}>
    <div>Main Content</div>
  </GridItem>
</Grid>`}
      >
        <Grid columns={{ xs: 1, lg: 12 }} gap={8}>
          <GridItem span={{ xs: 1, lg: 3 }}>
            <div className="bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg p-6">
              <p className="font-medium text-green-900 dark:text-green-100 mb-2">Sidebar</p>
              <p className="text-sm text-green-700 dark:text-green-300">3 columns on desktop</p>
            </div>
          </GridItem>
          <GridItem span={{ xs: 1, lg: 9 }}>
            <div className="bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg p-6">
              <p className="font-medium text-green-900 dark:text-green-100 mb-2">Main Content</p>
              <p className="text-sm text-green-700 dark:text-green-300">9 columns on desktop</p>
            </div>
          </GridItem>
        </Grid>
      </DemoSection>
    </section>
  );
}
