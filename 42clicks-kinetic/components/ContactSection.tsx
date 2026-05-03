"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre es muy corto." }),
  email: z.string().email({ message: "Email inválido." }),
  message: z.string().min(10, { message: "El mensaje debe ser más detallado." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/lukaezequiel15@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          Nombre: values.name,
          Email: values.email,
          Mensaje: values.message,
          _subject: "Nuevo contacto desde 42CLICKS Web"
        })
      });

      if (response.ok) {
        alert("¡Mensaje enviado con éxito! Revisa tu email para confirmar.");
        reset();
      }
    } catch (error) {
      alert("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
  const animLeft = isDesktop ? { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } } : {};
  const animRight = isDesktop ? { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true } } : {};

  return (
    <section id="contacto" className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div 
          {...animLeft}
          className="relative overflow-hidden group min-h-[400px] md:min-h-[500px]"
        >
          <img 
            src="/images/motocross-turn.png" 
            alt="Piloto doblando" 
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 pr-6">
            <h3 className="font-headline text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
              ¿Listo para el <br/><span className="text-primary-container">siguiente nivel?</span>
            </h3>
            <p className="text-on-surface-variant uppercase text-[10px] tracking-[0.2em] font-bold mt-2">
              Optimización absoluta para tu máquina
            </p>
          </div>
        </motion.div>

        <motion.div 
          {...animRight}
          className="bg-surface-container p-8 md:p-12 flex flex-col justify-center"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="relative group">
              <div className="absolute left-0 top-0 w-1 h-full bg-primary-container opacity-50 group-focus-within:opacity-100 transition-opacity"></div>
              <input 
                {...register("name")}
                className="w-full bg-surface-container-high border-none text-white text-xs font-bold tracking-widest px-6 py-4 focus:ring-0 focus:outline-none focus:bg-surface-container-highest transition-colors uppercase" 
                placeholder="NOMBRE COMPLETO" 
              />
              {errors.name && <p className="text-error text-[10px] font-bold uppercase mt-1 ml-6">{errors.name.message}</p>}
            </div>

            <div className="relative group">
              <div className="absolute left-0 top-0 w-1 h-full bg-primary-container opacity-50 group-focus-within:opacity-100 transition-opacity"></div>
              <input 
                {...register("email")}
                className="w-full bg-surface-container-high border-none text-white text-xs font-bold tracking-widest px-6 py-4 focus:ring-0 focus:outline-none focus:bg-surface-container-highest transition-colors uppercase" 
                placeholder="EMAIL DE CONTACTO" 
              />
              {errors.email && <p className="text-error text-[10px] font-bold uppercase mt-1 ml-6">{errors.email.message}</p>}
            </div>

            <div className="relative group">
              <div className="absolute left-0 top-0 w-1 h-full bg-primary-container opacity-50 group-focus-within:opacity-100 transition-opacity"></div>
              <textarea 
                {...register("message")}
                className="w-full bg-surface-container-high border-none text-white text-xs font-bold tracking-widest px-6 py-4 focus:ring-0 focus:outline-none focus:bg-surface-container-highest transition-colors uppercase resize-none" 
                placeholder="MENSAJE / CONSULTA TÉCNICA" 
                rows={4} 
              />
              {errors.message && <p className="text-error text-[10px] font-bold uppercase mt-1 ml-6">{errors.message.message}</p>}
            </div>

            <button 
              className="w-full bg-primary-container text-on-primary-container py-4 font-black uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50" 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-outline-variant/10">
            <a 
              className="flex items-center justify-center gap-3 w-full border-2 border-primary-container text-primary-container py-4 font-black uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all" 
              href="https://wa.me/5492995225258"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">chat</span>
              WHATSAPP DIRECTO
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}