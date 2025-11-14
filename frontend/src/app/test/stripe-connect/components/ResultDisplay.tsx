import { StripeSimulationResult } from '../types';
import { BreakdownTable } from './BreakdownTable';

interface ResultDisplayProps {
  result: StripeSimulationResult;
  currency?: string;
}

export function ResultDisplay({ result, currency = 'EUR' }: ResultDisplayProps) {
  const isRealPayment = result.mode === 'live';

  return (
    <div className="space-y-6">
      {/* Status Card */}
      {isRealPayment && (
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 mb-1">
                Payment Intent Criado no Stripe
              </h4>
              <p className="text-xs text-gray-600 mb-2">
                Este é um Payment Intent real criado na sua conta Stripe em modo teste.
                Pode visualizá-lo no dashboard.
              </p>
              {result.dashboardUrl && (
                <a
                  href={result.dashboardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-900 underline hover:text-gray-700"
                >
                  Ver no Stripe Dashboard →
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="border border-gray-200 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            {isRealPayment ? 'Resultado' : 'Resultado da Simulação'}
          </h3>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
            Sucesso
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Payment Intent ID</span>
            <span className="font-mono text-gray-900">{result.paymentIntentId}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Transfer Provider ID</span>
            <span className="font-mono text-gray-900">{result.transfers.provider}</span>
          </div>
          {result.transfers.host && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Transfer Host ID</span>
              <span className="font-mono text-gray-900">{result.transfers.host}</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Timestamp</span>
            <span className="text-gray-900">
              {new Date(result.timestamp).toLocaleString('pt-PT')}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Divisão de Valores</h3>
        <BreakdownTable breakdown={result.breakdown} currency={currency} />
      </div>
    </div>
  );
}
