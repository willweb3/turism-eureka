'use client';

import Image from 'next/image';

export function WhyListSection() {
  const benefits = [
    {
      icon: '/icons/become-partner/become-partner-icon-1.svg',
      title: 'Reach thousands\nmonthly visitors',
      description:
        'Bring your travel bussiness to millions of worldwide travelers visiting Azoreon each month.',
    },
    {
      icon: '/icons/become-partner/become-partner-icon-2.svg',
      title: 'Access a huge list of\ndistribution partners',
      description:
        'When you publich on Azoreon our global network of bloggers and maketers will promote your activity globally.',
    },
    {
      icon: '/icons/become-partner/become-partner-icon-3.svg',
      title: 'Optimize your revenue strategy',
      description:
        'Maximize your earnings with our suite of analytics and insights to optimize your inventory, manage demand and improve pricing.',
    },
    {
      icon: '/icons/become-partner/become-partner-icon-4.svg',
      title: 'Expert application\nreview',
      description:
        'This ensures only high quality experiences make it onto our platform. Our process protects your brand and maintain your standards.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1140px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[42px] leading-[54.6px] font-lufga font-semibold text-[#11212D] mb-4">
            Why list on Azoreon
          </h2>
          <p className="text-[18px] leading-[29.52px] font-hanken text-[#777777] max-w-[744px] mx-auto">
            Authentic stays, cultural immersion, and sustainable travel &mdash; tailored just for you.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col gap-4"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <Image
                  src={benefit.icon}
                  alt=""
                  width={42}
                  height={42}
                  className="w-[42px] h-[42px]"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[24px] leading-[31.2px] font-hanken font-bold text-[#11212D] whitespace-pre-line">
                  {benefit.title}
                </h3>
                <p className="text-[14px] leading-[21px] font-hanken text-[#777777]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
