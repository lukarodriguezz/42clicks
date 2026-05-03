export default function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* Fondo de Imagen Oscurecido */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-moto.png" 
          alt="Motocross rider" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>

      {/* Contenedor de Textos (Animación por CSS puro, infalible) */}
      <div className="relative z-10 text-center px-4 mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        <h2 className="text-primary-container font-bold italic tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
          Precisión absoluta en cada click.
        </h2>
        
        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-black italic uppercase tracking-tighter leading-none mb-6 text-white drop-shadow-xl">
          Sintoniza <br/> <span className="text-primary-container">El Límite</span>
        </h1>

        <p className="max-w-md md:max-w-xl mx-auto text-on-surface-variant font-medium text-xs md:text-lg mb-8 uppercase tracking-widest leading-relaxed">
          Ingeniería de alto rendimiento diseñada para dominar el terreno más exigente. 
        </p>

        {/* Viñetas estáticas y robustas */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-2 border border-primary-container/50 bg-primary-container/10 backdrop-blur-sm text-primary-container px-6 py-3 text-xs font-black uppercase tracking-[0.2em]">
            <span className="material-symbols-outlined text-sm">memory</span>
            Telemetría Activa
          </div>
          <div className="flex items-center gap-2 border border-outline-variant/50 bg-white/5 backdrop-blur-sm text-white px-6 py-3 text-xs font-black uppercase tracking-[0.2em]">
            <span className="material-symbols-outlined text-sm">tune</span>
            Setup Factory
          </div>
        </div>
      </div>

      {/* Número lateral (Solo visible en PC) */}
      <div className="absolute right-8 bottom-12 hidden lg:flex flex-col items-end gap-1 font-headline italic font-black z-20 opacity-80">
        <span className="text-primary-container text-8xl leading-none">42</span>
        <span className="text-white text-xl tracking-tighter uppercase">Clicks of Perfection</span>
      </div>
    </section>
  );
}