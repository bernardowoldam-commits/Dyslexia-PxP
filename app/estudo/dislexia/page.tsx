import Link from "next/link";

export default function StudyPage() {
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
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow">Estudo Dyslexia Tortuguitas</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-deep md:text-6xl">Entendendo a dislexia</h1>
            <p className="mt-6 text-xl leading-9 text-slate-600">
              Um material introdutório para compreender diferentes formas de aprender sem reduzir uma pessoa a uma dificuldade.
            </p>
            <div className="mt-10 rounded-3xl bg-cream p-7 md:p-10">
              <p className="text-2xl font-bold leading-9 text-deep">“Compreender é o primeiro passo para transformar.”</p>
            </div>
            <div className="mt-12 grid gap-8">
              <section>
                <h2 className="text-3xl font-extrabold text-deep">O que é dislexia?</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  A dislexia é uma forma específica de aprendizagem que pode afetar principalmente habilidades relacionadas à leitura e à escrita. As características e necessidades de apoio podem variar de pessoa para pessoa.
                </p>
              </section>
              <section className="rounded-3xl border border-slate-200 p-7 md:p-9">
                <h2 className="text-2xl font-extrabold text-deep">O que ela não significa</h2>
                <ul className="mt-5 grid gap-4 text-lg leading-8 text-slate-600">
                  <li>• Não é sinônimo de preguiça.</li>
                  <li>• Não é uma medida de inteligência.</li>
                  <li>• Não significa falta de esforço.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-3xl font-extrabold text-deep">Como pode aparecer?</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  As manifestações podem ser diferentes. Por isso, é importante observar o conjunto de experiências da pessoa, o contexto de aprendizagem e as estratégias que ajudam.
                </p>
              </section>
              <section>
                <h2 className="text-3xl font-extrabold text-deep">Como podemos ajudar?</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {[
                    ["Tempo", "Permitir que a pessoa tenha tempo suficiente para processar e responder."],
                    ["Estratégias", "Dividir tarefas e tornar os passos mais claros e previsíveis."],
                    ["Apoio", "Reconhecer esforço, progresso e necessidades sem transformar a aprendizagem em cobrança."],
                    ["Adaptação", "Buscar formas diferentes de apresentar e praticar um conteúdo."]
                  ].map(([title, body]) => (
                    <div key={title} className="card p-6">
                      <h3 className="text-xl font-extrabold text-deep">{title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{body}</p>
                    </div>
                  ))}
                </div>
              </section>
              <aside className="rounded-3xl bg-deep p-7 text-white md:p-9">
                <h2 className="text-2xl font-extrabold">Importante</h2>
                <p className="mt-4 leading-8 text-white/80">
                  Este conteúdo é educativo e não substitui avaliação ou acompanhamento profissional. O Dyslexia Tortuguitas não deve ser usado para diagnosticar uma pessoa.
                </p>
              </aside>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/responsaveis" className="btn btn-primary">Para responsáveis →</Link>
              <Link href="/profissionais" className="btn btn-soft">Para profissionais →</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
