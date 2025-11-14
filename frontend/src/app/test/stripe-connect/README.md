# Stripe Connect - Página de Teste e Demonstração

## 📋 Visão Geral

Página de demonstração do sistema de comissões triplas usando Stripe Connect para a plataforma AZOREON.

**URL:** http://localhost:3000/test/stripe-connect

## 🎯 Objetivo

Demonstrar ao cliente a viabilidade técnica do sistema de pagamentos com distribuição automática de comissões entre:
- **Plataforma:** 10% de comissão
- **Provider:** 85% do valor total
- **Host:** 5% quando há código promocional válido

## 🏗️ Arquitetura

### Estrutura de Arquivos

```
/app/test/stripe-connect/
├── page.tsx                        # Página principal
├── types/
│   └── index.ts                    # TypeScript types
├── utils/
│   └── simulation.ts               # Lógica de simulação
├── components/
│   ├── ProductCard.tsx             # Card de produto
│   ├── CheckoutSimulator.tsx       # Simulador de checkout
│   ├── BreakdownTable.tsx          # Tabela de breakdown
│   ├── ResultDisplay.tsx           # Exibição de resultado
│   └── TechnicalInfo.tsx           # Informação técnica
└── README.md                       # Esta documentação
```

### Integração com Sharetribe

A página utiliza a integração Sharetribe existente:
- **API Route:** `/api/sharetribe/listings`
- **SDK:** `/lib/sharetribe.ts`
- **Funções:** `formatListing()`, `convertMoney()`

## 🔧 Funcionalidades

### 1. Listar Produtos do Sharetribe
- Busca produtos reais via API
- Exibe em grid responsivo
- Mostra: imagem, título, preço, provider, categoria
- Seleção visual de produto

### 2. Simulador de Checkout
- Seleção de Host (opcional)
- Campo para código promocional
- Cálculo automático de comissões
- Botão de processar pagamento (demo)

### 3. Resultado da Simulação
- IDs fictícios do Stripe:
  - Payment Intent: `pi_demo_*`
  - Transfer Provider: `tr_provider_*`
  - Transfer Host: `tr_host_*`
- Breakdown detalhado de valores
- Percentagens e valores absolutos

### 4. Informação Técnica
- Explicação do Stripe Connect
- Fluxo de pagamento passo a passo
- Links para documentação oficial

## 💡 Como Usar

### Passo 1: Selecionar Produto
1. Aceder a http://localhost:3000/test/stripe-connect
2. Navegar pelos produtos do Sharetribe
3. Clicar num produto para selecioná-lo

### Passo 2: Configurar Checkout
1. (Opcional) Selecionar um Host do dropdown
2. (Opcional) Inserir código promocional
3. Verificar o valor total

### Passo 3: Simular Pagamento
1. Clicar em "Processar Pagamento (Demo)"
2. Ver o resultado da simulação
3. Analisar o breakdown de comissões

### Passo 4: Entender o Sistema
1. Rever a tabela de divisão de valores
2. Ver os IDs simulados do Stripe
3. Ler a informação técnica

## 🧮 Lógica de Comissões

### Cálculo Automático

```typescript
// Exemplo: Produto de €100.00

Total:      €100.00  (100%)
Plataforma: €10.00   (10%)
Provider:   €85.00   (85%)
Host:       €5.00    (5% - se aplicável)

Total: 100% = 10% + 85% + 5%
```

### Código de Simulação

```typescript
function simulateStripeConnect(
  amount: number,
  providerAccountId: string,
  host?: Host | null
): StripeSimulationResult {
  const platformFee = Math.round((amount * 10) / 100);
  const providerAmount = Math.round((amount * 85) / 100);
  const hostAmount = host ? Math.round((amount * 5) / 100) : 0;

  // Generate simulated Stripe IDs...
  return result;
}
```

## 🎨 Design

### Princípios de UI
- **Minimalista:** Sem ícones desnecessários
- **Profissional:** Cores neutras (cinzas, branco, preto)
- **Funcional:** Foco na informação e clareza
- **Responsivo:** Mobile-first approach

### Paleta de Cores
- Texto principal: `#111827` (gray-900)
- Texto secundário: `#6B7280` (gray-600)
- Bordas: `#E5E7EB` (gray-200)
- Fundos: `#F9FAFB` (gray-50)
- Accent: `#111827` (gray-900) apenas para CTAs

## 📝 Tipos TypeScript

### SharetribeListing
```typescript
interface SharetribeListing {
  id: string;
  title: string;
  price: { amount: number; currency: string } | null;
  images: Array<{ id: string; url: string | null }>;
  author: { id: string; name: string } | null;
  // ...
}
```

### CommissionBreakdown
```typescript
interface CommissionBreakdown {
  total: number;
  platformFee: number;
  providerAmount: number;
  hostAmount: number;
  platformPercentage: number;
  providerPercentage: number;
  hostPercentage: number;
}
```

### StripeSimulationResult
```typescript
interface StripeSimulationResult {
  success: boolean;
  paymentIntentId: string;
  breakdown: CommissionBreakdown;
  transfers: {
    provider: string;
    host: string | null;
  };
  timestamp: string;
}
```

## 🔍 Hosts Fictícios

Para demonstração, existem 3 hosts pré-configurados:

| Nome          | Código Promo | Stripe Account ID         |
|---------------|--------------|---------------------------|
| João Silva    | JOAO2025     | acct_demo_joao_2025       |
| Maria Costa   | MARIA2025    | acct_demo_maria_2025      |
| Pedro Santos  | PEDRO2025    | acct_demo_pedro_2025      |

## ⚠️ Importante

### Esta é uma SIMULAÇÃO
- Não faz chamadas reais ao Stripe API
- Não processa pagamentos reais
- IDs são fictícios (começam com `_demo_`)
- Apenas demonstra a lógica de distribuição

### Para Produção
Será necessário:
1. Criar conta Stripe Connect
2. Onboarding de Providers (Express/Standard accounts)
3. Implementar webhook handlers
4. KYC/verificação de identidade
5. Compliance e termos de serviço
6. Implementar PaymentIntent real
7. Implementar Transfers reais
8. Error handling robusto
9. Reconciliação financeira
10. Relatórios e dashboards

## 🚀 Próximos Passos

### Fase 1: Validação
- [x] Demonstrar conceito ao cliente
- [ ] Obter aprovação do modelo de comissões
- [ ] Validar fluxos de pagamento

### Fase 2: Implementação
- [ ] Configurar Stripe Connect account
- [ ] Implementar onboarding de Providers
- [ ] Implementar PaymentIntent real
- [ ] Implementar Transfers
- [ ] Adicionar webhooks

### Fase 3: Testes
- [ ] Testes unitários
- [ ] Testes de integração
- [ ] Testes em sandbox Stripe
- [ ] Testes end-to-end

### Fase 4: Produção
- [ ] Compliance e legal
- [ ] Documentação completa
- [ ] Monitoring e alertas
- [ ] Deploy para produção

## 📚 Referências

### Stripe Documentation
- [Stripe Connect Overview](https://stripe.com/docs/connect)
- [Separate Charges and Transfers](https://stripe.com/docs/connect/charges-transfers)
- [Connect Onboarding](https://stripe.com/docs/connect/onboarding)

### Sharetribe
- [Integration SDK](https://www.sharetribe.com/docs/references/integration-api/)
- [Flex API](https://www.sharetribe.com/docs/references/api/)

## 🐛 Troubleshooting

### Produtos não aparecem
- Verificar se Sharetribe API está configurada (`.env.local`)
- Verificar credenciais: `SHARETRIBE_CLIENT_ID` e `SHARETRIBE_CLIENT_SECRET`
- Ver logs do servidor

### Erro ao simular
- Verificar se produto tem preço definido
- Verificar console do browser para erros JS

### Design quebrado
- Verificar se Tailwind CSS está a compilar
- Limpar cache: `rm -rf .next && npm run dev`

## ✅ Checklist de Sucesso

A implementação está completa e funcional:

- [x] Página carrega sem erros
- [x] Produtos Sharetribe são listados
- [x] Seleção de produto funciona
- [x] Simulador de checkout funciona
- [x] Cálculo de comissões está correto (10% + 85% + 5%)
- [x] Resultado é exibido corretamente
- [x] Design minimalista e profissional
- [x] Responsivo (mobile/tablet/desktop)
- [x] TypeScript sem erros
- [x] Documentação completa

## 📞 Suporte

Para questões sobre esta implementação:
1. Ver código em `/app/test/stripe-connect/`
2. Consultar documentação Stripe
3. Consultar documentação Sharetribe

---

**Status:** ✅ Implementação Completa
**Versão:** 1.0.0
**Data:** 30 Outubro 2025
**Projeto:** AZOREON - Marketplace de Turismo dos Açores
