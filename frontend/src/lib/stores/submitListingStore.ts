// lib/stores/submitListingStore.ts

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { BasicInformationData, ContactSocialData, AvailabilityData } from '@/types/listing';

interface SubmitListingState {
  currentStep: number;
  basicInfo: BasicInformationData | null;
  contactSocial: ContactSocialData | null;
  availability: AvailabilityData | null;

  // Actions
  setCurrentStep: (step: number) => void;
  setBasicInfo: (data: BasicInformationData) => void;
  setContactSocial: (data: ContactSocialData) => void;
  setAvailability: (data: AvailabilityData) => void;
  resetForm: () => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  canGoToStep: (step: number) => boolean;
}

export const useSubmitListingStore = create<SubmitListingState>()(
  persist(
    (set, get) => ({
      currentStep: 1,
      basicInfo: null,
      contactSocial: null,
      availability: null,

      setCurrentStep: (step) => {
        const { canGoToStep } = get();
        if (canGoToStep(step)) {
          set({ currentStep: step });
        }
      },

      setBasicInfo: (data) => set({ basicInfo: data }),

      setContactSocial: (data) => set({ contactSocial: data }),

      setAvailability: (data) => set({ availability: data }),

      resetForm: () =>
        set({
          currentStep: 1,
          basicInfo: null,
          contactSocial: null,
          availability: null,
        }),

      goToNextStep: () => {
        const { currentStep } = get();
        if (currentStep < 4) {
          set({ currentStep: currentStep + 1 });
        }
      },

      goToPreviousStep: () => {
        const { currentStep } = get();
        if (currentStep > 1) {
          set({ currentStep: currentStep - 1 });
        }
      },

      canGoToStep: (step) => {
        const { basicInfo, contactSocial, currentStep } = get();

        // Pode sempre voltar para steps anteriores
        if (step <= currentStep) return true;

        // Não pode pular steps
        if (step > currentStep + 1) return false;

        // Validar se o step atual foi completado
        switch (currentStep) {
          case 1:
            return basicInfo !== null;
          case 2:
            return contactSocial !== null;
          case 3:
            return true; // Availability step
          default:
            return false;
        }
      },
    }),
    {
      name: 'submit-listing-storage',
      partialize: (state) => ({
        currentStep: state.currentStep,
        basicInfo: state.basicInfo,
        contactSocial: state.contactSocial,
        availability: state.availability,
      }),
    }
  )
);
