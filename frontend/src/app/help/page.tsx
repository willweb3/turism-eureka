import { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Help | AZOREON',
  description: "We're here to help you make the most of your Azores experience.",
};

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto">
          <HelpCircle className="mx-auto mb-4 text-[#3CA997]" size={48} />
          <h1 className="font-lufga text-3xl md:text-4xl font-bold text-[#11212D] mb-4">
            How Can We Help?
          </h1>
          <p className="font-hanken text-lg text-[#777777] mb-8">
            We're here to help you make the most of your Azores experience.
            <br />
            Contact us or browse our FAQ for assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#3CA997] hover:bg-[#3CA997]/90 text-white font-hanken font-medium text-base rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#3CA997] text-[#3CA997] hover:bg-[#3CA997]/5 font-hanken font-medium text-base rounded-full transition-all duration-300"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
