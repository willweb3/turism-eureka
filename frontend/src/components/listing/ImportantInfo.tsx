import { ListingDetail } from '@/types/listing-detail';

interface ImportantInfoProps {
  listing: ListingDetail;
}

export function ImportantInfo({ listing }: ImportantInfoProps) {
  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col gap-6">
      <h2 className="text-[24px] font-bold text-[#11212D] font-hanken leading-[31.2px]">
        Important Information
      </h2>

      {/* Meeting Point */}
      <div className="flex items-start gap-8">
        <div className="w-[150px] flex-shrink-0">
          <h3 className="text-[18px] font-bold text-[#323232] font-hanken leading-[23.4px]">
            Meeting Point
          </h3>
        </div>
        <div className="flex-1 flex flex-col text-[#777777] font-hanken text-[16px] leading-[24px]">
          <span className="text-[#777777]">{listing.importantInfo.meetingPoint.location}</span>
          <br />
          <span className="text-[#777777]">{listing.importantInfo.meetingPoint.instructions}</span>
        </div>
      </div>

      {/* Highlights */}
      {listing.importantInfo.highlights.length > 0 && (
        <div className="flex items-start gap-8">
          <div className="w-[150px] flex-shrink-0">
            <h3 className="text-[18px] font-bold text-[#323232] font-hanken leading-[23.4px]">
              Highlights
            </h3>
          </div>
          <div className="flex-1 text-[#777777] font-hanken text-[16px] leading-[24px]">
            {listing.importantInfo.highlights.map((highlight, index) => (
              <span key={index}>
                {highlight}
                {index < listing.importantInfo.highlights.length - 1 && <br />}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="h-px bg-[#D6D8DF]" />

      {/* Includes */}
      {listing.importantInfo.includes.length > 0 && (
        <div className="flex items-start gap-8">
          <div className="w-[150px] flex-shrink-0">
            <h3 className="text-[18px] font-bold text-[#323232] font-hanken leading-[23.4px]">
              Includes
            </h3>
          </div>
          <div className="flex-1 text-[#777777] font-hanken text-[16px] leading-[24px]">
            {listing.importantInfo.includes.map((item, index) => (
              <span key={index}>
                {item}
                {index < listing.importantInfo.includes.length - 1 && <br />}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="h-px bg-[#D6D8DF]" />

      {/* Not Suitable For */}
      {listing.importantInfo.notSuitableFor.length > 0 && (
        <div className="flex items-start gap-8">
          <div className="w-[150px] flex-shrink-0">
            <h3 className="text-[18px] font-bold text-[#323232] font-hanken leading-[23.4px]">
              Not suitable for
            </h3>
          </div>
          <div className="flex-1 text-[#777777] font-hanken text-[16px] leading-[24px]">
            {listing.importantInfo.notSuitableFor.map((item, index) => (
              <span key={index}>
                {item}
                {index < listing.importantInfo.notSuitableFor.length - 1 && <br />}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
