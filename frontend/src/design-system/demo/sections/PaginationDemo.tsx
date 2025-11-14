'use client';

import React, { useState } from 'react';
import { Pagination, CompactPagination } from '@/components/Pagination';

export default function PaginationDemo() {
  // Playground states
  const [playgroundPage, setPlaygroundPage] = useState(5);
  const [totalPages, setTotalPages] = useState(50);
  const [showPrevNext, setShowPrevNext] = useState(true);
  const [showFirstLast, setShowFirstLast] = useState(false);
  const [siblingCount, setSiblingCount] = useState(1);
  const [boundaryCount, setBoundaryCount] = useState(1);
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [showPageSize, setShowPageSize] = useState(false);
  const [pageSize, setPageSize] = useState(25);

  // Different page scenarios for ellipsis demo
  const [ellipsisPage1, setEllipsisPage1] = useState(1);
  const [ellipsisPage5, setEllipsisPage5] = useState(5);
  const [ellipsisPage25, setEllipsisPage25] = useState(25);
  const [ellipsisPage48, setEllipsisPage48] = useState(48);
  const [ellipsisPage50, setEllipsisPage50] = useState(50);

  // Compact pagination
  const [compactPage, setCompactPage] = useState(3);

  return (
    <div className="max-w-6xl space-y-12">
      {/* Hero */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Pagination</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Navigate through pages with intelligent ellipsis placement and full accessibility.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">4</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Variants</div>
          <div className="text-xs text-gray-500 mt-1">Simple to Advanced</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Smart</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Ellipsis Logic</div>
          <div className="text-xs text-gray-500 mt-1">Intelligent placement</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">WCAG</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Accessible</div>
          <div className="text-xs text-gray-500 mt-1">Full keyboard support</div>
        </div>
      </div>

      {/* Interactive Playground */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Interactive Playground</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Current Page: {playgroundPage}
              </label>
              <input
                type="range"
                min="1"
                max={totalPages}
                value={playgroundPage}
                onChange={(e) => setPlaygroundPage(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Total Pages: {totalPages}
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={totalPages}
                onChange={(e) => setTotalPages(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value as 'sm' | 'md' | 'lg')}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Sibling Count: {siblingCount}
              </label>
              <input
                type="range"
                min="0"
                max="3"
                value={siblingCount}
                onChange={(e) => setSiblingCount(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Boundary Count: {boundaryCount}
              </label>
              <input
                type="range"
                min="0"
                max="3"
                value={boundaryCount}
                onChange={(e) => setBoundaryCount(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showPrevNext}
                  onChange={(e) => setShowPrevNext(e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Show Prev/Next</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showFirstLast}
                  onChange={(e) => setShowFirstLast(e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Show First/Last</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showPageSize}
                  onChange={(e) => setShowPageSize(e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Show Page Size</span>
              </label>
            </div>
          </div>

          <div className="flex justify-center py-8">
            <Pagination
              currentPage={playgroundPage}
              totalPages={totalPages}
              onPageChange={setPlaygroundPage}
              showPrevNext={showPrevNext}
              showFirstLast={showFirstLast}
              siblingCount={siblingCount}
              boundaryCount={boundaryCount}
              size={size}
              showPageSize={showPageSize}
              pageSize={pageSize}
              onPageSizeChange={setPageSize}
            />
          </div>
        </div>
      </section>

      {/* Simple Pagination */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Simple Pagination</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Basic (5 pages)</h3>
            <div className="flex justify-center">
              <Pagination currentPage={3} totalPages={5} onPageChange={() => {}} showPrevNext={false} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">With 9 pages</h3>
            <div className="flex justify-center">
              <Pagination currentPage={5} totalPages={9} onPageChange={() => {}} showPrevNext={false} />
            </div>
          </div>
        </div>
      </section>

      {/* With Navigation */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">With Navigation</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Prev/Next Arrows</h3>
            <div className="flex justify-center">
              <Pagination currentPage={3} totalPages={9} onPageChange={() => {}} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">With First/Last</h3>
            <div className="flex justify-center">
              <Pagination currentPage={5} totalPages={15} onPageChange={() => {}} showFirstLast />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Disabled at First Page</h3>
            <div className="flex justify-center">
              <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Disabled at Last Page</h3>
            <div className="flex justify-center">
              <Pagination currentPage={10} totalPages={10} onPageChange={() => {}} />
            </div>
          </div>
        </div>
      </section>

      {/* Ellipsis Logic Demonstration */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Ellipsis Logic (50 pages)</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 space-y-8">
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Page 1 of 50</h3>
            <div className="flex justify-center">
              <Pagination
                currentPage={ellipsisPage1}
                totalPages={50}
                onPageChange={setEllipsisPage1}
                siblingCount={1}
                boundaryCount={1}
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Page 5 of 50</h3>
            <div className="flex justify-center">
              <Pagination
                currentPage={ellipsisPage5}
                totalPages={50}
                onPageChange={setEllipsisPage5}
                siblingCount={1}
                boundaryCount={1}
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Page 25 of 50</h3>
            <div className="flex justify-center">
              <Pagination
                currentPage={ellipsisPage25}
                totalPages={50}
                onPageChange={setEllipsisPage25}
                siblingCount={1}
                boundaryCount={1}
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Page 48 of 50</h3>
            <div className="flex justify-center">
              <Pagination
                currentPage={ellipsisPage48}
                totalPages={50}
                onPageChange={setEllipsisPage48}
                siblingCount={1}
                boundaryCount={1}
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Page 50 of 50</h3>
            <div className="flex justify-center">
              <Pagination
                currentPage={ellipsisPage50}
                totalPages={50}
                onPageChange={setEllipsisPage50}
                siblingCount={1}
                boundaryCount={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Parameter Effects */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Parameter Effects</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">siblingCount = 0</h3>
            <div className="flex justify-center">
              <Pagination currentPage={25} totalPages={50} onPageChange={() => {}} siblingCount={0} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">siblingCount = 1 (default)</h3>
            <div className="flex justify-center">
              <Pagination currentPage={25} totalPages={50} onPageChange={() => {}} siblingCount={1} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">siblingCount = 2</h3>
            <div className="flex justify-center">
              <Pagination currentPage={25} totalPages={50} onPageChange={() => {}} siblingCount={2} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">boundaryCount = 2</h3>
            <div className="flex justify-center">
              <Pagination currentPage={25} totalPages={50} onPageChange={() => {}} boundaryCount={2} />
            </div>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Sizes</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 space-y-8">
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Small (32x32px)</h3>
            <div className="flex justify-center">
              <Pagination currentPage={3} totalPages={9} onPageChange={() => {}} size="sm" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Medium (44x44px) - Default</h3>
            <div className="flex justify-center">
              <Pagination currentPage={3} totalPages={9} onPageChange={() => {}} size="md" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Large (56x56px)</h3>
            <div className="flex justify-center">
              <Pagination currentPage={3} totalPages={9} onPageChange={() => {}} size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Compact Variant */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Compact Variant</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Mobile-Friendly</h3>
            <div className="flex justify-center">
              <CompactPagination currentPage={compactPage} totalPages={10} onPageChange={setCompactPage} />
            </div>
            <p className="text-xs text-center text-gray-500 mt-2">Ideal for mobile and constrained spaces</p>
          </div>
        </div>
      </section>

      {/* With Page Size Selector */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">With Page Size Selector</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex justify-center">
            <Pagination
              currentPage={1}
              totalPages={20}
              onPageChange={() => {}}
              showPageSize
              pageSize={25}
              pageSizeOptions={[10, 25, 50, 100]}
              onPageSizeChange={() => {}}
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table Pagination</h3>
            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Showing 26-50 of 250 results
            </div>
            <Pagination
              currentPage={2}
              totalPages={10}
              onPageChange={() => {}}
              showPageSize
              pageSize={25}
              onPageSizeChange={() => {}}
            />
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Product Grid</h3>
            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Page 5 of 50 products
            </div>
            <Pagination currentPage={5} totalPages={50} onPageChange={() => {}} />
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Code Examples</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Basic Pagination</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">{`<Pagination
  currentPage={1}
  totalPages={9}
  onPageChange={setPage}
/>`}</pre>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">With Ellipsis</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">{`<Pagination
  currentPage={25}
  totalPages={50}
  onPageChange={setPage}
  siblingCount={1}
  boundaryCount={1}
/>`}</pre>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">With First/Last</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">{`<Pagination
  currentPage={5}
  totalPages={20}
  onPageChange={setPage}
  showFirstLast
  firstLabel="First"
  lastLabel="Last"
/>`}</pre>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Compact Variant</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">{`<CompactPagination
  currentPage={3}
  totalPages={10}
  onPageChange={setPage}
/>`}</pre>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">With Page Size</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">{`<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={setPage}
  showPageSize
  pageSize={25}
  pageSizeOptions={[10, 25, 50, 100]}
  onPageSizeChange={setPageSize}
/>`}</pre>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Accessibility</h2>
        <div className="prose dark:prose-invert max-w-none">
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li><strong>Keyboard Navigation:</strong> Tab through buttons, Enter/Space to activate</li>
            <li><strong>ARIA:</strong> role="navigation", aria-label, aria-current="page"</li>
            <li><strong>Screen Readers:</strong> Clear labels for all navigation buttons</li>
            <li><strong>Focus Management:</strong> Visible focus indicators with ring</li>
            <li><strong>Disabled States:</strong> aria-disabled on prev/next when appropriate</li>
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
              <li>✓ Use ellipsis for many pages (&gt;15)</li>
              <li>✓ Show current page clearly</li>
              <li>✓ Scroll to top on page change</li>
              <li>✓ Provide keyboard navigation</li>
              <li>✓ Use compact variant on mobile</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">Don'ts</h3>
            <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
              <li>✗ Don't show too many pages (&gt;10)</li>
              <li>✗ Don't use for very few items (&lt;20)</li>
              <li>✗ Don't forget loading states</li>
              <li>✗ Don't lose scroll position on back</li>
              <li>✗ Avoid pagination without total count</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
