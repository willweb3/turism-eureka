# Design System - Quick Start Guide

## 🚀 Acesso Rápido

### Ver a Demo
```bash
npm run dev
# Acesse: http://localhost:3000/design-system
```

## 📦 Imports

### Opção 1: Import direto dos componentes
```tsx
import { Container, Grid, GridItem } from '@/design-system/foundations/grid';
```

### Opção 2: Import do index principal
```tsx
import { Container, Grid, GridItem } from '@/design-system';
```

## 🎯 Exemplos Rápidos

### 1. Layout Básico com Container
```tsx
import { Container } from '@/design-system';

export default function Page() {
  return (
    <Container>
      <h1>Minha Página</h1>
      <p>Conteúdo centralizado e responsivo</p>
    </Container>
  );
}
```

### 2. Grid Responsivo Simples
```tsx
import { Container, Grid, GridItem } from '@/design-system';

export default function ProductsPage() {
  return (
    <Container>
      <Grid columns={{ xs: 1, md: 2, lg: 3 }} gap={8}>
        <GridItem>
          <ProductCard />
        </GridItem>
        <GridItem>
          <ProductCard />
        </GridItem>
        <GridItem>
          <ProductCard />
        </GridItem>
      </Grid>
    </Container>
  );
}
```

### 3. Layout Sidebar + Content
```tsx
import { Container, Grid, GridItem } from '@/design-system';

export default function DashboardPage() {
  return (
    <Container>
      <Grid columns={{ xs: 1, lg: 12 }} gap={8}>
        {/* Sidebar: 3 colunas no desktop, full width no mobile */}
        <GridItem span={{ xs: 1, lg: 3 }}>
          <Sidebar />
        </GridItem>

        {/* Main Content: 9 colunas no desktop, full width no mobile */}
        <GridItem span={{ xs: 1, lg: 9 }}>
          <MainContent />
        </GridItem>
      </Grid>
    </Container>
  );
}
```

### 4. Hero Full Width + Grid
```tsx
import { Container, Grid, GridItem } from '@/design-system';

export default function HomePage() {
  return (
    <>
      {/* Hero Full Width */}
      <Container>
        <GridItem span={{ xs: 1, md: 12 }}>
          <Hero />
        </GridItem>
      </Container>

      {/* Content Grid */}
      <Container>
        <Grid columns={{ xs: 1, md: 2, lg: 3 }} gap={8}>
          <GridItem span={{ xs: 1, md: 2 }}>
            <FeaturedCard />
          </GridItem>
          <GridItem>
            <RegularCard />
          </GridItem>
          <GridItem>
            <RegularCard />
          </GridItem>
          <GridItem>
            <RegularCard />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
```

## 🎨 Classes Tailwind Recomendadas

### Spacing (Padding/Margin)
```tsx
<div className="p-4">     {/* 16px padding */}
<div className="p-8">     {/* 32px padding */}
<div className="mt-6">    {/* 24px margin-top */}
<div className="mb-12">   {/* 48px margin-bottom */}
<div className="px-4">    {/* 16px horizontal padding */}
<div className="py-8">    {/* 32px vertical padding */}
```

### Gap (Grid/Flex)
```tsx
<div className="gap-4">   {/* 16px gap */}
<div className="gap-8">   {/* 32px gap */}
```

### Breakpoints
```tsx
<div className="text-sm md:text-base lg:text-lg">
  {/* Texto aumenta conforme a tela */}
</div>

<div className="block md:hidden">
  {/* Visível apenas no mobile */}
</div>

<div className="hidden md:block">
  {/* Visível apenas no tablet+ */}
</div>
```

### Colors
```tsx
<div className="bg-brand-blue text-white">
  {/* Fundo azul da marca */}
</div>

<div className="text-brand-neutral">
  {/* Texto neutral */}
</div>
```

## 📐 Grid Specs por Breakpoint

| Device | Breakpoint | Colunas | Gutter | Classe Grid |
|--------|------------|---------|--------|-------------|
| Mobile | xs (320px) | 4 | 16px | `columns={{ xs: 1 }}` |
| Tablet | md (640px) | 8 | 32px | `columns={{ md: 2 }}` |
| Laptop | lg (1024px) | 12 | 32px | `columns={{ lg: 3 }}` |
| Desktop | xl (1280px) | 12 | 32px | `columns={{ xl: 4 }}` |

## 🔥 Dicas Rápidas

### 1. Sempre use Container
```tsx
// ✅ BOM
<Container>
  <Grid>...</Grid>
</Container>

// ❌ EVITE
<div className="max-w-7xl mx-auto">
  {/* Implementação manual */}
</div>
```

### 2. Mobile-First
```tsx
// ✅ BOM - Começa pequeno, aumenta
<Grid columns={{ xs: 1, md: 2, lg: 3 }}>

// ❌ EVITE - Começa grande, diminui
<Grid columns={{ lg: 3, md: 2, xs: 1 }}>
```

### 3. Use Spacing Tokens
```tsx
// ✅ BOM
<div className="p-4 m-6">

// ❌ EVITE
<div className="p-[13px] m-[21px]">
```

## 🎯 Comandos Úteis

```bash
# Iniciar dev server
npm run dev

# Ver a demo
# http://localhost:3000/design-system

# Build para produção
npm run build

# Verificar types
npm run type-check
```

## 📚 Mais Informações

- **README completo**: `src/design-system/README.md`
- **Demo interativa**: http://localhost:3000/design-system
- **Configuração Tailwind**: `tailwind.config.ts`

## ❓ FAQ

**P: Como mudar o número de colunas por breakpoint?**
```tsx
<Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}>
```

**P: Como fazer um item ocupar várias colunas?**
```tsx
<GridItem span={{ xs: 1, md: 2, lg: 3 }}>
  {/* Ocupa 1 col no mobile, 2 no tablet, 3 no desktop */}
</GridItem>
```

**P: Como desabilitar o padding do Container?**
```tsx
<Container noPadding>
  {/* Sem padding lateral */}
</Container>
```

**P: Como fazer um container full width?**
```tsx
<Container fluid>
  {/* Sem max-width */}
</Container>
```

**P: Como mudar o gap do grid?**
```tsx
<Grid gap={4}>        {/* 16px */}
<Grid gap={8}>        {/* 32px */}
<Grid gap="mobile">   {/* 16px */}
<Grid gap="desktop">  {/* 32px */}
```

---

**Pronto para começar? Acesse a demo:** http://localhost:3000/design-system
