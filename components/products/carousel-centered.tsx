"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const SlideCentered = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src } = slide;

  return (
    <li
      ref={slideRef}
      className="flex flex-shrink-0 items-center justify-center w-screen h-full px-4 md:px-6 lg:px-8 xl:px-12"
      onClick={() => handleSlideClick(index)}
      
    >
      {/* Contenedor principal - tamaño proporcional por dispositivo */}
      <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] 
                     max-w-[95vw] sm:max-w-[85vw] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 
                     rounded-xl md:rounded-2xl lg:rounded-3xl 
                     overflow-hidden shadow-lg md:shadow-xl lg:shadow-2xl 
                     transition-all duration-500">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black transition-all duration-300 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 50), calc(var(--y) / 50), 0)"
                : "none",
          }}
        >
          {/* Imagen - mismo object-fit en todos los dispositivos */}
          <img
            className="absolute inset-0 w-full h-full transition-all duration-700 object-cover"
            style={{
              transform: current === index ? 'scale(1)' : 'scale(1.05)',
              filter: current === index ? 'brightness(1)' : 'brightness(0.7)',
            }}
            src={src}
            loading="lazy"
            alt={`Slide ${index + 1}`}
          />
          
          {/* Overlay consistente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          
          {/* Marco sutil */}
          <div className="absolute inset-0 border border-white/10 md:border-2 lg:border-2 border-white/15 rounded-xl md:rounded-2xl lg:rounded-3xl" />
        </div>
        
        {/* Indicador de slide */}
        {current === index && (
          <div className="absolute top-3 right-3 md:top-4 md:right-4 lg:top-5 lg:right-5 
                         bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full 
                         text-white text-sm md:text-base font-medium">
            {index + 1} / {4}
          </div>
        )}
      </div>
    </li>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControlCentered = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`flex items-center justify-center bg-white/90 backdrop-blur-sm border border-gray-200 
                 rounded-full shadow-lg hover:bg-white active:scale-95 transition-all duration-200 z-20
                 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                 ${type === "previous" ? "rotate-180" : ""}`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight 
        className="text-gray-700 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" 
      />
    </button>
  );
};

interface CarouselCenteredProps {
  slides: SlideData[];
}

export default function CarouselCentered({ slides }: CarouselCenteredProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] overflow-hidden">
      <ul
        className="absolute flex flex-nowrap w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <SlideCentered
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      {/* Botón Anterior */}
      <div className="absolute left-3 md:left-4 lg:left-6 xl:left-8 top-1/2 transform -translate-y-1/2 z-10">
        <CarouselControlCentered
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
      </div>

      {/* Botón Siguiente */}
      <div className="absolute right-3 md:right-4 lg:right-6 xl:right-8 top-1/2 transform -translate-y-1/2 z-10">
        <CarouselControlCentered
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>

      {/* Indicadores de posición - tamaño adaptativo */}
      <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 lg:space-x-4 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`relative transition-all duration-300 focus:outline-none rounded-full
              ${current === index 
                ? "w-8 h-2 md:w-10 md:h-2 lg:w-12 lg:h-3" 
                : "w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 hover:w-3 md:hover:w-4"
              }`}
            onClick={() => handleSlideClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-full h-full rounded-full transition-all duration-300
                ${current === index 
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-md" 
                  : "bg-gray-300/70 hover:bg-gray-400"
                }`}
            />
          </button>
        ))}
      </div>

      {/* Contador de slides - visible siempre */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 
                     bg-white/90 md:bg-white/80 backdrop-blur-sm 
                     rounded-full px-3 py-1.5 text-sm md:text-base font-medium text-gray-700 z-10">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
}