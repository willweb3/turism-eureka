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
