/**
 * Custom Components Types for AZOREON Marketplace
 *
 * Types for all custom components used in the Azoreon tourism marketplace.
 */

import type { ReactNode } from 'react';

// ═══════════════════════════════════════════════════════════
// LISTING CARD
// ═══════════════════════════════════════════════════════════

export type ListingCategory = 'experience' | 'product' | 'event';

export interface ListingCardProps {
  // Data
  id: string;
  title: string;
  image: string;
  imageAlt?: string;
  price: number;
  priceUnit?: string;
  currency?: string;

  // Details
  duration?: string;
  guests?: string;
  category?: ListingCategory;

  // Optional features
  featured?: boolean;
  badge?: string;
  rating?: number;
  reviewCount?: number;

  // Actions
  onClick?: () => void;
  onFavorite?: () => void;

  // Style
  className?: string;
  compact?: boolean;
}

// ═══════════════════════════════════════════════════════════
// FAQ / ACCORDION
// ═══════════════════════════════════════════════════════════

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCellProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpen?: string[];
  allowMultiple?: boolean;
  className?: string;
}

// ═══════════════════════════════════════════════════════════
// REVIEWS
// ═══════════════════════════════════════════════════════════

export interface ReviewAuthor {
  name: string;
  avatar?: string;
  isVerified?: boolean;
}

export interface Review {
  id: string;
  author: ReviewAuthor;
  rating: number;
  date: string | Date;
  comment: string;
  helpful?: number;
  images?: string[];
}

export interface ReviewCardProps extends Review {
  onHelpful?: () => void;
  className?: string;
  compact?: boolean;
}

export interface ReviewListProps {
  reviews: Review[];
  showLoadMore?: boolean;
  onLoadMore?: () => void;
  loading?: boolean;
  className?: string;
}

// ═══════════════════════════════════════════════════════════
// CTA HERO
// ═══════════════════════════════════════════════════════════

export interface CTAHeroProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonAction: () => void;
  backgroundImage: string;
  backgroundOverlay?: number;
  showDecorations?: boolean;
  className?: string;
}

// ═══════════════════════════════════════════════════════════
// FILTERS
// ═══════════════════════════════════════════════════════════

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export type FilterType = 'checkbox' | 'radio' | 'range';

export interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
  type: FilterType;
  min?: number;
  max?: number;
}

export interface FilterGroupProps {
  label: string;
  options: FilterOption[];
  selectedOptions: string[];
  onChange: (optionId: string) => void;
  type?: 'checkbox' | 'radio';
  className?: string;
}

export interface FiltersPanelProps {
  filterGroups: FilterGroup[];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (groupId: string, optionId: string) => void;
  onApply: () => void;
  onReset: () => void;
  resultCount?: number;
  variant?: 'sidebar' | 'modal';
  className?: string;
}

// ═══════════════════════════════════════════════════════════
// CHECKOUT
// ═══════════════════════════════════════════════════════════

export interface CheckoutItem {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity?: number;
  duration?: string;
  guests?: string;
  category?: ListingCategory;
}

export interface CheckoutSummary {
  subtotal: number;
  serviceFee: number;
  discount?: number;
  total: number;
}

export interface SummaryCheckoutProps {
  items: CheckoutItem[];
  summary: CheckoutSummary;
  currency?: string;
  promoCode?: string;
  onApplyPromo?: (code: string) => void;
  className?: string;
  sticky?: boolean;
}

export interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface PaymentInfo {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
  billingAddress: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

export interface GuestInfoFormProps {
  onSubmit: (data: GuestInfo) => void;
  initialData?: Partial<GuestInfo>;
  className?: string;
}

export interface PaymentFormProps {
  onSubmit: (data: PaymentInfo) => Promise<void>;
  onBack: () => void;
  loading?: boolean;
  className?: string;
}

export interface CheckoutSuccessProps {
  bookingId?: string;
  email?: string;
  className?: string;
}
