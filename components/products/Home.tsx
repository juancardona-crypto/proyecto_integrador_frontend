"use client"

import Link from "next/link";
import BagExplorer from "./BagExplorer";
import BagCard from "./BagCard";
import { BAGS } from "@/lib/bags";

interface HeroProps {
  onCtaClick?: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <>
      <section className="mt-30 mb-10 text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Bienvenidos a Elden Noir</h1>
        <h2 className="text-xl">La mejor selección de bolsos de Medellín</h2>
      </section>
      <section className="ml-85 text-center flex flex-col justify-center items-start">
        <h2 className="text-2xl">En nuestra tienda encontrarás una variedad de bolsos únicos y de alta calidad, así como marcas reconocidas.</h2>
          <div className="w-full h-px bg-gray-600 my-4"></div>
          <h1 className="text-4xl font-bold">Totto</h1>
          <h2 className="text-xl mt-5">Explora la resistencia que acompaña tu ritmo diario. Totto combina diseño, comodidad y durabilidad para quienes nunca se detienen.</h2>

      </section>
      
      
     </>
  );
}