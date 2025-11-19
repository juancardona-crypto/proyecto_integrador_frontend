// components/layout/Footer.tsx

import Link from 'next/link'; 
// Asegúrate de tener 'react-icons' instalado: npm install react-icons
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Columna 1: Enlaces */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gray-400 transition duration-150">Inicio</Link></li>
            <li><Link href="/products" className="hover:text-gray-400 transition duration-150">Catálogo</Link></li>
            <li><Link href="/about" className="hover:text-gray-400 transition duration-150">Nosotros</Link></li>
            <li><Link href="/cart" className="hover:text-gray-400 transition duration-150">Carrito</Link></li>
          </ul>
        </div>
        
        {/* Columna 2: Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li>
              {/* Nota: Usé el email de la primera vez que me lo enviaste */}
              <p>Email: <a href="mailto:soport.backpack@gmail.com" className="hover:text-gray-400 transition duration-150">soport.backpack@gmail.com</a></p>
            </li>
            <li>
              <p>Tel: <a href="tel:+573114156653" className="hover:text-gray-400 transition duration-150">+57 311 415 66 53</a></p>
            </li>
            <li><p>Horario: Lun-Sab 8am-6pm</p></li>
            <li><p>Domingo 8am-2pm</p></li>
          </ul>
        </div>
        
        {/* Columna 3: Síguenos (Redes Sociales) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
          <p className="text-sm mb-4">Encuéntranos en tus redes favoritas:</p>
          <div className="flex space-x-5 text-2xl">
            <a href="URL_INSTAGRAM" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition duration-150">
              <FaInstagram />
            </a>
            <a href="URL_FACEBOOK" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition duration-150">
              <FaFacebookF />
            </a>
            <a href="URL_TWITTER" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition duration-150">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      
      {/* Sección de Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        &copy; {currentYear} *USB BACKPACKS* – Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;