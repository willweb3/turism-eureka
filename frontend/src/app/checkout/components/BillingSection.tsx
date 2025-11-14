'use client';

import { useCheckoutStore } from '@/stores/checkoutStore';
import { ChevronDown } from 'lucide-react';

const COUNTRIES = [
  { code: 'PT', name: 'Portugal' },
  { code: 'ES', name: 'Spain' },
  { code: 'FR', name: 'France' },
  { code: 'DE', name: 'Germany' },
  { code: 'IT', name: 'Italy' },
  { code: 'UK', name: 'United Kingdom' },
  { code: 'US', name: 'United States' },
];

export default function BillingSection() {
  const { formData, updateFormData } = useCheckoutStore();

  const handleChange = (field: string, value: string) => {
    updateFormData({
      billing: { ...formData.billing, [field]: value } as any
    });
  };

  return (
    <div className="p-6 bg-white rounded-3xl space-y-4">
      <h2 className="text-2xl font-bold text-[#11212D] font-hanken">
        Billing details
      </h2>

      {/* Card holder's name */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#11212D] font-hanken">
          Card holder's name
        </label>
        <input
          type="text"
          onChange={(e) => handleChange('cardHolderName', e.target.value)}
          placeholder="João Marques"
          className="w-full p-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB]"
        />
      </div>

      {/* Address row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#11212D] font-hanken">
            Address
          </label>
          <input
            type="text"
            onChange={(e) => handleChange('address', e.target.value)}
            placeholder="Insert Address"
            className="w-full p-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#777777] placeholder:text-[#777777] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#11212D] font-hanken">
            Address Details <span className="text-[#777777]">(optional)</span>
          </label>
          <input
            type="text"
            onChange={(e) => handleChange('addressDetails', e.target.value)}
            placeholder="Insert Address Details"
            className="w-full p-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#777777] placeholder:text-[#777777] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB]"
          />
        </div>
      </div>

      {/* Postal Code & City */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#11212D] font-hanken">
            Postal Code
          </label>
          <input
            type="text"
            onChange={(e) => handleChange('postalCode', e.target.value)}
            placeholder="Insert Postal Code"
            className="w-full p-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#777777] placeholder:text-[#777777] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#11212D] font-hanken">
            City
          </label>
          <input
            type="text"
            onChange={(e) => handleChange('city', e.target.value)}
            placeholder="Insert City"
            className="w-full p-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#777777] placeholder:text-[#777777] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB]"
          />
        </div>
      </div>

      {/* State & Country */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#11212D] font-hanken">
            State <span className="text-[#777777]">(optional)</span>
          </label>
          <input
            type="text"
            onChange={(e) => handleChange('state', e.target.value)}
            placeholder="Insert State"
            className="w-full p-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#777777] placeholder:text-[#777777] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#11212D] font-hanken">
            Country
          </label>
          <div className="relative">
            <select
              onChange={(e) => handleChange('country', e.target.value)}
              className="w-full p-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#777777] font-hanken appearance-none focus:outline-none focus:ring-2 focus:ring-[#52C6BB]"
            >
              <option value="">Insert Country</option>
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#777777] pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
