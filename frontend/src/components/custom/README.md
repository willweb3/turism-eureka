# AZOREON Custom Components

Custom marketplace components for the Azoreon tourism platform (Açores, Portugal).

## 📦 Components Implemented

### 1. **ListingCard** - Product/Experience Card
Display cards for experiences, products, and events in the marketplace.

**Features:**
- Image with hover effect
- Price display with currency
- Rating stars
- Duration & guest information
- Badge overlay (Popular, New, etc.)
- Favorite button
- Responsive design

**Usage:**
```tsx
import { ListingCard } from '@/components/custom';

<ListingCard
  id="exp-001"
  title="Azores: Explore, Recharge & Reconnect"
  image="/images/whale-watching.jpg"
  price={45}
  duration="10-13 November, 2025"
  guests="1 Adult"
  category="experience"
  badge="Popular"
  rating={4.8}
  reviewCount={127}
  onClick={() => router.push('/experiences/exp-001')}
  onFavorite={() => addToFavorites('exp-001')}
/>
```

---

### 2. **FAQAccordion** - Collapsible FAQ Section
Accordion component for FAQs with smooth animations.

**Features:**
- Smooth expand/collapse animation
- Single or multiple items open
- Chevron indicator
- Hover effects
- Accessibility compliant

**Usage:**
```tsx
import { FAQAccordion } from '@/components/custom';

const faqItems = [
  {
    id: 'faq-1',
    question: 'How do I book a trip?',
    answer: 'You can book a trip by selecting an experience...'
  },
];

<FAQAccordion
  items={faqItems}
  defaultOpen={['faq-1']}
  allowMultiple={false}
/>
```

---

### 3. **ReviewCard & ReviewList** - User Reviews
Display user reviews with ratings, avatars, and helpful votes.

**Features:**
- Star rating (1-5)
- Avatar (image or initials)
- Verified badge
- Read more/less functionality
- Review images
- Helpful button with count
- Load more pagination

**Usage:**
```tsx
import { ReviewCard, ReviewList } from '@/components/custom';

<ReviewList
  reviews={reviews}
  showLoadMore
  onLoadMore={fetchMoreReviews}
  loading={isLoading}
/>
```

---

### 4. **CTAHero** - Call-to-Action Hero Section
Hero section with background image, title, description, and CTA button.

**Features:**
- Background image with overlay
- Decorative geometric shapes
- Responsive text sizing
- CTA button with hover effects
- Customizable overlay opacity

**Usage:**
```tsx
import { CTAHero } from '@/components/custom';

<CTAHero
  title="Are you ready to start your adventure?"
  description="Don't wait any longer. Start planning your dream vacation today."
  buttonText="Join a Moment"
  buttonAction={() => router.push('/experiences')}
  backgroundImage="/images/cta-hero.jpg"
  backgroundOverlay={0.5}
/>
```

---

### 5. **FiltersPanel** - Search Filters Sidebar/Modal
Filter panel for browsing experiences/products with multiple filter groups.

**Features:**
- Multiple filter groups
- Checkbox selections
- Result count display
- Clear all functionality
- Sidebar or modal variant
- Sticky positioning
- Scrollable filter groups

**Usage:**
```tsx
import { FiltersPanel } from '@/components/custom';

const filterGroups = [
  {
    id: 'category',
    label: 'Category',
    type: 'checkbox',
    options: [
      { id: 'experiences', label: 'Experiences', count: 45 },
      { id: 'products', label: 'Products', count: 23 },
    ],
  },
];

<FiltersPanel
  filterGroups={filterGroups}
  selectedFilters={filters}
  onFilterChange={handleFilterChange}
  onApply={applyFilters}
  onReset={resetFilters}
  resultCount={70}
  variant="sidebar"
/>
```

---

### 6. **SummaryCheckout** - Checkout Summary Sidebar
Sidebar summary for checkout showing items, pricing breakdown, and promo codes.

**Features:**
- Multiple items display
- Price breakdown (subtotal, service fee, discount)
- Promo code input
- Sticky positioning on desktop
- Responsive design
- Image + details for each item

**Usage:**
```tsx
import { SummaryCheckout } from '@/components/custom';

<SummaryCheckout
  items={cartItems}
  summary={{
    subtotal: 180,
    serviceFee: 27,
    discount: 10,
    total: 197
  }}
  currency="€"
  onApplyPromo={handlePromoCode}
  sticky
/>
```

---

## 🎨 Design Tokens

All components use the AZOREON design system tokens:

**Colors:**
- Primary Blue: `#11212D`
- Teal: `#3CA997` (accent)
- Teal Light: `#52C6BB` (CTA buttons)
- Grey-500: `#777777` (secondary text)
- Neutral-300: `#D6D8DF` (borders)

**Typography:**
- Primary Font: Hanken Grotesk
- Secondary Font: Lufga (headings)

**Spacing:**
- Base unit: 4px
- Common gaps: 8px, 12px, 16px, 24px

---

## 📁 File Structure

```
/src/components/custom/
├── listing/
│   ├── ListingCard.tsx
│   └── index.ts
├── faq/
│   ├── FAQCell.tsx
│   ├── FAQAccordion.tsx
│   └── index.ts
├── reviews/
│   ├── ReviewCard.tsx
│   ├── ReviewList.tsx
│   └── index.ts
├── cta/
│   ├── CTAHero.tsx
│   └── index.ts
├── filters/
│   ├── FilterGroup.tsx
│   ├── FiltersPanel.tsx
│   └── index.ts
├── checkout/
│   ├── SummaryCheckout.tsx
│   └── index.ts
├── index.ts (global exports)
└── README.md (this file)
```

---

## 🚀 Import Examples

**Individual imports:**
```tsx
import { ListingCard } from '@/components/custom/listing';
import { FAQAccordion } from '@/components/custom/faq';
```

**Bulk imports:**
```tsx
import {
  ListingCard,
  FAQAccordion,
  ReviewList,
  CTAHero,
  FiltersPanel,
  SummaryCheckout
} from '@/components/custom';
```

---

## 🔗 Integration Points

### With Design System
All custom components use Design System components:
- Button
- Input
- Checkbox
- LoadingIndicator

### With Supabase
Components ready for:
- Listing data from database
- Review storage
- Promo code validation
- Booking records

### With Stripe Connect
SummaryCheckout ready for:
- Payment intent creation
- Multi-party splits (platform + provider + host)
- Promo code discounts

---

## 📝 TypeScript Types

All types are defined in `/src/types/custom-components.ts`:

```typescript
import type {
  ListingCardProps,
  FAQAccordionProps,
  ReviewListProps,
  CTAHeroProps,
  FiltersPanelProps,
  SummaryCheckoutProps,
} from '@/types/custom-components';
```

---

## ✅ Status

| Component | Status | Tests | Docs |
|-----------|--------|-------|------|
| ListingCard | ✅ Complete | ⏳ Pending | ✅ Done |
| FAQAccordion | ✅ Complete | ⏳ Pending | ✅ Done |
| ReviewCard/List | ✅ Complete | ⏳ Pending | ✅ Done |
| CTAHero | ✅ Complete | ⏳ Pending | ✅ Done |
| FiltersPanel | ✅ Complete | ⏳ Pending | ✅ Done |
| SummaryCheckout | ✅ Complete | ⏳ Pending | ✅ Done |
| CheckoutPage | ⏳ Pending | ⏳ Pending | ⏳ Pending |

---

## 🎯 Next Steps

1. **Create demo pages** for each component
2. **Add unit tests** with Jest + React Testing Library
3. **Implement CheckoutPage** complete flow
4. **Add Storybook** stories
5. **Integration testing** with Supabase
6. **Stripe Connect** integration

---

## 📧 Support

For questions or issues with custom components:
- Check the type definitions in `/src/types/custom-components.ts`
- Review the Design System docs at `/design-system`
- See implementation examples in this README

---

**Last Updated:** 2025-10-27
**Version:** 1.0.0
**Project:** AZOREON Marketplace
