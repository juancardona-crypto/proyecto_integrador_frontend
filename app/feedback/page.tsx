"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase"; 
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [comments, setComments] = useState<any[]>([]);

  // 🔥 Cargar comentarios en tiempo real
  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  // 📌 Enviar comentario
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await addDoc(collection(db, "comments"), {
      name,
      message,
      createdAt: serverTimestamp(),
    });

    setSent(true);
    setName("");
    setMessage("");

    setTimeout(() => setSent(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Comentarios y Sugerencias
      </h1>

      {/* FORMULARIO */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-xl space-y-4"
      >
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          placeholder="Escribe tu mensaje o sugerencia..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded h-28"
          required
        />

        <button
          type="submit"
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 w-full"
        >
          Enviar comentario
        </button>

        {sent && (
          <p className="text-green-600 text-center font-medium">
            ¡Comentario enviado!
          </p>
        )}
      </form>

      <h2 className="text-2xl font-bold mt-10 mb-4">Comentarios enviados</h2>

      <div className="space-y-4">
        {comments.length === 0 && (
          <p className="text-gray-600">No hay comentarios todavía.</p>
        )}

        {comments.map((c) => (
          <div
            key={c.id}
            className="bg-gray-100 p-4 rounded-lg shadow"
          >
            <h3 className="font-bold text-lg">{c.name}</h3>
            <p className="mt-2">{c.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
