 
export const runtime = "nodejs"; 

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

 
const filePath = path.join(process.cwd(), "data", "comments.json");

 
export async function GET() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const comments = JSON.parse(data);
    return NextResponse.json(comments);
  } catch (error) {
  
    return NextResponse.json([]); 
  }
}

 
export async function POST(request: Request) {
 
  const { name, message } = await request.json();

  if (!name || !message) {
    return NextResponse.json(
      { error: "Todos los campos son obligatorios" },
      { status: 400 }
    );
  }

  let comments = [];

  try {
     
    const data = fs.readFileSync(filePath, "utf8");
    comments = JSON.parse(data);
  } catch (error) {
  
    console.warn("Archivo comments.json no encontrado o inválido. Creando nuevo array.");
  }

  const newComment = {
    id: Date.now(),
    name,
    message,
    createdAt: new Date().toISOString(),
  };

  comments.unshift(newComment);

  try {
  
    fs.writeFileSync(filePath, JSON.stringify(comments, null, 2));
  } catch (writeError) {
    console.error("Error FATAL al escribir en comments.json:", writeError);
    return NextResponse.json({ error: "Error de servidor al guardar el archivo." }, { status: 500 });
  }

  return NextResponse.json(newComment);
}