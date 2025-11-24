"use client";

import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useSubmitListingStore } from "@/lib/stores/submitListingStore";
import { StepIndicator } from "@/components/forms/StepIndicator";
import { WhySubmitCard } from "@/components/ui/WhySubmitCard";
import { BasicInformationStep } from "@/components/forms/steps/BasicInformationStep";
import { ContactSocialStep } from "@/components/forms/steps/ContactSocialStep";
import { AvailabilityStep } from "@/components/forms/steps/AvailabilityStep";
import { ReviewSubmitStep } from "@/components/forms/steps/ReviewSubmitStep";

const steps = [
  {
    number: 1,
    label: "Basic Information",
    title: "Basic Information",
    description: "Tell us about your experience",
  },
  {
    number: 2,
    label: "Contact & Social",
    title: "Contact & Social",
    description: "How can travelers reach you?",
  },
  { number: 3, label: "Pricing & Availability", title: "Pricing & Availability", description: "Set your rates" },
  { number: 4, label: "Review & Submit", title: "Review & Submit", description: "Final check" },
];

export default function SubmitListingPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const currentStep = useSubmitListingStore((state) => state.currentStep);

  // Redirect se não estiver autenticado
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth?tab=login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInformationStep />;
      case 2:
        return <ContactSocialStep />;
      case 3:
        return <AvailabilityStep />;
      case 4:
        return <ReviewSubmitStep />;
      default:
        return <BasicInformationStep />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header transparent={false} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(82,198,187,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(82,198,187,0.2),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-lufga font-bold text-black mb-4">
              Submit Your Experience
            </h1>
            <p className="text-xl text-black/80 font-hanken">
              Share your unique Azorean experience with travelers from around
              the world
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Step Indicator */}
          <StepIndicator currentStep={currentStep} steps={steps} />

          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Sidebar - 1 column (LEFT) */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <WhySubmitCard />
            </div>

            {/* Main Form - 2 columns (RIGHT) */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="mb-6">
                  <h2 className="text-xl font-hanken font-bold text-[#11212D]">
                    {steps[currentStep - 1].title}
                  </h2>
                </div>

                {/* Render Current Step */}
                {renderStep()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
