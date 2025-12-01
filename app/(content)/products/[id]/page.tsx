"use client";
import React from "react";
import { useParams } from "next/navigation";
import { BAGS } from "../../../../lib/bags";
import { Bag } from "../../../../types/bag";
import BagCard from "@/components/products/BagCard";

export default function ProductDetail() {
  // Obtener el parámetro de la ruta dinámica usando useParams
  const params = useParams();
  const productId = params.id as string;

  // Buscar el bolso por ID
  const bag: Bag | undefined = BAGS.find(
    (b) => b.id === productId
  );

  // Si no se encuentra el bolso
  if (!bag) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Producto no encontrado</h1>
        <p className="text-gray-600">El producto con ID {productId} no existe.</p>
      </div>
    );
  }

  // Si sí hay bolso encontrado
  return (
    <div className="flex flex-col items-start p-4 mt-15">
      {/* Pasar los datos reales del bolso al componente BagCard */}
      <BagCard bag={bag} />
    </div>
  );
}