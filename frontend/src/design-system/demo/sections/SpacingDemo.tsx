'use client';

import React, { useState } from 'react';
import { spacingTokens, getSpacingScale, semanticSpacing } from '@/design-system/foundations/spacing/spacing.config';
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
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function SpacingDemo() {
  const spacingScale = getSpacingScale();

  return (
    <section id="spacing" className="scroll-mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Spacing System
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Consistent spacing tokens based on a 4px base unit system for padding, margins, and gaps.
        </p>
      </div>

      {/* Spacing Scale */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Spacing Scale
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          All spacing values are multiples of 4px for visual consistency
        </p>

        <div className="space-y-4">
          {spacingScale.map(({ token, value, rem }) => (
            <div key={token} className="flex items-center gap-4">
              <div className="w-20 text-sm font-mono text-gray-600 dark:text-gray-400">
                space-{token}
              </div>
              <div className="flex-1 flex items-center gap-4">
                <div
                  className="h-8 bg-blue-500 rounded"
                  style={{ width: `${value}px` }}
                />
                <div className="text-sm text-gray-900 dark:text-white font-medium">
                  {value}px
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                  ({rem})
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing Tokens Table */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Spacing Tokens
        </h3>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Token</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Value (px)</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Value (rem)</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Tailwind Class</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {spacingScale.map(({ token, value, rem }) => (
                <tr key={token} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 px-4">
                    <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-900 dark:text-gray-100">
                      {token}
                    </code>
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{value}px</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{rem}</td>
                  <td className="py-3 px-4">
                    <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-900 dark:text-gray-100">
                      p-{token}, m-{token}, gap-{token}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Semantic Spacing */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Semantic Spacing
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Pre-defined spacing values for common use cases
        </p>

        <div className="space-y-6">
          {/* Gutter */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Gutters</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-600 dark:text-gray-400">Mobile</div>
                <div className="flex items-center gap-2">
                  <div className="h-6 bg-green-500 rounded" style={{ width: `${semanticSpacing.gutter.mobile}px` }} />
                  <span className="text-sm text-gray-900 dark:text-white">{semanticSpacing.gutter.mobile}px</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-600 dark:text-gray-400">Tablet/Desktop</div>
                <div className="flex items-center gap-2">
                  <div className="h-6 bg-green-500 rounded" style={{ width: `${semanticSpacing.gutter.desktop}px` }} />
                  <span className="text-sm text-gray-900 dark:text-white">{semanticSpacing.gutter.desktop}px</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section Spacing */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Section Spacing</h4>
            <div className="space-y-2">
              {Object.entries(semanticSpacing.section).map(([key, value]) => (
                <div key={key} className="flex items-center gap-4">
                  <div className="w-32 text-sm text-gray-600 dark:text-gray-400 capitalize">{key}</div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 bg-purple-500 rounded" style={{ width: `${value}px` }} />
                    <span className="text-sm text-gray-900 dark:text-white">{value}px</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Component Spacing */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Component Spacing</h4>
            <div className="space-y-2">
              {Object.entries(semanticSpacing.component).map(([key, value]) => (
                <div key={key} className="flex items-center gap-4">
                  <div className="w-32 text-sm text-gray-600 dark:text-gray-400 capitalize">{key}</div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 bg-blue-500 rounded" style={{ width: `${value}px` }} />
                    <span className="text-sm text-gray-900 dark:text-white">{value}px</span>
                  </div>
                </div>
              ))}
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
          {/* Padding Example */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Padding</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="p-4">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded p-4">
                      <p className="text-sm text-blue-900 dark:text-blue-100">p-4 (16px padding)</p>
                    </div>
                  </div>
                </div>
                <CodeBlock code={`<div className="p-4">\n  Content\n</div>`} />
              </div>
              <div>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="p-8">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded p-4">
                      <p className="text-sm text-blue-900 dark:text-blue-100">p-8 (32px padding)</p>
                    </div>
                  </div>
                </div>
                <CodeBlock code={`<div className="p-8">\n  Content\n</div>`} />
              </div>
            </div>
          </div>

          {/* Margin Example */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Margin</h4>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 p-4">
              <div className="bg-blue-100 dark:bg-blue-900 rounded p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">First element</p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 rounded p-4 mt-6">
                <p className="text-sm text-blue-900 dark:text-blue-100">Second element (mt-6 = 24px margin-top)</p>
              </div>
            </div>
            <div className="mt-2">
              <CodeBlock code={`<div>\n  <div>First</div>\n  <div className="mt-6">Second</div>\n</div>`} />
            </div>
          </div>

          {/* Gap Example */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Gap (Grid/Flex)</h4>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 p-4">
              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex-1 bg-blue-100 dark:bg-blue-900 rounded p-4">
                    <p className="text-sm text-blue-900 dark:text-blue-100 text-center">Item {i}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2">
              <CodeBlock code={`<div className="flex gap-4">\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n</div>`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
