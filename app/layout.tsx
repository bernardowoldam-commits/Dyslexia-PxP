import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
      <body className="bg-[#F3EAD9] text-[#244A6F] antialiased">
        <header className="sticky top-0 z-50 border-b border-[#6997B8]/20 bg-[#F3EAD9]/95 backdrop-blur">
          <div className="mx-auto flex min-h-[84px] max-w-7xl items-center justify-between px-6">
            
            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="DysHelp - página inicial"
            >
              <Image
                src="/DISLEXIA (1).png"
                alt="DysHelp"
                width={64}
                height={64}
                priority
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* NAVEGAÇÃO PRINCIPAL */}
            <nav
              className="hidden items-center gap-9 md:flex"
              aria-label="Navegação principal"
            >
              <Link
                href="/"
                className="font-semibold text-[#6997B8] transition hover:text-[#F3A05B]"
              >
                Início
              </Link>

              <Link
                href="/estudo/dislexia"
                className="font-semibold text-[#6997B8] transition hover:text-[#F3A05B]"
              >
                Dislexia
              </Link>

              <Link
                href="/atividades"
                className="font-semibold text-[#6997B8] transition hover:text-[#F3A05B]"
              >
                Atividades
              </Link>

              <Link
                href="/profissionais"
                className="font-semibold text-[#6997B8] transition hover:text-[#F3A05B]"
              >
                Profissionais
              </Link>

              <Link
                href="/ajuda"
                className="font-semibold text-[#6997B8] transition hover:text-[#F3A05B]"
              >
                Ajuda
              </Link>
            </nav>

            {/* NIA */}
            <Link
              href="/nia"
              className="rounded-2xl bg-[#6997B8] px-7 py-4 font-bold text-white transition hover:bg-[#F3A05B]"
            >
              NIA
            </Link>
          </div>

          {/* NAVEGAÇÃO MOBILE */}
          <div className="border-t border-[#6997B8]/15 md:hidden">
            <nav
              className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-6 py-3"
              aria-label="Navegação móvel"
            >
              <Link
                href="/"
                className="whitespace-nowrap font-semibold text-[#6997B8]"
              >
                Início
              </Link>

              <Link
                href="/estudo/dislexia"
                className="whitespace-nowrap font-semibold text-[#6997B8]"
              >
                Dislexia
              </Link>

              <Link
                href="/atividades"
                className="whitespace-nowrap font-semibold text-[#6997B8]"
              >
                Atividades
              </Link>

              <Link
                href="/profissionais"
                className="whitespace-nowrap font-semibold text-[#6997B8]"
              >
                Profissionais
              </Link>

              <Link
                href="/ajuda"
                className="whitespace-nowrap font-semibold text-[#6997B8]"
              >
                Ajuda
              </Link>
            </nav>
          </div>
        </header>

        {/* CONTEÚDO DAS PÁGINAS */}
        <main>{children}</main>
      </body>
    </html>
  );
}
