"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type NiaResponse = {
  ok?: boolean;
  answer?: string;
  error?: string;
};

export default function AjudaPage() {
  const [niaOpen, setNiaOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mythOpen, setMythOpen] = useState<number | null>(null);

  async function askNia(event?: FormEvent) {
    event?.preventDefault();

    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || loading) {
      return;
    }

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await fetch("/api/nia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: trimmedQuestion,
        }),
      });

      const data: NiaResponse = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Não foi possível obter uma resposta da NIA."
        );
      }

      if (!data.answer) {
        throw new Error("A NIA não retornou uma resposta.");
      }

      setAnswer(data.answer);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível preparar uma resposta agora."
      );
    } finally {
      setLoading(false);
    }
  }

  function newQuestion() {
    setQuestion("");
    setAnswer("");
    setError("");
  }

  function closeNia() {
    setNiaOpen(false);
    setError("");
  }

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* CABEÇALHO */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container flex min-h-[76px] items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Dyslexia Tortuguitas - voltar ao início"
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
            aria-label="Voltar ao início"
          >
            ← Voltar ao início
          </Link>
        </div>
      </header>

      {/* INTRODUÇÃO */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow">Ajuda e orientação</p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#25577d] md:text-6xl">
              Um espaço para compreender e encontrar caminhos.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Esta página reúne informações complementares para famílias,
              estudantes e profissionais. A ideia é ajudar você a compreender
              melhor a dislexia e encontrar formas mais acolhedoras de apoiar
              a aprendizagem.
            </p>
          </div>
        </div>
      </section>

      {/* NIA */}
      <section
        aria-labelledby="nia-title"
        className="bg-[#183b55] py-16 text-white"
      >
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#b9dff2]">
                  NIA · Núcleo de Inteligência e Apoio
                </p>

                <h2
                  id="nia-title"
                  className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl"
                >
                  Transforme dúvidas em caminhos possíveis.
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/80">
                  Uma ferramenta de apoio educativo para ajudar a organizar
                  dúvidas e pensar em caminhos relacionados à aprendizagem.
                </p>

                <p className="mt-5 text-sm leading-6 text-white/60">
                  A NIA tem finalidade educativa e não substitui avaliação ou
                  acompanhamento profissional.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setNiaOpen(true);
                    setError("");
                  }}
                  className="btn btn-primary mt-7"
                >
                  Conversar com a NIA →
                </button>
              </div>

              <div className="rounded-[30px] bg-white p-4 shadow-2xl">
                <div className="rounded-[24px] bg-[#f7f5ef] p-5">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d7edf8] text-[#25577d]">
                      ✦
                    </div>

                    <div>
                      <strong className="text-[#25577d]">NIA</strong>
                      <div className="text-xs text-slate-500">
                        Apoio educativo
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 py-5">
                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#183b55] p-4 text-sm text-white">
                      Meu filho fica frustrado quando precisa ler. Como posso
                      ajudar?
                    </div>

                    <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm">
                      A NIA pode ajudar a organizar a dúvida e sugerir caminhos
                      educativos para reflexão.
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setNiaOpen(true)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-500 hover:border-[#25577d] focus:outline-none focus:ring-2 focus:ring-[#25577d]"
                  >
                    Escreva sua dúvida...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTENDA */}
      <section
        aria-labelledby="entenda-title"
        className="section"
      >
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Entenda a dislexia</p>

            <h2
              id="entenda-title"
              className="mt-4 text-3xl font-extrabold tracking-tight text-[#25577d] md:text-4xl"
            >
              Primeiro, vamos entender.
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              A informação correta pode mudar a forma como enxergamos uma
              dificuldade.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="card p-7">
                <h3 className="text-xl font-extrabold text-[#25577d]">
                  O que é dislexia?
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Uma dificuldade específica de aprendizagem que pode afetar
                  principalmente habilidades relacionadas à leitura e à
                  escrita.
                </p>
              </article>

              <article className="card p-7">
                <h3 className="text-xl font-extrabold text-[#25577d]">
                  O que ela não é?
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Não é sinônimo de preguiça, falta de inteligência ou falta de
                  esforço.
                </p>
              </article>

              <article className="card p-7">
                <h3 className="text-xl font-extrabold text-[#25577d]">
                  Como pode aparecer?
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  As características podem variar bastante de uma pessoa para
                  outra. O importante é observar o conjunto das dificuldades e
                  sua persistência.
                </p>
              </article>

              <article className="card p-7">
                <h3 className="text-xl font-extrabold text-[#25577d]">
                  Como podemos ajudar?
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Estratégias, adaptações, tempo, apoio e uma comunicação
                  respeitosa podem facilitar diferentes experiências de
                  aprendizagem.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSÁVEIS */}
      <section
        aria-labelledby="responsaveis-title"
        className="bg-[#f7f5ef] py-16"
      >
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Para responsáveis</p>

            <h2
              id="responsaveis-title"
              className="mt-4 text-3xl font-extrabold tracking-tight text-[#25577d] md:text-4xl"
            >
              Para quem acompanha de perto.
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Você não precisa entender tudo de uma vez. Precisa apenas
              começar a compreender.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Como ajudar em casa",
                "Como apoiar os estudos",
                "Como conversar com a escola",
                "Quando procurar ajuda",
              ].map((item) => (
                <article
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-extrabold text-[#25577d]">{item}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Informação prática para apoiar com mais compreensão e
                    menos cobrança.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MITOS E VERDADES */}
      <section
        aria-labelledby="mitos-title"
        className="section"
      >
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Mitos e verdades</p>

            <h2
              id="mitos-title"
              className="mt-4 text-3xl font-extrabold text-[#25577d] md:text-4xl"
            >
              Nem tudo o que ouvimos sobre dislexia é verdade.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                {
                  question: "Dislexia significa falta de inteligência.",
                  answer: "MITO",
                  text: "Dislexia não é uma medida de inteligência. Pessoas podem ter diferentes perfis de habilidades e necessidades.",
                },
                {
                  question:
                    "Cada pessoa com dislexia pode apresentar características diferentes.",
                  answer: "VERDADE",
                  text: "As manifestações e necessidades de apoio podem variar de uma pessoa para outra.",
                },
              ].map((item, index) => (
                <button
                  key={item.question}
                  type="button"
                  onClick={() =>
                    setMythOpen(mythOpen === index ? null : index)
                  }
                  aria-expanded={mythOpen === index}
                  className="rounded-3xl border border-slate-200 bg-white p-7 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-[#25577d]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="text-xl font-extrabold text-[#25577d]">
                      {item.question}
                    </h3>

                    <span
                      aria-hidden="true"
                      className="text-2xl text-[#25577d]"
                    >
                      {mythOpen === index ? "−" : "+"}
                    </span>
                  </div>

                  {mythOpen === index && (
                    <div className="mt-5 border-t border-slate-200 pt-5">
                      <span className="inline-flex rounded-full bg-[#dcefe1] px-3 py-1 text-xs font-extrabold text-[#25577d]">
                        {item.answer}
                      </span>

                      <p className="mt-3 leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANTE */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-7 md:p-9">
            <p className="eyebrow">Importante</p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#25577d]">
              Informação não substitui avaliação.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A Dyslexia Tortuguitas tem finalidade educativa e de
              acolhimento. As informações apresentadas aqui não devem ser
              utilizadas para diagnosticar uma pessoa ou substituir avaliação
              e acompanhamento profissional.
            </p>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="container">
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <span>
              © {new Date().getFullYear()} Dyslexia Tortuguitas
            </span>

            <Link
              href="/"
              className="font-bold text-[#25577d] hover:underline focus:outline-none focus:ring-2 focus:ring-[#25577d] focus:ring-offset-2"
            >
              ← Voltar ao início
            </Link>
          </div>
        </div>
      </footer>

      {/* MODAL DA NIA */}
      {niaOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeNia();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="nia-dialog-title"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white shadow-2xl"
          >
            {/* CABEÇALHO DO MODAL */}
            <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#5a7690]">
                  NIA
                </p>

                <h2
                  id="nia-dialog-title"
                  className="mt-1 text-2xl font-extrabold text-[#25577d]"
                >
                  Como posso apoiar sua dúvida?
                </h2>
              </div>

              <button
                type="button"
                onClick={closeNia}
                aria-label="Fechar NIA"
                className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#25577d]"
              >
                ×
              </button>
            </div>

            {/* RESPOSTA */}
            <div className="p-6">
              {answer && (
                <div
                  className="rounded-2xl bg-[#f7f5ef] p-5"
                  aria-live="polite"
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#5a7690]">
                    Resposta da NIA
                  </p>

                  <p className="mt-3 whitespace-pre-wrap leading-7 text-slate-700">
                    {answer}
                  </p>
                </div>
              )}

              {error && (
                <div
                  className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700"
                  role="alert"
                >
                  <p className="font-semibold">
                    Não foi possível obter a resposta agora.
                  </p>

                  <p className="mt-2 text-sm leading-6">
                    {error}
                  </p>
                </div>
              )}

              {/* PERGUNTA */}
              <form
                onSubmit={askNia}
                className="mt-5"
              >
                <label
                  htmlFor="nia-question"
                  className="font-bold text-slate-700"
                >
                  Sua pergunta
                </label>

                <div className="mt-2 flex gap-2">
                  <textarea
                    id="nia-question"
                    value={question}
                    onChange={(event) => setQuestion(event.target.value)}
                    disabled={loading}
                    rows={2}
                    placeholder="Digite uma dúvida..."
                    className="min-h-[76px] min-w-0 flex-1 resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-[#25577d] focus:ring-2 focus:ring-[#25577d]/20 disabled:bg-slate-100"
                  />

                  <button
                    type="submit"
                    disabled={loading || !question.trim()}
                    aria-label="Enviar pergunta para a NIA"
                    className="flex h-[76px] w-[64px] items-center justify-center rounded-xl bg-[#25577d] text-2xl text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading ? "…" : "→"}
                  </button>
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Pressione Enter para enviar. Use Shift + Enter para criar
                  uma nova linha.
                </p>
              </form>

              {/* AÇÕES */}
              <div className="mt-6 flex flex-wrap justify-end gap-3">
                {(answer || error) && (
                  <button
                    type="button"
                    onClick={newQuestion}
                    className="btn btn-soft"
                  >
                    Nova pergunta
                  </button>
                )}

                <button
                  type="button"
                  onClick={closeNia}
                  className="btn btn-soft"
                >
                  Voltar ao site
                </button>
              </div>

              <p className="mt-6 text-center text-xs leading-5 text-slate-400">
                A NIA possui finalidade educativa e não substitui avaliação ou
                acompanhamento profissional.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
