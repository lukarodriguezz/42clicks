"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Funciones de utilidad para las transiciones de los textos
  const getStepOpacity = (start: number, end: number) => {
    return useTransform(smoothProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  };
  const getStepY = (start: number, end: number) => {
    return useTransform(smoothProgress, [start, start + 0.1, end - 0.1, end], [20, 0, 0, -20]);
  };

  // ---------------------------------------------------------
  // Efecto Transición de Imágenes (5 estados)
  // ---------------------------------------------------------
  
  // Opacidades para cada una de las 5 imágenes según el progreso del scroll
  const img1Opacity = useTransform(smoothProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const img2Opacity = useTransform(smoothProgress, [0.15, 0.2, 0.4, 0.45], [0, 1, 1, 0]);
  const img3Opacity = useTransform(smoothProgress, [0.35, 0.4, 0.6, 0.65], [0, 1, 1, 0]);
  const img4Opacity = useTransform(smoothProgress, [0.55, 0.6, 0.8, 0.85], [0, 1, 1, 0]);
  const img5Opacity = useTransform(smoothProgress, [0.75, 0.8, 1], [0, 1, 1]);

  // Zoom sutil general para inmersión
  const globalScale = useTransform(smoothProgress, [0, 1], [1, 1.05]);

  return (
    <>
      <section ref={containerRef} className="relative h-[500vh] bg-[#050505] text-white selection:bg-primary-container selection:text-[#050505]">
        
        {/* Contenedor Fijo (Sticky) */}
        <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center overflow-hidden">
          
          {/* LUZ DE FONDO (Acento elegante) */}
          <div className="absolute top-1/2 left-[70%] -translate-y-1/2 w-[600px] h-[600px] bg-primary-container rounded-full blur-[200px] opacity-[0.07] pointer-events-none mix-blend-screen"></div>

          {/* COLUMNA IZQUIERDA: NARRATIVA "2.0" (Tipografía contenida, elegante y precisa) */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full px-8 md:pl-[12%] flex items-center z-20">
            <StepContent 
              opacity={getStepOpacity(0, 0.2)} y={getStepY(0, 0.2)}
              tag="42 CLICKS" title={<>La tracción<br/>exacta.</>} 
              desc="La potencia sin control es desperdicio. Diseñamos sistemas de conversión orientados a maximizar el rendimiento de tu tráfico." 
            />
            <StepContent 
              opacity={getStepOpacity(0.2, 0.4)} y={getStepY(0.2, 0.4)}
              tag="01. ABSORCIÓN" title={<>Impacto<br/>controlado.</>} 
              desc="El mercado es inestable. Nuestra estrategia inicial es amortiguar el ruido del ecosistema digital y definir un camino sin fricción hacia la venta." 
            />
            <StepContent 
              opacity={getStepOpacity(0.4, 0.6)} y={getStepY(0.4, 0.6)}
              tag="02. PRESIÓN" title={<>Rendimiento<br/>al límite.</>} 
              desc="Las campañas escalan. Diseñamos funnels de alta tolerancia que no colapsan cuando la exigencia y el volumen de usuarios aumentan de golpe." 
            />
            <StepContent 
              opacity={getStepOpacity(0.6, 0.8)} y={getStepY(0.6, 0.8)}
              tag="03. PRECISIÓN" title={<>Calibración<br/>milimétrica.</>} 
              desc="Cada clic cuenta. Ajustamos la experiencia de usuario y el copy con precisión analítica para asegurar que el recorrido sea directo y letal." 
            />
            <StepContent 
              opacity={getStepOpacity(0.8, 1.0)} y={getStepY(0.8, 1.0)}
              tag="04. NÚCLEO" title={<>Estructura<br/>pura.</>} 
              desc="Al final, lo que queda es una máquina de conversión. Sin humo, sin elementos distractivos. Solamente resultados medibles." 
            />
          </div>

          {/* COLUMNA DERECHA: AMORTIGUADOR REAL (Crossfade de Imágenes) */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center z-10 pointer-events-none pr-0 md:pr-12">
            
            <motion.div 
              style={{ scale: globalScale }}
              className="relative w-full h-full max-w-lg max-h-[80vh] flex items-center justify-center drop-shadow-2xl"
            >
              {/* Estado 1 */}
              <motion.div style={{ opacity: img1Opacity }} className="absolute inset-0 flex items-center justify-center">
                <img src="/images/p1sf.png" alt="Estado 1" className="max-w-full max-h-full object-contain" />
              </motion.div>

              {/* Estado 2 */}
              <motion.div style={{ opacity: img2Opacity }} className="absolute inset-0 flex items-center justify-center">
                <img src="/images/p2sf.png" alt="Estado 2" className="max-w-full max-h-full object-contain" />
              </motion.div>

              {/* Estado 3 */}
              <motion.div style={{ opacity: img3Opacity }} className="absolute inset-0 flex items-center justify-center">
                <img src="/images/p3sf.png" alt="Estado 3" className="max-w-full max-h-full object-contain" />
              </motion.div>

              {/* Estado 4 */}
              <motion.div style={{ opacity: img4Opacity }} className="absolute inset-0 flex items-center justify-center">
                <img src="/images/p4sf.png" alt="Estado 4" className="max-w-full max-h-full object-contain" />
              </motion.div>

              {/* Estado 5 */}
              <motion.div style={{ opacity: img5Opacity }} className="absolute inset-0 flex items-center justify-center">
                <img src="/images/p5sf.png" alt="Estado 5" className="max-w-full max-h-full object-contain" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final Elegante */}
      <section className="h-[60vh] w-full bg-[#050505] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden border-t border-white/5">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-headline text-white text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
            Ensamblá tu proyecto con la <span className="text-primary-container italic">ingeniería correcta.</span>
          </h2>
          <a 
            href="/#contacto" 
            className="inline-block border border-white/20 bg-transparent text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary-container hover:border-primary-container hover:text-[#050505] transition-all duration-300"
          >
            Iniciar Contacto
          </a>
        </div>
      </section>
    </>
  );
}

function StepContent({ opacity, y, tag, title, desc }: any) {
  return (
    <motion.div 
      style={{ opacity, y }}
      className="absolute inset-x-8 md:inset-auto md:w-full max-w-[320px] pointer-events-none"
    >
      <span className="text-primary-container font-bold text-[10px] md:text-xs tracking-[0.2em] mb-4 block uppercase opacity-80">
        {tag}
      </span>
      <h2 className="font-headline text-white text-3xl md:text-5xl font-black italic tracking-tighter mb-5 leading-[1.1] uppercase">
        {title}
      </h2>
      <p className="text-on-surface-variant text-sm md:text-base leading-[1.7] max-w-[280px] font-medium">
        {desc}
      </p>
    </motion.div>
  );
}
