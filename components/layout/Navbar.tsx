"use client"

import { useState } from "react"
import Link from "next/link"
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const isMobile = useIsMobile()
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Función para cerrar el menú después de hacer click en un link
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="w-full border-b bg-rose-950 md:fixed">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-around p-4">
        
        {/* Logo - Izquierda */}
        <div className="flex items-center">
          <Link href="/" className="text-white hover:text-black font-medium">
            <img className="sm:w-40 sm:h-10.8 md:w-58 md:h-15.5 lg:w-auto lg:h-auto" src="/Logo-_1_.svg" alt="Logo" />
          </Link>
        </div>

        {/* Menú para desktop - Centro */}
        <div className="hidden md:flex items-center gap-4 lg:gap-24">
          <Link href="/" className="text-white hover:text-black font-medium">
            Home
          </Link>
          <Link href="/products" className="text-white hover:text-black font-medium">
            Catalogo
          </Link>
          <Link href="/about" className="text-white hover:text-black font-medium">
            About
          </Link>
        </div>

        {/* Contenedor derecho - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {/* Autenticación */}
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton>
                <button className="text-white hover:text-black font-medium cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-grey-900 text-white hover:text-black rounded-full font-medium text-sm h-10 px-4 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Iconos de favoritos y carrito */}
          <div className="flex items-end ml-15">
            
            <Link href="/carrito" className="text-white hover:text-black font-medium ml-5">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Menú desplegable para móvil - Derecha */}
        {isMobile && (
          <div className="md:hidden relative">
            {/* Botón para abrir/cerrar el menú */}
            <button 
              onClick={toggleMenu}
              className="text-black  hover:text-gray-900 px-4 py-2 rounded-md font-medium"
            >
              <svg width="36" height="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12h18"></path>
                  <path d="M3 6h18"></path>
                  <path d="M3 18h18"></path>
              </svg>
              {isMenuOpen ? "" : ""}
            </button>

            {/* Menú desplegable - solo se muestra cuando isMenuOpen es true */}
            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-gray-900 rounded-md shadow-lg py-2 z-50">
                {/* Links de navegación */}
                <Link 
                  href="/" 
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm text-amber-50 font-medium hover:text-rose-600 hover:bg-gray-800 transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/products" 
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm text-amber-50 font-medium hover:text-rose-600 hover:bg-gray-800 transition-colors"
                >
                  Catalogo
                </Link>
                <Link 
                  href="/about" 
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm text-amber-50 font-medium hover:text-rose-600 hover:bg-gray-800 transition-colors"
                >
                  About
                </Link>

                {/* Separador */}
                <div className="border-t border-gray-700 my-2"></div>

                {/* Iconos de favoritos y carrito */}
                <div className="flex justify-around px-4 py-2">
                  
                  <Link 
                    href="/carrito" 
                    onClick={closeMenu}
                    className="text-amber-50 hover:text-rose-600 transition-colors"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                      <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </Link>
                </div>

                {/* Separador */}
                <div className="border-t border-gray-700 my-2"></div>

                {/* Autenticación */}
                <div className="px-4 py-2">
                  <SignedOut>
                    <div className="flex flex-col gap-2">
                      <SignInButton>
                        <button 
                          onClick={closeMenu}
                          className="w-full text-center text-amber-50 hover:text-rose-600 font-medium cursor-pointer py-2 transition-colors"
                        >
                          Sign In
                        </button>
                      </SignInButton>
                      <SignUpButton>
                        <button 
                          onClick={closeMenu}
                          className="w-full bg-rose-700 text-amber-50 hover:text-black rounded-full font-medium text-sm py-2 cursor-pointer transition-colors"
                        >
                          Sign Up
                        </button>
                      </SignUpButton>
                    </div>
                  </SignedOut>
                  <SignedIn>
                    <div className="flex justify-center">
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  </SignedIn>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}