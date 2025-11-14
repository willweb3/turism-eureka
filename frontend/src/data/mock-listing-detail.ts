import { ListingDetail } from '@/types/listing-detail';

/**
 * Mock data completo para a página de detalhes
 * Baseado na experiência "Azores: Explore, Recharge & Reconnect"
 */
export const mockListingDetail: ListingDetail = {
  // Dados básicos (herdados de Listing)
  id: 'azores-explore-recharge',
  title: 'Azores: Explore, Recharge & Reconnect',
  description: `Escape to the heart of the Atlantic and discover the raw beauty of the Azores — where nature, adventure, and tranquility meet. Over several unforgettable days, you'll explore volcanic landscapes, recharge in serene ocean settings, and reconnect with yourself and the world around you.

From hiking lush green trails and swimming in crystal-clear lagoons to unwinding in natural hot springs and savoring local flavors, this journey invites you to slow down and truly breathe.

Whether you seek adventure, relaxation, or inspiration, Azores: Explore, Recharge & Reconnect is your chance to experience nature's magic — one breathtaking moment at a time.`,
  shortDescription: '6 days in the Mountains of this Island of the Azores.',

  // Localização
  island: 'São Miguel',
  location: {
    address: 'Miradouro da Vista do Rei, Sete Cidades, São Miguel, Azores',
    coordinates: {
      lat: 37.8616,
      lng: -25.7884
    },
    mapUrl: 'https://maps.google.com/?q=37.8616,-25.7884'
  },

  // Tipo e categoria
  type: 'adventure',
  category: 'Adventure & Wellness',

  // Preço
  price: 45,
  currency: 'EUR',
  priceUnit: 'per person',

  // Imagens
  images: [
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80'
  ],
  thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',

  // Avaliações
  rating: {
    average: 4.8,
    count: 12
  },

  // Host básico (será sobrescrito pelo owner)
  host: {
    id: 'juho-azores',
    name: 'Juho',
    avatar: 'https://i.pravatar.cc/150?img=33',
    verified: true,
    superhost: true
  },

  // Detalhes
  duration: '6 days',
  groupSize: 'Up to 12 people',
  languages: ['Portuguese', 'English', 'Spanish', 'French'],
  instantBook: true,

  // Highlights básicos
  highlights: [
    'Breathtaking Views: Panoramic scenery from the Miradouro da Vista do Rei',
    'Outdoor Adventure: Kayak or hike around Lagoa das Sete Cidades',
    'Unique Thermal Experience: Natural hot springs of Ponta da Ferraria',
    'Lagoa do Fogo Serenity: Untouched nature and wild beauty'
  ],

  included: [
    'Lunch and Afternoon Snack Included',
    'Multilingual Guide (PT, EN, ES, FR)',
    'Transport Between Stops',
    'All Entry Fees and Access'
  ],

  // SEO
  slug: 'azores-explore-recharge',
  featured: true,
  promoted: false,

  // Datas
  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-11-06T14:00:00Z',

  // DADOS ESPECÍFICOS DA PÁGINA DE DETALHES

  // Operador
  operator: {
    name: 'Azores Adventure SA',
    id: 'azores-adventure'
  },

  // Detalhes estruturados
  details: {
    checkIn: 'Flexible',
    checkOut: 'By 6 PM',
    category: 'Culture',
    condition: 'Excellent'
  },

  // Amenidades
  amenities: [
    { name: 'Mountain', icon: 'mountain' },
    { name: 'Gastronomy', icon: 'utensils' },
    { name: 'Culture', icon: 'flag' },
    { name: 'Forest', icon: 'trees' }
  ],

  // Itinerário
  itinerary: [
    {
      type: 'departure',
      label: 'Place of departure',
      location: 'Miradouro da Vista do Rei – Sete Cidades'
    },
    {
      type: 'stop',
      label: 'First Stop',
      location: 'Lagoa das Sete Cidades',
      duration: '1h30'
    },
    {
      type: 'stop',
      label: 'Second stop',
      location: 'Ponta da Ferraria',
      duration: '30m'
    },
    {
      type: 'arrival',
      label: 'Place of arrival',
      location: 'Miradouro da Vista do Rei – Sete Cidades'
    }
  ],

  // Informações importantes
  importantInfo: {
    meetingPoint: {
      location: 'Miradouro da Vista do Rei – Sete Cidades',
      instructions: 'Please arrive 15 minutes before departure to meet your guide and begin the tour with the best panoramic view of the twin lakes.'
    },
    highlights: [
      `Breathtaking Views: Panoramic scenery from the Miradouro da Vista do Rei overlooking the twin lakes of Sete Cidades.`,
      `Outdoor Adventure: Kayak or hike around the peaceful Lagoa das Sete Cidades — surrounded by lush volcanic landscapes.`,
      `Unique Thermal Experience: Swim in the natural hot springs of Ponta da Ferraria, where the ocean meets geothermal heat.`,
      `Lagoa do Fogo Serenity: Discover the wild beauty and untouched nature of Lagoa do Fogo, one of the island's most magical spots.`
    ],
    includes: [
      `Lunch and Afternoon Snack Included: Enjoy a delicious Azorean-style lunch featuring local specialties, plus a light afternoon snack to keep you energized throughout the day.`,
      `Multilingual Guide: Friendly professional guide fluent in Portuguese, English, Spanish, and French, ensuring everyone enjoys the experience comfortably.`,
      `Transport Between Stops: Comfortable round-trip transportation between all four scenic points of the itinerary.`,
      `All Entry Fees and Access: Includes access to natural sites like Ponta da Ferraria and Lagoa das Sete Cidades.`
    ],
    notSuitableFor: [`People with limited mobility.`]
  },

  // Reviews
  reviews: [
    {
      id: '1',
      author: {
        name: 'Sarah Lee',
        avatar: 'https://i.pravatar.cc/150?img=45'
      },
      rating: 5,
      date: 'April 2024',
      comment: 'Juho and Jensku stayed at our place for 5 nights. they were super clean, easygoing and the communication went smooth soo we can only recommend them as guests.'
    },
    {
      id: '2',
      author: {
        name: 'Daniel Wilson',
        avatar: 'https://i.pravatar.cc/150?img=13'
      },
      rating: 5,
      date: 'March 2020',
      comment: 'They are the perfect Saunatime guests! Super polite, kind, and kept this room very clean!! It was a big honor to have them :) Definitely recommend to accept their request ;)'
    },
    {
      id: '3',
      author: {
        name: 'Alex Johnson',
        avatar: 'https://i.pravatar.cc/150?img=67'
      },
      rating: 5,
      date: 'February 2017',
      comment: 'It was a pleasure to host Juho and friends. He kept us well informed of their travel plans, and were great company when they arrived. We hope to welcome them again soon along their adventures :)'
    }
  ],

  // Owner/Host detalhado
  owner: {
    id: 'juho-azores',
    name: 'Juho',
    avatar: 'https://i.pravatar.cc/150?img=33',
    bio: `Hi! I'm Juho, your host here in the beautiful Azores. I love welcoming guests from around the world and sharing the peaceful rhythm of island life.

My home offers a cozy and authentic Azorean experience, surrounded by nature and scenic views. I take pride in creating a warm, relaxed atmosphere where every guest feels comfortable and cared for. Whether you're here to explore, unwind, or simply enjoy the beauty of the islands, I'll do my best to make your stay unforgettable.`,
    memberSince: 'January 2020',
    responseRate: 98,
    responseTime: 'Within an hour'
  },

  // FAQ
  faq: [
    {
      question: 'How do I create an account?',
      answer: 'Creating an account is simple. Click on the \'Sign Up\' button and follow the prompts to enter your details and set up your profile.'
    },
    {
      question: 'How do I list my property or experience?',
      answer: 'After creating an account, navigate to the "Host" section and click "List your property". Fill in the required information, upload photos, and set your pricing.'
    },
    {
      question: 'What are the fees for listing my property or experience?',
      answer: 'We charge a 10% commission on completed bookings. There are no upfront listing fees.'
    },
    {
      question: 'How do I manage my bookings?',
      answer: 'All bookings can be managed from your host dashboard. You\'ll receive notifications for new bookings and can communicate with guests directly through our platform.'
    },
    {
      question: 'What measures are in place to ensure guest safety?',
      answer: 'We verify all users, provide secure payment processing, and have a 24/7 support team. All properties must meet our safety standards.'
    },
    {
      question: 'How can guests leave reviews?',
      answer: 'Guests can leave reviews within 14 days after their experience ends. Reviews are visible to all users and help maintain quality standards.'
    }
  ],

  // Travel Packages
  travelPackages: [
    {
      id: '1',
      title: 'Restaurants experience',
      description: 'We manage planning and booking for your adventure. Our services ensure a smooth travel experience.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      link: '/packages/restaurants'
    },
    {
      id: '2',
      title: 'Cultural Tours',
      description: 'We handle the everything for your adventure, ensuring every detail is covered for a seamless travel experience.',
      image: 'https://images.unsplash.com/photo-1555881805-36f6f2d6c1b6?w=800&q=80',
      link: '/packages/cultural'
    },
    {
      id: '3',
      title: 'Adventure',
      description: 'Let us take care of your adventure planning and bookings, so you can enjoy a hassle-free travel journey.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      link: '/packages/adventure'
    }
  ],

  // Pricing detalhado
  pricing: {
    serviceFee: 20,
    taxes: 15
  }
};
