import Link from "next/link";

interface HeroProps {
  onCtaClick?: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="bg-gradient from-[#3B0B1F] to-[#5A1A2E] text-[#020202] px-6 py-16 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider text-shadow-lg">
        Elden Noir
      </h1>

      <h2 className="text-xl md:text-2xl lg:text-3xl mb-3 font-light opacity-90">
        Tu tienda online de bolsos perfecta
      </h2>

      <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl leading-relaxed opacity-80">
        Explora bolsos por tipo, material y marca, en una experiencia pensada
        para que encuentres tu estilo rápido y sin complicaciones.
      </p>

      <button 
        onClick={onCtaClick}
        className="px-8 py-3 rounded-full font-bold text-lg bg-[#690a05] text-[#040404] shadow-lg shadow-[#F25C54]/30 transition-all duration-300 hover:translate[-2px] hover:shadow-xl hover:shadow-[#F25C54]/40 hover:bg-[#730202] focus:outline-none focus:ring-2 focus:ring-[#690a05] focus:ring-offset-2 focus:ring-offset-[#6e0409]"
      >
        <Link href="/products">Ver bolsos</Link>        
      </button>
    </section>
  );
}