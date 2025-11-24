'use client';

import { Product } from '@/types/products';
import { ProductCard } from './ProductCard';

interface ProductsGridProps {
  products: Product[];
  isLoading?: boolean;
  onFavoriteToggle?: (id: string) => void;
}

export function ProductsGrid({ products, isLoading, onFavoriteToggle }: ProductsGridProps) {
  if (isLoading) {
    return <ProductsGridSkeleton />;
  }

  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
    </div>
  );
}

function ProductsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="bg-gray-100 rounded-xl h-[400px] animate-pulse" />
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-16">
      <p className="text-gray-600 text-lg font-hanken">No products found</p>
      <p className="text-gray-500 text-sm mt-2 font-hanken">Try adjusting your filters</p>
    </div>
  );
}
