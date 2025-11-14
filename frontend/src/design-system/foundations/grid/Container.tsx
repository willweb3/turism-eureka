import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps {
  /** Content to be rendered inside the container */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** HTML element to render (default: 'div') */
  as?: 'div' | 'section' | 'main' | 'article' | 'aside';
  /** Disable responsive padding */
  noPadding?: boolean;
  /** Use fluid width (no max-width constraints) */
  fluid?: boolean;
}

/**
 * Container Component
 *
 * Responsive container with max-widths based on Figma design specs:
 * - Mobile (xs): 288px content width
 * - Tablet (sm/md): 576px content width
 * - Laptop (lg): 960px content width
 * - Desktop (xl): 1216px content width
 * - Desktop Large (2xl): 1312px content width
 *
 * @example
 * ```tsx
 * <Container>
 *   <h1>Page Title</h1>
 *   <p>Content goes here</p>
 * </Container>
 * ```
 */
export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ children, className, as: Component = 'div', noPadding = false, fluid = false }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={cn(
          'mx-auto w-full',
          !fluid && [
            'max-w-xs xs:max-w-xs',
            'sm:max-w-sm md:max-w-md',
            'lg:max-w-lg',
            'xl:max-w-xl',
            '2xl:max-w-2xl',
          ],
          !noPadding && [
            'px-4 xs:px-4',    // 16px padding on mobile (matches gutter)
            'sm:px-8 md:px-8', // 32px padding on tablet+ (matches gutter)
          ],
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';
