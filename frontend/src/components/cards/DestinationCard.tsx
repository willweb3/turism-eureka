import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  title: string;
  subtitle?: string;
  rating?: number;
  reviewCount?: number;
  href: string;
}

export function DestinationCard({
  image,
  title,
  subtitle,
  rating,
  reviewCount,
  href,
}: DestinationCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-3xl aspect-[16/11] shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]">
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-hanken font-semibold text-xl lg:text-2xl mb-1">
            {title}
          </h3>
          {subtitle && (
            <p className="text-white/90 text-sm lg:text-base font-light mb-3">
              {subtitle}
            </p>
          )}

          {rating && reviewCount && (
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-accent text-accent" />
                <span className="font-medium">{rating}</span>
              </div>
              <span className="text-white/70">({reviewCount} reviews)</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
