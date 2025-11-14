'use client';

import { useRouter } from 'next/navigation';

export default function OnboardingRefreshPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Onboarding Interrompido
        </h1>
        <p className="text-gray-600 mb-8">
          O processo de onboarding foi interrompido ou expirou.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-left">
          <p className="text-sm text-gray-700">
            Para continuar, você precisará iniciar o processo novamente.
            Se tiver problemas, contacte o suporte.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => router.push('/test/stripe-connect/onboarding')}
            className="w-full bg-gray-900 text-white py-3 rounded font-medium hover:bg-gray-800 transition"
          >
            Tentar Novamente
          </button>

          <button
            onClick={() => router.push('/test/stripe-connect')}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded font-medium hover:bg-gray-50 transition"
          >
            Voltar para Página de Teste
          </button>
        </div>
      </div>
    </div>
  );
}
