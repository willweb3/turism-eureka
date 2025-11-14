import { Gift, Star, Calendar } from 'lucide-react';

const FEATURES = [
  {
    id: '1',
    icon: Gift,
    iconBg: 'bg-primary-500',
    title: 'Earn rewards',
    description: 'Explore, earn, redeem, and repeat with our loyalty program.',
  },
  {
    id: '2',
    icon: Star,
    iconBg: 'bg-secondary',
    title: 'Millions of reviews',
    description: 'Plan and book with confidence using reviews from fellow travelers.',
  },
  {
    id: '3',
    icon: Calendar,
    iconBg: 'bg-accent',
    title: 'Plan your way',
    description: 'Enjoy free cancellation and reserve now, pay later.',
  },
];

export function WhyBookAzoreon() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-dark-900 font-lufga font-semibold text-3xl md:text-4xl lg:text-5xl">
            Why book with Azoreon?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full ${feature.iconBg} flex items-center justify-center mb-4 border-2 border-dark-900`}>
                  <Icon size={32} className="text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-dark-900 font-hanken font-semibold text-lg lg:text-xl mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-dark-900/70 font-hanken text-sm lg:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
