"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Bag } from "@/types/bag";

export type CartItem = Bag & { quantity: number };

type CartContextType = {
  items: CartItem[];
  addToCart: (bag: Bag) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (bag: Bag) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === bag.id);
      if (existing) {
        return prev.map((item) =>
          item.id === bag.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...bag, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return ctx;
}
