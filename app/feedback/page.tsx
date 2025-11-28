"use client";

import { useEffect, useState } from "react";
 
interface Comment {
  id: number;
  name: string;
  message: string;
  createdAt: string; 
}

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);  

 
  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/comments", {
        method: "GET",
        cache: "no-store",  
      });

      if (!response.ok) {
        throw new Error("Fallo al cargar los comentarios.");
      }

      const data: Comment[] = await response.json();
    
      setComments(data);
    } catch (error) {
      console.error("Error al cargar comentarios:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanMessage) return;

    try {
  
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: cleanName, message: cleanMessage }),
      });

      if (!res.ok) {
        throw new Error("Fallo al guardar el comentario.");
      }
      
      const newComment: Comment = await res.json();
      
     
      setComments((prevComments) => [newComment, ...prevComments]); 

      setSent(true);
      setName("");
      setMessage("");

      setTimeout(() => setSent(false), 3000);
    } catch (error) {
        console.error("Error al enviar el comentario:", error);
        alert("Ocurrió un error al enviar el comentario.");
    }
  };

  return (
  
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-10 pb-10 md:mt-20">
      
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-900">
        Comentarios y Sugerencias  
      </h1>

    
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 sm:p-8 shadow-2xl rounded-xl space-y-5 border border-gray-100"
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
            Comentario enviado con éxito
          </p>
        )}
      </form>

      <hr className="my-10 border-t-2 border-gray-200" />

     
      <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-6 text-gray-800 text-center sm:text-left">
        Comentarios enviados 
      </h2>

      {isLoading && (
         <div className="text-center p-8">
            <p className="text-gray-600 text-lg">Cargando comentarios</p>
         </div>
      )}
      
      {!isLoading && comments.length === 0 && (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-lg italic">
            Aún no hay comentarios, sea el primero.
          </p>
        </div>
      )}

      <div className="space-y-6">
        {comments.map((c) => (
          <div
            key={c.id}
            className="bg-white p-5 sm:p-6 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition duration-300"
          >
            <h3 className="font-extrabold text-lg sm:text-xl text-red-700 break-words flex items-center justify-between">
              {c.name}
            
              <span className="text-xs font-normal text-gray-500 ml-2 whitespace-nowrap">
                (
                  {new Date(c.createdAt).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                )
              </span>
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