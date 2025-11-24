// types/listing.ts

export type ListingCategory =
  | 'boat-tours'
  | 'wine-tasting'
  | 'hiking'
  | 'cultural-events'
  | 'products'
  | 'accommodations';

export type AzoresIsland =
  | 'sao-miguel'
  | 'terceira'
  | 'pico'
  | 'faial'
  | 'sao-jorge'
  | 'graciosa'
  | 'santa-maria'
  | 'corvo'
  | 'flores';

export interface ListingImage {
  id: string;
  file: File;
  preview: string;
  uploaded?: boolean;
}

export interface BasicInformationData {
  title: string;
  description: string;
  island: AzoresIsland;
  category: ListingCategory;
  images: ListingImage[];
}

export interface ContactSocialData {
  phone: string;
  email: string;
  website?: string;
  facebook?: string;
  instagram?: string;
}

export interface WeeklySchedule {
  monday?: { start: string; end: string; available: boolean };
  tuesday?: { start: string; end: string; available: boolean };
  wednesday?: { start: string; end: string; available: boolean };
  thursday?: { start: string; end: string; available: boolean };
  friday?: { start: string; end: string; available: boolean };
  saturday?: { start: string; end: string; available: boolean };
  sunday?: { start: string; end: string; available: boolean };
}

export interface AvailabilityData {
  availableFrom: Date;
  availableTo: Date;
  schedule: WeeklySchedule;
  capacity: number;
}

export interface ListingSubmission {
  basicInfo: BasicInformationData | null;
  contactSocial: ContactSocialData | null;
  availability: AvailabilityData | null;
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  createdAt: Date;
  userId: string;
}

// Labels para os dropdowns
export const ISLAND_LABELS: Record<AzoresIsland, string> = {
  'sao-miguel': 'São Miguel',
  'terceira': 'Terceira',
  'pico': 'Pico',
  'faial': 'Faial',
  'sao-jorge': 'São Jorge',
  'graciosa': 'Graciosa',
  'santa-maria': 'Santa Maria',
  'corvo': 'Corvo',
  'flores': 'Flores'
};

export const CATEGORY_LABELS: Record<ListingCategory, string> = {
  'boat-tours': 'Boat Tours',
  'wine-tasting': 'Wine Tasting',
  'hiking': 'Hiking',
  'cultural-events': 'Cultural Events',
  'products': 'Products',
  'accommodations': 'Accommodations'
};

// === My Listings Page Types ===

export type ListingStatus =
  | 'confirmed'
  | 'error'
  | 'awaiting_payment'
  | 'draft'
  | 'closed'
  | 'pending_approval';

export interface Listing {
  id: string;
  title: string;
  category: string;
  location: string;
  dateRange: string;
  price: number;
  priceUnit: string;
  imageUrl: string;
  status: ListingStatus;
  freeCancelation: boolean;
  statusMessage?: string;
  // Additional fields from Supabase
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface StatusConfig {
  label: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  message?: string;
}

export interface ListingCardAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
}

// === My Bookings Types ===

export type BookingStatus = 'confirmed' | 'pending' | 'cancelled' | 'completed';

export interface Booking {
  id: string;
  listingId: string;
  title: string;
  category: string;
  location: string;
  dateRange: string;
  price: number;
  priceUnit: string;
  imageUrl: string;
  status: BookingStatus;
  freeCancellation: boolean;
  bookingDate: string;
}
