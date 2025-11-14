'use client';

import React, { useState } from 'react';
import { Heading, Text, Label, Caption, Overline } from '@/design-system/foundations/typography';
import {
  fontFamilies,
  fontWeights,
  headlineStyles,
  bodyStyles,
  labelStyles,
  captionStyle,
  overlineStyle,
  buttonStyles,
  typographyGuidelines,
} from '@/design-system/foundations/typography';
import { CodeBlock } from '../components/CodeBlock';
import { Badge } from '../components/Badge';
import { cn } from '@/lib/utils';

/**
 * TypographyDemo Component
 * Complete demonstration of the typography system
 */
export function TypographyDemo() {
  const [activeTab, setActiveTab] = useState<'overview' | 'scale' | 'guidelines'>('overview');

  return (
    <section id="typography" className="scroll-mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
          Typography System
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          A comprehensive type system with Hanken Grotesk for body/UI and Lufga for display headlines.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</div>
          <div className="text-sm font-medium text-neutral-900 dark:text-white">Font Families</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">9</div>
          <div className="text-sm font-medium text-neutral-900 dark:text-white">Font Weights</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">25+</div>
          <div className="text-sm font-medium text-neutral-900 dark:text-white">Type Styles</div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">130%</div>
          <div className="text-sm font-medium text-neutral-900 dark:text-white">Optimal Line Height</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-neutral-200 dark:border-neutral-700">
        {['overview', 'scale', 'guidelines'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={cn(
              'px-4 py-2 text-sm font-medium border-b-2 transition-colors capitalize',
              activeTab === tab
                ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-12">
          {/* Font Families */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Font Families</h3>

            {/* Hanken Grotesk */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">Hanken Grotesk</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{fontFamilies.hanken.usage}</p>
                </div>
                <Badge variant="info">Primary</Badge>
              </div>

              {/* Font Weight Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(fontWeights).map(([name, weight]) => (
                  <div
                    key={name}
                    className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-neutral-800"
                  >
                    <div className="mb-3">
                      <span className="text-xs text-neutral-600 dark:text-neutral-400 capitalize">{name}</span>
                      <span className="ml-2 text-xs text-neutral-500">({weight})</span>
                    </div>
                    <div className={`font-hanken text-2xl mb-2`} style={{ fontWeight: weight }}>
                      Aa Bb Cc
                    </div>
                    <div className={`font-hanken text-sm text-neutral-600 dark:text-neutral-400`} style={{ fontWeight: weight }}>
                      0123456789
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lufga */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">Lufga</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{fontFamilies.lufga.usage}</p>
                </div>
                <Badge variant="warning">Display</Badge>
              </div>

              <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 bg-white dark:bg-neutral-800">
                <div className="font-lufga text-6xl font-bold text-neutral-900 dark:text-white mb-4">
                  Lufga Display
                </div>
                <div className="font-lufga text-3xl font-semibold text-neutral-700 dark:text-neutral-300">
                  Large impactful headlines
                </div>
              </div>
            </div>
          </div>

          {/* Headlines */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Headlines (H1-H6)</h3>
            <div className="space-y-6">
              {([1, 2, 3, 4, 5, 6] as const).map((level) => {
                const style = headlineStyles[level].default;
                return (
                  <div key={level} className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 bg-white dark:bg-neutral-800">
                    <div className="mb-4">
                      <Heading level={level}>Headline Level {level}</Heading>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-neutral-600 dark:text-neutral-400">
                      <span>Size: {style.fontSize}px / {style.fontSizeRem}</span>
                      <span>Weight: {style.fontWeight}</span>
                      <span>Line Height: {style.lineHeightPercent}</span>
                      <span>Font: {style.fontFamily}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Body Text */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Body Text</h3>
            <div className="space-y-4">
              {(Object.keys(bodyStyles) as Array<keyof typeof bodyStyles>).map((size) => {
                const style = bodyStyles[size];
                return (
                  <div key={size} className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 bg-white dark:bg-neutral-800">
                    <div className="mb-2">
                      <Text size={size}>
                        Body {size.toUpperCase()}: The quick brown fox jumps over the lazy dog. This is a sample paragraph showcasing the body text style.
                      </Text>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-neutral-600 dark:text-neutral-400 mt-3">
                      <span>Size: {style.fontSize}px</span>
                      <span>Weight: {style.fontWeight}</span>
                      <span>Line Height: {style.lineHeightPercent}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Labels & Captions */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Labels & Captions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Labels</h4>
                {(Object.keys(labelStyles) as Array<keyof typeof labelStyles>).map((size) => (
                  <div key={size} className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 bg-white dark:bg-neutral-800">
                    <Label size={size}>Label {size.toUpperCase()}: Form field label</Label>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-2">
                      {labelStyles[size].fontSize}px · {labelStyles[size].fontWeight}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Captions & Overlines</h4>
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 bg-white dark:bg-neutral-800 space-y-4">
                  <div>
                    <Caption>Caption Style</Caption>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-2">
                      {captionStyle.fontSize}px · Uppercase · {captionStyle.letterSpacing}px spacing
                    </div>
                  </div>
                  <div>
                    <Overline>Overline Style</Overline>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-2">
                      {overlineStyle.fontSize}px · Uppercase · {overlineStyle.letterSpacing}px spacing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Type Scale Tab */}
      {activeTab === 'scale' && (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Type Scale Reference</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              Complete type scale with specifications and Tailwind classes.
            </p>

            {/* Complete table */}
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-neutral-50 dark:bg-neutral-800">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-neutral-900 dark:text-white">Style</th>
                      <th className="text-left py-3 px-4 font-semibold text-neutral-900 dark:text-white">Size</th>
                      <th className="text-left py-3 px-4 font-semibold text-neutral-900 dark:text-white">Weight</th>
                      <th className="text-left py-3 px-4 font-semibold text-neutral-900 dark:text-white">Line Height</th>
                      <th className="text-left py-3 px-4 font-semibold text-neutral-900 dark:text-white">Font</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
                    {/* Headlines */}
                    {([1, 2, 3, 4, 5, 6] as const).map((level) => {
                      const style = headlineStyles[level].default;
                      return (
                        <tr key={`h${level}`} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                          <td className="py-3 px-4 font-medium">H{level}</td>
                          <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400">{style.fontSize}px / {style.fontSizeRem}</td>
                          <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400">{style.fontWeight}</td>
                          <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400">{style.lineHeightPercent}</td>
                          <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400 capitalize">{style.fontFamily}</td>
                        </tr>
                      );
                    })}
                    {/* Body */}
                    {(Object.keys(bodyStyles) as Array<keyof typeof bodyStyles>).map((size) => {
                      const style = bodyStyles[size];
                      return (
                        <tr key={`body-${size}`} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                          <td className="py-3 px-4 font-medium">Body {size.toUpperCase()}</td>
                          <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400">{style.fontSize}px / {style.fontSizeRem}</td>
                          <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400">{style.fontWeight}</td>
                          <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400">{style.lineHeightPercent}</td>
                          <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400 capitalize">{style.fontFamily}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Usage Examples */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Code Examples</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">Using Components</h4>
                <CodeBlock code={`import { Heading, Text, Label } from '@/design-system/foundations/typography';

// Headlines
<Heading level={1}>Hero Title</Heading>
<Heading level={2} variant="alt">Section Title</Heading>
<Heading level={1} variant="xl">Display Headline</Heading>

// Body Text
<Text size="xl">Large intro paragraph</Text>
<Text size="m">Regular body text</Text>
<Text size="s">Small supporting text</Text>

// Labels
<Label size="l">Form Field Label</Label>
<Caption>BADGE TEXT</Caption>`} />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">Using Tailwind Classes</h4>
                <CodeBlock code={`// Font families
<h1 className="font-hanken">Hanken Grotesk</h1>
<h1 className="font-lufga">Lufga Display</h1>

// Headings with utility classes
<h1 className="text-[3.75rem] font-bold leading-[4.875rem]">
  H1 Heading
</h1>

// Body text
<p className="text-lg font-normal leading-[1.688rem]">
  Body M paragraph
</p>`} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Guidelines Tab */}
      {activeTab === 'guidelines' && (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Typography Guidelines</h3>

            {/* Spacing */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Spacing</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 bg-white dark:bg-neutral-800">
                  <div className="text-sm font-medium text-neutral-900 dark:text-white mb-2">Heading + Body</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {typographyGuidelines.spacing.headingBody.min}-{typographyGuidelines.spacing.headingBody.max}px gap
                  </div>
                </div>
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 bg-white dark:bg-neutral-800">
                  <div className="text-sm font-medium text-neutral-900 dark:text-white mb-2">Between Paragraphs</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {typographyGuidelines.spacing.betweenParagraphs}px gap
                  </div>
                </div>
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 bg-white dark:bg-neutral-800">
                  <div className="text-sm font-medium text-neutral-900 dark:text-white mb-2">Between Sections</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {typographyGuidelines.spacing.betweenSections.min}-{typographyGuidelines.spacing.betweenSections.max}px gap
                  </div>
                </div>
                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 bg-white dark:bg-neutral-800">
                  <div className="text-sm font-medium text-neutral-900 dark:text-white mb-2">Between Heading Levels</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {typographyGuidelines.spacing.betweenHeadingLevels}px gap
                  </div>
                </div>
              </div>
            </div>

            {/* Line Length */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Line Length (Readability)</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">Body Text</span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    50-75 characters per line
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">Headlines</span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    No limit
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">Captions</span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    40-60 characters per line
                  </span>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-4">Best Practices</h4>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>✓ Use only 1 H1 per page for proper hierarchy</li>
                <li>✓ Follow sequential heading order (H1→H2→H3...)</li>
                <li>✓ Use font weight to create visual contrast</li>
                <li>✓ Maintain 50-75 characters per line for body text</li>
                <li>✓ Use 150% line height for body text (better readability)</li>
                <li>✓ Use 130% line height for headlines (tighter, impactful)</li>
                <li>✓ Pair Lufga (display) with Hanken Grotesk (body) for contrast</li>
                <li>✓ Test text at actual size, not zoomed in/out</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
