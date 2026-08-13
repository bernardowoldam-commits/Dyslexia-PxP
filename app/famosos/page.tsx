```tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type FamousPerson = {
  id: string;
  name: string;
  category: string;
  description: string;
  image_url: string | null;
  article_url: string | null;
};

export default function FamososPage() {
  const [people, setPeople] = useState<FamousPerson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPeople() {
      try {
        const response = await fetch("/api/famous-people", {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok || !data.ok) {
          throw new Error(
            data?.error || "Não foi possível carregar as histórias."
          );
        }

        setPeople(data.people || []);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Erro ao carregar as pessoas."
        );
      } finally {
        setLoading(false);
      }
    }

    loadPeople();
  }, []);

  return (
    <main className="min-h-screen bg-[#F6F3EE] text-[#263B53]">
      {/* CABEÇALHO */}
      <header className="sticky top-0 z-50 border-b border-[#263B53]/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-[76px] max-w-6xl items-center justify-between gap-4 px-6">
          <Link href="/" className="shrink-0">
            <div className="text-2xl font-extrabold tracking-tight text-[#263B53]">
              DysHelp
            </div>

            <div className="text-[10px] font-bold tracking-[.18em] text-[#6B8299]">
              COMPREENDER. ACOLHER. APOIAR.
            </div>
          </Link>

          <Link
            href="/"
            className="rounded-xl border-2 border-[#263B53]/10 bg-white px-5 py-3 font-bold text-[#263B53] transition hover:-translate-y-0.5 hover:border-[#E9A15B]/40 hover:bg-[#FFF7ED]"
          >
            ← Voltar ao início
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pb-20 md:pt-20">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#6B8299]">
              Histórias que inspiram
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#263B53] md:text-6xl">
              Pessoas famosas que falaram sobre dislexia
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#53697E] md:text-xl md:leading-9">
              Conheça histórias de pessoas de diferentes áreas que falaram
              sobre suas experiências com a dislexia e outras dificuldades
              relacionadas à aprendizagem.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          {/* CARREGANDO */}
          {loading && (
            <div className="rounded-[2rem] border border-[#263B53]/10 bg-white p-8 shadow-[0_15px_50px_rgba(38,59,83,0.07)]">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 animate-pulse rounded-full bg-[#DCE8F0]" />

                <div>
                  <div className="h-5 w-48 animate-pulse rounded bg-[#DCE8F0]" />
                  <div className="mt-2 h-4 w-72 animate-pulse rounded bg-[#EEF2F5]" />
                </div>
              </div>
            </div>
          )}

          {/* ERRO */}
          {!loading && error && (
            <div className="rounded-[2rem] border border-[#E9A15B]/30 bg-[#FFF7ED] p-8">
              <h2 className="text-2xl font-extrabold text-[#263B53]">
                Não foi possível carregar as histórias
              </h2>

              <p className="mt-3 leading-7 text-[#53697E]">
                {error}
              </p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-6 rounded-xl bg-[#263B53] px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E9A15B]"
              >
                Tentar novamente
              </button>
            </div>
          )}

          {/* VAZIO */}
          {!loading && !error && people.length === 0 && (
            <div className="rounded-[2rem] border border-[#263B53]/10 bg-white p-8">
              <h2 className="text-2xl font-extrabold text-[#263B53]">
                Histórias em construção
              </h2>

              <p className="mt-3 leading-7 text-[#53697E]">
                Novas histórias serão adicionadas em breve.
              </p>
            </div>
          )}

          {/* CARDS */}
          {!loading && !error && people.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2">
              {people.map((person) => (
                <article
                  key={person.id}
                  className="group overflow-hidden rounded-[2rem] border border-[#263B53]/10 bg-white shadow-[0_15px_50px_rgba(38,59,83,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(38,59,83,0.12)]"
                >
                  {/* FOTO */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#DCE8F0]">
                    {person.image_url ? (
                      <img
                        src={person.image_url}
                        alt={`Foto de ${person.name}`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-6xl font-black text-[#263B53]/15">
                          {person.name
                            .split(" ")
                            .map((part) => part[0])
                            .slice(0, 2)
                            .join("")}
                        </span>
                      </div>
                    )}

                    <div className="absolute left-5 top-5">
                      <span className="inline-flex rounded-full bg-white/95 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-[#263B53] shadow-sm backdrop-blur">
                        {person.category}
                      </span>
                    </div>
                  </div>

                  {/* TEXTO */}
                  <div className="p-7 md:p-8">
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#263B53]">
                      {person.name}
                    </h2>

                    <p className="mt-4 text-lg leading-8 text-[#53697E]">
                      {person.description}
                    </p>

                    {/* MATÉRIA */}
                    {person.article_url && (
                      <div className="mt-7">
                        {person.article_url.startsWith("/") ? (
                          <Link
                            href={person.article_url}
                            className="inline-flex items-center rounded-xl bg-[#263B53] px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E9A15B]"
                          >
                            Ler a matéria →
                          </Link>
                        ) : (
                          <a
                            href={person.article_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-xl bg-[#263B53] px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E9A15B]"
                          >
                            Ler a matéria →
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* MENSAGEM SOBRE MATÉRIAS */}
          {!loading && !error && people.length > 0 && (
            <div className="mt-10 rounded-[2rem] border border-[#E9A15B]/25 bg-[#FFF7ED] p-7 md:p-8">
              <h2 className="text-2xl font-extrabold text-[#263B53]">
                Histórias em construção
              </h2>

              <p className="mt-3 max-w-3xl leading-8 text-[#53697E]">
                Estamos preparando matérias e fontes para que você possa
                conhecer melhor a trajetória de cada pessoa. Em breve, os
                cards terão acesso direto aos conteúdos selecionados.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#6B8299]">
              O objetivo desta página
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#263B53] md:text-5xl">
              Inspirar sem comparar.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#53697E]">
              Cada pessoa tem uma história, necessidades e caminhos próprios.
              Conhecer trajetórias públicas pode ampliar possibilidades e
              combater ideias equivocadas sobre a dislexia, mas não deve
              transformar histórias de sucesso em uma cobrança.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-[#263B53]/10 bg-[#EEF5F9] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#263B53] text-xl font-bold text-white">
                +
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-[#263B53]">
                Possibilidades
              </h3>

              <p className="mt-3 leading-7 text-[#53697E]">
                Uma dificuldade de aprendizagem não determina sozinha o futuro
                de uma pessoa.
              </p>
            </article>

            <article className="rounded-3xl border border-[#E9A15B]/25 bg-[#FFF7ED] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9A15B] text-xl font-bold text-white">
                ✓
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-[#263B53]">
                Persistência
              </h3>

              <p className="mt-3 leading-7 text-[#53697E]">
                Diferentes pessoas podem encontrar estratégias, apoios e
                caminhos diferentes para aprender e trabalhar.
              </p>
            </article>

            <article className="rounded-3xl border border-[#263B53]/10 bg-[#EEF5F9] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#263B53] text-xl font-bold text-white">
                ♥
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-[#263B53]">
                Respeito
              </h3>

              <p className="mt-3 leading-7 text-[#53697E]">
                Uma história individual nunca deve ser usada para definir como
                outra pessoa deveria aprender ou viver.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* AVISO */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#263B53] p-7 text-white md:p-9">
          <h2 className="text-2xl font-extrabold">
            Um olhar educativo sobre essas histórias
          </h2>

          <p className="mt-4 leading-8 text-white/80">
            As informações apresentadas nesta página têm finalidade educativa.
            Histórias de pessoas públicas não servem como diagnóstico, modelo
            único de aprendizagem ou garantia de resultados. O objetivo é
            informar, acolher e mostrar diferentes possibilidades.
          </p>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="px-6 pb-16">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3">
          <Link
            href="/estudo/dislexia"
            className="rounded-xl bg-[#263B53] px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E9A15B]"
          >
            Entender a dislexia →
          </Link>

          <Link
            href="/biblioteca"
            className="rounded-xl border-2 border-[#263B53]/10 bg-white px-6 py-3.5 font-bold text-[#263B53] transition hover:bg-[#EEF5F9]"
          >
            Biblioteca →
          </Link>

          <Link
            href="/nia"
            className="rounded-xl border-2 border-[#263B53]/10 bg-white px-6 py-3.5 font-bold text-[#263B53] transition hover:bg-[#EEF5F9]"
          >
            Conhecer a NIA →
          </Link>

          <Link
            href="/"
            className="rounded-xl border-2 border-[#263B53]/10 bg-white px-6 py-3.5 font-bold text-[#263B53] transition hover:bg-[#EEF5F9]"
          >
            Explorar o DysHelp
          </Link>
        </div>
      </section>
    </main>
  );
}
```
