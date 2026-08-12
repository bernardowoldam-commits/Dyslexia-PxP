import Link from "next/link";

export default function FamososPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container flex min-h-[76px] items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <div className="text-xl font-extrabold tracking-tight text-deep">DYSLEXIA TORTUGUITAS</div>
            <div className="text-[10px] font-bold tracking-[.18em] text-slate-500">COMPREENDER. ACOLHER. APOIAR.</div>
          </Link>
          <Link href="/" className="btn btn-soft">← Voltar ao início</Link>
        </div>
      </header>

      <article className="section">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow">Histórias que inspiram</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-deep md:text-6xl">
              Pessoas famosas que falaram sobre dislexia
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
              Uma dificuldade de aprendizagem não determina o tamanho dos sonhos,
              dos projetos ou das possibilidades de uma pessoa.
            </p>

            <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="rounded-[2rem] bg-cream p-8 md:p-10">
                <div className="text-7xl font-black text-deep/15">TC</div>
                <p className="mt-8 text-sm font-bold uppercase tracking-[.16em] text-slate-500">Cinema</p>
                <h2 className="mt-2 text-4xl font-extrabold text-deep">Tom Cruise</h2>
                <p className="mt-4 text-lg font-semibold text-slate-600">
                  Ator e produtor
                </p>
              </div>

              <div className="card p-8 md:p-10">
                <h2 className="text-3xl font-extrabold text-deep">Uma história de perseverança</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Tom Cruise é frequentemente citado como uma pessoa que enfrentou
                  dificuldades de leitura relacionadas à dislexia durante a infância
                  e que falou publicamente sobre essa experiência.
                </p>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Sua trajetória no cinema tornou-se um exemplo conhecido de que
                  dificuldades escolares não precisam definir o futuro profissional
                  de alguém.
                </p>
              </div>
            </section>

            <section className="mt-10 rounded-3xl border border-slate-200 p-7 md:p-9">
              <h2 className="text-2xl font-extrabold text-deep">O que queremos mostrar</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {[
                  ["Possibilidades", "A pessoa é muito maior do que a dificuldade que enfrenta."],
                  ["Persistência", "Aprender pode exigir caminhos diferentes, apoio e tempo."],
                  ["Respeito", "Uma história de sucesso não deve virar uma cobrança para outras pessoas."]
                ].map(([title, body]) => (
                  <div key={title} className="rounded-2xl bg-slate-50 p-6">
                    <h3 className="text-xl font-extrabold text-deep">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            <aside className="mt-10 rounded-3xl bg-deep p-7 text-white md:p-9">
              <h2 className="text-2xl font-extrabold">Um cuidado importante</h2>
              <p className="mt-4 leading-8 text-white/80">
                Pessoas famosas não devem ser usadas como prova de que existe um
                único caminho para a dislexia. O objetivo desta página é inspirar,
                não comparar histórias nem sugerir que sucesso profissional depende
                de “superar” a dislexia.
              </p>
            </aside>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/estudo/dislexia" className="btn btn-primary">Entender a dislexia →</Link>
              <Link href="/ajuda" className="btn btn-soft">Encontrar ajuda especializada →</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
