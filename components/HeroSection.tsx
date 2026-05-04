"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="inicio" 
      className="relative flex flex-col justify-center overflow-hidden bg-[#050505] pt-32 pb-24 sm:pt-40 sm:pb-32 md:pt-48 md:pb-40"
    >
      {/* Noise Overlay */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0 origin-top"
        style={{ y: yBackground }}
      >
        <div className="absolute inset-0 bg-[#050505]/40 mix-blend-multiply z-10"></div>
        <img 
          src="/images/hero-moto.png" 
          alt="Motocross rider" 
          className="w-full h-full object-cover object-center opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
      </motion.div>

      {/* Content Container */}
      <motion.div 
        className="section-container relative z-20"
        style={{ opacity }}
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-6 md:mb-8"
          >
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-primary-container/60"></div>
            <h2 className="text-primary-container font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[8px] sm:text-[9px]">
              Precisión absoluta en cada click
            </h2>
            <div className="w-6 sm:w-8 md:w-12 h-[1px] bg-primary-container/60"></div>
          </motion.div>
          
          <div className="mb-8 md:mb-10">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[1.1] text-white px-4"
            >
              Sintoniza <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-white">El Límite&nbsp;</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-on-surface-variant font-medium text-xs sm:text-sm md:text-base mb-10 md:mb-12 uppercase tracking-[0.1em] sm:tracking-[0.12em] leading-relaxed max-w-xl mx-auto"
          >
            Ingeniería de alto rendimiento diseñada para dominar el terreno más exigente. Telemetría y Factory Setup.
          </motion.p>

          {/* Action Area */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <button className="w-full sm:w-auto bg-primary-container text-black px-8 py-3.5 sm:py-2.5 text-[9px] font-black uppercase tracking-[0.2em] transition-all hover:brightness-110 active:scale-95 rounded-sm">
              Descubre el Lab
            </button>

            <div className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 sm:py-2.5 border border-white/10 bg-white/5 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.2em]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-container"></span>
              </span>
              Telemetría Activa
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}