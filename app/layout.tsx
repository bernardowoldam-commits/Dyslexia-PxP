import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DysHelp",
  description:
    "Compreender, acolher e apoiar pessoas com dislexia e suas redes de apoio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#F3EAD9] text-[#6997B8] antialiased">
        <header className="sticky top-0 z-50 border-b border-[#6997B8]/20 bg-[#F3EAD9]/95 backdrop-blur">
          <div className="mx-auto flex min-h-[82px] w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
            
            {/* LOGO */}
            <a
              href="/"
              className="flex shrink-0 items-center"
              aria-label="DysHelp - página inicial"
            >
              <img
                src="/DISLEXIA%20%281%29.png"
                alt="DysHelp"
                className="h-16 w-auto object-contain sm:h-[72px]"
              />
            </a>

            {/* NAVEGAÇÃO */}
            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-2 md:flex"
            >
              <a
                href="/"
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#6997B8] transition hover:bg-[#BAD8E8]/50"
              >
                Início
              </a>

              <a
                href="/estudo/dislexia"
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#6997B8] transition hover:bg-[#BAD8E8]/50"
              >
                Dislexia
              </a>

              <a
                href="/atividades"
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#6997B8] transition hover:bg-[#BAD8E8]/50"
              >
                Atividades
              </a>

              <a
                href="/profissionais"
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#6997B8] transition hover:bg-[#BAD8E8]/50"
              >
                Profissionais
              </a>

              <a
                href="/ajuda"
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#6997B8] transition hover:bg-[#BAD8E8]/50"
              >
                Ajuda
              </a>
            </nav>

            {/* BOTÃO NIA */}
            <a
              href="/nia"
              className="rounded-xl bg-[#6997B8] px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#527f9f] sm:px-5"
            >
              NIA
            </a>
          </div>
        </header>

        {/* CONTEÚDO DAS PÁGINAS */}
        <main className="min-h-[calc(100vh-82px)]">
          {children}
        </main>

        {/* RODAPÉ */}
        <footer className="border-t border-[#6997B8]/20 bg-[#F3EAD9]">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-bold text-[#6997B8]">
                DysHelp
              </p>

              <p className="mt-1 text-sm text-[#6997B8]/75">
                Compreender. Acolher. Apoiar.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="/ajuda"
                className="font-semibold text-[#6997B8] hover:underline"
              >
                Ajuda
              </a>

              <a
                href="/sobre"
                className="font-semibold text-[#6997B8] hover:underline"
              >
                Sobre
              </a>

              <a
                href="/responsaveis"
                className="font-semibold text-[#6997B8] hover:underline"
              >
                Responsáveis
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
