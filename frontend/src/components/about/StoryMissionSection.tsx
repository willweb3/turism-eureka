import Image from 'next/image';

export function StoryMissionSection() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=90',
      alt: 'Azores volcanic landscape',
    },
    {
      src: 'https://images.unsplash.com/photo-1580881657123-e3b7b72e9fbb?w=600&q=90',
      alt: 'Azores coastal village',
    },
    {
      src: 'https://images.unsplash.com/photo-1571084195066-6c303d14f87b?w=600&q=90',
      alt: 'Azores green hills',
    },
    {
      src: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=90',
      alt: 'Azores nature',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1140px]">
        {/* Layout: Grid de Imagens (esquerda) + Textos (direita) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Grid de Imagens - 2x2 Assimétrico */}
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-4 w-full lg:w-[371px]">
              {/* Top-left: vertical/portrait - mais alta */}
              <div className="relative w-full h-[180px] overflow-hidden rounded-[24px]">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={90}
                />
              </div>

              {/* Top-right: quadrada */}
              <div className="relative w-full h-[155px] overflow-hidden rounded-[24px]">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={90}
                />
              </div>

              {/* Bottom-left: quadrada */}
              <div className="relative w-full h-[155px] overflow-hidden rounded-[24px]">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={90}
                />
              </div>

              {/* Bottom-right: horizontal/landscape */}
              <div className="relative w-full h-[155px] overflow-hidden rounded-[24px]">
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
