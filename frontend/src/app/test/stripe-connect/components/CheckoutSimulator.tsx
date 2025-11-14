import { useState } from 'react';
import { SharetribeListing, Host } from '../types';
import { formatCurrency } from '../utils/simulation';

interface CheckoutSimulatorProps {
  listing: SharetribeListing;
  hosts: Host[];
  onSimulate: (host: Host | null, promoCode: string) => void;
  processing?: boolean;
}

export function CheckoutSimulator({ listing, hosts, onSimulate, processing = false }: CheckoutSimulatorProps) {
  const [selectedHostId, setSelectedHostId] = useState<string>('');
  const [promoCode, setPromoCode] = useState<string>('');

  const selectedHost = hosts.find(h => h.id === selectedHostId) || null;
  const price = listing.price?.amount || 0;

  // Calculate preview of commission breakdown
  const hasHost = !!selectedHost;
  const platformFee = Math.round((price * 10) / 100);
  const providerAmount = Math.round((price * 85) / 100);
  const hostAmount = hasHost ? Math.round((price * 5) / 100) : 0;

  const handleSimulate = () => {
    onSimulate(selectedHost, promoCode);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Produto Selecionado</h3>
        <p className="text-gray-700">{listing.title}</p>
        <p className="text-2xl font-semibold text-gray-900 mt-2">
          {listing.price ? formatCurrency(price, listing.price.currency) : 'N/A'}
        </p>
      </div>

      <div>
        <label htmlFor="host-select" className="block text-sm font-medium text-gray-700 mb-2">
          Selecionar Host (Opcional)
        </label>
        <select
          id="host-select"
          value={selectedHostId}
          onChange={(e) => setSelectedHostId(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
        >
          <option value="">Sem Host</option>
          {hosts.map((host) => (
            <option key={host.id} value={host.id}>
              {host.name} (Código: {host.promoCode})
            </option>
          ))}
        </select>
        <p className="text-xs text-gray-500 mt-1">
          Se um host for selecionado, receberá 5% de comissão
        </p>
      </div>

      <div>
        <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700 mb-2">
          Código Promocional (Opcional)
        </label>
        <input
          type="text"
          id="promo-code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
          placeholder="Ex: JOAO2025"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
        />
      </div>

      {/* Preview of commission breakdown */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Prévia da Divisão</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Plataforma (10%)</span>
            <span className="font-medium text-gray-900">{formatCurrency(platformFee, listing.price?.currency || 'EUR')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Provider (85%)</span>
            <span className="font-medium text-gray-900">{formatCurrency(providerAmount, listing.price?.currency || 'EUR')}</span>
          </div>
          {hasHost && (
            <div className="flex justify-between">
              <span className="text-gray-600">Host (5%)</span>
              <span className="font-medium text-gray-900">{formatCurrency(hostAmount, listing.price?.currency || 'EUR')}</span>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={handleSimulate}
        disabled={!listing.price || processing}
        className="w-full bg-gray-900 text-white py-3 rounded font-medium hover:bg-gray-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {processing ? 'A processar...' : 'Processar Pagamento'}
      </button>
    </div>
  );
}
