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
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <a
          href="/"
          className="text-xl font-extrabold tracking-tight text-deep"
        >
          Dyslexia Tortuguitas
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="/estudo/dislexia" className="font-semibold">
            Entenda a dislexia
          </a>
          <a href="/famosos" className="font-semibold">
            Famosos
          </a>
          <a href="/biblioteca" className="font-semibold">
            Biblioteca
          </a>
          <a href="/ajuda" className="font-semibold">
            Ajuda
          </a>
          <a href="/nia" className="font-semibold">
            NIA
          </a>
          <a href="/sobre" className="font-semibold">
            Sobre
          </a>
        </nav>

        <button
          className="rounded-xl p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="border-t bg-white px-6 py-5 md:hidden">
          <div className="container grid gap-4">
            <a href="/estudo/dislexia">Entenda a dislexia</a>
            <a href="/famosos">Famosos</a>
            <a href="/biblioteca">Biblioteca</a>
            <a href="/ajuda">Ajuda</a>
            <a href="/nia">NIA</a>
            <a href="/sobre">Sobre</a>
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
    document.documentElement.classList.toggle("large-text", large);
    document.documentElement.classList.toggle("contrast", contrast);
    document.documentElement.classList.toggle("no-motion", motion);
  }, [large, contrast, motion]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn btn-soft"
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
            className="ml-auto mt-16 w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
              <div>
                <p className="eyebrow">Acessibilidade</p>
                <h2 className="text-2xl font-extrabold text-deep">
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
                <span>{contrast ? "Ativo" : "Inativo"}</span>
              </button>

              <button
                className="btn btn-soft justify-between"
                onClick={() => setMotion(!motion)}
              >
                Reduzir animações
                <span>{motion ? "Ativo" : "Inativo"}</span>
              </button>

              <button
                className="btn btn-primary"
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
}

export default function Home() {
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
        <section className="gradient-hero overflow-hidden">
          <div className="container grid items-center gap-12 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24">
            <div className="reveal">
              <p className="eyebrow">Dyslexia Tortuguitas</p>

              <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-.045em] text-deep md:text-7xl">
                Compreender é o primeiro passo para transformar.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Informação, acolhimento e ferramentas para pessoas com
                dislexia, famílias, escolas e profissionais.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/estudo/dislexia"
                  className="btn btn-primary"
                >
                  Entender a dislexia
                  <ArrowRight size={18} />
                </a>

                <a href="/ajuda" className="btn btn-sun">
                  Encontrar ajuda especializada
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
                <span>✓ Conteúdo educativo</span>
                <span>✓ Navegação acessível</span>
                <span>✓ Gratuito para começar</span>
              </div>
            </div>

            <div className="card relative overflow-hidden p-7 md:p-9">
              <Sparkles className="text-deep" size={30} />

              <h2 className="mt-6 text-3xl font-extrabold text-deep">
                Você não precisa descobrir tudo sozinho.
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Comece por onde fizer mais sentido. O site reúne informação,
                estratégias e caminhos de apoio.
              </p>

              <div className="mt-7 grid gap-3">
                <a
                  href="/estudo/dislexia"
                  className="rounded-2xl bg-cream p-4 font-bold text-deep"
                >
                  01 · Entenda →
                </a>

                <a
                  href="/famosos"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-deep"
                >
                  02 · Inspire-se →
                </a>

                <a
                  href="/ajuda"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-deep"
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
              <p className="eyebrow">Por onde começar?</p>

              <h2 className="mt-3 text-3xl font-extrabold text-deep md:text-5xl">
                Escolha o caminho que combina com você.
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Não existe um único jeito de aprender.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {paths.map(([slug, title, Icon, text]) => (
                <a
                  href={`/${slug}`}
                  key={slug}
                  className="card group p-7"
                >
                  <Icon className="text-deep" size={30} />

                  <h3 className="mt-6 text-2xl font-extrabold text-deep">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {text}
                  </p>

                  <span className="mt-6 inline-flex gap-2 font-bold text-deep">
                    Explorar
                    <ArrowRight size={16} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-cream">
          <div className="container grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
            <div>
              <p className="eyebrow">Estudo em destaque</p>

              <h2 className="mt-3 text-3xl font-extrabold text-deep md:text-5xl">
                Entendendo a dislexia
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Um ponto de partida para compreender, apoiar, respeitar e
                saber quando procurar ajuda.
              </p>

              <a
                href="/estudo/dislexia"
                className="btn btn-primary mt-7"
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
                  className="rounded-3xl bg-white p-6"
                >
                  <h3 className="text-xl font-extrabold text-deep">
                    {title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Histórias que inspiram</p>

                <h2 className="mt-3 text-3xl font-extrabold text-deep md:text-5xl">
                  Famosos também tiveram caminhos diferentes.
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  Conheça histórias públicas de pessoas que falaram sobre
                  dislexia.
                </p>
              </div>

              <a href="/famosos" className="btn btn-soft">
                Ver histórias
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-8 rounded-[2rem] bg-deep p-8 text-white md:p-10">
              <div className="grid gap-8 md:grid-cols-[.4fr_1fr_auto] md:items-center">
                <div className="text-7xl font-black text-white/15">
                  TC
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[.16em] text-white/60">
                    Cinema · exemplo público
                  </p>

                  <h3 className="mt-2 text-3xl font-extrabold">
                    Tom Cruise
                  </h3>

                  <p className="mt-3 max-w-2xl leading-7 text-white/80">
                    Uma trajetória conhecida de perseverança, apresentada
                    sem transformar sucesso em comparação.
                  </p>
                </div>

                <a href="/famosos" className="btn btn-sun">
                  Conhecer
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-slate-50">
          <div className="container grid gap-5 md:grid-cols-3">
            {supportCards.map(
              ([Icon, title, description, href, label], index) => (
                <div key={index} className="card p-7">
                  <Icon className="text-deep" size={30} />

                  <h3 className="mt-5 text-2xl font-extrabold text-deep">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {description}
                  </p>

                  <a
                    href={href}
                    className="mt-5 inline-flex gap-2 font-bold text-deep"
                  >
                    {label}
                    <ArrowRight size={16} />
                  </a>
                </div>
              )
            )}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card flex flex-col gap-6 p-7 md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <p className="eyebrow">Acessibilidade</p>

                <h2 className="mt-2 text-3xl font-extrabold text-deep">
                  Faça o site funcionar melhor para você.
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Ajuste o tamanho do texto, o contraste e as animações
                  conforme sua preferência.
                </p>
              </div>

              <AccessibilityPanel />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-deep py-12 text-white">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h2 className="text-xl font-extrabold">
                Dyslexia Tortuguitas
              </h2>

              <p className="mt-3 max-w-sm leading-7 text-white/70">
                Informação, acolhimento e caminhos de apoio para uma
                aprendizagem mais inclusiva.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Explorar</h3>

              <div className="mt-3 grid gap-2 text-white/70">
                <a href="/estudo/dislexia">Entenda a dislexia</a>
                <a href="/famosos">Famosos</a>
                <a href="/biblioteca">Biblioteca</a>
                <a href="/entre-linhas">Entre Linhas</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold">Ajuda</h3>

              <div className="mt-3 grid gap-2 text-white/70">
                <a href="/ajuda">Ajuda especializada</a>
                <a href="/responsaveis">Responsáveis</a>
                <a href="/profissionais">Profissionais</a>
                <a href="/sobre">Sobre nós</a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
            © 2026 Dyslexia Tortuguitas. Conteúdo educativo.
          </div>
        </div>
      </footer>
    </div>
  );
}
