'use client';

import React, { useState } from 'react';
import { Input } from '@/design-system/components/inputs';
import { CodeBlock } from '../../components/CodeBlock';
import { Mail, Lock, User, Phone, Search, Eye, EyeOff, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const leftIcons = {
  none: null,
  mail: <Mail size={20} />,
  user: <User size={20} />,
  lock: <Lock size={20} />,
  phone: <Phone size={20} />,
  search: <Search size={20} />,
};

const rightIcons = {
  none: null,
  eye: <Eye size={24} />,
  eyeOff: <EyeOff size={24} />,
  check: <Check size={24} />,
  x: <X size={24} />,
};

interface InputPlaygroundProps {
  className?: string;
}

/**
 * InputPlayground Component
 *
 * Interactive playground to test input configurations
 */
export function InputPlayground({ className }: InputPlaygroundProps) {
  const [label, setLabel] = useState('Email Address');
  const [placeholder, setPlaceholder] = useState('Enter your email');
  const [value, setValue] = useState('');
  const [helperText, setHelperText] = useState('We will never share your email');
  const [leftIcon, setLeftIcon] = useState<keyof typeof leftIcons>('mail');
  const [rightIcon, setRightIcon] = useState<keyof typeof rightIcons>('none');
  const [state, setState] = useState<'default' | 'error' | 'success'>('default');
  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(false);

  const generateCode = () => {
    const props: string[] = [];

    if (label) props.push(`label="${label}"`);
    if (placeholder) props.push(`placeholder="${placeholder}"`);
    if (value) props.push(`value="${value}"`);
    if (helperText) props.push(`helperText="${helperText}"`);
    if (leftIcon !== 'none') props.push(`leftIcon={<${leftIcon.charAt(0).toUpperCase() + leftIcon.slice(1)} size={20} />}`);
    if (rightIcon !== 'none') props.push(`rightIcon={<${rightIcon.charAt(0).toUpperCase() + rightIcon.slice(1)} size={24} />}`);
    if (state !== 'default') props.push(`state="${state}"`);
    if (disabled) props.push('disabled');
    if (required) props.push('required');

    return `<Input\n  ${props.join('\n  ')}\n  onChange={(value) => setValue(value)}\n/>`;
  };

  return (
    <div className={cn('space-y-6', className)}>
      {/* Controls */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Controls
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Label */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Label
            </label>
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>

          {/* Placeholder */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Placeholder
            </label>
            <input
              type="text"
              value={placeholder}
              onChange={(e) => setPlaceholder(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>

          {/* Helper Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Helper Text
            </label>
            <input
              type="text"
              value={helperText}
              onChange={(e) => setHelperText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>

          {/* Left Icon */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Left Icon
            </label>
            <select
              value={leftIcon}
              onChange={(e) => setLeftIcon(e.target.value as keyof typeof leftIcons)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              {Object.keys(leftIcons).map((icon) => (
                <option key={icon} value={icon}>
                  {icon}
                </option>
              ))}
            </select>
          </div>

          {/* Right Icon */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Right Icon
            </label>
            <select
              value={rightIcon}
              onChange={(e) => setRightIcon(e.target.value as keyof typeof rightIcons)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              {Object.keys(rightIcons).map((icon) => (
                <option key={icon} value={icon}>
                  {icon}
                </option>
              ))}
            </select>
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              State
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value as 'default' | 'error' | 'success')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="default">Default</option>
              <option value="error">Error</option>
              <option value="success">Success</option>
            </select>
          </div>

          {/* Toggles */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Disabled</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={required}
                onChange={(e) => setRequired(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Required</span>
            </label>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Preview
        </h3>
        <div className="max-w-md">
          <Input
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={setValue}
            helperText={helperText}
            leftIcon={leftIcons[leftIcon]}
            rightIcon={rightIcons[rightIcon]}
            state={state}
            disabled={disabled}
            required={required}
          />
        </div>
      </div>

      {/* Generated Code */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Generated Code
        </h3>
        <CodeBlock code={generateCode()} language="tsx" />
      </div>
    </div>
  );
}
