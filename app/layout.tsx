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
      <body className="bg-[#F3EAD9] text-[#6997B8] antialiased">

        {/* BARRA PRINCIPAL FIXA */}
        <header className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-5">
          <div className="mx-auto max-w-7xl">

            <div className="rounded-[24px] border border-[#6997B8]/15 bg-[#F3EAD9]/95 shadow-[0_8px_30px_rgba(54,91,116,0.10)] backdrop-blur-xl">

              <div className="flex min-h-[76px] items-center justify-between gap-4 px-4 sm:px-6">

                {/* LOGO */}
                <Link
                  href="/"
                  aria-label="DysHelp - página inicial"
                  className="flex shrink-0 items-center"
                >
                  <Image
                    src="/DISLEXIA (1).png"
                    alt="DysHelp"
                    width={150}
                    height={80}
                    priority
                    className="h-14 w-auto object-contain sm:h-16"
                  />
                </Link>

                {/* MENU DESKTOP */}
                <nav
                  className="hidden items-center gap-1 md:flex"
                  aria-label="Navegação principal"
                >

                  <Link
                    href="/"
                    className="rounded-full px-4 py-2.5 text-sm font-bold text-[#6997B8] transition-all hover:bg-[#BAD8E8]/50 hover:text-[#244A6F]"
                  >
                    Início
                  </Link>

                  <Link
                    href="/estudo/dislexia"
                    className="rounded-full px-4 py-2.5 text-sm font-bold text-[#6997B8] transition-all hover:bg-[#BAD8E8]/50 hover:text-[#244A6F]"
                  >
                    Dislexia
                  </Link>

                  <Link
                    href="/atividades"
                    className="rounded-full px-4 py-2.5 text-sm font-bold text-[#6997B8] transition-all hover:bg-[#BAD8E8]/50 hover:text-[#244A6F]"
                  >
                    Atividades
                  </Link>

                  <Link
                    href="/profissionais"
                    className="rounded-full px-4 py-2.5 text-sm font-bold text-[#6997B8] transition-all hover:bg-[#BAD8E8]/50 hover:text-[#244A6F]"
                  >
                    Profissionais
                  </Link>

                  <Link
                    href="/ajuda"
                    className="rounded-full px-4 py-2.5 text-sm font-bold text-[#6997B8] transition-all hover:bg-[#BAD8E8]/50 hover:text-[#244A6F]"
                  >
                    Ajuda
                  </Link>

                </nav>

                {/* NIA */}
                <Link
                  href="/nia"
                  aria-label="Conversar com a NIA"
                  className="group flex shrink-0 items-center gap-2 rounded-full bg-[#6997B8] px-5 py-3 text-sm font-extrabold text-white shadow-[0_5px_15px_rgba(105,151,184,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#F3A05B] hover:shadow-[0_7px_18px_rgba(243,160,91,0.25)]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-base">
                    ✦
                  </span>

                  <span>NIA</span>
                </Link>

              </div>

              {/* MENU MOBILE */}
              <div className="border-t border-[#6997B8]/10 px-4 pb-3 pt-2 md:hidden">

                <nav
                  className="flex gap-2 overflow-x-auto pb-1"
                  aria-label="Navegação móvel"
                >

                  <Link
                    href="/"
                    className="shrink-0 rounded-full bg-white/60 px-4 py-2 text-sm font-bold text-[#6997B8]"
                  >
                    Início
                  </Link>

                  <Link
                    href="/estudo/dislexia"
                    className="shrink-0 rounded-full bg-white/60 px-4 py-2 text-sm font-bold text-[#6997B8]"
                  >
                    Dislexia
                  </Link>

                  <Link
                    href="/atividades"
                    className="shrink-0 rounded-full bg-white/60 px-4 py-2 text-sm font-bold text-[#6997B8]"
                  >
                    Atividades
                  </Link>

                  <Link
                    href="/profissionais"
                    className="shrink-0 rounded-full bg-white/60 px-4 py-2 text-sm font-bold text-[#6997B8]"
                  >
                    Profissionais
                  </Link>

                  <Link
                    href="/ajuda"
                    className="shrink-0 rounded-full bg-white/60 px-4 py-2 text-sm font-bold text-[#6997B8]"
                  >
                    Ajuda
                  </Link>

                </nav>

              </div>

            </div>
          </div>
        </header>

        {/* ESPAÇO PARA A BARRA FIXA */}
        <div className="h-[104px] sm:h-[108px]" />

        {/* CONTEÚDO */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
