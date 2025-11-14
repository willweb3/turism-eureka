# Sistema de Autenticação e Registro - Implementação Completa

## 📋 Visão Geral

Sistema completo de autenticação integrado com **Sharetribe Marketplace API**, incluindo registro de usuários, login, gestão de sessão e submissão de listings para partners.

---

## 🔐 Sistema de Autenticação Sharetribe

### Arquivos Principais

#### 1. **SDK Configuration** (`src/lib/sharetribe/marketplace.ts`)
- Inicialização lazy do Sharetribe SDK para evitar problemas de SSR
- Configuração com `clientId` do ambiente
- Uso de Proxy pattern para acesso seguro ao SDK
- Token management via cookies (gerenciado automaticamente pelo SDK)

```typescript
// Configuração principal
const sdk = sharetribeSdk.createInstance({
  clientId: process.env.NEXT_PUBLIC_SHARETRIBE_CLIENT_ID,
  baseUrl: 'https://flex-api.sharetribe.com',
  timeout: 30000,
});
```

#### 2. **Auth Service** (`src/lib/sharetribe/auth.service.ts`)

**Métodos implementados:**

- ✅ `register()` - Criação de usuários via `currentUser.create()`
- ✅ `login()` - Autenticação com email/password
- ✅ `logout()` - Encerramento de sessão
- ✅ `getCurrentUser()` - Buscar usuário autenticado
- ✅ `resendVerificationEmail()` - Reenviar email de verificação

**Características:**
- Tratamento completo de erros com códigos HTTP específicos
- Logging detalhado para debugging
- Mapeamento de dados do Sharetribe para o tipo `User` da aplicação
- Suporte a diferentes tipos de usuário (tourist, host, provider)
- Geração automática de referral codes para hosts

**IMPORTANTE - Verificação de Email:**
```
⚠️ SHARETRIBE REQUER VERIFICAÇÃO DE EMAIL ANTES DO LOGIN
- Usuários criados recebem email de verificação automaticamente
- Login só funciona APÓS verificar o email
- Administradores podem verificar manualmente no Console
```

---

## 🎨 Interface de Autenticação

### Página Unificada `/auth`

**Localização:** `src/app/auth/page.tsx`

**Componentes:**
1. **AuthTabs** - Navegação entre Sign Up e Login
2. **SignUpFormModal** - Formulário de registro
3. **LoginFormModal** - Formulário de login
4. **FormDivider** - Divisor "or"

**Design:**
- Hero background com imagem dos Açores
- Círculos decorativos (teal) nos cantos
- Modal card centralizado
- Design responsivo e acessível

### Sign Up Form (`src/components/auth/SignUpFormModal.tsx`)

**Campos:**
- Email (primeiro campo)
- First Name / Last Name (lado a lado)
- Password (com botão show/hide)
- ~~Confirm Password~~ (removido conforme design)

**Características:**
- Validação com Zod schema
- React Hook Form para gestão de estado
- Botão Google OAuth (desabilitado, para futura implementação)
- Divisor "or"
- Texto de termos ao final (não checkbox)
- Redirecionamento para login com aviso de verificação após registro

**Validação:**
```typescript
// Password requirements:
- Mínimo 8 caracteres
- 1 letra maiúscula
- 1 letra minúscula
- 1 número
- 1 caractere especial
```

### Login Form (`src/components/auth/LoginFormModal.tsx`)

**Campos:**
- Email
- Password (com botão show/hide)
- Remember me checkbox
- Link "Forgot password"

**Características:**
- Aviso de verificação quando vindo do registro
- Tratamento de erros específicos (401, 403)
- Wrapped em Suspense para `useSearchParams`
- Integração com `useAuth` hook

### Schemas de Validação (`src/lib/validations/auth.schema.ts`)

```typescript
// Schemas exportados:
- emailSchema
- passwordSchema
- nameSchema
- signUpSchema
- loginSchema
- passwordResetSchema
- updatePasswordSchema
```

---

## 🎯 Header Dinâmico

**Localização:** `src/components/layout/Header.tsx`

### Funcionalidades Implementadas:

#### 1. **Ícone do Carrinho**
```typescript
<ShoppingCart size={24} />
// Link para /cart
// Espaço para badge de contador (comentado)
```

#### 2. **Avatar com Iniciais**
Quando usuário está logado:
```typescript
// Exemplo: "João Marques" → "JM"
getUserInitials() // Retorna primeiras letras do nome e apelido
```

**Estilo do Avatar:**
- Círculo 40x40px
- Borda branca semi-transparente
- Background semi-transparente
- Hover effects suaves

#### 3. **Become a Partner / Submit Listing**

**Lógica condicional:**
```typescript
{isAuthenticated && user ? (
  <Link href="/submit-listing">Submit your listing</Link>
) : (
  <Link href="/register">Become a partner</Link>
)}
```

#### 4. **User Dropdown Menu**
Quando logado, clique no avatar abre menu com:
- Nome completo e email
- Link para Perfil
- Botão Sair (logout)

#### 5. **Links Atualizados**
- ~~Favorites~~ (removido)
- Become a partner → `/register`
- Login → `/auth?tab=login`
- Register → `/auth?tab=signup`

---

## 📝 Submit Listing Page

**Localização:** `src/app/submit-listing/page.tsx`

### Proteção de Rota
```typescript
// Redireciona para login se não autenticado
if (!isAuthenticated) {
  router.push('/auth?tab=login');
}
```

### Seleção de Tipo de Listagem

**3 tipos disponíveis:**
1. **Experience** 🎯
   - Tours, atividades, aulas
   - Campos: price per person, max capacity

2. **Product** 💰
   - Artesanato local, produtos
   - Campos: price

3. **Accommodation** 📍
   - Hotéis, aluguéis, estadias
   - Campos: price per night, rooms

### Formulário Completo

**Campos principais:**
- Title (obrigatório)
- Description (textarea, obrigatório)
- Island (dropdown com 9 ilhas dos Açores):
  - São Miguel
  - Terceira
  - Faial
  - Pico
  - São Jorge
  - Graciosa
  - Flores
  - Corvo
  - Santa Maria
- Location (cidade/área, obrigatório)
- Price (condicional por tipo)
- Capacity (para experiences)
- Images upload (drag & drop, até 10 imagens)

### Botões de Ação
- Cancel (volta para página anterior)
- Submit Listing (submete formulário)

### Info Card
Explica o processo:
- Revisão em 24-48h
- Contato se precisar informações
- Notificação quando aprovado
- Notificações de bookings

---

## 🔄 Fluxos de Usuário

### 1. Registro Completo
```
1. Usuário acessa /auth?tab=signup
2. Preenche formulário (email, nome, password)
3. Submete → Sharetribe cria usuário
4. Sharetribe envia email de verificação
5. Redireciona para /auth?tab=login com aviso
6. Usuário verifica email
7. Clica no link de verificação
8. Pode fazer login
```

### 2. Login
```
1. Usuário acessa /auth?tab=login
2. Insere email e password
3. Sistema valida com Sharetribe
4. Se email não verificado → erro específico
5. Se credenciais inválidas → erro 401
6. Sucesso → redireciona para /
7. Header mostra avatar com iniciais
```

### 3. Submissão de Listing (Partner)
```
1. Usuário registra e verifica email
2. Faz login
3. Header mostra "Submit your listing"
4. Clica e acessa /submit-listing
5. Escolhe tipo (Experience/Product/Accommodation)
6. Preenche formulário
7. Upload de imagens
8. Submete para revisão
```

---

## 🗂️ Estrutura de Arquivos

```
frontend/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   └── page.tsx                 # Página unificada de auth
│   │   ├── submit-listing/
│   │   │   └── page.tsx                 # Submissão de listings
│   │   └── register/
│   │       └── page.tsx                 # Registro de partners (antigo)
│   │
│   ├── components/
│   │   ├── auth/
│   │   │   ├── AuthTabs.tsx            # Tabs Sign Up / Login
│   │   │   ├── SignUpFormModal.tsx     # Form de registro
│   │   │   ├── LoginFormModal.tsx      # Form de login
│   │   │   ├── PasswordInput.tsx       # Input com show/hide
│   │   │   └── FormDivider.tsx         # Divisor "or"
│   │   │
│   │   └── layout/
│   │       └── Header.tsx               # Header dinâmico
│   │
│   ├── lib/
│   │   ├── sharetribe/
│   │   │   ├── marketplace.ts          # SDK config
│   │   │   └── auth.service.ts         # Serviço de auth
│   │   │
│   │   ├── validations/
│   │   │   └── auth.schema.ts          # Schemas Zod
│   │   │
│   │   └── utils/
│   │       └── password.ts             # Cálculo de força
│   │
│   ├── hooks/
│   │   └── useAuth.ts                   # Hook de autenticação
│   │
│   └── types/
│       └── user.types.ts                # Tipos TypeScript
│
└── .env.local
    └── NEXT_PUBLIC_SHARETRIBE_CLIENT_ID
```

---

## 🔧 Configuração Necessária

### Variáveis de Ambiente

```env
# .env.local
NEXT_PUBLIC_SHARETRIBE_CLIENT_ID=your-client-id-here
```

### Dependências

```json
{
  "sharetribe-flex-sdk": "^1.19.0",
  "react-hook-form": "^7.x",
  "@hookform/resolvers": "^3.x",
  "zod": "^3.x",
  "lucide-react": "^0.x",
  "zustand": "^4.x"
}
```

---

## 🎨 Design System

### Cores
- Primary: `#52C6BB` (Teal)
- Dark: `#02232F`
- Text: `#11212D`
- Gray: `#777777`
- Background: `#F8F9FA`
- Error: `#E53E3E`

### Fontes
- **Lufga**: Títulos e headings (bold, semibold)
- **Hanken Grotesk**: Body text e UI elements

### Componentes Estilizados
- Inputs: `bg-[#F2F6F8]`, border rounded-lg
- Buttons: rounded-full ou rounded-lg
- Cards: rounded-2xl com shadow-sm
- Avatar: w-10 h-10 rounded-full

---

## ⚠️ Problemas Conhecidos e Soluções

### 1. Email Verification Required
**Problema:** Login falha com "invalid credentials"
**Causa:** Email não verificado no Sharetribe
**Solução:**
- Verificar email através do link enviado
- OU verificar manualmente no Sharetribe Console

### 2. SDK SSR Issues
**Problema:** SDK não pode ser inicializado no servidor
**Solução:** Lazy initialization com check `typeof window`

### 3. Token Management
**Problema:** Tokens precisam ser persistidos
**Solução:** SDK gerencia automaticamente via cookies

---

## 🚀 Próximos Passos (Sugeridos)

### Funcionalidades Pendentes:

1. **Google OAuth**
   - Implementar botão "Continue with Google"
   - Configurar no Sharetribe Console

2. **Forgot Password**
   - Página de recuperação de senha
   - Integração com `passwordReset` do SDK

3. **Email Verification Page**
   - Página de confirmação de email
   - Reenviar email de verificação

4. **Submit Listing Backend**
   - Integração com Sharetribe Listings API
   - Upload de imagens para S3/Cloudinary
   - Validação de dados

5. **User Profile**
   - Página de perfil completa
   - Edição de dados
   - Lista de listings do usuário

6. **Cart Functionality**
   - Implementar carrinho de compras
   - Badge com contador de itens
   - Checkout flow

---

## 📊 Status de Implementação

### ✅ Completado
- [x] SDK Sharetribe configurado
- [x] Auth service completo
- [x] Página /auth unificada
- [x] Sign up form
- [x] Login form
- [x] Validação com Zod
- [x] Header dinâmico
- [x] Avatar com iniciais
- [x] Cart icon
- [x] Submit listing page (UI)
- [x] Protected routes
- [x] Error handling
- [x] Mobile responsive

### ⏳ Em Progresso
- [ ] Submit listing backend integration
- [ ] Image upload functionality
- [ ] Sharetribe listings API

### 📋 Pendente
- [ ] Google OAuth
- [ ] Forgot password
- [ ] Email verification page
- [ ] User profile page
- [ ] Cart functionality
- [ ] Booking system
- [ ] Payment integration

---

## 🐛 Debugging

### Logs Úteis
```typescript
// Auth service tem logging detalhado:
console.log('🔄 Tentando login com email:', email);
console.log('✅ Login bem-sucedido:', response.data.data);
console.log('❌ Erro completo no login:', error);
```

### Testar Autenticação
```bash
# Console do navegador
localStorage.getItem('auth-storage') // Ver estado Zustand
```

### Verificar Usuário no Sharetribe
1. Acesse Sharetribe Console
2. Users → All users
3. Procure pelo email
4. Verifique "Email verified" status

---

## 📚 Referências

- [Sharetribe SDK Documentation](https://sharetribe.github.io/flex-sdk-js/)
- [Sharetribe API Reference](https://www.sharetribe.com/api-reference/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Schema Validation](https://zod.dev/)

---

## 👥 Tipos de Usuário

```typescript
type UserType = 'tourist' | 'host' | 'provider';

// Tourist: Usuário regular, pode fazer bookings
// Host: Pode submeter experiences/accommodations
// Provider: Pode submeter products/services
```

Todos os usuários começam como 'tourist' por padrão.

---

**Última atualização:** 14 de Novembro de 2025
**Versão:** 1.0.0
**Status:** ✅ Sistema de autenticação funcional e testado
