import { useEffect, useState } from 'react';
import type { CartItem } from '@/lib/cart/cartTypes';

export function useCartTimer(items: CartItem[]) {
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [hasExpired, setHasExpired] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      setTimeLeft('');
      setHasExpired(false);
      return;
    }

    // Encontrar o item que expira mais cedo
    const earliestExpiry = items.reduce((earliest, item) => {
      const itemExpiry = new Date(item.expiresAt).getTime();
      return itemExpiry < earliest ? itemExpiry : earliest;
    }, new Date(items[0].expiresAt).getTime());

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = earliestExpiry - now;

      if (distance < 0) {
        setTimeLeft('Expired');
        setHasExpired(true);
        clearInterval(interval);
        return;
      }

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${minutes}:${seconds.toString().padStart(2, '0')}`);
      setHasExpired(false);
    }, 1000);

    return () => clearInterval(interval);
  }, [items]);

  return { timeLeft, hasExpired };
}
