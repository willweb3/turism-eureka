# 🛒 AZOREON Cart - Guia de Implementação Completo

## Status Atual

✅ **Estrutura de diretórios** criada
✅ **TypeScript types** definidos em `lib/cart/cartTypes.ts`
✅ **Zustand** já instalado no projeto

## Próximos Passos

### 1. Database Setup (Supabase)

Execute este SQL no Supabase SQL Editor:

```sql
-- Ver arquivo: supabase/migrations/cart_tables.sql
-- (O código SQL completo está no guia original que você forneceu)
```

### 2. Criar Zustand Store

Arquivo: `lib/cart/cartStore.ts`
(Código completo fornecido no guia original)

### 3. Criar Custom Hooks

#### `hooks/cart/useCartTimer.ts`
```typescript
import { useEffect, useState } from 'react';
import type { CartItem } from '@/lib/cart/cartTypes';

export function useCartTimer(items: CartItem[]) {
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [hasExpired, setHasExpired] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      setTimeLeft('');
      setHasExpired(false);
      return;
    }

    const earliestExpiry = items.reduce((earliest, item) => {
      const itemExpiry = new Date(item.expiresAt).getTime();
      return itemExpiry < earliest ? itemExpiry : earliest;
    }, new Date(items[0].expiresAt).getTime());

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = earliestExpiry - now;

      if (distance < 0) {
        setTimeLeft('Expired');
        setHasExpired(true);
        clearInterval(interval);
        return;
      }

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${minutes}:${seconds.toString().padStart(2, '0')}`);
      setHasExpired(false);
    }, 1000);

    return () => clearInterval(interval);
  }, [items]);

  return { timeLeft, hasExpired };
}
```

### 4. Criar Componentes UI

Ver código completo de cada componente no guia original:

- `components/cart/CartPage.tsx` - Container principal
- `components/cart/CartHeader.tsx` - Timer + Remove All
- `components/cart/CartItem.tsx` - Card de item individual
- `components/cart/QuantitySelector.tsx` - Seletor +/-
- `components/cart/CartSummary.tsx` - Sidebar com resumo
- `components/cart/CartEmpty.tsx` - Empty state
- `components/cart/SecurityBadges.tsx` - Badges de segurança

### 5. Criar API Routes

Ver código completo no guia original:

- `app/api/cart/route.ts` - CRUD operations
- `app/api/cart/validate/route.ts` - Validação de disponibilidade
- `app/api/cart/promo/route.ts` - Validação de promo codes

### 6. Página Principal do Carrinho

```typescript
// app/cart/page.tsx
import { CartPage } from '@/components/cart/CartPage';

export default function Cart() {
  return <CartPage />;
}
```

## Design System Reference

### Cores
```typescript
const colors = {
  'blue-500': '#11212D',
  'blue-600': '#0E1B25',
  'teal-300': '#52C6BB',
  'teal-400': '#3CA997',
  'grey-50': '#ECE8E8',
  'grey-100': '#D6D0D0',
  'grey-400': '#908C8C',
  'grey-500': '#777777',
  'neutral-600': '#A7ACB3',
  'yellow-500': '#FFBA33',
  'info-400': '#2C4E63',
  'bg-page': '#F2F6F8',
};
```

### Tipografia
```typescript
// Hanken Grotesk (body) + Lufga (headings)
H1: '28px bold Lufga'
H2: '24px bold Hanken'
H3: '18px bold Hanken'
Body: '16px regular Hanken'
Price: '32px bold Hanken'
```

### Espaçamento
```typescript
cardPadding: '24px'
cardGap: '18px'
cardRadius: '24px'
buttonRadius: '48px'
```

## Checklist de Implementação

### Fase 1: Backend
- [ ] Executar migrations SQL no Supabase
- [ ] Criar tabela `cart_items`
- [ ] Criar tabela `promo_codes`
- [ ] Criar funções RPC (availability, cleanup)
- [ ] Configurar RLS policies
- [ ] Testar queries no Supabase

### Fase 2: State Management
- [ ] Implementar Zustand store em `lib/cart/cartStore.ts`
- [ ] Configurar persistence com localStorage
- [ ] Criar utility functions em `lib/cart/cartUtils.ts`
- [ ] Criar custom hook `useCartTimer`

### Fase 3: Components
- [ ] CartPage (layout principal)
- [ ] CartHeader (timer + actions)
- [ ] CartItem (card individual)
- [ ] QuantitySelector
- [ ] CartSummary (sidebar)
- [ ] CartEmpty (empty state)
- [ ] SecurityBadges

### Fase 4: API Routes
- [ ] GET/POST/PATCH/DELETE `/api/cart`
- [ ] POST `/api/cart/validate`
- [ ] POST `/api/cart/promo`
- [ ] POST `/api/cart/sync`

### Fase 5: Testing
- [ ] Testar add to cart
- [ ] Testar update quantity
- [ ] Testar remove item
- [ ] Testar promo codes
- [ ] Testar timer expiration
- [ ] Testar responsividade

## Testing Commands

```bash
# Start dev server
npm run dev

# Run tests (se configurado)
npm test

# Build production
npm run build

# Check TypeScript
npx tsc --noEmit
```

## Common Issues & Solutions

### 1. Supabase RLS não permite queries
**Solução**: Verificar policies e usar `service_role` key para operações admin

### 2. Timer não atualiza
**Solução**: Verificar se `expiresAt` está no formato ISO string correto

### 3. Zustand não persiste
**Solução**: Verificar se `partialize` está configurado corretamente

### 4. Images não carregam
**Solução**: Configurar `next.config.js` com domains permitidos

## Recursos Adicionais

- [Zustand Docs](https://docs.pmnd.rs/zustand)
- [Next.js 14 App Router](https://nextjs.org/docs/app)
- [Supabase RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [Shadcn/ui](https://ui.shadcn.com/)

## Contato & Suporte

Para dúvidas ou suporte, consultar:
- Documentação do projeto
- GitHub Issues
- Slack/Discord da equipe

---

**Última atualização**: $(date +%Y-%m-%d)
**Versão**: 1.0.0
**Status**: 🚧 Em implementação
