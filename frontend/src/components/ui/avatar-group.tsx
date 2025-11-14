import Image from 'next/image';

interface AvatarData {
  src: string;
  alt: string;
}

interface AvatarGroupProps {
  avatars: AvatarData[];
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}

export function AvatarGroup({ avatars, max = 4, size = 'md' }: AvatarGroupProps) {
  const displayAvatars = avatars.slice(0, max);
  const remaining = avatars.length - max;

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex items-center -space-x-2">
      {displayAvatars.map((avatar, index) => (
        <div
          key={index}
          className={`${sizeClasses[size]} rounded-full border-2 border-white ring-1 ring-white/20 overflow-hidden bg-gray-200 relative`}
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
      {remaining > 0 && (
        <div
          className={`${sizeClasses[size]} rounded-full bg-primary-500 border-2 border-white flex items-center justify-center text-white text-xs font-medium`}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
}
