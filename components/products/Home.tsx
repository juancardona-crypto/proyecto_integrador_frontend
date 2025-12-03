import React from 'react'
import Link from 'next/link'
import { CarouselDemo, CarouselDemo2 } from './CarouselDemo'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient from-gray-50 to-white">
      {/* Primer carrusel: Imágenes a pantalla completa */}
      <section className="h-screen">
        <CarouselDemo/>
      </section>
      
      {/* Separador */}
      <div className="py-1 pt-16 px-4 text-center">
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
      <section>
        <Link href="/products" className="no-underline w-full">
          <div className="flex justify-center w-full lg:ml-[500px] my-12">
            <button
              type="button"
              className="flex items-start justify-between gap-2
                        w-240px px-6 py-3 
                        rounded-full 
                        bg-rose-800 text-[#FFECEC] 
                        font-bold cursor-pointer 
                        text-base
                        transition-all duration-300 ease-in-out
                        hover:bg-rose-800 hover:-translate-x-1
                        active:scale-95
                        shadow-md"
            >
              <span>Ver todo nuestro catálogo</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path 
                  d="M13 7L18 12L13 17" 
                  stroke="#FFECEC" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M6 12H18" 
                  stroke="#FFECEC" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </Link>
      </section>
    </div>
  )
}