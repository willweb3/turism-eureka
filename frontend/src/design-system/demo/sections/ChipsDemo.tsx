'use client';

import React, { useState } from 'react';
import { Chip, ChipGroup } from '@/design-system/components/chip';
import type { ChipGroupItem } from '@/design-system/components/chip';

// Sample icon components
function FilterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2">
      <path d="M2 3h10M4 7h6M6 11h2" />
    </svg>
  );
}

function TagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2">
      <path d="M2 2l5 5-5 5M7 2l5 5-5 5" />
    </svg>
  );
}

// Sample chip data
const sampleChips: ChipGroupItem[] = [
  { id: '1', label: 'React', variant: 'teal' },
  { id: '2', label: 'TypeScript', variant: 'info' },
  { id: '3', label: 'Next.js', variant: 'black' },
  { id: '4', label: 'Tailwind', variant: 'success' },
  { id: '5', label: 'Design System', variant: 'default' },
];

export function ChipsDemo() {
  const [dynamicChips, setDynamicChips] = useState(sampleChips);

  const handleRemove = (chipId: string) => {
    setDynamicChips((prev) => prev.filter((chip) => chip.id !== chipId));
  };

  return (
    <section id="chips" className="mb-16 scroll-mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Chips</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Compact, pill-shaped components for tags, filters, and status indicators.
        </p>
      </div>

      {/* Color Variants */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Color Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Chip label="Default" variant="default" />
          <Chip label="Black" variant="black" />
          <Chip label="Teal" variant="teal" />
          <Chip label="Error" variant="error" />
          <Chip label="Warning" variant="warning" />
          <Chip label="Orange" variant="orange" />
          <Chip label="Info" variant="info" />
          <Chip label="Success" variant="success" />
        </div>
      </div>

      {/* Sizes */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sizes</h3>
        <div className="flex items-center gap-3">
          <Chip label="Small" variant="teal" size="sm" />
          <Chip label="Medium" variant="teal" size="md" />
          <Chip label="Large" variant="teal" size="lg" />
        </div>
      </div>

      {/* Content Variants */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Content Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Chip label="Label Only" variant="teal" />
          <Chip label="With Icon" variant="info" icon={<FilterIcon />} />
          <Chip label="Removable" variant="success" removable onRemove={() => {}} />
          <Chip label="Icon + Remove" variant="warning" icon={<TagIcon />} removable onRemove={() => {}} />
        </div>
      </div>

      {/* Interactive */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Interactive</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold mb-3">Clickable</h4>
            <div className="flex flex-wrap gap-3">
              <Chip label="Click me" variant="teal" onClick={() => alert('Chip clicked!')} />
              <Chip label="With Icon" variant="info" icon={<FilterIcon />} onClick={() => alert('Filter clicked!')} />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Removable (Try removing)</h4>
            <ChipGroup chips={dynamicChips.map(chip => ({ ...chip, removable: true }))} onRemove={handleRemove} />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Disabled</h4>
            <div className="flex flex-wrap gap-3">
              <Chip label="Disabled" variant="teal" disabled />
              <Chip label="Disabled Remove" variant="error" removable disabled onRemove={() => {}} />
            </div>
          </div>
        </div>
      </div>

      {/* Chip Groups */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Chip Groups</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold mb-3">Default</h4>
            <ChipGroup chips={sampleChips} />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Spacing Options</h4>
            <div className="space-y-3">
              <ChipGroup chips={sampleChips.slice(0, 3)} spacing="tight" />
              <ChipGroup chips={sampleChips.slice(0, 3)} spacing="normal" />
              <ChipGroup chips={sampleChips.slice(0, 3)} spacing="loose" />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Truncated (max 3)</h4>
            <ChipGroup
              chips={[...sampleChips, ...sampleChips]}
              variant="truncated"
              max={3}
              showTruncatedTooltip
            />
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">API</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`<Chip label="Tag" variant="teal" size="md" />
<Chip label="Filter" icon={<Icon />} removable onRemove={handleRemove} />
<ChipGroup chips={items} variant="truncated" max={5} spacing="normal" />`}</code>
        </pre>
      </div>
    </section>
  );
}
