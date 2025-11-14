export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type UserRole = 'tourist' | 'provider' | 'host' | 'admin'
export type ListingType = 'service' | 'product' | 'event'
export type ListingStatus = 'draft' | 'pending' | 'approved' | 'rejected'
export type TransactionStatus = 'pending' | 'paid' | 'cancelled' | 'refunded'

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_type: UserRole
          full_name: string
          phone: string | null
          stripe_account_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          user_type: UserRole
          full_name: string
          phone?: string | null
          stripe_account_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_type?: UserRole
          full_name?: string
          phone?: string | null
          stripe_account_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      listings: {
        Row: {
          id: string
          provider_id: string
          type: ListingType
          title: string
          description: string
          price_per_unit: number
          currency: string
          max_capacity: number | null
          stock: number | null
          availability: Json | null
          images: string[]
          status: ListingStatus
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          provider_id: string
          type: ListingType
          title: string
          description: string
          price_per_unit: number
          currency?: string
          max_capacity?: number | null
          stock?: number | null
          availability?: Json | null
          images?: string[]
          status?: ListingStatus
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          provider_id?: string
          type?: ListingType
          title?: string
          description?: string
          price_per_unit?: number
          currency?: string
          max_capacity?: number | null
          stock?: number | null
          availability?: Json | null
          images?: string[]
          status?: ListingStatus
          created_at?: string
          updated_at?: string
        }
      }
      transactions: {
        Row: {
          id: string
          customer_id: string
          provider_id: string
          host_id: string | null
          promo_code: string | null
          total_amount: number
          platform_fee: number
          host_commission: number
          provider_amount: number
          status: TransactionStatus
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          customer_id: string
          provider_id: string
          host_id?: string | null
          promo_code?: string | null
          total_amount: number
          platform_fee: number
          host_commission: number
          provider_amount: number
          status?: TransactionStatus
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_id?: string
          provider_id?: string
          host_id?: string | null
          promo_code?: string | null
          total_amount?: number
          platform_fee?: number
          host_commission?: number
          provider_amount?: number
          status?: TransactionStatus
          created_at?: string
          updated_at?: string
        }
      }
      transaction_items: {
        Row: {
          id: string
          transaction_id: string
          listing_id: string
          quantity: number
          price_at_purchase: number
          booking_date: string | null
          created_at: string
        }
        Insert: {
          id?: string
          transaction_id: string
          listing_id: string
          quantity: number
          price_at_purchase: number
          booking_date?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          transaction_id?: string
          listing_id?: string
          quantity?: number
          price_at_purchase?: number
          booking_date?: string | null
          created_at?: string
        }
      }
      promo_codes: {
        Row: {
          id: string
          host_id: string
          code: string
          discount_percentage: number
          usage_count: number
          max_uses: number | null
          valid_until: string | null
          active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          host_id: string
          code: string
          discount_percentage: number
          usage_count?: number
          max_uses?: number | null
          valid_until?: string | null
          active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          host_id?: string
          code?: string
          discount_percentage?: number
          usage_count?: number
          max_uses?: number | null
          valid_until?: string | null
          active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      qr_codes: {
        Row: {
          id: string
          host_id: string
          code: string
          name: string
          scan_count: number
          conversion_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          host_id: string
          code: string
          name: string
          scan_count?: number
          conversion_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          host_id?: string
          code?: string
          name?: string
          scan_count?: number
          conversion_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          transaction_id: string
          listing_id: string
          reviewer_id: string
          rating: number
          comment: string | null
          created_at: string
        }
        Insert: {
          id?: string
          transaction_id: string
          listing_id: string
          reviewer_id: string
          rating: number
          comment?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          transaction_id?: string
          listing_id?: string
          reviewer_id?: string
          rating?: number
          comment?: string | null
          created_at?: string
        }
      }
    }
  }
}

// Helper types
export type Profile = Database['public']['Tables']['profiles']['Row']
export type Listing = Database['public']['Tables']['listings']['Row']
export type Transaction = Database['public']['Tables']['transactions']['Row']
export type TransactionItem = Database['public']['Tables']['transaction_items']['Row']
export type PromoCode = Database['public']['Tables']['promo_codes']['Row']
export type QRCode = Database['public']['Tables']['qr_codes']['Row']
export type Review = Database['public']['Tables']['reviews']['Row']

// Extended types with relations
export type ListingWithProvider = Listing & {
  provider: Profile
}

export type TransactionWithItems = Transaction & {
  items: (TransactionItem & { listing: Listing })[]
  customer: Profile
  provider: Profile
  host?: Profile | null
}
