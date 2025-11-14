import Image from 'next/image';

interface JourneyCardProps {
  image: string;
  title: string;
  description: string;
}

export function JourneyCard({ image, title, description }: JourneyCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Image */}
      <div className="relative overflow-hidden rounded-3xl aspect-[16/11] mb-6 transition-transform duration-300 group-hover:scale-[1.02]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-white font-hanken font-semibold text-xl lg:text-2xl">
          {title}
        </h3>
        <p className="text-white/80 font-hanken font-light text-sm lg:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
