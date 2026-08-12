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
        <p className="eyebrow">IA educativa</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-deep md:text-6xl">NIA — Núcleo de Inteligência e Apoio</h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">Uma interface preparada para futura integração com inteligência artificial de forma segura.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">O que a NIA fará</h2>
            <p className="mt-4 leading-8 text-slate-600">A proposta é apoiar dúvidas educativas, sugerir caminhos e ajudar a organizar informações.</p>
          </section>
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">O que a NIA não fará</h2>
            <p className="mt-4 leading-8 text-slate-600">A ferramenta não deve diagnosticar, prometer cura ou substituir avaliação e acompanhamento profissional.</p>
          </section>
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">Privacidade</h2>
            <p className="mt-4 leading-8 text-slate-600">Integrações futuras devem usar servidor e variáveis de ambiente, sem colocar chaves de API no código do navegador.</p>
          </section>
          <section className="card p-7 md:p-8">
            <h2 className="text-2xl font-extrabold text-deep">Próxima etapa</h2>
            <p className="mt-4 leading-8 text-slate-600">Depois de estabilizar o frontend, podemos implementar a API, autenticação e uma camada segura para a integração.</p>
          </section>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/estudo/dislexia" className="btn btn-primary">Estudo sobre dislexia →</Link>
          <Link href="/" className="btn btn-soft">Explorar o site</Link>
        </div></div></div></article>
    </main>
  );
}
