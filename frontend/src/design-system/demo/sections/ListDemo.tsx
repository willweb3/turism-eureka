'use client';

import React, { useState } from 'react';
import { List, ListItem, ListItemGroup } from '@/components/List';
import { User, Settings, Bell, Lock, Key, Home, Search, Heart, Mail, Calendar, FileText, Download, Trash2 } from 'lucide-react';

export default function ListDemo() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>(['dashboard']);

  return (
    <div className="max-w-4xl space-y-12">
      {/* Hero Section */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">List & ListItem</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Flexible list components with optional icons, checkboxes, borders, and grouping.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">3</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Variants</div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">default, icon, checkbox</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">5</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">States</div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">default, hover, focused, selected, disabled</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">240px</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Fixed Width</div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">From Figma specs</div>
        </div>
      </div>

      {/* Basic List */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Basic List</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Simple list without borders. Default variant with plain text items.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <List>
            <ListItem>Dashboard</ListItem>
            <ListItem>Analytics</ListItem>
            <ListItem>Reports</ListItem>
            <ListItem>Settings</ListItem>
          </List>
        </div>
      </section>

      {/* List with Borders */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">List with Borders</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Use <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">showBorder</code> prop to add borders around items. The List component automatically propagates this to all ListItem children.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <List showBorder>
            <ListItem>Dashboard</ListItem>
            <ListItem>Analytics</ListItem>
            <ListItem>Reports</ListItem>
            <ListItem>Settings</ListItem>
          </List>
        </div>
      </section>

      {/* List with Icons */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">List with Icons</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Icon variant with 20x20px icons. Perfect for navigation menus and action lists.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <List>
            <ListItem icon={<Home className="w-5 h-5" />}>Dashboard</ListItem>
            <ListItem icon={<Search className="w-5 h-5" />}>Search</ListItem>
            <ListItem icon={<Heart className="w-5 h-5" />}>Favorites</ListItem>
            <ListItem icon={<Mail className="w-5 h-5" />}>Messages</ListItem>
            <ListItem icon={<Calendar className="w-5 h-5" />}>Calendar</ListItem>
          </List>
        </div>
      </section>

      {/* List with Checkboxes */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">List with Checkboxes</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Checkbox variant with 16x16px checkboxes. Supports controlled and uncontrolled modes.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <List>
            <ListItem
              checkbox
              checked={checked1}
              onCheckedChange={setChecked1}
            >
              Send weekly reports
            </ListItem>
            <ListItem
              checkbox
              checked={checked2}
              onCheckedChange={setChecked2}
            >
              Enable notifications
            </ListItem>
            <ListItem
              checkbox
              checked={checked3}
              onCheckedChange={setChecked3}
            >
              Auto-save drafts
            </ListItem>
          </List>
        </div>
      </section>

      {/* Selected State */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Selected State</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Use the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">selected</code> prop to highlight active items. Different from checkbox - this is for visual selection feedback.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <List>
            <ListItem
              icon={<Home className="w-5 h-5" />}
              selected={selectedItems.includes('dashboard')}
              onClick={() => setSelectedItems(['dashboard'])}
            >
              Dashboard
            </ListItem>
            <ListItem
              icon={<FileText className="w-5 h-5" />}
              selected={selectedItems.includes('reports')}
              onClick={() => setSelectedItems(['reports'])}
            >
              Reports
            </ListItem>
            <ListItem
              icon={<Settings className="w-5 h-5" />}
              selected={selectedItems.includes('settings')}
              onClick={() => setSelectedItems(['settings'])}
            >
              Settings
            </ListItem>
          </List>
        </div>
      </section>

      {/* Disabled State */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Disabled State</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Disabled items are visually muted and non-interactive.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <List>
            <ListItem icon={<Download className="w-5 h-5" />}>Download</ListItem>
            <ListItem icon={<Mail className="w-5 h-5" />} disabled>
              Share (coming soon)
            </ListItem>
            <ListItem icon={<Trash2 className="w-5 h-5" />}>Delete</ListItem>
          </List>
        </div>
      </section>

      {/* List as Links */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">List as Links</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ListItems automatically render as anchor tags when <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">href</code> is provided.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <List>
            <ListItem icon={<User className="w-5 h-5" />} href="/profile">
              Profile
            </ListItem>
            <ListItem icon={<Settings className="w-5 h-5" />} href="/settings">
              Settings
            </ListItem>
            <ListItem icon={<Bell className="w-5 h-5" />} href="/notifications">
              Notifications
            </ListItem>
          </List>
        </div>
      </section>

      {/* Grouped Lists */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Grouped Lists</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Use ListItemGroup to organize lists into sections with optional titles.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div>
            <ListItemGroup title="General">
              <ListItem icon={<User className="w-5 h-5" />}>Profile</ListItem>
              <ListItem icon={<Bell className="w-5 h-5" />}>Notifications</ListItem>
              <ListItem icon={<Mail className="w-5 h-5" />}>Messages</ListItem>
            </ListItemGroup>

            <ListItemGroup title="Advanced">
              <ListItem icon={<Lock className="w-5 h-5" />}>Security</ListItem>
              <ListItem icon={<Key className="w-5 h-5" />}>API Keys</ListItem>
              <ListItem icon={<Settings className="w-5 h-5" />}>System</ListItem>
            </ListItemGroup>
          </div>
        </div>
      </section>

      {/* Complex Example: Settings Menu */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Complex Example: Settings Menu</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          A complete settings menu combining icons, selected state, and grouping.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div>
            <ListItemGroup title="Account">
              <ListItem
                icon={<User className="w-5 h-5" />}
                selected={selectedItems.includes('profile')}
                onClick={() => setSelectedItems(['profile'])}
              >
                Profile Settings
              </ListItem>
              <ListItem
                icon={<Lock className="w-5 h-5" />}
                selected={selectedItems.includes('security')}
                onClick={() => setSelectedItems(['security'])}
              >
                Privacy & Security
              </ListItem>
              <ListItem
                icon={<Bell className="w-5 h-5" />}
                selected={selectedItems.includes('notifications-settings')}
                onClick={() => setSelectedItems(['notifications-settings'])}
              >
                Notifications
              </ListItem>
            </ListItemGroup>

            <ListItemGroup title="Preferences">
              <ListItem
                icon={<Settings className="w-5 h-5" />}
                selected={selectedItems.includes('preferences')}
                onClick={() => setSelectedItems(['preferences'])}
              >
                General
              </ListItem>
              <ListItem icon={<FileText className="w-5 h-5" />} disabled>
                Advanced (Pro only)
              </ListItem>
            </ListItemGroup>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Accessibility</h2>
        <div className="prose dark:prose-invert max-w-none">
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li><strong>Keyboard Navigation:</strong> Items support Enter and Space key activation</li>
            <li><strong>ARIA Attributes:</strong> Proper role="button" and aria-disabled states</li>
            <li><strong>Tab Order:</strong> Disabled items are excluded from tab order (tabIndex={'{-1}'})</li>
            <li><strong>Semantic HTML:</strong> Uses ul/li for lists, anchor tags for links</li>
            <li><strong>Focus Visible:</strong> Clear focus indicators with teal border and background</li>
          </ul>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Usage Guidelines</h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Best Practices</h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li><strong>Variant Choice:</strong> Use icon variant for navigation, checkbox variant for multi-select</li>
            <li><strong>Borders:</strong> Add borders when lists need clear visual separation between items</li>
            <li><strong>Grouping:</strong> Use ListItemGroup for long lists with multiple sections</li>
            <li><strong>Selection:</strong> Use selected state for single-choice navigation, checkbox for multi-choice</li>
            <li><strong>Width:</strong> Default width is 240px from Figma, but can be overridden with className</li>
          </ul>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Code Examples</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Basic List</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<List>
  <ListItem>Dashboard</ListItem>
  <ListItem>Settings</ListItem>
  <ListItem>Profile</ListItem>
</List>`}
            </pre>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">With Icons and Borders</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<List showBorder>
  <ListItem icon={<Home />}>Dashboard</ListItem>
  <ListItem icon={<Settings />}>Settings</ListItem>
  <ListItem icon={<User />}>Profile</ListItem>
</List>`}
            </pre>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Grouped with Selection</h3>
            <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<ListItemGroup title="Settings">
  <ListItem
    icon={<User />}
    selected={selected === 'profile'}
    onClick={() => setSelected('profile')}
  >
    Profile
  </ListItem>
  <ListItem
    icon={<Lock />}
    selected={selected === 'security'}
    onClick={() => setSelected('security')}
  >
    Security
  </ListItem>
</ListItemGroup>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
