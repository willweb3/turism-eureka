import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TheAzoresHero } from '@/components/the-azores/TheAzoresHero';
import { TheAzoresIntro } from '@/components/the-azores/TheAzoresIntro';
import { FeaturedExperiencesSection } from '@/components/the-azores/FeaturedExperiencesSection';
import { CTAJourney } from '@/components/sections/CTAJourney';

export const metadata: Metadata = {
  title: 'The Azores | 9 Volcanic Islands | AZOREON',
  description: 'Discover the nine volcanic islands of the Azores archipelago. Each island offers unique landscapes, experiences, and authentic Portuguese culture in the heart of the Atlantic Ocean.',
  keywords: [
    'Azores',
    'Açores',
    'Azores islands',
    'Portugal islands',
    'São Miguel',
    'Pico',
    'Terceira',
    'Faial',
    'volcanic islands',
    'Atlantic Ocean',
  ],
  openGraph: {
    title: 'The Azores | 9 Volcanic Islands | AZOREON',
    description: 'Discover the nine volcanic islands of the Azores archipelago',
    images: ['/og-azores.jpg'],
    type: 'website',
  },
};

export default function TheAzoresPage() {
  return (
    <>
      <Header transparent={true} />
      <main>
        <TheAzoresHero />
        <TheAzoresIntro />
        <FeaturedExperiencesSection />
        <CTAJourney />
      </main>
      <Footer />
    </>
  );
}
