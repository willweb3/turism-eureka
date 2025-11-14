# AZOREON Frontend

Frontend do marketplace de turismo nos Açores (Ilha do Pico) desenvolvido com Next.js 14 e Supabase.

## 🚀 Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Payments**: Stripe Connect
- **State**: Zustand
- **Forms**: Zod validation

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Copiar .env.example para .env.local e preencher
cp .env.example .env.local

# Executar em desenvolvimento
npm run dev
```

## 🔑 Variáveis de Ambiente

Criar `.env.local` com:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_pk
STRIPE_SECRET_KEY=your_stripe_sk
```

## 📁 Estrutura

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Rotas de autenticação
│   │   ├── login/
│   │   └── signup/
│   ├── search/            # Pesquisa de listings
│   ├── listings/[id]/     # Detalhe de listing
│   └── dashboard/         # Dashboards por tipo de user
├── components/
│   ├── ui/               # Componentes base
│   ├── layout/           # Header, Footer
│   ├── marketplace/      # Componentes marketplace
│   └── dashboard/        # Componentes dashboard
├── lib/
│   ├── supabase.ts      # Cliente Supabase
│   └── utils.ts         # Utilities
└── types/
    └── database.types.ts # Tipos Supabase
```

## 🎯 Funcionalidades Implementadas

### ✅ Autenticação
- [x] Signup com tipos de utilizador (tourist, provider, host, admin)
- [x] Login com redirect baseado em user_type
- [x] Supabase Auth integrado

### ✅ Marketplace
- [x] Homepage com pesquisa
- [x] Listagem de serviços/produtos/eventos
- [x] Filtros de pesquisa (categoria, preço, data, pessoas)
- [x] Detalhe de listing com galeria
- [x] Sistema de reviews e ratings
- [x] Formulário de reserva/compra

### 🚧 Próximas Funcionalidades

#### Checkout & Pagamentos
- [ ] Carrinho multi-item
- [ ] Validação de promo codes
- [ ] Integração Stripe Checkout
- [ ] Split payments (Platform + Provider + Host)

#### Dashboards
- [ ] Dashboard Turista (reservas, reviews)
- [ ] Dashboard Provider (listings, reservas, comissões)
- [ ] Dashboard Host (promo codes, QR codes, analytics)
- [ ] Dashboard Admin (aprovações, gestão)

#### QR Codes & Promo Codes
- [ ] Geração de promo codes únicos
- [ ] Geração de QR codes
- [ ] Analytics de conversões
- [ ] Tracking de scans

## 🗄️ Schema Supabase

### Tabelas Principais:

- **profiles** - Perfis de utilizadores (estende auth.users)
- **listings** - Serviços/Produtos/Eventos
- **transactions** - Transações (com comissões triplas)
- **transaction_items** - Items da transação
- **promo_codes** - Códigos promocionais
- **qr_codes** - QR codes para tracking
- **reviews** - Avaliações de listings

## 🎨 Design

- **Mobile-first**: Totalmente responsivo
- **Cores primárias**: Azul (primary) e Roxo (secondary)
- **Componentes**: Baseados em Tailwind CSS

## 📱 Tipos de Utilizadores

1. **Tourist** - Compra/reserva experiências
2. **Provider** - Prestador de serviços de animação
3. **Host** - Anfitrião (gera promo codes, recebe comissões)
4. **Admin** - Gestão da plataforma

## 🔐 Sistema de Comissões

Para cada transação:
- **Platform**: 10% do total
- **Host**: 5% do total (se usar promo code)
- **Provider**: Restante (85%)

## 🚀 Deploy

```bash
# Build para produção
npm run build

# Deploy na Vercel
vercel
```

## 📝 Comandos

```bash
npm run dev          # Desenvolvimento
npm run build        # Build produção
npm start            # Servidor produção
npm run lint         # Linting
```

## 🔗 Links Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Stripe Connect](https://stripe.com/docs/connect)
