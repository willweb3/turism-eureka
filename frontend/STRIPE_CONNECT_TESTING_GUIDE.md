# Guia Completo de Teste - Stripe Connect

## 📋 Visão Geral

Este guia explica como testar o sistema completo de Stripe Connect com comissões triplas em **modo teste**.

### Sistema Implementado

✅ **Payment Intents** - Criar pagamentos reais no Stripe (modo teste)
✅ **Connected Accounts** - Criar contas Express para Providers e Hosts
✅ **Onboarding** - Fluxo de registro completo do Stripe
✅ **Webhooks** - Processar eventos automaticamente
✅ **Transfers** - Distribuir comissões após pagamento (quando contas estiverem configuradas)

### Comissões

- **Plataforma (AZOREON):** 10%
- **Provider (Prestador):** 85%
- **Host (Referência):** 5% (opcional)

---

## 🚀 Fluxo de Teste End-to-End

### Fase 1: Criar Connected Accounts

#### 1.1 Criar Account para Provider

1. Aceder: **http://localhost:3000/test/stripe-connect/onboarding**

2. Preencher formulário:
   - Email: `provider@teste.com` (fictício)
   - Tipo: **Provider**
   - Nome: `Tours Açores` (opcional)

3. Clicar em **"Criar Conta e Começar Onboarding"**

4. Será redirecionado para **Stripe Onboarding**

5. No Stripe, usar **dados de teste**:
   - Nome: `Test Provider`
   - DOB: `01/01/1990`
   - SSN (US): `000-00-0000` (test)
   - Ou completar com qualquer dado fictício

6. Completar onboarding e será redirecionado para página de sucesso

7. **IMPORTANTE:** Copiar o **Account ID** do dashboard Stripe:
   - Ir para: https://dashboard.stripe.com/test/connect/accounts/overview
   - Copiar o ID (começa com `acct_`)
   - Exemplo: `acct_1QR...`

#### 1.2 Criar Account para Host (Opcional)

1. Repetir processo acima mas selecionar:
   - Tipo: **Host**
   - Email: `host@teste.com`
   - Nome: `João Silva`

2. Copiar também este Account ID

---

### Fase 2: Simular Pagamento

#### 2.1 Ir para Página de Teste

1. Aceder: **http://localhost:3000/test/stripe-connect**

2. Ver produtos listados do Sharetribe

#### 2.2 Selecionar Produto

1. Clicar num produto da lista

2. Aparecerá o **Simulador de Checkout**

#### 2.3 Configurar Checkout

1. **(Opcional)** Selecionar Host no dropdown
   - Se tiver criado conta de Host, pode usar
   - Se não, deixar "Sem Host"

2. **(Opcional)** Inserir código promocional fictício

3. Clicar em **"Processar Pagamento"**

#### 2.4 Verificar Resultado

1. Verá resultado com:
   - Payment Intent ID real (começa com `pi_`)
   - Link para Stripe Dashboard
   - Breakdown de comissões
   - Transfer IDs (mock por enquanto)

2. Clicar em **"Ver no Stripe Dashboard"** para ver no Stripe

---

### Fase 3: Ver no Stripe Dashboard

#### 3.1 Ver Payment Intent

1. Abrir: https://dashboard.stripe.com/test/payments

2. Ver último Payment Intent criado

3. Verificar:
   - ✅ Valor total
   - ✅ Status: `requires_payment_method`
   - ✅ Metadata com todas comissões

#### 3.2 Ver Connected Accounts

1. Abrir: https://dashboard.stripe.com/test/connect/accounts/overview

2. Ver accounts criados:
   - Provider account
   - Host account (se criou)

3. Verificar status de cada conta

---

## 🧪 Testar Transfers Reais

Para testar transfers automáticos **após pagamento bem-sucedido**:

### Opção 1: Usar Stripe CLI (Recomendado)

```bash
# 1. Instalar Stripe CLI
brew install stripe/stripe-cli/stripe  # macOS
# ou seguir: https://stripe.com/docs/stripe-cli

# 2. Login
stripe login

# 3. Forward webhooks para local
stripe listen --forward-to localhost:3000/api/stripe/webhook

# 4. Copiar webhook secret que aparece e adicionar ao .env.local:
STRIPE_WEBHOOK_SECRET=whsec_...

# 5. Reiniciar servidor Next.js

# 6. Fazer um pagamento de teste via UI

# 7. Simular payment.succeeded:
stripe trigger payment_intent.succeeded
```

### Opção 2: Testar Manualmente

1. Criar Payment Intent via API

2. Usar Stripe Dashboard para simular webhook:
   - Ir para: **Developers → Webhooks → Test in environment**
   - Escolher evento: `payment_intent.succeeded`
   - Enviar para: `http://localhost:3000/api/stripe/webhook`

3. Verificar no console do servidor se transfers foram criados

4. Ver transfers no dashboard:
   - https://dashboard.stripe.com/test/connect/transfers

---

## 📊 Ver Resultados no Stripe

### 1. Payments
https://dashboard.stripe.com/test/payments
- Ver todos Payment Intents criados
- Verificar metadata
- Ver histórico

### 2. Connected Accounts
https://dashboard.stripe.com/test/connect/accounts/overview
- Ver todas contas conectadas
- Status de onboarding
- Capabilities

### 3. Transfers
https://dashboard.stripe.com/test/connect/transfers
- Ver todas transferências
- Valores
- Destinatários

### 4. Balance
https://dashboard.stripe.com/test/balance/overview
- Ver saldo da plataforma (10% de comissão)
- Histórico de transações

---

## ✅ Checklist de Teste

### Fase 1: Setup
- [ ] Chaves Stripe configuradas em `.env.local`
- [ ] Servidor Next.js rodando
- [ ] Stripe Dashboard aberto

### Fase 2: Onboarding
- [ ] Criar Provider account
- [ ] Completar onboarding Stripe
- [ ] Copiar Account ID
- [ ] (Opcional) Criar Host account

### Fase 3: Pagamento
- [ ] Acessar página de teste
- [ ] Selecionar produto
- [ ] Processar pagamento
- [ ] Ver resultado

### Fase 4: Verificação Stripe
- [ ] Ver Payment Intent no dashboard
- [ ] Verificar metadata
- [ ] Ver Connected Accounts
- [ ] (Opcional) Ver Transfers se webhook configurado

---

## 🔍 Troubleshooting

### Erro: "Account ID inválido"
**Solução:** Certificar que copiou o Account ID correto do dashboard Stripe (começa com `acct_`)

### Erro: "Transfer failed"
**Causas possíveis:**
- Account não completou onboarding
- Account não tem capability de transfers ativada
- Usar Account ID mock em vez de real

**Solução:** Criar nova connected account via onboarding

### Webhook não está a funcionar
**Solução:** Usar Stripe CLI para forward webhooks localmente:
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

### Payment Intent criado mas sem transfers
**Causa:** Webhook não configurado ou não disparado

**Solução:**
1. Configurar Stripe CLI
2. Ou usar API manualmente:
```bash
curl -X POST http://localhost:3000/api/stripe/process-transfers \
  -H "Content-Type: application/json" \
  -d '{"paymentIntentId": "pi_..."}'
```

---

## 🎯 Dados de Teste do Stripe

### Cartões de Teste
- **Sucesso:** `4242 4242 4242 4242`
- **Requer autenticação:** `4000 0025 0000 3155`
- **Declined:** `4000 0000 0000 0002`
- **CVV:** Qualquer 3 dígitos
- **Data:** Qualquer data futura

### SSN/Tax ID (US)
- Test: `000-00-0000`

### Bank Account Numbers (US)
- Routing: `110000000`
- Account: `000123456789`

---

## 📚 Referências

### Stripe Docs
- [Connect Overview](https://stripe.com/docs/connect)
- [Testing Connect](https://stripe.com/docs/connect/testing)
- [Webhooks](https://stripe.com/docs/webhooks)

### AZOREON Docs
- [README Principal](./README.md)
- [Stripe Connect README](./src/app/test/stripe-connect/README.md)

---

## 🆘 Suporte

Para questões sobre esta implementação:

1. Ver logs do servidor Next.js
2. Ver console do browser
3. Ver Stripe Dashboard logs
4. Consultar documentação Stripe

---

**Status:** ✅ Implementação Completa
**Modo:** 🧪 Test Mode
**Data:** 30 Outubro 2025
**Projeto:** AZOREON - Marketplace de Turismo dos Açores
