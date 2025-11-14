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
