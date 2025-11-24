'use client';

import Image from 'next/image';
import { Listing } from '@/types/listing';
import ListingStatusBadge from './listing-status';

interface ListingCardProps {
  listing: Listing;
}

const getActionButton = (status: Listing['status'], listingId: string) => {
  const buttonBaseClass = 'px-6 py-3 rounded-[48px] font-hanken text-[14px] leading-[21px] font-medium transition-all duration-200';

  switch (status) {
    case 'confirmed':
      return {
        label: 'View details',
        className: `${buttonBaseClass} bg-[#52C6BB] text-[#11212D] hover:bg-[#3CA997] active:scale-[0.98]`,
        onClick: () => window.location.href = `/dashboard/listings/${listingId}`,
      };
    case 'error':
      return {
        label: 'Fix errors',
        className: `${buttonBaseClass} bg-[#8B1C1C] text-white hover:bg-[#7A1818] active:scale-[0.98]`,
        onClick: () => window.location.href = `/dashboard/listings/${listingId}/edit`,
      };
    case 'awaiting_payment':
      return {
        label: 'Complete payment',
        className: `${buttonBaseClass} bg-[#D95B21] text-white hover:bg-[#C04F1D] active:scale-[0.98]`,
        onClick: () => window.location.href = `/dashboard/listings/${listingId}/payment`,
      };
    case 'draft':
      return {
        label: 'Continue editing',
        className: `${buttonBaseClass} bg-transparent text-[#52C6BB] hover:bg-[#52C6BB]/10 active:scale-[0.98]`,
        style: { outline: '1px solid #52C6BB', outlineOffset: '-1px' },
        onClick: () => window.location.href = `/dashboard/listings/${listingId}/edit`,
      };
    case 'closed':
      return {
        label: 'Reopen listing',
        className: `${buttonBaseClass} bg-transparent text-[#52C6BB] hover:bg-[#52C6BB]/10 active:scale-[0.98]`,
        style: { outline: '1px solid #52C6BB', outlineOffset: '-1px' },
        onClick: () => {
          console.log('Reopen listing:', listingId);
        },
      };
    case 'pending_approval':
      return {
        label: 'View submission',
        className: `${buttonBaseClass} bg-transparent text-[#52C6BB] hover:bg-[#52C6BB]/10 active:scale-[0.98]`,
        style: { outline: '1px solid #52C6BB', outlineOffset: '-1px' },
        onClick: () => window.location.href = `/dashboard/listings/${listingId}`,
      };
    default:
      return null;
  }
};

export default function ListingCard({ listing }: ListingCardProps) {
  const actionButton = getActionButton(listing.status, listing.id);

  return (
    <div className="bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-[224px] h-[180px] flex-shrink-0">
          <Image
            src={listing.imageUrl}
            alt={listing.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 224px"
          />
        </div>

        <div className="flex-1 p-4 md:p-5">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1 space-y-3">
              <h3 className="text-[18px] leading-[27px] font-bold text-[#11212D] font-lufga">
                {listing.title}
              </h3>

              <div className="flex items-center gap-2 text-[14px] leading-[21px] text-[#908C8C] font-hanken">
                <span>{listing.category}</span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z" stroke="#908C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 14C10 11.3333 13.3333 9.18181 13.3333 6.66667C13.3333 3.72115 10.9455 1.33333 8 1.33333C5.05448 1.33333 2.66667 3.72115 2.66667 6.66667C2.66667 9.18181 6 11.3333 8 14Z" stroke="#908C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {listing.location}
                </span>
              </div>

              <div className="flex items-center gap-1 text-[14px] leading-[21px] text-[#908C8C] font-hanken">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="#908C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.6667 1.33333V4" stroke="#908C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.33333 1.33333V4" stroke="#908C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 6.66667H14" stroke="#908C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {listing.dateRange}
              </div>

              {listing.freeCancelation && (
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#E8F5E9] rounded-full">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="#218F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[12px] leading-[18px] font-medium text-[#218F51] font-hanken">
                    Free cancellation
                  </span>
                </div>
              )}

              <ListingStatusBadge status={listing.status} message={listing.statusMessage} />
            </div>

            <div className="flex flex-col items-end gap-3 md:min-w-[180px]">
              <div className="text-right">
                <div className="text-[24px] leading-[31px] font-bold text-[#11212D] font-lufga">
                  &euro;{listing.price}
                </div>
                <div className="text-[14px] leading-[21px] text-[#908C8C] font-hanken">
                  {listing.priceUnit}
                </div>
              </div>

              {actionButton && (
                <button
                  onClick={actionButton.onClick}
                  className={actionButton.className}
                  style={actionButton.style}
                >
                  {actionButton.label}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
