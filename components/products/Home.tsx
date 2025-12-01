"use client"

import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";
import BagExplorer from "./BagExplorer";
import BagCard from "./BagCard";

interface HeroProps {
  onCtaClick?: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <>
      <section className="mt-30 mb-10 text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Bienvenidos a Elden Noir</h1>
        <h2 className="text-xl">La mejor selección de bolsos de Medellín</h2>
      </section>
      <section className="ml-85 text-center flex flex-col justify-center items-start">
        <h2 className="text-2xl">En nuestra tienda encontrarás una variedad de bolsos únicos y de alta calidad, así como marcas reconocidas.</h2>
          <div className="w-full h-px bg-gray-600 my-4"></div>
          <h1 className="text-4xl font-bold">Totto</h1>
          <h2 className="text-xl mt-5">Explora la resistencia que acompaña tu ritmo diario. Totto combina diseño, comodidad y durabilidad para quienes nunca se detienen.</h2>

      </section>
      
      
      <section className="bg-gradient from-[#3B0B1F] to-[#5A1A2E] text-[#020202] px-6 py-16 text-center  flex flex-col justify-center items-center">
        {/* Aquí puedes agregar el carousel */}
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                {/* Contenido del slide 1 */}
                <BagCard bag={{
                  "id": "11",
                  "name": "Bolso Mano Totto Urban",
                  "brand": "Totto",
                  "material": "tela",
                  "type": "mano",
                  "price": 165000,
                  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOn83S4G8tkgp2iA-emYMH3gRo_GLSS1CunzoZcg71PwcvIs63WQ8IIFVvPvngGz-8o4&usqp=CAU"

                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "12",
                  "name": "Bolso Mano Totto Rosé",
                  "brand": "Totto",
                  "material": "ecocuero",
                  "type": "mano",
                  "price": 179000,
                  "image": "https://media.falabella.com/falabellaCO/130566282_01/w=800,h=800,fit=pad"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "13",
                  "name": "Bolso Mano Totto Office",
                  "brand": "Totto",
                  "material": "tela",
                  "type": "mano",
                  "price": 189000,
                  "image": "https://officemax.vtexassets.com/arquivos/ids/1382009-800-1067?v=638255613606730000&width=800&height=1067&aspect=true"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "14",
                  "name": "Mochila Totto Campus",
                  "brand": "Totto",
                  "material": "tela",
                  "type": "mochila",
                  "price": 210000,
                  "image": "https://tottobo.vtexassets.com/arquivos/ids/410062/MA04CMP006-25200-M5I_1.jpg?v=638972843031970000"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "15",
                  "name": "Mochila Totto Print Escolar",
                  "brand": "Totto",
                  "material": "tela",
                  "type": "mochila",
                  "price": 195000,
                  "image": "https://m.media-amazon.com/images/I/71ifEytlksL._AC_UY1000_.jpg"     
                  }} />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="bg-gradient from-[#3B0B1F] to-[#5A1A2E] text-[#020202] px-6 py-16 text-center  flex flex-col justify-center items-center">
        {/* Aquí puedes agregar el carousel */}
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                {/* Contenido del slide 1 */}
                <BagCard bag={{
                  "id": "11",
                  "name": "Bolso Mano Totto Urban",
                  "brand": "Totto",
                  "material": "tela",
                  "type": "mano",
                  "price": 165000,
                  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOn83S4G8tkgp2iA-emYMH3gRo_GLSS1CunzoZcg71PwcvIs63WQ8IIFVvPvngGz-8o4&usqp=CAU"

                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "12",
                  "name": "Bolso Mano Totto Rosé",
                  "brand": "Totto",
                  "material": "ecocuero",
                  "type": "mano",
                  "price": 179000,
                  "image": "https://media.falabella.com/falabellaCO/130566282_01/w=800,h=800,fit=pad"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "13",
                  "name": "Bolso Mano Totto Office",
                  "brand": "Totto",
                  "material": "tela",
                  "type": "mano",
                  "price": 189000,
                  "image": "https://officemax.vtexassets.com/arquivos/ids/1382009-800-1067?v=638255613606730000&width=800&height=1067&aspect=true"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "14",
                  "name": "Mochila Totto Campus",
                  "brand": "Totto",
                  "material": "tela",
                  "type": "mochila",
                  "price": 210000,
                  "image": "https://tottobo.vtexassets.com/arquivos/ids/410062/MA04CMP006-25200-M5I_1.jpg?v=638972843031970000"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "15",
                  "name": "Mochila Totto Print Escolar",
                  "brand": "Totto",
                  "material": "tela",
                  "type": "mochila",
                  "price": 195000,
                  "image": "https://m.media-amazon.com/images/I/71ifEytlksL._AC_UY1000_.jpg"     
                  }} />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}