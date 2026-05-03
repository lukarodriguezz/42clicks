"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

interface FooterProps {
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

// Datos adaptados para 42CLICKS
const defaultSections = [
  {
    title: "Laboratorio",
    links: [
      { name: "Service Oficial", href: "#servicios" },
      { name: "Re-Valving", href: "#servicios" },
      { name: "Piezas Factory", href: "#" },
      { name: "Telemetría", href: "#" },
    ],
  },
  {
    title: "Kinetic Eng.",
    links: [
      { name: "Nuestra Filosofía", href: "#nosotros" },
      { name: "Pilotos Oficiales", href: "#" },
      { name: "Anatomía de Velocidad", href: "#ingenieria" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { name: "Reservar Turno", href: "#contacto" },
      { name: "Preguntas Frecuentes", href: "#" },
      { name: "Envíos al Interior", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaYoutube className="size-5" />, href: "#", label: "YouTube" },
  { icon: <FaWhatsapp className="size-5" />, href: "https://wa.me/5492995225258", label: "WhatsApp" },
];

const defaultLegalLinks = [
  { name: "Términos y Condiciones", href: "#" },
  { name: "Política de Privacidad", href: "#" },
];

export default function Footer({
  sections = defaultSections,
  description = "Ingeniería de suspensión de alto rendimiento diseñada para dominar el terreno más exigente. Precisión absoluta en cada clic.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2026 42CLICKS. KINETIC ENGINEERING. TODOS LOS DERECHOS RESERVADOS.",
  legalLinks = defaultLegalLinks,
}: FooterProps) {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="flex w-full flex-col justify-between gap-16 lg:flex-row lg:items-start lg:text-left">
          
          {/* Lado Izquierdo: Branding y Redes */}
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start max-w-sm">
            {/* Logo usando tu clase moto-logo */}
            <Link href="/" className="inline-block py-2 px-1 text-3xl font-black italic text-primary-container tracking-tighter uppercase moto-logo drop-shadow-md">
              42CLICKS
            </Link>
            <p className="text-xs md:text-sm text-on-surface-variant font-medium leading-relaxed tracking-wide uppercase">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-on-surface-variant mt-2">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary-container transition-colors hover:-translate-y-1 duration-200">
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Lado Derecho: Menús */}
          <div className="grid w-full gap-10 md:grid-cols-3 lg:gap-16 pt-2">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-6 font-black italic uppercase tracking-widest text-white text-sm">{section.title}</h3>
                <ul className="space-y-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="hover:text-primary-container hover:translate-x-1 transition-all duration-200">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Base de Legales */}
        <div className="mt-24 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-4 md:order-2 md:flex-row md:gap-8">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary-container transition-colors">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}