// app/(content)/products/page.tsx
"use client";

import React from "react";
import BagExplorer from "../../../components/products/BagExplorer";

export default function ProductsPage() {
  return (
    <main className="bg-rose-50 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        {/* 🔹 Contenido principal del catálogo */}
        <div className="mt-6">
          <BagExplorer />
        </div>
        
      </section>
    </main>
  );
}
