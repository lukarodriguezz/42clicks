"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollytellingSection from "@/components/ScrollytellingSection";

export default function NosotrosPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <Navbar />
      <ScrollytellingSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
