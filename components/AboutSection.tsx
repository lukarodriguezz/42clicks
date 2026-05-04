"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useMounted } from "@/hooks/use-mounted";

export default function AboutSection() {
  const mounted = useMounted();
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (mounted) {
      const checkDesktop = () => setIsDesktop(window.innerWidth > 1024);
      checkDesktop();
      window.addEventListener("resize", checkDesktop);
      return () => window.removeEventListener("resize", checkDesktop);
    }
  }, [mounted]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={containerRef} id="nosotros" className="py-24 bg-[#020202] relative overflow-hidden border-b border-white/5">
      {/* Background Typography - Hid on small mobile to avoid clutter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none opacity-[0.02] hidden sm:flex">
        <span className="font-headline text-[25vw] font-black italic uppercase leading-none text-white whitespace-nowrap">
          LEGADO
        </span>
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
        
        {/* Lado Imagen */}
        <motion.div 
          style={{ y: y1 }}
          className="lg:col-span-6 relative group overflow-hidden h-[350px] sm:h-[500px] md:h-[650px] rounded-sm"
        >
          <div className="absolute inset-0 bg-[#050505]/30 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
          <img 
            src="/images/ktm-42.png" 
            alt="Moto KTM" 
            className="w-full h-full object-cover grayscale-[100%] contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" 
          />
        </motion.div>

        {/* Lado Texto */}
        <motion.div 
          style={{ y: isDesktop ? y2 : 0 }}
          className="lg:col-span-6 bg-[#0a0a0a] p-8 sm:p-12 md:p-16 lg:p-20 relative z-20 border border-white/5 lg:-ml-10 lg:mt-24 shadow-2xl flex flex-col justify-center rounded-sm"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-8 h-[1px] bg-primary-container"></div>
            <span className="text-primary-container text-[9px] font-bold uppercase tracking-[0.3em]">ADN 42Clicks</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-8 leading-[0.9] text-white">
            Ingeniería <br/> <span className="text-on-surface-variant/30">De Campeones</span>
          </h2>
          
          <p className="text-white/60 mb-10 leading-relaxed text-xs sm:text-sm uppercase tracking-widest font-medium max-w-sm">
            En 42CLICKS, no solo reparamos suspensiones; redefinimos la dinámica de conducción. Nuestra filosofía se basa en la obsesión por el detalle técnico.
          </p>
          
          <div className="grid grid-cols-2 gap-6 sm:gap-10 border-t border-white/10 pt-10">
            <div>
              <div className="font-headline text-3xl sm:text-4xl font-black italic text-primary-container mb-2 leading-none">15<span className="text-xl">+</span></div>
              <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Años de Evolución</div>
            </div>
            <div>
              <div className="font-headline text-3xl sm:text-4xl font-black italic text-primary-container mb-2 leading-none">42</div>
              <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Clicks de Ajuste</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}