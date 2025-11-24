'use client';

import Image from 'next/image';

interface SocialShareProps {
  url: string;
  title: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleShare('facebook')}
        className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
        aria-label="Share on Facebook"
      >
        <Image
          src="/icons/social/facebook.svg"
          alt="Facebook"
          width={32}
          height={32}
        />
      </button>

      <button
        onClick={() => {}}
        className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
        aria-label="Share on Instagram"
      >
        <Image
          src="/icons/social/instagram.svg"
          alt="Instagram"
          width={32}
          height={32}
        />
      </button>

      <button
        onClick={() => handleShare('twitter')}
        className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
        aria-label="Share on X"
      >
        <Image
          src="/icons/social/x.svg"
          alt="X"
          width={32}
          height={32}
        />
      </button>
    </div>
  );
}
