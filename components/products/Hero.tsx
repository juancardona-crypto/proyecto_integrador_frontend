// components/Hero.tsx

export default function Hero() {
  return (
    <section
      style={{
        padding: "4rem 1.5rem",
        textAlign: "center",
        backgroundColor: "#3B0B1F", // vino oscuro
        color: "#FFECEC", // texto clarito
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          letterSpacing: "0.1em",
        }}
      >
        Elden Noir
      </h1>

      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "0.75rem",
        }}
      >
        Tu tienda online de bolsos perfecta
      </h2>

      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto 1.5rem",
        }}
      >
        Explora bolsos por tipo, material y marca, en una experiencia pensada
        para que encuentres tu estilo rápido y sin complicaciones.
      </p>

      <button
        style={{
          padding: "0.75rem 1.5rem",
          borderRadius: "999px",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
          backgroundColor: "#F25C54", // rojo suave
          color: "#3B0B1F",
        }}
      >
        Ver bolsos
      </button>
    </section>
  );
}
