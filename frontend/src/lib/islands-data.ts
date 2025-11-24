export interface Island {
  id: string;
  name: string;
  nickname: string;
  population: number;
  area: number; // km²
  capital: string;
  image: string;
  slug: string;
  description: string;
  color: string; // Cor temática baseada no nickname
}

export const AZORES_ISLANDS: Island[] = [
  {
    id: '1',
    name: 'São Miguel',
    nickname: 'The Green Island',
    population: 137800,
    area: 747,
    capital: 'Ponta Delgada',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    slug: 'sao-miguel',
    description: 'The largest and most populated island, known for its lush green landscapes, volcanic crater lakes, and thermal springs.',
    color: '#2D5F3F', // Verde
  },
  {
    id: '2',
    name: 'Santa Maria',
    nickname: 'The Yellow Island',
    population: 5552,
    area: 97,
    capital: 'Vila do Porto',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    slug: 'santa-maria',
    description: 'The oldest island in the archipelago, featuring golden beaches, rolling vineyards, and unique desert-like landscapes.',
    color: '#D4A017', // Amarelo
  },
  {
    id: '3',
    name: 'Terceira',
    nickname: 'The Lilac Island',
    population: 56062,
    area: 400,
    capital: 'Angra do Heroísmo',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
    slug: 'terceira',
    description: 'A UNESCO World Heritage site, famous for its colorful festivals, historical architecture, and volcanic caves.',
    color: '#9370DB', // Lilás
  },
  {
    id: '4',
    name: 'Graciosa',
    nickname: 'The White Island',
    population: 4391,
    area: 61,
    capital: 'Santa Cruz da Graciosa',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    slug: 'graciosa',
    description: 'Known for its white houses, windmills, and the spectacular Furna do Enxofre cave with a sulfur lake.',
    color: '#E8E8E8', // Branco
  },
  {
    id: '5',
    name: 'São Jorge',
    nickname: 'The Brown Island',
    population: 9171,
    area: 246,
    capital: 'Velas',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    slug: 'sao-jorge',
    description: 'Famous for its steep cliffs, unique fajãs (lowland areas), and the delicious São Jorge cheese.',
    color: '#8B4513', // Marrom
  },
  {
    id: '6',
    name: 'Pico',
    nickname: 'The Mountain Island',
    population: 14148,
    area: 446,
    capital: 'Madalena',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    slug: 'pico',
    description: "Home to Portugal's highest mountain (2,351m), UNESCO-listed vineyards, and world-class whale watching.",
    color: '#4A5568', // Cinza montanha
  },
  {
    id: '7',
    name: 'Faial',
    nickname: 'The Blue Island',
    population: 14994,
    area: 173,
    capital: 'Horta',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    slug: 'faial',
    description: 'Known for its blue hydrangeas, the famous Horta Marina, and the volcanic Capelinhos landscape.',
    color: '#2B5F9E', // Azul
  },
  {
    id: '8',
    name: 'Flores',
    nickname: 'The Pink Island',
    population: 3791,
    area: 143,
    capital: 'Santa Cruz das Flores',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    slug: 'flores',
    description: 'The westernmost point of Europe, featuring stunning waterfalls, crater lakes, and pink hydrangeas.',
    color: '#E91E63', // Rosa
  },
  {
    id: '9',
    name: 'Corvo',
    nickname: 'The Black Island',
    population: 384,
    area: 17,
    capital: 'Vila do Corvo',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
    slug: 'corvo',
    description: "Europe's smallest island, with a dramatic volcanic crater, traditional village, and incredible bird watching.",
    color: '#1A202C', // Preto/Cinza escuro
  },
];

// Helper function para formatar números
export function formatPopulation(population: number): string {
  return new Intl.NumberFormat('en-US').format(population);
}

// Helper function para área
export function formatArea(area: number): string {
  return `${area} km²`;
}
