'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { FilterState, ProductCategory, Island } from '@/types/products';

interface ProductFiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export function ProductFiltersModal({
  isOpen,
  onClose,
  filters,
  onFiltersChange,
}: ProductFiltersModalProps) {
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
    'Pico',
    'São Miguel',
    'Terceira',
    'Faial',
    'São Jorge',
    'Graciosa',
    'Santa Maria',
    'Flores',
    'Corvo',
  ];

  const priceRanges = [
    { label: 'Under €10', min: undefined, max: 10 },
    { label: '€10 - €25', min: 10, max: 25 },
    { label: '€25 - €50', min: 25, max: 50 },
    { label: '€50 - €100', min: 50, max: 100 },
    { label: 'Over €100', min: 100, max: undefined },
  ];

  const categories: { label: string; value: ProductCategory | 'all' }[] = [
    { label: 'All Products', value: 'all' },
    { label: 'Wine', value: 'wine' },
    { label: 'Cheese', value: 'cheese' },
    { label: 'Jams', value: 'jams' },
    { label: 'Packages', value: 'packages' },
  ];

  const ratings = [
    { label: '3+ stars', value: 3 },
    { label: '4+ stars', value: 4 },
    { label: '4.5+ stars', value: 4.5 },
    { label: '5 stars', value: 5 },
  ];

  const handleIslandChange = (island: string) => {
    if (filters.island === island) {
      onFiltersChange({ ...filters, island: 'all' });
    } else {
      onFiltersChange({ ...filters, island: island as Island });
    }
  };

  const handlePriceRangeChange = (min?: number, max?: number) => {
    onFiltersChange({
      ...filters,
      priceRange: [min || 0, max || 1000],
    });
  };

  const handleCategoryChange = (category: ProductCategory | 'all') => {
    onFiltersChange({ ...filters, category });
  };

  const handleRatingChange = (rating: number) => {
    onFiltersChange({ ...filters, minRating: rating });
  };

  const clearFilters = () => {
    onFiltersChange({
      category: 'all',
      sortBy: 'recommended',
      priceRange: [0, 1000],
      minRating: 0,
      island: 'all',
      inStock: false,
    });
  };

  const getCurrentPriceRange = () => {
    const [min, max] = filters.priceRange;
    if (!min && max === 10) return '0-10';
    if (min === 10 && max === 25) return '10-25';
    if (min === 25 && max === 50) return '25-50';
    if (min === 50 && max === 100) return '50-100';
    if (min === 100) return '100+';
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
                    <RadioButton checked={filters.category === category.value} />
                    <span className="flex-1 text-[rgba(17,33,45,0.7)] font-hanken font-light text-[19.43px]">
                      {category.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="pb-[22.21px] border-b border-[rgba(125,125,125,0.2)] flex flex-col gap-[11.10px]">
              <h3 className="text-[#11212D] font-hanken font-semibold text-[22.21px] leading-[33.31px]">
                Island
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
                {priceRanges.map((range) => {
                  const rangeKey = `${range.min || 0}-${range.max || 1000}`;
                  const currentKey = `${filters.priceRange[0]}-${filters.priceRange[1]}`;
                  return (
                    <label
                      key={rangeKey}
                      className="flex items-center gap-[8.33px] cursor-pointer"
                      onClick={() => handlePriceRangeChange(range.min, range.max)}
                    >
                      <RadioButton checked={rangeKey === currentKey} />
                      <span className="flex-1 text-[rgba(17,33,45,0.7)] font-hanken font-light text-[19.43px]">
                        {range.label}
                      </span>
                    </label>
                  );
                })}
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

            {/* In Stock */}
            <div className="pb-[22.21px] border-b border-[rgba(125,125,125,0.2)] flex flex-col gap-[11.10px]">
              <h3 className="text-[#11212D] font-hanken font-semibold text-[22.21px] leading-[33.31px]">
                Availability
              </h3>
              <label
                className="flex items-center gap-[8.33px] cursor-pointer"
                onClick={() => onFiltersChange({ ...filters, inStock: !filters.inStock })}
              >
                <RadioButton checked={filters.inStock} />
                <span className="flex-1 text-[rgba(17,33,45,0.7)] font-hanken font-light text-[19.43px]">
                  In Stock Only
                </span>
              </label>
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
