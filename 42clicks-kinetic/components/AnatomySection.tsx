"use client";

import { motion } from "framer-motion";

const features = [
  { id: "01", title: "Válvulas de Precisión", desc: "Control de flujo hidráulico calibrado micrométricamente para una respuesta instantánea." },
  { id: "02", title: "Cámara de Nitrógeno", desc: "Estabilidad térmica extrema bajo condiciones de competición de alta intensidad." },
  { id: "03", title: "Revestimiento DLC", desc: "Reducción drástica de la fricción interna para una sensibilidad superior del tren delantero." },
];

export default function AnatomySection() {
  // Solo aplicamos animaciones si estamos en PC (>= md)
  const animateProps = typeof window !== 'undefined' && window.innerWidth >= 768 ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" }
  } : {};

  return (
    <section id="ingenieria" className="py-24 technical-dark-bg overflow-hidden border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Izquierdo */}
          <motion.div {...animateProps}>
            <h2 className="font-headline text-white text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-tight mb-8">
              Anatomía de <br/> <span className="text-primary-container">La Velocidad</span>
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={feature.id} className="flex gap-4 items-start">
                  <span className="text-background bg-primary-container px-3 py-1 font-bold italic">
                    {feature.id}
                  </span>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-widest mb-1 text-sm">{feature.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Lado Derecho */}
          <motion.div 
            {...animateProps}
            transition={{ duration: 0.8 }}
            className="relative group flex justify-center"
          >
            <div className="absolute inset-0 bg-primary-container/10 blur-3xl rounded-full scale-75 opacity-50"></div>
            <img 
              src="/images/exploded-suspension.png" 
              alt="Vista explotada de suspensión" 
              className="w-full max-w-md h-auto scale-110 relative z-10 drop-shadow-[0_0_30px_rgba(163,254,0,0.15)]" 
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}