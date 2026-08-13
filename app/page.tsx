"use client";

import {
  Accessibility,
  ArrowRight,
  BookOpen,
  Brain,
  HeartHandshake,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const paths = [
  {
    href: "/estudo/dislexia",
    title: "Entenda a dislexia",
    icon: BookOpen,
    text: "Conheça a dislexia, suas características e diferentes formas de aprendizagem.",
  },
  {
    href: "/responsaveis",
    title: "Para responsáveis",
    icon: HeartHandshake,
    text: "Estratégias e informações para famílias e pessoas que acompanham crianças e jovens.",
  },
  {
    href: "/profissionais",
    title: "Para profissionais",
    icon: Brain,
    text: "Materiais e caminhos para profissionais que trabalham com aprendizagem.",
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Entenda a dislexia", "/estudo/dislexia"],
    ["Famosos", "/famosos"],
    ["Biblioteca", "/biblioteca"],
    ["Ajuda", "/ajuda"],
    ["NIA", "/nia"],
    ["Sobre", "/sobre"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <a
          href="/"
          className="font-extrabold tracking-tight text-deep text-xl"
        >
          DysHelp
        </a>

        <nav className="hidden gap-6 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-semibold text-deep"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-xl p-2 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white p-6 md:hidden">
          <nav className="grid gap-4">
            {links.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const [large, setLarge] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "large-text",
      large
    );

    document.documentElement.classList.toggle(
      "high-contrast",
      contrast
    );

    document.documentElement.classList.toggle(
      "reduce-motion",
      motion
    );
  }, [large, contrast, motion]);

  return (
    <>
      <button
        className="btn btn-soft"
        onClick={() => setOpen(true)}
      >
        <Accessibility size={18} />
        Acessibilidade
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/30 p-5">
          <aside className="ml-auto mt-10 max-w-sm rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex justify-between">
              <div>
                <p className="eyebrow">
                  Acessibilidade
                </p>

                <h2 className="text-2xl font-bold text-deep">
                  Ajuste sua leitura
                </h2>
              </div>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>
                        <div className="mt-6 grid gap-3">
              <button
                className="btn btn-soft justify-between"
                onClick={() => setLarge(!large)}
              >
                Texto maior
                <span>{large ? "Ativo" : "Inativo"}</span>
              </button>

              <button
                className="btn btn-soft justify-between"
                onClick={() => setContrast(!contrast)}
              >
                Alto contraste
                <span>
                  {contrast ? "Ativo" : "Inativo"}
                </span>
              </button>

              <button
                className="btn btn-soft justify-between"
                onClick={() => setMotion(!motion)}
              >
                Menos animações
                <span>
                  {motion ? "Ativo" : "Inativo"}
                </span>
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="gradient-hero overflow-hidden">
          <div className="container grid gap-12 py-20 md:grid-cols-2">
            <div>
              <p className="eyebrow">
                DysHelp
              </p>

              <h1 className="mt-5 text-5xl font-extrabold leading-tight text-deep md:text-7xl">
                Compreender é o primeiro passo para transformar.
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Informação, acolhimento e ferramentas para
                pessoas com dislexia, famílias, escolas e
                profissionais.
              </p>

              <a
                href="/estudo/dislexia"
                className="btn btn-primary mt-8"
              >
                Entender a dislexia
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="card p-8">
              <Sparkles
                size={32}
                className="text-deep"
              />

              <h2 className="mt-6 text-3xl font-bold text-deep">
                Você não precisa descobrir tudo sozinho.
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Encontre informação confiável, estratégias e
                caminhos de apoio.
              </p>
            </div>
          </div>
        </section>


        <section className="section">
          <div className="container">
            <p className="eyebrow">
              Por onde começar?
            </p>

            <h2 className="mt-3 text-4xl font-bold text-deep">
              Escolha o caminho que combina com você.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {paths.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    href={item.href}
                    key={item.href}
                    className="card p-7"
                  >
                    <Icon
                      size={32}
                      className="text-deep"
                    />

                    <h3 className="mt-5 text-2xl font-bold text-deep">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.text}
                    </p>

                    <span className="mt-5 inline-flex gap-2 font-bold text-deep">
                      Explorar
                      <ArrowRight size={16} />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>


        <section className="section bg-cream">
          <div className="container">
            <p className="eyebrow">
              Estudo em destaque
            </p>

            <h2 className="mt-3 text-5xl font-bold text-deep">
              Entendendo a dislexia
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Um ponto de partida para compreender,
              apoiar e respeitar diferentes formas de
              aprendizagem.
            </p>
          </div>
        </section>
                <section className="section">
          <div className="container">
            <div className="rounded-[2rem] bg-deep p-10 text-white">
              <p className="uppercase tracking-widest text-white/60">
                Histórias que inspiram
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Pessoas famosas também tiveram caminhos diferentes.
              </h2>

              <p className="mt-4 text-white/70">
                Conheça histórias públicas sem transformar
                sucesso em comparação.
              </p>

              <a
                href="/famosos"
                className="btn btn-sun mt-7"
              >
                Ver histórias
              </a>
            </div>
          </div>
        </section>


        <section className="section bg-slate-50">
          <div className="container grid gap-5 md:grid-cols-3">
            {[
              [
                Brain,
                "NIA",
                "Uma futura camada de inteligência artificial educativa.",
              ],
              [
                ShieldCheck,
                "Ajuda especializada",
                "Links e caminhos para encontrar apoio.",
              ],
              [
                BookOpen,
                "Biblioteca",
                "Textos curtos para consulta.",
              ],
            ].map(([Icon, title, text]) => {
              const IconComponent =
                Icon as React.ElementType;

              return (
                <div
                  className="card p-7"
                  key={String(title)}
                >
                  <IconComponent
                    size={32}
                    className="text-deep"
                  />

                  <h3 className="mt-5 text-2xl font-bold text-deep">
                    {title}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>


        <section className="section">
          <div className="container card flex flex-col gap-5 p-8 md:flex-row md:justify-between">
            <div>
              <p className="eyebrow">
                Acessibilidade
              </p>

              <h2 className="mt-3 text-3xl font-bold text-deep">
                Faça o site funcionar melhor para você.
              </h2>
            </div>

            <AccessibilityPanel />
          </div>
        </section>
      </main>
            <footer className="bg-deep py-12 text-white">
        <div className="container">
          <h2 className="text-xl font-bold">
            DysHelp
          </h2>

          <p className="mt-3 text-white/70">
            Informação, acolhimento e caminhos de apoio
            para diferentes formas de aprendizagem.
          </p>

          <div className="mt-8 border-t border-white/10 pt-5 text-sm text-white/50">
            © 2026 DysHelp. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
