import React from 'react'
import { CarouselDemo, CarouselDemo2 } from './CarouselDemo'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Primer carrusel: Imágenes a pantalla completa */}
      <section className="h-screen">
        <CarouselDemo/>
      </section>
      
      {/* Separador */}
      <div className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Nuestras marcas
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Descubre nuestra colección exclusiva de productos de alta calidad
        </p>
      </div>
      
      {/* Segundo carrusel: Imágenes centradas y más pequeñas */}
      <section className="h-[80vh]">
        <CarouselDemo2 />
      </section>
    </div>
  )
}