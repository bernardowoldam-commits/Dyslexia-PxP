import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DysHelp — Compreender. Acolher. Apoiar.",
  description:
    "Informação de qualidade e recursos acessíveis sobre dislexia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
