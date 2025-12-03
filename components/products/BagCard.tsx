"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Bag } from "../../types/bag";
import { useCart } from "@/contexts/CartContext";

type BagCardProps = {
  bag: Bag;
};

export default function BagCard({ bag }: BagCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();

  const handleComprarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(bag);
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
            // 📱 Responsive
            width: "100%",
            maxWidth: "280px",
            minHeight: "380px",
            margin: "0 auto",

            // 🎨 Estilos visuales
            borderRadius: "1rem",
            padding: "0.75rem",
            background:
              "linear-gradient(180deg, #FFE5EC 0%, #FFF5F7 40%, #FFFFFF 100%)",
            border: isHovered ? "1px solid #e11d48" : "1px solid #F3C2C7",
            boxShadow: isHovered
              ? "0 16px 32px rgba(0,0,0,0.15)"
              : "0 6px 14px rgba(0,0,0,0.06)",
            transition:
              "transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease",
            cursor: "pointer",
            transform: isHovered
              ? "scale(1.04) translateY(-4px)"
              : "scale(1)",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Imagen */}
          {bag.image ? (
            <div
              style={{
                width: "100%",
                marginBottom: "0.75rem",
                borderRadius: "0.75rem",
                overflow: "hidden",
                backgroundColor: "#FEE2E2",
              }}
            >
              <Image
                src={bag.image}
                alt={bag.name}
                width={400}
                height={300}
                style={{
                  width: "100%",
                  height: "190px",
                  objectFit: "cover",
                  display: "block",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.25s ease",
                }}
              />
            </div>
          ) : (
            <div
              style={{
                height: "190px",
                borderRadius: "0.75rem",
                marginBottom: "0.75rem",
                background:
                  "linear-gradient(135deg, #3B0B1F 0%, #F25C54 50%, #FFC7C2 100%)",
              }}
            />
          )}

          {/* Información */}
          <div style={{ fontSize: "0.9rem" }}>
            <h3
              style={{
                fontWeight: 700,
                marginBottom: "0.3rem",
                fontSize: "1rem",
                color: "#3B0B1F",
              }}
            >
              {bag.name}
            </h3>
            <p style={{ marginBottom: "0.2rem" }}>
              <strong>Marca:</strong> {bag.brand}
            </p>
            <p style={{ marginBottom: "0.2rem" }}>
              <strong>Material:</strong> {bag.material}
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Tipo:</strong> {bag.type}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.8rem",
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#3B0B1F",
                }}
              >
                ${bag.price.toLocaleString()}
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "999px",
                  backgroundColor: "#FCE7F3",
                  color: "#9D174D",
                  fontWeight: 600,
                }}
              >
                En stock
              </span>
            </div>

            {/* Botón Comprar */}
            <button
              type="button"
              onClick={handleComprarClick}
              style={{
                width: "100%",
                padding: "0.55rem 1rem",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#3B0B1F",
                color: "#FFECEC",
                fontWeight: "bold",
                fontSize: "0.9rem",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0,0,0,0.18)",
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

            <p style={{ marginBottom: "1rem", fontSize: "0.9rem" }}>
              ✅ Este bolso se ha agregado a tu carrito.
            </p>

            {/* Botones dentro del modal */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                alignItems: "center",
              }}
            >
              {/* Botón: Ir al carrito */}
              <Link
                href="/compra"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <button
                  type="button"
                  style={{
                    width: "100%",
                    padding: "0.6rem 1.2rem",
                    borderRadius: "999px",
                    border: "none",
                    backgroundColor: "#3B0B1F",
                    color: "#FFECEC",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Ir al carrito
                </button>
              </Link>

              {/* Botón Seguir comprando */}
              <button
                type="button"
                onClick={() => setShowModal(false)}
                style={{
                  padding: "0.5rem 1.2rem",
                  borderRadius: "999px",
                  border: "none",
                  backgroundColor: "#F3C2C7",
                  color: "#3B0B1F",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Seguir comprando
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
