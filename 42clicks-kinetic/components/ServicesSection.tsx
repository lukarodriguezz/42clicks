"use client";

import { motion } from "framer-motion";

const services = [
  { icon: "settings_suggest", title: "SERVICIO OFICIAL", desc: "Mantenimiento preventivo y correctivo utilizando repuestos originales y aceites de competición." },
  { icon: "bolt", title: "MEJORA DE PRESTACIONES", desc: "Upgrades de valvulado (Re-valving) y resortes adaptados al peso del piloto. Componentes Factory." },
  { icon: "architecture", title: "PERSONALIZACIÓN", desc: "Desarrollo de mapas hidráulicos personalizados según estilo de conducción y terreno." },
];

export default function ServicesSection() {
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
  const animHeader = isDesktop ? { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true } } : {};

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <motion.div {...animHeader}>
            <h2 className="font-headline text-5xl font-black italic uppercase tracking-tighter">Nuestros Servicios</h2>
            <p className="text-primary-container font-bold uppercase tracking-widest text-xs mt-2">SOLUCIONES DE ALTO RENDIMIENTO</p>
          </motion.div>
          <div className="hidden md:block w-1/3 h-px bg-outline-variant opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {services.map((service, idx) => {
            const animCard = isDesktop ? { 
              initial: { opacity: 0, y: 30 }, 
              whileInView: { opacity: 1, y: 0 }, 
              viewport: { once: true }, 
              transition: { delay: idx * 0.2 } 
            } : {};
            
            return (
              <motion.div
                key={idx}
                {...animCard}
                className="group cursor-pointer bg-surface-container-low p-10 hover:bg-primary-container hover:-translate-y-2 transition-all duration-500"
              >
                <span className="material-symbols-outlined text-4xl text-primary-container group-hover:text-background mb-8 transition-colors">{service.icon}</span>
                <h3 className="font-headline text-2xl font-black italic uppercase tracking-tighter mb-4 group-hover:text-background transition-colors">{service.title}</h3>
                <p className="text-on-surface-variant group-hover:text-background/80 text-sm leading-relaxed mb-6 transition-colors">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}