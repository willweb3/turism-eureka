export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Nature' | 'Adventure' | 'Cities' | 'Ocean' | 'Gastronomy';
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  featured?: boolean;
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'the-enchanting-azores-europe-hidden-paradise',
    title: "The Enchanting Azores: Europe's Hidden Paradise",
    excerpt: "Nestled in the heart of the Atlantic Ocean, the Azores are a breathtaking Portuguese archipelago known for their volcanic landscapes, lush greenery, and crystal-clear lakes. Each of the nine islands offers unique wonders—from São Miguel's vibrant crater lakes to Pico's towering volcanic peak and Terceira's charming historical towns. The Azores are a haven for nature lovers, offering whale watching, hiking, and geothermal hot springs. Blending raw natural beauty with warm island hospitality, the Azores remain one of Europe's best-kept secrets.",
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    author: {
      name: 'Sarah Lee',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    },
    date: 'Dec 21, 2021',
    featured: true,
  },
  {
    id: '2',
    slug: 'natures-masterpiece-in-the-atlantic',
    title: "Nature's Masterpiece in the Atlantic",
    excerpt: "The Azores, a group of nine volcanic islands belonging to Portugal, captivate travelers with their dramatic cliffs, emerald pastures, and deep-blue seas. Often called the \"Hawaii of Europe,\" the islands offer a perfect escape for adventure and tranquility alike. Visitors can explore crater lakes, dive into natural thermal pools, or spot whales gliding through the ocean. With its unspoiled beauty and sustainable lifestyle, the Azores stand as a shining example of harmony between people and nature.",
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=800&q=80',
    author: {
      name: 'Jack Foster',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    },
    date: 'Dec 21, 2021',
    featured: false,
  },
  {
    id: '3',
    slug: 'the-charming-cities-of-the-azores',
    title: 'The Charming Cities of the Azores',
    excerpt: "The cities of the Azores blend history, culture, and Atlantic beauty in perfect harmony. Ponta Delgada, the lively capital of São Miguel, enchants visitors with its cobblestone streets, whitewashed churches, and oceanfront promenade. Angra do Heroísmo, on Terceira Island, is a UNESCO World Heritage site famed for its colorful architecture and rich maritime history. On Faial, Horta welcomes sailors from around the world with its vibrant marina and artistic spirit. Together, these cities capture the essence of Azorean life—peaceful, welcoming, and deeply connected to the sea.",
    category: 'Cities',
    image: 'https://images.unsplash.com/photo-1608839294429-79a0c37449bc?w=800&q=80',
    author: {
      name: 'Zack Lee',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    },
    date: 'Dec 21, 2021',
    featured: false,
  },
  {
    id: '4',
    slug: 'the-wild-beauty-of-azorean-nature',
    title: 'The Wild Beauty of Azorean Nature',
    excerpt: "Nature reigns supreme in the Azores, where emerald-green landscapes meet dramatic volcanic peaks. Misty forests, cascading waterfalls, and serene crater lakes create a paradise for explorers and dreamers alike. Every island reveals a new wonder—lush hydrangea-lined roads, hidden hot springs, and endless hiking trails through untouched wilderness. The Azores' commitment to sustainability helps preserve this fragile beauty, making the archipelago one of the most pristine destinations in the world. Here, nature isn't just scenery—it's a way of life.",
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    author: {
      name: 'Tessa Smith',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    },
    date: 'Dec 21, 2021',
    featured: false,
  },
  {
    id: '5',
    slug: 'the-endless-blue-of-the-azorean-ocean',
    title: 'The Endless Blue of the Azorean Ocean',
    excerpt: "Surrounded by the vast Atlantic, the Azores owe much of their magic to the ocean. Its deep blue waters shape the islands' climate, culture, and way of life. The sea teems with marine life—whales, dolphins, and colorful fish thrive in its clear depths. For centuries, the Azorean people have looked to the ocean for sustenance and connection, from fishing traditions to modern eco-tourism. Whether you're sailing across the waves, diving into hidden coves, or simply watching the sunset over the horizon, the ocean is always calling.",
    category: 'Ocean',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    author: {
      name: 'Sarah Lee',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    },
    date: 'Dec 21, 2021',
    featured: false,
  },
  {
    id: '6',
    slug: 'a-taste-of-the-azores',
    title: 'A Taste of the Azores',
    excerpt: "Azorean cuisine is a delicious reflection of the islands' land and sea. Freshly caught fish, tender octopus, and rich stews fill local tables, often seasoned with homegrown herbs and a touch of volcanic soil magic. One of the region's most famous dishes, Cozido das Furnas, is slow-cooked underground using natural geothermal heat. Cheeses from São Jorge, sweet pineapples from São Miguel, and local wines from Pico complete the feast. Every bite in the Azores tells a story—of tradition, nature, and the warmth of island life.",
    category: 'Gastronomy',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    author: {
      name: 'Susannah Baum',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    },
    date: 'Dec 21, 2021',
    featured: false,
  },
];
