// lib/bags.ts
import type { Bag } from "../types/bag";

export const BAGS: Bag[] = [
  {
    id: 1,
    name: "Bolso Clásico Vino",
    brand: "Eleganza",
    material: "cuero",
    type: "mano",
    price: 189000,
   image: "/bags/bolso-clasico-vino.jpg" // 👈 NUEVO
   
  },
  {
    id: 2,
    name: "Crossbody Urbana",
    brand: "UrbanBag",
    material: "tela",
    type: "crossbody",
    price: 129000,
    image: "/bags/crossbody-urbana.jpg", // 👈 NUEVO
  },
  {
    id: 3,
    name: "Tote Minimal Roja",
    brand: "LuxeLine",
    material: "ecocuero",
    type: "tote",
    price: 159000,
    image: "/bags/tote-minimal-roja.jpg", // 👈 NUEVO
  },
  {
    id: 4,
    name: "Mochila Elegante",
    brand: "Eleganza",
    material: "cuero",
    type: "mochila",
    price: 210000,
    image: "/bags/mochila-elegante.jpg", // 👈 NUEVO
  },
];

export function getBagById(id: number) {
  return BAGS.find((bag) => bag.id === id);
}
