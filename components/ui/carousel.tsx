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

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
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
    <div className="perspective-full mt-16 md:mt-[-1]">
      <li
        ref={slideRef}
        className="flex flex-shrink-0 flex-col items-start justify-start text-center opacity-100 transition-all duration-300 ease-in-out mx-0 px-0 z-1 w-screen h-[70vh] sm:h-[300px] md:h-screen lg:h-screen"
        onClick={() => handleSlideClick(index)}
        
        style={{
          transform:
            current !== index
              ? "scale(0.95) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-white    transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 40), calc(var(--y) / 40), 0)"
                : "none",
          }}
        >
          <img
            className="absolute inset-0 sm:mt-20 sm:w-auto sm:h-auto lg:w-full lg:h-full object-cover transition-all duration-700 ease-in-out"
            style={{
              filter: current === index ? 'brightness(1)' : 'brightness(0.6)',
            }}
            src={src}
            loading="lazy"
            decoding="async"
            alt={`Slide ${index + 1}`}
          />
          
          {current === index && (
            <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent transition-all duration-1000" />
          )}
          
          {/* Overlay de degradado para mejorar legibilidad - más pequeño en móvil */}
          <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t to-transparent" />
        </div>

        <article
          className={`relative p-4 sm:p-6 md:p-8 lg:p-[4vmin] transition-all duration-1000 ease-in-out ${
            current === index 
              ? "opacity-100 visible translate-y-0" 
              : "opacity-0 invisible translate-y-4"
          }`}
        />
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`flex items-center justify-center bg-black/30 backdrop-blur-sm border border-white/30 rounded-full 
                 focus:outline-none hover:bg-black/50 hover:border-white/50 active:scale-95 transition-all duration-200 z-20
                 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
                 focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/30
                 ${type === "previous" ? "rotate-180" : ""}`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight 
        className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" 
      />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
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
    <div className="relative w-screen h-[70vh] sm:h-[75vh] md:h-screen lg:h-screen overflow-hidden mx-0 px-0">
      <ul
        className="absolute flex flex-nowrap w-full h-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      {/* Botón Anterior - más pequeño en móvil */}
      <div className="absolute left-2 sm:left-3 md:left-4 lg:left-6 xl:left-8 top-1/2 transform -translate-y-1/2 z-10">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
      </div>

      {/* Botón Siguiente - más pequeño en móvil */}
      <div className="absolute right-2 sm:right-3 md:right-4 lg:right-6 xl:right-8 top-1/2 transform -translate-y-1/2 z-10">
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>

      {/* Indicadores de posición - más pequeños en móvil */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 md:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full
              ${current === index 
                ? "w-4 h-1 sm:w-5 sm:h-1.5 md:w-6 md:h-2 lg:w-8 lg:h-2" 
                : "w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 hover:w-2 sm:hover:w-3"
              }`}
            onClick={() => handleSlideClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-full h-full rounded-full transition-all duration-300
                ${current === index 
                  ? "bg-black shadow-sm" 
                  : "bg-black/50 hover:bg-white/70"
                }`}
            />
          </button>
        ))}
      </div>

      {/* Flechas de navegación táctil para mobile */}
      <div className="absolute inset-y-0 left-0 w-1/4 sm:hidden z-5" 
           onClick={handlePreviousClick}
           aria-label="Previous slide area" />
      <div className="absolute inset-y-0 right-0 w-1/4 sm:hidden z-5" 
           onClick={handleNextClick}
           aria-label="Next slide area" />
    </div>
  );
}