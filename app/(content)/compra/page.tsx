"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";

export default function CompraPage() {
  const { items: cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
          maxWidth: "900px",
          width: "100%",
          boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)",
          gap: "1.5rem",
        }}
      >
        {/* Izquierda: lista de productos */}
        <div>
          <h1
            style={{
              fontSize: "1.6rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#3B0B1F",
            }}
          >
            Tu carrito 🛒
          </h1>

          {cartItems.length === 0 ? (
            <div
              style={{
                backgroundColor: "#FFE7EC",
                borderRadius: "1rem",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <p style={{ marginBottom: "1rem" }}>
                Aún no tienes bolsos en el carrito.
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
                  Ir al catálogo
                </button>
              </Link>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.9rem",
                maxHeight: "430px",
                overflowY: "auto",
                paddingRight: "0.3rem",
              }}
            >
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: "#FFE7EC",
                    borderRadius: "1rem",
                    padding: "0.9rem",
                    display: "flex",
                    gap: "0.9rem",
                    alignItems: "center",
                  }}
                >
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={110}
                      height={90}
                      style={{
                        width: "110px",
                        height: "90px",
                        borderRadius: "0.75rem",
                        objectFit: "cover",
                      }}
                    />
                  )}

                  <div style={{ flex: 1 }}>
                    <h2
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {item.name}
                    </h2>
                    <p style={{ marginBottom: "0.2rem", fontSize: "0.9rem" }}>
                      Marca: <strong>{item.brand}</strong>
                    </p>
                    <p style={{ marginBottom: "0.2rem", fontSize: "0.9rem" }}>
                      Material: <strong>{item.material}</strong>
                    </p>
                    <p style={{ marginBottom: "0.3rem", fontSize: "0.9rem" }}>
                      Tipo: <strong>{item.type}</strong>
                    </p>
                    <p style={{ fontSize: "0.9rem" }}>
                      Cantidad: <strong>{item.quantity}</strong>
                    </p>
                  </div>

                  {/* 👉 Zona derecha: subtotal + botón QUITAR */}
                  <div style={{ textAlign: "right", minWidth: "120px" }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "0.95rem",
                      }}
                    >
                      ${item.price.toLocaleString()}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "#7A3C50",
                      }}
                    >
                      Subtotal:{" "}
                      <strong>
                        {(item.price * item.quantity).toLocaleString()}
                      </strong>
                    </p>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        marginTop: "0.4rem",
                        padding: "0.25rem 0.8rem",
                        borderRadius: "999px",
                        border: "none",
                        backgroundColor: "#F3C2C7",
                        color: "#3B0B1F",
                        fontSize: "0.8rem",
                        cursor: "pointer",
                      }}
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Derecha: resumen + formulario */}
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
            Resumen de la compra
          </h2>

          <div
            style={{
              backgroundColor: "#FFE7EC",
              borderRadius: "0.9rem",
              padding: "0.9rem",
              marginBottom: "1rem",
            }}
          >
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.3rem",
              }}
            >
              <span>Productos:</span>
              <strong>{cartItems.length}</strong>
            </p>

            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.6rem",
              }}
            >
              <span>Total a pagar:</span>
              <strong>${total.toLocaleString()}</strong>
            </p>
          </div>

          <h3
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#3B0B1F",
            }}
          >
            Datos del comprador
          </h3>

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
              onClick={clearCart}
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
                Seguir comprando
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
