# Stripe Connect - Quick Reference

> 📋 **Use este documento para dar contexto ao Claude em futuras sessões sobre pagamentos**

---

## ✅ Status Atual
- Sistema de comissões triplas **FUNCIONANDO** em test mode
- Payment Intents sendo criados com sucesso no Stripe
- Todas conversões de moeda corrigidas
- UI de teste completa e funcional

---

## 🎯 Comissões Configuradas

**Arquivo:** `/src/lib/stripe.ts` (linhas 16-20)

```typescript
export const COMMISSION_RATES = {
  PLATFORM: 10, // 10%
  PROVIDER: 85, // 85%
  HOST: 5,      // 5%
}
```

**Para mudar:** Editar valores acima e reiniciar servidor.

---

## 🔄 Fluxo de Conversão de Moeda (CRÍTICO)

```
Sharetribe DB
    ↓ (1000 cents)
formatListing()
    ↓ (10.00 decimal)
Frontend → API
    ↓ (10.00 decimal)
toCents()
    ↓ (1000 cents)
Stripe
    ↓ (1000 cents)
API Response
    ↓ (1000 cents no breakdown)
fromCents() no display
    ↓ (€10.00)
User vê
```

**REGRA DE OURO:**
- API recebe: DECIMAL (10.00)
- API envia Stripe: CENTS (1000)
- API retorna breakdown: CENTS (1000)
- Frontend exibe: DECIMAL (€10.00)

---

## 📁 Arquivos Principais

### Backend (APIs)
1. `/src/lib/stripe.ts` - **Comissões aqui!**
2. `/src/app/api/stripe/test-payment/route.ts` - Criar Payment Intent
3. `/src/app/api/stripe/create-connected-account/route.ts` - Criar contas
4. `/src/app/api/stripe/webhook/route.ts` - Processar eventos

### Frontend (UI)
1. `/src/app/test/stripe-connect/page.tsx` - Página principal
2. `/src/app/test/stripe-connect/components/CheckoutSimulator.tsx` - Com prévia
3. `/src/app/test/stripe-connect/components/BreakdownTable.tsx` - **Conversão cents→€ aqui!**

### Configuração
1. `.env.local` - Chaves Stripe
2. `STRIPE_IMPLEMENTATION_STATUS.md` - Documento completo
3. `STRIPE_CONNECT_TESTING_GUIDE.md` - Como testar

---

## 🧪 Teste Rápido

1. `npm run dev`
2. http://localhost:3000/test/stripe-connect
3. Selecionar produto ≥ €0.50
4. Clicar "Processar Pagamento"
5. Ver resultado + link Stripe Dashboard

**Verificar:**
- ✅ Valores corretos em euros (não multiplicados por 100)
- ✅ Soma das comissões = valor total
- ✅ Payment Intent criado no Stripe
- ✅ Metadata correto no dashboard

---

## 🐛 Bugs Já Corrigidos

### 1. Valores Multiplicados por 100
**Sintoma:** €10 aparecia como €1000
**Causa:** Não convertia cents → decimal no display
**Solução:** `fromCents()` em `BreakdownTable.tsx` linha 12

### 2. Valores Muito Pequenos
**Sintoma:** €10 aparecia como €0.10, erro "amount too small"
**Causa:** Não convertia decimal → cents na API
**Solução:** `toCents()` em `test-payment/route.ts` linha 75

### 3. Missing card_payments
**Sintoma:** Erro ao criar connected account
**Solução:** Adicionar `card_payments: { requested: true }`

---

## ⚠️ NÃO FAZER

1. ❌ Remover `toCents()` da API
2. ❌ Remover `fromCents()` do display
3. ❌ Mudar `COMMISSION_RATES` sem testar
4. ❌ Testar com valores < €0.50
5. ❌ Commit chaves reais de produção

---

## 🔑 Chaves Stripe (Test Mode)

**Arquivo:** `.env.local`

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51SIq111VaoPZUQQ...
STRIPE_SECRET_KEY=sk_test_51SIq111VaoPZUQQ...
```

---

## 📊 Exemplo Real de Transação

**Produto:** €8.00

**Metadata no Stripe:**
```json
{
  "platformFee": "80",        // €0.80 (10%)
  "providerAmount": "680",    // €6.80 (85%)
  "hostAmount": "40",         // €0.40 (5%)
  "total": "800"              // €8.00
}
```

**Display para usuário:**
```
Valor Total:             €8.00
Comissão Plataforma:     €0.80 (10%)
Pagamento Provider:      €6.80 (85%)
Comissão Host:           €0.40 (5%)
```

---

## 🚀 Próximos Passos (Quando Retornar)

1. [ ] Implementar checkout flow completo (Stripe Elements)
2. [ ] Testar webhooks com Stripe CLI
3. [ ] Criar transfers automáticos após pagamento
4. [ ] Dashboard para Providers/Hosts
5. [ ] Onboarding real de contas
6. [ ] Modo produção

---

## 🔗 Links Úteis

- **Stripe Dashboard:** https://dashboard.stripe.com/test/payments
- **Página Teste:** http://localhost:3000/test/stripe-connect
- **Onboarding:** http://localhost:3000/test/stripe-connect/onboarding

---

## 📝 Comando para Dar Contexto ao Claude

```markdown
Estamos a trabalhar no sistema de pagamentos Stripe Connect da AZOREON.

**Status:** Sistema de comissões triplas funcional em test mode.

**Comissões:**
- Plataforma: 10%
- Provider: 85%
- Host: 5%

**Configuração:** `/src/lib/stripe.ts` (linha 16-20)

**Conversão moeda:**
- API recebe: decimal (10.00)
- Stripe processa: cents (1000)
- Display mostra: decimal (€10.00)

**Bugs corrigidos:**
- ✅ Valores multiplicados por 100
- ✅ Currency conversion
- ✅ Missing card_payments capability

**Documentação:**
- `STRIPE_IMPLEMENTATION_STATUS.md` (completo)
- `STRIPE_QUICK_REFERENCE.md` (este ficheiro)
- `STRIPE_CONNECT_TESTING_GUIDE.md` (testes)

**Teste:** http://localhost:3000/test/stripe-connect
```

---

**Última atualização:** 30/10/2025
