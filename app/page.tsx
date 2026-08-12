import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3EAD9] text-[#6997B8]">

      {/* MENU SECUNDÁRIO */}
      <section className="border-b border-[#6997B8]/20 bg-white">
        <div className="mx-auto flex min-h-[86px] max-w-7xl items-center justify-between gap-6 px-6">

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href="/estudo/dislexia"
              className="font-semibold text-[#6997B8] transition hover:text-[#F3A05B]"
            >
              Entenda a dislexia
            </Link>

            <Link
              href="/famosos"
              className="font-semibold text-[#6997B8] transition hover:text-[#F3A05B]"
            >
              Famosos
            </Link>

            <Link
              href="/biblioteca"
              className="font-semibold text-[#6997B8] transition hover:text-[#F3A05B]"
            >
              Biblioteca
            </Link>

            <Link
              href="/ajuda"
              className="font-semibold text-[#6997B8] transition hover:text-[#F3A05B]"
            >
              Ajuda
            </Link>

            <Link
              href="/nia"
              className="font-semibold text-[#6997B8] transition hover:text-[#F3A05B]"
            >
              NIA
            </Link>

            <Link
              href="/sobre"
              className="font-semibold text-[#6997B8] transition hover:text-[#F3A05B]"
            >
              Sobre
            </Link>
          </nav>

          <button
            type="button"
            className="hidden rounded-full border-2 border-[#6997B8] px-6 py-3 font-bold text-[#6997B8] transition hover:bg-[#6997B8] hover:text-white md:block"
          >
            ♿ Acessibilidade
          </button>

        </div>
      </section>


      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">

          {/* TEXTO */}
          <div>

            <p className="text-sm font-bold tracking-[0.18em] text-[#6997B8]">
              INFORMAÇÃO · ACOLHIMENTO · APOIO
            </p>

            <h1 className="mt-6 font-serif text-5xl font-bold leading-[0.95] tracking-tight text-[#6997B8] md:text-7xl">
              Compreender,
              <br />
              acolher,
              <br />
              <span className="text-[#F3A05B]">apoiar.</span>
            </h1>

            <div className="mt-8 h-1 w-14 rounded-full bg-[#F3A05B]" />

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#6997B8]">
              Informação de qualidade e recursos acessíveis para pessoas
              com dislexia, famílias, profissionais e todos que querem
              fazer a diferença.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/estudo/dislexia"
                className="rounded-xl bg-[#6997B8] px-6 py-4 font-bold text-white transition hover:bg-[#F3A05B]"
              >
                Entender a dislexia
              </Link>

              <Link
                href="/nia"
                className="rounded-xl border-2 border-[#6997B8] px-6 py-4 font-bold text-[#6997B8] transition hover:bg-[#BAD8E8]"
              >
                Conversar com a NIA
              </Link>

            </div>

          </div>


          {/* IMAGEM */}
          <div className="relative flex justify-center">

            <div className="relative w-full max-w-xl overflow-hidden rounded-[40px] bg-[#BAD8E8]/50 p-5">

              <div className="absolute right-8 top-8 h-16 w-16 rounded-full bg-[#F3A05B]" />

              <div className="absolute bottom-8 left-8 h-20 w-20 rounded-full bg-[#BAD8E8]" />

              <Image
                src="/DISLEXIA (1).png"
                alt="DysHelp"
                width={900}
                height={700}
                priority
                className="relative z-10 h-auto w-full rounded-[30px] object-contain"
              />

            </div>

          </div>

        </div>
      </section>


      {/* LUGARES DE APOIO */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-bold tracking-[0.18em] text-[#6997B8]">
              RECURSOS
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold text-[#6997B8] md:text-5xl">
              Lugares de apoio suplementares
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#6997B8]/80">
              Encontre caminhos complementares para ampliar o conhecimento,
              buscar apoio e desenvolver estratégias para lidar com a dislexia.
            </p>

          </div>


          {/* CARDS */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* CLÍNICAS */}
            <article className="flex h-full flex-col rounded-3xl border border-[#6997B8]/20 bg-[#BAD8E8]/30 p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl">
                ♡
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#6997B8]">
                Clínicas e Terapias
              </h3>

              <p className="mt-4 flex-1 leading-7 text-[#6997B8]/90">
                Informações para quem busca acompanhamento especializado
                e orientação profissional.
              </p>

              <Link
                href="/profissionais"
                className="mt-6 font-bold text-[#6997B8] transition hover:text-[#F3A05B]"
              >
                Ver profissionais →
              </Link>

            </article>


            {/* FORMAÇÃO */}
            <article className="flex h-full flex-col rounded-3xl border border-[#F3A05B]/30 bg-[#F3EAD9] p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl">
                ▢
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#F3A05B]">
                Cursos e Formação
              </h3>

              <p className="mt-4 flex-1 leading-7 text-[#6997B8]/90">
                Materiais e caminhos para profissionais aprofundarem
                seus conhecimentos sobre dislexia.
              </p>

              <Link
                href="/profissionais"
                className="mt-6 font-bold text-[#F3A05B] transition hover:text-[#6997B8]"
              >
                Ver recursos →
              </Link>

            </article>


            {/* GRUPOS */}
            <article className="flex h-full flex-col rounded-3xl border border-[#6997B8]/20 bg-[#BAD8E8]/30 p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl">
                ♧
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#6997B8]">
                Grupos de Apoio
              </h3>

              <p className="mt-4 flex-1 leading-7 text-[#6997B8]/90">
                Conheça espaços de convivência, troca de experiências
                e apoio para famílias e pessoas com dislexia.
              </p>

              <Link
                href="/ajuda"
                className="mt-6 font-bold text-[#6997B8] transition hover:text-[#F3A05B]"
              >
                Conhecer opções →
              </Link>

            </article>

          </div>

        </div>

      </section>


      {/* RODAPÉ */}
      <footer className="border-t border-[#6997B8]/20 bg-[#F3EAD9]">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="font-bold text-[#6997B8]">
              DysHelp
            </p>

            <p className="mt-1 text-sm text-[#6997B8]/70">
              Compreender. Acolher. Apoiar.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm font-semibold">

            <Link
              href="/sobre"
              className="transition hover:text-[#F3A05B]"
            >
              Sobre
            </Link>

            <Link
              href="/ajuda"
              className="transition hover:text-[#F3A05B]"
            >
              Ajuda
            </Link>

            <Link
              href="/nia"
              className="transition hover:text-[#F3A05B]"
            >
              NIA
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}
