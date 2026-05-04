"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const services = [
  { 
    icon: "settings_suggest", 
    title: "SERVICIO OFICIAL", 
    desc: "Mantenimiento preventivo y correctivo utilizando repuestos originales y aceites de competición.",
    colSpan: "lg:col-span-2"
  },
  { 
    icon: "bolt", 
    title: "EVO PERFORMANCE", 
    desc: "Upgrades de valvulado y resortes adaptados al peso del piloto. Componentes Factory.",
    colSpan: "lg:col-span-1"
  },
  { 
    icon: "architecture", 
    title: "PERSONALIZACIÓN", 
    desc: "Desarrollo de mapas hidráulicos personalizados según estilo de conducción y terreno.",
    colSpan: "lg:col-span-3"
  },
];

function SpotlightCard({ service, idx }: { service: any, idx: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden bg-surface-container-low border border-white/5 p-8 transition-colors hover:border-white/10 ${service.colSpan} rounded-sm`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(163, 254, 0, 0.05),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-8">
          <span className="material-symbols-outlined text-3xl text-primary-container mb-6 block opacity-80 group-hover:opacity-100 transition-opacity">{service.icon}</span>
          <h3 className="font-headline text-xl font-black italic uppercase tracking-tighter mb-4 text-white leading-none">
            {service.title}
          </h3>
          <p className="text-on-surface-variant text-[11px] leading-relaxed max-w-md uppercase tracking-widest font-medium">
            {service.desc}
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-primary-container transition-colors">
          <span>Explorar</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 relative bg-background overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-2 h-2 bg-primary-container rounded-full animate-pulse"></div>
              <p className="text-primary-container font-bold uppercase tracking-[0.3em] text-[9px]">SOLUCIONES DE ALTO RENDIMIENTO</p>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-none">
              Nuestros <br/> <span className="text-on-surface-variant/40">Servicios</span>
            </h2>
          </motion.div>
          <div className="hidden md:block w-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, idx) => (
            <SpotlightCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}