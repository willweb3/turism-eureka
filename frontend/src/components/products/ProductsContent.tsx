'use client';

import { useState, useMemo } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { Product, FilterState } from '@/types/products';
import { ProductsGrid } from './ProductsGrid';
import { CategoryPills } from './CategoryPills';
import { SortDropdown } from './SortDropdown';
import { Pagination } from './Pagination';
import { ProductFiltersModal } from './ProductFiltersModal';

interface ProductsContentProps {
  initialProducts: Product[];
}

const ITEMS_PER_PAGE = 9;

export function ProductsContent({ initialProducts }: ProductsContentProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    sortBy: 'recommended',
    priceRange: [0, 1000],
    minRating: 0,
    island: 'all',
    inStock: false,
  });

  const filteredProducts = useMemo(() => {
    let filtered = [...initialProducts];

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    // Price range filter
    filtered = filtered.filter(
      p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Rating filter
    if (filters.minRating > 0) {
      filtered = filtered.filter(p => p.rating_avg >= filters.minRating);
    }

    // Island filter
    if (filters.island !== 'all') {
      filtered = filtered.filter(p => p.island === filters.island);
    }

    // Stock filter
    if (filters.inStock) {
      filtered = filtered.filter(p => p.stock_quantity > 0);
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating_avg - a.rating_avg;
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        default:
          return b.rating_avg - a.rating_avg;
      }
    });

    return filtered;
  }, [initialProducts, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({ ...prev, category: category as any }));
    setCurrentPage(1); // Reset to first page
  };

  const handleSortChange = (sortBy: FilterState['sortBy']) => {
    setFilters(prev => ({ ...prev, sortBy }));
  };

  return (
    <div className="bg-[#F5F5F5] py-12">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Filter Bar */}
        <div className="mb-8">
          {/* Category Pills and Filters Button */}
          <div className="flex items-center justify-between gap-4 mb-4">
            {/* Category Pills */}
            <CategoryPills
              activeCategory={filters.category}
              onChange={handleCategoryChange}
            />

            {/* Filters Button */}
            <button
              onClick={() => setIsFiltersOpen(true)}
              className="flex items-center gap-2 px-6 py-2 bg-[#3CA997] text-white rounded-full font-hanken text-sm hover:bg-[#3CA997]/90 transition-colors whitespace-nowrap"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center justify-between">
            <SortDropdown
              value={filters.sortBy}
              onChange={handleSortChange}
            />

            {/* Results Count */}
            <div className="text-sm font-hanken text-gray-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <ProductsGrid products={paginatedProducts} />

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>

      {/* Filters Modal */}
      <ProductFiltersModal
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        filters={filters}
        onFiltersChange={setFilters}
      />
    </div>
  );
}
