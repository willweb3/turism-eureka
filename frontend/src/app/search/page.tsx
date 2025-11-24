'use client';

import { useState, useEffect, useMemo } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SearchHero } from '@/components/features/search/SearchHero';
import { HorizontalFilters } from '@/components/features/search/HorizontalFilters';
import { FilterModal } from '@/components/features/search/FilterModal';
import { SearchControls } from '@/components/features/search/SearchControls';
import { ListingGrid } from '@/components/features/search/ListingGrid';
// import { SearchFilters as SearchFiltersType, Listing } from '@/types/listing';

// Temporary type definition - to be moved to @/types/listing
interface SearchFiltersType {
  sortBy?: string;
  page?: number;
  limit?: number;
  category?: string;
  island?: string;
  priceMin?: number;
  priceMax?: number;
  types?: string[];
  islands?: string[];
  maxGuests?: number;
  dates?: { from: Date; to: Date };
  minPrice?: number;
  maxPrice?: number;
  [key: string]: any; // Allow any other properties
}
import { mockListings } from '@/data/mockListings';

export default function SearchPage() {
  const [filters, setFilters] = useState<SearchFiltersType>({
    sortBy: 'relevance',
    page: 1,
    limit: 9,
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [activeHorizontalFilter, setActiveHorizontalFilter] = useState<string>();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filters.page]);

  // Filtra e ordena os listings baseado nos filtros atuais
  const filteredAndSortedListings = useMemo(() => {
    let results = [...mockListings];

    // Filtro de busca por texto
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (listing) =>
          listing.title.toLowerCase().includes(query) ||
          listing.description.toLowerCase().includes(query) ||
          listing.category.toLowerCase().includes(query) ||
          listing.island.toLowerCase().includes(query)
      );
    }

    // Filtro por ilha
    if (filters.island && filters.island !== 'all') {
      results = results.filter((listing) => listing.island === filters.island);
    }

    // Filtro por tipos de experiência
    if (filters.types && filters.types.length > 0) {
      results = results.filter((listing) =>
        filters.types!.includes(listing.type)
      );
    }

    // Filtro por preço
    if (filters.minPrice !== undefined) {
      results = results.filter((listing) => listing.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      results = results.filter((listing) => listing.price <= filters.maxPrice!);
    }

    // Filtro por avaliação
    if (filters.minRating !== undefined) {
      results = results.filter(
        (listing) => listing.rating.average >= filters.minRating!
      );
    }

    // Filtro por reserva instantânea
    if (filters.instantBook) {
      results = results.filter((listing) => listing.instantBook);
    }

    // Ordenação
    switch (filters.sortBy) {
      case 'price_asc':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => b.rating.average - a.rating.average);
        break;
      case 'newest':
        results.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case 'relevance':
      default:
        // Relevância: featured primeiro, depois promoted, depois por rating
        results.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          if (a.promoted && !b.promoted) return -1;
          if (!a.promoted && b.promoted) return 1;
          return b.rating.average - a.rating.average;
        });
        break;
    }

    return results;
  }, [filters, searchQuery]);

  // Paginação
  const totalResults = filteredAndSortedListings.length;
  const totalPages = Math.ceil(totalResults / (filters.limit || 9));
  const startIndex = ((filters.page || 1) - 1) * (filters.limit || 9);
  const endIndex = startIndex + (filters.limit || 9);
  const paginatedListings = filteredAndSortedListings.slice(startIndex, endIndex);

  const handleFiltersChange = (newFilters: SearchFiltersType) => {
    setFilters({ ...newFilters, page: 1 }); // Reset para página 1 ao mudar filtros
  };

  const handleSortChange = (sortBy: SearchFiltersType['sortBy']) => {
    setFilters({ ...filters, sortBy, page: 1 });
  };

  const handlePageChange = (page: number) => {
    setFilters({ ...filters, page });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilters({ ...filters, page: 1 }); // Reset para página 1 ao buscar
  };

  const handleHorizontalFilterClick = (filter: string) => {
    if (filter === 'filters') {
      setIsFilterModalOpen(true);
      return;
    }
    setActiveHorizontalFilter(activeHorizontalFilter === filter ? undefined : filter);
  };

  return (
    <>
      <Header transparent={true} />

      <main>
        {/* Hero Section com Search */}
        <SearchHero initialQuery={searchQuery} onSearch={handleSearch} />

        {/* Main Content - Filtros + Resultados */}
        <section className="pt-12 lg:pt-16 pb-16 lg:pb-24 bg-[#F9FAFB]">
          <div className="container mx-auto px-6 lg:px-12 max-w-[1440px]">
            {/* Horizontal Filters */}
            <div className="mb-8">
              <HorizontalFilters
                onFilterClick={handleHorizontalFilterClick}
                activeFilter={activeHorizontalFilter}
              />
            </div>

            {/* Main Content - Listings */}
            <div className="flex-1 min-w-0">
              {/* Controls - Sort & View Mode */}
              <SearchControls
                resultCount={totalResults}
                searchQuery={searchQuery}
                sortBy={filters.sortBy || 'relevance'}
                onSortChange={handleSortChange}
              />

              {/* Listings Grid + Pagination */}
              <ListingGrid
                listings={paginatedListings}
                currentPage={filters.page || 1}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        filters={filters}
        onFiltersChange={handleFiltersChange}
      />

      <Footer />
    </>
  );
}
