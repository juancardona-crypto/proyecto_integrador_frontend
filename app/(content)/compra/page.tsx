"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BAGS } from "../../../lib/bags";
import type { Bag } from "../../../types/bag";

export default function CompraPage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");

  const bag: Bag | undefined = BAGS.find(
    (b) => b.id === Number(productId)
  );

  // Si no hay productId o no se encuentra el bolso
  if (!productId || !bag) {
    return (
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#FFF0F4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFF5F7",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
            textAlign: "center",
            maxWidth: "420px",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#3B0B1F",
            }}
          >
            No se encontró el bolso
          </h1>
          <p style={{ marginBottom: "1.5rem" }}>
            Parece que no se envió correctamente la información del producto.
          </p>

          <Link href="/products" style={{ textDecoration: "none" }}>
            <button
              type="button"
              style={{
                padding: "0.6rem 1.4rem",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#3B0B1F",
                color: "#FFECEC",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Volver al catálogo
            </button>
          </Link>
        </div>
      </main>
    );
  }

  // Si sí hay bolso encontrado
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFF0F4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
      }}
    >
      <section
        style={{
          backgroundColor: "#FFF5F7",
          borderRadius: "1.25rem",
          padding: "2rem",
          maxWidth: "780px",
          width: "100%",
          boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
          gap: "1.5rem",
        }}
      >
        {/* Columna izquierda: resumen del bolso */}
        <div>
          <h1
            style={{
              fontSize: "1.6rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#3B0B1F",
            }}
          >
            Resumen de compra
          </h1>

          <div
            style={{
              backgroundColor: "#FFE7EC",
              borderRadius: "1rem",
              padding: "1rem",
              marginBottom: "1.5rem",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            {bag.image && (
              <Image
                src={bag.image}
                alt={bag.name}
                width={140}
                height={120}
                style={{
                  width: "140px",
                  height: "120px",
                  borderRadius: "0.75rem",
                  objectFit: "cover",
                }}
              />
            )}

            <div>
              <h2
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  marginBottom: "0.4rem",
                }}
              >
                {bag.name}
              </h2>
              <p style={{ marginBottom: "0.2rem" }}>
                Marca: <strong>{bag.brand}</strong>
              </p>
              <p style={{ marginBottom: "0.2rem" }}>
                Material: <strong>{bag.material}</strong>
              </p>
              <p style={{ marginBottom: "0.4rem" }}>
                Tipo: <strong>{bag.type}</strong>
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.05rem",
                }}
              >
                Total: ${bag.price.toLocaleString()}
              </p>
            </div>
          </div>

          <p style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
            Elden Noir garantiza el envio de productos en buen estdo y a tiempo. Si tienes
            alguna duda sobre tu compra, no dudes en contactarnos a través de
            nuestras redes sociales o correo electrónico. ¡Gracias por elegirnos!.
          </p>
        </div>

        {/* Columna derecha: formulario simple */}
        <div
          style={{
            backgroundColor: "#FFEFF3",
            borderRadius: "1rem",
            padding: "1.25rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              marginBottom: "0.75rem",
              color: "#3B0B1F",
            }}
          >
            Datos del comprador
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <label style={{ fontSize: "0.9rem" }}>
              Nombre completo
              <input
                type="text"
                placeholder="Escribe tu nombre"
                style={{
                  width: "100%",
                  marginTop: "0.25rem",
                  padding: "0.45rem 0.6rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #F3C2C7",
                  outline: "none",
                }}
              />
            </label>

            <label style={{ fontSize: "0.9rem" }}>
              Correo electrónico
              <input
                type="email"
                placeholder="tucorreo@ejemplo.com"
                style={{
                  width: "100%",
                  marginTop: "0.25rem",
                  padding: "0.45rem 0.6rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #F3C2C7",
                  outline: "none",
                }}
              />
            </label>

            <label style={{ fontSize: "0.9rem" }}>
              Dirección de envío
              <textarea
                placeholder="Barrio, calle, número de casa, ciudad..."
                rows={3}
                style={{
                  width: "100%",
                  marginTop: "0.25rem",
                  padding: "0.45rem 0.6rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #F3C2C7",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </label>

            <button
              type="submit"
              style={{
                marginTop: "0.75rem",
                width: "100%",
                padding: "0.55rem 1rem",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#3B0B1F",
                color: "#FFECEC",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Confirmar compra (simulada)
            </button>
          </form>

          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <Link href="/products" style={{ textDecoration: "none" }}>
              <button
                type="button"
                style={{
                  padding: "0.45rem 1rem",
                  borderRadius: "999px",
                  border: "none",
                  backgroundColor: "#F3C2C7",
                  color: "#3B0B1F",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
              >
                Volver al catálogo
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
