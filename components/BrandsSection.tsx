"use client";

import { InfiniteSlider } from "./InfiniteSlider";

// Logos generados en SVG (Tipografía técnica) para que funcione sin descargar imágenes.
// Más adelante puedes cambiar el "src" por "/images/tu-logo.png"
const mxBrands = [
  { alt: "WP Suspension", src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40'><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='900' font-style='italic' font-size='28' fill='%23ffffff'>WP</text></svg>" },
  { alt: "Showa", src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='150' height='40'><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='900' font-size='24' fill='%23ffffff'>SHOWA</text></svg>" },
  { alt: "KYB", src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40'><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='900' font-style='italic' font-size='28' fill='%23ffffff'>KYB</text></svg>" },
  { alt: "Öhlins", src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='40'><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='900' font-size='24' fill='%23ffffff'>ÖHLINS</text></svg>" },
  { alt: "SKF", src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40'><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='900' font-size='28' fill='%23ffffff'>SKF</text></svg>" },
  { alt: "Motorex", src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='40'><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='900' font-size='24' fill='%23ffffff'>MOTOREX</text></svg>" },
];

export default function BrandsSection() {
  return (
    <section className="py-16 bg-background border-b border-outline-variant/10 relative overflow-hidden">
      
      {/* Resplandor de fondo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary-container/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-primary-container font-bold uppercase tracking-[0.2em] text-[10px] mb-2">
            Componentes Originales
          </p>
          <h2 className="font-headline text-white text-2xl md:text-3xl font-black italic uppercase tracking-tighter">
            Trabajamos con <span className="text-on-surface-variant">La Élite</span>
          </h2>
        </div>

        {/* Contenedor del Carrusel con máscara de difuminado en los bordes */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <InfiniteSlider gap={60} reverse speed={50} speedOnHover={25}>
            {mxBrands.map((logo) => (
              <img
                key={`logo-${logo.alt}`}
                src={logo.src}
                alt={logo.alt}
                className="pointer-events-none h-8 md:h-10 select-none opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}