'use client';

import React, { useState } from 'react';
import { Checkbox, CheckboxWithLabel, CheckboxCard, CheckboxCardGroup } from '@/components/Checkbox';
import { Radio, RadioGroup, RadioWithLabel, RadioCard } from '@/components/Radio';
import { BarChart, Code, Headphones, Package, Truck, Zap, Rocket, Building } from 'lucide-react';

export function CheckboxRadioDemo() {
  // Checkbox states
  const [singleCheck, setSingleCheck] = useState(false);
  const [terms, setTerms] = useState(false);
  const [termsError, setTermsError] = useState('');

  // Multi-select states
  const [categories, setCategories] = useState<string[]>([]);
  const allCategories = ['electronics', 'clothing', 'books'];
  const allSelected = categories.length === allCategories.length;
  const someSelected = categories.length > 0 && !allSelected;

  // Radio states
  const [plan, setPlan] = useState('');
  const [shipping, setShipping] = useState('standard');
  const [theme, setTheme] = useState('light');

  // Card states
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [selectedShipping, setSelectedShipping] = useState('standard');

  const handleCategoryToggle = (category: string) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSelectAll = () => {
    setCategories(allSelected ? [] : allCategories);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terms) {
      setTermsError('You must accept the terms');
      return;
    }
    setTermsError('');
    alert('Form submitted!');
  };

  return (
    <section id="checkbox-radio" className="mb-16 scroll-mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Checkbox & Radio
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Selection controls for forms and interfaces. Checkboxes for multiple selections, Radio buttons for single choice.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">2</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Components</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Checkbox & Radio</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Sizes</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Small, Medium, Large</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">States</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Default, Hover, Focus, Disabled</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Accessible</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">WCAG Compliant</div>
        </div>
      </div>

      {/* When to Use */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          When to Use Each Component
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
              ✓ Use Checkbox when:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>Multiple independent selections</li>
              <li>Options are not mutually exclusive</li>
              <li>Selecting items from a list</li>
              <li>On/off with submit (not immediate)</li>
              <li>Part of a larger form</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
              ✓ Use Radio when:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>Only ONE option can be selected</li>
              <li>Options are mutually exclusive</li>
              <li>2-7 options (more = use Select)</li>
              <li>All options must be visible</li>
              <li>Choice is usually required</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CHECKBOX SECTION */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Checkboxes</h3>

        {/* Basic Checkboxes */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Basic Checkboxes</h4>
          <div className="flex items-center gap-6">
            <Checkbox checked={singleCheck} onChange={setSingleCheck} />
            <Checkbox defaultChecked={true} />
            <Checkbox defaultChecked={false} />
          </div>
        </div>

        {/* Sizes */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sizes</h4>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <Checkbox size="sm" defaultChecked={true} />
              <span className="text-xs text-gray-500">Small (16px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Checkbox size="md" defaultChecked={true} />
              <span className="text-xs text-gray-500">Medium (18px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Checkbox size="lg" defaultChecked={true} />
              <span className="text-xs text-gray-500">Large (20px)</span>
            </div>
          </div>
        </div>

        {/* States */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">States</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Default</span>
              <Checkbox defaultChecked={false} />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Checked</span>
              <Checkbox defaultChecked={true} />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Indeterminate</span>
              <Checkbox indeterminate={true} />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Disabled</span>
              <Checkbox disabled defaultChecked={true} />
            </div>
          </div>
        </div>

        {/* Variants */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Variants</h4>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <Checkbox variant="default" defaultChecked={true} />
              <span className="text-xs text-gray-500">Default (Square)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Checkbox variant="circle" defaultChecked={true} />
              <span className="text-xs text-gray-500">Circle</span>
            </div>
          </div>
        </div>

        {/* With Labels */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">With Labels</h4>
          <div className="space-y-4 max-w-xl">
            <CheckboxWithLabel label="Accept terms and conditions" required checked={terms} onChange={(checked) => { setTerms(checked); if(checked) setTermsError(''); }} error={termsError} />
            <CheckboxWithLabel label="Subscribe to newsletter" description="Receive updates about new features" defaultChecked={false} />
            <CheckboxWithLabel label="Enable notifications" hint="You can change this later in settings" defaultChecked={true} />
          </div>
        </div>

        {/* Select All Pattern */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Select All Pattern</h4>
          <div className="space-y-3 max-w-xl">
            <CheckboxWithLabel label="Select all categories" checked={allSelected} indeterminate={someSelected} onChange={handleSelectAll} />
            <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
            <div className="space-y-2 ml-6">
              <CheckboxWithLabel label="Electronics" value="electronics" checked={categories.includes('electronics')} onChange={() => handleCategoryToggle('electronics')} />
              <CheckboxWithLabel label="Clothing" value="clothing" checked={categories.includes('clothing')} onChange={() => handleCategoryToggle('clothing')} />
              <CheckboxWithLabel label="Books" value="books" checked={categories.includes('books')} onChange={() => handleCategoryToggle('books')} />
            </div>
          </div>
        </div>
      </div>

      {/* RADIO SECTION */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Radio Buttons</h3>

        {/* Basic Radio Group */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Basic Radio Group</h4>
          <RadioGroup name="plan" value={plan} onChange={setPlan}>
            <div className="space-y-3">
              <RadioWithLabel value="free" label="Free Plan" />
              <RadioWithLabel value="pro" label="Pro Plan" />
              <RadioWithLabel value="enterprise" label="Enterprise Plan" />
            </div>
          </RadioGroup>
        </div>

        {/* Sizes */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sizes</h4>
          <RadioGroup name="size-demo">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <Radio value="sm" size="sm" />
                <span className="text-xs text-gray-500">Small</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Radio value="md" size="md" />
                <span className="text-xs text-gray-500">Medium</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Radio value="lg" size="lg" />
                <span className="text-xs text-gray-500">Large</span>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Horizontal Layout */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Horizontal Layout</h4>
          <RadioGroup name="theme" value={theme} onChange={setTheme} orientation="horizontal">
            <RadioWithLabel value="light" label="Light" />
            <RadioWithLabel value="dark" label="Dark" />
            <RadioWithLabel value="auto" label="Auto" />
          </RadioGroup>
        </div>

        {/* With Descriptions */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Shipping Options</h4>
          <RadioGroup name="shipping" value={shipping} onChange={setShipping}>
            <div className="space-y-3">
              <RadioWithLabel value="standard" label="Standard Shipping" description="5-7 business days - Free" />
              <RadioWithLabel value="express" label="Express Shipping" description="2-3 business days - $9.99" />
              <RadioWithLabel value="overnight" label="Overnight Shipping" description="Next business day - $24.99" />
            </div>
          </RadioGroup>
        </div>

        {/* Disabled State */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Disabled State</h4>
          <RadioGroup name="disabled-demo" disabled>
            <div className="space-y-3">
              <RadioWithLabel value="option1" label="Option 1 (Disabled)" />
              <RadioWithLabel value="option2" label="Option 2 (Disabled)" />
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* Form Example */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Form Example</h3>
        <form onSubmit={handleFormSubmit} className="max-w-md space-y-4">
          <CheckboxWithLabel label="I accept the terms and conditions" required checked={terms} onChange={(checked) => { setTerms(checked); if(checked) setTermsError(''); }} error={termsError} />
          <button type="submit" className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition">
            Submit
          </button>
        </form>
      </div>

      {/* CHECKBOX CARDS SECTION */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Checkbox Cards</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Rich card components with integrated checkboxes for feature selection and multi-select options.
        </p>

        {/* Checkbox Cards - Feature Selection */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Feature Selection</h4>
          <CheckboxCardGroup
            value={selectedFeatures}
            onChange={setSelectedFeatures}
            className="max-w-2xl"
          >
            <CheckboxCard
              value="analytics"
              title="Advanced Analytics"
              description="Track user behavior, conversions, and detailed metrics"
              icon={<BarChart className="w-5 h-5" />}
              badge="Popular"
            />
            <CheckboxCard
              value="api"
              title="API Access"
              description="Integrate with your existing tools and workflows"
              icon={<Code className="w-5 h-5" />}
            />
            <CheckboxCard
              value="support"
              title="Priority Support"
              description="Get help faster with dedicated support team"
              icon={<Headphones className="w-5 h-5" />}
            />
          </CheckboxCardGroup>
        </div>

        {/* Checkbox Cards - States */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Card States</h4>
          <div className="space-y-3 max-w-2xl">
            <CheckboxCard
              value="default"
              title="Default State"
              description="Unchecked and ready to select"
              icon={<Package className="w-5 h-5" />}
            />
            <CheckboxCard
              value="selected"
              title="Selected State"
              description="This option is selected"
              icon={<Package className="w-5 h-5" />}
              checked={true}
              onChange={() => {}}
            />
            <CheckboxCard
              value="disabled"
              title="Disabled State"
              description="This option cannot be selected"
              icon={<Package className="w-5 h-5" />}
              disabled={true}
            />
          </div>
        </div>
      </div>

      {/* RADIO CARDS SECTION */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Radio Cards</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Rich card components with integrated radio buttons for single-choice selections like pricing plans and shipping options.
        </p>

        {/* Radio Cards - Pricing Plans */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Pricing Plans</h4>
          <RadioGroup
            name="pricing-plans"
            value={selectedPlan}
            onChange={setSelectedPlan}
          >
            <div className="space-y-3 max-w-2xl">
              <RadioCard
                value="free"
                title="Free"
                description="Perfect for trying out our platform"
                icon={<Zap className="w-5 h-5" />}
                price="$0"
                features={[
                  'Up to 5 projects',
                  '1GB storage',
                  'Community support',
                ]}
              />
              <RadioCard
                value="pro"
                title="Pro"
                description="For professionals and growing teams"
                icon={<Rocket className="w-5 h-5" />}
                badge="Popular"
                price="$29"
                features={[
                  'Unlimited projects',
                  '100GB storage',
                  'Priority support',
                  'Advanced analytics',
                ]}
              />
              <RadioCard
                value="enterprise"
                title="Enterprise"
                description="For large organizations"
                icon={<Building className="w-5 h-5" />}
                price="Custom"
                features={[
                  'Unlimited everything',
                  'Dedicated support',
                  'Custom integrations',
                  'SLA guarantee',
                ]}
              />
            </div>
          </RadioGroup>
        </div>

        {/* Radio Cards - Shipping Options */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Shipping Options</h4>
          <RadioGroup
            name="shipping-options"
            value={selectedShipping}
            onChange={setSelectedShipping}
          >
            <div className="space-y-3 max-w-2xl">
              <RadioCard
                value="standard"
                title="Standard Shipping"
                description="Delivery in 5-7 business days"
                icon={<Package className="w-5 h-5" />}
                price="Free"
              />
              <RadioCard
                value="express"
                title="Express Shipping"
                description="Delivery in 2-3 business days"
                icon={<Truck className="w-5 h-5" />}
                price="$9.99"
              />
              <RadioCard
                value="overnight"
                title="Overnight Shipping"
                description="Next business day delivery"
                icon={<Zap className="w-5 h-5" />}
                badge="Fastest"
                price="$19.99"
              />
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* API Reference */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">API Reference</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`// Checkbox
<Checkbox checked={value} onChange={setValue} />
<Checkbox indeterminate={true} />
<CheckboxWithLabel label="Label" description="Description" />

// Radio (always in RadioGroup)
<RadioGroup name="plan" value={plan} onChange={setPlan}>
  <RadioWithLabel value="free" label="Free Plan" />
  <RadioWithLabel value="pro" label="Pro Plan" />
</RadioGroup>`}</code>
        </pre>
      </div>
    </section>
  );
}
