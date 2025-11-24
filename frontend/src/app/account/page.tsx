import { Metadata } from 'next';
import { User } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'My Account | AZOREON',
  description: 'Manage your personal information, preferences, and account settings.',
};

export default function AccountPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={false} />

      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto w-full">
          <User className="mx-auto mb-4 text-[#3CA997]" size={48} />
          <h1 className="font-lufga text-3xl md:text-4xl font-bold text-[#11212D] mb-4">
            My Account
          </h1>
          <p className="font-hanken text-lg text-[#777777] mb-8">
            Manage your personal information, preferences, and account settings.
          </p>

          {/* Placeholder content */}
          <div className="mt-8 p-6 border border-[#E5E7EB] rounded-lg bg-white">
            <p className="text-[#777777] font-hanken">
              Account management interface coming soon
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
