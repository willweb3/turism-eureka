// types/products.ts

export type ProductCategory = 'wine' | 'cheese' | 'jams' | 'packages'
export type Island = 'pico' | 'sao_miguel' | 'terceira' | 'faial' | 'sao_jorge' | 'graciosa' | 'santa_maria' | 'corvo' | 'flores'
export type SortOption = 'recommended' | 'price-asc' | 'price-desc' | 'rating' | 'newest'

export interface Product {
  id: string
  title: string
  description: string
  price: number
  image_url: string
  images?: string[]
  category: ProductCategory
  island: Island
  provider_id: string
  provider_name: string
  status: 'active' | 'inactive' | 'out_of_stock'
  rating_avg: number
  rating_count: number
  stock_quantity: number
  metadata?: {
    volume?: string
    weight?: string
    origin?: string
    ingredients?: string[]
  }
  created_at: string
  updated_at: string
}

export interface FilterState {
  category: ProductCategory | 'all'
  sortBy: SortOption
  priceRange: [number, number]
  minRating: number
  island: Island | 'all'
  inStock: boolean
  searchQuery?: string
}

export interface PaginationState {
  currentPage: number
  totalPages: number
  itemsPerPage: number
  totalItems: number
}

// Sample products for development
export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Vinho Terras de Lava Tinto - Merlot',
    description: '750 ml bottle.',
    price: 80,
    image_url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800',
    category: 'wine',
    island: 'pico',
    provider_id: 'provider-1',
    provider_name: 'Terras de Lava',
    status: 'active',
    rating_avg: 4.9,
    rating_count: 127,
    stock_quantity: 45,
    metadata: {
      volume: '750ml',
      origin: 'Pico Island',
      ingredients: ['Merlot grapes', 'Volcanic soil']
    },
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Compota Extra de Ananás Frutaçor',
    description: 'Handcrafted in São Miguel, Azores.',
    price: 4.95,
    image_url: 'https://images.unsplash.com/photo-1484659619207-9165d119dafe?w=800',
    category: 'jams',
    island: 'sao_miguel',
    provider_id: 'provider-2',
    provider_name: 'Frutaçor',
    status: 'active',
    rating_avg: 4.7,
    rating_count: 89,
    stock_quantity: 150,
    metadata: {
      weight: '250g',
      origin: 'São Miguel',
      ingredients: ['Azorean pineapple', 'Sugar']
    },
    created_at: '2024-01-10T10:00:00Z',
    updated_at: '2024-01-10T10:00:00Z'
  },
  {
    id: '3',
    title: 'Cabaz Produtos n.º13',
    description: 'Variety basket of Azores products.',
    price: 25,
    image_url: 'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?w=800',
    category: 'packages',
    island: 'pico',
    provider_id: 'provider-3',
    provider_name: 'AZOREON',
    status: 'active',
    rating_avg: 4.7,
    rating_count: 64,
    stock_quantity: 30,
    metadata: {
      origin: 'Multiple islands',
      ingredients: ['Assorted local products']
    },
    created_at: '2024-01-20T10:00:00Z',
    updated_at: '2024-01-20T10:00:00Z'
  },
  {
    id: '4',
    title: 'Queijo da Ilha - São Jorge',
    description: 'Aged artisanal cheese from São Jorge.',
    price: 12.50,
    image_url: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800',
    category: 'cheese',
    island: 'sao_jorge',
    provider_id: 'provider-4',
    provider_name: 'Queijaria Tradicional',
    status: 'active',
    rating_avg: 4.8,
    rating_count: 156,
    stock_quantity: 78,
    metadata: {
      weight: '500g',
      origin: 'São Jorge',
    },
    created_at: '2024-01-12T10:00:00Z',
    updated_at: '2024-01-12T10:00:00Z'
  },
  {
    id: '5',
    title: 'Vinho Branco Terras de Lava',
    description: 'White wine from volcanic vineyards.',
    price: 75,
    image_url: 'https://images.unsplash.com/photo-1474722883778-bf36ca61f493?w=800',
    category: 'wine',
    island: 'pico',
    provider_id: 'provider-1',
    provider_name: 'Terras de Lava',
    status: 'active',
    rating_avg: 4.6,
    rating_count: 92,
    stock_quantity: 32,
    metadata: {
      volume: '750ml',
      origin: 'Pico Island',
    },
    created_at: '2024-01-18T10:00:00Z',
    updated_at: '2024-01-18T10:00:00Z'
  },
  {
    id: '6',
    title: 'Compota de Maracujá',
    description: 'Passion fruit jam from local fruit.',
    price: 5.50,
    image_url: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800',
    category: 'jams',
    island: 'sao_miguel',
    provider_id: 'provider-2',
    provider_name: 'Frutaçor',
    status: 'active',
    rating_avg: 4.9,
    rating_count: 145,
    stock_quantity: 200,
    metadata: {
      weight: '250g',
      origin: 'São Miguel',
    },
    created_at: '2024-01-08T10:00:00Z',
    updated_at: '2024-01-08T10:00:00Z'
  },
  {
    id: '7',
    title: 'Cabaz Produtos n.º7',
    description: 'Gift basket with local specialties.',
    price: 35,
    image_url: 'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?w=800',
    category: 'packages',
    island: 'terceira',
    provider_id: 'provider-3',
    provider_name: 'AZOREON',
    status: 'active',
    rating_avg: 4.8,
    rating_count: 72,
    stock_quantity: 25,
    created_at: '2024-01-22T10:00:00Z',
    updated_at: '2024-01-22T10:00:00Z'
  },
  {
    id: '8',
    title: 'Vinho Rosé Pico',
    description: 'Refreshing rosé wine from Pico.',
    price: 65,
    image_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    category: 'wine',
    island: 'pico',
    provider_id: 'provider-1',
    provider_name: 'Terras de Lava',
    status: 'active',
    rating_avg: 4.7,
    rating_count: 98,
    stock_quantity: 40,
    metadata: {
      volume: '750ml',
      origin: 'Pico Island',
    },
    created_at: '2024-01-16T10:00:00Z',
    updated_at: '2024-01-16T10:00:00Z'
  },
  {
    id: '9',
    title: 'Queijo Curado Terceira',
    description: 'Aged cheese from Terceira island.',
    price: 15,
    image_url: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800',
    category: 'cheese',
    island: 'terceira',
    provider_id: 'provider-4',
    provider_name: 'Queijaria Regional',
    status: 'active',
    rating_avg: 4.6,
    rating_count: 134,
    stock_quantity: 65,
    metadata: {
      weight: '400g',
      origin: 'Terceira',
    },
    created_at: '2024-01-14T10:00:00Z',
    updated_at: '2024-01-14T10:00:00Z'
  },
  {
    id: '10',
    title: 'Compota de Morango',
    description: 'Strawberry jam made with Azorean berries.',
    price: 4.50,
    image_url: 'https://images.unsplash.com/photo-1484659619207-9165d119dafe?w=800',
    category: 'jams',
    island: 'sao_miguel',
    provider_id: 'provider-2',
    provider_name: 'Frutaçor',
    status: 'active',
    rating_avg: 4.8,
    rating_count: 167,
    stock_quantity: 180,
    metadata: {
      weight: '250g',
      origin: 'São Miguel',
    },
    created_at: '2024-01-05T10:00:00Z',
    updated_at: '2024-01-05T10:00:00Z'
  },
  {
    id: '11',
    title: 'Vinho Espumante Graciosa',
    description: 'Sparkling wine from Graciosa island.',
    price: 95,
    image_url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800',
    category: 'wine',
    island: 'graciosa',
    provider_id: 'provider-5',
    provider_name: 'Adega Graciosa',
    status: 'active',
    rating_avg: 4.9,
    rating_count: 85,
    stock_quantity: 28,
    metadata: {
      volume: '750ml',
      origin: 'Graciosa',
    },
    created_at: '2024-01-19T10:00:00Z',
    updated_at: '2024-01-19T10:00:00Z'
  },
  {
    id: '12',
    title: 'Cabaz Premium n.º20',
    description: 'Premium gift basket with finest products.',
    price: 85,
    image_url: 'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?w=800',
    category: 'packages',
    island: 'pico',
    provider_id: 'provider-3',
    provider_name: 'AZOREON',
    status: 'active',
    rating_avg: 4.9,
    rating_count: 56,
    stock_quantity: 15,
    created_at: '2024-01-25T10:00:00Z',
    updated_at: '2024-01-25T10:00:00Z'
  }
]
