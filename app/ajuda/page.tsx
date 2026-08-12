"use client";

import Link from "next/link";
import { FormEvent, KeyboardEvent, useState } from "react";

export default function AjudaPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function openChat() {
    setIsOpen(true);
    setError("");
  }

  function closeChat() {
    setIsOpen(false);
    setLoading(false);
  }

  function newQuestion() {
    setQuestion("");
    setAnswer("");
    setError("");
  }

  async function sendQuestion(event?: FormEvent) {
    event?.preventDefault();

    const text = question.trim();

    if (!text) {
      setError("Digite uma pergunta.");
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
          question: text,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Não foi possível obter uma resposta da NIA."
        );
      }

      setAnswer(
        data?.answer ||
          "Não consegui preparar uma resposta agora. Tente novamente."
      );
    } catch (err) {
      console.error("Erro ao conversar com a NIA:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível obter uma resposta da NIA."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendQuestion();
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-[#173b57] text-white">
        <div className="container">
          <div className="grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                NIA · NÚCLEO DE INTELIGÊNCIA E APOIO
              </p>

              <h1 className="max-w-2xl text-5xl font-extrabold leading-[0.98] tracking-tight md:text-7xl">
                Transforme dúvidas em caminhos possíveis.
              </h1>

              <p className="mt-8 max-w-xl text-xl leading-9 text-white/75">
                Uma ferramenta de apoio educativo preparada para ajudar
                responsáveis, estudantes e educadores a organizar dúvidas e
                encontrar próximos caminhos.
              </p>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
                A NIA possui finalidade educativa e não substitui avaliação,
                diagnóstico ou acompanhamento profissional.
              </p>

              <button
                type="button"
                onClick={openChat}
                className="mt-9 rounded-xl bg-[#d6b43f] px-7 py-4 text-base font-extrabold text-slate-900 transition hover:scale-[1.02] hover:bg-[#e0c04e]"
              >
                Conversar com a NIA 💬
              </button>
            </div>

            {/* PREVIEW */}
            <div className="rounded-[30px] bg-white/90 p-4 shadow-2xl backdrop-blur">
              <div className="rounded-[24px] border border-slate-200 bg-white p-7 text-slate-800">
                <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-xl">
                    ✨
                  </div>

                  <div>
                    <h2 className="text-lg font-extrabold text-[#24557b]">
                      NIA
                    </h2>
                    <p className="text-sm text-slate-500">
                      Apoio educativo
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-5">
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-[#173b57] p-5 text-white">
                    Meu filho fica frustrado quando precisa ler. Como posso
                    ajudar?
                  </div>

                  <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-slate-200 bg-slate-50 p-5 leading-7 text-slate-600">
                    Podemos pensar em estratégias para tornar a leitura mais
                    confortável, dividir a atividade em etapas e observar o
                    que está dificultando a experiência.
                  </div>

                  <div className="flex gap-3">
                    <div className="h-12 flex-1 rounded-xl border border-slate-200 bg-white" />
                    <div className="flex h-12 w-14 items-center justify-center rounded-xl bg-[#24557b] text-xl text-white">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Como a NIA pode ajudar</p>

            <h2 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-deep md:text-5xl">
              Informação clara para transformar dúvidas em próximos passos.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <article className="card p-7">
                <div className="text-3xl">💡</div>
                <h3 className="mt-5 text-xl font-extrabold text-deep">
                  Organizar dúvidas
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Ajuda a transformar uma preocupação ampla em perguntas mais
                  claras e objetivas.
                </p>
              </article>

              <article className="card p-7">
                <div className="text-3xl">📚</div>
                <h3 className="mt-5 text-xl font-extrabold text-deep">
                  Apoio educativo
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Pode sugerir estratégias de estudo, organização e apoio à
                  aprendizagem.
                </p>
              </article>

              <article className="card p-7">
                <div className="text-3xl">🧭</div>
                <h3 className="mt-5 text-xl font-extrabold text-deep">
                  Próximos caminhos
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Ajuda a identificar possibilidades e quando pode ser
                  importante buscar orientação especializada.
                </p>
              </article>
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm leading-7 text-slate-600">
                <strong className="text-slate-800">Importante:</strong> a NIA é
                uma ferramenta educativa. Ela não diagnostica dislexia, não
                prescreve tratamentos e não substitui profissionais de saúde,
                educação ou avaliação especializada.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/" className="btn btn-soft">
                ← Voltar ao início
              </Link>

              <Link href="/estudo/dislexia" className="btn btn-primary">
                Estudar sobre dislexia →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL DA NIA */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="nia-title"
            className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl"
          >
            {/* CABEÇALHO */}
            <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5 md:px-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5a7690]">
                  NIA
                </p>

                <h2
                  id="nia-title"
                  className="mt-1 text-2xl font-extrabold text-[#24557b] md:text-3xl"
                >
                  Como posso apoiar sua dúvida?
                </h2>
              </div>

              <button
                type="button"
                onClick={closeChat}
                aria-label="Fechar"
                className="ml-4 text-3xl leading-none text-slate-400 transition hover:text-slate-700"
              >
                ×
              </button>
            </div>

            {/* RESPOSTA */}
            <div className="overflow-y-auto px-6 py-6 md:px-7">
              {loading && (
                <div className="rounded-2xl bg-slate-50 p-5 text-slate-600">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5a7690]">
                    NIA
                  </p>

                  <p className="mt-2">
                    Pensando em uma resposta...
                  </p>
                </div>
              )}

              {!loading && error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
                  {error}
                </div>
              )}

              {!loading && !error && answer && (
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5a7690]">
                    Resposta da NIA
                  </p>

                  <p className="mt-3 whitespace-pre-line leading-7 text-slate-700">
                    {answer}
                  </p>
                </div>
              )}

              {!loading && !error && !answer && (
                <div className="rounded-2xl bg-[#f7f5ef] p-5 text-slate-600">
                  <p className="leading-7">
                    Faça uma pergunta sobre aprendizagem, leitura, estudo,
                    organização ou estratégias de apoio educativo.
                  </p>
                </div>
              )}
            </div>

            {/* PERGUNTA */}
            <form
              onSubmit={sendQuestion}
              className="border-t border-slate-200 px-6 py-5 md:px-7"
            >
              <label
                htmlFor="nia-question"
                className="text-sm font-bold text-slate-700"
              >
                Sua pergunta
              </label>

              <div className="mt-3 flex gap-3">
                <textarea
                  id="nia-question"
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                  rows={2}
                  placeholder="Digite uma dúvida..."
                  className="min-h-[76px] flex-1 resize-none rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#24557b] focus:ring-2 focus:ring-[#24557b]/10 disabled:bg-slate-50"
                />

                <button
                  type="submit"
                  disabled={loading || !question.trim()}
                  aria-label="Enviar pergunta"
                  className="h-[76px] w-[64px] shrink-0 rounded-2xl bg-[#24557b] text-2xl text-white transition hover:bg-[#1c4667] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  →
                </button>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-slate-400">
                  Enter envia · Shift + Enter cria uma nova linha
                </p>

                <div className="flex gap-2">
                  {(answer || error) && (
                    <button
                      type="button"
                      onClick={newQuestion}
                      className="rounded-xl px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-100"
                    >
                      Nova pergunta
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={closeChat}
                    className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-200"
                  >
                    Voltar ao site
                  </button>
                </div>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                A NIA tem finalidade educativa e não substitui avaliação ou
                acompanhamento profissional.
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
