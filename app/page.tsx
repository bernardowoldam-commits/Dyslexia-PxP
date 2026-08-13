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

const paths: Array<
  [string, string, React.ElementType, string]
> = [
  [
    "estudo/dislexia",
    "Entenda a dislexia",
    BookOpen,
    "Conheça a dislexia, suas características e diferentes formas de aprendizagem.",
  ],
  [
    "responsaveis",
    "Para responsáveis",
    HeartHandshake,
    "Estratégias e informações para famílias e pessoas que acompanham crianças e jovens.",
  ],
  [
    "profissionais",
    "Para profissionais",
    Brain,
    "Materiais e caminhos para profissionais que trabalham com aprendizagem.",
  ],
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7eef3] bg-white/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <a
          href="/"
          className="font-bold text-[#234f73]"
        >
          DysHelp
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="/estudo/dislexia" className="nav-link">
            Entenda a dislexia
          </a>

          <a href="/famosos" className="nav-link">
            Famosos
          </a>

          <a href="/biblioteca" className="nav-link">
            Biblioteca
          </a>

          <a href="/ajuda" className="nav-link">
            Ajuda
          </a>

          <a href="/nia" className="nav-link">
            NIA
          </a>

          <a href="/sobre" className="nav-link">
            Sobre
          </a>
        </nav>

        <button
          className="icon-button md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          type="button"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="border-t bg-white px-6 py-5 md:hidden">
          <div className="container grid gap-4">
            <a className="mobile-nav-link" href="/estudo/dislexia">
              Entenda a dislexia
            </a>

            <a className="mobile-nav-link" href="/famosos">
              Famosos
            </a>

            <a className="mobile-nav-link" href="/biblioteca">
              Biblioteca
            </a>

            <a className="mobile-nav-link" href="/ajuda">
              Ajuda
            </a>

            <a className="mobile-nav-link" href="/nia">
              NIA
            </a>

            <a className="mobile-nav-link" href="/sobre">
              Sobre
            </a>
          </div>
        </nav>
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
        onClick={() => setOpen(true)}
        className="accessibility-button"
        type="button"
      >
        <Accessibility size={18} />
        Acessibilidade
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[80] bg-black/30 p-4"
          onClick={() => setOpen(false)}
        >
          <aside
            className="nia-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nia-modal-header">
              <div>
                <p className="eyebrow">
                  Acessibilidade
                </p>

                <h2 className="section-title text-3xl">
                  Ajuste sua leitura
                </h2>
              </div>

              <button
                className="icon-button"
                onClick={() => setOpen(false)}
                type="button"
              >
                <X />
              </button>
            </div>

            <div className="nia-modal-body grid gap-3">
              <button
                className="access-option"
                onClick={() => setLarge(!large)}
              >
                Texto maior
                <strong>
                  {large ? "Ativo" : "Inativo"}
                </strong>
              </button>

              <button
                className="access-option"
                onClick={() => setContrast(!contrast)}
              >
                Alto contraste
                <strong>
                  {contrast ? "Ativo" : "Inativo"}
                </strong>
              </button>

              <button
                className="access-option"
                onClick={() => setMotion(!motion)}
              >
                Reduzir animações
                <strong>
                  {motion ? "Ativo" : "Inativo"}
                </strong>
              </button>

              <button
                className="btn btn-blue"
                onClick={() => {
                  setLarge(false);
                  setContrast(false);
                  setMotion(false);
                }}
              >
                Restaurar padrão
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}export default function Home() {
  const supportCards: Array<
    [React.ElementType, string, string, string, string]
  > = [
    [
      Brain,
      "NIA",
      "Uma futura camada de inteligência artificial educativa, construída com limites claros.",
      "/nia",
      "Conhecer a NIA",
    ],
    [
      ShieldCheck,
      "Ajuda especializada",
      "Links para organizações, registros profissionais e diretórios de busca.",
      "/ajuda",
      "Encontrar apoio",
    ],
    [
      BookOpen,
      "Biblioteca",
      "Textos curtos para ler e consultar quando precisar.",
      "/biblioteca",
      "Abrir biblioteca",
    ],
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="hero-section">
          <div className="container grid items-center gap-12 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24">
            <div className="hero-copy">
              <p className="eyebrow">
                DysHelp
              </p>

              <h1 className="display-title mt-4">
                Compreender é o primeiro passo para transformar.
              </h1>

              <div className="orange-line" />

              <p className="hero-text">
                Informação, acolhimento e ferramentas para pessoas com
                dislexia, famílias, escolas e profissionais.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/estudo/dislexia"
                  className="btn btn-orange"
                >
                  Entender a dislexia
                  <ArrowRight size={18} />
                </a>

                <a
                  href="/biblioteca"
                  className="btn btn-soft"
                >
                  Explorar conteúdos
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-[#5d7184]">
                <span>
                  ✓ Conteúdo educativo
                </span>

                <span>
                  ✓ Navegação acessível
                </span>

                <span>
                  ✓ Gratuito para começar
                </span>
              </div>
            </div>

            <div className="feature-card">
              <Sparkles
                size={30}
                className="text-[#234f73]"
              />

              <h2 className="mt-6">
                Você não precisa descobrir tudo sozinho.
              </h2>

              <p>
                Comece por onde fizer mais sentido. O DysHelp reúne
                informação, estratégias e caminhos de apoio.
              </p>

              <div className="mt-7 grid gap-3">
                <a
                  href="/estudo/dislexia"
                  className="rounded-2xl bg-[#f3ead9] p-4 font-bold text-[#234f73]"
                >
                  01 · Entenda →
                </a>

                <a
                  href="/famosos"
                  className="rounded-2xl bg-[#edf5f9] p-4 font-bold text-[#234f73]"
                >
                  02 · Inspire-se →
                </a>

                <a
                  href="/ajuda"
                  className="rounded-2xl bg-[#edf5f9] p-4 font-bold text-[#234f73]"
                >
                  03 · Encontre apoio →
                </a>
              </div>
            </div>
          </div>
        </section>


        <section className="section">
          <div className="container">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow">
                Por onde começar?
              </p>

              <h2 className="section-title mt-3">
                Escolha o caminho que combina com você.
              </h2>

              <p className="section-text">
                Não existe um único jeito de aprender.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {paths.map(([slug, title, Icon, text]) => (
                <a
                  href={`/${slug}`}
                  key={slug}
                  className="feature-card"
                >
                  <div className="feature-icon blue">
                    <Icon size={30} />
                  </div>

                  <h2>
                    {title}
                  </h2>

                  <p>
                    {text}
                  </p>

                  <span className="card-link">
                    Explorar
                    <ArrowRight size={16} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>


        <section className="about-section">
          <div className="container grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
            <div>
              <p className="eyebrow">
                Estudo em destaque
              </p>

              <h2 className="section-title mt-3">
                Entendendo a dislexia
              </h2>

              <p className="section-text">
                Um ponto de partida para compreender, apoiar, respeitar
                e saber quando procurar ajuda.
              </p>

              <a
                href="/estudo/dislexia"
                className="btn btn-blue mt-7"
              >
                Abrir estudo completo
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Compreender", "Conheça diferentes formas de aprender."],
                ["Apoiar", "Transforme informação em estratégias."],
                ["Respeitar", "Dificuldade não define inteligência."],
                ["Encaminhar", "Saiba quando procurar ajuda."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="feature-card"
                >
                  <h2>
                    {title}
                  </h2>

                  <p>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
