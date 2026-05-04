"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "MANTENIMIENTO",
    price: "$45k",
    prefix: "Desde",
    features: ["Limpieza Ultrasónica", "Cambio de Aceite (Maxima/Ohlins)", "Inspección de Sellos", "Purga de Nitrógeno"],
    cta: "CONSULTAR",
    highlight: false
  },
  {
    name: "EVO PERFORMANCE",
    price: "$85k",
    prefix: "Desde",
    features: ["Todo lo del Mantenimiento", "Re-valving Personalizado", "Ajuste de Sag en Pista", "Mapa de Clicks Base"],
    cta: "EL MÁS BUSCADO",
    highlight: true
  },
  {
    name: "FACTORY RACING",
    price: "Custom",
    prefix: "Proyecto",
    features: ["Componentes DLC/Kashima", "Telemetría Data Logging", "Soporte en Carrera", "Garantía de Podio"],
    cta: "GO FACTORY",
    highlight: false
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-b border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-primary-container/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-white/10"></div>
            <p className="text-primary-container uppercase text-[9px] tracking-[0.3em] font-bold">Inversión en Performance</p>
            <div className="w-8 h-[1px] bg-white/10"></div>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-none">
            Nuestros <span className="text-on-surface-variant/20">Planes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-6 sm:p-8 md:p-10 transition-all duration-500 group rounded-sm ${
                plan.highlight 
                  ? "border border-primary-container bg-surface-container shadow-[0_0_50px_rgba(163,254,0,0.08)] scale-100 lg:scale-[1.03] z-10" 
                  : "border border-white/5 bg-surface-container-low hover:border-white/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container text-black text-[8px] font-black px-5 py-2 uppercase tracking-[0.2em] rounded-full">
                  Recomendado
                </div>
              )}
              
              <div className="mb-10">
                <h3 className={`font-black italic text-lg tracking-tighter mb-2 uppercase ${plan.highlight ? 'text-primary-container' : 'text-white'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-white/40 text-[9px] uppercase tracking-widest font-bold">{plan.prefix}</span>
                  <div className="text-white font-headline font-black text-4xl tracking-tighter">{plan.price}</div>
                </div>
              </div>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-4 text-[10px] font-medium text-white/50 uppercase tracking-widest">
                    <span className={`material-symbols-outlined text-sm ${plan.highlight ? 'text-primary-container' : 'text-white/20'}`}>add</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 text-center text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-sm ${
                plan.highlight 
                  ? "bg-primary-container text-black hover:brightness-110" 
                  : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}