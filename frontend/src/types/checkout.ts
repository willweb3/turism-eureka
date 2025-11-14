export interface PersonalDetails {
  name: string;
  phone: string;
  email: string;
}

export interface PaymentDetails {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  cardBrand?: 'visa' | 'mastercard' | 'amex' | 'discover';
}

export interface BillingDetails {
  cardHolderName: string;
  address: string;
  addressDetails?: string;
  postalCode: string;
  city: string;
  state?: string;
  country: string;
}

export interface CheckoutFormData {
  personal: PersonalDetails;
  payment: PaymentDetails;
  billing: BillingDetails;
}

export interface PriceBreakdown {
  subtotal: number;
  numberOfDays: number;
  serviceFee: number;
  taxes: number;
  total: number;
}

export interface OrderSummary {
  listingId: string;
  title: string;
  imageUrl: string;
  pricePerPerson: number;
  startDate: string;
  endDate: string;
  numberOfGuests: number;
  pricing: PriceBreakdown;
}

export interface CheckoutPageData {
  bookingId: string;
  orderSummary: OrderSummary;
  userData: PersonalDetails;
}
