"use client";

import Link from "next/link";
import { useState } from "react";

const series = [
  "1º ano — Ensino Fundamental",
  "2º ano — Ensino Fundamental",
  "3º ano — Ensino Fundamental",
  "4º ano — Ensino Fundamental",
  "5º ano — Ensino Fundamental",
  "6º ano — Ensino Fundamental",
  "7º ano — Ensino Fundamental",
  "8º ano — Ensino Fundamental",
  "9º ano — Ensino Fundamental",
  "1º ano — Ensino Médio",
  "2º ano — Ensino Médio",
  "3º ano — Ensino Médio",
];

const objectives = [
  "Leitura",
  "Compreensão",
  "Escrita",
  "Ortografia",
  "Consciência fonológica",
  "Vocabulário",
  "Organização",
];

const levels = ["Inicial", "Intermediário", "Avançado"];

export default function Page() {
  const [seriesSelected, setSeriesSelected] = useState(series[0]);
  const [objective, setObjective] = useState(objectives[0]);
  const [level, setLevel] = useState(levels[0]);
  const [quantity, setQuantity] = useState("5");
  const [extra, setExtra] = useState("");
  const [activity, setActivity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generateActivity() {
    setLoading(true);
    setError("");
    setActivity("");

    const prompt = `
Crie uma atividade pedagógica para um profissional da educação.

Série: ${seriesSelected}
Objetivo: ${objective}
Nível: ${level}
Quantidade de questões: ${quantity}

Orientações adicionais:
${extra || "Nenhuma orientação adicional."}

REGRAS:
- Escreva em português do Brasil.
- A atividade deve ser adequada à série informada.
- Seja clara, objetiva e acessível.
- Crie exatamente ${quantity} questões.
- Numere todas as questões.
- Inclua instruções para o profissional aplicar a atividade.
- Não faça diagnóstico.
- Não apresente a atividade como tratamento médico.
- Evite conteúdo inadequado para a idade.
- Não invente informações clínicas sobre o aluno.
- Ao final, inclua uma pequena seção chamada "Orientações ao profissional".
- A atividade deve ser prática e pronta para ser adaptada ou impressa.
`;

    try {
      const response = await fetch("/api/nia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: prompt,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Não foi possível gerar a atividade."
        );
      }

      setActivity(data.answer || "");
    } catch (err) {
      console.error(err);
      setError(
        "Não foi possível gerar a atividade agora. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  function newActivity() {
    setActivity("");
    setError("");
    setExtra("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function printActivity() {
    window.print();
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur print:hidden">
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
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Prática profissional</p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-deep md:text-6xl">
              Para profissionais
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
              Recursos para planejar, adaptar e criar atividades pedagógicas
              de forma mais organizada e acessível.
            </p>

            <section
              id="fazedor"
              className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8"
            >
              <div className="max-w-3xl">
                <p className="eyebrow">Ferramenta profissional</p>

                <h2 className="mt-3 text-3xl font-extrabold text-deep md:text-4xl">
                  Fazedor de Atividades
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Crie uma proposta inicial de atividade de acordo com a
                  série, objetivo, nível e quantidade de questões.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-bold text-deep">
                    Ano / Série
                  </span>

                  <select
                    value={seriesSelected}
                    onChange={(e) => setSeriesSelected(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none focus:border-slate-500"
                  >
                    {series.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block font-bold text-deep">
                    Objetivo
                  </span>

                  <select
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none focus:border-slate-500"
                  >
                    {objectives.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block font-bold text-deep">
                    Nível
                  </span>

                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none focus:border-slate-500"
                  >
                    {levels.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block font-bold text-deep">
                    Quantidade de questões
                  </span>

                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none focus:border-slate-500"
                  >
                    {Array.from({ length: 10 }, (_, index) => {
                      const value = String(index + 1);

                      return (
                        <option key={value} value={value}>
                          {value} {value === "1" ? "questão" : "questões"}
                        </option>
                      );
                    })}
                  </select>
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-2 block font-bold text-deep">
                    Orientações adicionais{" "}
                    <span className="font-normal text-slate-500">
                      (opcional)
                    </span>
                  </span>

                  <textarea
                    value={extra}
                    onChange={(e) => setExtra(e.target.value)}
                    rows={4}
                    placeholder="Ex.: trabalhar palavras simples, usar frases curtas, incluir atividade de associação..."
                    className="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-500"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={generateActivity}
                  disabled={loading}
                  className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Gerando atividade..." : "Gerar atividade →"}
                </button>

                {activity && (
                  <button
                    type="button"
                    onClick={newActivity}
                    className="btn btn-soft"
                  >
                    Nova atividade
                  </button>
                )}
              </div>

              {error && (
                <div
                  role="alert"
                  className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700"
                >
                  {error}
                </div>
              )}

              {activity && (
                <section
                  id="atividade-gerada"
                  className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"
                >
                  <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-start md:justify-between print:hidden">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                        Prévia da atividade
                      </p>

                      <h3 className="mt-2 text-2xl font-extrabold text-deep">
                        {objective} · {seriesSelected}
                      </h3>

                      <p className="mt-2 text-slate-600">
                        Nível {level} · {quantity}{" "}
                        {quantity === "1" ? "questão" : "questões"}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={printActivity}
                      className="btn btn-soft shrink-0"
                    >
                      Imprimir
                    </button>
                  </div>

                  <div className="prose prose-slate mt-8 max-w-none whitespace-pre-wrap leading-8">
                    {activity}
                  </div>
                </section>
              )}
            </section>

            <div className="mt-12 grid gap-8 md:grid-cols-2 print:hidden">
              <section className="card p-7 md:p-8">
                <h2 className="text-2xl font-extrabold text-deep">
                  Estratégias pedagógicas
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Planeje instruções claras, objetivos pequenos e
                  oportunidades variadas de prática.
                </p>
              </section>

              <section className="card p-7 md:p-8">
                <h2 className="text-2xl font-extrabold text-deep">
                  Adaptações
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Considere tempo, formato de apresentação, organização das
                  tarefas e formas alternativas de demonstrar aprendizagem.
                </p>
              </section>

              <section className="card p-7 md:p-8">
                <h2 className="text-2xl font-extrabold text-deep">
                  Materiais educacionais
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Prefira materiais legíveis, previsíveis e organizados em
                  blocos curtos.
                </p>
              </section>

              <section className="card p-7 md:p-8">
                <h2 className="text-2xl font-extrabold text-deep">
                  Acompanhamento
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Use registros, observações e objetivos para perceber
                  evolução. Eles não devem ser tratados como diagnóstico.
                </p>
              </section>
            </div>

            <div className="mt-12 flex flex-wrap gap-3 print:hidden">
              <Link
                href="/estudo/dislexia"
                className="btn btn-primary"
              >
                Estudo sobre dislexia →
              </Link>

              <Link href="/" className="btn btn-soft">
                ← Voltar ao início
              </Link>
            </div>
          </div>
        </div>
      </article>

      <style jsx global>{`
        @media print {
          header,
          .print\\:hidden {
            display: none !important;
          }

          body {
            background: white !important;
          }

          #atividade-gerada {
            border: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </main>
  );
}
