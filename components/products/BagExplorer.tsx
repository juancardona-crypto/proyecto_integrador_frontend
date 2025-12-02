// components/BagExplorer.tsx
"use client";

import { useState, useEffect } from "react";
import BagFilters from "./BagFilters";
import BagCard from "./BagCard";
import type { Bag } from "../../types/bag";
import { bagsAPI } from "../../lib/api";

const CATEGORIES = [
  { "id": "", label: "Todos" },
  { "id": "mano", label: "Bolsos de mano" },
  { "id": "mochila", label: "Morrales / mochilas" },
  { "id": "crossbody", label: "Crossbody" },
  { "id": "tote", label: "Tote" },
];

export default function BagExplorer() {
  const [bags, setBags] = useState<Bag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [search, setSearch] = useState("");
  const [material, setMaterial] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState<string>("");

  // Cargar datos de la API
  const fetchBags = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Cargando datos de:', bagsAPI); // Para debug
      
      const data = await bagsAPI.getAllBags();
      console.log('Datos recibidos:', data); // Para debug
      setBags(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      console.error('Error completo:', err); // Para debug
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBags();
  }, []);

  // Filtrado
  const filteredBags = bags.filter((bag) => {
    const matchesSearch = bag.name.toLowerCase().includes(search.toLowerCase());
    const matchesMaterial = material ? bag.material === material : true;
    const matchesBrand = brand ? bag.brand === brand : true;
    const matchesCategory = category ? bag.type === category : true;

    return matchesSearch && matchesMaterial && matchesBrand && matchesCategory;
  });

  if (loading) {
    return (
      <section style={{ padding: "2.5rem 1.5rem 3rem", backgroundColor: "#FFF8F9" }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Cargando bolsos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section style={{ padding: "2.5rem 1.5rem 3rem", backgroundColor: "#FFF8F9" }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h3 style={{ color: '#d32f2f' }}>Error al cargar los bolsos</h3>
          <p style={{ margin: '1rem 0' }}>{error}</p>
          <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
            Verifica tu conexión a internet y la URL de la API
          </p>
          <button 
            onClick={fetchBags}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#3B0B1F',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reintentar
          </button>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: "2.5rem 1.5rem 3rem", backgroundColor: "#FFF8F9" }}>
      
      {/* Resto de tu JSX... */}
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.5rem", marginBottom: "0.5rem" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id || "all"}
            onClick={() => setCategory(cat.id)}
            style={{
              padding: "0.4rem 0.9rem",
              borderRadius: "999px",
              border: category === cat.id ? "2px solid #3B0B1F" : "1px solid #F3C2C7",
              backgroundColor: category === cat.id ? "#3B0B1F" : "#FFF5F7",
              color: category === cat.id ? "#FFECEC" : "#3B0B1F",
              fontSize: "0.9rem",
              cursor: "pointer",
              fontWeight: category === cat.id ? "bold" : "normal",
              display: "flex",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <BagFilters
        search={search}
        material={material}
        brand={brand}
        onSearchChange={setSearch}
        onMaterialChange={setMaterial}
        onBrandChange={setBrand}
      />

      <div style={{ marginTop: "0.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 230px))", gap: "1.5rem" }}>
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