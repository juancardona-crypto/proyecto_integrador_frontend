// components/BagFilters.tsx

type BagFiltersProps = {
  search: string;
  material: string;
  brand: string;
  onSearchChange: (value: string) => void;
  onMaterialChange: (value: string) => void;
  onBrandChange: (value: string) => void;
};

export default function BagFilters({
  search,
  material,
  brand,
  onSearchChange,
  onMaterialChange,
  onBrandChange,
}: BagFiltersProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        gap: "1rem",
        marginTop: "1.5rem",
      }}
    >
      <input
        type="text"
        placeholder="Buscar bolso por nombre..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          padding: "0.6rem 0.75rem",
          borderRadius: "999px",
          border: "1px solid #F3C2C7",
        }}
      />

      <select
        value={material}
        onChange={(e) => onMaterialChange(e.target.value)}
        style={{
          padding: "0.6rem 0.75rem",
          borderRadius: "999px",
          border: "1px solid #F3C2C7",
        }}
      >
        <option value="">Todos los materiales</option>
        <option value="cuero">Cuero</option>
        <option value="ecocuero">Ecocuero</option>
        <option value="tela">Tela</option>
      </select>

      <select
        value={brand}
        onChange={(e) => onBrandChange(e.target.value)}
        style={{
          padding: "0.6rem 0.75rem",
          borderRadius: "999px",
          border: "1px solid #F3C2C7",
        }}
      >
        <option value="">Todas las marcas</option>
        <option value="Eleganza">Eleganza</option>
        <option value="UrbanBag">UrbanBag</option>
        <option value="LuxeLine">LuxeLine</option>
      

       {/* Nuevas marcas */}
       <option value="Vélez">Vélez</option>
       <option value="Totto">Totto</option>
       <option value="Adidas">Adidas</option>
       <option value="Nike">Nike</option>
      </select>
    </div>
  );
}
