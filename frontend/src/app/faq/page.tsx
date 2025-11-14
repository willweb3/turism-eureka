import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FAQProvider } from '@/components/faq/faq-context';
import { FAQHero } from '@/components/faq/FAQHero';
import { FAQSearch } from '@/components/faq/FAQSearch';
import { CategoryFilter } from '@/components/faq/CategoryFilter';
import { FAQList } from '@/components/faq/FAQList';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | AZOREON',
  description:
    'Find answers to common questions about booking experiences, becoming a partner operator or host, payments, cancellations, and more on AZOREON.',
  keywords: [
    'FAQ',
    'frequently asked questions',
    'AZOREON help',
    'booking questions',
    'partner questions',
    'Azores experiences',
  ],
  openGraph: {
    title: 'Frequently Asked Questions | AZOREON',
    description:
      'Find answers to common questions about booking experiences, becoming a partner, and using AZOREON.',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#F7F9FA]">
        <FAQHero />

        <FAQProvider>
          <section className="container mx-auto px-6 lg:px-12 py-8">
            {/* Search */}
            <div className="mb-6">
              <FAQSearch />
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <CategoryFilter />
            </div>

            {/* FAQ List */}
            <FAQList />
          </section>
        </FAQProvider>
      </div>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I book an experience on AZOREON?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Booking an experience is simple. Browse our curated collection of experiences, select the one that interests you, choose your preferred date and number of guests, and click 'Request Book'. You'll receive a confirmation once the host approves your booking.",
                },
              },
              {
                '@type': 'Question',
                name: 'What is your cancellation policy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "We offer free cancellation up to 24 hours before the experience start time for a full refund. Cancellations made within 24 hours are subject to the host's specific cancellation policy.",
                },
              },
              {
                '@type': 'Question',
                name: 'How do I become a partner operator on AZOREON?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "To become a partner operator, click 'Become a partner' in the header and complete the registration form. Our team will review your application within 48 hours.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
