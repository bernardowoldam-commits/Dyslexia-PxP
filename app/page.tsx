"use client";

import {
  ArrowRight,
  Accessibility,
  BookOpen,
  Brain,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

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
        className="btn btn-blue"
        onClick={() => setOpen(true)}
        type="button"
      >
        <Accessibility size={18} />
        Acessibilidade
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/30 p-5"
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-auto mt-20 max-w-md rounded-3xl bg-white p-7 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold text-[#234f73]">
                Ajustes de leitura
              </h2>

              <button
                type="button"
                onClick={() => setOpen(false)}
              >
                <X />
              </button>
            </div>

            <div className="mt-6 grid gap-3">
              <button
                className="access-option"
                onClick={() => setLarge(!large)}
              >
                Texto maior
                <strong>
                  {large ? "Ativo" : "Off"}
                </strong>
              </button>

              <button
                className="access-option"
                onClick={() => setContrast(!contrast)}
              >
                Alto contraste
                <strong>
                  {contrast ? "Ativo" : "Off"}
                </strong>
              </button>

              <button
                className="access-option"
                onClick={() => setMotion(!motion)}
              >
                Menos animações
                <strong>
                  {motion ? "Ativo" : "Off"}
                </strong>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const cards = [
  {
    icon: BookOpen,
    title: "Entenda a dislexia",
    text:
      "Informações claras sobre características, desafios e diferentes formas de aprendizagem.",
    link: "/estudo/dislexia",
  },
  {
    icon: HeartHandshake,
    title: "Famílias e responsáveis",
    text:
      "Estratégias para acompanhar, acolher e apoiar crianças e jovens.",
    link: "/responsaveis",
  },
  {
    icon: Brain,
    title: "Profissionais",
    text:
      "Conteúdos para educadores e especialistas envolvidos na aprendizagem.",
    link: "/profissionais",
  },
];

export default function Home() {
  return (
    <main>

      <section className="hero-section">
        <div className="container grid gap-12 py-20 md:grid-cols-2 md:items-center">

          <div className="hero-copy">

            <p className="eyebrow">
              DysHelp
            </p>

            <h1 className="display-title mt-5">
              Compreender a aprendizagem é transformar possibilidades.
            </h1>

            <div className="orange-line" />

            <p className="hero-text">
              Uma plataforma criada para informar, acolher e conectar
              pessoas com dislexia, famílias, escolas e profissionais.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="/estudo/dislexia"
                className="btn btn-blue"
              >
                Explorar dislexia
                <ArrowRight size={18}/>
              </a>

              <a
                href="/famosos"
                className="btn btn-outline-orange"
              >
                Histórias reais
              </a>

            </div>

          </div>


          <div className="feature-card">

            <Sparkles
              size={36}
              className="text-[#f3a05b]"
            />

            <h2>
              Aprender diferente não significa aprender menos.
            </h2>

            <p>
              Cada pessoa possui uma forma própria de interpretar,
              organizar e construir conhecimento.
            </p>

            <div className="mt-6 grid gap-3">

              <a
                href="/nia"
                className="card-link"
              >
                Conhecer a NIA
                <ArrowRight size={16}/>
              </a>

              <a
                href="/ajuda"
                className="card-link orange-link"
              >
                Encontrar apoio
                <ArrowRight size={16}/>
              </a>

            </div>

          </div>

        </div>
      </section>


      <section className="section">
        <div className="container">

          <p className="eyebrow">
            Caminhos
          </p>

          <h2 className="section-title mt-3">
            Encontre o conteúdo certo para sua jornada.
          </h2>


          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {cards.map((item) => {

              const Icon = item.icon;

              return (
                <a
                  href={item.link}
                  key={item.title}
                  className="feature-card"
                >

                  <div className="feature-icon blue">
                    <Icon />
                  </div>

                  <h2>
                    {item.title}
                  </h2>

                  <p>
                    {item.text}
                  </p>

                  <span className="card-link">
                    Explorar
                    <ArrowRight size={16}/>
                  </span>

                </a>
              );

            })}

          </div>

        </div>
      </section>


      <section className="cream-section py-20">

        <div className="container grid gap-8 md:grid-cols-2">

          <div>

            <p className="eyebrow">
              Histórias que inspiram
            </p>

            <h2 className="section-title mt-3">
              Pessoas conhecidas também percorreram caminhos diferentes.
            </h2>

            <p className="section-text">
              Conheça trajetórias públicas de pessoas que falaram sobre
              suas experiências com aprendizagem e dislexia.
            </p>

            <a
              href="/famosos"
              className="btn btn-orange mt-6"
            >
              Ver histórias
              <ArrowRight />
            </a>

          </div>


          <div className="feature-card">

            <Users size={38}/>

            <h2>
              Tom Cruise
            </h2>

            <p>
              Uma história frequentemente associada à superação de
              dificuldades escolares e busca por estratégias próprias
              de aprendizagem.
            </p>

          </div>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <div className="feature-card flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="eyebrow">
                Acessibilidade
              </p>

              <h2>
                Personalize sua experiência.
              </h2>

              <p>
                Ajuste leitura, contraste e movimento conforme sua necessidade.
              </p>

            </div>

            <AccessibilityPanel />

          </div>

        </div>

      </section>


      <footer className="footer">

        <div className="container">

          <h2 className="footer-title">
            DysHelp
          </h2>

          <p className="mt-3">
            Informação, acolhimento e apoio para uma aprendizagem mais inclusiva.
          </p>

        </div>

      </footer>

    </main>
  );
}
