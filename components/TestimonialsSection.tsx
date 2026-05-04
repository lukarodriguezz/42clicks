"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Bajé 3 segundos mi tiempo por vuelta en el circuito local. El revalvulado cambió totalmente la tracción de mi moto.",
    author: "Marcos G.",
    role: "Piloto Amateur MX2",
    avatar: "MG"
  },
  {
    quote: "La sensibilidad que logré en el tren delantero es de otro nivel. Ahora puedo entrar a las curvas con mucha más confianza.",
    author: "Federico L.",
    role: "Enduro Pro",
    avatar: "FL"
  },
  {
    quote: "Excelente atención técnica. Me explicaron cada click del setup y cómo ajustarlo según el terreno. Impecable.",
    author: "Hernán S.",
    role: "Track Day Rider",
    avatar: "HS"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#020202] relative overflow-hidden border-b border-white/5">
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-primary-container/60"></div>
            <p className="text-primary-container uppercase text-[9px] tracking-[0.3em] font-bold italic-none">Feedback de Pilotos</p>
            <div className="w-10 h-[1px] bg-primary-container/60"></div>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-none">
            Rendimiento <br/> <span className="text-on-surface-variant/20">Comprobado</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0a0a0a] p-10 border border-white/5 relative group hover:border-primary-container/30 transition-colors duration-500 rounded-sm"
            >
              <div className="absolute top-6 right-6 text-6xl font-headline italic leading-none text-white/[0.02] group-hover:text-primary-container/10 transition-colors pointer-events-none">"</div>

              <div className="mb-10 relative z-10">
                <p className="text-white/70 text-[11px] uppercase tracking-widest leading-[1.8] font-medium italic">
                  {t.quote}
                </p>
              </div>
              
              <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/10">
                <div className="w-9 h-9 bg-white/10 text-white rounded-full flex items-center justify-center font-black italic text-[10px] border border-white/20">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-[10px] tracking-widest">{t.author}</h4>
                  <p className="text-primary-container uppercase text-[8px] font-bold tracking-[0.2em] mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}