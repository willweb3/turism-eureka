'use client';

import { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { FAQCategory, FAQQuestion } from '@/types/faq';
import { faqData } from '@/data/faq-content';

interface FAQContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: FAQCategory | 'all';
  setActiveCategory: (category: FAQCategory | 'all') => void;
  filteredQuestions: FAQQuestion[];
  allQuestions: FAQQuestion[];
}

const FAQContext = createContext<FAQContextType | undefined>(undefined);

export function FAQProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FAQCategory | 'all'>('travelers');

  // Combine all questions from all categories
  const allQuestions = useMemo(() => {
    return [
      ...faqData.travelers.questions,
      ...faqData.operators.questions,
      ...faqData.hosts.questions,
    ].sort((a, b) => a.order - b.order);
  }, []);

  // Filter questions based on search query and category
  const filteredQuestions = useMemo(() => {
    let questions = allQuestions;

    // Filter by category
    if (activeCategory !== 'all') {
      questions = questions.filter((q) => q.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      questions = questions.filter((q) => {
        const inQuestion = q.question.toLowerCase().includes(query);
        const inAnswer = q.answer.toLowerCase().includes(query);
        const inKeywords = q.keywords?.some((k) => k.toLowerCase().includes(query)) || false;
        return inQuestion || inAnswer || inKeywords;
      });
    }

    return questions;
  }, [allQuestions, searchQuery, activeCategory]);

  return (
    <FAQContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        activeCategory,
        setActiveCategory,
        filteredQuestions,
        allQuestions,
      }}
    >
      {children}
    </FAQContext.Provider>
  );
}

export function useFAQ() {
  const context = useContext(FAQContext);
  if (context === undefined) {
    throw new Error('useFAQ must be used within a FAQProvider');
  }
  return context;
}
