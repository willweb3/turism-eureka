import { ListingDetail } from '@/types/listing-detail';

interface LocationMapProps {
  listing: ListingDetail;
}

export function LocationMap({ listing }: LocationMapProps) {
  const { location } = listing;

  // Google Maps embed URL (generic test location - São Miguel, Azores)
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50234.87384847771!2d-25.7884!3d37.8616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb439104f82dd745%3A0x7c11f8b4b1e1a89d!2sSete%20Cidades!5e0!3m2!1sen!2spt!4v1234567890123!5m2!1sen!2spt`;

  return (
    <div className="bg-white rounded-3xl p-6 space-y-6">
      {/* Header with title and button */}
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold text-[#11212D] font-hanken leading-[31.2px]">
          Location
        </h2>

        {/* Open in Google Maps button */}
        <a
          href={location.mapUrl || `https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-[#BFC3C9] rounded-full hover:bg-[#F2F6F8] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10.83C10.92 10.83 11.67 10.08 11.67 9.17C11.67 8.25 10.92 7.5 10 7.5C9.08 7.5 8.33 8.25 8.33 9.17C8.33 10.08 9.08 10.83 10 10.83Z" stroke="#11212D" strokeWidth="1.2"/>
            <path d="M10 17.5C10 17.5 15 13.33 15 9.17C15 6.42 12.76 4.17 10 4.17C7.24 4.17 5 6.42 5 9.17C5 13.33 10 17.5 10 17.5Z" stroke="#11212D" strokeWidth="1.2"/>
          </svg>
          <span className="text-[#11212D] font-hanken text-sm font-medium">
            Open in Google maps
          </span>
        </a>
      </div>

      {/* Map Display */}
      <div className="relative rounded-2xl overflow-hidden h-[240px] bg-[#F2F6F8]">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location map"
        />
      </div>
    </div>
  );
}
