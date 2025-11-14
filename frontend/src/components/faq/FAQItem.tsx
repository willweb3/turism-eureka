'use client';

import { useState } from 'react';
import { FAQQuestion } from '@/types/faq';

interface FAQItemProps {
  question: FAQQuestion;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function FAQItem({ question, isOpen = false, onToggle }: FAQItemProps) {
  const [internalOpen, setInternalOpen] = useState(isOpen);

  const open = onToggle !== undefined ? isOpen : internalOpen;
  const toggle = onToggle || (() => setInternalOpen(!internalOpen));

  return (
    <div className="border-b border-[#E5E7EB] last:border-0">
      <button
        onClick={toggle}
        className="w-full py-4 flex items-center justify-between gap-4 text-left group"
        aria-expanded={open}
        aria-controls={`faq-answer-${question.id}`}
      >
        <span className="text-[14px] lg:text-[15px] font-medium text-[#11212D] font-hanken">
          {question.question}
        </span>
        <svg
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 text-[#11212D] ${
            open ? 'rotate-180' : ''
          }`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        id={`faq-answer-${question.id}`}
        className={`overflow-hidden transition-all duration-200 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
        aria-hidden={!open}
      >
        <p className="text-[13px] lg:text-[14px] text-[#777777] font-hanken leading-relaxed">
          {question.answer}
        </p>
      </div>
    </div>
  );
}
