'use client';

import { useCheckoutStore } from '@/stores/checkoutStore';
import type { PersonalDetails } from '@/types/checkout';

interface Props {
  initialData: PersonalDetails;
}

export default function YourDetailsSection({ initialData }: Props) {
  const { formData, updateFormData } = useCheckoutStore();

  const handleChange = (field: keyof PersonalDetails, value: string) => {
    updateFormData({
      personal: { ...formData.personal, [field]: value } as any
    });
  };

  return (
    <div className="p-6 bg-white rounded-3xl space-y-4">
      <h2 className="text-2xl font-bold text-[#11212D] font-hanken">
        Your Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#11212D] font-hanken">
            Name
          </label>
          <input
            type="text"
            defaultValue={initialData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full p-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#11212D] font-hanken">
            Phone
          </label>
          <input
            type="tel"
            defaultValue={initialData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full p-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-[#11212D] font-hanken">
          Email
        </label>
        <input
          type="email"
          defaultValue={initialData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="w-full p-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB]"
        />
      </div>
    </div>
  );
}
