import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { mockListingDetail } from '@/data/mock-listing-detail';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ImageGallery } from '@/components/listing/ImageGallery';
import { BookingSidebar } from '@/components/listing/BookingSidebar';
import { ListingDetails } from '@/components/listing/ListingDetails';
import { Itinerary } from '@/components/listing/Itinerary';
import { ImportantInfo } from '@/components/listing/ImportantInfo';
import { LocationMap } from '@/components/listing/LocationMap';
import { ReviewsList } from '@/components/listing/ReviewsList';
import { AboutOwner } from '@/components/listing/AboutOwner';
import { FAQ } from '@/components/listing/FAQ';
import { TravelPackages } from '@/components/listing/TravelPackages';
import { SuggestedListings } from '@/components/listing/SuggestedListings';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const listing = mockListingDetail as any;

  return {
    title: `${listing.title} | AZOREON`,
    description: listing.description.substring(0, 160) + '...',
    openGraph: {
      title: listing.title,
      description: listing.description.substring(0, 160) + '...',
      images: [listing.images[0]],
      type: 'website',
    },
  };
}

export default function ListingPage({ params }: PageProps) {
  const listing = mockListingDetail as any;

  if (!listing) {
    notFound();
  }

  return (
    <>
      <Header transparent={false} />
      <div className="min-h-screen bg-neutral-50 pt-20">
        {/* Hero Title Section */}
        <section className="container mx-auto px-4 lg:px-12 py-8">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3 flex-1">
              {listing.featured && (
                <span className="inline-block px-4 py-1.5 bg-[#FFBA33] text-[#11212D] font-hanken font-medium text-sm rounded-full">
                  Featured
                </span>
              )}
              <h1 className="text-4xl lg:text-5xl font-bold text-[#11212D] font-lufga">
                {listing.title}
              </h1>
              <div className="flex items-center gap-4 text-sm flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-[#11212D] font-bold">{listing.rating.average}</span>
                  <span className="text-[#FBBF24]">★★★★☆</span>
                </div>
                <button className="text-[#11212D] hover:underline font-hanken">
                  {listing.rating.count} Reviews
                </button>
                <span className="text-[#777777]">•</span>
                <span className="text-[#777777] font-hanken">
                  Activity operator:{' '}
                  <button className="text-[#11212D] hover:underline">
                    {listing.operator.name}
                  </button>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-[#BFC3C9] rounded-full hover:bg-[#F2F6F8] transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 17.5L3.5 11C1.5 9 1.5 5.5 3.5 3.5C5.5 1.5 9 1.5 11 3.5L10 4.5L11 3.5C13 1.5 16.5 1.5 18.5 3.5C20.5 5.5 20.5 9 18.5 11L10 17.5Z" stroke="#11212D" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#11212D] font-hanken text-sm font-medium">Add to favorites</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-[#BFC3C9] rounded-full hover:bg-[#F2F6F8] transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 11L17 7L13 3M17 7H7M7 17H5C3.89543 17 3 16.1046 3 15V5C3 3.89543 3.89543 3 5 3H7" stroke="#11212D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#11212D] font-hanken text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        </section>

        {/* Main Content with Images and Booking Sidebar */}
        <section className="container mx-auto px-4 lg:px-12 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Image Gallery */}
              <ImageGallery images={listing.images} title={listing.title} />

              <ListingDetails listing={listing} />
              <Itinerary listing={listing} />
              <ImportantInfo listing={listing} />
              <LocationMap listing={listing} />

              {/* Travel Packages */}
              <TravelPackages listing={listing} />

              <ReviewsList listing={listing} />
              <AboutOwner listing={listing} />
              <FAQ listing={listing} />
            </div>

            {/* Right Column - Sticky Sidebar */}
            <BookingSidebar listing={listing} />
          </div>
        </section>
      </div>

      {/* Suggested Listings */}
      <SuggestedListings />

      <Footer />
    </>
  );
}
