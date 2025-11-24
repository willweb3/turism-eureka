import Image from 'next/image';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: '1',
    name: 'Daniel Wilson',
    role: 'UX Designer',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    comment: 'I cannot recommend Waned Roust Travels enough. Their commitment to excellence truly sets them apart. I can\'t wait to book my next adventure!',
  },
  {
    id: '2',
    name: 'Sarah Lee',
    role: 'Marketing Manager',
    avatar: 'https://i.pravatar.cc/150?img=45',
    rating: 5,
    comment: 'Exploring the world with Waned Roust Travels was a dream! Their dedication to creating unforgettable moments was clear. Accommodations.',
  },
  {
    id: '3',
    name: 'Emily Carter',
    role: 'Project Manager',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
    comment: 'Waned Roust Travels exceeded all of my expectations. Every detail was meticulously planned, making my journey seamless and extraordinary.',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-dark-900 font-lufga font-semibold text-3xl md:text-4xl lg:text-5xl">
            Let's start a journey
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-neutral-700 font-hanken text-base leading-relaxed mb-6">
                "{testimonial.comment}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-dark-900 font-hanken font-semibold text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-neutral-600 font-hanken text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
