'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [accountId, setAccountId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    email: '',
    type: 'provider' as 'provider' | 'host',
    businessName: '',
  });

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/stripe/create-connected-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to create account');
      }

      setAccountId(data.data.accountId);

      // Redirect to Stripe onboarding
      if (data.data.onboardingUrl) {
        window.location.href = data.data.onboardingUrl;
      }
    } catch (err: any) {
      console.error('Onboarding error:', err);
      setError(err.message || 'Failed to start onboarding');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Stripe Connect Onboarding
          </h1>
          <p className="text-gray-600 mt-2">
            Criar conta para receber pagamentos (Modo Teste)
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-2">
            O que é isto?
          </h2>
          <div className="text-sm text-gray-700 space-y-2">
            <p>
              Esta página permite criar uma <strong>Connected Account</strong> de teste no Stripe.
            </p>
            <p>
              Providers e Hosts precisam completar este processo para receber pagamentos
              automaticamente através da plataforma AZOREON.
            </p>
            <p className="text-xs text-gray-600 mt-3">
              <strong>Modo Teste:</strong> Use dados fictícios. Nenhuma informação real será processada.
            </p>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {accountId && (
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Account ID:</strong> {accountId}
            </p>
            <p className="text-xs text-gray-600">
              A redirecionar para Stripe onboarding...
            </p>
          </div>
        )}

        <form onSubmit={handleCreateAccount} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="exemplo@teste.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use um email fictício para teste (não precisa ser real)
            </p>
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Conta
            </label>
            <select
              id="type"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as 'provider' | 'host' })}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
            >
              <option value="provider">Provider (Prestador de Serviços)</option>
              <option value="host">Host (Anfitrião com Código Promo)</option>
            </select>
          </div>

          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
              Nome do Negócio (Opcional)
            </label>
            <input
              type="text"
              id="businessName"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              placeholder="Ex: Tours Açores"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white py-3 rounded font-medium hover:bg-gray-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {loading ? 'A criar conta...' : 'Criar Conta e Começar Onboarding'}
          </button>
        </form>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Próximos Passos
          </h3>
          <ol className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mr-3 text-xs font-medium">
                1
              </span>
              <div>
                Criar a conta preenchendo o formulário acima
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mr-3 text-xs font-medium">
                2
              </span>
              <div>
                Completar onboarding no Stripe (dados fictícios em modo teste)
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mr-3 text-xs font-medium">
                3
              </span>
              <div>
                Usar o Account ID gerado na página de teste para receber pagamentos
              </div>
            </li>
          </ol>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => router.push('/test/stripe-connect')}
            className="text-sm text-gray-600 hover:text-gray-900 underline"
          >
            ← Voltar para página de teste
          </button>
        </div>
      </main>
    </div>
  );
}
