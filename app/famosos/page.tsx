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

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-6xl">

            <p className="eyebrow">
              Histórias que inspiram
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-deep md:text-6xl">
              Pessoas famosas que falaram sobre dislexia
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
              Uma dificuldade de aprendizagem não determina o tamanho dos
              sonhos, dos projetos ou das possibilidades de uma pessoa.
            </p>


            {loading && (
              <div className="mt-12 card p-8">
                Carregando histórias...
              </div>
            )}


            {!loading && error && (
              <div className="mt-12 rounded-3xl border border-red-200 bg-red-50 p-8">
                <h2 className="text-2xl font-extrabold text-red-800">
                  Erro ao carregar
                </h2>

                <p className="mt-3 text-red-700">
                  {error}
                </p>
              </div>
            )}


            {!loading && !error && (
              <section className="mt-12 grid gap-8 md:grid-cols-2">

                {people.map((person) => (

                  <article
                    key={person.id}
                    className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >

                    <div className="aspect-[16/10] w-full overflow-hidden bg-cream">

                      {person.image_url ? (

                        <img
                          src={person.image_url}
                          alt={`Foto de ${person.name}`}
                          className="h-full w-full object-cover"
                        />

                      ) : (

                        <div className="flex h-full items-center justify-center">
                          <span className="text-6xl font-black text-deep/20">
                            {person.name.substring(0, 2)}
                          </span>
                        </div>

                      )}

                    </div>


                    <div className="p-7">

                      <p className="text-sm font-bold uppercase tracking-[.16em] text-slate-500">
                        {person.category}
                      </p>


                      <h2 className="mt-2 text-3xl font-extrabold text-deep">
                        {person.name}
                      </h2>


                      <p className="mt-4 text-lg leading-8 text-slate-600">
                        {person.description}
                      </p>


                      {person.article_url && (

                        <div className="mt-6">

                          <Link
                            href={person.article_url}
                            className="btn btn-primary"
                          >
                            Ler a história →
                          </Link>

                        </div>

                      )}


                    </div>

                  </article>

                ))}

              </section>
            )}


            <div className="mt-12 flex flex-wrap gap-3">

              <Link
                href="/"
                className="btn btn-soft"
              >
                Explorar DysHelp
              </Link>

              <Link
                href="/biblioteca"
                className="btn btn-soft"
              >
                Biblioteca
              </Link>

            </div>


          </div>
        </div>
      </section>

    </main>
  );
}
