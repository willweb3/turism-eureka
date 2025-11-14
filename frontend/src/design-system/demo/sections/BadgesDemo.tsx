'use client';

import React, { useState } from 'react';
import { Badge } from '@/design-system/components/badge';
import { Button } from '@/design-system/components/button';
import { Bell, ShoppingCart, Mail, User, MessageCircle, Settings, Check, X } from 'lucide-react';

/**
 * BadgesDemo Section
 *
 * Comprehensive demonstration of Badge components including:
 * - Dot badges (status indicators)
 * - Numeric badges (counters)
 * - Size variants (small, large)
 * - Color variants (6 colors)
 * - Position variants (4 positions)
 * - Interactive examples
 * - Real-world use cases
 * - Accessibility features
 */
export function BadgesDemo() {
  const [notificationCount, setNotificationCount] = useState(3);
  const [cartCount, setCartCount] = useState(5);
  const [messageCount, setMessageCount] = useState(12);
  const [pulseEnabled, setPulseEnabled] = useState(false);

  // Interactive counter demo state
  const [counterValue, setCounterValue] = useState(5);
  const [counterMax, setCounterMax] = useState(99);
  const [showZero, setShowZero] = useState(false);
  const [counterSize, setCounterSize] = useState<'small' | 'large'>('small');
  const [counterColor, setCounterColor] = useState<'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'>('primary');

  return (
    <section id="badges" className="mb-16 scroll-mt-16">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Badges
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Badges are small visual indicators used to display counts, status, or notifications.
          They can be standalone or attached to other components like buttons, icons, or avatars.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">2</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Badge Types</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Dot & Numeric</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Sizes</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Small & Large</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Color Variants</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Semantic colors</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">4</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">Positions</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Corner placement</div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Overview
        </h3>
        <div className="space-y-4 text-gray-600 dark:text-gray-400">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">When to use badges:</h4>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Display notification counts or unread messages</li>
              <li>Show item quantities (e.g., shopping cart items)</li>
              <li>Indicate user status (online, offline, busy)</li>
              <li>Highlight new features or updates</li>
              <li>Display pending tasks or alerts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Badge Types:</h4>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Dot Badge:</strong> Simple circular indicator for binary status (on/off, active/inactive)</li>
              <li><strong>Numeric Badge:</strong> Shows specific count or quantity with automatic overflow handling</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dot Badges */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Dot Badges
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Simple circular indicators for status, presence, or notifications. Perfect for binary states.
        </p>

        {/* Size Variants */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Size Variants</h4>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Badge dot size="small" color="primary" standalone />
              <span className="text-sm text-gray-600 dark:text-gray-400">Small (6x6px)</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge dot size="large" color="primary" standalone />
              <span className="text-sm text-gray-600 dark:text-gray-400">Large (10x10px)</span>
            </div>
          </div>
        </div>

        {/* Color Variants */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Color Variants</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Badge dot color="primary" standalone />
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Primary</div>
                <div className="text-xs text-gray-500">Default state</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Badge dot color="success" standalone />
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Success</div>
                <div className="text-xs text-gray-500">Online, active</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Badge dot color="warning" standalone />
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Warning</div>
                <div className="text-xs text-gray-500">Away, idle</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Badge dot color="error" standalone />
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Error</div>
                <div className="text-xs text-gray-500">Busy, DND</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Badge dot color="info" standalone />
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Info</div>
                <div className="text-xs text-gray-500">Information</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <Badge dot color="neutral" standalone />
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Neutral</div>
                <div className="text-xs text-gray-500">Offline, inactive</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dot Badge Examples */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Use Cases</h4>
          <div className="flex flex-wrap gap-4">
            {/* User status */}
            <Badge dot color="success" position="bottom-right">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                JD
              </div>
            </Badge>
            <Badge dot color="warning" position="bottom-right">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                SM
              </div>
            </Badge>
            <Badge dot color="neutral" position="bottom-right">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-semibold">
                AK
              </div>
            </Badge>
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-6">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`// Dot badge standalone
<Badge dot color="success" standalone />

// Dot badge on avatar (user status)
<Badge dot color="success" position="bottom-right">
  <Avatar src={user.avatar} />
</Badge>`}</code>
          </pre>
        </div>
      </div>

      {/* Numeric Badges */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Numeric Badges
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Badges with counters for notifications, counts, and quantities. Automatically handles overflow.
        </p>

        {/* Size Variants */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Size Variants</h4>
          <div className="space-y-4">
            <div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Small (18px height)</div>
              <div className="flex items-center gap-3">
                <Badge count={1} size="small" standalone />
                <Badge count={5} size="small" standalone />
                <Badge count={99} size="small" standalone />
                <Badge count={150} size="small" max={99} standalone />
              </div>
            </div>
            <div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Large (22px height)</div>
              <div className="flex items-center gap-3">
                <Badge count={1} size="large" standalone />
                <Badge count={5} size="large" standalone />
                <Badge count={99} size="large" standalone />
                <Badge count={150} size="large" max={99} standalone />
              </div>
            </div>
          </div>
        </div>

        {/* Color Variants */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Color Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Badge count={5} color="primary" standalone />
            <Badge count={5} color="success" standalone />
            <Badge count={5} color="warning" standalone />
            <Badge count={5} color="error" standalone />
            <Badge count={5} color="info" standalone />
            <Badge count={5} color="neutral" standalone />
          </div>
        </div>

        {/* Number Handling */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Number Handling</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Badge count={0} showZero standalone />
              <span className="text-sm text-gray-600 dark:text-gray-400">Zero (with showZero prop)</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge count={9} standalone />
              <span className="text-sm text-gray-600 dark:text-gray-400">Single digit (1-9)</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge count={42} standalone />
              <span className="text-sm text-gray-600 dark:text-gray-400">Double digit (10-99)</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge count={150} max={99} standalone />
              <span className="text-sm text-gray-600 dark:text-gray-400">Overflow (100+) shows "99+"</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge count={5000} max={999} standalone />
              <span className="text-sm text-gray-600 dark:text-gray-400">Custom max (999+)</span>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Interactive Badge Builder</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* Counter control */}
              <div>
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                  Count: {counterValue}
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCounterValue(Math.max(0, counterValue - 1))}
                    className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="999"
                    value={counterValue}
                    onChange={(e) => setCounterValue(Number(e.target.value))}
                    className="flex-1"
                  />
                  <button
                    onClick={() => setCounterValue(Math.min(999, counterValue + 1))}
                    className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Max value */}
              <div>
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                  Max: {counterMax}
                </label>
                <input
                  type="range"
                  min="10"
                  max="999"
                  value={counterMax}
                  onChange={(e) => setCounterMax(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Size selector */}
              <div>
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">Size</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCounterSize('small')}
                    className={`px-3 py-1 rounded text-sm ${
                      counterSize === 'small'
                        ? 'bg-[#3CA997] text-white'
                        : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    Small
                  </button>
                  <button
                    onClick={() => setCounterSize('large')}
                    className={`px-3 py-1 rounded text-sm ${
                      counterSize === 'large'
                        ? 'bg-[#3CA997] text-white'
                        : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    Large
                  </button>
                </div>
              </div>

              {/* Color selector */}
              <div>
                <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">Color</label>
                <div className="flex flex-wrap gap-2">
                  {(['primary', 'success', 'warning', 'error', 'info', 'neutral'] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => setCounterColor(c)}
                      className={`px-2 py-1 rounded text-xs capitalize ${
                        counterColor === c
                          ? 'bg-[#3CA997] text-white'
                          : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Show zero toggle */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="showZero"
                  checked={showZero}
                  onChange={(e) => setShowZero(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="showZero" className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Show zero
                </label>
              </div>
            </div>

            {/* Preview */}
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <Badge
                count={counterValue}
                max={counterMax}
                showZero={showZero}
                size={counterSize}
                color={counterColor}
                standalone
              />
              <pre className="mt-4 text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto max-w-full">
                <code>{`<Badge
  count={${counterValue}}
  max={${counterMax}}
  ${showZero ? 'showZero' : ''}
  size="${counterSize}"
  color="${counterColor}"
/>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-6">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`// Numeric badge standalone
<Badge count={5} standalone />

// With overflow handling
<Badge count={150} max={99} /> // Shows "99+"

// With custom color
<Badge count={3} color="error" standalone />`}</code>
          </pre>
        </div>
      </div>

      {/* Badge Positions */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Badge Positions
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Badges can be positioned at any corner of their parent element or used standalone.
        </p>

        {/* Position Examples */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div className="flex flex-col items-center gap-3">
            <Badge count={5} position="top-right">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                <Bell className="w-8 h-8 text-white" />
              </div>
            </Badge>
            <span className="text-sm text-gray-600 dark:text-gray-400">Top Right</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Badge count={5} position="top-left">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </Badge>
            <span className="text-sm text-gray-600 dark:text-gray-400">Top Left</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Badge count={5} position="bottom-right">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </Badge>
            <span className="text-sm text-gray-600 dark:text-gray-400">Bottom Right</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Badge count={5} position="bottom-left">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
            </Badge>
            <span className="text-sm text-gray-600 dark:text-gray-400">Bottom Left</span>
          </div>
        </div>

        {/* Code Example */}
        <div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`// Badge attached to element
<Badge count={5} position="top-right">
  <IconButton>
    <Bell />
  </IconButton>
</Badge>

// Available positions:
// "top-right" (default)
// "top-left"
// "bottom-right"
// "bottom-left"`}</code>
          </pre>
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Interactive Examples
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Real-world examples with interactive counters you can increment and decrement.
        </p>

        <div className="space-y-6">
          {/* Notifications */}
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Notification Center</h4>
            <div className="flex items-center gap-4">
              <Badge count={notificationCount} position="top-right" color="error" pulse={pulseEnabled}>
                <button className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Bell className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
              </Badge>
              <div className="flex gap-2">
                <button
                  onClick={() => setNotificationCount(Math.max(0, notificationCount - 1))}
                  className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  -1
                </button>
                <button
                  onClick={() => setNotificationCount(notificationCount + 1)}
                  className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  +1
                </button>
                <button
                  onClick={() => setNotificationCount(0)}
                  className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Clear
                </button>
                <button
                  onClick={() => setPulseEnabled(!pulseEnabled)}
                  className={`px-3 py-1 rounded text-sm ${
                    pulseEnabled
                      ? 'bg-[#3CA997] text-white'
                      : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {pulseEnabled ? 'Pulse ON' : 'Pulse OFF'}
                </button>
              </div>
            </div>
          </div>

          {/* Shopping Cart */}
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Shopping Cart</h4>
            <div className="flex items-center gap-4">
              <Badge count={cartCount} position="top-right" color="primary">
                <button className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
              </Badge>
              <div className="flex gap-2">
                <button
                  onClick={() => setCartCount(Math.max(0, cartCount - 1))}
                  className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Remove Item
                </button>
                <button
                  onClick={() => setCartCount(cartCount + 1)}
                  className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Add Item
                </button>
                <button
                  onClick={() => setCartCount(0)}
                  className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Empty Cart
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Unread Messages</h4>
            <div className="flex items-center gap-4">
              <Badge count={messageCount} position="top-right" color="info" size="large">
                <button className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
              </Badge>
              <div className="flex gap-2">
                <button
                  onClick={() => setMessageCount(Math.max(0, messageCount - 1))}
                  className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Mark as Read
                </button>
                <button
                  onClick={() => setMessageCount(messageCount + 5)}
                  className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  +5 New
                </button>
                <button
                  onClick={() => setMessageCount(0)}
                  className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Mark All Read
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-World Examples */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Real-World Use Cases
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* E-commerce */}
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">E-commerce</h4>
            <div className="flex flex-wrap gap-3">
              <Badge count={3} position="top-right">
                <Button variant="secondary" size="small" leftIcon={<ShoppingCart size={16} />}>
                  Cart
                </Button>
              </Badge>
              <Badge count={12} position="top-right" color="error">
                <Button variant="secondary" size="small">
                  Wishlist
                </Button>
              </Badge>
              <Badge dot color="error" position="top-right">
                <Button variant="secondary" size="small">
                  New Arrivals
                </Button>
              </Badge>
            </div>
          </div>

          {/* Social Media */}
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Social Media</h4>
            <div className="flex flex-wrap gap-3">
              <Badge count={8} position="top-right" color="error">
                <Button variant="secondary" size="small" leftIcon={<Bell size={16} />}>
                  Notifications
                </Button>
              </Badge>
              <Badge count={5} position="top-right" color="info">
                <Button variant="secondary" size="small" leftIcon={<MessageCircle size={16} />}>
                  Messages
                </Button>
              </Badge>
              <Badge count={2} position="top-right" color="success">
                <Button variant="secondary" size="small" leftIcon={<User size={16} />}>
                  Requests
                </Button>
              </Badge>
            </div>
          </div>

          {/* Dashboard */}
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Dashboard</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-900 rounded">
                <span className="text-sm text-gray-700 dark:text-gray-300">Pending Tasks</span>
                <Badge count={7} size="small" color="warning" standalone />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-900 rounded">
                <span className="text-sm text-gray-700 dark:text-gray-300">Alerts</span>
                <Badge count={3} size="small" color="error" standalone />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-900 rounded">
                <span className="text-sm text-gray-700 dark:text-gray-300">Completed</span>
                <Badge count={42} size="small" color="success" standalone />
              </div>
            </div>
          </div>

          {/* User Status */}
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">User Presence</h4>
            <div className="flex gap-4">
              <div className="text-center">
                <Badge dot color="success" position="bottom-right" size="large">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                    JS
                  </div>
                </Badge>
                <div className="text-xs text-gray-500 mt-1">Online</div>
              </div>
              <div className="text-center">
                <Badge dot color="warning" position="bottom-right" size="large">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-semibold">
                    MK
                  </div>
                </Badge>
                <div className="text-xs text-gray-500 mt-1">Away</div>
              </div>
              <div className="text-center">
                <Badge dot color="error" position="bottom-right" size="large">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-semibold">
                    AL
                  </div>
                </Badge>
                <div className="text-xs text-gray-500 mt-1">Busy</div>
              </div>
              <div className="text-center">
                <Badge dot color="neutral" position="bottom-right" size="large">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-semibold">
                    RJ
                  </div>
                </Badge>
                <div className="text-xs text-gray-500 mt-1">Offline</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Best Practices
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Do's */}
          <div>
            <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
              <Check size={16} />
              Do's
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Use badges for counts and status indicators</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Keep numbers concise with overflow (99+)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Use appropriate semantic colors</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Provide ARIA labels for accessibility</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Animate new notifications with pulse</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>Position badges consistently across app</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div>
            <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
              <X size={16} />
              Don'ts
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex gap-2">
                <span className="text-red-600 dark:text-red-400">✗</span>
                <span>Don't overuse badges on every element</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 dark:text-red-400">✗</span>
                <span>Don't show very large numbers (use overflow)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 dark:text-red-400">✗</span>
                <span>Don't use badges for decorative purposes only</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 dark:text-red-400">✗</span>
                <span>Don't rely only on color to convey meaning</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 dark:text-red-400">✗</span>
                <span>Don't make badges too small to read</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 dark:text-red-400">✗</span>
                <span>Don't forget screen reader announcements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          API Reference
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Prop</th>
                <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Type</th>
                <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Default</th>
                <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-3 font-mono text-xs">variant</td>
                <td className="py-2 px-3 font-mono text-xs">"dot" | "numeric"</td>
                <td className="py-2 px-3 font-mono text-xs">"numeric"</td>
                <td className="py-2 px-3">Badge type - dot or numeric</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-3 font-mono text-xs">size</td>
                <td className="py-2 px-3 font-mono text-xs">"small" | "large"</td>
                <td className="py-2 px-3 font-mono text-xs">"small"</td>
                <td className="py-2 px-3">Badge size</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-3 font-mono text-xs">color</td>
                <td className="py-2 px-3 font-mono text-xs">"primary" | "success" | "warning" | "error" | "info" | "neutral"</td>
                <td className="py-2 px-3 font-mono text-xs">"primary"</td>
                <td className="py-2 px-3">Badge color variant</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-3 font-mono text-xs">count</td>
                <td className="py-2 px-3 font-mono text-xs">number</td>
                <td className="py-2 px-3 font-mono text-xs">-</td>
                <td className="py-2 px-3">Number to display (numeric badges)</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-3 font-mono text-xs">max</td>
                <td className="py-2 px-3 font-mono text-xs">number</td>
                <td className="py-2 px-3 font-mono text-xs">99</td>
                <td className="py-2 px-3">Maximum number before showing "+"</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-3 font-mono text-xs">showZero</td>
                <td className="py-2 px-3 font-mono text-xs">boolean</td>
                <td className="py-2 px-3 font-mono text-xs">false</td>
                <td className="py-2 px-3">Show badge when count is 0</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-3 font-mono text-xs">position</td>
                <td className="py-2 px-3 font-mono text-xs">"top-right" | "top-left" | "bottom-right" | "bottom-left"</td>
                <td className="py-2 px-3 font-mono text-xs">"top-right"</td>
                <td className="py-2 px-3">Badge position when attached</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-3 font-mono text-xs">dot</td>
                <td className="py-2 px-3 font-mono text-xs">boolean</td>
                <td className="py-2 px-3 font-mono text-xs">false</td>
                <td className="py-2 px-3">Shorthand for variant="dot"</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-3 font-mono text-xs">standalone</td>
                <td className="py-2 px-3 font-mono text-xs">boolean</td>
                <td className="py-2 px-3 font-mono text-xs">false</td>
                <td className="py-2 px-3">Render badge without attaching to element</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-3 font-mono text-xs">pulse</td>
                <td className="py-2 px-3 font-mono text-xs">boolean</td>
                <td className="py-2 px-3 font-mono text-xs">false</td>
                <td className="py-2 px-3">Enable pulse animation</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-3 font-mono text-xs">children</td>
                <td className="py-2 px-3 font-mono text-xs">ReactNode</td>
                <td className="py-2 px-3 font-mono text-xs">-</td>
                <td className="py-2 px-3">Element to attach badge to</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2 px-3 font-mono text-xs">badgeClassName</td>
                <td className="py-2 px-3 font-mono text-xs">string</td>
                <td className="py-2 px-3 font-mono text-xs">-</td>
                <td className="py-2 px-3">Additional classes for badge element</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-mono text-xs">ariaLabel</td>
                <td className="py-2 px-3 font-mono text-xs">string</td>
                <td className="py-2 px-3 font-mono text-xs">-</td>
                <td className="py-2 px-3">Custom ARIA label for accessibility</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
