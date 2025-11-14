'use client';

import { useRouter } from 'next/navigation';

export default function OnboardingSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Onboarding Completo
          </h1>
          <p className="text-gray-600">
            Sua conta foi criada com sucesso!
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                Conta Conectada Ativa
              </h3>
              <p className="text-xs text-gray-600">
                Você pode agora receber pagamentos através da plataforma AZOREON.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                Modo Teste
              </h3>
              <p className="text-xs text-gray-600">
                Esta é uma conta de teste. Use dados fictícios para testar pagamentos.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                Próximo Passo
              </h3>
              <p className="text-xs text-gray-600">
                Volte à página de teste e use seu Account ID para simular recebimentos.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            onClick={() => router.push('/test/stripe-connect')}
            className="w-full bg-gray-900 text-white py-3 rounded font-medium hover:bg-gray-800 transition"
          >
            Voltar para Página de Teste
          </button>

          <button
            onClick={() => window.open('https://dashboard.stripe.com/test/connect/accounts/overview', '_blank')}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded font-medium hover:bg-gray-50 transition"
          >
            Ver no Stripe Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
