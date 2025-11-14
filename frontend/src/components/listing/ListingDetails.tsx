import { ListingDetail } from '@/types/listing-detail';

interface ListingDetailsProps {
  listing: ListingDetail;
}

export function ListingDetails({ listing }: ListingDetailsProps) {
  const renderAmenityIcon = (icon: string) => {
    switch (icon) {
      case 'mountain':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 16.67L7.5 8.33L12.5 16.67H2.5Z" stroke="#11212D" strokeWidth="1.04"/>
            <path d="M3.75 17.5L7.5 11.25" stroke="#11212D" strokeWidth="1.04"/>
          </svg>
        );
      case 'utensils':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 2.5V12.5" stroke="#11212D" strokeWidth="1.2"/>
            <path d="M14.17 2.5V4.58" stroke="#11212D" strokeWidth="1.2"/>
            <path d="M3.33 12.5C3.33 9.5 5.83 7.08 8.83 7.08" stroke="#11212D" strokeWidth="1.2"/>
          </svg>
        );
      case 'flag':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 17.5V2.5L12.5 7.5L2.5 12.5" stroke="#11212D" strokeWidth="1.2"/>
          </svg>
        );
      case 'trees':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83 5.83L10 1.67" stroke="#11212D" strokeWidth="1.2"/>
            <path d="M4.17 10L7.5 6.67" stroke="#11212D" strokeWidth="1.2"/>
            <path d="M2.5 15L7.5 10" stroke="#11212D" strokeWidth="1.2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-[24px] p-6 flex flex-col gap-6">
      {/* Title */}
      <h2 className="text-[28px] font-bold text-[#11212D] font-hanken leading-[39.2px]">
        {listing.title}
      </h2>

      {/* Description */}
      <div className="flex flex-col gap-4">
        <h3 className="text-[24px] font-bold text-[#11212D] font-hanken leading-[31.2px]">
          Description
        </h3>
        <div className="text-[#777777] font-hanken text-[16px] leading-[24px] whitespace-pre-line">
          {listing.description}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#D6D8DF]" />

      {/* Details Section */}
      <div className="flex flex-col gap-4">
        <h3 className="text-[24px] font-bold text-[#11212D] font-hanken leading-[31.2px]">
          Details
        </h3>
        <div className="flex gap-6">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Check-in */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[rgba(60,169,151,0.1)] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2.25" y="1.5" width="13.5" height="14.25" rx="1" stroke="#3CA997" strokeWidth="1.12"/>
                  <line x1="2.25" y1="3" x2="15.75" y2="3" stroke="#3CA997" strokeWidth="1.12"/>
                  <line x1="13.88" y1="3" x2="13.88" y2="7.5" stroke="#3CA997" strokeWidth="1.12"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[#777777] font-hanken text-[12px] leading-[18px]">Check-in</div>
                <div className="text-[#11212D] font-inter text-[14px] leading-[20px]">{listing.details.checkIn}</div>
              </div>
            </div>

            {/* Category */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[rgba(60,169,151,0.1)] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.25 7.12L7.12 2.25" stroke="#3CA997" strokeWidth="1.12" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[#777777] font-hanken text-[12px] leading-[18px]">Category</div>
                <div className="text-[#11212D] font-inter text-[14px] leading-[20px]">{listing.details.category}</div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Check-out */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[rgba(60,169,151,0.1)] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2.25" y="1.5" width="13.5" height="14.25" rx="1" stroke="#3CA997" strokeWidth="1.12"/>
                  <line x1="2.25" y1="3" x2="15.75" y2="3" stroke="#3CA997" strokeWidth="1.12"/>
                  <line x1="13.88" y1="3" x2="13.88" y2="7.5" stroke="#3CA997" strokeWidth="1.12"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[#777777] font-hanken text-[12px] leading-[18px]">Check-out</div>
                <div className="text-[#11212D] font-inter text-[14px] leading-[20px]">{listing.details.checkOut}</div>
              </div>
            </div>

            {/* Condition */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[rgba(60,169,151,0.1)] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="4.5" stroke="#3CA997" strokeWidth="1.12"/>
                  <circle cx="3" cy="3" r="0.75" fill="#3CA997" stroke="#3CA997" strokeWidth="1.12"/>
                  <circle cx="15" cy="15" r="0.75" fill="#3CA997" stroke="#3CA997" strokeWidth="1.12"/>
                  <circle cx="15" cy="3.75" r="0.75" fill="#3CA997" stroke="#3CA997" strokeWidth="1.12"/>
                  <circle cx="3" cy="14.25" r="0.75" fill="#3CA997" stroke="#3CA997" strokeWidth="1.12"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[#777777] font-hanken text-[12px] leading-[18px]">Condition</div>
                <div className="text-[#11212D] font-inter text-[14px] leading-[20px]">{listing.details.condition}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="flex flex-col gap-4">
        <h3 className="text-[24px] font-bold text-[#11212D] font-hanken leading-[31.2px]">
          Amenities
        </h3>
        <div className="flex flex-wrap gap-2">
          {listing.amenities.map((amenity, index) => (
            <div
              key={index}
              className="px-4 py-2 border border-[#BFC3C9] rounded-[48px] flex items-center gap-2"
            >
              {renderAmenityIcon(amenity.icon)}
              <span className="text-[#11212D] font-hanken text-[16px] font-light">
                {amenity.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
