"use client";

import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 md:py-24 bg-[#050505] relative z-10 overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary-container/50 to-transparent blur-[2px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex w-full flex-col justify-between gap-16 lg:flex-row lg:items-start">
          
          <div className="flex w-full flex-col gap-8 max-w-sm">
            <Link href="/" className="inline-block text-3xl font-black italic text-white tracking-tighter uppercase moto-logo">
              42CLICKS
            </Link>
            <p className="text-[11px] text-white/50 font-medium leading-[1.8] tracking-widest uppercase">
              Ingeniería de suspensión de alto rendimiento diseñada para dominar el terreno más exigente. Precisión absoluta en cada clic.
            </p>
            <ul className="flex items-center gap-6 text-white/40 mt-4">
              <li className="hover:text-primary-container transition-colors hover:-translate-y-1 duration-300">
                <a href="https://wa.me/5492995225258"><FaWhatsapp className="size-5" /></a>
              </li>
              <li className="hover:text-primary-container transition-colors hover:-translate-y-1 duration-300">
                <a href="#"><FaInstagram className="size-5" /></a>
              </li>
              <li className="hover:text-primary-container transition-colors hover:-translate-y-1 duration-300">
                <a href="#"><FaFacebook className="size-5" /></a>
              </li>
              <li className="hover:text-primary-container transition-colors hover:-translate-y-1 duration-300">
                <a href="#"><FaYoutube className="size-5" /></a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16 pt-2">
            <div>
              <h3 className="font-black italic uppercase tracking-[0.25em] text-white text-[10px] mb-8">Laboratorio</h3>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                <li className="hover:text-white hover:translate-x-2 transition-all"><Link href="#servicios">Service Oficial</Link></li>
                <li className="hover:text-white hover:translate-x-2 transition-all"><Link href="#servicios">Re-Valving</Link></li>
                <li className="hover:text-white hover:translate-x-2 transition-all"><Link href="#">Piezas Factory</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black italic uppercase tracking-[0.25em] text-white text-[10px] mb-8">Kinetic Eng.</h3>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                <li className="hover:text-white hover:translate-x-2 transition-all"><Link href="#nosotros">Filosofía</Link></li>
                <li className="hover:text-white hover:translate-x-2 transition-all"><Link href="#ingenieria">Anatomía</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-32 flex flex-col justify-between gap-8 border-t border-white/10 pt-10 text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 md:flex-row md:items-center">
          <p>© 2026 42CLICKS KINETIC ENG. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary-container transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-primary-container transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}