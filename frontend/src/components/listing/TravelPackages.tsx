import { ListingDetail } from '@/types/listing-detail';
import Link from 'next/link';

interface TravelPackagesProps {
  listing: ListingDetail;
}

export function TravelPackages({ listing }: TravelPackagesProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[28px] font-bold text-[#11212D] font-hanken leading-[39.2px]">
        Travel Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listing.travelPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-3xl overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative h-[160px] overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-bold text-[#11212D] font-hanken leading-[26px]">
                  {pkg.title}
                </h3>
                <p className="text-[#777777] font-hanken text-[14px] leading-[21px]">
                  {pkg.description}
                </p>
              </div>

              {/* Button */}
              <Link
                href={pkg.link}
                className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#52C6BB] rounded-full text-[#52C6BB] font-hanken text-[16px] font-medium hover:bg-[#52C6BB] hover:text-white transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
