import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "42CLICKS | Kinetic Engineering",
  description: "Ingeniería de suspensión de alto rendimiento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Agregamos scroll-smooth para los links y forzamos el tema oscuro
    <html lang="es" className="dark scroll-smooth">
      <head>
        {/* Cargamos los iconos directamente aquí para robustez móvil */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      {/* antialiased para fuentes nítidas y bg-background para asegurar el fondo negro en móvil */}
      <body className="bg-background text-on-surface antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}