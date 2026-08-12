"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function askNia() {
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
          message:
            message.trim() ||
            "Olá NIA! Explique em uma frase o que é dislexia.",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(
          data.error || "Não foi possível obter uma resposta da NIA."
        );
      }

      setResponse(data.response || "A NIA não retornou uma resposta.");
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

  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container flex min-h-[76px] items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <div className="text-xl font-extrabold tracking-tight text-deep">
              DYSLEXIA TORTUGUITAS
            </div>

            <div className="text-[10px] font-bold tracking-[.18em] text-slate-500">
              COMPREENDER. ACOLHER. APOIAR.
            </div>
          </Link>

          <Link href="/" className="btn btn-soft">
            ← Voltar ao início
          </Link>
        </div>
      </header>

      <article className="section">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">IA educativa</p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-deep md:text-6xl">
              NIA — Núcleo de Inteligência e Apoio
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
              Uma assistente educativa para ajudar a compreender a dislexia
              com informação clara, acolhedora e responsável.
            </p>

            <div className="mt-10 card p-7 md:p-8">
              <h2 className="text-2xl font-extrabold text-deep">
                Converse com a NIA
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                Faça uma pergunta sobre dislexia, leitura, aprendizagem ou
                estratégias de apoio.
              </p>

              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Ex.: O que é dislexia?"
                className="mt-6 min-h-[140px] w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-slate-500"
              />

              <button
                type="button"
                onClick={askNia}
                disabled={loading}
                className="btn btn-primary mt-5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "A NIA está pensando..." : "Perguntar à NIA →"}
              </button>

              {response && (
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-extrabold text-deep">
                    Resposta da NIA
                  </h3>

                  <p className="mt-3 whitespace-pre-wrap leading-8 text-slate-700">
                    {response}
                  </p>
                </div>
              )}

              {error && (
                <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">
                  <h3 className="font-extrabold text-red-800">
                    Não foi possível obter uma resposta
                  </h3>

                  <p className="mt-3 whitespace-pre-wrap leading-7 text-red-700">
                    {error}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <section className="card p-7 md:p-8">
                <h2 className="text-2xl font-extrabold text-deep">
                  O que a NIA fará
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Apoiar dúvidas educativas, explicar conceitos e sugerir
                  caminhos de estudo e apoio.
                </p>
              </section>

              <section className="card p-7 md:p-8">
                <h2 className="text-2xl font-extrabold text-deep">
                  O que a NIA não fará
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  A ferramenta não deve diagnosticar, prometer cura ou
                  substituir avaliação e acompanhamento profissional.
                </p>
              </section>

              <section className="card p-7 md:p-8">
                <h2 className="text-2xl font-extrabold text-deep">
                  Privacidade
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  A chave da API permanece no servidor e não é colocada no
                  código do navegador.
                </p>
              </section>

              <section className="card p-7 md:p-8">
                <h2 className="text-2xl font-extrabold text-deep">
                  Uso responsável
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  As respostas da NIA têm finalidade educativa e não
                  substituem profissionais especializados.
                </p>
              </section>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                href="/estudo/dislexia"
                className="btn btn-primary"
              >
                Estudo sobre dislexia →
              </Link>

              <Link href="/" className="btn btn-soft">
                Explorar o site
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
