export function TechnicalInfo() {
  return (
    <div className="border border-gray-200 rounded-lg p-6 space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Como Funciona o Stripe Connect</h3>
        <div className="space-y-3 text-sm text-gray-700">
          <p>
            O Stripe Connect permite que a plataforma AZOREON processe pagamentos e distribua
            automaticamente as comissões para múltiplas contas.
          </p>
          <p>
            Neste sistema, quando um cliente efetua um pagamento:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>O valor total é processado pela plataforma</li>
            <li>A comissão da plataforma (10%) fica retida</li>
            <li>85% é automaticamente transferido para a conta Stripe Connect do Provider</li>
            <li>5% é transferido para o Host (se houver código promocional válido)</li>
          </ol>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Fluxo de Pagamento</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs font-medium">
              1
            </div>
            <div>
              <div className="font-medium text-gray-900">Payment Intent</div>
              <div className="text-gray-600">Cliente confirma pagamento</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs font-medium">
              2
            </div>
            <div>
              <div className="font-medium text-gray-900">Transfer to Provider</div>
              <div className="text-gray-600">85% enviado automaticamente</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs font-medium">
              3
            </div>
            <div>
              <div className="font-medium text-gray-900">Transfer to Host (se aplicável)</div>
              <div className="text-gray-600">5% enviado por referência</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Documentação</h3>
        <div className="space-y-2">
          <a
            href="https://stripe.com/docs/connect"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-gray-700 hover:text-gray-900 underline"
          >
            Stripe Connect Documentation
          </a>
          <a
            href="https://stripe.com/docs/connect/charges-transfers"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-gray-700 hover:text-gray-900 underline"
          >
            Separate Charges and Transfers
          </a>
        </div>
      </div>
    </div>
  );
}
