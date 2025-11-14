'use client';

import React, { useState } from 'react';
import { Divider } from '@/components/Divider';

// Sample icon components
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2">
      <path d="M10 5v10M5 10h10" />
    </svg>
  );
}

function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2">
      <path d="M5 8l5 5 5-5" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2">
      <path d="M5 5l10 10M15 5l-10 10" />
    </svg>
  );
}

export function DividerDemo() {
  const [sectionExpanded, setSectionExpanded] = useState(false);

  return (
    <section id="dividers" className="mb-16 scroll-mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Dividers</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Content dividers to separate sections, with optional labels or interactive buttons.
        </p>
      </div>

      {/* Simple Dividers */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Simple Dividers</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold mb-3">Default (Solid)</h4>
            <Divider />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Dashed</h4>
            <Divider variant="dashed" />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Dotted</h4>
            <Divider variant="dotted" />
          </div>
        </div>
      </div>

      {/* Color Variants */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Color Variants</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold mb-3">Neutral (Default)</h4>
            <Divider color="neutral" />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Blue</h4>
            <Divider color="blue" />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Gray</h4>
            <Divider color="gray" />
          </div>
        </div>
      </div>

      {/* With Label */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Dividers with Label</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold mb-3">Simple Text</h4>
            <Divider type="with-label" label="or" />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Section Label</h4>
            <Divider type="with-label" label="User Details" color="blue" />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">With Dashed Line</h4>
            <Divider type="with-label" label="Continue" variant="dashed" color="gray" />
          </div>
        </div>
      </div>

      {/* With CTA */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Dividers with CTA</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold mb-3">Add Button</h4>
            <Divider
              type="with-cta"
              cta={{
                icon: <PlusIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />,
                onClick: () => alert('Add item clicked!'),
                ariaLabel: 'Add item',
              }}
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Expand/Collapse</h4>
            <Divider
              type="with-cta"
              color="blue"
              cta={{
                icon: (
                  <ExpandIcon
                    className={`w-5 h-5 text-blue-600 dark:text-blue-400 transition-transform ${
                      sectionExpanded ? 'rotate-180' : ''
                    }`}
                  />
                ),
                onClick: () => setSectionExpanded(!sectionExpanded),
                ariaLabel: sectionExpanded ? 'Collapse section' : 'Expand section',
              }}
            />
            {sectionExpanded && (
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                <p className="text-gray-700 dark:text-gray-300">
                  This content is now visible! Click the button above to collapse.
                </p>
              </div>
            )}
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Close/Remove</h4>
            <Divider
              type="with-cta"
              variant="dashed"
              color="gray"
              cta={{
                icon: <CloseIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />,
                onClick: () => alert('Close clicked!'),
                ariaLabel: 'Close section',
              }}
            />
          </div>
        </div>
      </div>

      {/* Vertical Dividers */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Vertical Dividers</h3>
        <div className="flex items-center gap-4 h-32">
          <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900 h-full rounded">
            Section 1
          </div>
          <Divider orientation="vertical" />
          <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900 h-full rounded">
            Section 2
          </div>
          <Divider orientation="vertical" color="blue" />
          <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900 h-full rounded">
            Section 3
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Usage Examples</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold mb-3">Login Form</h4>
            <div className="max-w-md">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Continue with Email
              </button>
              <Divider type="with-label" label="or" className="my-4" />
              <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Continue with Google
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Content Sections</h4>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Personal Information</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Name, email, phone number</p>
              </div>
              <Divider />
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Street, city, postal code</p>
              </div>
              <Divider />
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Payment Details</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Credit card, billing address</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">API</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`// Simple divider
<Divider />
<Divider variant="dashed" color="blue" />

// With label
<Divider type="with-label" label="or" />

// With CTA
<Divider
  type="with-cta"
  cta={{
    icon: <PlusIcon />,
    onClick: handleClick,
    ariaLabel: 'Add item'
  }}
/>

// Vertical
<Divider orientation="vertical" />`}</code>
        </pre>
      </div>
    </section>
  );
}
