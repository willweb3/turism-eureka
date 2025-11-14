# About Us Page - Azoreon

## Overview
The About Us page presents Azoreon's story, mission, values, and social proof through a beautifully designed, fully responsive layout.

## Route
```
/about
```

## Page Structure

### 1. Hero Section (`AboutHero`)
- Full-height hero with background image
- Dark overlay for text readability
- Main title: "About Azoreon"
- Subtitle describing the platform's purpose
- Decorative blur elements for visual interest

### 2. Story & Mission Section (`StoryMissionSection`)
- Grid of 4 images showcasing Azores landscapes
- Two-column layout for "Our Story" and "Our Mission" text
- Responsive: stacks on mobile, side-by-side on desktop

### 3. Trusted Partner Section (`TrustedPartnerSection`)
- Section title and description
- 3 statistics cards:
  - 9K+ Happy Travelers
  - 12+ Experience Categories
  - 90% Positive Reviews
- Each card has an icon, value, and label
- Hover effects for interactivity

### 4. Testimonials Section (`TestimonialsSection`)
- "60+ Shared Experiences" highlight
- Interactive carousel with 3 testimonials:
  - Alex Johnson
  - Daniel Wilson
  - Sarah Lee
- Features:
  - Avatar images
  - 5-star ratings
  - Full testimonial text
  - Navigation arrows
  - Dot indicators
- Auto-updates on navigation

### 5. Why Choose Section (`WhyChooseSection`)
- Section title and description
- 3 benefit cards:
  - Verified Providers
  - Local Expertise
  - Unique Experiences
- Each with icon, title, and description
- Hover effects on cards

### 6. CTA Section (`CTASection`)
- Full-width section with background image
- Dark overlay
- "Let's Start a Journey" call-to-action
- "Join a Moment" button linking to signup
- Decorative blur elements

## Components

### Component Files
```
/src/components/about/
├── AboutHero.tsx
├── StoryMissionSection.tsx
├── TrustedPartnerSection.tsx
├── TestimonialsSection.tsx
├── WhyChooseSection.tsx
├── CTASection.tsx
└── index.ts (exports)
```

### Usage Example
```tsx
import {
  AboutHero,
  StoryMissionSection,
  TrustedPartnerSection,
  TestimonialsSection,
  WhyChooseSection,
  CTASection
} from '@/components/about';

export default function AboutPage() {
  return (
    <>
      <HomeHeader />
      <main className="pt-20">
        <AboutHero />
        <StoryMissionSection />
        <TrustedPartnerSection />
        <TestimonialsSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <HomeFooter />
    </>
  );
}
```

## Design Tokens Used

### Colors
- **Primary (Teal)**: `primary-600` (#3FA08F) - Stats, CTA button
- **Secondary (Orange)**: `secondary` (#E57643) - Stat icons
- **Accent (Yellow)**: `accent` (#FFBA33) - Star ratings, stat icons
- **Dark**: `dark-900` (#11212D) - Text, backgrounds
- **Gray**: `gray-50`, `gray-200` - Backgrounds, borders
- **Testimonial BG**: `#F2F6F8` - Light gray for testimonial cards

### Typography
- **Headings**: `font-lufga font-semibold` - Used for all section titles
- **Body**: `font-hanken` - Used for all body text
- **Sizes**:
  - Hero h1: `text-5xl md:text-6xl lg:text-7xl`
  - Section h2: `text-3xl md:text-4xl lg:text-5xl`
  - Card h3: `text-2xl`
  - Body: `text-base` or `text-lg`

### Spacing
- **Section padding**: `py-16 lg:py-24`
- **Container**: `container mx-auto px-6 lg:px-8`
- **Grid gaps**: `gap-6 lg:gap-8` or `gap-8`
- **Card padding**: `p-8`

### Responsive Breakpoints
- **Mobile**: Base (xs: 320px)
- **Tablet**: md: 640px
- **Desktop**: lg: 1024px
- **Large Desktop**: xl: 1280px

## Features

### Responsive Design
- Mobile-first approach
- Grid layouts adapt:
  - 1 column on mobile
  - 2 columns on tablet
  - 3-4 columns on desktop
- Images optimize for each viewport

### Interactivity
- Testimonials carousel with:
  - Arrow navigation
  - Dot indicators
  - Smooth transitions
- Hover effects on cards and images
- Interactive stat cards
- CTA button with hover animation

### Accessibility
- Semantic HTML structure
- Alt text for all images
- ARIA labels for navigation buttons
- Keyboard navigation support
- Proper heading hierarchy

### Performance
- Next.js Image component for optimization
- Lazy loading for below-fold images
- Priority loading for hero image
- Optimized image sizes (quality: 90)

## Customization

### Changing Text Content
Edit the component files directly:
- **Hero**: `AboutHero.tsx` - lines 23-28
- **Story/Mission**: `StoryMissionSection.tsx` - lines 43-88
- **Statistics**: `TrustedPartnerSection.tsx` - lines 7-26
- **Testimonials**: `TestimonialsSection.tsx` - lines 15-54
- **Benefits**: `WhyChooseSection.tsx` - lines 5-24
- **CTA**: `CTASection.tsx` - lines 23-30

### Changing Images
Replace Unsplash URLs with your own:
- **Hero background**: `AboutHero.tsx` - line 13
- **Story grid**: `StoryMissionSection.tsx` - lines 7-22
- **Testimonial avatars**: `TestimonialsSection.tsx` - lines 18, 26, 34
- **CTA background**: `CTASection.tsx` - line 12

Ensure images are configured in `next.config.js`:
```js
images: {
  remotePatterns: [
    { hostname: 'images.unsplash.com' },
    { hostname: 'i.pravatar.cc' },
    // Add your image domains here
  ],
}
```

### Changing Colors
Update color classes to use different brand colors:
- Replace `primary-600` with your teal shade
- Replace `secondary` for orange accents
- Replace `accent` for yellow highlights

### Adding More Testimonials
In `TestimonialsSection.tsx`:
1. Add testimonial objects to the `testimonials` array
2. Carousel automatically adapts to new count

## SEO

### Metadata
```tsx
export const metadata: Metadata = {
  title: 'About Us | Azoreon - Your Trusted Travel Partner',
  description: 'Learn about Azoreon, your gateway to authentic Azorean experiences...',
};
```

### Recommendations
- Add Open Graph tags
- Include schema.org markup for organization
- Add canonical URL
- Optimize image alt text for keywords

## Testing

### Manual Testing Checklist
- [ ] Hero section displays correctly on all devices
- [ ] Image grid loads and displays properly
- [ ] Statistics cards are readable and aligned
- [ ] Testimonials carousel navigates smoothly
- [ ] Arrow buttons and dots work correctly
- [ ] Benefits cards display with proper spacing
- [ ] CTA button links to correct page
- [ ] All images load without errors
- [ ] Text is readable on all backgrounds
- [ ] Hover effects work as expected
- [ ] Mobile menu works (from HomeHeader)
- [ ] Page loads within acceptable time

### Browser Testing
Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

### Potential Additions
- [ ] Team member cards (founders, staff)
- [ ] Timeline of company milestones
- [ ] Video about Azoreon/Azores
- [ ] Interactive map of Azores islands
- [ ] More detailed statistics/metrics
- [ ] Press mentions/awards section
- [ ] Partner logos
- [ ] FAQ section

### Animation Ideas
- [ ] Fade-in animations on scroll (Intersection Observer)
- [ ] Number counting animation for statistics
- [ ] Parallax scrolling for hero
- [ ] Auto-rotate testimonials carousel

## Maintenance

### Content Updates
Review and update quarterly:
- Statistics (travelers, categories, review %)
- Testimonials (rotate in new reviews)
- Story/mission text (as company evolves)
- Team information (if added)

### Image Updates
- Replace with professional photography when available
- Ensure all images show Azores landmarks
- Maintain consistent style/quality across images

## Links

- **Live Page**: http://localhost:3000/about
- **Design System**: http://localhost:3000/design-system
- **Homepage**: http://localhost:3000/home

---

**Created**: November 2025
**Last Updated**: November 2025
**Version**: 1.0.0
