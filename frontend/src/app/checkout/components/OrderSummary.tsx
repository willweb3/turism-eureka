import Image from 'next/image';
import { format } from 'date-fns';
import type { OrderSummary as OrderSummaryType } from '@/types/checkout';

interface Props {
  data: OrderSummaryType;
}

export default function OrderSummary({ data }: Props) {
  const formattedDates = `${format(new Date(data.startDate), 'd')}-${format(new Date(data.endDate), 'd MMMM, yyyy')}`;

  return (
    <div className="bg-white rounded-3xl overflow-hidden">
      {/* Image */}
      <div className="relative h-64 w-full">
        <Image
          src={data.imageUrl}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title & Price */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[#11212D] font-hanken">
            {data.title}
          </h3>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-[#11212D] font-hanken">
              €{data.pricePerPerson}
            </span>
            <span className="text-sm text-[#777777] font-hanken">
              /per person
            </span>
          </div>
        </div>

        <div className="h-px bg-[#E5E7EB]" />

        {/* Duration */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-[#777777] uppercase font-hanken">
            Duration
          </div>
          <div className="text-lg font-medium text-[#11212D] font-hanken">
            {formattedDates}
          </div>
        </div>

        <div className="h-px bg-[#E5E7EB]" />

        {/* Guests */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-[#777777] uppercase font-hanken">
            Guests
          </div>
          <div className="text-lg font-medium text-[#11212D] font-hanken">
            {data.numberOfGuests} Adult{data.numberOfGuests > 1 ? 's' : ''}
          </div>
        </div>

        <div className="h-px bg-[#E5E7EB]" />

        {/* Summary */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-[#777777] uppercase font-hanken">
            Summary
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#374151] font-hanken">
                €{data.pricePerPerson} x {data.pricing.numberOfDays} days
              </span>
              <span className="text-lg font-semibold text-[#11212D] font-hanken">
                €{data.pricing.subtotal}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#374151] font-hanken">
                Service fee
              </span>
              <span className="text-lg font-semibold text-[#11212D] font-hanken">
                €{data.pricing.serviceFee}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#374151] font-hanken">
                Taxes
              </span>
              <span className="text-lg font-semibold text-[#11212D] font-hanken">
                €{data.pricing.taxes}
              </span>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E5E7EB]" />

        {/* Total */}
        <div className="flex justify-between items-center">
          <span className="text-base font-bold text-[#11212D] font-hanken">
            Total
          </span>
          <span className="text-2xl font-bold text-[#11212D] font-hanken">
            €{data.pricing.total}
          </span>
        </div>
      </div>
    </div>
  );
}
