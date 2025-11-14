import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/about/AboutHero';
import { StoryMissionSection } from '@/components/about/StoryMissionSection';
import { TrustedPartnerSection } from '@/components/about/TrustedPartnerSection';
import { TestimonialsSection } from '@/components/about/TestimonialsSection';
import { WhyChooseSection } from '@/components/about/WhyChooseSection';
import { CTASection } from '@/components/about/CTASection';

export const metadata: Metadata = {
  title: 'About Us | Azoreon - Your Trusted Travel Partner',
  description:
    'Learn about Azoreon, your gateway to authentic Azorean experiences. Connecting travelers with local providers for unforgettable island adventures.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <AboutHero />
        <StoryMissionSection />
        <TrustedPartnerSection />
        <TestimonialsSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
