'use client';

import { BadgePercent, Star, TrendingUp, Banknote, Map, LayoutDashboard, BarChart3, Users } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: BadgePercent,
      title: 'Make up to 10% sales commision',
    },
    {
      icon: Star,
      title: 'Recommended content for promotion',
    },
    {
      icon: TrendingUp,
      title: 'A conversion rate of more than 3%',
    },
    {
      icon: Banknote,
      title: 'Regular payments by bank transfer or Paypal',
    },
    {
      icon: Map,
      title: '1000 activities all over the island',
    },
    {
      icon: LayoutDashboard,
      title: 'Simple & easy way to use affiliates panel',
    },
    {
      icon: BarChart3,
      title: 'Real time statistics and metrics',
    },
    {
      icon: Users,
      title: 'Personalised attention to help you earn more money',
    },
  ];

  return (
    <section className="py-20 bg-[#0E1B25]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px]">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-[32px] md:text-[42px] font-lufga font-semibold text-white">
            Benefits of list with us
          </h2>
        </div>

        {/* Benefits Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#152938] flex flex-col items-center justify-center gap-4 hover:bg-[#1a3344] transition-colors duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-[#3CA997]" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-[20px] leading-[26px] font-hanken font-semibold text-white text-center">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
