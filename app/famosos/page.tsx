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
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container flex min-h-[76px] items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <div className="text-xl font-extrabold tracking-tight text-deep">
              DysHelp
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
            <div className="max-w-5xl">
              <p className="eyebrow">Histórias que inspiram</p>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-deep md:text-6xl">
                Pessoas famosas que falaram sobre dislexia
              </h1>

              <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
                Uma dificuldade de aprendizagem não determina o tamanho dos
                sonhos, dos projetos ou das possibilidades de uma pessoa.
              </p>
            </div>

            {loading && (
              <div className="mt-12 card p-8">
                <p className="text-slate-600">
                  Carregando histórias...
                </p>
              </div>
            )}

            {!loading && error && (
              <div className="mt-12 rounded-3xl border border-red-200 bg-red-50 p-7 md:p-8">
                <h2 className="text-2xl font-extrabold text-red-800">
                  Não foi possível carregar as histórias
                </h2>

                <p className="mt-3 leading-7 text-red-700">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="btn btn-primary mt-5"
                >
                  Tentar novamente
                </button>
              </div>
            )}

            {!loading && !error && people.length === 0 && (
              <div className="mt-12 card p-8">
                <h2 className="text-2xl font-extrabold text-deep">
                  Histórias em construção
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Novas histórias serão adicionadas em breve.
                </p>
              </div>
            )}

            {!loading && !error && people.length > 0 && (
              <section className="mt-12 grid gap-8 md:grid-cols-2">
                {people.map((person) => (
                  <article
                    key={person.id}
                    className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-cream">
                      {person.image_url ? (
                        <div className="relative h-full w-full">
                          <img
                            src={person.image_url}
                            alt={`Foto de ${person.name}`}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-7xl font-black text-deep/15">
                            {person.name
                              .split(" ")
                              .map((word) => word[0])
                              .slice(0, 2)
                              .join("")}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-7 md:p-8">
                      <p className="text-sm font-bold uppercase tracking-[.16em] text-slate-500">
                        {person.category}
                      </p>

                      <h2 className="mt-2 text-3xl font-extrabold text-deep">
                        {person.name}
                      </h2>

                      <p className="mt-4 text-lg leading-8 text-slate-600">
                        {person.description}
                      </p>

                      {person.article_url ? (
                        <div className="mt-6">
                          {person.article_url.startsWith("/") ? (
                            <Link
                              href={person.article_url}
                              className="btn btn-primary"
                            >
                              Ler a matéria →
                            </Link>
                          ) : (
                            <a
                              href={person.article_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary"
                            >
                              Ler a matéria →
                            </a>
                          )}
                        </div>
                      ) : (
                        <div className="mt-6">
                          <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
                            Matéria em preparação
                          </span>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </section>
            )}

            {!loading && !error && people.length > 0 && (
              <section className="mt-10 rounded-3xl border border-slate-200 p-7 md:p-9">
                <h2 className="text-2xl font-extrabold text-deep">
                  O que queremos mostrar
                </h2>

                <div className="mt-6 grid gap-5 md:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-6">
                    <h3 className="text-xl font-extrabold text-deep">
                      Possibilidades
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      A pessoa é muito maior do que a dificuldade que enfrenta.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-6">
                    <h3 className="text-xl font-extrabold text-deep">
                      Persistência
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      Aprender pode exigir caminhos diferentes, apoio e tempo.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-6">
                    <h3 className="text-xl font-extrabold text-deep">
                      Respeito
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      Uma história de sucesso não deve virar uma cobrança para
                      outras pessoas.
                    </p>
                  </div>
                </div>
              </section>
            )}

            <aside className="mt-10 rounded-3xl bg-deep p-7 text-white md:p-9">
              <h2 className="text-2xl font-extrabold">
                Um cuidado importante
              </h2>

              <p className="mt-4 leading-8 text-white/80">
                Pessoas famosas não devem ser usadas como prova de que existe
                um único caminho para a dislexia. O objetivo desta página é
                inspirar, não comparar histórias nem sugerir que sucesso
                profissional depende de “superar” a dislexia.
              </p>
            </aside>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/estudo/dislexia"
                className="btn btn-primary"
              >
                Entender a dislexia →
              </Link>

              <Link
                href="/biblioteca"
                className="btn btn-soft"
              >
                Biblioteca →
              </Link>

              <Link
                href="/nia"
                className="btn btn-soft"
              >
                Conhecer a NIA →
              </Link>

              <Link
                href="/"
                className="btn btn-soft"
              >
                Explorar o DysHelp
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
