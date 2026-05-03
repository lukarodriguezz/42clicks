"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  // Lógica de blindaje: Animaciones solo en PC
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
  
  const animImage = isDesktop ? { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 } } : {};
  const animText = isDesktop ? { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.2 } } : {};

  return (
    <section id="nosotros" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-0">
        <motion.div 
          {...animImage}
          className="lg:col-span-7 relative group overflow-hidden"
        >
          <img 
            src="/images/ktm-42.png" 
            alt="Moto KTM" 
            className="w-full h-150 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
          />
          <div className="absolute inset-0 bg-primary-container/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </motion.div>

        <motion.div 
          {...animText}
          className="lg:col-span-5 bg-background p-12 lg:-ml-12 lg:mt-12 relative z-10 border-t-4 lg:border-t-0 lg:border-l-4 border-primary-container"
        >
          <h2 className="font-headline text-4xl font-black italic uppercase tracking-tighter mb-6">
            Ingeniería <br/> De Campeones
          </h2>
          <p className="text-on-surface-variant mb-6 leading-relaxed">
            En 42CLICKS, no solo reparamos suspensiones; redefinimos la dinámica de conducción. Nuestra filosofía se basa en la obsesión por el detalle técnico y la telemetría aplicada al mundo real.
          </p>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            Cada setting es una firma personal. Entendemos que cada piloto tiene un ADN único, y nuestras configuraciones están diseñadas para convertir ese potencial en tracción pura.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="font-headline text-3xl font-black italic text-primary-container mb-1">15+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Años de Evolución</div>
            </div>
            <div>
              <div className="font-headline text-3xl font-black italic text-primary-container mb-1">42</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Clicks de Ajuste</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}