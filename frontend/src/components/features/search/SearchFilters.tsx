'use client';

import { useState } from 'react';
import {
  Calendar,
  MapPin,
  Package,
  DollarSign,
  Star,
  Filter,
  X,
} from 'lucide-react';
// import { SearchFilters as SearchFiltersType } from '@/types/listing';

// Temporary type definition
type SearchFiltersType = {
  types?: string[];
  islands?: string[];
  minPrice?: number;
  maxPrice?: number;
  [key: string]: any;
};

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: SearchFiltersType) => void;
  resultCount?: number;
}

export function SearchFilters({
  filters,
  onFiltersChange,
  resultCount = 0,
}: SearchFiltersProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const islands = [
    'São Miguel',
    'Terceira',
    'Faial',
    'Pico',
    'São Jorge',
    'Graciosa',
    'Santa Maria',
    'Flores',
    'Corvo',
  ];

  const experienceTypes = [
    { value: 'adventure', label: 'Aventura' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'gastronomy', label: 'Gastronomia' },
    { value: 'nature', label: 'Natureza' },
    { value: 'wellness', label: 'Bem-estar' },
  ];

  const handleIslandChange = (island: string) => {
    onFiltersChange({ ...filters, island: island as any });
  };

  const handleTypeToggle = (type: string) => {
    const currentTypes = filters.types || [];
    const newTypes = currentTypes.includes(type as any)
      ? currentTypes.filter((t) => t !== type)
      : [...currentTypes, type as any];
    onFiltersChange({ ...filters, types: newTypes });
  };

  const handlePriceChange = (min?: number, max?: number) => {
    onFiltersChange({ ...filters, minPrice: min, maxPrice: max });
  };

  const handleRatingChange = (rating?: number) => {
    onFiltersChange({ ...filters, minRating: rating });
  };

  const handleInstantBookChange = (instantBook: boolean) => {
    onFiltersChange({ ...filters, instantBook });
  };

  const clearFilters = () => {
    onFiltersChange({
      sortBy: 'relevance',
      page: 1,
      limit: 9,
    });
  };

  const hasActiveFilters =
    filters.island ||
    (filters.types && filters.types.length > 0) ||
    filters.minPrice ||
    filters.maxPrice ||
    filters.minRating ||
    filters.instantBook;

  return (
    <>
      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="w-full h-12 px-6 bg-white border border-[#E2E8F0] rounded-lg flex items-center justify-between hover:border-[#3FA08F] transition-colors"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-[#11212D]" />
            <span className="text-[#11212D] font-hanken font-medium">
              Filtros
            </span>
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-[#FF6B35] rounded-full"></span>
            )}
          </div>
          <span className="text-[#777777] font-hanken text-sm">
            {resultCount} resultados
          </span>
        </button>
      </div>

      {/* Filters Container - Desktop always visible, Mobile conditional */}
      <div
        className={`${
          showMobileFilters ? 'block' : 'hidden'
        } lg:block bg-white rounded-lg border border-[#E2E8F0] overflow-hidden`}
      >
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-[#E2E8F0]">
          <h3 className="text-[#11212D] font-hanken font-semibold text-lg">
            Filtros
          </h3>
          <button
            onClick={() => setShowMobileFilters(false)}
            className="w-8 h-8 flex items-center justify-center hover:bg-[#F2F6F8] rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-[#11212D]" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Ilha */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[#3FA08F]" />
              <h4 className="text-[#11212D] font-hanken font-semibold text-sm">
                Ilha
              </h4>
            </div>
            <select
              value={filters.island || 'all'}
              onChange={(e) => handleIslandChange(e.target.value)}
              className="w-full h-10 px-3 bg-[#F2F6F8] border border-[#E2E8F0] rounded-lg text-[#11212D] font-hanken text-sm focus:outline-none focus:ring-2 focus:ring-[#3FA08F]/20 focus:border-[#3FA08F]"
            >
              <option value="all">Todas as ilhas</option>
              {islands.map((island) => (
                <option key={island} value={island}>
                  {island}
                </option>
              ))}
            </select>
          </div>

          {/* Tipo de Experiência */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-4 h-4 text-[#3FA08F]" />
              <h4 className="text-[#11212D] font-hanken font-semibold text-sm">
                Tipo de Experiência
              </h4>
            </div>
            <div className="space-y-2">
              {experienceTypes.map((type) => (
                <label
                  key={type.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.types?.includes(type.value as any) || false}
                    onChange={() => handleTypeToggle(type.value)}
                    className="w-4 h-4 rounded border-[#CBD5E1] text-[#3FA08F] focus:ring-2 focus:ring-[#3FA08F]/20"
                  />
                  <span className="text-[#11212D] font-hanken text-sm group-hover:text-[#3FA08F] transition-colors">
                    {type.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Preço */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-4 h-4 text-[#3FA08F]" />
              <h4 className="text-[#11212D] font-hanken font-semibold text-sm">
                Preço
              </h4>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#777777] font-hanken text-xs mb-1">
                    Mínimo
                  </label>
                  <input
                    type="number"
                    value={filters.minPrice || ''}
                    onChange={(e) =>
                      handlePriceChange(
                        e.target.value ? Number(e.target.value) : undefined,
                        filters.maxPrice
                      )
                    }
                    placeholder="0"
                    className="w-full h-10 px-3 bg-[#F2F6F8] border border-[#E2E8F0] rounded-lg text-[#11212D] font-hanken text-sm focus:outline-none focus:ring-2 focus:ring-[#3FA08F]/20 focus:border-[#3FA08F]"
                  />
                </div>
                <div>
                  <label className="block text-[#777777] font-hanken text-xs mb-1">
                    Máximo
                  </label>
                  <input
                    type="number"
                    value={filters.maxPrice || ''}
                    onChange={(e) =>
                      handlePriceChange(
                        filters.minPrice,
                        e.target.value ? Number(e.target.value) : undefined
                      )
                    }
                    placeholder="500"
                    className="w-full h-10 px-3 bg-[#F2F6F8] border border-[#E2E8F0] rounded-lg text-[#11212D] font-hanken text-sm focus:outline-none focus:ring-2 focus:ring-[#3FA08F]/20 focus:border-[#3FA08F]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Avaliação */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-4 h-4 text-[#3FA08F]" />
              <h4 className="text-[#11212D] font-hanken font-semibold text-sm">
                Avaliação Mínima
              </h4>
            </div>
            <div className="space-y-2">
              {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.minRating === rating}
                    onChange={() => handleRatingChange(rating)}
                    className="w-4 h-4 border-[#CBD5E1] text-[#3FA08F] focus:ring-2 focus:ring-[#3FA08F]/20"
                  />
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                    <span className="text-[#11212D] font-hanken text-sm group-hover:text-[#3FA08F] transition-colors">
                      {rating}+
                    </span>
                  </div>
                </label>
              ))}
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="rating"
                  checked={!filters.minRating}
                  onChange={() => handleRatingChange(undefined)}
                  className="w-4 h-4 border-[#CBD5E1] text-[#3FA08F] focus:ring-2 focus:ring-[#3FA08F]/20"
                />
                <span className="text-[#11212D] font-hanken text-sm group-hover:text-[#3FA08F] transition-colors">
                  Todas
                </span>
              </label>
            </div>
          </div>

          {/* Reserva Instantânea */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.instantBook || false}
                onChange={(e) => handleInstantBookChange(e.target.checked)}
                className="w-4 h-4 rounded border-[#CBD5E1] text-[#3FA08F] focus:ring-2 focus:ring-[#3FA08F]/20"
              />
              <div>
                <span className="text-[#11212D] font-hanken text-sm font-semibold block group-hover:text-[#3FA08F] transition-colors">
                  Reserva Instantânea
                </span>
                <span className="text-[#777777] font-hanken text-xs">
                  Reserve sem aguardar aprovação
                </span>
              </div>
            </label>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="w-full h-10 px-4 bg-[#F2F6F8] hover:bg-[#E2E8F0] rounded-lg text-[#11212D] font-hanken font-medium text-sm transition-colors"
            >
              Limpar Filtros
            </button>
          )}
        </div>
      </div>
    </>
  );
}
