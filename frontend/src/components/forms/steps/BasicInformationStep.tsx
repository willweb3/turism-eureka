'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronRight } from 'lucide-react';
import { basicInformationSchema } from '@/lib/validations/submitListing';
import { FileUpload } from '@/components/ui/FileUpload';
import { useSubmitListingStore } from '@/lib/stores/submitListingStore';
import type { BasicInformationData, AzoresIsland, ListingCategory } from '@/types/listing';

const islands: { value: AzoresIsland; label: string }[] = [
  { value: 'sao-miguel', label: 'São Miguel' },
  { value: 'terceira', label: 'Terceira' },
  { value: 'pico', label: 'Pico' },
  { value: 'faial', label: 'Faial' },
  { value: 'sao-jorge', label: 'São Jorge' },
  { value: 'graciosa', label: 'Graciosa' },
  { value: 'santa-maria', label: 'Santa Maria' },
  { value: 'corvo', label: 'Corvo' },
  { value: 'flores', label: 'Flores' },
];

const categories: { value: ListingCategory; label: string; description: string }[] = [
  { value: 'boat-tours', label: 'Boat Tours', description: 'Ocean adventures' },
  { value: 'wine-tasting', label: 'Wine Tasting', description: 'Local vineyards' },
  { value: 'hiking', label: 'Hiking', description: 'Nature trails' },
  { value: 'cultural-events', label: 'Cultural Events', description: 'Local traditions' },
];

export function BasicInformationStep() {
  const { basicInfo, setBasicInfo, goToNextStep } = useSubmitListingStore();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BasicInformationData>({
    resolver: zodResolver(basicInformationSchema) as any,
    defaultValues: basicInfo || {
      title: '',
      description: '',
      island: undefined,
      category: undefined,
      images: [],
    },
  });

  const images = watch('images') || [];

  const onSubmit = (data: BasicInformationData) => {
    setBasicInfo(data);
    goToNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Listing Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Listing Title
        </label>
        <input
          {...register('title')}
          type="text"
          id="title"
          placeholder="Enter a catchy title for this experience"
          className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent transition-all font-hanken text-sm"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500 font-hanken">{errors.title.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Description
        </label>
        <textarea
          {...register('description')}
          id="description"
          rows={4}
          placeholder="Describe your experience in detail"
          className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent transition-all font-hanken resize-none text-sm"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-500 font-hanken">{errors.description.message}</p>
        )}
      </div>

      {/* Island and Category Selection - Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Island Selection */}
        <div>
          <label htmlFor="island" className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
            Select Island
          </label>
          <select
            {...register('island')}
            id="island"
            className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent transition-all font-hanken text-sm text-[#A8A2A2]"
          >
            <option value="">Select Island</option>
            {islands.map((island) => (
              <option key={island.value} value={island.value} className="text-[#11212D]">
                {island.label}
              </option>
            ))}
          </select>
          {errors.island && (
            <p className="mt-1 text-sm text-red-500 font-hanken">{errors.island.message}</p>
          )}
        </div>

        {/* Category Selection */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
            Select Category
          </label>
          <select
            {...register('category')}
            id="category"
            className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent transition-all font-hanken text-sm text-[#A8A2A2]"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value} className="text-[#11212D]">
                {category.label}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-red-500 font-hanken">{errors.category.message}</p>
          )}
        </div>
      </div>

      {/* Photo Upload */}
      <div>
        <label className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Photo Upload
        </label>
        <FileUpload
          images={images}
          onChange={(newImages) => setValue('images', newImages, { shouldValidate: true })}
          maxFiles={4}
          error={errors.images?.message}
        />
      </div>

      {/* Next Step Button */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="px-8 py-2.5 bg-[#3CA997] text-white rounded-lg font-hanken font-semibold hover:bg-[#2E9A84] transition-all"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
