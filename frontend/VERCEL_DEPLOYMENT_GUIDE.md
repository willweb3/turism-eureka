# 🚀 Guia de Deploy no Vercel - Azoreon Tourism Marketplace

## ✅ Pré-requisitos Completos

- [x] Código no GitHub: https://github.com/willweb3/turism-eureka.git
- [x] Conta no Vercel (criar em https://vercel.com)
- [ ] Variáveis de ambiente preparadas

---

## 📝 Passo a Passo para Deploy

### 1. Acessar o Vercel

1. Acesse https://vercel.com
2. Faça login com sua conta GitHub
3. Clique em **"Add New..."** → **"Project"**

### 2. Importar Repositório

1. Selecione o repositório: **`willweb3/turism-eureka`**
2. Clique em **"Import"**

### 3. Configurar Projeto

**Framework Preset:** Next.js (detectado automaticamente)

**Root Directory:** `frontend` (IMPORTANTE!)

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### 4. Configurar Variáveis de Ambiente

Clique em **"Environment Variables"** e adicione as seguintes variáveis:

#### 🔑 Variáveis Obrigatórias

> **IMPORTANTE:** As credenciais reais estão no arquivo `.env.local` (não commitado no Git).
> Copie os valores de lá para o Vercel.

```env
# Sharetribe Client ID (público - frontend)
NEXT_PUBLIC_SHARETRIBE_CLIENT_ID=your-sharetribe-client-id

# Sharetribe Server Credentials (privado - backend)
SHARETRIBE_CLIENT_ID=your-sharetribe-client-id
SHARETRIBE_CLIENT_SECRET=your-sharetribe-client-secret
SHARETRIBE_MARKETPLACE_ID=your-marketplace-id

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
DATABASE_URL=your-database-url

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret

# App URL (será preenchido após deploy)
NEXT_PUBLIC_APP_URL=https://your-deployment-url.vercel.app
```

**IMPORTANTE:**
- Para adicionar variáveis: Cole `KEY=VALUE` no campo
- Clique em **"Add"** após cada variável
- Ou use o botão **".env Local"** para importar do arquivo .env.local

### 5. Deploy

1. Clique em **"Deploy"**
2. Aguarde 2-5 minutos (build + deployment)
3. Você verá uma URL temporária como: `turism-eureka-xxx.vercel.app`

---

## 🔧 Configurações Pós-Deploy

### 1. Atualizar NEXT_PUBLIC_APP_URL

1. Copie a URL do seu deploy (ex: `https://turism-eureka-xxx.vercel.app`)
2. No Vercel Dashboard:
   - Vá em **Settings** → **Environment Variables**
   - Edite `NEXT_PUBLIC_APP_URL` com a URL real
   - Clique em **"Save"**
3. Faça um novo deploy em **Deployments** → **Redeploy**

### 2. Configurar Domínio Personalizado (Opcional)

1. Vá em **Settings** → **Domains**
2. Adicione seu domínio (ex: `azoreon.com`)
3. Configure DNS conforme instruções do Vercel
4. Atualize `NEXT_PUBLIC_APP_URL` com o novo domínio

### 3. Configurar Sharetribe Callbacks

No Sharetribe Console (https://console.sharetribe.com):

1. Vá em **Build** → **General** → **OAuth**
2. Adicione a URL do Vercel em **Redirect URIs**:
   ```
   https://your-deployment-url.vercel.app/auth/callback
   ```
3. Salve as alterações

---

## 🔍 Verificar Deploy

Acesse as seguintes URLs para testar:

- **Homepage:** `https://your-url.vercel.app/`
- **Auth:** `https://your-url.vercel.app/auth`
- **Submit Listing:** `https://your-url.vercel.app/submit-listing`
- **Design System:** `https://your-url.vercel.app/design-system`

---

## 🐛 Troubleshooting

### Erro: "Root directory not found"

**Solução:** Configure o **Root Directory** para `frontend`

### Erro: "Build failed"

1. Verifique os logs no Vercel
2. Certifique-se que todas as variáveis de ambiente estão corretas
3. Tente fazer build local: `npm run build`

### Erro: "Module not found"

**Solução:** Limpe o cache do Vercel:
1. Vá em **Deployments**
2. Clique nos 3 pontinhos → **Redeploy**
3. Marque **"Use existing Build Cache"** = OFF

### Erro: "Authentication not working"

**Solução:**
1. Verifique se `NEXT_PUBLIC_SHARETRIBE_CLIENT_ID` está correto
2. Certifique-se que a URL está configurada no Sharetribe Console

---

## 📊 Monitoramento

O Vercel oferece:

- **Analytics:** Métricas de performance
- **Logs:** Logs em tempo real
- **Speed Insights:** Core Web Vitals
- **Error Tracking:** Erros em produção

Acesse em: Dashboard → Seu Projeto → Aba específica

---

## 🔄 Deploy Automático

Agora, cada push para o branch `main` no GitHub irá:

1. Triggerar um novo build no Vercel
2. Fazer deploy automaticamente
3. Gerar uma URL de preview

Para desabilitar: **Settings** → **Git** → Desmarque "Production Branch"

---

## 💡 Dicas de Produção

### 1. Environment Variables por Ambiente

- **Production:** Variáveis para produção
- **Preview:** Variáveis para preview (branches)
- **Development:** Variáveis para desenvolvimento local

### 2. Branch Preview

Cada branch terá uma URL única:
- `main` → Produção
- `develop` → Preview automático

### 3. Rollback

Se algo der errado:
1. Vá em **Deployments**
2. Encontre o deploy anterior funcionando
3. Clique em **"Promote to Production"**

---

## 📋 Checklist Final

- [ ] Deploy realizado com sucesso
- [ ] URL funcionando
- [ ] Variáveis de ambiente configuradas
- [ ] `NEXT_PUBLIC_APP_URL` atualizada
- [ ] Sharetribe callbacks configurados
- [ ] Autenticação funcionando
- [ ] Submit listing funcionando
- [ ] Domínio personalizado (opcional)

---

## 🆘 Suporte

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deploy:** https://nextjs.org/docs/deployment
- **Sharetribe Docs:** https://www.sharetribe.com/docs/

---

**Última atualização:** 14 de Novembro de 2025
**Status:** ✅ Pronto para deploy
