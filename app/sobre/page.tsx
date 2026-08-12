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
        <p className="eyebrow">Sobre o Dyslexia Tortuguitas</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-deep md:text-6xl">Não queremos mudar quem você é.</h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">Queremos ajudar você a compreender como cada pessoa aprende.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">Nossa filosofia</h2>
            <p className="mt-4 leading-8 text-slate-600">O projeto busca aproximar Família + Escola + Profissionais + Informação.</p>
          </section>
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">Acolhimento</h2>
            <p className="mt-4 leading-8 text-slate-600">A experiência deve transmitir empatia, confiança, conhecimento, esperança, inclusão e respeito.</p>
          </section>
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">Acessibilidade</h2>
            <p className="mt-4 leading-8 text-slate-600">Legibilidade, foco visual, contraste, teclado e redução de animações fazem parte do produto.</p>
          </section>
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">Conteúdo educativo</h2>
            <p className="mt-4 leading-8 text-slate-600">A plataforma não deve ser apresentada como ferramenta de diagnóstico e não substitui acompanhamento profissional.</p>
          </section>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/estudo/dislexia" className="btn btn-primary">Estudo sobre dislexia →</Link>
          <Link href="/" className="btn btn-soft">Explorar o site</Link>
        </div></div></div></article>
    </main>
  );
}
