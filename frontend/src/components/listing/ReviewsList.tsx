import { ListingDetail } from '@/types/listing-detail';

interface ReviewsListProps {
  listing: ListingDetail;
}

export function ReviewsList({ listing }: ReviewsListProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-[#FBBF24]' : 'text-[#D6D8DF]'}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold text-[#11212D] font-hanken leading-[31.2px]">
          Reviews ({(listing as any).reviews.length})
        </h2>
        <div className="flex items-center gap-1">
          <span className="text-[#11212D] font-bold text-[18px]">{(listing as any).rating.average}</span>
          <span className="text-[#FBBF24] text-[18px]">★</span>
        </div>
      </div>

      {/* Reviews List */}
      <div className="flex flex-col gap-6">
        {(listing as any).reviews.map((review: any) => (
          <div key={review.id} className="flex gap-3">
            {/* Avatar */}
            <img
              src={review.author.avatar}
              alt={review.author.name}
              className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            />

            {/* Content */}
            <div className="flex-1 flex flex-col gap-2">
              {/* Comment */}
              <p className="text-[#11212D] font-hanken text-[14px] leading-[21px]">
                {review.comment}
              </p>

              {/* Author and Date */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[#11212D] font-hanken text-[14px] font-medium">
                    {review.author.name}
                  </span>
                  <span className="text-[#777777] font-hanken text-[14px]">•</span>
                  <span className="text-[#777777] font-hanken text-[14px]">
                    {review.date}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
