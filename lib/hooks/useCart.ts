"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '../../types/shop';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity: number, selectedSize?: string) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, quantity, selectedSize) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id && item.selectedSize === selectedSize
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id && item.selectedSize === selectedSize
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { ...product, quantity, selectedSize }],
          };
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },

      updateQuantity: (productId, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      total: () => {
        const items = get().items;
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'shopping-cart',
    }
  )
);