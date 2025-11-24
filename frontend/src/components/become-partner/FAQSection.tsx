'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do I have to register a business?',
      answer:
        'No, you do not need to have a registered business to start listing on Azoreon. However, we recommend checking your local regulations and tax requirements for hosting activities and experiences in your area.',
    },
    {
      question: 'How is the payment processing done?',
      answer:
        'We process payments securely through our integrated payment system. You will receive your earnings directly to your bank account or PayPal on a regular schedule, typically within 7-14 days after the booking is completed.',
    },
    {
      question: 'What are the basic requirements for hosting?',
      answer:
        'To host on Azoreon, you need to be at least 18 years old, have a valid government-issued ID, provide accurate information about your activity or experience, and comply with local regulations and safety standards.',
    },
    {
      question: 'How do I start hosting?',
      answer:
        'Getting started is easy! Simply click the "Get Started" button, create your account, fill in the basic information about your activity, submit high-quality photos, set your pricing and availability, and wait for our team to review and approve your listing.',
    },
    {
      question: 'What is a reasonable price for my hosting?',
      answer:
        'Pricing depends on various factors including the type of activity, duration, included amenities, season, and local market rates. We recommend researching similar experiences in your area and using our pricing tools to find the optimal price point that attracts guests while ensuring profitability.',
    },
    {
      question: 'What measures are in place to ensure guest safety?',
      answer:
        'We take safety seriously. All hosts must comply with local safety regulations, maintain proper insurance coverage, provide clear safety guidelines to guests, and undergo our verification process. We also have a review system that helps maintain high standards across the platform.',
    },
    {
      question: 'How do I list my property or experience?',
      answer:
        'To list your experience, log into your account, navigate to "Create Listing", fill in all required information including title, description, photos, pricing, and availability. Our team will review your listing within 24-48 hours and notify you once its approved and live on the platform.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F2F6F8]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1180px]">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-[32px] md:text-[42px] leading-[54.6px] font-lufga font-semibold text-[#11212D]">
            Your questions answered
          </h2>
        </div>

        {/* FAQ Accordion Container */}
        <div className="bg-white rounded-[24px] p-6">
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <div key={index}>
                {/* FAQ Item */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-3 py-4 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <span className="flex-1 text-[18px] leading-[23.4px] font-hanken font-semibold text-[#11212D]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#11212D] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    strokeWidth={1.5}
                  />
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="pb-4 text-[16px] leading-[24px] font-hanken text-[#777777]">
                    {faq.answer}
                  </div>
                )}

                {/* Divider - except after last item */}
                {index < faqs.length - 1 && (
                  <div className="h-px bg-[#D6D8DF] my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
