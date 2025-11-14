'use client';

import { useState } from 'react';
import { useFAQ } from './faq-context';
import { FAQItem } from './FAQItem';
import { FAQCategory } from '@/types/faq';

const categoryTitles: Record<FAQCategory, string> = {
  travelers: 'For Travelers',
  operators: 'For Operators',
  hosts: 'For Hosts',
};

export function FAQList() {
  const { filteredQuestions, activeCategory, searchQuery } = useFAQ();
  const [openItem, setOpenItem] = useState<{ category: FAQCategory; index: number } | null>({
    category: 'travelers',
    index: 0,
  });

  if (filteredQuestions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F2F6F8] flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="12" stroke="#CBD5E1" strokeWidth="2" />
            <path
              d="M16 11V17M16 21H16.01"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#11212D] font-hanken mb-2">
          No results found
        </h3>
        <p className="text-[#777777] font-hanken">
          Try adjusting your search or browse by category
        </p>
      </div>
    );
  }

  // Group questions by category
  const questionsByCategory: Record<FAQCategory, typeof filteredQuestions> = {
    travelers: filteredQuestions.filter((q) => q.category === 'travelers'),
    operators: filteredQuestions.filter((q) => q.category === 'operators'),
    hosts: filteredQuestions.filter((q) => q.category === 'hosts'),
  };

  // If active category is set, only show that category
  const categoriesToShow: FAQCategory[] =
    activeCategory !== 'all' ? [activeCategory as FAQCategory] : ['travelers', 'operators', 'hosts'];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {categoriesToShow.map((category) => {
        const questions = questionsByCategory[category];
        if (questions.length === 0) return null;

        return (
          <div key={category} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Section Title */}
            <div className="px-6 lg:px-8 pt-6 pb-4">
              <h2 className="text-[20px] font-bold text-[#11212D] font-hanken">
                {categoryTitles[category]}
              </h2>
            </div>

            {/* Questions */}
            <div className="divide-y divide-[#E5E7EB]">
              {questions.map((question, index) => (
                <div key={question.id} className="px-6 lg:px-8">
                  <FAQItem
                    question={question}
                    isOpen={openItem?.category === category && openItem?.index === index}
                    onToggle={() =>
                      setOpenItem(
                        openItem?.category === category && openItem?.index === index
                          ? null
                          : { category, index }
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
