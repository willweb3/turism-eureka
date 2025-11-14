'use client';

import React from 'react';
import { Input, InputProps } from '@/design-system/components/inputs';
import { CodeBlock } from '../../components/CodeBlock';
import { Badge } from '../../components/Badge';
import { cn } from '@/lib/utils';

interface InputState {
  name: string;
  label: string;
  props: Partial<InputProps>;
  description: string;
  specs: {
    border: string;
    textColor: string;
    iconColor?: string;
  };
}

const inputStates: InputState[] = [
  {
    name: 'placeholder',
    label: 'Placeholder',
    props: {
      placeholder: 'Enter text...',
      value: '',
    },
    description: 'Default empty state with placeholder text',
    specs: {
      border: '1px #BFC3C9 (Neutral-500)',
      textColor: '#777777 (Grey-500)',
      iconColor: '#777777 (Grey)',
    },
  },
  {
    name: 'filled',
    label: 'Filled',
    props: {
      value: 'Sample text',
    },
    description: 'Input with value entered',
    specs: {
      border: '1px #BFC3C9',
      textColor: '#11212D (Blue-500)',
      iconColor: '#11212D',
    },
  },
  {
    name: 'disabled',
    label: 'Disabled',
    props: {
      placeholder: 'Disabled input',
      disabled: true,
    },
    description: 'Non-interactive disabled state',
    specs: {
      border: '1px #BFC3C9, Opacity: 50%',
      textColor: '#777777, Opacity: 50%',
      iconColor: '#777777, Opacity: 50%',
    },
  },
  {
    name: 'success',
    label: 'Success',
    props: {
      value: 'valid@email.com',
      state: 'success',
      helperText: 'Email is valid',
    },
    description: 'Successful validation state',
    specs: {
      border: '1px #22AE51 (Green-500)',
      textColor: '#22AE51',
      iconColor: '#22AE51 (Green)',
    },
  },
  {
    name: 'error',
    label: 'Error',
    props: {
      value: 'invalid email',
      state: 'error',
      helperText: 'Please enter a valid email',
    },
    description: 'Error validation state',
    specs: {
      border: '1px #DC2626 (Red-500)',
      textColor: '#DC2626',
      iconColor: '#DC2626 (Red)',
    },
  },
];

interface StateShowcaseProps {
  className?: string;
}

/**
 * StateShowcase Component
 *
 * Displays all input states side by side with specifications
 */
export function StateShowcase({ className }: StateShowcaseProps) {
  return (
    <div className={cn('space-y-8', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inputStates.map((state) => (
          <div
            key={state.name}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6"
          >
            {/* State Badge */}
            <div className="flex items-center justify-between mb-4">
              <Badge variant="neutral">{state.label}</Badge>
            </div>

            {/* Input Preview */}
            <div className="mb-4">
              <Input {...state.props} />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {state.description}
            </p>

            {/* Specs */}
            <div className="space-y-2 text-xs">
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Border:</span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  {state.specs.border}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">Text:</span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  {state.specs.textColor}
                </span>
              </div>
              {state.specs.iconColor && (
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Icon:</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {state.specs.iconColor}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
