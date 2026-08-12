"use client";

import Link from "next/link";
import { useState } from "react";

export default function AjudaPage() {
  const [niaOpen, setNiaOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* CABEÇALHO */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container flex min-h-[76px] items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Dyslexia Tortuguitas - voltar para a página inicial"
            className="shrink-0"
          >
            <div className="text-xl font-extrabold tracking-tight text-[#25577d]">
              DYSLEXIA TORTUGUITAS
            </div>

            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-500">
              COMPREENDER. ACOLHER. APOIAR.
            </div>
          </Link>

          <Link
            href="/"
            className="btn btn-soft"
            aria-label="Voltar para a página inicial"
          >
            ← Voltar ao início
          </Link>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <article>
        {/* INTRODUÇÃO */}
        <section className="section">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <p className="eyebrow">Ajuda e orientação</p>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#25577d] md:text-6xl">
                Como podemos ajudar?
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                Esta área reúne informações para ajudar você a compreender
                melhor o projeto, encontrar orientação educativa e saber quando
                procurar apoio especializado.
              </p>
            </div>
          </div>
        </section>

        {/* NIA */}
        <section
          aria-labelledby="nia-heading"
          className="border-y border-slate-200 bg-[#f7f5ef] py-16"
        >
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-[28px] bg-white p-7 shadow-sm md:p-10">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#5a7690]">
                  NIA
                </p>

                <h2
                  id="nia-heading"
                  className="mt-3 text-3xl font-extrabold tracking-tight text-[#25577d] md:text-4xl"
                >
                  Núcleo de Inteligência e Apoio
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                  A NIA foi pensada como uma ferramenta de apoio educativo para
                  ajudar a organizar dúvidas e encontrar caminhos relacionados
                  à aprendizagem, leitura, escrita e estudo.
                </p>

                <div className="mt-7">
                  <button
                    type="button"
                    onClick={() => setNiaOpen(true)}
                    className="btn btn-primary"
                    aria-haspopup="dialog"
                    aria-controls="nia-dialog"
                  >
                    Conversar com a NIA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ORIENTAÇÕES */}
        <section className="section" aria-labelledby="orientacoes-heading">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <p className="eyebrow">Orientações</p>

              <h2
                id="orientacoes-heading"
                className="mt-4 text-3xl font-extrabold tracking-tight text-[#25577d] md:text-4xl"
              >
                O que você encontra aqui
              </h2>

              <div className="mt-10 space-y-5">
                <section className="card p-6 md:p-7">
                  <h3 className="text-xl font-extrabold text-[#25577d]">
                    Informação educativa
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Conteúdos para compreender melhor questões relacionadas à
                    aprendizagem e às dificuldades de leitura e escrita.
                  </p>
                </section>

                <section className="card p-6 md:p-7">
                  <h3 className="text-xl font-extrabold text-[#25577d]">
                    Estratégias de apoio
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Sugestões educativas que podem ajudar a tornar determinadas
                    atividades mais organizadas, claras e acessíveis.
                  </p>
                </section>

                <section className="card p-6 md:p-7">
                  <h3 className="text-xl font-extrabold text-[#25577d]">
                    Quando buscar ajuda profissional
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Informações educativas não substituem uma avaliação
                    individual. Quando houver preocupação persistente,
                    sofrimento ou dificuldades significativas, é importante
                    procurar profissionais qualificados.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANTE */}
        <section
          aria-labelledby="importante-heading"
          className="border-t border-slate-200 bg-slate-50 py-16"
        >
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-[28px] border border-slate-200 bg-white p-7 md:p-9">
                <p className="eyebrow">Importante</p>

                <h2
                  id="importante-heading"
                  className="mt-4 text-3xl font-extrabold text-[#25577d]"
                >
                  Informação não é diagnóstico.
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A Dyslexia Tortuguitas tem uma proposta educativa e de
                  acolhimento. Nenhuma ferramenta desta página deve ser usada
                  para diagnosticar uma pessoa ou substituir avaliação e
                  acompanhamento profissional.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* RODAPÉ */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="container">
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Dyslexia Tortuguitas
            </p>

            <Link
              href="/"
              className="font-bold text-[#25577d] hover:underline focus:outline-none focus:ring-2 focus:ring-[#25577d] focus:ring-offset-2"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </footer>

      {/* NIA */}
      {niaOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setNiaOpen(false);
            }
          }}
        >
          <div
            id="nia-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="nia-dialog-title"
            className="w-full max-w-2xl overflow-hidden rounded-[28px] bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#5a7690]">
                  NIA
                </p>

                <h2
                  id="nia-dialog-title"
                  className="mt-1 text-2xl font-extrabold text-[#25577d]"
                >
                  Núcleo de Inteligência e Apoio
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setNiaOpen(false)}
                aria-label="Fechar janela da NIA"
                className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#25577d]"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <p className="leading-7 text-slate-600">
                A interface da NIA está disponível aqui. A integração com a
                inteligência artificial será tratada separadamente.
              </p>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setNiaOpen(false)}
                  className="btn btn-soft"
                >
                  Voltar ao site
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
