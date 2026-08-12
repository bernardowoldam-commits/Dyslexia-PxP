import "./globals.css";
import type { Metadata, Viewport } from "next";


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Entre Linhas — Compreender. Acolher. Apoiar.",
  description: "Plataforma gratuita de informação e apoio sobre diferentes formas de aprender."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
