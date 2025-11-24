'use client';

import Image from 'next/image';

export function ActivitiesSection() {
  const activities = [
    {
      title: 'Restaurants experience',
      description:
        'We manage planning and booking for your adventure. Our services ensure a smooth travel experience.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Cultural Tours',
      description:
        'We handle the everything for your adventure, ensuring every detail is covered for a seamless travel experience.',
      image: 'https://images.unsplash.com/photo-1555217851-6141535bd771?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Adventure',
      description:
        'Let us take care of your adventure planning and bookings, so you can enjoy a hassle-free travel  journey.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px]">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-[32px] md:text-[42px] leading-[54.6px] font-lufga font-semibold text-[#11212D]">
            Activities we welcome
          </h2>
        </div>

        {/* Activities Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-[#F2F6F8] rounded-2xl overflow-hidden pb-6"
            >
              {/* Image */}
              <div className="relative w-full h-[218px] overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-4 pt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[24px] leading-[31.2px] font-hanken font-semibold text-[#11212D]">
                    {activity.title}
                  </h3>
                  <p className="text-[14px] leading-[21px] font-hanken text-[#777777]">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
