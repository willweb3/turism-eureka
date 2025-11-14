'use client';

import { Listing } from '@/types/listing';
import { ListingCard } from './ListingCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ListingGridProps {
  listings: Listing[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function ListingGrid({
  listings,
  currentPage,
  totalPages,
  onPageChange,
}: ListingGridProps) {
  // Gera números de página para exibir
  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    const maxVisible = 5; // Máximo de números de página visíveis

    if (totalPages <= maxVisible) {
      // Se houver poucas páginas, mostra todas
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Sempre mostra primeira página
    pages.push(1);

    // Calcula range de páginas ao redor da atual
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    // Ajusta se estiver no início
    if (currentPage <= 3) {
      endPage = 4;
    }

    // Ajusta se estiver no fim
    if (currentPage >= totalPages - 2) {
      startPage = totalPages - 3;
    }

    // Adiciona ellipsis se necessário
    if (startPage > 2) {
      pages.push('ellipsis');
    }

    // Adiciona páginas do meio
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Adiciona ellipsis se necessário
    if (endPage < totalPages - 1) {
      pages.push('ellipsis');
    }

    // Sempre mostra última página
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div>
      {/* Grid de Listings */}
      {listings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        // Empty State
        <div className="text-center py-20">
          <div className="w-16 h-16 bg-[#F2F6F8] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-[#CBD5E1]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-[#11212D] font-hanken font-semibold text-xl mb-2">
            Nenhuma experiência encontrada
          </h3>
          <p className="text-[#777777] font-hanken text-base max-w-md mx-auto">
            Tente ajustar seus filtros ou faça uma nova pesquisa para encontrar mais
            opções.
          </p>
        </div>
      )}

      {/* Paginação */}
      {totalPages > 1 && listings.length > 0 && (
        <div className="flex items-center justify-center gap-2">
          {/* Previous Button */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#E2E8F0] text-[#11212D] hover:border-[#3FA08F] hover:text-[#3FA08F] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#E2E8F0] disabled:hover:text-[#11212D] transition-colors"
            aria-label="Página anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Page Numbers */}
          {pageNumbers.map((pageNum, index) => {
            if (pageNum === 'ellipsis') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="w-10 h-10 flex items-center justify-center text-[#777777] font-hanken"
                >
                  ...
                </span>
              );
            }

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg font-hanken font-medium text-sm transition-colors ${
                  currentPage === pageNum
                    ? 'bg-[#3FA08F] text-white'
                    : 'border border-[#E2E8F0] text-[#11212D] hover:border-[#3FA08F] hover:text-[#3FA08F]'
                }`}
                aria-label={`Página ${pageNum}`}
                aria-current={currentPage === pageNum ? 'page' : undefined}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#E2E8F0] text-[#11212D] hover:border-[#3FA08F] hover:text-[#3FA08F] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#E2E8F0] disabled:hover:text-[#11212D] transition-colors"
            aria-label="Próxima página"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
