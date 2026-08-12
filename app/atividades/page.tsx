import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container flex min-h-[76px] items-center justify-between gap-4">
          <Link href="/" className="shrink-0"><div className="text-xl font-extrabold tracking-tight text-deep">DYSLEXIA TORTUGUITAS</div><div className="text-[10px] font-bold tracking-[.18em] text-slate-500">COMPREENDER. ACOLHER. APOIAR.</div></Link>
          <Link href="/" className="btn btn-soft">← Voltar ao início</Link>
        </div></header>
      <article className="section"><div className="container"><div className="mx-auto max-w-5xl">
        <p className="eyebrow">Ferramentas gratuitas</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-deep md:text-6xl">Atividades</h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">Crie propostas iniciais de atividades e adapte-as às necessidades de cada contexto.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">Leitura</h2>
            <p className="mt-4 leading-8 text-slate-600">Escolha textos curtos, dê tempo para leitura e permita diferentes formas de resposta.</p>
          </section>
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">Compreensão</h2>
            <p className="mt-4 leading-8 text-slate-600">Trabalhe uma pergunta de cada vez e incentive a pessoa a explicar como chegou à resposta.</p>
          </section>
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">Escrita</h2>
            <p className="mt-4 leading-8 text-slate-600">Divida a produção em planejamento, escrita e revisão, sem transformar cada etapa em uma cobrança.</p>
          </section>
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">Organização</h2>
            <p className="mt-4 leading-8 text-slate-600">Use instruções visuais e listas curtas para tornar a sequência da tarefa mais previsível.</p>
          </section>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/estudo/dislexia" className="btn btn-primary">Estudo sobre dislexia →</Link>
          <Link href="/" className="btn btn-soft">Explorar o site</Link>
        </div></div></div></article>
    </main>
  );
}
