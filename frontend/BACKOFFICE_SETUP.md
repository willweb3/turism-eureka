# 🏢 AZOREON Backoffice - Setup Guide

## ✅ O QUE JÁ FOI IMPLEMENTADO

### 1. Prisma Setup ✅
- [x] Prisma Client instalado (`@prisma/client`, `prisma`, `tsx`)
- [x] Schema completo com todos os models AZOREON
- [x] Schema sincronizado com base de dados Supabase existente
- [x] Seed script criado

### 2. API Routes ✅
- [x] `/api/backoffice/users` - Listar users com filtros e paginação
- [x] `/api/backoffice/listings` - Listar listings com filtros
- [x] `/api/backoffice/transactions` - Listar transactions com detalhes
- [x] `/api/backoffice/transactions/[id]` - Detalhe individual de transaction
- [x] `/api/backoffice/commissions/stats` - Stats de commissions (CRÍTICO)
- [x] `/api/backoffice/stats` - Stats gerais do dashboard

### 3. Backoffice UI ✅
- [x] Layout com sidebar (`/backoffice/layout.tsx`)
- [x] Dashboard com stats (`/backoffice/page.tsx`)
- [x] Página Users (`/backoffice/users/page.tsx`)
- [x] Página Listings (`/backoffice/listings/page.tsx`)
- [x] Página Transactions (`/backoffice/transactions/page.tsx`)
- [x] **Página Commissions (CRÍTICA)** (`/backoffice/commissions/page.tsx`)
- [x] Página Transaction Detail (`/backoffice/transactions/[id]/page.tsx`)

---

## 📂 ESTRUTURA DE FICHEIROS CRIADOS

```
frontend/
├── prisma/
│   ├── schema.prisma          # Schema completo (sincronizado com Supabase)
│   └── seed.ts                # Seed script
│
├── src/
│   ├── lib/
│   │   └── prisma.ts          # Prisma Client singleton
│   │
│   ├── app/
│   │   ├── api/backoffice/
│   │   │   ├── users/route.ts
│   │   │   ├── listings/route.ts
│   │   │   ├── transactions/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/route.ts
│   │   │   ├── commissions/
│   │   │   │   └── stats/route.ts
│   │   │   └── stats/route.ts
│   │   │
│   │   └── backoffice/
│   │       ├── layout.tsx          # Sidebar + navigation
│   │       ├── page.tsx            # Dashboard
│   │       ├── users/page.tsx
│   │       ├── listings/page.tsx
│   │       ├── transactions/
│   │       │   ├── page.tsx
│   │       │   └── [id]/page.tsx
│   │       └── commissions/page.tsx  # PÁGINA CRÍTICA
│   │
│   └── package.json           # Scripts adicionados: db:push, db:seed, db:studio
```

---

## 🚀 COMO USAR O BACKOFFICE

### PASSO 1: Aceder ao Backoffice

O servidor já está a correr em `http://localhost:3000`.

**URL do backoffice:**
```
http://localhost:3000/backoffice
```

### PASSO 2: Navegação

O sidebar contém 5 páginas:

1. **📊 Dashboard** - `/backoffice`
   - Total users, listings, transactions
   - Total revenue e platform revenue
   - **Host Commissions Paid** (destacado em laranja)

2. **👥 Users** - `/backoffice/users`
   - Lista de todos os users
   - Filtros por user type (tourist, provider, host, admin)
   - Search por nome

3. **📋 Listings** - `/backoffice/listings`
   - Lista de todos os listings
   - Filtros por status e type
   - Info do provider

4. **💳 Transactions** - `/backoffice/transactions`
   - Lista de transactions com breakdown de commissions
   - Filtro por status
   - Mostra customer, provider, host
   - **Breakdown visual de commissions** (Platform 10% + Host 5% + Provider 85%)

5. **💰 Commissions** - `/backoffice/commissions` ⭐ **PÁGINA CRÍTICA**
   - Stats de commissions (total, paid, pending)
   - Tabela de commissions por host
   - Explicação do modelo de negócio AZOREON
   - Destaque visual (cor laranja) em toda a página

### PASSO 3: Detalhe de Transaction

Clicando numa transaction, vai para:
```
/backoffice/transactions/[id]
```

Mostra:
- Overview completo
- Customer, Provider, Host info
- Items da transaction
- Reviews (se existirem)
- **Sidebar com breakdown visual de commissions** (gráficos de barras)

---

## 🗄️ SETUP DA BASE DE DADOS

### Opção A: Usar a Base de Dados Supabase Existente

Como o Prisma já foi configurado para usar a mesma base de dados do Supabase, basta garantir que a Supabase SQL schema foi executada.

**1. Executar o schema SQL no Supabase:**

Ir a: https://supabase.com/dashboard/project/yysvhmnfikwsropgnngn/sql

Copiar e executar o ficheiro `supabase-schema.sql`.

**2. Verificar que as tabelas existem:**

O Prisma já foi configurado (`npx prisma db pull`) para ler o schema existente.

**3. Gerar Prisma Client (já feito):**

```bash
npx prisma generate
```

### Opção B: Ver os Dados com Prisma Studio

```bash
npm run db:studio
```

Isto abre uma interface visual em `http://localhost:5555` onde podes ver e editar dados.

---

## 🌱 SEED DATA

### Como Popular a Base de Dados

O seed script está pronto em `prisma/seed.ts`.

**IMPORTANTE:** O seed assume que já existem users criados via Supabase Auth. Portanto:

1. **Criar users via frontend signup:**
   - `http://localhost:3000/auth/signup`
   - Criar pelo menos:
     - 1 Provider (nome contém "Provider")
     - 1 Tourist (nome contém "Turista")
     - 1 Host (nome contém "Host")

2. **Executar seed:**
   ```bash
   npm run db:seed
   ```

O seed vai:
- Encontrar os users existentes
- Criar 4 listings (se não existirem)
- Criar promo code para o host
- Criar QR code para o host
- Criar 1 transaction de teste com commission
- Criar 1 review

### Output Esperado:

```
🌱 Seeding database...
📊 Found 3 existing users
✅ Users found - seeding listings and other data...
✅ Listings criados
✅ Promo code criado
✅ QR code criado
✅ Transaction criada
✅ Review criada

🎉 Seed completo!
=====================================
👤 Users: 3
📋 Listings: 4
🎫 Promo Codes: 1
📱 QR Codes: 1
💳 Transactions: 1
⭐ Reviews: 1
=====================================
```

---

## 🎯 PÁGINAS CRÍTICAS - COMMISSIONS

### Por que a Página Commissions é CRÍTICA?

A comissão de 5% para hosts é o **diferencial central do modelo AZOREON**. É o que torna a plataforma única em relação a concorrentes.

**Modelo de Comissões:**
- **10%** → Plataforma AZOREON
- **5%** → Host (quem trouxe o cliente via referral)
- **85%** → Provider (quem oferece o serviço/produto)

### Features da Página Commissions:

1. **Stats Cards Destacados:**
   - Total Commissions
   - Paid to Hosts
   - Pending Payment

2. **Explicação do Modelo:**
   - Box laranja explicando o split 10%-5%-85%
   - Destaque no Host (5%)

3. **Tabela de Commissions por Host:**
   - Nome do host
   - Número de transactions
   - Total commission
   - Paid vs Pending
   - Status (PENDING ou UP TO DATE)

4. **Visual Branding:**
   - Cor laranja em toda a página
   - Badge "CRITICAL TRACKING"
   - Ícones e emojis

---

## 🔧 SCRIPTS NPM DISPONÍVEIS

```bash
# Desenvolvimento
npm run dev              # Inicia dev server (já está a correr)

# Prisma
npm run db:push          # Push schema para DB (já não é necessário)
npm run db:seed          # Popular base de dados
npm run db:studio        # UI visual para ver dados

# Build
npm run build            # Build para produção
npm start                # Correr build de produção
```

---

## 📊 DADOS DE TESTE

Após executar o seed, terás:

### Users (criados via Supabase Auth):
- Provider: `provider@test.com`
- Tourist: `tourist@test.com`
- Host: `host@test.com`

### Listings:
1. Observação de Baleias (Service) - €50
2. Subida ao Pico (Service) - €35
3. Vinho do Pico DOC (Product) - €15
4. Festa das Vindimas 2025 (Event) - €20

### Promo Code:
- Code: `CARLOS2025`
- Tipo: Percentage
- Desconto: 10%

### Transaction de Teste:
- Total: €100
- Platform Fee: €10 (10%)
- Host Commission: €5 (5%)
- Provider Amount: €85 (85%)
- Status: PAID

---

## 🎨 DESIGN HIGHLIGHTS

### Cores do Sistema:
- **Azul** → Platform / System
- **Verde** → Provider / Success
- **Laranja** → Host / Commissions ⭐
- **Amarelo** → Pending / Warning
- **Vermelho** → Errors / Cancelled

### Commissions em Destaque:
- Sidebar com link laranja
- Dashboard com card laranja
- Página inteira com theme laranja
- Transaction detail com sidebar de breakdown

---

## 🔐 NOTAS DE SEGURANÇA

### Autenticação:
- **Fase Atual:** SEM autenticação (conforme pedido)
- **Próxima Fase:** Adicionar middleware que verifica `userType = 'admin'`

### RLS (Row Level Security):
- O Prisma bypassa RLS porque usa a connection string direta
- Isso é OK para backoffice (admin-only)
- Frontend usa Supabase client que respeita RLS

---

## 🚀 PRÓXIMOS PASSOS

### Fase 2 - Autenticação Admin:
1. Criar middleware em `/backoffice`
2. Verificar se user é `admin`
3. Redirect para login se não autenticado

### Fase 3 - Features Avançadas:
- [ ] Exportar commissions para CSV
- [ ] Payout tracking (Stripe Connect)
- [ ] Gráficos de revenue over time
- [ ] Notificações de pending payouts
- [ ] Bulk approval de listings

### Fase 4 - Stripe Integration:
- [ ] Stripe Connect para providers
- [ ] Automatic commission payouts para hosts
- [ ] Transaction status sync

---

## 📋 CHECKLIST DE SETUP

- [x] Prisma instalado e configurado
- [x] Schema sincronizado com Supabase
- [x] Prisma Client gerado
- [x] API Routes criadas
- [x] Backoffice UI implementado
- [x] Página Commissions destacada
- [ ] Executar `supabase-schema.sql` no Supabase ⚠️
- [ ] Criar users via signup
- [ ] Executar `npm run db:seed`
- [ ] Aceder a `http://localhost:3000/backoffice`

---

## 🎯 TESTE RÁPIDO

1. **Aceder ao backoffice:**
   ```
   http://localhost:3000/backoffice
   ```

2. **Verificar que o dashboard carrega** (pode mostrar 0 dados se seed não foi executado)

3. **Criar users via signup** se ainda não existirem

4. **Executar seed:**
   ```bash
   npm run db:seed
   ```

5. **Refresh do backoffice** - deve mostrar:
   - 3+ users
   - 4 listings
   - 1 transaction
   - €5 em host commissions

6. **Navegar para Commissions:**
   ```
   http://localhost:3000/backoffice/commissions
   ```
   - Deve mostrar a página toda em laranja
   - Stats de commissions
   - Tabela com 1 host

7. **Clicar numa transaction:**
   ```
   http://localhost:3000/backoffice/transactions
   ```
   - Ver breakdown visual de commissions

---

## ❓ TROUBLESHOOTING

### "Could not find the table 'public.listings' in the schema cache"
- **Causa:** O schema SQL ainda não foi executado no Supabase
- **Solução:** Executar `supabase-schema.sql` no Supabase SQL Editor

### "No users found" ao executar seed
- **Causa:** Ainda não foram criados users via Supabase Auth
- **Solução:** Criar users em `http://localhost:3000/auth/signup`

### Backoffice mostra "Loading..." infinitamente
- **Causa:** API routes não estão a funcionar
- **Solução:** Ver logs do servidor (`npm run dev` output)

### Prisma schema errors
- **Causa:** Base de dados não está sincronizada
- **Solução:** Executar `npx prisma db pull` para re-sincronizar

---

## 📞 COMANDOS ÚTEIS

```bash
# Ver schema atual da DB
npx prisma db pull

# Gerar Prisma Client
npx prisma generate

# Abrir Prisma Studio (UI visual)
npm run db:studio

# Seed database
npm run db:seed

# Ver logs do servidor
# (já está a correr em background)
```

---

🎉 **Backoffice AZOREON está pronto para usar!**

A página de **Commissions** está implementada com destaque especial, refletindo a importância crítica deste modelo de negócio para o AZOREON.
