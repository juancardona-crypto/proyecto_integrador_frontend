import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // aquí pones todos los dominios externos que uses en tus imágenes
    domains: [
      "vintage-vogue.shop",
      "images.pexels.com",
      "images.unsplash.com",
    ],
    // si no usas pexels/unsplash los puedes quitar,
    // pero es útil dejarlos por si los usas.
  },
};

export default nextConfig;
