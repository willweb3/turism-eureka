# Todos os 4 Steps - Código Completo

## STEP 2: Contact & Social
```tsx
// src/components/forms/steps/ContactSocialStep.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSocialSchema } from '@/lib/validations/submitListing';
import { useSubmitListingStore } from '@/lib/stores/submitListingStore';

export function ContactSocialStep() {
  const { setContactSocial, goToNextStep, goToPreviousStep, contactSocial } =
    useSubmitListingStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSocialSchema),
    defaultValues: contactSocial || {
      phone: '',
      email: '',
      website: '',
      facebook: '',
      instagram: '',
    },
  });

  const onSubmit = (data: any) => {
    setContactSocial(data);
    goToNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h3 className="text-lg font-lufga font-semibold text-[#11212D]">
        Contact Information
      </h3>

      {/* Phone */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <input
            type="text"
            value="+351"
            disabled
            className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg bg-gray-50 text-[#777777]"
          />
        </div>
        <div className="col-span-9">
          <input
            {...register('phone')}
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone.message as string}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Email Address
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder="Enter a single-line text for this experience"
          className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message as string}</p>
        )}
      </div>

      {/* Location Information */}
      <h3 className="text-lg font-lufga font-semibold text-[#11212D] mt-8">
        Location Information
      </h3>

      <div>
        <label className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Address
        </label>
        <input
          type="text"
          placeholder="Enter your address"
          className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Google Maps URL (optional)
        </label>
        <input
          type="url"
          placeholder="Paste Google Maps link here (with https://)"
          className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent"
        />
      </div>

      {/* Social Media & Website */}
      <h3 className="text-lg font-lufga font-semibold text-[#11212D] mt-8">
        Social Media & Website
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
            Instagram Handle
          </label>
          <input
            {...register('instagram')}
            type="text"
            placeholder="@yourusername"
            className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
            TikTok Handle
          </label>
          <input
            type="text"
            placeholder="@yourusername"
            className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
            YouTube Channel (optional)
          </label>
          <input
            type="text"
            placeholder="@yourusername"
            className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Facebook Page URL (optional)
        </label>
        <input
          {...register('facebook')}
          type="url"
          placeholder="https://facebook.com/yourpage"
          className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Website URL
        </label>
        <input
          {...register('website')}
          type="url"
          placeholder="https://yourwebsite.com"
          className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={goToPreviousStep}
          className="px-8 py-3 border-2 border-[#E0E0E0] rounded-lg font-hanken font-semibold text-[#11212D] hover:bg-gray-50 transition-colors"
        >
          Go Back
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-[#3CA997] text-white rounded-lg font-hanken font-semibold hover:bg-[#2D9178] transition-colors"
        >
          Next Step →
        </button>
      </div>
    </form>
  );
}
```

## STEP 3: Availability
```tsx
// src/components/forms/steps/AvailabilityStep.tsx
'use client';

import { useState } from 'react';
import { useSubmitListingStore } from '@/lib/stores/submitListingStore';

export function AvailabilityStep() {
  const { goToNextStep, goToPreviousStep } = useSubmitListingStore();
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save availability data
    goToNextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-lg font-lufga font-semibold text-[#11212D]">
        When is it free:
      </h3>

      {/* Time Selector */}
      <div>
        <select className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent">
          <option value="">Select a time</option>
          <option value="morning">Morning (8AM - 12PM)</option>
          <option value="afternoon">Afternoon (12PM - 6PM)</option>
          <option value="evening">Evening (6PM - 10PM)</option>
          <option value="allday">All Day</option>
        </select>
      </div>

      {/* Days Selection */}
      <div>
        <h3 className="text-lg font-lufga font-semibold text-[#11212D] mb-4">
          What days is available:
        </h3>

        <div className="space-y-3">
          {days.map((day) => (
            <label
              key={day}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedDays.includes(day)}
                onChange={() => toggleDay(day)}
                className="w-5 h-5 text-[#3CA997] border-[#E0E0E0] rounded focus:ring-[#3CA997] focus:ring-2"
              />
              <span className="text-[#11212D] font-hanken group-hover:text-[#3CA997] transition-colors">
                {day}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={goToPreviousStep}
          className="px-8 py-3 border-2 border-[#E0E0E0] rounded-lg font-hanken font-semibold text-[#11212D] hover:bg-gray-50 transition-colors"
        >
          Go Back
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-[#3CA997] text-white rounded-lg font-hanken font-semibold hover:bg-[#2D9178] transition-colors"
        >
          Next Step →
        </button>
      </div>
    </form>
  );
}
```

## STEP 4: Review & Submit
```tsx
// src/components/forms/steps/ReviewSubmitStep.tsx
'use client';

import { useSubmitListingStore } from '@/lib/stores/submitListingStore';
import { ISLAND_LABELS, CATEGORY_LABELS } from '@/types/listing';
import { MapPin, Star } from 'lucide-react';

export function ReviewSubmitStep() {
  const { basicInfo, contactSocial, goToPreviousStep, resetForm } =
    useSubmitListingStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Submit to Sharetribe API
    console.log('Submitting listing...', { basicInfo, contactSocial });

    // Show success message
    alert('Listing submitted successfully!');

    // Reset form
    resetForm();
  };

  if (!basicInfo) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <h3 className="text-lg font-lufga font-semibold text-[#11212D]">
        Review your Listing
      </h3>

      {/* Preview Card */}
      <div className="bg-white border-2 border-[#E0E0E0] rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* Image */}
          <div className="md:col-span-1">
            {basicInfo.images && basicInfo.images.length > 0 ? (
              <img
                src={URL.createObjectURL(basicInfo.images[0].file)}
                alt={basicInfo.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-lufga font-bold text-[#11212D] mb-2">
              {basicInfo.title}
            </h4>

            <div className="flex items-center gap-2 text-[#777777] mb-3">
              <MapPin size={16} />
              <span className="text-sm font-hanken">
                {ISLAND_LABELS[basicInfo.island]}, Azores – Portugal
              </span>
            </div>

            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className="text-gray-300"
                  fill="#E0E0E0"
                />
              ))}
              <span className="text-sm text-[#777777] ml-2 font-hanken">
                (No reviews yet)
              </span>
            </div>

            <p className="text-sm text-[#11212D] font-hanken line-clamp-3">
              {basicInfo.description}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      {contactSocial && (
        <div>
          <h3 className="text-lg font-lufga font-semibold text-[#11212D] mb-3">
            Contact Information
          </h3>
          <div className="bg-[#F5F5F5] rounded-lg p-4 space-y-2">
            <p className="text-sm font-hanken text-[#11212D]">
              <span className="font-semibold">Phone:</span> +351 {contactSocial.phone}
            </p>
            <p className="text-sm font-hanken text-[#11212D]">
              <span className="font-semibold">Email:</span> {contactSocial.email}
            </p>
          </div>
        </div>
      )}

      {/* Location Information */}
      <div>
        <h3 className="text-lg font-lufga font-semibold text-[#11212D] mb-3">
          Location Information
        </h3>
        <div className="bg-[#F5F5F5] rounded-lg p-4">
          <p className="text-sm font-hanken text-[#11212D]">
            <span className="font-semibold">Island:</span>{' '}
            {ISLAND_LABELS[basicInfo.island]}
          </p>
          <p className="text-sm font-hanken text-[#11212D] mt-1">
            <span className="font-semibold">Category:</span>{' '}
            {CATEGORY_LABELS[basicInfo.category]}
          </p>
        </div>
      </div>

      {/* Social Media & Website */}
      {contactSocial && (
        <div>
          <h3 className="text-lg font-lufga font-semibold text-[#11212D] mb-3">
            Social Media & Website
          </h3>
          <div className="bg-[#F5F5F5] rounded-lg p-4 space-y-2">
            {contactSocial.facebook && (
              <p className="text-sm font-hanken text-[#11212D]">
                <span className="font-semibold">Facebook:</span>{' '}
                {contactSocial.facebook}
              </p>
            )}
            {contactSocial.instagram && (
              <p className="text-sm font-hanken text-[#11212D]">
                <span className="font-semibold">Instagram:</span>{' '}
                {contactSocial.instagram}
              </p>
            )}
            {contactSocial.website && (
              <p className="text-sm font-hanken text-[#11212D]">
                <span className="font-semibold">Website:</span> {contactSocial.website}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={goToPreviousStep}
          className="px-8 py-3 border-2 border-[#E0E0E0] rounded-lg font-hanken font-semibold text-[#11212D] hover:bg-gray-50 transition-colors"
        >
          Go Back
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-[#3CA997] text-white rounded-lg font-hanken font-semibold hover:bg-[#2D9178] transition-colors"
        >
          Submit Listing
        </button>
      </div>
    </form>
  );
}
```

## PÁGINA ATUALIZADA - Renderiza todos os 4 Steps
```tsx
// src/app/submit-listing/page.tsx (ATUALIZADO)
'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StepIndicator } from '@/components/forms/StepIndicator';
import { WhySubmitCard } from '@/components/ui/WhySubmitCard';
import { BasicInformationStep } from '@/components/forms/steps/BasicInformationStep';
import { ContactSocialStep } from '@/components/forms/steps/ContactSocialStep';
import { AvailabilityStep } from '@/components/forms/steps/AvailabilityStep';
import { ReviewSubmitStep } from '@/components/forms/steps/ReviewSubmitStep';
import { useSubmitListingStore } from '@/lib/stores/submitListingStore';

const STEPS = [
  { number: 1, label: 'Basic Information' },
  { number: 2, label: 'Contact & Social' },
  { number: 3, label: 'Availability' },
  { number: 4, label: 'Review & Submit' },
];

const STEP_TITLES = {
  1: 'Basic Information',
  2: 'Contact & Social',
  3: 'Availability',
  4: 'Review & Submit',
};

export default function SubmitListingPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const { currentStep } = useSubmitListingStore();

  if (!isAuthenticated) {
    router.push('/auth?tab=login');
    return null;
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInformationStep />;
      case 2:
        return <ContactSocialStep />;
      case 3:
        return <AvailabilityStep />;
      case 4:
        return <ReviewSubmitStep />;
      default:
        return <BasicInformationStep />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      {/* Hero Section */}
      <section className="bg-white pt-32 pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-lufga font-bold text-[#11212D] mb-4">
              Submit Your Listing
            </h1>
            <p className="text-lg text-[#777777] font-hanken">
              Share your authentic Azorean experiences with travelers from around the world
            </p>
          </div>
        </div>
      </section>

      {/* Stepper */}
      <section className="bg-white pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <StepIndicator currentStep={currentStep} steps={STEPS} />
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32">
                <WhySubmitCard />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-lufga font-semibold text-[#11212D] mb-6">
                  {STEP_TITLES[currentStep as keyof typeof STEP_TITLES]}
                </h2>
                {renderStep()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
```
