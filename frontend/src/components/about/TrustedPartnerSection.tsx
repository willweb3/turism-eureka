import Image from 'next/image';

export function TrustedPartnerSection() {
  const stats = [
    {
      value: '9K+',
      label: 'Happy Travelers',
    },
    {
      value: '12+',
      label: 'Experience Categories',
    },
    {
      value: '90%',
      label: 'Positive Reviews',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F2F6F8]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1140px]">
        {/* Layout: 2 colunas - Conteúdo (esquerda) | Imagem (direita) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Coluna Esquerda - Texto + Stats */}
          <div className="flex-1">
            {/* Título + Descrição */}
            <div className="mb-16">
              <h2 className="text-[#11212D] font-lufga font-semibold text-4xl lg:text-5xl mb-6 max-w-[500px]">
                Your Trusted Travel Partner
              </h2>
              <p className="text-[#777777] font-hanken text-base leading-[1.6] max-w-[420px]">
                We're more than just a travel agency, we're your trusted partner in creating unforgettable journeys. Our commitment to personalized service, expert advice, and competitive pricing sets us apart.
              </p>
            </div>

            {/* Stats - 3 itens horizontais */}
            <div className="flex flex-wrap gap-x-16 gap-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="text-[#3FA08F] font-lufga font-bold text-5xl lg:text-6xl leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#777777] font-hanken text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Direita - Imagem */}
          <div className="flex-shrink-0">
            <div className="relative w-full lg:w-[380px] h-[300px] lg:h-[320px] overflow-hidden rounded-[24px]">
              <Image
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=90"
                alt="Traveler enjoying Azores landscape"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
