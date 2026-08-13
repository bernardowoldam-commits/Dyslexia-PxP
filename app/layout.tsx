import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
        className={`${cormorant.variable} ${inter.variable} bg-[#F3EAD9] text-[#243B53] antialiased`}
      >
        <header className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-5">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[24px] border border-[#6997B8]/20 bg-[#F3EAD9]/95 shadow-lg backdrop-blur-xl">
              <div className="flex min-h-[76px] items-center justify-between px-5">

                <Link
                  href="/"
                  className="flex items-center"
                  aria-label="DysHelp"
                >
                  <Image
                    src="/DISLEXIA (1).png"
                    alt="DysHelp"
                    width={150}
                    height={70}
                    priority
                    className="h-14 w-auto object-contain"
                  />
                </Link>

                <nav className="hidden md:flex items-center gap-2">
                  {[
                    ["/", "Início"],
                    ["/estudo/dislexia", "Dislexia"],
                    ["/atividades", "Atividades"],
                    ["/profissionais", "Profissionais"],
                    ["/famosos", "Histórias"],
                    ["/ajuda", "Ajuda"],
                  ].map(([href, label]) => (
                    <Link
                      key={href}
                      href={href}
                      className="rounded-full px-4 py-2 text-sm font-bold text-[#234F73] transition hover:bg-[#BAD8E8]"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>

                <Link
                  href="/nia"
                  className="rounded-full bg-[#6997B8] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#F3A05B]"
                >
                  ✦ NIA
                </Link>

              </div>
            </div>
          </div>
        </header>

        <div className="h-[105px]" />

        <main>{children}</main>
      </body>
    </html>
  );
}
