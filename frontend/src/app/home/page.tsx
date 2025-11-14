import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ExploreDestinations } from '@/components/sections/ExploreDestinations';
import { UnforgettableJourneys } from '@/components/sections/UnforgettableJourneys';
import { ExploreIslands } from '@/components/sections/ExploreIslands';
import { CTAJourney } from '@/components/sections/CTAJourney';
import { ShareExperiences } from '@/components/sections/ShareExperiences';
import { WhyBookAzoreon } from '@/components/sections/WhyBookAzoreon';

export const metadata = {
  title: 'AZOREON - Discover the Azores | Authentic Experiences',
  description: 'Discover authentic experiences in the heart of the Azores. Book unique experiences, explore exotic destinations, and create unforgettable memories.',
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ExploreDestinations />
        <UnforgettableJourneys />
        <ExploreIslands />
        <CTAJourney />
        <ShareExperiences />
        <WhyBookAzoreon />
      </main>
      <Footer />
    </>
  );
}
