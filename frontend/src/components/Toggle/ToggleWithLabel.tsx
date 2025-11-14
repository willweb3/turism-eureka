'use client';

import React, { useId } from 'react';
import { cn } from '@/lib/utils';
import { Toggle } from './Toggle';
import type { ToggleWithLabelProps } from './Toggle.types';
import { toggleLabelVariants } from './Toggle.styles';

/**
 * Label content helper component
 */
function LabelContent({
  label,
  required,
}: {
  label: React.ReactNode;
  required?: boolean;
}) {
  return (
    <span className="flex items-center gap-1">
      <span className="text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </span>
      {required && (
        <span className="text-red-600 dark:text-red-400" aria-label="required">
          *
        </span>
      )}
    </span>
  );
}

/**
 * Toggle with Label Component
 *
 * Composition of Toggle with label, description, error, and hint text.
 *
 * @example
 * ```tsx
 * <ToggleWithLabel
 *   label="Enable notifications"
 *   description="Receive email notifications for new messages"
 *   checked={notifications}
 *   onChange={setNotifications}
 * />
 *
 * <ToggleWithLabel
 *   label="Accept terms"
 *   required
 *   error={errors.terms}
 *   checked={acceptTerms}
 *   onChange={setAcceptTerms}
 * />
 * ```
 */
export function ToggleWithLabel({
  label,
  description,
  labelPlacement = 'right',
  required,
  error,
  hint,
  id: providedId,
  'aria-describedby': providedAriaDescribedBy,
  ...toggleProps
}: ToggleWithLabelProps) {
  // Generate unique IDs
  const generatedId = useId();
  const toggleId = providedId || generatedId;
  const descriptionId = description ? `${toggleId}-desc` : undefined;
  const errorId = error ? `${toggleId}-error` : undefined;
  const hintId = hint ? `${toggleId}-hint` : undefined;

  // Combine aria-describedby
  const ariaDescribedBy = cn(
    descriptionId,
    errorId,
    hintId,
    providedAriaDescribedBy
  );

  // Determine orientation based on label placement
  const orientation =
    labelPlacement === 'top' || labelPlacement === 'bottom'
      ? 'vertical'
      : 'horizontal';

  // Render label before or after toggle based on placement
  const renderLabel = () => <LabelContent label={label} required={required} />;

  const renderToggle = () => (
    <Toggle
      id={toggleId}
      aria-describedby={ariaDescribedBy || undefined}
      {...toggleProps}
    />
  );

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={toggleId}
        className={cn(
          toggleLabelVariants({
            disabled: toggleProps.disabled,
            orientation,
          })
        )}
      >
        {(labelPlacement === 'left' || labelPlacement === 'top') && renderLabel()}
        {renderToggle()}
        {(labelPlacement === 'right' || labelPlacement === 'bottom') && renderLabel()}
      </label>

      {/* Description */}
      {description && (
        <p
          id={descriptionId}
          className="text-sm text-gray-600 dark:text-gray-400"
        >
          {description}
        </p>
      )}

      {/* Hint (only shown if no error) */}
      {hint && !error && (
        <p
          id={hintId}
          className="text-xs text-gray-500 dark:text-gray-400"
        >
          {hint}
        </p>
      )}

      {/* Error message */}
      {error && (
        <p
          id={errorId}
          className="text-xs text-red-600 dark:text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
