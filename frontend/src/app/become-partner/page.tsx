import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/become-partner/HeroSection';
import { WhyListSection } from '@/components/become-partner/WhyListSection';
import { BenefitsSection } from '@/components/become-partner/BenefitsSection';
import { TestimonialsSection } from '@/components/become-partner/TestimonialsSection';
import { PartnersSection } from '@/components/become-partner/PartnersSection';
import { ActivitiesSection } from '@/components/become-partner/ActivitiesSection';
import { FAQSection } from '@/components/become-partner/FAQSection';
import { FinalCTASection } from '@/components/become-partner/FinalCTASection';

export const metadata: Metadata = {
  title: 'Become a Partner | Azoreon - List Your Experiences in the Azores',
  description:
    'Join Azoreon as a partner and reach thousands of monthly visitors. List your experiences, activities, and tours in the Azores. Make up to 10% commission with our easy-to-use platform.',
  keywords: [
    'become a partner',
    'list activities',
    'Azores experiences',
    'tour operator',
    'affiliate program',
    'earn commission',
    'host experiences',
  ],
  openGraph: {
    title: 'Become a Partner | Azoreon',
    description:
      'Connect seamlessly with 250+ connectivity partners. Create your activity on Azoreon for free under 30 minutes.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function BecomePartnerPage() {
  return (
    <>
      <Header transparent={false} />

      <main>
        <HeroSection />
        <WhyListSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PartnersSection />
        <ActivitiesSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <Footer />
    </>
  );
}
