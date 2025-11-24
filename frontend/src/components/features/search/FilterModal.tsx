'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

// Temporary type definition - to be moved to @/types/listing
interface SearchFilters {
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
  [key: string]: any;
}

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

export function FilterModal({
  isOpen,
  onClose,
  filters,
  onFiltersChange,
}: FilterModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Custom Radio Button Component
  const RadioButton = ({ checked }: { checked: boolean }) => (
    <div className="relative flex items-center justify-center w-[19.43px] h-[19.43px]">
      {checked ? (
        <>
          <div className="absolute w-[12.49px] h-[12.49px] bg-[#3CA997] rounded-full" />
          <div className="absolute w-[19.43px] h-[19.43px] rounded-full border-[1.21px] border-[#3CA997]" />
        </>
      ) : (
        <div className="w-[19.43px] h-[19.43px] bg-white rounded-full border-[0.69px] border-[rgba(0,0,0,0.3)]" />
      )}
    </div>
  );

  const islands = [
    'São Miguel',
    'Terceira',
    'Graciosa',
    'Faial',
    'Pico',
    'Santa Maria',
    'São Jorge',
    'Flores',
    'Corvo',
  ];

  const priceRanges = [
    { label: 'Under $25', value: 'under_25' },
    { label: '$25 - $50', value: '25_50' },
    { label: '$50 - $100', value: '50_100' },
    { label: 'Over $100', value: 'over_100' },
  ];

  const categories = [
    { label: 'All Categories', value: 'all' },
    { label: 'Florest', value: 'forest' },
    { label: 'City', value: 'city' },
    { label: 'Mountain', value: 'mountain' },
    { label: 'Gastronomy', value: 'gastronomy' },
    { label: 'Beach', value: 'beach' },
    { label: 'Culture', value: 'culture' },
    { label: 'City', value: 'city_2' },
  ];

  const amenities = [
    { label: 'Delivery', value: 'delivery' },
    { label: 'Insurance', value: 'insurance' },
    { label: '24/7 Support', value: 'support' },
  ];

  const ratings = [
    { label: '3+ stars', value: 3 },
    { label: '4+ stars', value: 4 },
    { label: '5 stars', value: 5 },
  ];

  const handleIslandChange = (island: string) => {
    const currentIslands = filters.island ? [filters.island] : [];
    const isSelected = currentIslands.includes(island);

    if (isSelected) {
      onFiltersChange({ ...filters, island: undefined });
    } else {
      onFiltersChange({ ...filters, island: island as any });
    }
  };

  const handlePriceRangeChange = (range: string) => {
    let minPrice: number | undefined;
    let maxPrice: number | undefined;

    switch (range) {
      case 'under_25':
        maxPrice = 25;
        break;
      case '25_50':
        minPrice = 25;
        maxPrice = 50;
        break;
      case '50_100':
        minPrice = 50;
        maxPrice = 100;
        break;
      case 'over_100':
        minPrice = 100;
        break;
    }

    onFiltersChange({ ...filters, minPrice, maxPrice });
  };

  const handleCategoryChange = (category: string) => {
    // Category filter logic here
  };

  const handleRatingChange = (rating: number) => {
    onFiltersChange({ ...filters, minRating: rating });
  };

  const clearFilters = () => {
    onFiltersChange({
      sortBy: 'relevance',
      page: 1,
      limit: 9,
    });
  };

  const getCurrentPriceRange = () => {
    const { minPrice, maxPrice } = filters;
    if (!minPrice && maxPrice === 25) return 'under_25';
    if (minPrice === 25 && maxPrice === 50) return '25_50';
    if (minPrice === 50 && maxPrice === 100) return '50_100';
    if (minPrice === 100 && !maxPrice) return 'over_100';
    return '';
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-full max-w-[415px] bg-white shadow-[0px_5.55px_55.52px_rgba(0,0,0,0.07)] z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        {/* Content */}
        <div className="p-[33.31px] flex flex-col gap-[24.98px]">
          {/* Header */}
          <div className="flex items-center gap-[16.66px]">
            <button
              onClick={onClose}
              className="w-[33.31px] h-[33.31px] overflow-hidden flex items-center justify-center"
            >
              <X className="w-5 h-5 text-[#11212D]" />
            </button>
            <h2 className="text-[#11212D] font-hanken font-semibold text-[27.76px] leading-[38.86px]">
              Filters
            </h2>
          </div>

          {/* Sections Container */}
          <div className="flex flex-col gap-[22.21px]">
            {/* Locations */}
            <div className="flex flex-col gap-[11.10px]">
              <h3 className="text-[#11212D] font-hanken font-semibold text-[22.21px] leading-[33.31px]">
                Locations
              </h3>
              <div className="flex flex-col gap-[5.55px]">
                {islands.map((island) => (
                  <label
                    key={island}
                    className="flex items-center gap-[8.33px] cursor-pointer"
                    onClick={() => handleIslandChange(island)}
                  >
                    <RadioButton checked={filters.island === island} />
                    <span className="flex-1 text-[rgba(17,33,45,0.7)] font-hanken font-light text-[19.43px]">
                      {island}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="pb-[22.21px] border-b border-[rgba(125,125,125,0.2)] flex flex-col gap-[11.10px]">
              <h3 className="text-[#11212D] font-hanken font-semibold text-[22.21px] leading-[33.31px]">
                Price Range
              </h3>
              <div className="flex flex-col gap-[5.55px]">
                {priceRanges.map((range) => (
                  <label
                    key={range.value}
                    className="flex items-center gap-[8.33px] cursor-pointer"
                    onClick={() => handlePriceRangeChange(range.value)}
                  >
                    <RadioButton checked={getCurrentPriceRange() === range.value} />
                    <span className="flex-1 text-[rgba(17,33,45,0.7)] font-hanken font-light text-[19.43px]">
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="pb-[22.21px] border-b border-[rgba(125,125,125,0.2)] flex flex-col gap-[11.10px]">
              <h3 className="text-[#11212D] font-hanken font-semibold text-[22.21px] leading-[33.31px]">
                Category
              </h3>
              <div className="flex flex-col gap-[5.55px]">
                {categories.map((category) => (
                  <label
                    key={category.value}
                    className="flex items-center gap-[8.33px] cursor-pointer"
                    onClick={() => handleCategoryChange(category.value)}
                  >
                    <RadioButton checked={category.value === 'all'} />
                    <span className="flex-1 text-[rgba(17,33,45,0.7)] font-hanken font-light text-[19.43px]">
                      {category.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="pb-[22.21px] border-b border-[rgba(125,125,125,0.2)] flex flex-col gap-[11.10px]">
              <h3 className="text-[#11212D] font-hanken font-semibold text-[22.21px] leading-[33.31px]">
                Amenities
              </h3>
              <div className="flex flex-col gap-[5.55px]">
                {amenities.map((amenity, index) => (
                  <label
                    key={amenity.value}
                    className="flex items-center gap-[8.33px] cursor-pointer"
                  >
                    <RadioButton checked={index === 2} />
                    <span className="flex-1 text-[rgba(17,33,45,0.7)] font-hanken font-light text-[19.43px]">
                      {amenity.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="pb-[22.21px] border-b border-[rgba(125,125,125,0.2)] flex flex-col gap-[11.10px]">
              <h3 className="text-[#11212D] font-hanken font-semibold text-[22.21px] leading-[33.31px]">
                Rating
              </h3>
              <div className="flex flex-col gap-[5.55px]">
                {ratings.map((rating) => (
                  <label
                    key={rating.value}
                    className="flex items-center gap-[8.33px] cursor-pointer"
                    onClick={() => handleRatingChange(rating.value)}
                  >
                    <RadioButton checked={filters.minRating === rating.value} />
                    <span className="flex-1 text-[rgba(17,33,45,0.7)] font-hanken font-light text-[19.43px]">
                      {rating.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex items-start gap-[11.10px] h-[55.52px]">
            <button
              onClick={clearFilters}
              className="w-[119.36px] h-full px-[33.31px] py-[16.66px] rounded-[56.86px] border-[1.39px] border-[#BEBEBE] flex items-center justify-center gap-[13.88px] overflow-hidden hover:bg-[#F2F6F8] transition-colors"
            >
              <span className="text-[#7D7D7D] font-hanken font-normal text-[19.43px] leading-[29.84px]">
                Clear
              </span>
            </button>
            <button
              onClick={onClose}
              className="flex-1 h-full px-[33.31px] py-[16.66px] bg-[#52C6BB] hover:bg-[#3FA08F] rounded-[56.86px] flex items-center justify-center gap-[13.88px] overflow-hidden transition-colors"
            >
              <span className="text-black font-hanken font-medium text-[19.43px] leading-[29.84px]">
                Apply
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
