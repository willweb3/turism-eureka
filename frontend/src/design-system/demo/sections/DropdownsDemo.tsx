'use client';

import React, { useState } from 'react';
import { Select, MultiSelect, SelectOption } from '@/design-system/components/select';
import { CodeBlock } from '../components/CodeBlock';
import { Badge } from '../components/Badge';
import { Globe, MapPin, DollarSign, Tag, User, Flag, Check, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type ActiveTab = 'single-select' | 'multi-select';

/**
 * DropdownsDemo Component
 *
 * Complete demonstration of select/dropdown components
 */
export function DropdownsDemo() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('single-select');

  return (
    <section id="dropdowns" className="mb-16 scroll-mt-16">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dropdown / Select Components
          </h2>
          <Badge variant="teal">Components</Badge>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Dropdown and select components for choosing from predefined options.
          Built with Radix UI for accessibility and keyboard navigation.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">2+</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Variants</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Select types</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">5</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">States</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Visual states</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">WCAG AA</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Accessible</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Full keyboard nav</div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-1">Portal</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Rendering</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">No overflow issues</div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h3>
        <div className="space-y-4 text-gray-600 dark:text-gray-400">
          <p>
            Select components allow users to choose from a predefined set of options.
            They are more compact than radio buttons and better for longer lists.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Single Select</h4>
              <p className="text-sm">
                Choose one option from a list. Use for countries, languages, status, categories, etc.
                Shows check icon on selected item.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Multi Select</h4>
              <p className="text-sm">
                Choose multiple options with checkboxes. Displays selected items as badges or count.
                Great for tags, filters, permissions.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">
              When to Use Select vs Other Components:
            </h4>
            <ul className="text-sm space-y-1 text-blue-800 dark:text-blue-200">
              <li>• <strong>Select:</strong> 5+ options, single/multiple choice</li>
              <li>• <strong>Radio Group:</strong> 2-4 options, must see all options</li>
              <li>• <strong>Checkbox Group:</strong> 2-4 options, multiple choice</li>
              <li>• <strong>Toggle:</strong> Binary on/off choice</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveTab('single-select')}
              className={cn(
                'pb-4 px-1 border-b-2 font-medium text-sm transition-colors',
                activeTab === 'single-select'
                  ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
            >
              Single Select
            </button>
            <button
              onClick={() => setActiveTab('multi-select')}
              className={cn(
                'pb-4 px-1 border-b-2 font-medium text-sm transition-colors',
                activeTab === 'multi-select'
                  ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
            >
              Multi Select
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'single-select' && <SingleSelectSection />}
      {activeTab === 'multi-select' && <MultiSelectSection />}
    </section>
  );
}

/**
 * Single Select Section
 */
function SingleSelectSection() {
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('');

  const countries: SelectOption[] = [
    { value: 'us', label: 'United States', icon: <Flag size={20} /> },
    { value: 'uk', label: 'United Kingdom', icon: <Flag size={20} /> },
    { value: 'ca', label: 'Canada', icon: <Flag size={20} /> },
    { value: 'au', label: 'Australia', icon: <Flag size={20} /> },
    { value: 'de', label: 'Germany', icon: <Flag size={20} /> },
    { value: 'fr', label: 'France', icon: <Flag size={20} /> },
    { value: 'es', label: 'Spain', icon: <Flag size={20} /> },
    { value: 'it', label: 'Italy', icon: <Flag size={20} /> },
  ];

  const languages: SelectOption[] = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
    { value: 'pt', label: 'Português' },
    { value: 'it', label: 'Italiano' },
  ];

  const currencies: SelectOption[] = [
    { value: 'usd', label: 'USD - US Dollar', icon: <DollarSign size={20} /> },
    { value: 'eur', label: 'EUR - Euro', icon: <DollarSign size={20} /> },
    { value: 'gbp', label: 'GBP - British Pound', icon: <DollarSign size={20} /> },
    { value: 'jpy', label: 'JPY - Japanese Yen', icon: <DollarSign size={20} /> },
    { value: 'cad', label: 'CAD - Canadian Dollar', icon: <DollarSign size={20} /> },
  ];

  return (
    <div className="space-y-12">
      {/* Anatomy */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Anatomy</h3>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
          <div className="space-y-6 max-w-2xl">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Component Structure:</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• <strong>Label:</strong> 14px Medium 500, #11212D</li>
                <li>• <strong>Trigger:</strong> 45px min-height, 12px padding, 8px border-radius</li>
                <li>• <strong>Left Icon:</strong> 20x20px (optional)</li>
                <li>• <strong>Selected Text / Placeholder:</strong> 14px Regular 400</li>
                <li>• <strong>Chevron Icon:</strong> 24x24px, rotates on open</li>
                <li>• <strong>Dropdown:</strong> Portal rendered, auto-positioned</li>
                <li>• <strong>Options:</strong> 8px padding, hover background #F2F6F8</li>
                <li>• <strong>Check Icon:</strong> 20x20px Teal-400 on selected item</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* States */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">States</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <Badge variant="neutral" className="mb-4">Placeholder</Badge>
            <Select
              label="Country"
              placeholder="Select a country"
              options={countries.slice(0, 4)}
            />
            <div className="mt-4 text-xs space-y-1 text-gray-600">
              <div>Border: 1px #BFC3C9</div>
              <div>Text: #777777 (Grey)</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <Badge variant="neutral" className="mb-4">Selected</Badge>
            <Select
              label="Language"
              value="en"
              options={languages}
            />
            <div className="mt-4 text-xs space-y-1 text-gray-600">
              <div>Border: 1px #BFC3C9</div>
              <div>Text: #11212D (Blue)</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <Badge variant="neutral" className="mb-4">Disabled</Badge>
            <Select
              label="Currency"
              placeholder="Select currency"
              options={currencies}
              disabled
            />
            <div className="mt-4 text-xs space-y-1 text-gray-600">
              <div>Opacity: 50%</div>
              <div>Cursor: not-allowed</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <Badge variant="red" className="mb-4">Error</Badge>
            <Select
              label="Country"
              placeholder="Select a country"
              options={countries.slice(0, 4)}
              error
              helperText="Please select a country"
            />
            <div className="mt-4 text-xs space-y-1 text-gray-600">
              <div>Border: 1px #DC2626</div>
              <div>Text: #DC2626 (Red)</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <Badge variant="green" className="mb-4">Success</Badge>
            <Select
              label="Language"
              value="en"
              options={languages}
              success
              helperText="Language saved"
            />
            <div className="mt-4 text-xs space-y-1 text-gray-600">
              <div>Border: 1px #22AE51</div>
              <div>Text: #22AE51 (Green)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Examples</h3>

        <div className="space-y-8">
          {/* Country Selector */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Country Selector
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Select
                  label="Country"
                  placeholder="Select your country"
                  options={countries}
                  value={country}
                  onChange={setCountry}
                  leftIcon={<Globe size={20} />}
                />
              </div>
              <CodeBlock
                code={`<Select
  label="Country"
  placeholder="Select your country"
  options={countries}
  value={country}
  onChange={setCountry}
  leftIcon={<Globe size={20} />}
/>`}
                language="tsx"
              />
            </div>
          </div>

          {/* Language Selector */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Language Selector
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Select
                  label="Preferred Language"
                  options={languages}
                  value={language}
                  onChange={setLanguage}
                  helperText="Choose your preferred language"
                />
              </div>
              <CodeBlock
                code={`<Select
  label="Preferred Language"
  options={languages}
  value={language}
  onChange={setLanguage}
  helperText="Choose your preferred language"
/>`}
                language="tsx"
              />
            </div>
          </div>

          {/* Currency Selector */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Currency Selector
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Select
                  label="Currency"
                  placeholder="Select currency"
                  options={currencies}
                  value={currency}
                  onChange={setCurrency}
                  leftIcon={<DollarSign size={20} />}
                />
              </div>
              <CodeBlock
                code={`<Select
  label="Currency"
  placeholder="Select currency"
  options={currencies}
  value={currency}
  onChange={setCurrency}
  leftIcon={<DollarSign size={20} />}
/>`}
                language="tsx"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Best Practices
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Check className="text-green-600" size={20} />
              <h4 className="font-semibold text-green-900 dark:text-green-100">Do</h4>
            </div>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <li>✓ Use for 5+ options</li>
              <li>✓ Sort options logically</li>
              <li>✓ Provide clear labels</li>
              <li>✓ Use icons for clarity</li>
              <li>✓ Keep option text concise</li>
              <li>✓ Support keyboard navigation</li>
              <li>✓ Show selected value clearly</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="text-red-600" size={20} />
              <h4 className="font-semibold text-red-900 dark:text-red-100">Don't</h4>
            </div>
            <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
              <li>✗ Use for binary choices</li>
              <li>✗ Hide critical information</li>
              <li>✗ Use tiny fonts</li>
              <li>✗ Nest dropdowns</li>
              <li>✗ Make options too similar</li>
              <li>✗ Forget mobile users</li>
              <li>✗ Disable without reason</li>
            </ul>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          API Reference
        </h3>
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
                  <td className="py-3 px-4 font-mono text-purple-600">label</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Select label text</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">options</td>
                  <td className="py-3 px-4">SelectOption[]</td>
                  <td className="py-3 px-4">required</td>
                  <td className="py-3 px-4">Array of options</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">value</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Selected value</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">onChange</td>
                  <td className="py-3 px-4">(value: string) =&gt; void</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Change handler</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">leftIcon</td>
                  <td className="py-3 px-4">ReactNode</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Left icon (20x20px)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">disabled</td>
                  <td className="py-3 px-4">boolean</td>
                  <td className="py-3 px-4">false</td>
                  <td className="py-3 px-4">Disabled state</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">error</td>
                  <td className="py-3 px-4">boolean</td>
                  <td className="py-3 px-4">false</td>
                  <td className="py-3 px-4">Error state</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">success</td>
                  <td className="py-3 px-4">boolean</td>
                  <td className="py-3 px-4">false</td>
                  <td className="py-3 px-4">Success state</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Multi Select Section
 */
function MultiSelectSection() {
  const [tags, setTags] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>(['tech', 'design']);

  const tagOptions: SelectOption[] = [
    { value: 'react', label: 'React', icon: <Tag size={20} /> },
    { value: 'vue', label: 'Vue', icon: <Tag size={20} /> },
    { value: 'angular', label: 'Angular', icon: <Tag size={20} /> },
    { value: 'svelte', label: 'Svelte', icon: <Tag size={20} /> },
    { value: 'next', label: 'Next.js', icon: <Tag size={20} /> },
    { value: 'nuxt', label: 'Nuxt', icon: <Tag size={20} /> },
  ];

  const categoryOptions: SelectOption[] = [
    { value: 'tech', label: 'Technology' },
    { value: 'design', label: 'Design' },
    { value: 'business', label: 'Business' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'sales', label: 'Sales' },
    { value: 'support', label: 'Support' },
  ];

  return (
    <div className="space-y-12">
      {/* Description */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Multi Select
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Multi-select allows users to choose multiple options from a list. Selected items are displayed
          as badges in the trigger or as a count. Checkboxes indicate selection state.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-900 dark:text-white">Display Modes:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">Badges or Count</span>
          </div>
          <div>
            <span className="font-medium text-gray-900 dark:text-white">Selection:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">Checkboxes with click</span>
          </div>
        </div>
      </div>

      {/* States */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Display Modes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <Badge variant="neutral" className="mb-4">Badges Mode</Badge>
            <MultiSelect
              label="Tags"
              placeholder="Select tags"
              options={tagOptions}
              value={['react', 'vue']}
              displayMode="badges"
            />
            <div className="mt-4 text-xs text-gray-600">
              Shows first 3 selections as badges, rest as "+N more"
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <Badge variant="neutral" className="mb-4">Count Mode</Badge>
            <MultiSelect
              label="Categories"
              placeholder="Select categories"
              options={categoryOptions}
              value={['tech', 'design']}
              displayMode="count"
            />
            <div className="mt-4 text-xs text-gray-600">
              Shows "N selected" text instead of badges
            </div>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Examples</h3>

        <div className="space-y-8">
          {/* Tags Selector */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Tags Selector with Badges
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <MultiSelect
                  label="Technologies"
                  placeholder="Select technologies"
                  options={tagOptions}
                  value={tags}
                  onChange={setTags}
                  displayMode="badges"
                  showSelectAll
                  showClearAll
                />
              </div>
              <CodeBlock
                code={`<MultiSelect
  label="Technologies"
  placeholder="Select technologies"
  options={tagOptions}
  value={tags}
  onChange={setTags}
  displayMode="badges"
  showSelectAll
  showClearAll
/>`}
                language="tsx"
              />
            </div>
          </div>

          {/* Categories Selector */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Categories Selector with Count
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <MultiSelect
                  label="Categories"
                  placeholder="Select categories"
                  options={categoryOptions}
                  value={categories}
                  onChange={setCategories}
                  displayMode="count"
                  helperText="Select one or more categories"
                />
              </div>
              <CodeBlock
                code={`<MultiSelect
  label="Categories"
  placeholder="Select categories"
  options={categoryOptions}
  value={categories}
  onChange={setCategories}
  displayMode="count"
  helperText="Select one or more categories"
/>`}
                language="tsx"
              />
            </div>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          API Reference
        </h3>
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
                  <td className="py-3 px-4 font-mono text-purple-600">value</td>
                  <td className="py-3 px-4">string[]</td>
                  <td className="py-3 px-4">[]</td>
                  <td className="py-3 px-4">Selected values array</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">onChange</td>
                  <td className="py-3 px-4">(value: string[]) =&gt; void</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Change handler with array</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">displayMode</td>
                  <td className="py-3 px-4">'badges' | 'count'</td>
                  <td className="py-3 px-4">'badges'</td>
                  <td className="py-3 px-4">How to display selections</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">maxSelections</td>
                  <td className="py-3 px-4">number</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Maximum selections allowed</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">showSelectAll</td>
                  <td className="py-3 px-4">boolean</td>
                  <td className="py-3 px-4">false</td>
                  <td className="py-3 px-4">Show select all button</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600">showClearAll</td>
                  <td className="py-3 px-4">boolean</td>
                  <td className="py-3 px-4">true</td>
                  <td className="py-3 px-4">Show clear all button</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
