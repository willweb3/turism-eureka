'use client';

import Image from 'next/image';

const TESTIMONIALS_BASE = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'Software Engineer',
    avatar: 'https://i.pravatar.cc/150?img=8',
    comment: '"I had an amazing experience with Waned roust Travels! Their personalized service trip unforged. From stunning accompt to curated itineraries.',
  },
  {
    id: '2',
    name: 'Daniel Wilson',
    role: 'UX Designer',
    avatar: 'https://i.pravatar.cc/150?img=12',
    comment: '"I cannot recommend Waned Roust Travels enough. Their commitment to excellence truly sets them apart. I can\'t wait to book my next adventure!"',
  },
  {
    id: '3',
    name: 'Sarah Lee',
    role: 'Marketing Manager',
    avatar: 'https://i.pravatar.cc/150?img=45',
    comment: '"Exploring the world with Waned Roust Travels was a dream! Their dedication to creating unforgettable moments was clear. Accommodations.',
  },
  {
    id: '4',
    name: 'Sarah Lee',
    role: 'Marketing Manager',
    avatar: 'https://i.pravatar.cc/150?img=32',
    comment: '"Exploring the world with Waned Roust Travels was a dream! Their dedication to creating unforgettable moments was clear. Accommodations.',
  },
];

// Duplicate for infinite scroll (12 total cards = 4 unique x 3)
const TESTIMONIALS = [...TESTIMONIALS_BASE, ...TESTIMONIALS_BASE, ...TESTIMONIALS_BASE];

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-[32px] md:text-[48px] leading-tight font-lufga font-semibold text-[#11212D] mb-2">
            Operators success stories
          </h2>
          <p className="text-[18px] leading-[29.52px] font-hanken text-[#777777]">
            What do other affiliates think and how Azoreon change their lives,<br />
            start earning and join our community .
          </p>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative">
        <div
          className="flex"
          style={{
            gap: '32px',
            animation: 'infinite-scroll 40s linear infinite',
          }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <article
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0"
              style={{
                width: '401px',
                padding: '32px',
                background: '#F2F6F8',
                borderRadius: '18px',
                display: 'inline-flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {/* Comment */}
              <p
                style={{
                  color: '#11212D',
                  fontSize: '16px',
                  fontFamily: 'Hanken Grotesk',
                  fontWeight: 400,
                  lineHeight: '26.24px',
                }}
              >
                {testimonial.comment}
              </p>

              {/* Author Info */}
              <div className="flex items-end gap-4">
                <div className="relative w-[53px] h-[53px] rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div
                    style={{
                      color: '#11212D',
                      fontSize: '18px',
                      fontFamily: 'Hanken Grotesk',
                      fontWeight: 400,
                      lineHeight: '29.52px',
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    style={{
                      color: '#777777',
                      fontSize: '14px',
                      fontFamily: 'Hanken Grotesk',
                      fontWeight: 300,
                      lineHeight: '22.96px',
                    }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
