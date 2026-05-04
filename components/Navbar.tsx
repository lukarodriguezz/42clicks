"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const menuItems = [
    { name: "Ingeniería", href: "/#ingenieria" },
    { name: "Laboratorio", href: "/#servicios" },
    { name: "Nosotros", href: "/nosotros" },
  ];

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 }
        }}
        animate={(hidden && !isOpen) ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center w-full px-4 md:px-6 pt-6 pb-4 transition-all duration-500"
      >
        <div className={`flex items-center justify-between w-full max-w-5xl px-5 md:px-8 py-3 transition-all duration-500 ${
          scrolled 
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-full" 
            : "bg-transparent border-transparent"
        }`}>
          
          {/* Mobile Menu Trigger - LIMPIEZA DE EVENTOS */}
          <div className="md:hidden flex items-center">
            <button 
              type="button"
              onClick={() => setIsOpen(true)} // Eliminamos preventDefault y stopPropagation
              className="relative z-[200] text-white/90 p-4 -ml-4 flex flex-col gap-1.5 cursor-pointer"
              aria-label="Abrir menú"
            >
              <span className="w-6 h-0.5 bg-white rounded-full"></span>
              <span className="w-6 h-0.5 bg-white rounded-full"></span>
              <span className="w-6 h-0.5 bg-white rounded-full"></span>
            </button>
          </div>

          {/* Desktop Left */}
          <div className="hidden md:flex items-center gap-8 w-1/3">
            {menuItems.slice(0, 2).map((item) => (
              <Link key={item.name} href={item.href} className="text-white/70 hover:text-primary-container transition-colors text-[11px] font-bold tracking-[0.3em] uppercase">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Center - Logo */}
          <div className="flex justify-center">
            <Link href="/" className="inline-block px-4 py-2 text-xl font-black italic text-primary-container tracking-tighter uppercase moto-logo transition-transform hover:scale-105">
              42CLICKS
            </Link>
          </div>

          {/* Desktop Right */}
          <div className="flex items-center justify-end gap-6 md:w-1/3">
            <Link href="/nosotros" className="hidden md:block text-white/70 hover:text-primary-container transition-colors text-[11px] font-bold tracking-[0.3em] uppercase">
              Nosotros
            </Link>
            
            <Link href="/#contacto" className="relative group overflow-hidden bg-white/5 border border-white/10 text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-primary-container hover:text-[#050505] transition-all duration-300 rounded-full flex items-center gap-2">
              <span className="hidden sm:inline">Turno</span>
              <span className="sm:hidden">Reserva</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container group-hover:bg-[#050505] animate-pulse"></span>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay - AGREGADAS KEYS */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              key="overlay" // Key obligatoria
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[210] bg-black/70 backdrop-blur-sm"
            />
            <motion.div 
              key="drawer" // Key obligatoria
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 z-[220] w-[85%] max-w-sm bg-[#0a0a0a] border-r border-white/5 p-8 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-black italic text-primary-container tracking-tighter uppercase">42CLICKS</span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-white/40 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-white font-black italic text-3xl uppercase tracking-tighter hover:text-primary-container transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Agregué la opción de contacto que mencionabas */}
                <Link 
                  href="/#contacto" 
                  onClick={() => setIsOpen(false)}
                  className="text-primary-container font-black italic text-3xl uppercase tracking-tighter"
                >
                  Agenda
                </Link>
              </nav>

              <div className="mt-auto pt-8 border-t border-white/5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/20">
                KINETIC ENGINEERING LAB
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
