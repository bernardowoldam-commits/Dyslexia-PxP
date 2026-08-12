"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type ChatNIAProps = {
  initialMessage?: string;
  onClose: () => void;
};

function ChatNIA({
  initialMessage = "",
  onClose,
}: ChatNIAProps) {
  const [message, setMessage] = useState(initialMessage);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function sendMessage(event?: FormEvent) {
    event?.preventDefault();

    const text = message.trim();

    if (!text || loading) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/nia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(
          data.error || "Não foi possível obter uma resposta da NIA."
        );
      }

      setAnswer(data.response || "Não recebi uma resposta.");
    } catch (err) {
      console.error("Erro no chat NIA:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível obter uma resposta da NIA."
      );
    } finally {
      setLoading(false);
    }
  }

  function newQuestion() {
    setAnswer("");
    setError("");
    setMessage("");
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* CABEÇALHO */}
        <div className="flex shrink-0 items-start justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
              NIA
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-[#25577d]">
              Como posso apoiar sua dúvida?
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-2xl text-slate-500 transition hover:bg-slate-100 hover:text-[#25577d]"
          >
            ×
          </button>
        </div>

        {/* CONTEÚDO */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          {!answer && !error && (
            <div className="rounded-2xl bg-[#f7f4ee] p-5">
              <p className="text-base leading-7 text-slate-700">
                Olá! Sou a NIA, o Núcleo de Inteligência e Apoio.
                <br />
                <br />
                Posso ajudar com dúvidas educativas sobre aprendizagem,
                leitura, escrita, organização dos estudos e estratégias de
                apoio.
              </p>
            </div>
          )}

          {answer && (
            <div className="rounded-2xl bg-[#f7f4ee] p-5">
              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">
                Resposta da NIA
              </p>

              <p className="whitespace-pre-line text-base leading-7 text-slate-700">
                {answer}
              </p>
            </div>
          )}

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
              <p className="text-sm leading-6 text-red-700">
                {error}
              </p>
            </div>
          )}
        </div>

        {/* ÁREA DA PERGUNTA */}
        <div className="shrink-0 border-t border-slate-200 bg-white px-6 py-5">
          <form onSubmit={sendMessage}>
            <label
              htmlFor="nia-question"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              Sua pergunta
            </label>

            <div className="flex gap-3">
              <textarea
                id="nia-question"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
                rows={2}
                placeholder="Digite uma dúvida..."
                className="min-h-[58px] flex-1 resize-none rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#25577d] focus:ring-2 focus:ring-[#25577d]/20"
              />

              <button
                type="submit"
                disabled={loading || !message.trim()}
                aria-label="Enviar pergunta"
                className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-2xl bg-[#25577d] text-2xl text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {loading ? "…" : "→"}
              </button>
            </div>
          </form>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-400">
              Enter envia · Shift + Enter cria uma nova linha
            </p>

            <div className="flex gap-2">
              {answer && (
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
                onClick={onClose}
                className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-200"
              >
                Voltar ao site
              </button>
            </div>
          </div>

          <p className="mt-3 text-center text-xs leading-5 text-slate-400">
            A NIA tem finalidade educativa e não substitui avaliação ou
            acompanhamento profissional.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AjudaPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [initialQuestion, setInitialQuestion] = useState("");

  function openChat(question = "") {
    setInitialQuestion(question);
    setChatOpen(true);
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container flex min-h-[76px] items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <div className="text-xl font-extrabold tracking-tight text-[#25577d]">
              DYSLEXIA TORTUGUITAS
            </div>

            <div className="text-[10px] font-bold tracking-[0.18em] text-slate-500">
              COMPREENDER. ACOLHER. APOIAR.
            </div>
          </Link>

          <Link href="/" className="btn btn-soft">
            ← Voltar ao início
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section
        id="nia"
        className="bg-[#173c56] py-20 text-white md:py-28"
      >
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
                NIA · NÚCLEO DE INTELIGÊNCIA E APOIO
              </p>

              <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-tight md:text-7xl">
                Transforme dúvidas em caminhos possíveis.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/75 md:text-xl">
                Uma ferramenta de apoio educativo preparada para ajudar em
                dúvidas sobre aprendizagem, leitura, escrita e estratégias de
                estudo.
              </p>

              <p className="mt-6 max-w-xl text-sm leading-6 text-white/60">
                A NIA possui finalidade educativa e não substitui avaliação ou
                acompanhamento profissional.
              </p>

              <button
                type="button"
                onClick={() => openChat()}
                className="mt-8 rounded-2xl bg-[#d3b43f] px-6 py-4 text-base font-extrabold text-slate-900 transition hover:scale-[1.02] hover:opacity-95"
              >
                Conversar com a NIA 💬
              </button>
            </div>

            {/* PRÉVIA DO CHAT */}
            <div className="rounded-[30px] bg-white/90 p-4 shadow-2xl">
              <div className="rounded-[24px] border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dcecf5] text-2xl">
                    ✨
                  </div>

                  <div>
                    <h2 className="text-lg font-extrabold text-[#25577d]">
                      NIA
                    </h2>

                    <p className="text-sm text-slate-500">
                      Apoio educativo
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-[#25577d] p-5 text-white">
                  <p className="text-sm leading-6">
                    Meu filho fica frustrado quando precisa ler. Como posso
                    ajudar?
                  </p>
                </div>

                <div className="mt-4 rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm leading-6 text-slate-600">
                    Podemos pensar em estratégias para tornar a leitura mais
                    leve, dividir a atividade em etapas e valorizar o esforço.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    openChat(
                      "Meu filho fica frustrado quando precisa ler. Como posso ajudar?"
                    )
                  }
                  className="mt-5 flex w-full items-center justify-center rounded-2xl border border-slate-200 px-5 py-4 text-sm font-bold text-[#25577d] transition hover:bg-slate-50"
                >
                  Fazer uma pergunta →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="eyebrow">Como podemos ajudar</p>

              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#25577d] md:text-5xl">
                Apoio para transformar dificuldades em possibilidades.
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A NIA foi pensada para oferecer orientação educativa inicial,
                com linguagem simples e acolhedora.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <section className="card p-7 md:p-8">
                <div className="text-3xl">📚</div>

                <h3 className="mt-4 text-2xl font-extrabold text-[#25577d]">
                  Aprendizagem
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Tire dúvidas sobre estratégias de estudo, leitura, escrita e
                  organização das atividades.
                </p>
              </section>

              <section className="card p-7 md:p-8">
                <div className="text-3xl">💡</div>

                <h3 className="mt-4 text-2xl font-extrabold text-[#25577d]">
                  Estratégias
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Encontre caminhos práticos para tornar determinadas tarefas
                  educativas mais acessíveis.
                </p>
              </section>

              <section className="card p-7 md:p-8">
                <div className="text-3xl">🤝</div>

                <h3 className="mt-4 text-2xl font-extrabold text-[#25577d]">
                  Acolhimento
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Informação educativa deve ajudar, não aumentar a ansiedade ou
                  a pressão sobre quem está aprendendo.
                </p>
              </section>

              <section className="card p-7 md:p-8">
                <div className="text-3xl">🛡️</div>

                <h3 className="mt-4 text-2xl font-extrabold text-[#25577d]">
                  Segurança
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  A NIA não realiza diagnósticos e não substitui profissionais
                  qualificados.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Como funciona</p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#25577d]">
              Uma conversa simples.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="card bg-white p-7">
                <div className="text-3xl font-extrabold text-[#d3b43f]">
                  01
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-[#25577d]">
                  Faça uma pergunta
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Escreva sua dúvida com suas próprias palavras.
                </p>
              </div>

              <div className="card bg-white p-7">
                <div className="text-3xl font-extrabold text-[#d3b43f]">
                  02
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-[#25577d]">
                  Receba uma orientação
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  A NIA apresenta uma resposta curta e educativa.
                </p>
              </div>

              <div className="card bg-white p-7">
                <div className="text-3xl font-extrabold text-[#d3b43f]">
                  03
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-[#25577d]">
                  Continue a conversa
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Você pode editar sua pergunta, fazer outra ou voltar ao site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVISO */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[28px] border border-slate-200 bg-white p-8 md:p-10">
            <p className="eyebrow">Importante</p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#25577d]">
              A NIA é uma ferramenta educativa.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Uma dificuldade de leitura, escrita ou aprendizagem pode ter
              diferentes causas. A NIA não diagnostica condições e não deve ser
              utilizada para substituir uma avaliação profissional.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/estudo/dislexia"
                className="btn btn-primary"
              >
                Estudo sobre dislexia →
              </Link>

              <button
                type="button"
                onClick={() => openChat()}
                className="btn btn-soft"
              >
                Conversar com a NIA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="container">
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Dyslexia Tortuguitas
            </p>

            <Link
              href="/"
              className="font-bold text-[#25577d] hover:underline"
            >
              Voltar ao início →
            </Link>
          </div>
        </div>
      </footer>

      {/* CHAT */}
      {chatOpen && (
        <ChatNIA
          initialMessage={initialQuestion}
          onClose={() => {
            setChatOpen(false);
            setInitialQuestion("");
          }}
        />
      )}
    </main>
  );
}
