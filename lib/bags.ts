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
   image: "/bags/bolso-clasico-vino.jpg" 

  },
  {
      id: 2,
     name: "Crossbody Urbana",
     brand: "UrbanBag",
     material: "tela",
     type: "crossbody",
      price: 129000,
     image: "/bags/crossbody-urbana.jpeg",
  },
  {
      id: 3,
     name: "Tote Minimal Roja",
     brand: "LuxeLine",
     material: "ecocuero",
     type: "tote",
     price: 159000,
     image: "/bags/tote-minimal-roja.webp", 
  },
  {
     id: 4,
     name: "Mochila Elegante",
     brand: "Eleganza",
     material: "cuero",
     type: "mochila",
     price: 210000,
     image: "/bags/mochila-elegante.webp", 
  },
  {
    id: 5,
    name: "Bolso Mano",
    brand: "Eleganza",
    material: "ecocuero",
    type: "mano",
    price: 145000,
    image: "/bags/bolso-mano-ruby.jpg"

     
  },
  {
     id: 6,
    name: "Mochila Urbana Vino",
    brand: "UrbanBag",
    material: "tela",
    type: "mochila",
    price: 175000,
    image: "/bags/mochila-urbana-vino.webp" 
  },
  {
       id: 7,
    name: "Crossbody Nocturna",
    brand: "LuxeLine",
    material: "cuero",
    type: "crossbody",
    price: 198000,  
    image: "/bags/crossbody nocturna.webp"
  },
  {
      id: 8,
    name: "Tote Día a Día",
    brand: "UrbanBag",
    material: "tela",
    type: "tote",
    price: 135000, 
    image: "/bags/Bolso_tote_negro_tela.webp"
  },
  {
      id: 9,
    name: "Bolso Clutch Burdeos",
    brand: "LuxeLine",
    material: "cuero",
    type: "mano",
    price: 165000, 
    image: "/bags/bolso-de-cuero-de-mano-cafe.webp"
  },
  {
       id: 10,
    name: "Mochila Compacta Rosé",
    brand: "Eleganza",
    material: "ecocuero",
    type: "mochila",
    price: 160000,  
    image: "/bags/bolso-cuero-rosado.jpg"
  },
    
];

export function getBagById(id: number) {
  return BAGS.find((bag) => bag.id === id);
}
