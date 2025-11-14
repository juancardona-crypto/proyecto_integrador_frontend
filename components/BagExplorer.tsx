"use client";



// components/BagExplorer.tsx

import { useState } from "react";
import BagFilters from "./BagFilters";
import BagCard from "./BagCard";
import type { Bag } from "../types/bag";


import { BAGS } from "../lib/bags";
  

// Categorías por tipo de bolso
const CATEGORIES = [
  { id: "", label: "Todos" },
  { id: "mano", label: "Bolsos de mano" },
  { id: "mochila", label: "Morrales / mochilas" },
  { id: "crossbody", label: "Crossbody" },
  { id: "tote", label: "Tote" },
];

export default function BagExplorer() {
  const [search, setSearch] = useState("");
  const [material, setMaterial] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState<string>(""); // <- NUEVO

  const filteredBags = BAGS.filter((bag) => {
    const matchesSearch = bag.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesMaterial = material ? bag.material === material : true;
    const matchesBrand = brand ? bag.brand === brand : true;
    const matchesCategory = category ? bag.type === category : true; // <- NUEVO

    return (
      matchesSearch && matchesMaterial && matchesBrand && matchesCategory
    );
  });

  return (
    <section
      style={{
        padding: "2.5rem 1.5rem 3rem",
        backgroundColor: "#FFF8F9",
      }}
    >
      <h2
        style={{
          fontSize: "1.75rem",
          fontWeight: "bold",
        }}
      >
        Explora nuestros bolsos
      </h2>
      <p style={{ marginTop: "0.5rem", maxWidth: "600px" }}>
        Usa la barra de búsqueda, las categorías y los filtros por material y
        marca para encontrar el bolso ideal de forma rápida y cómoda.
      </p>

      {/* CATEGORÍAS POR TIPO DE BOLSO */}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          flexWrap: "wrap",
          marginTop: "1.5rem",
          marginBottom: "0.5rem",
        }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id || "all"}
            onClick={() => setCategory(cat.id)}
            style={{
              padding: "0.4rem 0.9rem",
              borderRadius: "999px",
              border:
                category === cat.id
                  ? "2px solid #3B0B1F"
                  : "1px solid #F3C2C7",
              backgroundColor:
                category === cat.id ? "#3B0B1F" : "#FFF5F7",
              color: category === cat.id ? "#FFECEC" : "#3B0B1F",
              fontSize: "0.9rem",
              cursor: "pointer",
              fontWeight: category === cat.id ? "bold" : "normal",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* FILTROS (buscador, material, marca) */}
      <BagFilters
        search={search}
        material={material}
        brand={brand}
        onSearchChange={setSearch}
        onMaterialChange={setMaterial}
        onBrandChange={setBrand}
      />

      {/* GRID DE BOLSOS */}
      <div
        style={{
          marginTop: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filteredBags.map((bag) => (
          <BagCard key={bag.id} bag={bag} />
        ))}
      </div>

      {filteredBags.length === 0 && (
        <p style={{ marginTop: "1.5rem" }}>
          No encontramos bolsos con esos filtros. Prueba cambiando la búsqueda.
        </p>
      )}
    </section>
  );
}
