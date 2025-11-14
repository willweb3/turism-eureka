'use client';

import { useState } from 'react';
import { ListingDetail } from '@/types/listing-detail';

interface FAQProps {
  listing: ListingDetail;
}

export function FAQ({ listing }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col gap-6">
      <h2 className="text-[24px] font-bold text-[#11212D] font-hanken leading-[31.2px]">
        Frequently asked questions
      </h2>

      <div className="flex flex-col gap-0">
        {listing.faq.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full py-4 flex items-center justify-between text-left group"
            >
              <span className="text-[#11212D] font-hanken font-medium text-[16px] leading-[20.8px] pr-4">
                {item.question}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#11212D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
              }`}
            >
              <div className="text-[#777777] font-hanken text-[14px] leading-[21px] pr-8">
                {item.answer}
              </div>
            </div>
            {index < listing.faq.length - 1 && (
              <div className="h-px bg-[#D6D8DF]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
