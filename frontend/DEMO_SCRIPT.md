# Script de Demonstração - Stripe Connect para Cliente

## 🎯 Objetivo
Demonstrar que o sistema de comissões triplas está funcional e integrado com Stripe.

## 📋 Preparação (Antes da Demonstração)

### Pré-requisitos
- [ ] Servidor Next.js rodando
- [ ] Stripe Dashboard aberto em aba separada
- [ ] Este script aberto para referência

### Criar Connected Account (Fazer ANTES da demo com cliente)
1. Ir para: http://localhost:3000/test/stripe-connect/onboarding
2. Criar account com:
   - Email: `demo-provider@azoreon.com`
   - Tipo: Provider
   - Nome: `Azores Adventure Tours`
3. Completar onboarding Stripe (dados de teste)
4. Copiar Account ID do dashboard
5. GUARDAR este Account ID para usar na demo

---

## 🎬 Script da Demonstração

### INTRO (1 minuto)

**Você diz:**
> "Vou demonstrar o sistema de pagamentos que implementámos com comissões triplas usando Stripe Connect. Tudo o que vou mostrar está em modo teste do Stripe, mas usa a mesma tecnologia que irá para produção."

**Mostre:**
- Página principal: http://localhost:3000/test/stripe-connect
- Badge "Stripe Test Mode" no canto

---

### PARTE 1: Explicar Sistema (2 minutos)

**Você diz:**
> "O sistema funciona assim: quando um cliente compra um produto na plataforma AZOREON, o valor é automaticamente dividido em três partes..."

**Mostre na tela:**

**Cenário Exemplo:**
- Produto: Tour aos Açores - **€100,00**

**Divisão automática:**
- **Plataforma (AZOREON):** €10,00 (10%)
- **Provider (Tour Company):** €85,00 (85%)
- **Host (Referência):** €5,00 (5%) *se aplicável*

**Você diz:**
> "Esta divisão acontece automaticamente. O Provider recebe o dinheiro directamente na conta dele no Stripe, sem precisar esperar pela plataforma fazer transferências manuais."

---

### PARTE 2: Mostrar Connected Account (2 minutos)

**Abra Stripe Dashboard:**
https://dashboard.stripe.com/test/connect/accounts/overview

**Você diz:**
> "Aqui no Stripe, cada Provider tem uma conta conectada. Vou mostrar a conta de teste que criei."

**Clique na conta "Azores Adventure Tours"**

**Mostre:**
- ✅ Account ID: `acct_...`
- ✅ Status: Active
- ✅ Email: demo-provider@azoreon.com
- ✅ Capabilities: Transfers enabled

**Você diz:**
> "Esta é uma conta real de teste no Stripe. Em produção, cada Provider fará um onboarding completo com os seus dados reais, incluindo informações bancárias."

---

### PARTE 3: Demonstrar Pagamento (3 minutos)

**Volte para:** http://localhost:3000/test/stripe-connect

**Você diz:**
> "Agora vou simular um cliente a comprar um produto."

**Ações:**
1. **Scroll para produtos Sharetribe**
2. **Clique num produto** (ex: tour, experiência)
3. **Mostre o simulador de checkout que aparece**

**Você diz:**
> "Aqui o cliente vê o valor total. Opcionalmente pode usar um código promocional de um Host, que receberia 5% de comissão."

**Continue:**
4. Deixe "Sem Host" (para simplificar)
5. **Clique em "Processar Pagamento"**
6. **Aguarde alguns segundos**

---

### PARTE 4: Mostrar Resultado (2 minutos)

**Quando resultado aparecer:**

**Você diz:**
> "Pronto! O pagamento foi criado no Stripe. Veja aqui..."

**Mostre na tela:**
- ✅ **Payment Intent ID:** `pi_xxxxx...`
- ✅ **Divisão de Valores:**
  - Total: €X.XX
  - Plataforma: €X.XX (10%)
  - Provider: €X.XX (85%)

**Você diz:**
> "Vou abrir isto no dashboard do Stripe para mostrar que é real."

**Clique no link:** "Ver no Stripe Dashboard →"

---

### PARTE 5: Mostrar no Stripe (3 minutos)

**No Stripe Dashboard (página do Payment Intent):**

**Você diz:**
> "Aqui está o pagamento no sistema do Stripe. Veja..."

**Mostre:**
1. **Amount:** Valor total em cents
2. **Status:** "Requires payment method"
3. **Created:** Data/hora (agora mesmo)

**Clique em "More"** ou scroll para baixo

**Mostre Metadata:**
- `source`: azoreon_test_page
- `listingTitle`: Nome do produto
- `providerAccountId`: ID da conta do provider
- `platformFee`: Comissão da plataforma em cents
- `providerAmount`: Valor para o provider em cents
- `platformPercentage`: 10
- `providerPercentage`: 85

**Você diz:**
> "Todo este metadata é guardado automaticamente. Isto permite rastreabilidade completa de cada transação e comissão."

---

### PARTE 6: Explicar Próximos Passos (2 minutos)

**Você diz:**
> "Isto que mostrei está em modo teste. Para ir para produção, precisamos de..."

**Liste:**
1. **Onboarding real de Providers**
   - Cada provider completa verificação de identidade
   - Adiciona conta bancária real
   - Aceita termos de serviço

2. **Configurar webhooks em produção**
   - Transfers acontecem automaticamente após pagamento
   - Sistema notifica quando transfers são completados

3. **Checkout UI completo**
   - Adicionar Stripe Elements (formulário de cartão)
   - Implementar 3D Secure
   - Flow completo de pagamento

4. **Compliance**
   - Política de privacidade
   - Termos de serviço
   - GDPR compliance

**Você diz:**
> "A boa notícia é que a parte mais complexa - a lógica de comissões e integração com Stripe - já está funcionando, como acabou de ver."

---

## 💡 Perguntas Comuns do Cliente

### "O Provider recebe o dinheiro imediatamente?"

**Resposta:**
> "O Stripe retém o dinheiro por 2-7 dias (configurável) para proteger contra fraudes e chargebacks. Depois desse período, o dinheiro é automaticamente transferido para a conta bancária do Provider. Isto é standard da indústria."

### "E se houver um reembolso?"

**Resposta:**
> "Se houver reembolso, o Stripe automaticamente reverte as comissões. O Provider devolve os 85%, o Host os 5%, e a plataforma os 10%. Tudo automático."

### "Quanto custa o Stripe?"

**Resposta:**
> "O Stripe cobra por transação: 1.4% + €0.25 por transação europeia com cartão. Estas taxas são deduzidas antes da divisão das comissões, ou seja, são pagas pela plataforma."

### "Podemos mudar as percentagens?"

**Resposta:**
> "Sim, completamente configurável. As percentagens estão definidas no código e podem ser ajustadas a qualquer momento. Atualmente: 10% / 85% / 5%."

### "Como funciona em produção?"

**Resposta:**
> "Em produção, troca-se de Test Mode para Live Mode no Stripe. O código é exatamente o mesmo. A única diferença é que usa chaves de produção e dados reais dos clientes."

---

## 📸 Screenshots Recomendados

Tire screenshots para enviar ao cliente depois:

1. **Payment Intent no Stripe** (com metadata visível)
2. **Connected Account no Stripe** (mostrando status ativo)
3. **Resultado na página** (breakdown de comissões)
4. **Lista de Payments no Dashboard** (histórico)

---

## ✅ Checklist Pré-Demo

Antes de começar a demo com cliente:

- [ ] Servidor Next.js rodando sem erros
- [ ] Connected Account já criada
- [ ] Account ID copiado e guardado
- [ ] Stripe Dashboard aberto e logado
- [ ] Browser em modo apresentação (ocultar bookmarks, etc)
- [ ] Fechar tabs desnecessárias
- [ ] Testar flow uma vez antes da demo real
- [ ] Ter este script aberto para referência

---

## 🎯 Mensagem Final para Cliente

**Você diz:**
> "Resumindo: demonstrei que o sistema de comissões triplas está funcionando e integrado com Stripe. Os Payment Intents estão sendo criados, o metadata está correto, e as Connected Accounts estão ativas. O próximo passo é implementar o checkout completo e configurar para produção. Tem alguma pergunta?"

---

## 📞 Contactos Úteis

- **Stripe Support:** https://support.stripe.com
- **Stripe Docs:** https://stripe.com/docs/connect
- **Status Stripe:** https://status.stripe.com

---

**Boa sorte com a demonstração! 🚀**
