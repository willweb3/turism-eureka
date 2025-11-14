# Todos os Componentes - Submit Listing

## COMPONENTE 1: StepIndicator
```tsx
// src/components/forms/StepIndicator.tsx
'use client';

interface Step {
  number: number;
  label: string;
}

interface StepIndicatorProps {
  currentStep: number;
  steps: Step[];
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center w-full max-w-2xl mx-auto mb-12">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          {/* Circle */}
          <div className="flex flex-col items-center">
            <div
              className={`
                flex items-center justify-center w-12 h-12 rounded-full font-hanken font-semibold text-sm transition-all
                ${
                  step.number === currentStep
                    ? 'bg-[#3CA997] text-white'
                    : step.number < currentStep
                    ? 'bg-[#3CA997] text-white'
                    : 'bg-white border-2 border-[#E0E0E0] text-[#A8A2A2]'
                }
              `}
            >
              {step.number}
            </div>
            <span
              className={`
                mt-2 text-xs font-hanken text-center
                ${
                  step.number === currentStep
                    ? 'text-[#11212D] font-semibold'
                    : 'text-[#A8A2A2]'
                }
              `}
            >
              {step.label}
            </span>
          </div>

          {/* Line */}
          {index < steps.length - 1 && (
            <div className="w-24 h-0.5 bg-[#E0E0E0] mx-4" />
          )}
        </div>
      ))}
    </div>
  );
}
```

## COMPONENTE 2: WhySubmitCard
```tsx
// src/components/ui/WhySubmitCard.tsx
import { Check } from 'lucide-react';

export function WhySubmitCard() {
  const benefits = [
    'Reach travelers from around the world',
    'Support sustainable Azorean tourism',
    'Join a community of local businesses',
    'Free listing with no hidden fees',
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Image */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-teal-500">
        <img
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070"
          alt="Azores"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-lufga font-semibold text-[#11212D] mb-4">
          Why Submit Your Experience?
        </h3>

        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D7F4F0] flex items-center justify-center">
                <Check size={14} className="text-[#3CA997]" strokeWidth={3} />
              </div>
              <span className="text-sm text-[#11212D] font-hanken">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

## COMPONENTE 3: FileUpload
```tsx
// src/components/ui/FileUpload.tsx
'use client';

import { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface FileUploadProps {
  value: File[];
  onChange: (files: File[]) => void;
  maxFiles?: number;
  maxSize?: number;
}

export function FileUpload({
  value,
  onChange,
  maxFiles = 4,
  maxSize = 5 * 1024 * 1024,
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter(
      (file) =>
        file.type.startsWith('image/') &&
        file.size <= maxSize &&
        value.length + files.length <= maxFiles
    );
    onChange([...value, ...validFiles].slice(0, maxFiles));
  };

  const removeFile = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Upload Area */}
      <div
        className={`
          relative border-2 border-dashed rounded-lg p-8 text-center transition-colors
          ${
            dragActive
              ? 'border-[#3CA997] bg-[#D7F4F0]/20'
              : 'border-[#E0E0E0] bg-white'
          }
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />

        <Upload className="w-12 h-12 text-[#A8A2A2] mx-auto mb-4" />
        <p className="text-[#11212D] font-hanken font-medium mb-1">Upload Photos</p>
        <p className="text-sm text-[#777777] font-hanken">
          Drag and drop photos here, or click to browse
        </p>
        <p className="text-xs text-[#A8A2A2] font-hanken mt-1">
          (Max {maxFiles} photos, 5MB each)
        </p>
      </div>

      {/* Preview Grid */}
      {value.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {value.map((file, index) => (
            <div key={index} className="relative group">
              <img
                src={URL.createObjectURL(file)}
                alt={`Preview ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                onClick={() => removeFile(index)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

## COMPONENTE 4: BasicInformationStep
```tsx
// src/components/forms/steps/BasicInformationStep.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { basicInformationSchema } from '@/lib/validations/submitListing';
import { useSubmitListingStore } from '@/lib/stores/submitListingStore';
import { FileUpload } from '@/components/ui/FileUpload';
import { ISLAND_LABELS, CATEGORY_LABELS } from '@/types/listing';
import { useState } from 'react';

export function BasicInformationStep() {
  const { setBasicInfo, goToNextStep } = useSubmitListingStore();
  const [images, setImages] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(basicInformationSchema),
  });

  const onSubmit = (data: any) => {
    setBasicInfo({ ...data, images });
    goToNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Listing Title */}
      <div>
        <label className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Listing Title
        </label>
        <input
          {...register('title')}
          className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent"
          placeholder="Enter a catchy title for this experience"
        />
        {errors.title && (
          <p className="text-sm text-red-500 mt-1">{errors.title.message as string}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Description
        </label>
        <textarea
          {...register('description')}
          rows={5}
          className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent resize-none"
          placeholder="Describe your experience in detail"
        />
        {errors.description && (
          <p className="text-sm text-red-500 mt-1">{errors.description.message as string}</p>
        )}
      </div>

      {/* Island & Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
            Select Island
          </label>
          <select
            {...register('island')}
            className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent"
          >
            <option value="">Select Island</option>
            {Object.entries(ISLAND_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {errors.island && (
            <p className="text-sm text-red-500 mt-1">{errors.island.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
            Select Category
          </label>
          <select
            {...register('category')}
            className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#3CA997] focus:border-transparent"
          >
            <option value="">Select Category</option>
            {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-sm text-red-500 mt-1">{errors.category.message as string}</p>
          )}
        </div>
      </div>

      {/* Photo Upload */}
      <div>
        <label className="block text-sm font-medium text-[#11212D] font-hanken mb-2">
          Photo Upload
        </label>
        <FileUpload value={images} onChange={setImages} />
        {images.length === 0 && errors.images && (
          <p className="text-sm text-red-500 mt-1">{errors.images.message as string}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-8 py-3 bg-[#3CA997] text-white rounded-lg font-hanken font-semibold hover:bg-[#2D9178] transition-colors"
        >
          Next Step →
        </button>
      </div>
    </form>
  );
}
```

## COMPONENTE 5: Submit Listing Page (ATUALIZADA)
```tsx
// src/app/submit-listing/page.tsx
'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StepIndicator } from '@/components/forms/StepIndicator';
import { WhySubmitCard } from '@/components/ui/WhySubmitCard';
import { BasicInformationStep } from '@/components/forms/steps/BasicInformationStep';
import { useSubmitListingStore } from '@/lib/stores/submitListingStore';

const STEPS = [
  { number: 1, label: 'Basic Information' },
  { number: 2, label: 'Contact & Socials' },
  { number: 3, label: 'Availability' },
  { number: 4, label: 'Review & Submit' },
];

export default function SubmitListingPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const { currentStep } = useSubmitListingStore();

  if (!isAuthenticated) {
    router.push('/auth?tab=login');
    return null;
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      {/* Hero Section */}
      <section className="bg-white pt-32 pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-lufga font-bold text-[#11212D] mb-4">
              Submit Your Listing
            </h1>
            <p className="text-lg text-[#777777] font-hanken">
              Share your activities, experiences, and services with travelers from around the world
            </p>
          </div>
        </div>
      </section>

      {/* Stepper */}
      <section className="bg-white pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <StepIndicator currentStep={currentStep} steps={STEPS} />
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <WhySubmitCard />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-lufga font-semibold text-[#11212D] mb-6">
                  Basic Information
                </h2>
                <BasicInformationStep />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
```

---

## Como Usar

1. Crie todos os arquivos acima nos locais especificados
2. O servidor Next.js deve recompilar automaticamente
3. Acesse: http://localhost:3000/submit-listing
4. Teste o formulário

## Falta Implementar

- Steps 2, 3, 4 (Contact & Socials, Availability, Review)
- Integração com Sharetribe API para criar listings
- Upload real de imagens para storage

