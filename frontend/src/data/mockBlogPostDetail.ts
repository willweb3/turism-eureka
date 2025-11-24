import { BlogPost } from './mockBlogPosts';

export interface BlogPostDetail extends BlogPost {
  slug: string;
  content: string;
  relatedPosts: string[];
}

export const mockBlogPostsDetail: BlogPostDetail[] = [
  {
    id: '1',
    slug: 'the-enchanting-azores-europe-hidden-paradise',
    title: "The Enchanting Azores: Europe's Hidden Paradise",
    excerpt: "Nestled in the heart of the Atlantic Ocean, the Azores are a breathtaking Portuguese archipelago known for their volcanic landscapes, lush greenery, and crystal-clear lakes.",
    content: `
      <h2>Lorem ipsum pellentesque in</h2>
      <p>Lorem ipsum tortor in viverra aliquet consectetur sodales ut vitae at maecenas morbi ipsum sed metus ut proin morbi mattis proin facilisis amet et amet massa tincidunt porttitor amet sit pulvinar enim sodales ut ac proin ut amet lorem ipsum aliquet integer pellentesque tempus convallis arcu ornare id pharetra cras non tellus et amet mauris id adipiscing eget quis mus leo turpis viverra posuere dignissim pulvinar morbi amet.</p>
      <p>Lorem ipsum tincidunt porta risus lorem lacinia enim elit id eget integer blandit tristique lectus turpis amet eleifend magna fermentum odio tincidunt aenean egestas at vitae massa proin tellus aliquet nibh tincidunt dolor lorem vel pretium ultricies sit amet purus nisl sit semper quis amet volutpat sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquam nisl.</p>

      <h3>Lorem ipsum iaculis eros diam ultricies.</h3>
      <p>Lorem ipsum accumsan risus leo eget purus auctor facilisi nec vitae odio pellentesque pulvinar nunc non elementum adipiscing et hendrerit sit tincidunt ut lectus bibendum curabitur sed feugiat aliquet amet aliquam mollis nibh tortor arcu ultricies massa proin sed sodales amet lacinia hendrerit suscipit commodo at platea risus sagittis sagittis nunc aliquam sit ultrices sed id senectus.</p>

      <div class="inline-images">
        <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80" alt="Azores landscape 1" />
        <img src="https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=600&q=80" alt="Azores landscape 2" />
        <img src="https://images.unsplash.com/photo-1608839294429-79a0c37449bc?w=600&q=80" alt="Azores landscape 3" />
        <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80" alt="Azores landscape 4" />
      </div>

      <h3>Lorem ipsum iaculis eros diam ultricies.</h3>
      <p>Lorem ipsum accumsan risus leo eget purus auctor facilisi nec vitae odio pellentesque pulvinar nunc non elementum adipiscing et hendrerit sit tincidunt ut lectus bibendum curabitur sed feugiat aliquet amet aliquam mollis nibh tortor arcu ultricies massa proin sed sodales amet lacinia hendrerit suscipit commodo at platea risus sagittis sagittis nunc aliquam sit ultrices sed id senectus amet nulla facilisi morbi tempus.</p>
      <p>Lorem ipsum mauris netus ornare eros id purus morbi nec vivamus magna nibh lectus ultrices malesuada tempus id diam euismod sit amet vitae lacus at proin et in pharetra vivamus lectus feugiat integer nulla malesuada dui nulla amet venenatis hendrerit egestas pellentesque id praesent nunc amet morbi nisl sit semper quis amet.</p>
    `,
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    author: {
      name: 'Sarah Lee',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    },
    date: 'Dec 21, 2021',
    featured: true,
    relatedPosts: ['2', '3', '4'],
  },
  {
    id: '2',
    slug: 'natures-masterpiece-in-the-atlantic',
    title: "Nature's Masterpiece in the Atlantic",
    excerpt: "The Azores, a group of nine volcanic islands belonging to Portugal, captivate travelers with their dramatic cliffs, emerald pastures, and deep-blue seas.",
    content: `
      <h2>Discovering the Atlantic's Hidden Gem</h2>
      <p>The Azores, a group of nine volcanic islands belonging to Portugal, captivate travelers with their dramatic cliffs, emerald pastures, and deep-blue seas. Often called the "Hawaii of Europe," the islands offer a perfect escape for adventure and tranquility alike.</p>
      <p>Visitors can explore crater lakes, dive into natural thermal pools, or spot whales gliding through the ocean. With its unspoiled beauty and sustainable lifestyle, the Azores stand as a shining example of harmony between people and nature.</p>

      <h3>Adventure Awaits</h3>
      <p>From hiking trails that wind through lush forests to diving expeditions in crystal-clear waters, the Azores offer endless opportunities for adventure seekers. The volcanic terrain provides a unique backdrop for outdoor activities.</p>
    `,
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=1200&q=80',
    author: {
      name: 'Jack Foster',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    },
    date: 'Dec 21, 2021',
    featured: false,
    relatedPosts: ['1', '3', '5'],
  },
  {
    id: '3',
    slug: 'the-charming-cities-of-the-azores',
    title: 'The Charming Cities of the Azores',
    excerpt: "The cities of the Azores blend history, culture, and Atlantic beauty in perfect harmony.",
    content: `
      <h2>Urban Gems of the Atlantic</h2>
      <p>The cities of the Azores blend history, culture, and Atlantic beauty in perfect harmony. Ponta Delgada, the lively capital of São Miguel, enchants visitors with its cobblestone streets, whitewashed churches, and oceanfront promenade.</p>
      <p>Angra do Heroísmo, on Terceira Island, is a UNESCO World Heritage site famed for its colorful architecture and rich maritime history. On Faial, Horta welcomes sailors from around the world with its vibrant marina and artistic spirit.</p>

      <h3>A Walk Through History</h3>
      <p>Together, these cities capture the essence of Azorean life—peaceful, welcoming, and deeply connected to the sea. Each street corner tells a story of maritime adventures and cultural heritage.</p>
    `,
    category: 'Cities',
    image: 'https://images.unsplash.com/photo-1608839294429-79a0c37449bc?w=1200&q=80',
    author: {
      name: 'Zack Lee',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    },
    date: 'Dec 21, 2021',
    featured: false,
    relatedPosts: ['1', '2', '6'],
  },
];

export function getPostBySlug(slug: string): BlogPostDetail | undefined {
  return mockBlogPostsDetail.find(post => post.slug === slug);
}

export function getPostById(id: string): BlogPostDetail | undefined {
  return mockBlogPostsDetail.find(post => post.id === id);
}
