export default function MapSection() {
  return (
    <section className="h-[450px] w-full relative bg-[#050505] overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[#050505]/60 mix-blend-multiply z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none"></div>

      <iframe 
        className="absolute inset-0 w-full h-full grayscale-[100%] invert-[95%] contrast-[1.2] opacity-70" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12431.139938515546!2d-68.077222!3d-38.833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a379374cc829d%3A0x6d9f3ed17b5f253!2sCinco%20Saltos%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses-419!2sar!4v1713111000000!5m2!1ses-419!2sar" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
      ></iframe>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center animate-pulse mb-4">
          <div className="w-7 h-7 bg-primary-container rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(163,254,0,0.8)]">
            <span className="material-symbols-outlined text-[#050505] text-[12px] font-bold">location_on</span>
          </div>
        </div>
        
        <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 px-8 py-4 flex flex-col items-center text-center shadow-2xl rounded-sm">
          <p className="text-primary-container uppercase text-[9px] tracking-[0.3em] font-bold mb-1 leading-none">Headquarters</p>
          <h3 className="text-white font-black italic uppercase tracking-tighter text-lg leading-none">Cinco Saltos</h3>
        </div>
      </div>
    </section>
  );
}