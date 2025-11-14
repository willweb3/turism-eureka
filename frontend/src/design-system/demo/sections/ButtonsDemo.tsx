'use client';

import React, { useState } from 'react';
import { Button } from '@/design-system/components/button';
import { CodeBlock } from '../components/CodeBlock';
import { Badge } from '../components/Badge';
import { Mail, Download, Trash2, Check, AlertCircle, ChevronRight, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * ButtonsDemo Component
 *
 * Complete demonstration of button components
 */
export function ButtonsDemo() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleAsyncAction = (setLoading: (val: boolean) => void) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section id="buttons" className="mb-16 scroll-mt-16">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Button Components
          </h2>
          <Badge variant="teal">Components</Badge>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Versatile button components with multiple variants, sizes, and states.
          Built for accessibility and user interaction.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">6</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Variants</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Button types</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">3</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Sizes</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Small to Large</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">6</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">States</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Interactive states</div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-1">WCAG AA</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Accessible</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Compliant</div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h3>
        <div className="space-y-4 text-gray-600 dark:text-gray-400">
          <p>
            Buttons are interactive elements that users click to perform actions.
            Use the right button variant to establish clear visual hierarchy.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">
              Button Hierarchy:
            </h4>
            <ul className="text-sm space-y-1 text-blue-800 dark:text-blue-200">
              <li>• <strong>Primary:</strong> Main action (one per screen)</li>
              <li>• <strong>Secondary:</strong> Important secondary actions</li>
              <li>• <strong>Tertiary:</strong> Less prominent actions on light backgrounds</li>
              <li>• <strong>Quaternary:</strong> Actions on dark backgrounds</li>
              <li>• <strong>Destructive:</strong> Dangerous actions (delete, remove)</li>
              <li>• <strong>Text:</strong> Lowest priority, subtle actions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Variants Showcase */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Button Variants</h3>
        <div className="space-y-6">
          {/* Primary */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Primary</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Main call-to-action button</p>
              </div>
              <Badge variant="teal">Most Important</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Button variant="primary" size="large">Large Button</Button>
              <Button variant="primary" size="medium">Medium Button</Button>
              <Button variant="primary" size="small">Small Button</Button>
              <Button variant="primary" disabled>Disabled</Button>
              <Button variant="primary" loading>Loading</Button>
            </div>
            <CodeBlock code={`<Button variant="primary" size="medium">
  Click me
</Button>`} language="tsx" />
          </div>

          {/* Secondary */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Secondary</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Secondary actions with border</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Button variant="secondary" size="large">Large Button</Button>
              <Button variant="secondary" size="medium">Medium Button</Button>
              <Button variant="secondary" size="small">Small Button</Button>
              <Button variant="secondary" disabled>Disabled</Button>
            </div>
            <CodeBlock code={`<Button variant="secondary">
  Cancel
</Button>`} language="tsx" />
          </div>

          {/* Tertiary */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Tertiary</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Subtle button for light backgrounds</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Button variant="tertiary" size="large">Large Button</Button>
              <Button variant="tertiary" size="medium">Medium Button</Button>
              <Button variant="tertiary" size="small">Small Button</Button>
            </div>
          </div>

          {/* Quaternary */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-semibold text-white">Quaternary</h4>
                <p className="text-sm text-gray-400">For dark backgrounds</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="quaternary" size="large">Large Button</Button>
              <Button variant="quaternary" size="medium">Medium Button</Button>
              <Button variant="quaternary" size="small">Small Button</Button>
            </div>
          </div>

          {/* Destructive */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Destructive</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">For dangerous actions</p>
              </div>
              <Badge variant="red">Caution</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Button variant="destructive" size="large" leftIcon={<Trash2 size={24} />}>
                Delete Account
              </Button>
              <Button variant="destructive" size="medium" leftIcon={<Trash2 size={20} />}>
                Remove Item
              </Button>
              <Button variant="destructive" size="small">Delete</Button>
            </div>
            <CodeBlock code={`<Button variant="destructive" leftIcon={<Trash2 />}>
  Delete Account
</Button>`} language="tsx" />
          </div>

          {/* Text */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Text</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Minimal styling, subtle actions</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="text" size="large">Learn More</Button>
              <Button variant="text" size="medium">View Details</Button>
              <Button variant="text" size="small">Skip</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Buttons with Icons</h3>
        <div className="space-y-6">
          {/* Left Icon */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Left Icon</h4>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Button variant="primary" leftIcon={<Mail size={20} />}>Send Email</Button>
              <Button variant="secondary" leftIcon={<Download size={20} />}>Download</Button>
              <Button variant="destructive" leftIcon={<Trash2 size={20} />}>Delete</Button>
            </div>
            <CodeBlock code={`<Button variant="primary" leftIcon={<Mail size={20} />}>
  Send Email
</Button>`} language="tsx" />
          </div>

          {/* Right Icon */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Right Icon</h4>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Button variant="primary" rightIcon={<ChevronRight size={20} />}>Continue</Button>
              <Button variant="secondary" rightIcon={<ChevronRight size={20} />}>Next Step</Button>
            </div>
            <CodeBlock code={`<Button variant="primary" rightIcon={<ChevronRight />}>
  Continue
</Button>`} language="tsx" />
          </div>

          {/* Icon Only */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Icon Only (Circular)</h4>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Button variant="primary" iconOnly size="large" leftIcon={<Plus size={24} />} aria-label="Add" />
              <Button variant="primary" iconOnly size="medium" leftIcon={<Plus size={20} />} aria-label="Add" />
              <Button variant="primary" iconOnly size="small" leftIcon={<Plus size={16} />} aria-label="Add" />
              <Button variant="secondary" iconOnly leftIcon={<Download size={20} />} aria-label="Download" />
              <Button variant="destructive" iconOnly leftIcon={<Trash2 size={20} />} aria-label="Delete" />
            </div>
            <CodeBlock code={`<Button
  variant="primary"
  iconOnly
  leftIcon={<Plus />}
  aria-label="Add"
/>`} language="tsx" />
          </div>
        </div>
      </div>

      {/* Loading States */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Loading States</h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Buttons show loading spinner during async operations
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Button
              variant="primary"
              loading={loading1}
              onClick={() => handleAsyncAction(setLoading1)}
            >
              {loading1 ? 'Saving...' : 'Save Changes'}
            </Button>
            <Button
              variant="destructive"
              loading={loading2}
              onClick={() => handleAsyncAction(setLoading2)}
              leftIcon={<Trash2 size={20} />}
            >
              {loading2 ? 'Deleting...' : 'Delete Item'}
            </Button>
            <Button variant="primary" loading>
              Processing...
            </Button>
          </div>
          <CodeBlock code={`const [loading, setLoading] = useState(false);

<Button
  variant="primary"
  loading={loading}
  onClick={() => handleAsyncAction()}
>
  {loading ? 'Saving...' : 'Save Changes'}
</Button>`} language="tsx" />
        </div>
      </div>

      {/* Real-World Examples */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Real-World Examples</h3>

        {/* Login Form */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Login Form</h4>
          <div className="max-w-md space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <Button variant="primary" fullWidth>Sign In</Button>
            <div className="text-center">
              <Button variant="text" size="small">Forgot password?</Button>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Modal Actions</h4>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex justify-end gap-3">
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Confirm</Button>
            </div>
          </div>
        </div>

        {/* Delete Confirmation */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Delete Confirmation</h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <Button variant="secondary">Cancel</Button>
            <Button variant="destructive" leftIcon={<Trash2 size={20} />}>
              Delete Permanently
            </Button>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Best Practices</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Check className="text-green-600" size={20} />
              <h4 className="font-semibold text-green-900 dark:text-green-100">Do</h4>
            </div>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <li>✓ Use one primary button per screen</li>
              <li>✓ Use clear, action-oriented text</li>
              <li>✓ Provide loading feedback</li>
              <li>✓ Use destructive for dangerous actions</li>
              <li>✓ Ensure 44x44px touch targets</li>
              <li>✓ Add aria-label for icon-only buttons</li>
              <li>✓ Use consistent sizing</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="text-red-600" size={20} />
              <h4 className="font-semibold text-red-900 dark:text-red-100">Don't</h4>
            </div>
            <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
              <li>✗ Use vague text ("Click here", "Submit")</li>
              <li>✗ Have multiple primary buttons</li>
              <li>✗ Make buttons too small</li>
              <li>✗ Forget disabled/loading states</li>
              <li>✗ Use destructive for non-dangerous actions</li>
              <li>✗ Mix too many button styles</li>
              <li>✗ Ignore keyboard accessibility</li>
            </ul>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">API Reference</h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Prop</th>
                  <th className="text-left py-3 px-4 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Default</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">variant</td>
                  <td className="py-3 px-4">'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'destructive' | 'text'</td>
                  <td className="py-3 px-4">'primary'</td>
                  <td className="py-3 px-4">Button variant</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">size</td>
                  <td className="py-3 px-4">'small' | 'medium' | 'large'</td>
                  <td className="py-3 px-4">'medium'</td>
                  <td className="py-3 px-4">Button size</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">leftIcon</td>
                  <td className="py-3 px-4">ReactNode</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Icon on the left</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">rightIcon</td>
                  <td className="py-3 px-4">ReactNode</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Icon on the right</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">iconOnly</td>
                  <td className="py-3 px-4">boolean</td>
                  <td className="py-3 px-4">false</td>
                  <td className="py-3 px-4">Circular icon-only button</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">loading</td>
                  <td className="py-3 px-4">boolean</td>
                  <td className="py-3 px-4">false</td>
                  <td className="py-3 px-4">Loading state with spinner</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">disabled</td>
                  <td className="py-3 px-4">boolean</td>
                  <td className="py-3 px-4">false</td>
                  <td className="py-3 px-4">Disabled state</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">fullWidth</td>
                  <td className="py-3 px-4">boolean</td>
                  <td className="py-3 px-4">false</td>
                  <td className="py-3 px-4">Full width button</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
