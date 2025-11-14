'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FAQCellProps } from '@/types/custom-components';

/**
 * FAQCell Component
 *
 * Individual FAQ item with collapsible answer.
 * Part of the FAQAccordion component.
 */
export function FAQCell({
  question,
  answer,
  isOpen,
  onToggle,
  className,
}: FAQCellProps) {
  return (
    <div
      className={cn(
        'p-6 bg-white rounded-2xl border border-[#D6D8DF]',
        'transition-all duration-300',
        className
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left group"
        aria-expanded={isOpen}
      >
        <span className="flex-1 font-hanken text-xl font-medium text-[#11212D] leading-[26px] group-hover:text-[#3CA997] transition-colors">
          {question}
        </span>

        <ChevronDown
          className={cn(
            'w-6 h-6 text-[#11212D] transition-transform duration-300 flex-shrink-0',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Answer - Collapsible with smooth animation */}
      <div
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          isOpen
            ? 'grid-rows-[1fr] opacity-100 mt-2'
            : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <p className="font-hanken text-base text-[#777777] leading-6 pt-2">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
