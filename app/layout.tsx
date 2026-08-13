import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DysHelp",
  description:
    "Informação, acolhimento e apoio para pessoas com dislexia, famílias e profissionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${inter.variable}
          ${cormorant.variable}
          bg-[#F3EAD9]
          text-[#243B53]
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
