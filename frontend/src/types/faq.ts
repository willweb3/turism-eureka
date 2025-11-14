export type FAQCategory = 'travelers' | 'operators' | 'hosts';

export interface FAQQuestion {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  keywords?: string[];
  order: number;
}

export interface FAQSection {
  title: string;
  category: FAQCategory;
  questions: FAQQuestion[];
}

export interface FAQData {
  travelers: FAQSection;
  operators: FAQSection;
  hosts: FAQSection;
}
