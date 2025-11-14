'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { contactSocialSchema } from '@/lib/validations/submitListing';
import { useSubmitListingStore } from '@/lib/stores/submitListingStore';
import type { ContactSocialData } from '@/types/listing';

export function ContactSocialStep() {
  const { contactSocial, setContactSocial, goToNextStep, goToPreviousStep } = useSubmitListingStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSocialData>({
    resolver: zodResolver(contactSocialSchema),
    defaultValues: contactSocial || {
      phoneNumber: '',
      website: '',
      instagram: '',
      facebook: '',
    },
  });

  const onSubmit = (data: ContactSocialData) => {
    setContactSocial(data);
    goToNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Phone Number */}
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          {...register('phoneNumber')}
          type="tel"
          id="phoneNumber"
          placeholder="+351 XXX XXX XXX"
          className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent transition-all font-hanken"
        />
        {errors.phoneNumber && (
          <p className="mt-1 text-sm text-red-500 font-hanken">{errors.phoneNumber.message}</p>
        )}
      </div>

      {/* Website */}
      <div>
        <label htmlFor="website" className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Website <span className="text-[#A8A2A2] font-normal">(Optional)</span>
        </label>
        <input
          {...register('website')}
          type="url"
          id="website"
          placeholder="https://yourwebsite.com"
          className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent transition-all font-hanken"
        />
        {errors.website && (
          <p className="mt-1 text-sm text-red-500 font-hanken">{errors.website.message}</p>
        )}
      </div>

      {/* Social Media Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#11212D] font-hanken">
          Social Media <span className="text-sm font-normal text-[#A8A2A2]">(Optional)</span>
        </h3>

        {/* Instagram */}
        <div>
          <label htmlFor="instagram" className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
            Instagram
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A8A2A2] font-hanken">
              @
            </span>
            <input
              {...register('instagram')}
              type="text"
              id="instagram"
              placeholder="yourhandle"
              className="w-full pl-8 pr-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent transition-all font-hanken"
            />
          </div>
          {errors.instagram && (
            <p className="mt-1 text-sm text-red-500 font-hanken">{errors.instagram.message}</p>
          )}
        </div>

        {/* Facebook */}
        <div>
          <label htmlFor="facebook" className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
            Facebook
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A8A2A2] font-hanken">
              facebook.com/
            </span>
            <input
              {...register('facebook')}
              type="text"
              id="facebook"
              placeholder="yourpage"
              className="w-full pl-32 pr-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent transition-all font-hanken"
            />
          </div>
          {errors.facebook && (
            <p className="mt-1 text-sm text-red-500 font-hanken">{errors.facebook.message}</p>
          )}
        </div>
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
