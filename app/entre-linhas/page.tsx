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
        <p className="eyebrow">Artigos</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-deep md:text-6xl">Dyslexia Tortuguitas</h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">Textos para olhar além do que está escrito e compreender situações da jornada de aprender.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">Meu filho não é preguiçoso</h2>
            <p className="mt-4 leading-8 text-slate-600">Entenda o esforço por trás da leitura e por que uma dificuldade não deve ser confundida com falta de vontade.</p>
          </section>
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">Como conversar com a escola</h2>
            <p className="mt-4 leading-8 text-slate-600">Perguntas e caminhos para construir uma parceria respeitosa com a escola.</p>
          </section>
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">Dislexia e autoestima</h2>
            <p className="mt-4 leading-8 text-slate-600">Quando a cobrança começa a machucar, vale observar como o ambiente pode apoiar confiança e participação.</p>
          </section>
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">Aprender diferente não significa aprender menos</h2>
            <p className="mt-4 leading-8 text-slate-600">Diferentes formas de aprender pedem diferentes caminhos para ensinar e apoiar.</p>
          </section>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/estudo/dislexia" className="btn btn-primary">Estudo sobre dislexia →</Link>
          <Link href="/" className="btn btn-soft">Explorar o site</Link>
        </div></div></div></article>
    </main>
  );
}
