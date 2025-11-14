# AZOREON Frontend - Setup Guide

## 🚀 Quick Start

### 1. Pré-requisitos

- Node.js 18+
- Conta Supabase (grátis)
- Conta Stripe (opcional para MVP inicial)

### 2. Setup Supabase

#### 2.1 Criar Projeto

1. Ir a [supabase.com](https://supabase.com)
2. Criar novo projeto
3. Guardar:
   - Project URL
   - Anon/Public Key

#### 2.2 Executar Schema SQL

1. No Supabase Dashboard → SQL Editor
2. Copiar conteúdo de `supabase-schema.sql`
3. Executar

Isto irá criar:
- ✅ Tabelas (profiles, listings, transactions, etc.)
- ✅ Enums (user_role, listing_type, etc.)
- ✅ Row Level Security (RLS)
- ✅ Policies de acesso
- ✅ Indexes
- ✅ Triggers

#### 2.3 Configurar Storage (para imagens)

1. Storage → Create bucket: `listings`
2. Tornar público:
   ```sql
   -- No SQL Editor
   CREATE POLICY "Public Access"
   ON storage.objects FOR SELECT
   USING (bucket_id = 'listings');

   CREATE POLICY "Providers can upload"
   ON storage.objects FOR INSERT
   WITH CHECK (bucket_id = 'listings' AND auth.role() = 'authenticated');
   ```

### 3. Setup Frontend

#### 3.1 Instalar Dependências

```bash
cd frontend
npm install
```

#### 3.2 Configurar Variáveis de Ambiente

```bash
cp .env.example .env.local
```

Editar `.env.local`:

```env
# Supabase (copiar do Dashboard → Settings → API)
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key

# Stripe (opcional para MVP)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### 3.3 Executar

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## 📊 Dados de Teste (Seed)

### Criar Utilizadores de Teste

1. **Tourist**
   - Email: `tourist@test.com`
   - Password: `test123`
   - Tipo: Tourist

2. **Provider**
   - Email: `provider@test.com`
   - Password: `test123`
   - Tipo: Provider

3. **Host**
   - Email: `host@test.com`
   - Password: `test123`
   - Tipo: Host

### Criar Listings de Teste (via SQL)

```sql
-- No Supabase SQL Editor

-- 1. Criar um provider primeiro (signup manual ou SQL)
-- Assumindo provider_id = 'uuid-do-provider'

INSERT INTO listings (provider_id, type, title, description, price_per_unit, max_capacity, status)
VALUES
  ('uuid-do-provider', 'service', 'Observação de Baleias', 'Experiência única de observação de baleias e golfinhos', 5000, 12, 'approved'),
  ('uuid-do-provider', 'service', 'Subida ao Pico', 'Caminhada guiada até ao ponto mais alto de Portugal', 3500, 8, 'approved'),
  ('uuid-do-provider', 'product', 'Vinho do Pico DOC', 'Vinho tinto produzido nas vinhas Património da UNESCO', 1500, null, 'approved'),
  ('uuid-do-provider', 'event', 'Festa das Vindimas', 'Celebração anual da colheita das uvas', 2000, 100, 'approved');
```

## 🔑 Autenticação

### Fluxo de Signup

1. User preenche form signup
2. Supabase cria user em `auth.users`
3. Trigger automático cria profile em `profiles`
4. Redirect para dashboard baseado em `user_type`

### Roles e Redirects

- **Tourist** → `/dashboard/tourist`
- **Provider** → `/dashboard/provider`
- **Host** → `/dashboard/host`
- **Admin** → `/dashboard/admin`

## 📱 Funcionalidades por User Type

### Tourist
- ✅ Pesquisar e filtrar listings
- ✅ Ver detalhes e reviews
- ✅ Fazer reservas
- 🚧 Ver histórico de reservas
- 🚧 Deixar reviews

### Provider
- 🚧 Criar/editar listings
- 🚧 Gerir disponibilidade
- 🚧 Ver reservas
- 🚧 Ver comissões

### Host
- 🚧 Gerar promo codes
- 🚧 Gerar QR codes
- 🚧 Ver comissões
- 🚧 Analytics

### Admin
- 🚧 Aprovar listings
- 🚧 Gerir users
- 🚧 Reporting

## 🎨 Próximos Passos

### Fase 1: MVP Core (Já feito ✅)
- [x] Setup projeto
- [x] Autenticação
- [x] Homepage
- [x] Pesquisa
- [x] Detalhe listing

### Fase 2: Checkout
- [ ] Carrinho multi-item (Zustand)
- [ ] Validação promo codes
- [ ] Stripe Checkout
- [ ] Confirmação email

### Fase 3: Dashboards
- [ ] Dashboard Tourist
- [ ] Dashboard Provider
- [ ] Dashboard Host
- [ ] Dashboard Admin

### Fase 4: Advanced Features
- [ ] Sistema de comissões triplas
- [ ] QR codes tracking
- [ ] Analytics
- [ ] Notificações

## 🐛 Troubleshooting

### Erro: "supabaseUrl and supabaseKey are required"
- Verificar se `.env.local` existe
- Verificar se variáveis estão corretas
- Reiniciar servidor (`npm run dev`)

### Erro: "relation does not exist"
- Executar `supabase-schema.sql` no SQL Editor
- Verificar se todas as tabelas foram criadas

### Erro de autenticação
- Verificar RLS policies
- Confirmar que email foi verificado (desativar verificação em Supabase → Auth → Settings)

### Images não aparecem
- Criar bucket `listings` no Storage
- Configurar policies de acesso público
- Verificar URLs das imagens

## 📚 Recursos

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zustand](https://docs.pmnd.rs/zustand)

## 💡 Tips

1. **Desenvolvimento Local**
   - Usar Supabase local CLI (opcional): `npx supabase init`
   - Ou usar projeto cloud (mais fácil)

2. **Debug**
   - Supabase → Logs para ver queries
   - Supabase → Table Editor para inspecionar dados

3. **Deploy**
   - Vercel é recomendado (integração nativa Next.js)
   - Adicionar env vars no Vercel Dashboard

## 🔒 Segurança

- ✅ RLS ativado em todas as tabelas
- ✅ Policies configuradas
- ✅ Auth obrigatório para ações sensíveis
- 🚧 Rate limiting (adicionar depois)
- 🚧 CORS configurado (adicionar depois)
