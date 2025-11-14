'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCheckoutStore } from '@/stores/checkoutStore';
import DestinationCard from './DestinationCard';
import YourDetailsSection from './YourDetailsSection';
import PaymentSection from './PaymentSection';
import BillingSection from './BillingSection';
import type { CheckoutPageData } from '@/types/checkout';

interface Props {
  initialData: CheckoutPageData;
}

export default function CheckoutForm({ initialData }: Props) {
  const router = useRouter();
  const { setBookingId, setOrderSummary, isFormValid, isProcessing, setProcessing } = useCheckoutStore();

  useEffect(() => {
    setBookingId(initialData.bookingId);
    setOrderSummary(initialData.orderSummary);
  }, [initialData, setBookingId, setOrderSummary]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert('Please fill in all required fields');
      return;
    }

    setProcessing(true);

    // TODO: Process payment with Stripe
    console.log('Processing payment...');

    // Simulate processing
    setTimeout(() => {
      setProcessing(false);
      // router.push('/booking/confirmation/xxx');
      alert('Payment processing - will redirect to confirmation page');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <DestinationCard title={initialData.orderSummary.title} />
      <YourDetailsSection initialData={initialData.userData} />
      <PaymentSection />
      <BillingSection />

      <div className="flex flex-col items-center gap-2">
        <button
          type="submit"
          disabled={isProcessing}
          className="w-full px-6 py-4 bg-[#52C6BB] hover:bg-[#3CA997] text-[#11212D] font-medium font-hanken rounded-[48px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? 'Processing...' : 'Pay now'}
        </button>
        <p className="text-xs font-medium text-[#777777] text-center font-hanken">
          You'll only be charged if your request is accepted by the provider
        </p>
      </div>
    </form>
  );
}
