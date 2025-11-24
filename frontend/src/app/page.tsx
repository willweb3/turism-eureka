import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedExperiences } from '@/components/home/FeaturedExperiences';
import { UnforgettableJourneys } from '@/components/sections/UnforgettableJourneys';
import { HowItWorks } from '@/components/home/HowItWorks';
import { CTAJourney } from '@/components/sections/CTAJourney';
import { ShareExperiences } from '@/components/sections/ShareExperiences';
import { ExploreIslands } from '@/components/sections/ExploreIslands';
import { OurProducts } from '@/components/home/OurProducts';
import { BecomePartner } from '@/components/sections/BecomePartner';
import { PromotionalBanners } from '@/components/home/PromotionalBanners';
import { BasedOnHistory } from '@/components/home/BasedOnHistory';

export const metadata = {
  title: 'AZOREON - Discover the Azores | Authentic Experiences',
  description: 'Discover the best activities on Azores Islands: epic hikes, breathtaking landscapes and authentic experiences in the Azores.',
};

export default function HomePage() {
  return (
    <>
      <Header transparent={true} />
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Experiences with Category Filtering */}
        <FeaturedExperiences />

        {/* Unforgettable Journeys */}
        <UnforgettableJourneys />

        {/* How It Works */}
        <HowItWorks />

        {/* Let's Start a Journey CTA */}
        <CTAJourney />

        {/* 60+ Share Experiences with Testimonials Carousel */}
        <ShareExperiences />

        {/* Explore Islands */}
        <ExploreIslands />

        {/* Our Products */}
        <OurProducts />

        {/* Become a Partner */}
        <BecomePartner />

        {/* Promotional Banners */}
        <PromotionalBanners />

        {/* Based on History */}
        <BasedOnHistory />
      </main>
      <Footer />
    </>
  );
}
