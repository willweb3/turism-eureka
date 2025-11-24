import Image from 'next/image';

export function StoryMissionSection() {
  const images = [
    {
      src: '/images/about-image-1.jpg',
      alt: 'Azores volcanic landscape',
    },
    {
      src: '/images/about-image-2.jpg',
      alt: 'Azores coastal village',
    },
    {
      src: '/images/about-image-3.jpg',
      alt: 'Azores green hills',
    },
    {
      src: '/images/about-image-4.jpg',
      alt: 'Azores nature',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1140px]">
        {/* Layout: Grid de Imagens (esquerda) + Textos (direita) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Grid de Imagens - 2x2 Assimétrico conforme design */}
          <div className="flex-shrink-0">
            <div className="inline-flex flex-wrap gap-5 w-full lg:w-[514px]">
              {/* Top-left: maior (291.41 x 231.86) */}
              <div className="relative w-full lg:w-[291px] h-[232px] overflow-hidden rounded-[24px] bg-black">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={90}
                />
              </div>

              {/* Top-right: menor (202.72 x 231.86) */}
              <div className="relative w-full lg:w-[203px] h-[232px] overflow-hidden rounded-[24px] bg-black">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={90}
                />
              </div>

              {/* Bottom-left: menor (202.72 x 231.86) */}
              <div className="relative w-full lg:w-[203px] h-[232px] overflow-hidden rounded-[24px] bg-black">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={90}
                />
              </div>

              {/* Bottom-right: maior (291.41 x 231.86) */}
              <div className="relative w-full lg:w-[291px] h-[232px] overflow-hidden rounded-[24px] bg-black">
                <Image
                  src={images[3].src}
                  alt={images[3].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={90}
                />
              </div>
            </div>
          </div>

          {/* Textos: Our Story + Our Mission */}
          <div className="flex-1 max-w-[520px] space-y-12">
            {/* Our Story */}
            <div>
              <h2 className="text-[#11212D] font-lufga font-semibold text-3xl lg:text-4xl mb-5">
                Our Story
              </h2>
              <p className="text-[#777777] font-hanken text-base leading-[1.65]">
                Lorem ipsum nisl porttitor scelerisque neque diam convallis sagittis neque diam velit aliquam habitant nisl pretium diam id elementum ipsum elit sed quam lacus elit ultricies pretium purus accumsan ipsum lorem dictum netus tellus fringilla ante condimentum iaculis aliquet dui in donec eget dolor vestibulum et facilisis netus id scelerisque.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-[#11212D] font-lufga font-semibold text-3xl lg:text-4xl mb-5">
                Our Mission
              </h2>
              <p className="text-[#777777] font-hanken text-base leading-[1.65]">
                Lorem ipsum aliquam et tincidunt ornare mauris metus aliquam lectus justo cras posuere ac neque odio dictumst egestas morbi lectus tincidunt id amet aliquet in scelerisque pellentesque erat amet velit bibendum amet odio potenti luctus facilisi at tristique felis laoreet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
