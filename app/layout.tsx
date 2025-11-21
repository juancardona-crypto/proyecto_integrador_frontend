// app/layout.tsx

import type { Metadata } from "next";
// ... (Tus imports de fuentes y estilos)
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/layout/Footer"; // <-- ¡NUEVO: Importar el Footer!

// ... (Metadata y Fonts)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`antialiased`}>
          <header>
            <Navbar />
          </header>
          
          {/* El contenido de la página (Home, Products, etc.) */}
          <main> 
            {children}
          </main>
          
          {/* 👈 AQUÍ: Agregamos el Footer para que aparezca en todas las páginas */}
          <Footer /> 
          
        </body>
      </html>
    </ClerkProvider>
  );
}