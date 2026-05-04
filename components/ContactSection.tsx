"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Dato requerido." }),
  email: z.string().email({ message: "Email inválido." }),
  message: z.string().min(10, { message: "Detalla tu setup." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/lukaezequiel15@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ Nombre: values.name, Email: values.email, Mensaje: values.message, _subject: "Nuevo contacto 42CLICKS" })
      });
      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (e) { alert("Error de conexión."); } finally { setIsSubmitting(false); }
  }

  return (
    <section id="contacto" className="py-24 bg-[#050505] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/5 bg-[#0a0a0a] shadow-2xl rounded-sm">
        
        {/* Lado Imagen */}
        <div 
          className="lg:col-span-5 relative overflow-hidden min-h-[300px] border-b lg:border-b-0 lg:border-r border-white/5 group"
        >
          <img 
            src="/images/motocross-turn.png" 
            alt="Piloto" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[100%] contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40"></div>
          
          <div className="absolute bottom-10 left-10 pr-6">
            <h3 className="font-headline text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-none">
              ¿Listo para <br/><span className="text-primary-container">Evolucionar?</span>
            </h3>
          </div>
        </div>

        {/* Formulario */}
        <div 
          className="lg:col-span-7 p-6 sm:p-10 md:p-16 flex flex-col justify-center bg-[#0a0a0a]"
        >
          <div className="mb-10">
            <h4 className="text-white font-black italic text-2xl md:text-3xl uppercase tracking-tighter mb-4 leading-none">Reserva tu Setup</h4>
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Diagnóstico técnico inicial en menos de 24hs.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="relative group">
              <input 
                {...register("name")}
                className="w-full bg-white/[0.03] border border-white/10 text-white text-xs font-bold tracking-widest px-6 py-4 focus:border-primary-container focus:outline-none transition-colors uppercase placeholder:text-white/20 rounded-sm" 
                placeholder="NOMBRE / PILOTO" 
              />
              {errors.name && <p className="text-error text-[8px] font-bold uppercase mt-1 ml-2">{errors.name.message}</p>}
            </div>

            <div className="relative group">
              <input 
                {...register("email")}
                className="w-full bg-white/[0.03] border border-white/10 text-white text-xs font-bold tracking-widest px-6 py-4 focus:border-primary-container focus:outline-none transition-colors uppercase placeholder:text-white/20 rounded-sm" 
                placeholder="CORREO ELECTRÓNICO" 
              />
              {errors.email && <p className="text-error text-[8px] font-bold uppercase mt-1 ml-2">{errors.email.message}</p>}
            </div>

            <div className="relative group">
              <textarea 
                {...register("message")}
                className="w-full bg-white/[0.03] border border-white/10 text-white text-xs font-bold tracking-widest px-6 py-4 focus:border-primary-container focus:outline-none transition-colors uppercase resize-none placeholder:text-white/20 rounded-sm" 
                placeholder="MODELO DE MOTO Y OBJETIVOS" 
                rows={3} 
              />
              {errors.message && <p className="text-error text-[8px] font-bold uppercase mt-1 ml-2">{errors.message.message}</p>}
            </div>

            <button 
              className={`w-full py-5 font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-300 rounded-sm ${
                isSuccess ? "bg-green-500 text-black" : "bg-primary-container text-black hover:shadow-[0_0_30px_rgba(163,254,0,0.3)] active:scale-[0.98]"
              }`}
              type="submit"
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? "PROCESANDO..." : isSuccess ? "ENVIADO" : "SOLICITAR EVALUACIÓN"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
