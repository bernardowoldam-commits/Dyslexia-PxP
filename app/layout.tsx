import type { Metadata } from "next";
import "./globals.css";

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
        className="
          bg-[#F3EAD9]
          text-[#243B53]
          antialiased
        "
      >
        {children}
      </body>
    </html>
  );
}
