#!/bin/bash

# Criar todos os componentes Submit Listing

echo "Creating Submit Listing components..."

# 1. StepIndicator
cat > src/components/forms/StepIndicator.tsx << 'EOF'
'use client';

import { Check } from 'lucide-react';

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
              {step.number < currentStep ? <Check size={20} /> : step.number}
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
          {index < steps.length - 1 && (
            <div className="w-24 h-0.5 bg-[#E0E0E0] mx-4" />
          )}
        </div>
      ))}
    </div>
  );
}
EOF

echo "✓ StepIndicator created"

# 2. WhySubmitCard
cat > src/components/ui/WhySubmitCard.tsx << 'EOF'
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
      <div className="h-48 bg-gradient-to-r from-blue-500 to-teal-500">
        <img
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070"
          alt="Azores"
          className="w-full h-full object-cover"
        />
      </div>
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
EOF

echo "✓ WhySubmitCard created"

echo "All components created successfully!"
