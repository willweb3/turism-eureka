import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Loading skeleton */}
          <div className="animate-pulse space-y-6">
            {/* Header skeleton */}
            <div className="space-y-2">
              <div className="h-10 bg-gray-200 rounded w-64"></div>
              <div className="h-6 bg-gray-200 rounded w-96"></div>
            </div>

            {/* Cards skeleton */}
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-[16px] p-5 shadow-sm"
                >
                  <div className="flex gap-4">
                    <div className="w-[224px] h-[180px] bg-gray-200 rounded flex-shrink-0"></div>
                    <div className="flex-1 space-y-3">
                      <div className="h-7 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-5 bg-gray-200 rounded w-2/3"></div>
                      <div className="h-8 bg-gray-200 rounded w-32"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
