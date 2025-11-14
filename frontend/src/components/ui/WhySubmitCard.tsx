import { Check } from 'lucide-react';

export function WhySubmitCard() {
  const benefits = [
    'Reach travelers from around the world',
    'Support sustainable Azorean tourism',
    'Join a community of local businesses',
    'Free listing with no hidden fees',
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden sticky top-24">
      <div className="h-44 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800"
          alt="Azores"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-hanken font-bold text-[#11212D] mb-4">
          Why Submit Your Experience?
        </h3>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D7F4F0] flex items-center justify-center mt-0.5">
                <Check size={12} className="text-[#3CA997]" strokeWidth={3} />
              </div>
              <span className="text-sm text-[#11212D] font-hanken leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
