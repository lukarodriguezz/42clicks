"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  { id: "01", title: "Válvulas de Precisión", desc: "Control de flujo hidráulico calibrado micrométricamente para una respuesta instantánea." },
  { id: "02", title: "Cámara de Nitrógeno", desc: "Estabilidad térmica extrema bajo condiciones de competición de alta intensidad." },
  { id: "03", title: "Revestimiento DLC", desc: "Reducción drástica de la fricción interna para una sensibilidad superior del tren delantero." },
];

export default function AnatomySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} id="ingenieria" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-primary-container"></div>
                <p className="text-primary-container font-bold uppercase tracking-[0.3em] text-[9px]">INGENIERÍA APLICADA</p>
              </div>
              <h2 className="font-headline text-white text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.9]">
                Anatomía de <br/> <span className="text-primary-container">Velocidad</span>
              </h2>
            </motion.div>
            
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div 
                  key={feature.id} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex gap-6 items-start p-6 bg-white/[0.02] border border-white/5 hover:border-primary-container/30 transition-all duration-300 rounded-sm"
                >
                  <span className="text-primary-container font-headline font-black italic text-xl opacity-40 group-hover:opacity-100 transition-opacity">
                    {feature.id}
                  </span>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-widest mb-2 text-[11px] group-hover:text-primary-container transition-colors">{feature.title}</h3>
                    <p className="text-white/50 text-[11px] leading-relaxed uppercase tracking-wider font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 relative h-[500px] flex items-center justify-center">
            {/* Spinners */}
            <div className="absolute w-[80%] aspect-square border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-[60%] aspect-square border border-white/5 border-dashed rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
            <div className="absolute w-48 h-48 bg-primary-container/10 blur-[90px] rounded-full"></div>
            
            <motion.div 
              style={{ y: imageY }}
              className="relative z-10 w-full max-w-md flex justify-center"
            >
              <img 
                src="/images/exploded-suspension.png" 
                alt="Vista explotada" 
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter brightness-110 contrast-125" 
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-1/4 right-[10%] hidden md:flex items-center gap-3"
            >
              <div className="w-12 h-[1px] bg-primary-container"></div>
              <div className="px-3 py-1 bg-primary-container/10 border border-primary-container/30 text-primary-container text-[8px] uppercase tracking-widest font-bold backdrop-blur-md">
                DLC Coated
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}