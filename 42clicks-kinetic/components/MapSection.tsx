export default function MapSection() {
  return (
    <section className="h-96 w-full relative bg-surface-container-low overflow-hidden">
      <div className="absolute inset-0 bg-background/20 z-10 pointer-events-none"></div>
      <iframe 
        className="w-full h-full grayscale invert opacity-70" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12431.139938515546!2d-68.077222!3d-38.833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a379374cc829d%3A0x6d9f3ed17b5f253!2sCinco%20Saltos%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses-419!2sar!4v1713111000000!5m2!1ses-419!2sar" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-primary-container text-on-primary-container px-6 py-3 font-black italic uppercase tracking-tighter flex items-center gap-2 shadow-[8px_8px_0px_#0e0e0e]">
          <span className="material-symbols-outlined text-lg">location_on</span>
          CINCO SALTOS, RÍO NEGRO
        </div>
      </div>
    </section>
  );
}