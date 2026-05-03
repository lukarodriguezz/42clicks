"use client";

export function InfiniteSlider({
  children,
  gap = 60,
  reverse = false,
  // Recibimos estas props por si quedaron en el componente padre, pero usamos CSS puro
  speed, 
  speedOnHover,
}: {
  children: React.ReactNode;
  gap?: number;
  reverse?: boolean;
  speed?: number;
  speedOnHover?: number;
}) {
  return (
    <>
      <style>{`
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          /* Se mueve el 100% de su ancho más el espacio (gap) para un bucle perfecto */
          100% { transform: translateX(calc(-100% - ${gap}px)); }
        }
        .animate-scroll-infinite {
          /* 25 segundos es una velocidad elegante y legible */
          animation: scroll-infinite 25s linear infinite;
        }
        .reverse-scroll {
          animation-direction: reverse;
        }
        /* Pausa cuando pasas el mouse por encima (Solo funciona en PC) */
        @media (hover: hover) {
          .group:hover .animate-scroll-infinite {
            animation-play-state: paused;
          }
        }
      `}</style>

      {/* Contenedor principal */}
      <div className="flex overflow-hidden group w-full" style={{ gap: `${gap}px` }}>
        
        {/* Primer bloque de logos */}
        <div 
          className={`flex shrink-0 items-center justify-around animate-scroll-infinite ${reverse ? 'reverse-scroll' : ''}`} 
          style={{ gap: `${gap}px` }}
        >
          {children}
        </div>
        
        {/* Segundo bloque exacto (clon) para hacer la ilusión del infinito */}
        <div 
          className={`flex shrink-0 items-center justify-around animate-scroll-infinite ${reverse ? 'reverse-scroll' : ''}`} 
          style={{ gap: `${gap}px` }} 
          aria-hidden="true"
        >
          {children}
        </div>

      </div>
    </>
  );
}