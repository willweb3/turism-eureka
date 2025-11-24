/**
 * Homepage Component Types for AZOREON
 *
 * Type definitions for all homepage sections and components
 */

// ═══════════════════════════════════════════════════════════
// EXPERIENCE CARD
// ═══════════════════════════════════════════════════════════

export type ExperienceCategory =
  | 'all'
  | 'nearby-packages'
  | 'packages'
  | 'health-wellbeing'
  | 'cultural'
  | 'adventure'
  | 'gastronomy'
  | 'wine-tasting';

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  badge: string;
  category: ExperienceCategory[];
  price: number;
  priceUnit?: string;
  currency?: string;
  rating: number;
  reviewCount?: number;
  duration?: string;
  location?: string;
  featured?: boolean;
}

export interface ExperienceCardProps extends Experience {
  onClick?: () => void;
  onFavorite?: () => void;
  className?: string;
}

// ═══════════════════════════════════════════════════════════
// CATEGORY FILTER
// ═══════════════════════════════════════════════════════════

export interface CategoryTab {
  id: ExperienceCategory;
  label: string;
  icon?: string;
}

export interface CategoryFilterProps {
  categories: CategoryTab[];
  activeCategory: ExperienceCategory;
  onChange: (category: ExperienceCategory) => void;
  className?: string;
}

// ═══════════════════════════════════════════════════════════
// HOW IT WORKS
// ═══════════════════════════════════════════════════════════

export interface HowItWorksStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon?: string;
}

export interface HowItWorksCardProps extends HowItWorksStep {
  className?: string;
}

// ═══════════════════════════════════════════════════════════
// TESTIMONIAL
// ═══════════════════════════════════════════════════════════

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  featured?: boolean;
}

export interface TestimonialCardProps extends Testimonial {
  className?: string;
}

// ═══════════════════════════════════════════════════════════
// ISLAND
// ═══════════════════════════════════════════════════════════

export interface Island {
  id: string;
  name: string;
  slug: string;
  image: string;
  imageAlt?: string;
  experienceCount?: number;
}

export interface IslandCardProps extends Island {
  onClick?: () => void;
  className?: string;
}

// ═══════════════════════════════════════════════════════════
// JOURNEY CARD
// ═══════════════════════════════════════════════════════════

export interface Journey {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

export interface JourneyCardProps extends Journey {
  onClick?: () => void;
  className?: string;
}

// ═══════════════════════════════════════════════════════════
// PROMOTIONAL BANNER
// ═══════════════════════════════════════════════════════════

export interface PromotionalOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  badgeSubtext?: string;
  image: string;
  imageAlt?: string;
  backgroundColor: string;
  textColor?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface PromotionalCardProps extends PromotionalOffer {
  className?: string;
}

// ═══════════════════════════════════════════════════════════
// PARTNER CTA
// ═══════════════════════════════════════════════════════════

export interface PartnerStep {
  number: number;
  title: string;
  description?: string;
}

export interface PartnerCTAProps {
  title: string;
  description: string;
  steps: PartnerStep[];
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  partnerCount?: number;
  className?: string;
}

// ═══════════════════════════════════════════════════════════
// PRODUCTS SECTION
// ═══════════════════════════════════════════════════════════

export interface ProductsSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  imageAlt?: string;
  className?: string;
}
