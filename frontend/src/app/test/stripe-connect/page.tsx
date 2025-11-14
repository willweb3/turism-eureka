'use client';

import { useState, useEffect } from 'react';
import { SharetribeListing, Host, StripeSimulationResult } from './types';
import { ProductCard } from './components/ProductCard';
import { CheckoutSimulator } from './components/CheckoutSimulator';
import { ResultDisplay } from './components/ResultDisplay';

// Mock hosts for demonstration
const MOCK_HOSTS: Host[] = [
  {
    id: 'host-1',
    name: 'João Silva',
    accountId: 'acct_demo_joao_2025',
    promoCode: 'JOAO2025',
  },
  {
    id: 'host-2',
    name: 'Maria Costa',
    accountId: 'acct_demo_maria_2025',
    promoCode: 'MARIA2025',
  },
  {
    id: 'host-3',
    name: 'Pedro Santos',
    accountId: 'acct_demo_pedro_2025',
    promoCode: 'PEDRO2025',
  },
];

export default function StripeConnectTestPage() {
  const [listings, setListings] = useState<SharetribeListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedListing, setSelectedListing] = useState<SharetribeListing | null>(null);
  const [simulationResult, setSimulationResult] = useState<StripeSimulationResult | null>(null);
  const [processing, setProcessing] = useState(false);

  // Fetch listings from Sharetribe API
  useEffect(() => {
    async function fetchListings() {
      try {
        setLoading(true);
        const response = await fetch('/api/sharetribe/listings?perPage=12');
        const data = await response.json();

        if (data.success) {
          setListings(data.data);
        } else {
          setError(data.error || 'Erro ao carregar produtos');
        }
      } catch (err) {
        setError('Erro de conexão ao carregar produtos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchListings();
  }, []);

  const handleSimulate = async (host: Host | null, promoCode: string) => {
    if (!selectedListing || !selectedListing.price) return;

    setProcessing(true);
    setError(null);

    try {
      const providerAccountId = selectedListing.author?.id || 'provider_demo';

      // Call real Stripe API
      const response = await fetch('/api/stripe/test-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: selectedListing.price.amount,
          currency: selectedListing.price.currency,
          listingId: selectedListing.id,
          listingTitle: selectedListing.title,
          providerAccountId,
          hostAccountId: host?.accountId,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to create payment');
      }

      // Transform API response to match StripeSimulationResult type
      const result: StripeSimulationResult = {
        success: true,
        paymentIntentId: data.data.paymentIntentId,
        breakdown: data.data.breakdown,
        transfers: data.data.transfers,
        timestamp: data.data.timestamp,
        dashboardUrl: data.data.dashboardUrl,
        mode: 'live',
      };

      setSimulationResult(result);

      // Scroll to result
      setTimeout(() => {
        document.getElementById('simulation-result')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    } catch (err: any) {
      console.error('Payment error:', err);
      setError(err.message || 'Erro ao processar pagamento');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Teste Stripe Connect - Sistema de Comissões Triplas
              </h1>
              <p className="text-gray-600 mt-2">
                Demonstração do sistema de pagamentos com comissões distribuídas automaticamente
              </p>
            </div>
            <div className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              Stripe Test Mode
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Onboarding Info Section */}
        <section>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Criar Connected Account
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Providers e Hosts precisam criar uma Connected Account no Stripe para receber pagamentos.
                  Use a página de onboarding para criar contas de teste.
                </p>
                <a
                  href="/test/stripe-connect/onboarding"
                  className="inline-block bg-gray-900 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition"
                >
                  Ir para Onboarding →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section>
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            Produtos do Sharetribe
          </h2>

          {loading && (
            <div className="text-center py-12 text-gray-500">
              A carregar produtos...
            </div>
          )}

          {error && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-gray-700">{error}</p>
            </div>
          )}

          {!loading && !error && listings.length === 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-gray-700">Nenhum produto disponível</p>
            </div>
          )}

          {!loading && !error && listings.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <ProductCard
                  key={listing.id}
                  listing={listing}
                  onSelect={setSelectedListing}
                  isSelected={selectedListing?.id === listing.id}
                />
              ))}
            </div>
          )}
        </section>

        {/* Checkout Simulator Section */}
        {selectedListing && (
          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-6">
              Simulador de Checkout
            </h2>
            <div className="max-w-2xl">
              <CheckoutSimulator
                listing={selectedListing}
                hosts={MOCK_HOSTS}
                onSimulate={handleSimulate}
                processing={processing}
              />
            </div>
          </section>
        )}

        {/* Simulation Result Section */}
        {simulationResult && (
          <section id="simulation-result">
            <h2 className="text-xl font-medium text-gray-900 mb-6">
              Resultado da Simulação
            </h2>
            <ResultDisplay
              result={simulationResult}
              currency={selectedListing?.price?.currency}
            />
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-sm text-gray-500 text-center">
            Página de teste - Stripe Connect Demo | AZOREON © 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
