import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function Footer() { 
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white">Elden Noir</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Tu tienda online de bolsos perfecta. Diseños modernos, elegantes y pensados para cualquier ocasión.
          </p>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white">Enlaces</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Inicio</a></li>
            <li><a href="/products" className="hover:text-white transition">Catálogo</a></li>
            <li><a href="/about" className="hover:text-white transition">Nosotros</a></li>
            <li><a href="/cart" className="hover:text-white transition">Carrito</a></li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white">Horario</h3>
          <ul className="mt-3 text-sm space-y-2">
            <li>Lun–Vie: 8am–6pm</li>
            <li>Dom: 8am–1pm</li>
            <li>Sábados: Cerrado</li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white">Contacto</h3>
          <ul className="mt-3 text-sm space-y-2">
            <li>
              Email:{' '}
              <a href="mailto:soporte@bagify.com" className="hover:text-white transition">
                soporte@EldenNoir.com
              </a>
            </li>
            <li>
              Tel:{' '}
              <a href="tel:+573000000000" className="hover:text-white transition">
                +57 300 000 0000
              </a>
            </li>
          
      </ul>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-3">Síguenos</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="https://www.instagram.com/03_ssh_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/SantiagoSerna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a
                href="https://www.twitter.com/SantiagoSerna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

      </div>
     <div className="text-center px-4 sm:px-0 mb-10">
  <h3
    className="text-lg sm:text-xl lg:text-2xl font-semibold 
               text-white-400 hover:text-white-300 cursor-pointer 
               transition duration-300"
  >
    <a href="/feedback">Comentarios & Sugerencias</a>
  </h3>

  <p className="mt-3 text-sm sm:text-base text-gray-400 
                max-w-sm mx-auto leading-relaxed">
    Déjanos tus ideas, opiniones y sugerencias para mejorar la tienda.
  </p>
</div>



      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        &copy; {currentYear} ELDEN NOIR — Todos los derechos reservados.
      </div>
    </footer>
  );
}
