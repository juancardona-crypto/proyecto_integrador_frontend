"use client";

import Carousel from "../ui/carousel";
import CarouselCentered from "../products/carousel-centered"; // Nueva versión

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
    <div className="relative overflow-hidden w-full h-full">
      <Carousel slides={slideData} />
    </div>
  );
}

export function CarouselDemo2() {
  const slideData = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMpFHVjJXPbNvPE47J8mukm6XDH7P7O2Ya46bY2yKOHaaRfPxc6vbu9VDBb5307HV0S4&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGchTOrmmCT6ua6q5ZMV9D4hbN6MVKyg1Q9Tl0WT4Ts0gGlip9bhIC8f-E1Dvy30k-S_U&usqp=CAU",
    },
    {
      src: "https://www.e-woodproducts.com/cdn/shop/files/luxeline-logo_700x700.png?v=1748860942",
    },
    {
      src: "https://ams3.digitaloceanspaces.com/graffica/2022/12/Adidas-Logo-1971.jpeg",
    },
  ];
  
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <CarouselCentered slides={slideData} />
    </div>
  );
}