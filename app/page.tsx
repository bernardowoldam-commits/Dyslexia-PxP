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
  Users,
  GraduationCap,
  Lightbulb,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const paths = [
  {
    href: "/estudo/dislexia",
    title: "Entenda a dislexia",
    icon: BookOpen,
    text: "Informações claras sobre características, desafios e diferentes formas de aprendizagem.",
  },
  {
    href: "/responsaveis",
    title: "Para responsáveis",
    icon: HeartHandshake,
    text: "Orientações para famílias acompanharem crianças e jovens com mais segurança.",
  },
  {
    href: "/profissionais",
    title: "Para profissionais",
    icon: Brain,
    text: "Materiais para educadores, especialistas e pessoas que trabalham com aprendizagem.",
  },
];

const highlights = [
  {
    title: "Compreender",
    text: "Conheça a dislexia sem simplificações ou preconceitos.",
  },
  {
    title: "Apoiar",
    text: "Transforme informação em estratégias práticas.",
  },
  {
    title: "Respeitar",
    text: "Cada pessoa possui um caminho próprio de aprendizagem.",
  },
  {
    title: "Encontrar caminhos",
    text: "Saiba onde buscar apoio quando necessário.",
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Entenda a dislexia", "/estudo/dislexia"],
    ["Famosos", "/famosos"],
    ["Biblioteca", "/biblioteca"],
    ["Entre Linhas", "/entre-linhas"],
    ["Ajuda", "/ajuda"],
    ["NIA", "/nia"],
    ["Sobre", "/sobre"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <a
          href="/"
          className="font-serif text-2xl font-bold text-deep"
        >
          Dyslexia Tortuguitas
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-semibold text-deep transition hover:text-orange"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-xl p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t bg-white p-5 md:hidden">
          <div className="grid gap-4">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-xl bg-slate-50 p-3 font-bold text-deep"
              >
                {label}
              </a>
            ))}
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
        type="button"
        className="btn btn-soft"
        onClick={() => setOpen(true)}
      >
        <Accessibility size={18} />
        Acessibilidade
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/30 p-5"
          onClick={() => setOpen(false)}
        >
          <aside
            className="ml-auto mt-10 max-w-sm rounded-3xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-between">
              <div>
                <p className="eyebrow">
                  Configurações
                </p>

                <h2 className="mt-2 text-2xl font-bold text-deep">
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
                <span>{large ? "Ativo" : "Off"}</span>
              </button>

              <button
                className="btn btn-soft justify-between"
                onClick={() => setContrast(!contrast)}
              >
                Alto contraste
                <span>{contrast ? "Ativo" : "Off"}</span>
              </button>

              <button
                className="btn btn-soft justify-between"
                onClick={() => setMotion(!motion)}
              >
                Menos animações
                <span>{motion ? "Ativo" : "Off"}</span>
              </button>

              <button
                className="btn btn-primary"
                onClick={() => {
                  setLarge(false);
                  setContrast(false);
                  setMotion(false);
                }}
              >
                Restaurar
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

        <section className="gradient-hero">
          <div className="container grid gap-12 py-20 md:grid-cols-2 md:py-32">

            <div>
              <p className="eyebrow">
                Dyslexia Tortuguitas
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-none text-deep md:text-7xl">
                Compreender é o primeiro passo para transformar.
              </h1>

              <p className="mt-6 max-w-xl text-xl leading-9 text-slate-600">
                Informação, acolhimento e ferramentas para pessoas
                com dislexia, famílias, escolas e profissionais.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/estudo/dislexia"
                  className="btn btn-primary"
                >
                  Entender a dislexia
                  <ArrowRight size={18}/>
                </a>

                <a
                  href="/biblioteca"
                  className="btn btn-outline-orange"
                >
                  Explorar conteúdos
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm font-bold text-slate-600">
                <span>✓ Conteúdo educativo</span>
                <span>✓ Navegação acessível</span>
                <span>✓ Informação confiável</span>
              </div>
            </div>


            <div className="card p-8">
              <Sparkles
                size={36}
                className="text-orange"
              />

              <h2 className="mt-6 text-3xl font-black text-deep">
                Você não precisa descobrir tudo sozinho.
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                A Dyslexia Tortuguitas reúne conhecimento,
                histórias, estratégias e caminhos de apoio.
              </p>

              <div className="mt-7 grid gap-3">

                <a
                  href="/estudo/dislexia"
                  className="rounded-2xl bg-cream p-5 font-bold text-deep"
                >
                  01 · Aprenda sobre dislexia →
                </a>

                <a
                  href="/responsaveis"
                  className="rounded-2xl bg-slate-50 p-5 font-bold text-deep"
                >
                  02 · Apoie alguém →
                </a>

                <a
                  href="/ajuda"
                  className="rounded-2xl bg-slate-50 p-5 font-bold text-deep"
                >
                  03 · Encontre ajuda →
                </a>

              </div>
            </div>

          </div>
        </section>
