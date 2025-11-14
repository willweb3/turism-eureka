# Azoreon Design System

A comprehensive design system for the Azoreon marketplace platform, built with Next.js 14, TypeScript, and Tailwind CSS.

## 📋 Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Components](#components)
  - [Grid System](#grid-system)
  - [Container](#container)
  - [Grid](#grid)
  - [GridItem](#griditem)
- [Foundations](#foundations)
  - [Breakpoints](#breakpoints)
  - [Spacing](#spacing)
  - [Colors](#colors)
- [Demo Page](#demo-page)
- [Best Practices](#best-practices)

## Overview

The Azoreon Design System provides a consistent set of design tokens, components, and patterns to build user interfaces that are:

- **Responsive**: Mobile-first design with 6 breakpoints
- **Consistent**: Based on 4px spacing system
- **Accessible**: Built with semantic HTML and ARIA standards
- **Type-safe**: Full TypeScript support

### Key Features

- 🎨 **3 Grid Layouts**: 4, 8, and 12 column grids
- 📱 **6 Breakpoints**: xs (320px), sm/md (640px), lg (1024px), xl (1280px), 2xl (1536px)
- 📏 **17 Spacing Tokens**: 4px base unit system
- 🌙 **Dark Mode**: Built-in dark mode support
- 📖 **Interactive Demo**: Live examples with code snippets

## Getting Started

### Installation

The design system is already integrated into the project. Simply import the components you need:

```tsx
import { Container, Grid, GridItem } from '@/design-system/foundations/grid';
```

### Basic Usage

```tsx
import { Container, Grid, GridItem } from '@/design-system/foundations/grid';

export default function MyPage() {
  return (
    <Container>
      <Grid columns={{ xs: 1, md: 2, lg: 3 }} gap={8}>
        <GridItem>
          <Card>Content 1</Card>
        </GridItem>
        <GridItem>
          <Card>Content 2</Card>
        </GridItem>
        <GridItem>
          <Card>Content 3</Card>
        </GridItem>
      </Grid>
    </Container>
  );
}
```

## Components

### Grid System

The grid system is based on Figma design specifications with responsive column layouts.

#### Breakpoint Specifications

| Breakpoint | Min Width | Columns | Gutter | Content Width |
|------------|-----------|---------|--------|---------------|
| xs         | 320px     | 4       | 16px   | 288px         |
| sm/md      | 640px     | 8       | 32px   | 576px         |
| lg         | 1024px    | 12      | 32px   | 960px         |
| xl         | 1280px    | 12      | 32px   | 1216px        |
| 2xl        | 1536px    | 12      | 32px   | 1312px        |

### Container

Responsive container with max-width constraints based on breakpoints.

**Props:**

- `children`: React.ReactNode - Content to render
- `className?`: string - Additional CSS classes
- `as?`: 'div' | 'section' | 'main' | 'article' | 'aside' - HTML element (default: 'div')
- `noPadding?`: boolean - Disable responsive padding
- `fluid?`: boolean - Use fluid width (no max-width)

**Example:**

```tsx
<Container>
  <h1>Page Title</h1>
  <p>Content goes here</p>
</Container>

// Fluid container without max-width
<Container fluid>
  <div>Full width content</div>
</Container>

// Container as section element
<Container as="section" className="py-12">
  <h2>Section Title</h2>
</Container>
```

### Grid

Flexible grid wrapper with responsive column configuration.

**Props:**

- `children`: React.ReactNode - Grid items
- `columns?`: number | object - Number of columns (responsive)
- `gap?`: 'mobile' | 'tablet' | 'desktop' | number - Gap between items
- `className?`: string - Additional CSS classes
- `as?`: 'div' | 'section' | 'ul' | 'ol' - HTML element (default: 'div')

**Example:**

```tsx
// Responsive grid
<Grid columns={{ xs: 1, md: 2, lg: 3 }} gap="desktop">
  <GridItem>Item 1</GridItem>
  <GridItem>Item 2</GridItem>
  <GridItem>Item 3</GridItem>
</Grid>

// Fixed columns
<Grid columns={4} gap={8}>
  <GridItem>Item 1</GridItem>
  <GridItem>Item 2</GridItem>
</Grid>
```

### GridItem

Individual grid item with responsive span and positioning.

**Props:**

- `children`: React.ReactNode - Content to render
- `span?`: number | object - Column span (number of columns to occupy)
- `start?`: number | object - Column start position
- `className?`: string - Additional CSS classes
- `as?`: 'div' | 'li' | 'article' | 'section' - HTML element (default: 'div')

**Example:**

```tsx
// Full width on mobile, half width on desktop
<GridItem span={{ xs: 4, lg: 6 }}>
  <Card>Content</Card>
</GridItem>

// Start at specific column
<GridItem span={4} start={3}>
  <Card>Offset content</Card>
</GridItem>

// Sidebar layout
<Grid columns={{ xs: 1, lg: 12 }} gap={8}>
  <GridItem span={{ xs: 1, lg: 3 }}>
    <Sidebar />
  </GridItem>
  <GridItem span={{ xs: 1, lg: 9 }}>
    <MainContent />
  </GridItem>
</Grid>
```

## Foundations

### Breakpoints

Responsive breakpoints for different screen sizes:

```tsx
// Tailwind breakpoint classes
className="text-sm md:text-base lg:text-lg xl:text-xl"

// Grid responsive columns
<Grid columns={{ xs: 1, md: 2, lg: 3, xl: 4 }}>
```

**Usage in Code:**

```tsx
import { getCurrentBreakpoint, gridBreakpoints } from '@/design-system/foundations';

// Get current breakpoint
const breakpoint = getCurrentBreakpoint(window.innerWidth);

// Access breakpoint configuration
const config = gridBreakpoints[breakpoint];
console.log(config.columns); // 4, 8, or 12
```

### Spacing

Consistent spacing tokens based on 4px base unit:

| Token | Value | Rem   | Usage |
|-------|-------|-------|-------|
| 1     | 4px   | 0.25  | Minimum spacing |
| 2     | 8px   | 0.5   | Extra small |
| 4     | 16px  | 1     | Base unit (mobile gutter) |
| 6     | 24px  | 1.5   | Medium spacing |
| 8     | 32px  | 2     | Large (desktop gutter) |
| 12    | 48px  | 3     | Extra large |
| 16    | 64px  | 4     | Section spacing |
| 20    | 80px  | 5     | Section spacing |
| 24    | 96px  | 6     | Section spacing |

**Tailwind Classes:**

```tsx
// Padding
<div className="p-4">   {/* 16px padding */}
<div className="px-8">  {/* 32px horizontal padding */}
<div className="py-6">  {/* 24px vertical padding */}

// Margin
<div className="m-4">   {/* 16px margin */}
<div className="mt-8">  {/* 32px top margin */}
<div className="mb-12"> {/* 48px bottom margin */}

// Gap (Grid/Flex)
<div className="gap-4">  {/* 16px gap */}
<div className="gap-8">  {/* 32px gap */}
```

**Semantic Spacing:**

```tsx
import { semanticSpacing } from '@/design-system/foundations';

// Gutters
semanticSpacing.gutter.mobile;   // 16px
semanticSpacing.gutter.desktop;  // 32px

// Section spacing
semanticSpacing.section.small;   // 64px
semanticSpacing.section.medium;  // 80px
semanticSpacing.section.large;   // 96px

// Component spacing
semanticSpacing.component.tight;    // 8px
semanticSpacing.component.normal;   // 16px
semanticSpacing.component.relaxed;  // 24px
semanticSpacing.component.loose;    // 32px
```

### Colors

Brand colors for Azoreon:

```tsx
// Tailwind classes
<div className="bg-brand-blue text-white">    {/* #11212D */}
<div className="text-brand-neutral">          {/* #BFC3C9 */}

// Primary/Secondary palettes
<div className="bg-primary-600">              {/* Blue scale */}
<div className="bg-secondary-500">            {/* Purple scale */}
```

## Demo Page

Visit the interactive demo page to explore all components and patterns:

```
http://localhost:3000/design-system
```

The demo page includes:

- ✅ Live component examples
- ✅ Code snippets with copy button
- ✅ Grid overlay visualization
- ✅ Breakpoint indicator
- ✅ Viewport simulator
- ✅ Dark mode toggle
- ✅ Responsive preview

## Best Practices

### 1. Always Use Container for Content

```tsx
// ✅ Good
<Container>
  <h1>Page Title</h1>
  <Grid columns={{ xs: 1, md: 2 }}>
    {/* content */}
  </Grid>
</Container>

// ❌ Bad - No container
<div className="max-w-7xl mx-auto px-4">
  {/* Manual container implementation */}
</div>
```

### 2. Use Responsive Columns

```tsx
// ✅ Good - Mobile-first responsive
<Grid columns={{ xs: 1, md: 2, lg: 3 }}>
  {items.map(item => (
    <GridItem key={item.id}>
      <Card>{item.title}</Card>
    </GridItem>
  ))}
</Grid>

// ❌ Bad - Fixed columns
<div className="grid grid-cols-3">
  {/* Not responsive */}
</div>
```

### 3. Use Spacing Tokens

```tsx
// ✅ Good - Use design system tokens
<div className="p-4 m-6 gap-8">
  {/* 16px padding, 24px margin, 32px gap */}
</div>

// ❌ Bad - Arbitrary values
<div className="p-[13px] m-[21px] gap-[27px]">
  {/* Not consistent with design system */}
</div>
```

### 4. Leverage Semantic Props

```tsx
// ✅ Good - Use semantic HTML
<Container as="main">
  <Grid as="section" columns={{ xs: 1, md: 2 }}>
    <GridItem as="article">
      <Card />
    </GridItem>
  </Grid>
</Container>

// ❌ Bad - Divs everywhere
<div>
  <div>
    <div>
      <Card />
    </div>
  </div>
</div>
```

### 5. Mobile-First Approach

```tsx
// ✅ Good - Mobile-first
<div className="text-sm md:text-base lg:text-lg">
  {/* Progressively enhance for larger screens */}
</div>

// ❌ Bad - Desktop-first
<div className="text-lg md:text-sm">
  {/* Scaling down instead of up */}
</div>
```

## Project Structure

```
src/design-system/
├── foundations/
│   ├── grid/
│   │   ├── Container.tsx
│   │   ├── Grid.tsx
│   │   ├── GridItem.tsx
│   │   ├── grid.config.ts
│   │   └── index.ts
│   ├── spacing/
│   │   ├── spacing.config.ts
│   │   └── index.ts
│   └── index.ts
├── components/
│   └── [future components]
├── demo/
│   ├── sections/
│   │   ├── GridDemo.tsx
│   │   ├── SpacingDemo.tsx
│   │   ├── BreakpointsDemo.tsx
│   │   └── index.ts
│   ├── DesignSystemDemo.tsx
│   └── DesignSystemLayout.tsx
└── README.md
```

## Contributing

When adding new components to the design system:

1. Add TypeScript types for all props
2. Use JSDoc comments for documentation
3. Create examples in the demo page
4. Follow existing naming conventions
5. Ensure responsive behavior
6. Test dark mode support
7. Update this README

## Resources

- [Figma Design Files](https://figma.com) - Design specifications
- [Tailwind CSS Docs](https://tailwindcss.com) - Utility classes reference
- [Next.js Docs](https://nextjs.org) - Framework documentation

---

Built with ❤️ for Azoreon · [Visit Demo](/design-system)
