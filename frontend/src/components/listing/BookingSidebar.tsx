'use client';

import { useState } from 'react';
import { ListingDetail } from '@/types/listing-detail';

interface BookingSidebarProps {
  listing: ListingDetail;
}

export function BookingSidebar({ listing }: BookingSidebarProps) {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [adults, setAdults] = useState<number>(3);
  const [children, setChildren] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const [guestsOpen, setGuestsOpen] = useState<boolean>(false);

  // Calculate number of days
  const calculateDays = () => {
    if (!startDate || !endDate) return 3; // Default to 3 days
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1;
  };

  const days = calculateDays();
  const totalGuests = adults + children;
  const subtotal = listing.price * days * totalGuests;
  const total = subtotal + listing.pricing.serviceFee + listing.pricing.taxes;

  return (
    <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
      {/* Booking Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E5E7EB] flex flex-col gap-6">
        {/* Price */}
        <div>
          <p className="text-[14px] text-[#777777] font-hanken leading-[21px]">From</p>
          <div className="flex items-baseline gap-1">
            <span className="text-[32px] font-bold text-[#11212D] font-hanken leading-[41.6px]">
              {listing.price}€
            </span>
            <span className="text-[14px] text-[#777777] font-hanken">
              /{listing.priceUnit}
            </span>
          </div>
        </div>

        {/* Date inputs */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-[#11212D] font-hanken font-medium">
              Start Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Select Date"
                className="w-full h-12 px-4 bg-white border border-[#BFC3C9] rounded-xl text-[14px] text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB] focus:border-transparent"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="12" height="11" rx="1" stroke="#777777" strokeWidth="1.2"/>
                <line x1="2" y1="6" x2="14" y2="6" stroke="#777777" strokeWidth="1.2"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-[#11212D] font-hanken font-medium">
              End Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                min={startDate}
                placeholder="Select Date"
                className="w-full h-12 px-4 bg-white border border-[#BFC3C9] rounded-xl text-[14px] text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB] focus:border-transparent"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="12" height="11" rx="1" stroke="#777777" strokeWidth="1.2"/>
                <line x1="2" y1="6" x2="14" y2="6" stroke="#777777" strokeWidth="1.2"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Guests */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] text-[#11212D] font-hanken font-medium">
            Guests
          </label>
          <div className="relative">
            <button
              onClick={() => setGuestsOpen(!guestsOpen)}
              className="w-full h-12 px-4 pl-10 bg-white border border-[#BFC3C9] rounded-xl text-[14px] text-[#11212D] font-hanken flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#52C6BB] focus:border-transparent"
            >
              <span className="text-[#777777]">Select Guests</span>
              <svg className={`transition-transform ${guestsOpen ? 'rotate-180' : ''}`} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#11212D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="5" r="2.5" stroke="#777777" strokeWidth="1.2"/>
              <path d="M3 13C3 10.5 5 9 8 9C11 9 13 10.5 13 13" stroke="#777777" strokeWidth="1.2"/>
            </svg>

            {/* Dropdown panel */}
            {guestsOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#BFC3C9] rounded-xl p-4 shadow-lg z-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] text-[#11212D] font-hanken">Adults</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setAdults(Math.max(0, adults - 1))}
                        className="w-6 h-6 rounded-full border border-[#BFC3C9] flex items-center justify-center hover:bg-[#F2F6F8] transition-colors"
                      >
                        <span className="text-[#11212D] text-sm">−</span>
                      </button>
                      <span className="text-[14px] text-[#11212D] font-hanken w-4 text-center">{adults}</span>
                      <button
                        onClick={() => setAdults(adults + 1)}
                        className="w-6 h-6 rounded-full border border-[#BFC3C9] flex items-center justify-center hover:bg-[#F2F6F8] transition-colors"
                      >
                        <span className="text-[#11212D] text-sm">+</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] text-[#11212D] font-hanken">Children</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-6 h-6 rounded-full border border-[#BFC3C9] flex items-center justify-center hover:bg-[#F2F6F8] transition-colors"
                      >
                        <span className="text-[#11212D] text-sm">−</span>
                      </button>
                      <span className="text-[14px] text-[#11212D] font-hanken w-4 text-center">{children}</span>
                      <button
                        onClick={() => setChildren(children + 1)}
                        className="w-6 h-6 rounded-full border border-[#BFC3C9] flex items-center justify-center hover:bg-[#F2F6F8] transition-colors"
                      >
                        <span className="text-[#11212D] text-sm">+</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] text-[#11212D] font-hanken font-medium">
            Message Label
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message Label"
            className="w-full h-24 px-4 py-3 bg-white border border-[#BFC3C9] rounded-xl text-[14px] text-[#11212D] font-hanken resize-none focus:outline-none focus:ring-2 focus:ring-[#52C6BB] focus:border-transparent placeholder:text-[#BFC3C9]"
          />
        </div>

        {/* Price breakdown */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-[14px] font-hanken">
            <span className="text-[#777777]">
              €{listing.price} x {days} {days === 1 ? 'day' : 'days'}
            </span>
            <span className="font-semibold text-[#11212D]">{subtotal}€</span>
          </div>
          <div className="flex justify-between text-[14px] font-hanken">
            <span className="text-[#777777]">Service fee</span>
            <span className="font-semibold text-[#11212D]">{listing.pricing.serviceFee}€</span>
          </div>
          <div className="flex justify-between text-[14px] font-hanken">
            <span className="text-[#777777]">Taxes</span>
            <span className="font-semibold text-[#11212D]">{listing.pricing.taxes}€</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center">
          <span className="text-[#11212D] font-hanken text-[16px] font-medium">Total</span>
          <span className="text-[32px] font-bold text-[#11212D] font-hanken leading-none">{total}€</span>
        </div>

        {/* Request Book button */}
        <button className="w-full h-14 bg-[#52C6BB] hover:bg-[#3FA08F] text-white font-hanken font-semibold text-[16px] rounded-full transition-colors shadow-sm">
          Request Book
        </button>
        <p className="text-center text-[12px] text-[#777777] font-hanken -mt-3">
          You won't be charged yet
        </p>

        {/* Contact Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#D7F4F0] rounded-full hover:bg-[#C5EDE8] transition-colors">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.83" y="4.58" width="18.33" height="12.83" rx="2" stroke="#11212D" strokeWidth="1.5"/>
              <path d="M1.83 6.42L11 11.46L20.17 6.42" stroke="#11212D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[14px] text-[#11212D] font-hanken font-medium leading-[21px]">Send Email</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#D7F4F0] rounded-full hover:bg-[#C5EDE8] transition-colors">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 12.3 3.3 13.5 3.9 14.6L3 19L7.4 18.1C8.5 18.7 9.7 19 11 19Z" stroke="#11212D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[14px] text-[#11212D] font-hanken font-medium leading-[21px]">WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Free Cancellation */}
      <div className="bg-[#F7F9FA] rounded-2xl p-4 border border-[#E5E7EB]">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full border-2 border-[#1A6C3B] flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6L5 9L10 3" stroke="#1A6C3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 className="text-[#11212D] font-hanken font-semibold text-[14px] leading-[21px]">
              Free cancellation
            </h3>
            <p className="text-[#777777] font-hanken text-[12px] leading-[18px]">
              Cancel up to 24 hours in advance and get a full refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
