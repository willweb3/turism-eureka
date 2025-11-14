'use client';

import React, { useState } from 'react';
import { Slider } from '@/components/Slider';

export default function SliderDemo() {
  // Playground states
  const [type, setType] = useState<'single' | 'dual'>('single');
  const [singleValue, setSingleValue] = useState(50);
  const [dualValues, setDualValues] = useState<[number, number]>([25, 75]);
  const [labelPosition, setLabelPosition] = useState<'none' | 'bottom' | 'top-floating' | 'bottom-floating'>('bottom');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-6xl space-y-12">
      {/* Hero */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Sliders</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Range inputs with single or dual thumbs for selecting values or ranges.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">2</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Types</div>
          <div className="text-xs text-gray-500 mt-1">Single & Dual</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">4</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Label Positions</div>
          <div className="text-xs text-gray-500 mt-1">Fixed & Floating</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">WCAG</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Accessible</div>
          <div className="text-xs text-gray-500 mt-1">Keyboard support</div>
        </div>
      </div>

      {/* Interactive Playground */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Interactive Playground</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Type</label>
              <select value={type} onChange={(e) => setType(e.target.value as any)} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700">
                <option value="single">Single</option>
                <option value="dual">Dual/Range</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Label Position</label>
              <select value={labelPosition} onChange={(e) => setLabelPosition(e.target.value as any)} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700">
                <option value="none">None</option>
                <option value="bottom">Bottom (Fixed)</option>
                <option value="top-floating">Top (Floating)</option>
                <option value="bottom-floating">Bottom (Floating)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Min: {min}</label>
              <input type="number" value={min} onChange={(e) => setMin(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Max: {max}</label>
              <input type="number" value={max} onChange={(e) => setMax(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Step: {step}</label>
              <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700" />
            </div>
          </div>

          <div className="flex justify-center py-8">
            {type === 'single' ? (
              <Slider value={singleValue} onChange={(val) => setSingleValue(val as number)} labelPosition={labelPosition} min={min} max={max} step={step} />
            ) : (
              <Slider type="dual" values={dualValues} onChange={(vals) => setDualValues(vals as [number, number])} labelPosition={labelPosition} min={min} max={max} step={step} />
            )}
          </div>
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            {type === 'single' ? `Value: ${singleValue}` : `Values: ${dualValues[0]} - ${dualValues[1]}`}
          </div>
        </div>
      </section>

      {/* Single Slider */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Single Slider</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 space-y-8">
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">No Label</h3>
            <Slider value={50} labelPosition="none" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Bottom Label (Fixed)</h3>
            <Slider value={50} labelPosition="bottom" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Top Floating (Drag to see)</h3>
            <Slider value={50} labelPosition="top-floating" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Bottom Floating (Drag to see)</h3>
            <Slider value={50} labelPosition="bottom-floating" />
          </div>
        </div>
      </section>

      {/* Dual Slider */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Dual/Range Slider</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 space-y-8">
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">0-25%</h3>
            <Slider type="dual" values={[0, 25]} labelPosition="bottom" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">25-75%</h3>
            <Slider type="dual" values={[25, 75]} labelPosition="bottom" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">50-100%</h3>
            <Slider type="dual" values={[50, 100]} labelPosition="bottom" />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Price Range</h3>
            <Slider type="dual" values={[100, 500]} min={0} max={1000} step={10} labelPosition="bottom" formatLabel={(val) => `$${val}`} />
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Volume Control</h3>
            <Slider value={75} labelPosition="bottom" formatLabel={(val) => `${val}%`} />
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Code Examples</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Single Slider</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">{`<Slider value={50} onChange={setValue} />`}</pre>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Dual Slider with Labels</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">{`<Slider
  type="dual"
  values={[25, 75]}
  labelPosition="bottom"
  onChange={setValues}
/>`}</pre>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Price Range Filter</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">{`<Slider
  type="dual"
  values={[100, 500]}
  min={0}
  max={1000}
  step={10}
  formatLabel={(val) => \`$\${val}\`}
  onChange={setPriceRange}
/>`}</pre>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Accessibility</h2>
        <div className="prose dark:prose-invert max-w-none">
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li><strong>Keyboard Navigation:</strong> Arrow keys (←→), Home/End, PageUp/PageDown</li>
            <li><strong>ARIA:</strong> role="slider", aria-valuenow, aria-valuemin/max</li>
            <li><strong>Focus:</strong> Clear visual indicators with ring</li>
            <li><strong>Touch:</strong> 44x44px minimum touch targets</li>
          </ul>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">Do's</h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>✓ Use for continuous value ranges</li>
              <li>✓ Provide clear labels when precision matters</li>
              <li>✓ Use appropriate step values</li>
              <li>✓ Test keyboard navigation</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">Don'ts</h3>
            <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
              <li>✗ Don't use for exact values (use input)</li>
              <li>✗ Avoid very large ranges without steps</li>
              <li>✗ Don't make thumbs too small</li>
              <li>✗ Avoid missing keyboard support</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
