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
  const [isLoaded, setIsLoaded] = useState(false);

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

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const { src } = slide;

  return (
    <li
      ref={slideRef}
      className="flex flex-shrink-0 items-center justify-center w-screen h-screen px-4"
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Contenedor de la imagen con tamaño limitado */}
      <div className="relative w-full max-w-4xl h-[70vh] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black transition-all duration-300 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 50), calc(var(--y) / 50), 0)"
                : "none",
          }}
        >
          {/* Imagen centrada con object-contain */}
          <img
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: current === index ? 'scale(1)' : 'scale(1.05)',
              filter: current === index ? 'brightness(1)' : 'brightness(0.7)',
            }}
            src={src}
            onLoad={handleImageLoad}
            loading="lazy"
            alt={`Slide ${index + 1}`}
          />
          
          {/* Overlay para mejorar contraste */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          
          {/* Marco sutil */}
          <div className="absolute inset-0 border-2 border-white/10 rounded-2xl" />
        </div>
        
        {/* Indicador de slide activo */}
        {current === index && (
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
            {index + 1} / 4
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
      className={`w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg focus:outline-none hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 z-20 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight 
        className="text-gray-700" 
        size={20}
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
    <div className="relative w-full h-[80vh] overflow-hidden">
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
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
        <CarouselControlCentered
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
      </div>

      {/* Botón Siguiente */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
        <CarouselControlCentered
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>

      {/* Indicadores de posición mejorados */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`relative transition-all duration-300 ${
              current === index 
                ? "w-12" 
                : "w-2 hover:w-4"
            }`}
            onClick={() => handleSlideClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index 
                  ? "bg-gradient from-blue-500 to-purple-500 shadow-lg" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
            {current === index && (
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700 whitespace-nowrap">
                {index + 1}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}