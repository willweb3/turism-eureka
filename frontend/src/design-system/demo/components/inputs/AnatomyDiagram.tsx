'use client';

import React from 'react';
import { Mail, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnatomyDiagramProps {
  className?: string;
}

/**
 * AnatomyDiagram Component
 *
 * Visual breakdown of input component anatomy with labels
 */
export function AnatomyDiagram({ className }: AnatomyDiagramProps) {
  return (
    <div className={cn('space-y-8', className)}>
      {/* Input Anatomy */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Input Component Anatomy
        </h3>

        <div className="space-y-6">
          {/* Visual Diagram */}
          <div className="relative">
            {/* Label pointer */}
            <div className="absolute -left-4 top-0 flex items-center">
              <div className="w-px h-6 bg-blue-500"></div>
              <div className="absolute -left-20 top-0 text-xs font-medium text-blue-600 whitespace-nowrap">
                Label (14px, Medium)
              </div>
            </div>

            {/* Label */}
            <label className="block text-sm font-medium text-[#11212D] mb-2">
              Input Label
            </label>

            {/* Input container with pointers */}
            <div className="relative">
              {/* Border radius pointer */}
              <div className="absolute -right-4 top-4 flex items-center">
                <div className="w-px h-6 bg-purple-500"></div>
                <div className="absolute -right-32 top-0 text-xs font-medium text-purple-600 whitespace-nowrap">
                  Border radius: 8px
                </div>
              </div>

              {/* Padding pointer */}
              <div className="absolute -left-4 top-12 flex items-center">
                <div className="w-px h-6 bg-green-500"></div>
                <div className="absolute -left-24 top-0 text-xs font-medium text-green-600 whitespace-nowrap">
                  Padding: 12px
                </div>
              </div>

              {/* Input field */}
              <div className="relative bg-[#F2F6F8] border border-[#BFC3C9] rounded-lg p-3 flex items-center gap-2">
                {/* Left icon with pointer */}
                <div className="relative">
                  <div className="absolute -top-8 left-0 flex flex-col items-center">
                    <div className="text-xs font-medium text-orange-600 whitespace-nowrap mb-1">
                      Left Icon (20x20)
                    </div>
                    <div className="w-px h-4 bg-orange-500"></div>
                  </div>
                  <Mail size={20} className="text-[#777777]" />
                </div>

                {/* Input text with pointer */}
                <div className="flex-1 relative">
                  <div className="absolute -bottom-8 left-0 flex flex-col items-center">
                    <div className="w-px h-4 bg-teal-500"></div>
                    <div className="text-xs font-medium text-teal-600 whitespace-nowrap mt-1">
                      Input text (14px, Regular)
                    </div>
                  </div>
                  <span className="text-sm text-[#11212D]">email@example.com</span>
                </div>

                {/* Gap indicator */}
                <div className="absolute top-1/2 left-12 -translate-y-1/2">
                  <div className="text-xs font-medium text-yellow-600 bg-yellow-50 px-1 rounded">
                    8px gap
                  </div>
                </div>

                {/* Right icon with pointer */}
                <div className="relative">
                  <div className="absolute -top-8 right-0 flex flex-col items-center">
                    <div className="text-xs font-medium text-pink-600 whitespace-nowrap mb-1">
                      Right Icon (24x24)
                    </div>
                    <div className="w-px h-4 bg-pink-500"></div>
                  </div>
                  <Eye size={24} className="text-[#777777]" />
                </div>
              </div>

              {/* Height indicator */}
              <div className="absolute -right-4 top-0 bottom-0 flex items-center">
                <div className="absolute -right-24 top-1/2 -translate-y-1/2 text-xs font-medium text-red-600 whitespace-nowrap">
                  Min height: 45px
                </div>
              </div>
            </div>

            {/* Helper text pointer */}
            <div className="relative mt-2">
              <div className="absolute -left-4 top-0 flex items-center">
                <div className="w-px h-6 bg-indigo-500"></div>
                <div className="absolute -left-28 top-0 text-xs font-medium text-indigo-600 whitespace-nowrap">
                  Helper text (12px)
                </div>
              </div>
              <p className="text-xs text-[#777777]">Helper text goes here</p>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                    Element
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                    Property
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">Label</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Font</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                    Hanken Grotesk, 14px, Medium 500
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                    Container
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Background</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                    #F2F6F8 (Neutral-50)
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                    Container
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Border</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                    1px solid #BFC3C9 (Neutral-500)
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                    Container
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Border Radius</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">8px</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                    Container
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Padding</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">12px</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                    Container
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Min Height</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">45px</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                    Input Text
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Font</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                    Hanken Grotesk, 14px, Regular 400
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                    Left Icon
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Size</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">20x20px</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                    Right Icon
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Size</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">24x24px</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">Gap</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Icon to Text</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">8px</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                    Helper Text
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Font</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                    Hanken Grotesk, 12px, Regular 400
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
