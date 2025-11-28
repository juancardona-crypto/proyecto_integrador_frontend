"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase"; // Asegúrate de que esta conexión a Firebase es correcta
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [comments, setComments] = useState<any[]>([]);

  // 1. 🔥 CARGAR COMENTARIOS (Función que los trae "para siempre")
  useEffect(() => {
    // Consulta la colección 'comments' y ordena por fecha de creación (más reciente primero)
    const q = query(
      collection(db, "comments"),
      orderBy("createdAt", "desc")
    );

    // onSnapshot escucha la base de datos en tiempo real y actualiza el estado 'comments'
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(), // Incluye name, message, y createdAt (fecha)
        }))
      );
    });

    // Esta función de limpieza detiene la escucha cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  // 2. 📌 ENVIAR Y GUARDAR COMENTARIO (Función que los almacena "para siempre")
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) return;

    // *** ESTA LÍNEA GUARDA LOS DATOS DE FORMA PERMANENTE EN FIRESTORE ***
    await addDoc(collection(db, "comments"), {
      name: name.trim(),
      message: message.trim(),
      createdAt: serverTimestamp(), // Usa el timestamp del servidor para la fecha
    });

    setSent(true);
    setName("");
    setMessage("");

    setTimeout(() => setSent(false), 3000);
  };

  return (
    // Se usa mt-20 porque el Navbar es fijo en todos los tamaños
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-10 pb-10 mt-20">
      
      {/* TÍTULO */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-900">
        Comentarios y Sugerencias 💬
      </h1>

      {/* FORMULARIO */}
      {/* Se añade z-10 para asegurar que no se solape con el Navbar (z-50) */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 sm:p-8 shadow-2xl rounded-xl space-y-5 border border-gray-100 relative z-10"
      >
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-base"
          required
        />

        <textarea
          placeholder="Escribe tu mensaje o sugerencia..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-red-500 focus:border-red-500 text-base resize-none"
          required
        />

        <button
          type="submit"
          className="bg-red-700 text-white font-semibold tracking-wide px-4 py-3 rounded-lg hover:bg-red-800 transition duration-300 w-full text-lg shadow-md"
        >
          Enviar comentario
        </button>

        {sent && (
          <p className="text-green-600 text-center font-bold text-base transition-opacity duration-500">
            ✅ ¡Comentario enviado con éxito!
          </p>
        )}
      </form>

      <hr className="my-10 border-t-2 border-gray-200" />

      {/* LISTA DE COMENTARIOS */}
      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 text-gray-800 text-center sm:text-left">
        Comentarios enviados (Últimos)
      </h2>

      <div className="space-y-6">
        {comments.length === 0 && (
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600 text-lg italic">
              Aún no hay comentarios. ¡Sé el primero en dejar uno!
            </p>
          </div>
        )}

        {comments.map((c) => (
          <div
            key={c.id}
            className="bg-white p-5 sm:p-6 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition duration-300"
          >
            {/* Muestra la fecha de publicación, confirmando su persistencia */}
            <h3 className="font-extrabold text-lg sm:text-xl text-red-700 break-words flex items-center justify-between">
              {c.name}
              {c.createdAt?.toDate && (
                <span className="text-sm font-normal text-gray-500 ml-4 whitespace-nowrap">
                  Publicado el{" "}
                  {new Date(c.createdAt.toDate()).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              )}
            </h3>
            <p className="mt-2 text-gray-700 text-base whitespace-pre-wrap break-words">
              {c.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}