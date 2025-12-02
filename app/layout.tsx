// app/layout.tsx

import type { Metadata } from "next";
 
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import React from "react";
import Hero from "@/components/products/Home";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/layout/Footer"; 

 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>Elden Noir</title>
          <meta
            name="description"
            content="Welcome to Elden Noir, your one-stop shop for all your needs."
          />
        </head>
        <body className={`antialiased`}>
          <header>
            <Navbar />
          </header>
          
     
          <main> 
            {children}
          </main>
          
         
          <Footer /> 
          
        </body>
      </html>
    </ClerkProvider>
  );
}