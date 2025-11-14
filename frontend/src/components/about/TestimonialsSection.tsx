'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  avatar: string;
  location: string;
  rating: number;
  comment: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: 'Alex Johnson',
      avatar: 'https://i.pravatar.cc/150?img=12',
      location: 'Alberta, Canada',
      rating: 5,
      comment:
        'Amazing experience with Wired roat Transit! Their travel service trip unforgget. From stunning accomor to itineraries.',
    },
    {
      name: 'Daniel Wilson',
      avatar: 'https://i.pravatar.cc/150?img=33',
      location: 'Los Angeles',
      rating: 5,
      comment:
        '"I cannot recommend Wired Roati Travels enough. Their commitment to excellence truly sets them apart. I can\'t wait to book my next adventure!"',
    },
    {
      name: 'Sarah Lee',
      avatar: 'https://i.pravatar.cc/150?img=45',
      location: 'Los Angeles',
      rating: 5,
      comment:
        '"Exploring the world with Wired Roati Travels was a dream Their dedication to creating unforgettable moments was Accommodation.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1140px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-lufga font-semibold text-4xl lg:text-5xl mb-4">
            <span className="text-[#3FA08F]">60+</span>{' '}
            <span className="text-[#11212D]">Share Experiences</span>
          </h2>
          <p className="text-[#777777] font-hanken text-base leading-[1.6] max-w-[650px] mx-auto">
            Join 1600+ travelers sharing experiences Discover exclusive travel packages for every adventureseeker. Our deals help you find the perfect getaway.
          </p>
        </div>

        {/* Testimonials Grid - 3 cards horizontais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F2F6F8] rounded-2xl p-6 lg:p-7"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-[#FFBA33] text-[#FFBA33]'
                        : 'fill-gray-300 text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-[#11212D] font-hanken text-sm leading-[1.6] mb-5">
                {testimonial.comment}
              </p>

              {/* Author - Avatar + Nome + Location */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-[#11212D] font-hanken font-semibold text-sm leading-tight">
                    {testimonial.name}
                  </div>
                  <div className="text-[#777777] font-hanken text-xs leading-tight">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
