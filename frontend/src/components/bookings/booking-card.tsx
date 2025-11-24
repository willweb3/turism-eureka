'use client';

import Image from 'next/image';
import { Booking } from '@/types/listing';

interface BookingCardProps {
  booking: Booking;
}

const getStatusConfig = (status: Booking['status']) => {
  switch (status) {
    case 'confirmed':
      return {
        label: 'Confirmed',
        color: '#218F51',
        bgColor: 'rgba(33, 143, 81, 0.1)',
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="#218F51" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      };
    case 'pending':
      return {
        label: 'Pending',
        color: '#FCAB08',
        bgColor: 'rgba(252, 171, 8, 0.1)',
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7.5" stroke="#FCAB08" strokeWidth="1.67"/>
            <path d="M10 6V10L12.5 12.5" stroke="#FCAB08" strokeWidth="1.67" strokeLinecap="round"/>
          </svg>
        ),
      };
    case 'cancelled':
      return {
        label: 'Cancelled',
        color: '#8B1C1C',
        bgColor: 'rgba(139, 28, 28, 0.1)',
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="#8B1C1C" strokeWidth="1.67" strokeLinecap="round"/>
          </svg>
        ),
      };
    case 'completed':
      return {
        label: 'Completed',
        color: '#777777',
        bgColor: 'rgba(119, 119, 119, 0.1)',
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="#777777" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      };
  }
};

export default function BookingCard({ booking }: BookingCardProps) {
  const statusConfig = getStatusConfig(booking.status);

  return (
    <div className="bg-white rounded-[24px] overflow-hidden pr-8 flex items-center justify-between">
      <div className="flex-1 flex items-center gap-6">
        {/* Image */}
        <div className="relative w-[224px] h-[180px] flex-shrink-0">
          <Image
            src={booking.imageUrl}
            alt={booking.title}
            fill
            className="object-cover"
            sizes="224px"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-start gap-8">
          {/* Details */}
          <div className="w-[350px] flex flex-col gap-2">
            {/* Category */}
            <div className="text-[10px] leading-[15px] font-hanken font-medium uppercase text-[#777777]">
              {booking.category}
            </div>

            {/* Title */}
            <div className="text-[24px] leading-[31.2px] font-hanken font-semibold text-[#11212D]">
              {booking.title}
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-2 text-[16px] leading-[24px] font-hanken text-[#11212D]">
              <span>{booking.dateRange}</span>
              <span>&bull;</span>
              <span>{booking.location}</span>
              {booking.freeCancellation && (
                <>
                  <span>&bull;</span>
                  <span>Free cancelation</span>
                </>
              )}
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5">{statusConfig.icon}</div>
            <div
              className="flex-1 text-[16px] leading-[24px] font-hanken font-medium"
              style={{ color: statusConfig.color }}
            >
              {statusConfig.label}
            </div>
          </div>
        </div>
      </div>

      {/* Price & CTA */}
      <div className="w-[186px] flex flex-col gap-4">
        {/* Price */}
        <div className="flex flex-col gap-1">
          <div className="text-[12px] leading-[18px] font-hanken text-[#11212D]">From</div>
          <div>
            <span className="text-[24px] leading-[31.2px] font-hanken font-semibold text-[#11212D]">
              &euro;{booking.price}
            </span>
            <span className="text-[12px] leading-[18px] font-hanken text-[#11212D]">
              /{booking.priceUnit}
            </span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => window.location.href = `/experiences/${booking.listingId}`}
          className="px-4 py-3 bg-[#D7F4F0] rounded-[48px] text-[14px] leading-[21px] font-hanken font-medium text-[#11212D] hover:bg-[#B8EDE6] transition-colors"
        >
          View Listing
        </button>
      </div>
    </div>
  );
}
