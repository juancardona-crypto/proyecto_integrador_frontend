import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Bag } from "../../types/bag";

type BagCardProps = {
  bag: Bag;
};

export default function BagCard({ bag }: BagCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleComprarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(true);
  };

  return (
    <>
      <Link
        href={`/products/${bag.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            width: "230px",
            height: "400px",
            borderRadius: "0.75rem",
            padding: "0.5rem",
            backgroundColor: "#FFF5F7",
            border: "1px solid #F3C2C7",
            transition: "transform 0.18s ease, box-shadow 0.18s ease",
            cursor: "pointer",
            transformOrigin: "center bottom",
            boxShadow: isHovered
              ? "0 12px 24px rgba(0,0,0,0.12)"
              : "0 0 0 rgba(0,0,0,0)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Imagen */}
          {bag.image ? (
            <Image
              src={bag.image}
              alt={bag.name}
              width={230}
              height={180}
              style={{
                width: "230px",
                height: "180px",
                objectFit: "cover",
                borderRadius: "0.5rem",
                marginBottom: "0.75rem",
              }}
            />
          ) : (
            <div
              style={{
                height: "180px",
                borderRadius: "0.5rem",
                marginBottom: "0.75rem",
                background:
                  "linear-gradient(135deg, #3B0B1F 0%, #F25C54 50%, #FFC7C2 100%)",
              }}
            />
          )}

          {/* Información */}
          <div>
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
            <strong style={{ display: "block", marginBottom: "0.75rem" }}>
              ${bag.price.toLocaleString()}
            </strong>

            {/* Botón Comprar debajo del precio */}
            <button
              type="button"
              onClick={handleComprarClick}
              style={{
                width: "100%",
                padding: "0.5rem 1rem",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#3B0B1F",
                color: "#FFECEC",
                fontWeight: "bold",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              Comprar
            </button>
          </div>
        </div>
      </Link>

      {/* Modal / mensaje emergente */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#FFF5F7",
              borderRadius: "1rem",
              padding: "1.5rem",
              maxWidth: "360px",
              width: "90%",
              boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
              textAlign: "center",
            }}
          >
            {/* Imagen dentro del modal */}
            {bag.image && (
              <Image
                src={bag.image}
                alt={bag.name}
                width={280}
                height={180}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "0.75rem",
                  marginBottom: "1rem",
                }}
              />
            )}

            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                color: "#3B0B1F",
              }}
            >
              {bag.name}
            </h3>

            <p style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
              Marca: <strong>{bag.brand}</strong>
            </p>

            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                marginBottom: "1.3rem",
              }}
            >
              Precio: ${bag.price.toLocaleString()}
            </p>

            <button
              type="button"
              onClick={() => setShowModal(false)}
              style={{
                padding: "0.5rem 1.2rem",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#3B0B1F",
                color: "#FFECEC",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
