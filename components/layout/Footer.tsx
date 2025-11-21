import Link from 'next/link'; 
import React from 'react';

// Si usas íconos, asegúrate de importarlos
// import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function Footer() { 
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      
      {/* 👈 CAMBIO CRÍTICO: Reducido gap-10 a gap-6 para acercar las columnas */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6"> 
        
        {/* Columna 1: Marca y Horario */}
        <div>
          <h2 className="text-2xl font-bold text-white">BAGIFY</h2>
          <p className="mt-3 text-sm">
            Tu tienda online de bolsos perfecta. Diseños modernos, elegantes y pensados para cualquier ocasión.
          </p>
          
          {/* Bloque de Horario con espaciado */}
          <div className="mt-4 text-sm">
            <p className="font-semibold text-white mb-1">Horario:</p>
            <ul className="list-disc list-inside space-y-1"> 
                <li>Lun–Vie 8am–6pm</li>
                <li>Dom 8am–1pm</li>
            </ul>
          </div>
        </div>

        {/* Columna 2: Enlaces */}
        <div>
          <h3 className="text-lg font-semibold text-white">Enlaces</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Inicio</Link></li>
            <li><Link href="/products" className="hover:text-white">Catálogo</Link></li>
            <li><Link href="/about" className="hover:text-white">Nosotros</Link></li>
            <li><Link href="/cart" className="hover:text-white">Carrito</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contacto</h3>
          <ul className="mt-3 text-sm space-y-2">
            <li>Email: <a href="mailto:soporte@bagify.com" className="hover:text-white">soporte@bagify.com</a></li>
            <li>Tel: <a href="tel:+573000000000" className="hover:text-white">+57 300 000 0000</a></li>
          </ul>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        &copy; {currentYear} BAGIFY — Todos los derechos reservados.
      </div>
    </footer>
  );
}