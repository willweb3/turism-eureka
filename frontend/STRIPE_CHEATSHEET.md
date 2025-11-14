# Stripe Connect - Cheat Sheet

> 🚀 **Comandos e snippets rápidos para trabalhar com Stripe**

---

## 🎬 Iniciar Trabalho

```bash
cd /Users/w/dev/azoreon/sharetribe-front/frontend
npm run dev
```

**Abrir no browser:** http://localhost:3000/test/stripe-connect

---

## 📝 Mudar Comissões

**Arquivo:** `src/lib/stripe.ts`

```typescript
export const COMMISSION_RATES = {
  PLATFORM: 10,  // Mudar aqui
  PROVIDER: 85,  // Mudar aqui
  HOST: 5,       // Mudar aqui
}
```

Depois: Reiniciar servidor (`Ctrl+C` + `npm run dev`)

---

## 🧪 Testar Pagamento

1. http://localhost:3000/test/stripe-connect
2. Clicar num produto
3. (Opcional) Selecionar host
4. Ver prévia de comissões
5. Clicar "Processar Pagamento"
6. Clicar link "Ver no Stripe Dashboard"

---

## 🔍 Ver Pagamentos no Stripe

**Dashboard:** https://dashboard.stripe.com/test/payments

**Metadata de cada pagamento:**
- `platformFee` - Comissão plataforma (em cents)
- `providerAmount` - Valor provider (em cents)
- `hostAmount` - Valor host (em cents)
- `platformPercentage`, `providerPercentage`, `hostPercentage`

---

## 💳 Cartões de Teste

```
Sucesso:      4242 4242 4242 4242
3D Secure:    4000 0025 0000 3155
Declined:     4000 0000 0000 0002

CVV:   Qualquer 3 dígitos
Data:  Qualquer futura
```

---

## 🔄 Conversão Moeda (Debugging)

```typescript
// Frontend envia (decimal)
amount: 10.00

// API converte para Stripe (cents)
const amountInCents = toCents(amount);  // 1000

// Stripe processa (cents)
stripe.paymentIntents.create({ amount: 1000 })

// API retorna breakdown (cents)
{ total: 1000, platformFee: 100, providerAmount: 850 }

// Frontend exibe (decimal)
fromCents(1000)  // €10.00
```

**Se valores estiverem errados:**
- Valor × 100? → Falta `fromCents()` no display
- Valor ÷ 100? → Falta `toCents()` na API

---

## 🐛 Debug Logs

**Ver logs da API:**
```bash
# Terminal onde rodou npm run dev
# Procurar por: 🔍 DEBUG
```

**Adicionar mais logs:**
```typescript
// Em qualquer API route
console.log('🔍 DEBUG - Meu valor:', { amount, converted: toCents(amount) });
```

---

## 🔑 Verificar Chaves Stripe

```bash
# Ver chaves configuradas
cat .env.local | grep STRIPE

# Devem ser test mode (começam com pk_test_ e sk_test_)
```

---

## 📱 Criar Connected Account

1. http://localhost:3000/test/stripe-connect/onboarding
2. Email: `teste@exemplo.com`
3. Tipo: Provider ou Host
4. Clicar "Criar Conta e Começar Onboarding"
5. Completar onboarding Stripe
6. Copiar Account ID do dashboard

**Ver accounts criados:**
https://dashboard.stripe.com/test/connect/accounts/overview

---

## 🧮 Calcular Comissões Manualmente

```javascript
// Produto €10.00 (1000 cents)
const total = 1000;

// Sem host
const platform = Math.round(total * 10 / 100);  // 100 = €1.00
const provider = Math.round(total * 85 / 100);  // 850 = €8.50
const host = 0;

// Com host
const platform = Math.round(total * 10 / 100);  // 100 = €1.00
const provider = Math.round(total * 85 / 100);  // 850 = €8.50
const host = Math.round(total * 5 / 100);       // 50 = €0.50
```

---

## 🔗 Links Rápidos

```
Teste Local:         http://localhost:3000/test/stripe-connect
Onboarding:          http://localhost:3000/test/stripe-connect/onboarding

Stripe Payments:     https://dashboard.stripe.com/test/payments
Stripe Accounts:     https://dashboard.stripe.com/test/connect/accounts
Stripe Transfers:    https://dashboard.stripe.com/test/connect/transfers
```

---

## 📂 Arquivos Mais Editados

```
Mudar comissões:
→ src/lib/stripe.ts (linha 16)

Mudar lógica de pagamento:
→ src/app/api/stripe/test-payment/route.ts

Mudar UI de checkout:
→ src/app/test/stripe-connect/components/CheckoutSimulator.tsx

Mudar exibição de resultados:
→ src/app/test/stripe-connect/components/BreakdownTable.tsx
```

---

## ⚡ Comandos Git

```bash
# Ver status
git status

# Adicionar alterações Stripe
git add src/lib/stripe.ts src/app/api/stripe/

# Commit
git commit -m "feat: Update Stripe commission rates"

# Ver diff antes de commit
git diff src/lib/stripe.ts
```

---

## 🧪 Webhooks Locais (Opcional)

```bash
# 1. Instalar Stripe CLI
brew install stripe/stripe-cli/stripe

# 2. Login
stripe login

# 3. Forward webhooks
stripe listen --forward-to localhost:3000/api/stripe/webhook

# 4. Copiar webhook secret e adicionar ao .env.local
STRIPE_WEBHOOK_SECRET=whsec_...

# 5. Reiniciar servidor
```

**Testar webhook:**
```bash
stripe trigger payment_intent.succeeded
```

---

## 💡 Snippets Úteis

### Formatar moeda
```typescript
import { formatCurrency } from '@/app/test/stripe-connect/utils/simulation';

formatCurrency(1000, 'EUR')  // "€1.000,00"
```

### Converter moeda
```typescript
import { toCents, fromCents } from '@/lib/stripe';

toCents(10.00)    // 1000
fromCents(1000)   // 10.00
```

### Calcular comissões
```typescript
import { calculateCommissions } from '@/lib/stripe';

const breakdown = calculateCommissions(1000, true);  // hasHost = true
// {
//   total: 1000,
//   platformFee: 100,
//   providerAmount: 850,
//   hostAmount: 50,
//   ...
// }
```

---

## ⚠️ Troubleshooting Rápido

**Erro: "Amount too small"**
→ Produto precisa custar ≥ €0.50

**Valores multiplicados por 100**
→ Falta `fromCents()` no display

**Valores divididos por 100**
→ Falta `toCents()` na API

**"Cannot request transfers without card_payments"**
→ Adicionar `card_payments: { requested: true }` em create-connected-account

**Webhooks não funcionam local**
→ Usar Stripe CLI: `stripe listen --forward-to localhost:3000/api/stripe/webhook`

**Chaves Stripe não carregam**
→ Verificar `.env.local` existe e tem as chaves
→ Reiniciar servidor

---

## 📞 Documentação Completa

- `STRIPE_IMPLEMENTATION_STATUS.md` - Documento completo
- `STRIPE_QUICK_REFERENCE.md` - Referência rápida
- `STRIPE_CONNECT_TESTING_GUIDE.md` - Guia de testes
- `DEMO_SCRIPT.md` - Script para demo cliente

---

**Última atualização:** 30/10/2025
