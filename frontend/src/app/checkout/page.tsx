import { redirect } from 'next/navigation';
import CheckoutForm from './components/CheckoutForm';
import OrderSummary from './components/OrderSummary';
import TrustBadges from './components/TrustBadges';

export const metadata = {
  title: 'Checkout - AZOREON',
  description: 'Complete your booking request',
};

export default async function CheckoutPage({
  searchParams
}: {
  searchParams: { booking?: string }
}) {
  // if (!searchParams.booking) redirect('/cart');

  // Mock data - substituir por fetch real do Supabase quando integrar
  const mockData = {
    bookingId: searchParams.booking || 'mock-booking-id',
    orderSummary: {
      listingId: '1',
      title: 'Azores: Explore, Recharge & Reconnect',
      imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      pricePerPerson: 45,
      startDate: '2025-11-10',
      endDate: '2025-11-13',
      numberOfGuests: 1,
      pricing: {
        subtotal: 135,
        numberOfDays: 3,
        serviceFee: 20,
        taxes: 15,
        total: 170
      }
    },
    userData: {
      name: 'João Marques',
      email: 'joaomarques@domain.com',
      phone: '(+351) 912 345 678'
    }
  };

  return (
    <main className="min-h-screen bg-[#F9FAFB] py-8 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[153px]">
        <h1 className="text-2xl lg:text-4xl font-bold text-[#11212D] font-lufga mb-8 lg:mb-[79px]">
          Complete booking request
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left Column - Form */}
          <div className="w-full lg:w-[679px]">
            <CheckoutForm initialData={mockData} />
          </div>

          {/* Right Column - Summary (Sticky) */}
          <div className="w-full lg:w-[473px] lg:sticky lg:top-6 space-y-4">
            <OrderSummary data={mockData.orderSummary} />
            <TrustBadges />
          </div>
        </div>
      </div>
    </main>
  );
}
