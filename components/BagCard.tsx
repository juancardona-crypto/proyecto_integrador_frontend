// components/BagCard.tsx
import Link from "next/link";
import type { Bag } from "../types/bag";

type BagCardProps = {
  bag: Bag;
};

export default function BagCard({ bag }: BagCardProps) {
  return (
    <Link
      href={`/products/${bag.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <article
        style={{
          borderRadius: "0.75rem",
          padding: "1rem",
          backgroundColor: "#FFF5F7",
          border: "1px solid #F3C2C7",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
        }}
      >
        <div
          style={{
            height: "140px",
            borderRadius: "0.5rem",
            marginBottom: "0.75rem",
            background:
              "linear-gradient(135deg, #3B0B1F 0%, #F25C54 50%, #FFC7C2 100%)",
          }}
        />

        <h3
          style={{
            fontWeight: "bold",
            marginBottom: "0.25rem",
          }}
        >
          {bag.name}
        </h3>
        <p style={{ marginBottom: "0.25rem" }}>Marca: {bag.brand}</p>
        <p style={{ marginBottom: "0.25rem" }}>Material: {bag.material}</p>
        <p style={{ marginBottom: "0.5rem" }}>Tipo: {bag.type}</p>
        <strong>${bag.price.toLocaleString()}</strong>
      </article>
    </Link>
  );
}
