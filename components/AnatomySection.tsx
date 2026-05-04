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

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={containerRef} id="ingenieria" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div 
              className="mb-10 md:mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-primary-container"></div>
                <p className="text-primary-container font-bold uppercase tracking-[0.3em] text-[9px]">INGENIERÍA APLICADA</p>
              </div>
              <h2 className="font-headline text-white text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.9]">
                Anatomía de <br/> <span className="text-primary-container">Velocidad</span>
              </h2>
            </motion.div>
            
            <div className="space-y-4 md:space-y-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={feature.id} 
                  className="group flex gap-5 sm:gap-6 items-start p-6 bg-white/[0.02] border border-white/5 hover:border-primary-container/30 transition-all duration-300 rounded-sm"
                >
                  <span className="text-primary-container font-headline font-black italic text-xl opacity-40 group-hover:opacity-100 transition-opacity">
                    {feature.id}
                  </span>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-widest mb-1.5 text-[11px] group-hover:text-primary-container transition-colors">{feature.title}</h3>
                    <p className="text-white/50 text-[10px] sm:text-[11px] leading-relaxed uppercase tracking-wider font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2 relative h-[350px] sm:h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden lg:overflow-visible">
            {/* Spinners responsivos */}
            <div className="absolute w-[90%] max-w-[400px] md:max-w-none md:w-[80%] aspect-square border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-[70%] max-w-[300px] md:max-w-none md:w-[60%] aspect-square border border-white/5 border-dashed rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
            <div className="absolute w-[40%] aspect-square bg-primary-container/10 blur-[80px] rounded-full"></div>
            
            <motion.div 
              style={{ y: imageY }}
              className="relative z-10 w-full max-w-[280px] sm:max-w-xs md:max-w-md flex justify-center"
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
              className="absolute top-1/4 right-[5%] sm:right-[10%] hidden sm:flex items-center gap-3"
            >
             
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
