// app/layout.tsx

import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/contexts/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">
          {/* ⭐ Aquí empieza el provider del carrito */}
          <CartProvider>
            <header>
              <Navbar />
            </header>

            <main>
              {children}
            </main>

            <Footer />
          </CartProvider>
          {/* ⭐ Aquí termina el provider */}
        </body>
      </html>
    </ClerkProvider>
  );
}
