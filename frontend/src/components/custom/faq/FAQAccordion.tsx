'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { FAQCell } from './FAQCell';
import type { FAQAccordionProps } from '@/types/custom-components';

/**
 * FAQAccordion Component
 *
 * Accordion for displaying FAQs with collapsible answers.
 * Used in help pages, experience details, checkout, etc.
 *
 * @example
 * ```tsx
 * const faqItems = [
 *   {
 *     id: 'faq-1',
 *     question: 'How do I book a trip?',
 *     answer: 'You can book by selecting an experience...'
 *   },
 * ];
 *
 * <FAQAccordion
 *   items={faqItems}
 *   defaultOpen={['faq-1']}
 *   allowMultiple={false}
 * />
 * ```
 */
export function FAQAccordion({
  items,
  defaultOpen = [],
  allowMultiple = false,
  className,
}: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(defaultOpen)
  );

  const handleToggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(id);
      }

      return next;
    });
  };

  return (
    <div className={cn('flex flex-col gap-4', className)} role="region" aria-label="Frequently Asked Questions">
      {items.map((item) => (
        <FAQCell
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.has(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
