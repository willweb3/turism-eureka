import { ListingDetail } from '@/types/listing-detail';

interface AboutOwnerProps {
  listing: ListingDetail;
}

export function AboutOwner({ listing }: AboutOwnerProps) {
  const { owner } = listing;

  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col gap-6">
      <h2 className="text-[24px] font-bold text-[#11212D] font-hanken leading-[31.2px]">
        About the owner
      </h2>

      <div className="flex items-start gap-4">
        <img
          src={owner.avatar}
          alt={owner.name}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />

        <div className="flex-1 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-[16px] font-bold text-[#11212D] font-hanken leading-[20.8px]">
              Hi! I'm {owner.name}, your host here in the beautiful Azores. I love welcoming guests from around the world and sharing the peaceful rhythm of island life.
            </h3>
            <p className="text-[#777777] font-hanken text-[14px] leading-[21px]">
              {owner.bio}
            </p>
          </div>

          <button className="self-start px-6 py-2 border border-[#BFC3C9] rounded-full text-[#11212D] font-hanken text-[14px] font-medium hover:bg-[#F2F6F8] transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}
