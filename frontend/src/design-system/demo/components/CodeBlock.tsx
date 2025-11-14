'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showCopy?: boolean;
}

/**
 * CodeBlock Component
 * Displays code with syntax highlighting and copy functionality
 */
export function CodeBlock({ code, language = 'tsx', className, showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={cn('relative group', className)}>
      {showCopy && (
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 px-3 py-1 text-xs font-medium bg-neutral-700 hover:bg-neutral-600 text-white rounded-md transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      )}
      <pre className={cn(
        'bg-neutral-900 dark:bg-neutral-950 text-neutral-100 p-4 rounded-lg overflow-x-auto',
        'scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900'
      )}>
        <code className={`language-${language} text-sm`}>{code}</code>
      </pre>
    </div>
  );
}
