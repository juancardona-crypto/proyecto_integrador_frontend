"use client";
 
import Carousel from "@/components/ui/carousel";

export function CarouselDemo() {
  const slideData = [
    {
      
      src: "https://www.mochilas-bolsos.com/wp-content/uploads/BOLSAS-DE-DEPORTE-TOTTO-mochilas-y-bolsos-1-1.jpg",
    },
    {
      
      src: "https://store-cdn.venndelo.com/shared/imagen-257959.jpg",
    },
    {
      
      src: "https://pbs.twimg.com/media/E0lNSJwXsAc1idJ.jpg",
    },
    {
      
      src: "https://img.freepik.com/psd-premium/diseno-banner-publicacion-redes-sociales-venta-coleccion-bolsos-exclusivos-plantilla-banner-publicacion-instagram_551826-202.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}