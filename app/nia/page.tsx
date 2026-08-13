"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function askNia() {
    const question = message.trim();

    if (!question) {
      setError("Digite uma pergunta para conversar com a NIA.");
      return;
    }

    setLoading(true);
    setResponse("");
    setError("");

    try {
      const res = await fetch("/api/nia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data?.error || "Não foi possível obter uma resposta da NIA."
        );
      }

      setResponse(
        data?.answer || "A NIA não retornou uma resposta."
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro ao conectar com a NIA."
      );
    } finally {
      setLoading(false);
    }
  }

  function newQuestion() {
    setMessage("");
    setResponse("");
    setError("");
  }

  return (
    <main className="min-h-screen bg-[#F3EAD9] text-[#6997B8]">

      {/* HERO DA NIA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-20 md:pt-16">
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full bg-[#BAD8E8]/45 px-4 py-2 text-sm font-bold text-[#6997B8]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6997B8] text-white">
                ✦
              </span>

              Assistente educativa DysHelp
            </div>

            <h1 className="mt-6 font-serif text-5xl font-bold leading-tight text-[#6997B8] md:text-6xl">
              Olá, eu sou a{" "}
              <span className="text-[#F3A05B]">NIA.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6997B8]/80 md:text-xl">
              Núcleo de Inteligência e Apoio. Estou aqui para ajudar você
              a compreender melhor a dislexia, a aprendizagem e estratégias
              de apoio.
            </p>

          </div>
        </div>
      </section>

      {/* ÁREA DE CONVERSA */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">

          <div className="overflow-hidden rounded-[32px] border border-[#6997B8]/15 bg-white shadow-[0_15px_50px_rgba(54,91,116,0.10)]">

            {/* CABEÇALHO */}
            <div className="flex items-center gap-4 border-b border-[#6997B8]/10 bg-[#BAD8E8]/25 px-6 py-5 md:px-8">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#6997B8] text-xl text-white shadow-sm">
                ✦
              </div>

              <div>
                <h2 className="font-bold text-[#6997B8]">
                  Converse com a NIA
                </h2>

                <p className="text-sm text-[#6997B8]/70">
                  Faça uma pergunta e receba uma orientação educativa.
                </p>
              </div>

            </div>

            {/* CONTEÚDO */}
            <div className="p-6 md:p-8">

              {/* RESPOSTA DA NIA */}
              {response && (
                <div className="mb-8 rounded-3xl border border-[#6997B8]/15 bg-[#BAD8E8]/20 p-5 md:p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6997B8] text-white">
                      ✦
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#6997B8]/60">
                        NIA
                      </p>

                      <h3 className="font-bold text-[#6997B8]">
                        Minha resposta
                      </h3>
                    </div>

                  </div>

                  <div className="mt-4 rounded-2xl bg-white p-5 md:p-6">
                    <p className="whitespace-pre-wrap leading-8 text-[#244A6F]">
                      {response}
                    </p>
                  </div>

                </div>
              )}

              {/* CAMPO DE PERGUNTA */}
              <label
                htmlFor="nia-question"
                className="text-sm font-bold text-[#6997B8]"
              >
                {response ? "Faça outra pergunta" : "Sua pergunta"}
              </label>

              <textarea
                id="nia-question"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);

                  if (error) {
                    setError("");
                  }
                }}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" &&
                    !event.shiftKey
                  ) {
                    event.preventDefault();
                    askNia();
                  }
                }}
                placeholder="Ex.: Como posso ajudar uma criança com dislexia a estudar?"
                className="mt-3 min-h-[150px] w-full resize-y rounded-2xl border-2 border-[#6997B8]/15 bg-[#F3EAD9]/30 p-5 text-base leading-7 text-[#244A6F] outline-none transition placeholder:text-[#6997B8]/50 focus:border-[#6997B8] focus:bg-white"
                aria-describedby="nia-help"
              />

              <p
                id="nia-help"
                className="mt-2 text-xs text-[#6997B8]/60"
              >
                Pressione Enter para enviar ou Shift + Enter para criar uma
                nova linha.
              </p>

              {/* BOTÕES */}
              <div className="mt-5 flex flex-wrap gap-3">

                <button
                  type="button"
                  onClick={askNia}
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6997B8] px-6 py-3.5 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F3A05B] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="animate-pulse">✦</span>
                      A NIA está pensando...
                    </>
                  ) : (
                    <>
                      <span>✦</span>
                      Perguntar à NIA
                    </>
                  )}
                </button>

                {(message || response || error) && !loading && (
                  <button
                    type="button"
                    onClick={newQuestion}
                    className="rounded-xl border-2 border-[#6997B8]/20 px-6 py-3.5 font-bold text-[#6997B8] transition hover:bg-[#BAD8E8]/35"
                  >
                    Nova pergunta
                  </button>
                )}

              </div>

              {/* ERRO */}
              {error && (
                <div
                  role="alert"
                  className="mt-6 rounded-2xl border border-[#F3A05B]/30 bg-[#F3EAD9] p-5"
                >
                  <p className="font-bold text-[#C66F32]">
                    Não foi possível obter uma resposta.
                  </p>

                  <p className="mt-2 leading-7 text-[#6997B8]">
                    {error}
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* O QUE A NIA FAZ */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">

            <p className="text-sm font-bold tracking-[0.18em] text-[#6997B8]">
              COMO POSSO AJUDAR
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold text-[#6997B8] md:text-5xl">
              Apoio simples e responsável.
            </h2>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <article className="rounded-3xl border border-[#6997B8]/15 bg-[#BAD8E8]/20 p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6997B8] text-xl text-white">
                ?
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#6997B8]">
                Tirar dúvidas
              </h3>

              <p className="mt-3 leading-7 text-[#6997B8]/80">
                Explique conceitos relacionados à dislexia, leitura,
                aprendizagem e estudo.
              </p>

            </article>

            <article className="rounded-3xl border border-[#F3A05B]/25 bg-[#F3EAD9] p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3A05B] text-xl text-white">
                ✓
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#F3A05B]">
                Sugerir estratégias
              </h3>

              <p className="mt-3 leading-7 text-[#6997B8]/80">
                Encontre ideias práticas para organizar estudos e apoiar
                diferentes formas de aprendizagem.
              </p>

            </article>

            <article className="rounded-3xl border border-[#6997B8]/15 bg-[#BAD8E8]/20 p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6997B8] text-xl text-white">
                ♥
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#6997B8]">
                Acolher
              </h3>

              <p className="mt-3 leading-7 text-[#6997B8]/80">
                Oferecer informações de forma clara, respeitosa e sem
                julgamentos.
              </p>

            </article>

          </div>
        </div>
      </section>

      {/* AVISO */}
      <section className="px-6 py-12">

        <div className="mx-auto max-w-4xl rounded-3xl border border-[#6997B8]/15 bg-[#BAD8E8]/20 p-6 md:p-8">

          <h2 className="font-bold text-[#6997B8]">
            Um apoio educativo
          </h2>

          <p className="mt-3 leading-7 text-[#6997B8]/80">
            A NIA oferece informações e sugestões com finalidade educativa.
            Ela não realiza diagnósticos, não prescreve medicamentos e não
            substitui profissionais especializados.
          </p>

        </div>

      </section>

      {/* NAVEGAÇÃO FINAL */}
      <section className="px-6 pb-16">

        <div className="mx-auto flex max-w-4xl flex-wrap gap-3">

          <Link
            href="/"
            className="rounded-xl bg-[#6997B8] px-6 py-3.5 font-bold text-white transition hover:bg-[#F3A05B]"
          >
            ← Voltar ao início
          </Link>

          <Link
            href="/estudo/dislexia"
            className="rounded-xl border-2 border-[#6997B8]/20 px-6 py-3.5 font-bold text-[#6997B8] transition hover:bg-[#BAD8E8]/35"
          >
            Estudar sobre dislexia
          </Link>

        </div>

      </section>

    </main>
  );
}
