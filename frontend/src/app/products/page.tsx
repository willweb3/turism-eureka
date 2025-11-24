import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { ProductsHero } from '@/components/products/ProductsHero';
import { ProductsContent } from '@/components/products/ProductsContent';
import { Footer } from '@/components/layout/Footer';
import { SAMPLE_PRODUCTS } from '@/types/products';

export const metadata: Metadata = {
  title: 'Local Products | AZOREON',
  description: 'Discover authentic Azorean products including wines, cheeses, jams, and gift baskets.',
  openGraph: {
    title: 'Local Products | AZOREON',
    description: 'Discover authentic Azorean products',
    images: ['/og-products.jpg'],
  }
};

export default function ProductsPage() {
  return (
    <>
      <Header transparent={true} />
      <main>
        <ProductsHero />
        <ProductsContent initialProducts={SAMPLE_PRODUCTS} />
        <Footer />
      </main>
    </>
  );
}
