import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Bag = {
  imageUrl: string | StaticImport;
  id: string;
  name: string;
  brand: string;
  material: string;
  type: string;
  price: number;
  image?: string;
};
