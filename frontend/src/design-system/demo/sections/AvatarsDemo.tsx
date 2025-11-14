'use client';

import React from 'react';
import { Avatar, AvatarGroup } from '@/design-system/components/avatar';
import type { AvatarGroupItem } from '@/design-system/components/avatar';

const users: AvatarGroupItem[] = [
  { id: '1', name: 'John Doe', src: 'https://i.pravatar.cc/150?img=1', showStatus: true, status: 'online' },
  { id: '2', name: 'Jane Smith', initials: 'JS', backgroundColor: '#3CA997' },
  { id: '3', name: 'Bob Wilson', src: 'https://i.pravatar.cc/150?img=3' },
];

export function AvatarsDemo() {
  return (
    <section id="avatars" className="mb-16 scroll-mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Avatars</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Avatar components for displaying user profiles.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sizes</h3>
        <div className="flex items-end gap-4">
          <Avatar size="xs" src="https://i.pravatar.cc/150?img=1" name="XS" />
          <Avatar size="sm" src="https://i.pravatar.cc/150?img=2" name="SM" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=3" name="MD" />
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=4" name="LG" />
          <Avatar size="xl" src="https://i.pravatar.cc/150?img=5" name="XL" />
          <Avatar size="2xl" src="https://i.pravatar.cc/150?img=6" name="2XL" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Display Types</h3>
        <div className="flex gap-6">
          <div className="text-center">
            <Avatar size="2xl" src="https://i.pravatar.cc/150?img=8" name="Image" />
            <p className="text-sm mt-2">Image</p>
          </div>
          <div className="text-center">
            <Avatar size="2xl" name="John Doe" />
            <p className="text-sm mt-2">Initials</p>
          </div>
          <div className="text-center">
            <Avatar size="2xl" showPlaceholder />
            <p className="text-sm mt-2">Placeholder</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Status Indicators</h3>
        <div className="flex gap-6">
          <Avatar size="xl" src="https://i.pravatar.cc/150?img=11" showStatus status="online" name="Online" />
          <Avatar size="xl" name="Away" showStatus status="away" />
          <Avatar size="xl" src="https://i.pravatar.cc/150?img=13" showStatus status="busy" name="Busy" />
          <Avatar size="xl" name="Offline" showStatus status="offline" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Avatar Groups</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold mb-3">Default</h4>
            <AvatarGroup avatars={users} />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">With Tooltips</h4>
            <AvatarGroup avatars={users} showTooltips />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Truncated</h4>
            <AvatarGroup avatars={[...users, ...users]} max={4} variant="truncated" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">API</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`<Avatar src="..." name="John Doe" size="md" />
<Avatar name="Jane Smith" showStatus status="online" />
<AvatarGroup avatars={users} max={5} showTooltips />`}</code>
        </pre>
      </div>
    </section>
  );
}
