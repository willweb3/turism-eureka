import { TrendingUp, RefreshCw, Briefcase } from 'lucide-react';

export function WhyChooseSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Optimize your revenue strategy',
      description:
        'Maximize your earnings with our suite of powerful revenue management tools: optimize your inventory, manage demand and improve pricing.',
    },
    {
      icon: RefreshCw,
      title: 'Reach 40 million+ monthly visitors',
      description:
        'Bring your travel business to millions of worldwide travelers visiting Azoreon each month.',
    },
    {
      icon: Briefcase,
      title: 'Access 15,000+ distribution partners',
      description:
        'When you publish on Azoreon our global network of bloggers and marketers will promote your activity globally.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1140px]">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-[#11212D] font-lufga font-semibold text-4xl lg:text-5xl mb-4">
            Why Choose Azoreon
          </h2>
          <p className="text-[#777777] font-hanken text-base leading-[1.6] max-w-[600px] mx-auto">
            Authentic stays, cultural immersion, and sustainable travel — tailored just for you.
          </p>
        </div>

        {/* Benefits Grid - 3 cards sem background */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div key={index} className="text-left">
                {/* Ícone - line style, sem círculo */}
                <div className="mb-5">
                  <Icon className="w-8 h-8 text-[#3FA08F]" strokeWidth={1.5} />
                </div>

                {/* Título */}
                <h3 className="text-[#11212D] font-lufga font-semibold text-lg lg:text-xl mb-3 leading-tight">
                  {benefit.title}
                </h3>

                {/* Descrição */}
                <p className="text-[#777777] font-hanken text-sm leading-[1.6]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
