import { ListingDetail } from '@/types/listing-detail';

interface ItineraryProps {
  listing: ListingDetail;
}

export function Itinerary({ listing }: ItineraryProps) {
  const renderIcon = (type: string) => {
    if (type === 'departure' || type === 'arrival') {
      // Location pin with circle icon for departure/arrival
      return (
        <div className="w-[38px] h-[38px] relative bg-[#F2F6F8] rounded-full flex items-center justify-center">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.5" cy="9.5" r="7.91" stroke="#37897E" strokeWidth="1.19"/>
            <path d="M10.21 15.04L14.71 10.54" stroke="#37897E" strokeWidth="1.19"/>
          </svg>
        </div>
      );
    } else {
      // Map pin icon for stops
      return (
        <div className="w-[38px] h-[38px] relative bg-[#F2F6F8] rounded-full flex items-center justify-center">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 17.42C9.5 17.42 15.83 12.25 15.83 7.91C15.83 4.42 12.99 1.58 9.5 1.58C6.01 1.58 3.17 4.42 3.17 7.91C3.17 12.25 9.5 17.42 9.5 17.42Z" stroke="#37897E" strokeWidth="1.19"/>
            <circle cx="9.5" cy="7.91" r="0.79" fill="#37897E" stroke="#37897E" strokeWidth="1.19"/>
          </svg>
        </div>
      );
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 space-y-6">
      <h2 className="text-[24px] font-bold text-[#11212D] font-hanken leading-[31.2px]">
        Itinerary
      </h2>

      <div className="relative flex flex-col gap-4">
        {/* Vertical line connecting all items */}
        {listing.itinerary.length > 1 && (
          <div className="absolute left-[19px] top-[38px] w-[2px] h-[calc(100%-76px)] bg-[#D6D8DF]" />
        )}

        {listing.itinerary.map((item, index) => (
          <div key={index} className="relative flex items-center gap-[10px]">
            {/* Icon */}
            {renderIcon(item.type)}

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <div className="text-[#777777] font-hanken text-[12px] leading-[18px]">
                {item.label}
              </div>
              <div className="text-[#11212D] font-inter text-[14px] leading-[20px]">
                {item.location}
                {item.duration && ` (${item.duration})`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
