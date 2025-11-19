// types/bag.ts

export type Bag = {
  id: number;
  name: string;
  brand: string;
  material: string;
  type: string;
  price: number;
  image?: string; // 👈 NUEVO (opcional para evitar errores)
};
