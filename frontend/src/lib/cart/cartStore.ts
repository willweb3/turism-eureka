import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem, CartSummary, PromoCode, CartStore } from './cartTypes';
import { mockCartItems } from './mockData';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // ============================================
      // INITIAL STATE
      // ============================================
      items: mockCartItems, // Começar com mock data
      promoCode: null,
      isLoading: false,
      error: null,

      // ============================================
      // ITEM MANAGEMENT (MVP - sem API)
      // ============================================

      addItem: async (item) => {
        set({ isLoading: true, error: null });

        try {
          // Simular delay de API
          await new Promise((resolve) => setTimeout(resolve, 500));

          const newItem: CartItem = {
            ...item,
            id: `item-${Date.now()}`,
            createdAt: new Date(),
            updatedAt: new Date(),
            expiresAt: new Date(Date.now() + 10 * 60 * 1000),
          };

          set((state) => ({
            items: [...state.items, newItem],
            isLoading: false,
          }));

        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          set({ error: errorMessage, isLoading: false });
          throw error;
        }
      },

      removeItem: async (itemId) => {
        set({ isLoading: true, error: null });

        try {
          await new Promise((resolve) => setTimeout(resolve, 300));

          set((state) => ({
            items: state.items.filter((item) => item.id !== itemId),
            isLoading: false,
          }));

        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          set({ error: errorMessage, isLoading: false });
          throw error;
        }
      },

      updateQuantity: async (itemId, quantity) => {
        if (quantity === 0) {
          return get().removeItem(itemId);
        }

        set({ isLoading: true, error: null });

        try {
          await new Promise((resolve) => setTimeout(resolve, 300));

          set((state) => ({
            items: state.items.map((item) =>
              item.id === itemId
                ? { ...item, quantity, updatedAt: new Date() }
                : item
            ),
            isLoading: false,
          }));

        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          set({ error: errorMessage, isLoading: false });
          throw error;
        }
      },

      updateItem: async (itemId, updates) => {
        set({ isLoading: true, error: null });

        try {
          await new Promise((resolve) => setTimeout(resolve, 300));

          set((state) => ({
            items: state.items.map((item) =>
              item.id === itemId
                ? { ...item, ...updates, updatedAt: new Date() }
                : item
            ),
            isLoading: false,
          }));

        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          set({ error: errorMessage, isLoading: false });
          throw error;
        }
      },

      clearCart: async () => {
        set({ isLoading: true, error: null });

        try {
          await new Promise((resolve) => setTimeout(resolve, 300));

          set({
            items: [],
            promoCode: null,
            isLoading: false,
          });

        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          set({ error: errorMessage, isLoading: false });
          throw error;
        }
      },

      // ============================================
      // PROMO CODES (MVP)
      // ============================================

      applyPromoCode: async (code) => {
        set({ isLoading: true, error: null });

        try {
          await new Promise((resolve) => setTimeout(resolve, 500));

          // Mock validation - aceitar apenas "AZOREON10"
          if (code.toUpperCase() === 'AZOREON10') {
            const mockPromo: PromoCode = {
              id: 'promo-1',
              code: 'AZOREON10',
              codeType: 'percentage',
              discountValue: 10,
              validFrom: new Date('2025-01-01'),
              currentUses: 0,
              firstTimeUsersOnly: false,
              isActive: true,
              isValid: true,
            };

            set({
              promoCode: mockPromo,
              isLoading: false,
            });
          } else {
            throw new Error('Invalid promo code');
          }

        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          set({ error: errorMessage, isLoading: false });
          throw error;
        }
      },

      removePromoCode: () => {
        set({ promoCode: null });
      },

      // ============================================
      // CALCULATIONS
      // ============================================

      calculateSummary: () => {
        const items = get().items;
        const promoCode = get().promoCode;

        // 1. Calcular subtotal
        const subtotal = items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );

        // 2. Calcular desconto de promo code
        let promoDiscount = 0;
        if (promoCode?.isValid) {
          if (promoCode.codeType === 'percentage') {
            promoDiscount = subtotal * (promoCode.discountValue / 100);

            if (promoCode.maxDiscountAmount) {
              promoDiscount = Math.min(promoDiscount, promoCode.maxDiscountAmount);
            }
          } else if (promoCode.codeType === 'fixed') {
            promoDiscount = Math.min(promoCode.discountValue, subtotal);
          }
        }

        // 3. Calcular descontos de itens individuais
        const itemDiscounts = items.reduce(
          (sum, item) => sum + (item.discountAmount || 0) * item.quantity,
          0
        );

        const totalDiscounts = promoDiscount + itemDiscounts;

        // 4. Calcular valor após descontos
        const afterDiscounts = subtotal - totalDiscounts;

        // 5. Calcular taxas (IVA 6% nos Açores)
        const taxes = afterDiscounts * 0.06;

        // 6. Calcular total
        const total = afterDiscounts + taxes;

        // 7. Calcular breakdown de comissões
        const platformFee = total * 0.10;    // 10% para plataforma
        const providerAmount = total * 0.85;  // 85% para prestador
        const hostCommission = total * 0.05;  // 5% para anfitrião

        return {
          itemCount: items.length,
          subtotal,
          discounts: totalDiscounts,
          promoDiscount,
          hostCommission,
          taxes,
          total,
          breakdown: {
            platformFee,
            providerAmount,
            hostCommission,
          },
        };
      },

      // ============================================
      // SYNC & REFRESH (MVP - no-op)
      // ============================================

      syncWithServer: async () => {
        // MVP: No servidor ainda
        console.log('Sync with server (MVP mode)');
      },

      refreshAvailability: async () => {
        // MVP: Sem validação de disponibilidade
        console.log('Refresh availability (MVP mode)');
      },

      // ============================================
      // TIMER MANAGEMENT (MVP)
      // ============================================

      resetTimers: async () => {
        const items = get().items;

        set((state) => ({
          items: state.items.map((item) => ({
            ...item,
            expiresAt: new Date(Date.now() + 10 * 60 * 1000),
          })),
        }));
      },

      handleExpiredItems: async (expiredIds) => {
        try {
          for (const itemId of expiredIds) {
            await get().removeItem(itemId);
          }

          set({
            error: `${expiredIds.length} item(s) removed - reservation time expired`,
          });

        } catch (error) {
          console.error('Error handling expired items:', error);
        }
      },
    }),
    {
      name: 'azoreon-cart-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        promoCode: state.promoCode,
      }),
    }
  )
);
