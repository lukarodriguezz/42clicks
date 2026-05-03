import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-background/80 backdrop-blur-md border-b border-white/5 animate-in slide-in-from-top-full duration-700">
      
      <div className="grid grid-cols-2 md:grid-cols-3 items-center px-6 py-4 max-w-7xl mx-auto">
        
        {/* COLUMNA 1: Lado Izquierdo */}
        <div className="hidden md:flex items-center gap-8 justify-start">
          <Link href="#ingenieria" className="text-white font-medium hover:text-primary-container transition-colors text-[10px] tracking-[0.2em] uppercase">
            Ingeniería
          </Link>
          <Link href="#servicios" className="text-white font-medium hover:text-primary-container transition-colors text-[10px] tracking-[0.2em] uppercase">
            Laboratorio
          </Link>
        </div>

        {/* COLUMNA 2: Centro */}
        <div className="flex justify-start md:justify-center">
          {/* CORRECCIÓN: Agregamos "inline-block py-2 px-1" para que la caja crezca y la máscara no ampute el texto */}
          <Link href="/" className="inline-block py-2 px-1 text-2xl md:text-3xl font-black italic text-primary-container tracking-tighter uppercase moto-logo drop-shadow-md hover:scale-105 transition-transform">
            42CLICKS
          </Link>
        </div>

        {/* COLUMNA 3: Lado Derecho */}
        <div className="flex items-center justify-end gap-8">
          
          <Link href="#contacto" className="md:hidden bg-primary-container text-background px-4 py-2 text-[10px] font-black uppercase tracking-widest active:scale-95 transition-transform">
            TURNO
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#nosotros" className="text-white font-medium hover:text-primary-container transition-colors text-[10px] tracking-[0.2em] uppercase">
              Nosotros
            </Link>
            <Link href="#contacto" className="bg-primary-container text-on-primary-container px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[4px_4px_0px_#000000]">
              Reservar Turno
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}