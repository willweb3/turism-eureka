import type { PriceBreakdown } from '@/types/checkout';

// Card validation (Luhn Algorithm)
export function validateCardNumber(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\s/g, '');
  if (!/^\d+$/.test(cleaned)) return false;
  if (cleaned.length < 13 || cleaned.length > 19) return false;

  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i]);
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

// Format card number
export function formatCardNumber(value: string): string {
  const cleaned = value.replace(/\s/g, '');
  const match = cleaned.match(/.{1,4}/g);
  return match ? match.join(' ') : cleaned;
}

// Detect card brand
export function detectCardBrand(cardNumber: string): string {
  const cleaned = cardNumber.replace(/\s/g, '');
  if (/^4/.test(cleaned)) return 'visa';
  if (/^5[1-5]/.test(cleaned)) return 'mastercard';
  if (/^3[47]/.test(cleaned)) return 'amex';
  if (/^6(?:011|5)/.test(cleaned)) return 'discover';
  return 'unknown';
}

// Calculate pricing
export function calculatePricing(
  pricePerPerson: number,
  numberOfDays: number,
  numberOfGuests: number
): PriceBreakdown {
  const subtotal = pricePerPerson * numberOfDays * numberOfGuests;
  const serviceFee = Math.round(subtotal * 0.1); // 10%
  const taxes = Math.round((subtotal + serviceFee) * 0.23); // 23% IVA Portugal
  const total = subtotal + serviceFee + taxes;

  return { subtotal, numberOfDays, serviceFee, taxes, total };
}
