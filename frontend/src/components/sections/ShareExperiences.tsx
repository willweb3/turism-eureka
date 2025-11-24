'use client';

import Image from 'next/image';

const TESTIMONIALS_BASE = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'Software Engineer',
    avatar: 'https://i.pravatar.cc/150?img=8',
    rating: 5,
    comment: '"I had an amazing experience with Waned roust Travels! Their personalized service trip unforged. From stunning accompt to curated itineraries.',
    width: 451,
  },
  {
    id: '2',
    name: 'Daniel Wilson',
    role: 'UX Designer',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    comment: '"I cannot recommend Waned Roust Travels enough. Their commitment to excellence truly sets them apart. I can\'t wait to book my next adventure!"',
    width: 423,
  },
  {
    id: '3',
    name: 'Sarah Lee',
    role: 'Marketing Manager',
    avatar: 'https://i.pravatar.cc/150?img=45',
    rating: 5,
    comment: '"Exploring the world with Waned Roust Travels was a dream! Their dedication to creating unforgettable moments was clear. Accommodations.',
    width: 443,
  },
  {
    id: '4',
    name: 'Emily Carter',
    role: 'Project Manager',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
    comment: '"Waned Roust Travels exceeded all of my expectations! Every detail was meticulously planned, making my journey seamless and extraordinary."',
    width: 451,
  },
];

// Duplicate for infinite scroll (12 total cards = 4 unique x 3 for better coverage)
const TESTIMONIALS = [...TESTIMONIALS_BASE, ...TESTIMONIALS_BASE, ...TESTIMONIALS_BASE];

export function ShareExperiences() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          {/* Stat Highlight */}
          <h2 className="mb-4">
            <span className="text-primary-600 font-lufga font-semibold text-4xl lg:text-5xl">
              60+
            </span>
            <span className="text-dark-900 font-lufga font-semibold text-4xl lg:text-5xl">
              {' '}Share Experiences
            </span>
          </h2>

          {/* Description */}
          <p className="text-neutral-600 font-hanken text-base lg:text-lg leading-relaxed">
            Join 9600 travelers sharing experiences! Discover exclusive travel
            packages for every adventureseeker. Our deals help you find the
            perfect getaway.
          </p>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative">
        <div className="flex animate-infinite-scroll"
          style={{
            gap: '24px',
            animation: 'infinite-scroll 30s linear infinite'
          }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <article
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0"
              style={{
                width: `${testimonial.width}px`,
                padding: '32px',
                background: '#F2F6F8',
                borderRadius: '18px',
                display: 'inline-flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {/* Star Rating */}
              <div style={{ width: '116px', height: '19px', position: 'relative', overflow: 'hidden' }}>
                {[0, 24, 48, 72, 96].map((left, i) => (
                  <div key={i} style={{ width: '20px', height: '19px', left: `${left}px`, top: '0px', position: 'absolute' }}>
                    <Image
                      src="/icon-star.svg"
                      alt="Star"
                      width={20}
                      height={19}
                      style={{ position: 'absolute', left: '0px', top: '0px' }}
                    />
                  </div>
                ))}
              </div>

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
