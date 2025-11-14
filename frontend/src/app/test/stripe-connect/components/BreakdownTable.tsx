import { CommissionBreakdown } from '../types';
import { formatCurrency } from '../utils/simulation';

interface BreakdownTableProps {
  breakdown: CommissionBreakdown;
  currency?: string;
}

export function BreakdownTable({ breakdown, currency = 'EUR' }: BreakdownTableProps) {
  // Convert cents to decimal for display
  // Breakdown values come from API in cents (e.g., 1000 cents = €10.00)
  const fromCents = (cents: number) => cents / 100;

  const rows = [
    {
      label: 'Valor Total',
      amount: fromCents(breakdown.total),
      percentage: 100,
      description: 'Valor pago pelo cliente'
    },
    {
      label: 'Comissão Plataforma',
      amount: fromCents(breakdown.platformFee),
      percentage: breakdown.platformPercentage,
      description: 'Receita da plataforma AZOREON'
    },
    {
      label: 'Pagamento Provider',
      amount: fromCents(breakdown.providerAmount),
      percentage: breakdown.providerPercentage,
      description: 'Valor transferido para o prestador de serviços'
    },
  ];

  if (breakdown.hostAmount > 0) {
    rows.push({
      label: 'Comissão Host',
      amount: fromCents(breakdown.hostAmount),
      percentage: breakdown.hostPercentage,
      description: 'Valor transferido para o anfitrião (referência)'
    });
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
              Descrição
            </th>
            <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">
              Percentagem
            </th>
            <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">
              Valor
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, index) => (
            <tr key={index} className={index === 0 ? 'bg-gray-50' : ''}>
              <td className="px-4 py-3">
                <div>
                  <div className="font-medium text-gray-900">{row.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{row.description}</div>
                </div>
              </td>
              <td className="px-4 py-3 text-right text-gray-700">
                {row.percentage}%
              </td>
              <td className="px-4 py-3 text-right font-semibold text-gray-900">
                {formatCurrency(row.amount, currency)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
