import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AnatomySection from "@/components/AnatomySection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp"; // 1. Lo importamos aquí
import BrandsSection from "@/components/BrandsSection"; // <-- 1. Importar aquí
// ... tus otros imports

export default function Home() {
  return (
    <main className="bg-background text-on-surface min-h-screen">
      <Navbar />
      <HeroSection />
      <BrandsSection /> {/* <-- 2. Colocar aquí */}
      <ServicesSection />
      <AnatomySection />
      <AboutSection />
      <ContactSection />
      <MapSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}