'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { availabilitySchema } from '@/lib/validations/submitListing';
import { useSubmitListingStore } from '@/lib/stores/submitListingStore';
import type { AvailabilityData } from '@/types/listing';

const durationOptions = [
  { value: '1-hour', label: '1 hour' },
  { value: '2-hours', label: '2 hours' },
  { value: '3-hours', label: '3 hours' },
  { value: '4-hours', label: '4 hours' },
  { value: 'half-day', label: 'Half day (4-6 hours)' },
  { value: 'full-day', label: 'Full day (6-8 hours)' },
  { value: 'multi-day', label: 'Multi-day' },
];

export function AvailabilityStep() {
  const { availability, setAvailability, goToNextStep, goToPreviousStep } = useSubmitListingStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AvailabilityData>({
    resolver: zodResolver(availabilitySchema),
    defaultValues: availability || {
      pricePerPerson: undefined,
      duration: undefined,
      maxGroupSize: undefined,
      availability: 'year-round',
    },
  });

  const onSubmit = (data: AvailabilityData) => {
    setAvailability(data);
    goToNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Price */}
      <div>
        <label htmlFor="pricePerPerson" className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Price per Person <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A8A2A2] font-hanken text-lg">
            €
          </span>
          <input
            {...register('pricePerPerson', { valueAsNumber: true })}
            type="number"
            id="pricePerPerson"
            step="0.01"
            min="0"
            placeholder="0.00"
            className="w-full pl-10 pr-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent transition-all font-hanken"
          />
        </div>
        {errors.pricePerPerson && (
          <p className="mt-1 text-sm text-red-500 font-hanken">{errors.pricePerPerson.message}</p>
        )}
      </div>

      {/* Duration */}
      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Duration <span className="text-red-500">*</span>
        </label>
        <select
          {...register('duration')}
          id="duration"
          className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent transition-all font-hanken"
        >
          <option value="">Select duration</option>
          {durationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.duration && (
          <p className="mt-1 text-sm text-red-500 font-hanken">{errors.duration.message}</p>
        )}
      </div>

      {/* Max Group Size */}
      <div>
        <label htmlFor="maxGroupSize" className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Maximum Group Size <span className="text-red-500">*</span>
        </label>
        <input
          {...register('maxGroupSize', { valueAsNumber: true })}
          type="number"
          id="maxGroupSize"
          min="1"
          placeholder="e.g., 10"
          className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent transition-all font-hanken"
        />
        {errors.maxGroupSize && (
          <p className="mt-1 text-sm text-red-500 font-hanken">{errors.maxGroupSize.message}</p>
        )}
      </div>

      {/* Availability */}
      <div>
        <label className="block text-sm font-medium text-[#11212D] font-hanken mb-3">
          When is this experience available? <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          <label
            className={`
              relative flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all
              ${watch('availability') === 'year-round'
                ? 'border-[#3CA997] bg-[#D7F4F0]'
                : 'border-[#E0E0E0] hover:border-[#3CA997]/50'
              }
            `}
          >
            <div>
              <p className="font-hanken font-semibold text-[#11212D]">Year-round</p>
              <p className="text-sm text-[#A8A2A2] font-hanken">Available throughout the year</p>
            </div>
            <input
              {...register('availability')}
              type="radio"
              value="year-round"
              className="sr-only"
            />
            {watch('availability') === 'year-round' && (
              <div className="w-5 h-5 rounded-full bg-[#3CA997] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            )}
          </label>

          <label
            className={`
              relative flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all
              ${watch('availability') === 'seasonal'
                ? 'border-[#3CA997] bg-[#D7F4F0]'
                : 'border-[#E0E0E0] hover:border-[#3CA997]/50'
              }
            `}
          >
            <div>
              <p className="font-hanken font-semibold text-[#11212D]">Seasonal</p>
              <p className="text-sm text-[#A8A2A2] font-hanken">Available during specific seasons</p>
            </div>
            <input
              {...register('availability')}
              type="radio"
              value="seasonal"
              className="sr-only"
            />
            {watch('availability') === 'seasonal' && (
              <div className="w-5 h-5 rounded-full bg-[#3CA997] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            )}
          </label>

          <label
            className={`
              relative flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all
              ${watch('availability') === 'on-demand'
                ? 'border-[#3CA997] bg-[#D7F4F0]'
                : 'border-[#E0E0E0] hover:border-[#3CA997]/50'
              }
            `}
          >
            <div>
              <p className="font-hanken font-semibold text-[#11212D]">On-demand</p>
              <p className="text-sm text-[#A8A2A2] font-hanken">Available by booking request</p>
            </div>
            <input
              {...register('availability')}
              type="radio"
              value="on-demand"
              className="sr-only"
            />
            {watch('availability') === 'on-demand' && (
              <div className="w-5 h-5 rounded-full bg-[#3CA997] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            )}
          </label>
        </div>
        {errors.availability && (
          <p className="mt-1 text-sm text-red-500 font-hanken">{errors.availability.message}</p>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={goToPreviousStep}
          className="px-8 py-3 border-2 border-[#E0E0E0] text-[#11212D] rounded-lg font-hanken font-semibold hover:border-[#3CA997] hover:text-[#3CA997] transition-all flex items-center gap-2"
        >
          <ChevronLeft size={20} />
          Back
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-[#3CA997] text-white rounded-lg font-hanken font-semibold hover:bg-[#2E9A84] transition-all flex items-center gap-2"
        >
          Continue
          <ChevronRight size={20} />
        </button>
      </div>
    </form>
  );
}
