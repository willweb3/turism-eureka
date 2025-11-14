'use client';

import React, { useState } from 'react';
import { Toggle, ToggleWithLabel, useToggle } from '@/components/Toggle';

/**
 * ToggleDemo Section
 *
 * Comprehensive demonstration of Toggle (Switch) components including:
 * - Basic toggles (controlled & uncontrolled)
 * - Size variants (small, medium)
 * - State variants (default, disabled, loading)
 * - Toggle with label and description
 * - Label placements
 * - Form integration
 * - Real-world use cases
 * - useToggle hook
 */
export function ToggleDemo() {
  // State for various demos
  const [basicToggle, setBasicToggle] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [saving, setSaving] = useState(false);

  // Settings panel state
  const [settings, setSettings] = useState({
    notifications: true,
    emails: false,
    updates: true,
    marketing: false,
  });

  // Privacy settings
  const [privacySettings, setPrivacySettings] = useState({
    publicProfile: false,
    showEmail: false,
    allowMessages: true,
  });

  // Form state
  const [formData, setFormData] = useState({
    terms: false,
    newsletter: false,
  });
  const [formErrors, setFormErrors] = useState<{ terms?: string }>({});

  // Feature flags state
  const [features, setFeatures] = useState([
    { id: 1, name: 'New Dashboard', enabled: true },
    { id: 2, name: 'Beta Features', enabled: false },
    { id: 3, name: 'Analytics', enabled: true },
  ]);

  // useToggle hook demo
  const autoSave = useToggle(false);

  // Async toggle handler
  const handleAsyncToggle = async (checked: boolean) => {
    setSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setDarkMode(checked);
    setSaving(false);
  };

  // Form submit handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      setFormErrors({ terms: 'You must accept the terms and conditions' });
      return;
    }
    setFormErrors({});
    alert('Form submitted successfully!');
  };

  // Feature toggle handler
  const handleFeatureToggle = (id: number, checked: boolean) => {
    setFeatures(
      features.map((f) => (f.id === id ? { ...f, enabled: checked } : f))
    );
  };

  return (
    <section id="toggles" className="mb-16 scroll-mt-16">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Toggle / Switch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Toggle switches are used for binary on/off choices with immediate
          effect. They're perfect for settings, preferences, and feature flags.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
            2
          </div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Sizes
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Small & Medium
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            4
          </div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            States
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Default, Hover, Focus, Disabled
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            4
          </div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Label Positions
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Left, Right, Top, Bottom
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            100%
          </div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Accessible
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            WCAG Compliant
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          When to Use Toggle vs Checkbox
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
              <span>✓</span> Use Toggle when:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>Change has immediate effect</li>
              <li>Turning a feature ON/OFF</li>
              <li>Binary yes/no question</li>
              <li>Controlling a mode or setting</li>
              <li>Activating or deactivating something</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
              <span>✓</span> Use Checkbox when:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>Part of a form that will be submitted</li>
              <li>Multiple independent choices</li>
              <li>Selecting items from a list</li>
              <li>Requires explicit submit action</li>
              <li>Part of a group of options</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Basic Toggles */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Basic Toggles
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
              Uncontrolled (default state)
            </h4>
            <div className="flex items-center gap-4">
              <Toggle defaultChecked={false} />
              <Toggle defaultChecked={true} />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
              Controlled
            </h4>
            <div className="flex items-center gap-4">
              <Toggle checked={basicToggle} onChange={setBasicToggle} />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Status: {basicToggle ? 'ON' : 'OFF'}
              </span>
              <button
                onClick={() => setBasicToggle(!basicToggle)}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition"
              >
                Toggle from outside
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Sizes
        </h3>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Toggle size="sm" defaultChecked={false} />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Small (36x20px)
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Toggle size="md" defaultChecked={true} />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Medium (44x24px)
            </span>
          </div>
        </div>
      </div>

      {/* States */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          States
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Default OFF
            </h4>
            <Toggle defaultChecked={false} />
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Default ON
            </h4>
            <Toggle defaultChecked={true} />
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Disabled OFF
            </h4>
            <Toggle disabled defaultChecked={false} />
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Disabled ON
            </h4>
            <Toggle disabled defaultChecked={true} />
          </div>
        </div>
      </div>

      {/* Loading State */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Loading State (Async Operation)
        </h3>
        <div className="space-y-4">
          <ToggleWithLabel
            label="Dark mode (with 1.5s delay)"
            description="Simulates an async API call"
            checked={darkMode}
            loading={saving}
            onChange={handleAsyncToggle}
          />
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Try toggling to see the loading spinner
          </p>
        </div>
      </div>

      {/* With Label */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Toggle with Label
        </h3>
        <div className="space-y-6 max-w-xl">
          <ToggleWithLabel
            label="Enable notifications"
            checked={notifications}
            onChange={setNotifications}
          />
          <ToggleWithLabel
            label="Email alerts"
            description="Receive email notifications for important updates"
            checked={emailAlerts}
            onChange={setEmailAlerts}
          />
          <ToggleWithLabel
            label="Newsletter subscription"
            description="Get weekly updates about new features and improvements"
            hint="You can unsubscribe at any time"
            defaultChecked={false}
          />
        </div>
      </div>

      {/* Label Placements */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Label Placements
        </h3>
        <div className="space-y-8 max-w-xl">
          <ToggleWithLabel
            label="Label on right (default)"
            labelPlacement="right"
            defaultChecked={true}
          />
          <ToggleWithLabel
            label="Label on left"
            labelPlacement="left"
            defaultChecked={true}
          />
          <ToggleWithLabel
            label="Label on top"
            labelPlacement="top"
            defaultChecked={true}
          />
          <ToggleWithLabel
            label="Label on bottom"
            labelPlacement="bottom"
            defaultChecked={true}
          />
        </div>
      </div>

      {/* Settings Panel Example */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Use Case: Settings Panel
        </h3>
        <div className="max-w-md space-y-1 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900">
          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Notification Settings
          </h4>

          <ToggleWithLabel
            label="Push notifications"
            description="Receive push notifications on your device"
            checked={settings.notifications}
            onChange={(checked) =>
              setSettings({ ...settings, notifications: checked })
            }
          />

          <ToggleWithLabel
            label="Email notifications"
            description="Get email updates about your activity"
            checked={settings.emails}
            onChange={(checked) => setSettings({ ...settings, emails: checked })}
          />

          <ToggleWithLabel
            label="Product updates"
            description="News about new features and improvements"
            checked={settings.updates}
            onChange={(checked) =>
              setSettings({ ...settings, updates: checked })
            }
          />

          <ToggleWithLabel
            label="Marketing emails"
            description="Special offers and promotions"
            checked={settings.marketing}
            onChange={(checked) =>
              setSettings({ ...settings, marketing: checked })
            }
          />
        </div>
      </div>

      {/* Privacy Settings Example */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Use Case: Privacy Controls
        </h3>
        <div className="max-w-md space-y-1 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900">
          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Privacy Settings
          </h4>

          <ToggleWithLabel
            label="Public profile"
            description="Allow anyone to view your profile"
            checked={privacySettings.publicProfile}
            onChange={(checked) =>
              setPrivacySettings({ ...privacySettings, publicProfile: checked })
            }
          />

          <ToggleWithLabel
            label="Show email address"
            description="Display your email on your public profile"
            checked={privacySettings.showEmail}
            onChange={(checked) =>
              setPrivacySettings({ ...privacySettings, showEmail: checked })
            }
          />

          <ToggleWithLabel
            label="Allow direct messages"
            description="Let other users send you messages"
            checked={privacySettings.allowMessages}
            onChange={(checked) =>
              setPrivacySettings({ ...privacySettings, allowMessages: checked })
            }
          />
        </div>
      </div>

      {/* Form Integration */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Use Case: Form Integration
        </h3>
        <form
          onSubmit={handleFormSubmit}
          className="max-w-md space-y-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Sign Up
          </h4>

          <ToggleWithLabel
            label="Accept terms and conditions"
            required
            error={formErrors.terms}
            checked={formData.terms}
            onChange={(checked) => {
              setFormData({ ...formData, terms: checked });
              if (checked) setFormErrors({});
            }}
          />

          <ToggleWithLabel
            label="Subscribe to newsletter"
            hint="Receive updates about new features (optional)"
            checked={formData.newsletter}
            onChange={(checked) =>
              setFormData({ ...formData, newsletter: checked })
            }
          />

          <button
            type="submit"
            className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition"
          >
            Create Account
          </button>
        </form>
      </div>

      {/* Table with Toggles */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Use Case: Feature Flags (Admin Table)
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Toggle
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {features.map((feature) => (
                <tr key={feature.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {feature.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        feature.enabled
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400'
                      }`}
                    >
                      {feature.enabled ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Toggle
                      checked={feature.enabled}
                      onChange={(checked) =>
                        handleFeatureToggle(feature.id, checked)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* useToggle Hook Example */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          useToggle Hook
        </h3>
        <div className="space-y-4 max-w-md">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            The <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">useToggle</code> hook provides convenient methods for managing toggle state.
          </p>

          <div className="flex items-center gap-3">
            <Toggle checked={autoSave.checked} onChange={autoSave.setChecked} />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Auto-save: {autoSave.checked ? 'ON' : 'OFF'}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={autoSave.toggle}
              className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition"
            >
              Toggle
            </button>
            <button
              onClick={autoSave.setOn}
              className="px-3 py-1.5 text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50 rounded transition"
            >
              Turn ON
            </button>
            <button
              onClick={autoSave.setOff}
              className="px-3 py-1.5 text-sm bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 rounded transition"
            >
              Turn OFF
            </button>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          API Reference
        </h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`// Basic toggle (uncontrolled)
<Toggle defaultChecked={false} onChange={(checked) => console.log(checked)} />

// Controlled toggle
const [enabled, setEnabled] = useState(false);
<Toggle checked={enabled} onChange={setEnabled} />

// With label and description
<ToggleWithLabel
  label="Enable feature"
  description="This will enable the new feature"
  checked={enabled}
  onChange={setEnabled}
/>

// With loading state
<Toggle checked={saving} loading={saving} onChange={handleSave} />

// Different sizes
<Toggle size="sm" />
<Toggle size="md" />

// Disabled
<Toggle disabled checked={true} />

// useToggle hook
const darkMode = useToggle(false);
<Toggle checked={darkMode.checked} onChange={darkMode.setChecked} />
<button onClick={darkMode.toggle}>Toggle</button>`}</code>
        </pre>
      </div>
    </section>
  );
}
