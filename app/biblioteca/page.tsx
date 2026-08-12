"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Resource = {
  id: string | number;
  title: string;
  description: string;
  category: string;
  url: string;
};

export default function Page() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadResources() {
      try {
        const response = await fetch("/api/resources");

        if (!response.ok) {
          throw new Error("Não foi possível carregar os materiais.");
        }

        const data = await response.json();

        if (!data.ok) {
          throw new Error(data.error || "Erro ao carregar os materiais.");
        }

        setResources(data.resources || []);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Erro ao carregar os materiais."
        );
      } finally {
        setLoading(false);
      }
    }

    loadResources();
  }, []);

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
            <p className="eyebrow">Conhecimento para entender</p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-deep md:text-6xl">
              Biblioteca Dyslexia Tortuguitas
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
              Materiais curtos para leitura e consulta, organizados por temas.
            </p>

            {/* Conteúdo vindo do Supabase */}
            <div className="mt-12">
              {loading && (
                <div className="card p-7 md:p-8">
                  <p className="text-slate-600">
                    Carregando materiais...
                  </p>
                </div>
              )}

              {error && (
                <div className="card border border-red-200 bg-red-50 p-7 md:p-8">
                  <h2 className="text-xl font-extrabold text-red-800">
                    Não foi possível carregar a biblioteca
                  </h2>

                  <p className="mt-3 text-red-700">
                    {error}
                  </p>

                  <button
                    onClick={() => window.location.reload()}
                    className="btn btn-primary mt-5"
                  >
                    Tentar novamente
                  </button>
                </div>
              )}

              {!loading && !error && resources.length === 0 && (
                <div className="card p-7 md:p-8">
                  <h2 className="text-2xl font-extrabold text-deep">
                    Biblioteca em construção
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    Novos materiais serão adicionados em breve.
                  </p>
                </div>
              )}

              {!loading && !error && resources.length > 0 && (
                <div className="grid gap-8 md:grid-cols-2">
                  {resources.map((resource) => (
                    <section
                      key={resource.id}
                      className="card p-7 transition hover:-translate-y-1 hover:shadow-lg md:p-8"
                    >
                      <div className="mb-4">
                        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
                          {resource.category}
                        </span>
                      </div>

                      <h2 className="text-2xl font-extrabold text-deep">
                        {resource.title}
                      </h2>

                      <p className="mt-4 leading-8 text-slate-600">
                        {resource.description}
                      </p>

                      <div className="mt-6">
                        {resource.url.startsWith("/") ? (
                          <Link
                            href={resource.url}
                            className="btn btn-primary"
                          >
                            Acessar material →
                          </Link>
                        ) : (
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                          >
                            Acessar material →
                          </a>
                        )}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                href="/estudo/dislexia"
                className="btn btn-primary"
              >
                Estudo sobre dislexia →
              </Link>

              <Link href="/famosos" className="btn btn-soft">
                Pessoas famosas →
              </Link>

              <Link href="/nia" className="btn btn-soft">
                Conhecer a NIA →
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
