// ============================================
// CART TYPES & INTERFACES
// ============================================

export type ListingType = 'accommodation' | 'experience' | 'product' | 'event';

export interface CartItem {
  id: string;
  userId?: string;
  sessionId?: string;

  // Listing Info
  listingId: string;
  listingType: ListingType;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  rating: number;
  reviewCount: number;

  // Booking Details
  quantity: number;
  selectedDate: Date;
  selectedTime?: string;
  guests: {
    adults: number;
    children: number;
  };

  // Pricing
  price: number; // Preço unitário
  pricePerUnit: string; // "Per person", "Per night", "Per item"
  currency: string;
  priceSnapshot: number; // Preço no momento de adicionar

  // Discounts & Referrals
  promoCode?: string;
  hostReferralCode?: string;
  discountAmount: number;

  // Policies
  isRefundable: boolean;
  cancellationPolicy?: string;

  // Metadata
  customNotes?: string;
  specialRequests?: string;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
}

export interface CartSummary {
  // Counts
  itemCount: number;

  // Amounts
  subtotal: number;
  discounts: number;
  promoDiscount: number;
  hostCommission: number;
  taxes: number;
  total: number;

  // Breakdown
  breakdown: {
    platformFee: number; // 10%
    providerAmount: number; // 85%
    hostCommission: number; // 5%
  };
}

export interface PromoCode {
  id: string;
  code: string;
  codeType: 'percentage' | 'fixed' | 'free_shipping';
  discountValue: number;
  maxDiscountAmount?: number;
  minPurchaseAmount?: number;
  validFrom: Date;
  validUntil?: Date;
  maxUses?: number;
  currentUses: number;
  applicableListingTypes?: ListingType[];
  applicableIslands?: string[];
  firstTimeUsersOnly: boolean;
  isActive: boolean;
  isValid?: boolean; // Client-side validation result
  errorMessage?: string;
}

export interface AvailabilityCheck {
  listingId: string;
  date: Date;
  time?: string;
  quantity: number;
  isAvailable: boolean;
  availableSlots: number;
  errorMessage?: string;
}

export interface RecommendedItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  price: number;
  pricePerUnit: string;
  rating: number;
  reviewCount: number;
}

// ============================================
// CART STORE INTERFACE
// ============================================

export interface CartStore {
  // State
  items: CartItem[];
  promoCode: PromoCode | null;
  isLoading: boolean;
  error: string | null;

  // Actions - Items
  addItem: (item: Omit<CartItem, 'id' | 'createdAt' | 'updatedAt' | 'expiresAt'>) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  updateItem: (itemId: string, updates: Partial<CartItem>) => Promise<void>;
  clearCart: () => Promise<void>;

  // Actions - Promo Codes
  applyPromoCode: (code: string) => Promise<void>;
  removePromoCode: () => void;

  // Actions - Calculations
  calculateSummary: () => CartSummary;

  // Actions - Sync
  syncWithServer: () => Promise<void>;
  refreshAvailability: () => Promise<void>;

  // Actions - Timer
  resetTimers: () => Promise<void>;
  handleExpiredItems: (expiredIds: string[]) => Promise<void>;
}

// ============================================
// API RESPONSE TYPES
// ============================================

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface CartApiResponse extends ApiResponse<CartItem[]> {
  summary?: CartSummary;
}

export interface PromoCodeValidation extends ApiResponse<PromoCode> {
  discountAmount?: number;
  applicableItems?: string[];
}
