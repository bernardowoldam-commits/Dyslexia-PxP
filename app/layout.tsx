import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Entre Linhas",
  description: "Entre o que é dito e o que é sentido.",
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
