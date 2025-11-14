import { create } from 'zustand';
import type { OrderSummary, CheckoutFormData } from '@/types/checkout';

interface CheckoutStore {
  bookingId: string | null;
  orderSummary: OrderSummary | null;
  formData: Partial<CheckoutFormData>;
  isProcessing: boolean;
  errors: Record<string, string>;

  setBookingId: (id: string) => void;
  setOrderSummary: (summary: OrderSummary) => void;
  updateFormData: (data: Partial<CheckoutFormData>) => void;
  setProcessing: (processing: boolean) => void;
  addError: (field: string, message: string) => void;
  clearErrors: () => void;
  isFormValid: () => boolean;
}

export const useCheckoutStore = create<CheckoutStore>((set, get) => ({
  bookingId: null,
  orderSummary: null,
  formData: {},
  isProcessing: false,
  errors: {},

  setBookingId: (id) => set({ bookingId: id }),
  setOrderSummary: (summary) => set({ orderSummary: summary }),
  updateFormData: (data) => set((state) => ({
    formData: { ...state.formData, ...data }
  })),
  setProcessing: (processing) => set({ isProcessing: processing }),
  addError: (field, message) => set((state) => ({
    errors: { ...state.errors, [field]: message }
  })),
  clearErrors: () => set({ errors: {} }),
  isFormValid: () => {
    const { formData } = get();
    return !!(
      formData.personal?.name &&
      formData.personal?.email &&
      formData.personal?.phone &&
      formData.payment?.cardNumber &&
      formData.billing?.address &&
      formData.billing?.city &&
      formData.billing?.country
    );
  }
}));
