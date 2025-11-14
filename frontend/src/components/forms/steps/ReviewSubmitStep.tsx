'use client';

import { useState } from 'react';
import { ChevronLeft, Check, MapPin, Phone, Globe, Instagram, Facebook, Clock, Users, Euro } from 'lucide-react';
import { useSubmitListingStore } from '@/lib/stores/submitListingStore';
import { useRouter } from 'next/navigation';

export function ReviewSubmitStep() {
  const router = useRouter();
  const { basicInfo, contactSocial, availability, goToPreviousStep, resetForm } = useSubmitListingStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // TODO: Integrate with Sharetribe Listings API
    // For now, simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Submitting listing:', {
      basicInfo,
      contactSocial,
      availability,
    });

    // Reset form and redirect
    resetForm();
    router.push('/dashboard?success=listing-submitted');
  };

  if (!basicInfo || !contactSocial || !availability) {
    return (
      <div className="text-center py-12">
        <p className="text-[#A8A2A2] font-hanken">Please complete all previous steps first.</p>
      </div>
    );
  }

  const categoryLabels: Record<string, string> = {
    'boat-tours': 'Boat Tours',
    'wine-tasting': 'Wine Tasting',
    'hiking': 'Hiking',
    'cultural-events': 'Cultural Events',
  };

  const islandLabels: Record<string, string> = {
    'sao-miguel': 'São Miguel',
    'terceira': 'Terceira',
    'pico': 'Pico',
    'faial': 'Faial',
    'sao-jorge': 'São Jorge',
    'graciosa': 'Graciosa',
    'santa-maria': 'Santa Maria',
    'corvo': 'Corvo',
    'flores': 'Flores',
  };

  const durationLabels: Record<string, string> = {
    '1-hour': '1 hour',
    '2-hours': '2 hours',
    '3-hours': '3 hours',
    '4-hours': '4 hours',
    'half-day': 'Half day',
    'full-day': 'Full day',
    'multi-day': 'Multi-day',
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-[#11212D] font-lufga mb-2">Review Your Listing</h2>
        <p className="text-[#A8A2A2] font-hanken">
          Please review all the information before submitting your listing
        </p>
      </div>

      {/* Basic Information Section */}
      <div className="bg-[#F8F9FA] rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold text-[#11212D] font-hanken">Basic Information</h3>
        
        <div>
          <p className="text-sm text-[#A8A2A2] font-hanken mb-1">Title</p>
          <p className="text-[#11212D] font-hanken font-medium">{basicInfo.title}</p>
        </div>

        <div>
          <p className="text-sm text-[#A8A2A2] font-hanken mb-1">Description</p>
          <p className="text-[#11212D] font-hanken">{basicInfo.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-[#A8A2A2] font-hanken mb-1 flex items-center gap-1">
              <MapPin size={14} /> Island
            </p>
            <p className="text-[#11212D] font-hanken font-medium">
              {islandLabels[basicInfo.island]}
            </p>
          </div>
          <div>
            <p className="text-sm text-[#A8A2A2] font-hanken mb-1">Category</p>
            <p className="text-[#11212D] font-hanken font-medium">
              {categoryLabels[basicInfo.category]}
            </p>
          </div>
        </div>

        {basicInfo.images.length > 0 && (
          <div>
            <p className="text-sm text-[#A8A2A2] font-hanken mb-2">Photos ({basicInfo.images.length})</p>
            <div className="grid grid-cols-4 gap-2">
              {basicInfo.images.map((image) => (
                <div key={image.id} className="aspect-video rounded-lg overflow-hidden">
                  <img src={image.url} alt="Preview" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Contact & Social Section */}
      <div className="bg-[#F8F9FA] rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold text-[#11212D] font-hanken">Contact & Social</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-[#A8A2A2] font-hanken mb-1 flex items-center gap-1">
              <Phone size={14} /> Phone
            </p>
            <p className="text-[#11212D] font-hanken font-medium">{contactSocial.phoneNumber}</p>
          </div>
          {contactSocial.website && (
            <div>
              <p className="text-sm text-[#A8A2A2] font-hanken mb-1 flex items-center gap-1">
                <Globe size={14} /> Website
              </p>
              <p className="text-[#11212D] font-hanken font-medium">{contactSocial.website}</p>
            </div>
          )}
          {contactSocial.instagram && (
            <div>
              <p className="text-sm text-[#A8A2A2] font-hanken mb-1 flex items-center gap-1">
                <Instagram size={14} /> Instagram
              </p>
              <p className="text-[#11212D] font-hanken font-medium">@{contactSocial.instagram}</p>
            </div>
          )}
          {contactSocial.facebook && (
            <div>
              <p className="text-sm text-[#A8A2A2] font-hanken mb-1 flex items-center gap-1">
                <Facebook size={14} /> Facebook
              </p>
              <p className="text-[#11212D] font-hanken font-medium">{contactSocial.facebook}</p>
            </div>
          )}
        </div>
      </div>

      {/* Availability Section */}
      <div className="bg-[#F8F9FA] rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-semibold text-[#11212D] font-hanken">Pricing & Availability</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-[#A8A2A2] font-hanken mb-1 flex items-center gap-1">
              <Euro size={14} /> Price
            </p>
            <p className="text-[#11212D] font-hanken font-medium">
              €{availability.pricePerPerson?.toFixed(2)} per person
            </p>
          </div>
          <div>
            <p className="text-sm text-[#A8A2A2] font-hanken mb-1 flex items-center gap-1">
              <Clock size={14} /> Duration
            </p>
            <p className="text-[#11212D] font-hanken font-medium">
              {durationLabels[availability.duration || '']}
            </p>
          </div>
          <div>
            <p className="text-sm text-[#A8A2A2] font-hanken mb-1 flex items-center gap-1">
              <Users size={14} /> Group Size
            </p>
            <p className="text-[#11212D] font-hanken font-medium">
              Up to {availability.maxGroupSize} people
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm text-[#A8A2A2] font-hanken mb-1">Availability</p>
          <p className="text-[#11212D] font-hanken font-medium capitalize">
            {availability.availability?.replace('-', ' ')}
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-[#E6F7F5] border border-[#3CA997]/30 rounded-xl p-6">
        <h4 className="font-hanken font-semibold text-[#11212D] mb-2 flex items-center gap-2">
          <Check className="text-[#3CA997]" size={20} />
          What happens next?
        </h4>
        <ul className="space-y-2 text-sm text-[#11212D] font-hanken ml-7">
          <li>• Your listing will be reviewed by our team within 24-48 hours</li>
          <li>• We'll contact you if we need any additional information</li>
          <li>• Once approved, your listing will go live on Azoreon</li>
          <li>• You'll receive notifications when bookings are made</li>
        </ul>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={goToPreviousStep}
          disabled={isSubmitting}
          className="px-8 py-3 border-2 border-[#E0E0E0] text-[#11212D] rounded-lg font-hanken font-semibold hover:border-[#3CA997] hover:text-[#3CA997] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} />
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="px-8 py-3 bg-[#3CA997] text-white rounded-lg font-hanken font-semibold hover:bg-[#2E9A84] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin">⏳</span>
              Submitting...
            </>
          ) : (
            <>
              <Check size={20} />
              Submit Listing
            </>
          )}
        </button>
      </div>
    </div>
  );
}
