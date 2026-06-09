import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Cargamos las fuentes optimizadas de Next.js
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// Metadatos profesionales para la pestaña del navegador
export const metadata: Metadata = {
  title: "Ing. Prometeo | Portfolio Multidimensional",
  description: "Portafolio interactivo de arquitectura de software y desarrollo full stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}