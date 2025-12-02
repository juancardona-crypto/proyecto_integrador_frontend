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
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl":"",
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
                  "imageUrl":"",
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
                  "imageUrl":"",
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
                  "imageUrl":"",
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
                  "imageUrl":"",
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
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "16",
                  "name": "Mochila Totto Laptop Pro",
                  "brand": "Totto",
                  "material": "tela",
                  "type": "mochila",
                  "price": 235000,
                  "image": "https://images-eu.ssl-images-amazon.com/images/I/71FB4bdqXDL._AC_UL600_SR600,600_.jpg",
                  imageUrl: ""     
                  }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "17",
                  "name": "Crossbody Totto City",
                  "brand": "Totto",
                  "material": "tela",
                  "type": "crossbody",
                  "price": 135000,
                  "image": "https://media.falabella.com/falabellaCO/148142767_01/w=800,h=800,fit=pad",
                  imageUrl: ""                  }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "18",
                  "name": "Crossbody Totto Travel",
                  "brand": "Totto",
                  "material": "tela",
                  "type": "crossbody",
                  "price": 149000,
                  "image": "https://tottoelsalvador.vtexassets.com/arquivos/ids/242796/MA02IND769-25200-N01_1.jpg?v=638977459208030000",
                  imageUrl: ""                  }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "19",
                  "name": "Crossbody Totto Compact",
                  "brand": "Totto",
                  "material": "ecocuero",
                  "type": "crossbody",
                  "price": 159000,
                  "image": "https://tottoco.vtexassets.com/arquivos/ids/623423/MA02SMH005-25260-M5I_1.jpg?v=638966671417330000",
                  imageUrl: ""     
                  }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "20",
                  "name": "Tote Totto Daily",
                  "brand": "Totto",
                  "material": "tela",
                  "type": "tote",
                  "price": 155000,
                  "image": "https://static.dafiti.com.co/p/totto-9080-0400552-1-product.jpg",
                  imageUrl: ""     
                  }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "21",
                  "name": "Tote Totto Studio",
                  "brand": "Totto",
                  "material": "ecocuero",
                  "type": "tote",
                  "price": 185000,
                  "image": "https://posco.com.ar/cdn/shop/files/3693FD5B-CF5E-4D63-96F0-2867821E14C1.jpg?v=1736199699&width=1445",
                  imageUrl: ""     
                  }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "id": "22",
                  "name": "Tote Totto Shopper",
                  "brand": "Totto",
                  "material": "tela",
                  "type": "tote",
                  "price": 169000,
                  "image": "https://totto.com.py/cdn/shop/files/MA02IND745-25200-M5I_1_1_Copy_394x.jpg?v=1761066018",
                  imageUrl: ""     
                  }} />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="bg-gradient from-[#3B0B1F] to-[#5A1A2E] text-[#020202] px-6 py-16 text-center flex flex-col justify-center items-center">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "23",
                  "name": "Bolso Vélez Clásico Cuero",
                  "brand": "Vélez",
                  "material": "cuero",
                  "type": "mano",
                  "price": 420000,
                  "image": "https://cuerosvelezco.vteximg.com.br/arquivos/ids/232003-1563-2344/1032960-02-01-Morral-de-cuero.jpg?v=637841626456000000?1762992000016"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "24",
                  "name": "Bolso Vélez Premium Burdeos",
                  "brand": "Vélez",
                  "material": "cuero",
                  "type": "mano",
                  "price": 465000,
                  "image": "https://m.media-amazon.com/images/I/710KJE828LL._AC_SL1400_.jpg"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "25",
                  "name": "Bolso Vélez Elegancia Café",
                  "brand": "Vélez",
                  "material": "cuero",
                  "type": "mano",
                  "price": 450000,
                  "image": "https://http2.mlstatic.com/D_NQ_NP_890791-MLC54988233818_052023-O.webp"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "26",
                  "name": "Mochila Vélez Urbana Cuero",
                  "brand": "Vélez",
                  "material": "cuero",
                  "type": "mochila",
                  "price": 380000,
                  "image": "https://cuerosvelezco.vteximg.com.br/arquivos/ids/269953-1563-2344/1022428-02-01.jpg?v=638411999952970000?1762992000015"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "27",
                  "name": "Mochila Vélez Estilo Ejecutivo",
                  "brand": "Vélez",
                  "material": "cuero",
                  "type": "mochila",
                  "price": 520000,
                  "image": "https://m.media-amazon.com/images/I/31xAGjH60TL.__AC_SR200,225___.jpg"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "28",
                  "name": "Mochila Vélez Compact Café",
                  "brand": "Vélez",
                  "material": "cuero",
                  "type": "mochila",
                  "price": 399000,
                  "image": "https://cuerosvelezpa.vtexassets.com/arquivos/ids/376476/1038554-11-02-Morral.jpg?v=638973637872000000"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "29",
                  "name": "Crossbody Vélez Minimal",
                  "brand": "Vélez",
                  "material": "cuero",
                  "type": "crossbody",
                  "price": 310000,
                  "image": "https://m.media-amazon.com/images/I/612FHdOSjIL._AC_UY1000_.jpg"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "30",
                  "name": "Crossbody Vélez Burdeos",
                  "brand": "Vélez",
                  "material": "cuero",
                  "type": "crossbody",
                  "price": 330000,
                  "image": "https://http2.mlstatic.com/D_NQ_NP_846922-MLA49172515582_022022-O.webp"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "31",
                  "name": "Crossbody Vélez Essential",
                  "brand": "Vélez",
                  "material": "cuero",
                  "type": "crossbody",
                  "price": 350000,
                  "image": "https://m.media-amazon.com/images/I/71t+0KdobGL._AC_UY1000_.jpg"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "32",
                  "name": "Tote Vélez Suave Beige",
                  "brand": "Vélez",
                  "material": "cuero",
                  "type": "tote",
                  "price": 380000,
                  "image": "https://cuerosvelezco.vteximg.com.br/arquivos/ids/274864-1563-2344/1036790-02-01-Bolso-shopping-de-cuero.jpg?v=638483537575670000?1763337600062"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "33",
                  "name": "Tote Vélez Burgundy",
                  "brand": "Vélez",
                  "material": "cuero",
                  "type": "tote",
                  "price": 410000,
                  "image": "https://popupsbrand.com/cdn/shop/files/BORDEAUX-1.jpg?v=1757761822"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "34",
                  "name": "Tote Vélez Clásico Café",
                  "brand": "Vélez",
                  "material": "cuero",
                  "type": "tote",
                  "price": 395000,
                  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkeX-ND6-WcEhO-D2x89Cya9tppLMldeUvdTqGIRV5ql3wNS2J1ue2FpdEBR9JtoPKoY&usqp=CAU"
                }} />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="bg-gradient from-[#3B0B1F] to-[#5A1A2E] text-[#020202] px-6 py-16 text-center flex flex-col justify-center items-center">
        {/* Aquí puedes agregar el carousel */}
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                {/* Contenido del slide 1 */}
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "35",
                  "name": "Bolso Mano Adidas Classic",
                  "brand": "Adidas",
                  "material": "tela",
                  "type": "mano",
                  "price": 185000,
                  "image": "https://static.dafiti.com.co/p/adidas-originals-1164-0911841-1-zoom.jpg"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "36",
                  "name": "Bolso Mano Adidas Sport Chic",
                  "brand": "Adidas",
                  "material": "ecocuero",
                  "type": "mano",
                  "price": 215000,
                  "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/9dd23a018f8d4ba4b866607b2d767ad3_9366/Bolso_Monogram_Mini_Bowling_Marron_JD5372_01_00_standard.jpg"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "37",
                  "name": "Bolso Mano Adidas Urban",
                  "brand": "Adidas",
                  "material": "cuero",
                  "type": "mano",
                  "price": 245000,
                  "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/bcc8338aaae6452e93f6106adcbc51a5_9366/Bolso_Shopper_Trifolio_Outline_Poliuretano_Negro_JC6000_02_standard.jpg"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "38",
                  "name": "Mochila Adidas Training Day",
                  "brand": "Adidas",
                  "material": "tela",
                  "type": "mochila",
                  "price": 199000,
                  "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/82e24958f6404f6e89f3a3b72986bf7e_9366/Morral_Negro_IP9878_01_standard.jpg"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "39",
                  "name": "Mochila Adidas Campus",
                  "brand": "Adidas",
                  "material": "tela",
                  "type": "mochila",
                  "price": 225000,
                  "image": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c6956657a8243c48ad1b03725449a22_9366/morral-adicolor-clasico.jpg"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "40",
                  "name": "Mochila Adidas Travel Pro",
                  "brand": "Adidas",
                  "material": "ecocuero",
                  "type": "mochila",
                  "price": 269000,
                  "image": "https://www.sportline.com.co/media/catalog/product/h/t/ht4746-1-hardware-photography-front_center_view-transparent.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265&format=jpeg"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "41",
                  "name": "Crossbody Adidas Street",
                  "brand": "Adidas",
                  "material": "tela",
                  "type": "crossbody",
                  "price": 139000,
                  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTxhehVqvhl3zwILTtmjn0t7YBdgpVRTrXg&s"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "42",
                  "name": "Crossbody Adidas Compact",
                  "brand": "Adidas",
                  "material": "ecocuero",
                  "type": "crossbody",
                  "price": 155000,
                  "image": "https://static.ftshp.digital/img/p/1/0/5/5/9/5/9/1055959.jpg"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "43",
                  "name": "Crossbody Adidas Active",
                  "brand": "Adidas",
                  "material": "tela",
                  "type": "crossbody",
                  "price": 169000,
                  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JBpQlo-gyMRZEq-E8Xd4nFchn4NOfQ5pcw&s"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "44",
                  "name": "Tote Adidas Daily",
                  "brand": "Adidas",
                  "material": "tela",
                  "type": "tote",
                  "price": 145000,
                  "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/6bebd334a1d44e43bc2fd04005503f1a_9366/adidas_Prime_Tote_Bag_Grey_JD2262_01_00_standard.jpg"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "45",
                  "name": "Tote Adidas Studio",
                  "brand": "Adidas",
                  "material": "ecocuero",
                  "type": "tote",
                  "price": 189000,
                  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZtBM0zITsa5t2H1KQRbL3Ddco_GNbsXOp01NLQDaDyL6ER3VwirYUo5XWwhpvgP83oU&usqp=CAU"
                }} />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BagCard bag={{
                  "imageUrl": "",
                  "id": "46",
                  "name": "Tote Adidas Weekend",
                  "brand": "Adidas",
                  "material": "tela",
                  "type": "tote",
                  "price": 205000,
                  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZnSAFh7mdQg_2pG2yXVIYCtm1pdgNzJmlg&s"
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