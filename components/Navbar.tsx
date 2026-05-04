"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-center w-full px-6 pt-6 pb-4 transition-all duration-500`}
    >
      <div className={`flex items-center justify-between w-full max-w-5xl px-6 py-3 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-full" 
          : "bg-transparent border-transparent"
      }`}>
        
        {/* Lado Izquierdo */}
        <div className="hidden md:flex items-center gap-8 w-1/3">
          <Link href="/#ingenieria" className="text-white/70 hover:text-primary-container transition-colors text-[9px] font-bold tracking-[0.3em] uppercase">
            Ingeniería
          </Link>
          <Link href="/#servicios" className="text-white/70 hover:text-primary-container transition-colors text-[9px] font-bold tracking-[0.3em] uppercase">
            Laboratorio
          </Link>
        </div>

        {/* Centro - Logo */}
        <div className="flex justify-start md:justify-center w-1/3">
          <Link href="/" className="inline-block px-4 py-2 text-xl font-black italic text-primary-container tracking-tighter uppercase moto-logo transition-transform hover:scale-105">
            42CLICKS
          </Link>
        </div>

        {/* Lado Derecho */}
        <div className="flex items-center justify-end gap-6 w-1/3">
          <Link href="/nosotros" className="hidden md:block text-white/70 hover:text-primary-container transition-colors text-[9px] font-bold tracking-[0.3em] uppercase">
            Nosotros
          </Link>
          
          <Link href="/#contacto" className="relative group overflow-hidden bg-white/5 border border-white/10 text-white px-5 py-2 text-[9px] font-bold uppercase tracking-widest hover:bg-primary-container hover:text-[#050505] hover:border-primary-container transition-all duration-300 rounded-full flex items-center gap-2">
            <span>Turno</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container group-hover:bg-[#050505] animate-pulse"></span>
          </Link>
        </div>

      </div>
    </motion.nav>
  );
}