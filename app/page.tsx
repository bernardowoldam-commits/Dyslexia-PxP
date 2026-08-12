"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const parents = [
  "Entendendo a dislexia",
  "Como ajudar em casa",
  "Como apoiar os estudos",
  "Como conversar com a escola",
  "Autoestima e confiança",
  "Aspectos emocionais",
  "Mitos e verdades",
  "Quando procurar ajuda",
];

const professionals = [
  "Estratégias pedagógicas",
  "Atividades",
  "Adaptações",
  "Materiais educacionais",
  "Recursos para sala de aula",
  "Biblioteca profissional",
];

const famousPeople = [
  {
    name: "Keira Knightley",
    text: "A atriz já falou publicamente sobre sua experiência com dislexia.",
  },
  {
    name: "Steven Spielberg",
    text: "O cineasta contou que descobriu sua dislexia apenas na vida adulta.",
  },
  {
    name: "Richard Branson",
    text: "O empresário fala frequentemente sobre aprender de maneira diferente.",
  },
  {
    name: "Whoopi Goldberg",
    text: "A atriz e apresentadora já compartilhou sua experiência com dislexia.",
  },
];

const articles = [
  {
    title: "Meu filho não é preguiçoso",
    category: "Família",
    text: "Entendendo o esforço que pode estar por trás das dificuldades de leitura.",
  },
  {
    title: "Como conversar com a escola",
    category: "Escola",
    text: "Ideias para construir uma parceria respeitosa e produtiva.",
  },
  {
    title: "Dislexia e autoestima",
    category: "Emoções",
    text: "Como reconhecer esforço, progresso e confiança no cotidiano.",
  },
  {
    title: "Aprender diferente não significa aprender menos",
    category: "Aprendizagem",
    text: "Um olhar mais amplo para diferentes formas de aprender.",
  },
];

export default function Home() {
  const [myth, setMyth] = useState<number | null>(null);

  const [age, setAge] = useState("9");
  const [series, setSeries] = useState("4º ano");
  const [objective, setObjective] = useState("leitura");
  const [level, setLevel] = useState("inicial");
  const [quantity, setQuantity] = useState("5");
  const [generated, setGenerated] = useState(false);

  const [query, setQuery] = useState("");

  const filteredArticles = articles.filter((article) =>
    `${article.title} ${article.category} ${article.text}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F3EAD9] text-[#6997B8]">

      {/* =========================================================
          MENU SECUNDÁRIO
      ========================================================== */}
      <div className="border-b border-[#6997B8]/15 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold">
            <Link
              href="/estudo/dislexia"
              className="transition hover:text-[#F3A05B]"
            >
              Entenda a dislexia
            </Link>

            <a
              href="#responsaveis"
              className="transition hover:text-[#F3A05B]"
            >
              Responsáveis
            </a>

            <a
              href="#profissionais"
              className="transition hover:text-[#F3A05B]"
            >
              Profissionais
            </a>

            <a
              href="#famosos"
              className="transition hover:text-[#F3A05B]"
            >
              Famosos
            </a>

            <a
              href="#biblioteca"
              className="transition hover:text-[#F3A05B]"
            >
              Biblioteca
            </a>

            <a
              href="#atividades"
              className="transition hover:text-[#F3A05B]"
            >
              Atividades
            </a>

            <Link
              href="/nia"
              className="transition hover:text-[#F3A05B]"
            >
              NIA
            </Link>
          </nav>

          <Link
            href="/ajuda"
            className="rounded-full border border-[#6997B8]/25 px-5 py-2.5 text-sm font-bold transition hover:bg-[#6997B8] hover:text-white"
          >
            Ajuda
          </Link>

        </div>
      </div>


      {/* =========================================================
          HERO
      ========================================================== */}
      <section
        id="inicio"
        className="overflow-hidden bg-white"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">

          <div>

            <p className="text-sm font-extrabold tracking-[0.18em] text-[#6997B8]">
              UM LUGAR PARA COMPREENDER
            </p>

            <h1 className="mt-5 max-w-3xl font-serif text-5xl font-bold leading-[0.98] tracking-tight text-[#6997B8] md:text-7xl">
              Compreender é o primeiro passo para{" "}
              <span className="text-[#F3A05B]">
                transformar.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6997B8]/80 md:text-xl">
              A dislexia não define quem uma pessoa é. Quando compreendemos
              diferentes formas de aprender, criamos espaço para diferentes
              formas de crescer.
            </p>

            <div className="mt-8 rounded-[28px] border border-[#6997B8]/15 bg-[#F3EAD9] p-6 shadow-sm">

              <p className="text-xl font-bold leading-8 text-[#6997B8]">
                “Seu filho é diferente pra você como você é diferente
                para o seu filho.”
              </p>

              <p className="mt-2 font-semibold text-[#6997B8]/70">
                Porque aprender diferente não significa aprender menos.
              </p>

            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                href="/estudo/dislexia"
                className="rounded-xl bg-[#6997B8] px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#F3A05B]"
              >
                Quero entender a dislexia →
              </Link>

              <a
                href="#responsaveis"
                className="rounded-xl border-2 border-[#6997B8]/20 px-6 py-4 font-bold text-[#6997B8] transition hover:bg-[#BAD8E8]/40"
              >
                Sou responsável
              </a>

              <a
                href="#profissionais"
                className="rounded-xl border-2 border-[#6997B8]/20 px-6 py-4 font-bold text-[#6997B8] transition hover:bg-[#BAD8E8]/40"
              >
                Sou profissional
              </a>

            </div>

            <p className="mt-5 text-sm font-semibold text-[#6997B8]/60">
              Conteúdo, ferramentas e orientação gratuitos.
            </p>

          </div>


          {/* IMAGEM */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-[40px] bg-[#BAD8E8]/45 p-5 shadow-[0_20px_60px_rgba(105,151,184,0.15)]">

              <div className="absolute right-10 top-10 h-20 w-20 rounded-full bg-[#F3A05B]/80" />

              <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-[#BAD8E8]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] bg-white p-5">

                <Image
                  src="/DISLEXIA (1).png"
                  alt="Imagem principal do DysHelp"
                  width={900}
                  height={700}
                  priority
                  className="h-auto w-full object-contain"
                />

              </div>

              <div className="relative z-20 mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold text-[#6997B8]">

                <span className="rounded-xl bg-white/90 px-2 py-3">
                  Família
                </span>

                <span className="rounded-xl bg-white/90 px-2 py-3">
                  Escola
                </span>

                <span className="rounded-xl bg-white/90 px-2 py-3">
                  Profissionais
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          IMPACTO
      ========================================================== */}
      <section className="bg-[#6997B8] px-6 py-20 text-white">

        <div className="mx-auto max-w-6xl text-center">

          <p className="text-2xl font-semibold md:text-4xl">
            E se a pergunta não fosse{" "}
            <span className="text-[#BAD8E8]">
              “por que ele não consegue?”
            </span>
          </p>

          <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">
            E se fosse “como ele consegue aprender?”
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-5">

            {[
              "Cobrar → Compreender",
              "Comparar → Respeitar",
              "Rotular → Observar",
              "Corrigir → Orientar",
              "Desistir → Adaptar",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 font-bold"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          ENTENDA A DISLEXIA
      ========================================================== */}
      <section
        id="entenda"
        className="bg-[#F3EAD9] px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-extrabold tracking-[0.18em] text-[#6997B8]">
            ENTENDA A DISLEXIA
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#6997B8] md:text-5xl">
            Primeiro, vamos entender.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6997B8]/75">
            A informação correta pode mudar a forma como enxergamos uma
            dificuldade.
          </p>


          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "O que é dislexia?",
                "Uma forma específica de aprendizagem que pode afetar principalmente habilidades relacionadas à leitura e escrita.",
              ],
              [
                "O que ela não é?",
                "Não é sinônimo de preguiça, falta de inteligência ou falta de esforço.",
              ],
              [
                "Como ela pode aparecer?",
                "As características podem variar de pessoa para pessoa e aparecer de diferentes formas.",
              ],
              [
                "Como podemos ajudar?",
                "Estratégias, adaptações, tempo e apoio podem facilitar experiências de aprendizagem.",
              ],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-3xl border border-[#6997B8]/15 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#BAD8E8] text-xl font-bold text-[#6997B8]">
                  +
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#6997B8]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6997B8]/75">
                  {text}
                </p>

                <Link
                  href="/estudo/dislexia"
                  className="mt-5 inline-block font-bold text-[#6997B8] hover:text-[#F3A05B]"
                >
                  Explorar →
                </Link>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          RESPONSÁVEIS
      ========================================================== */}
      <section
        id="responsaveis"
        className="bg-white px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-extrabold tracking-[0.18em] text-[#6997B8]">
            PARA RESPONSÁVEIS
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#6997B8] md:text-5xl">
            Para quem acompanha de perto.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6997B8]/75">
            Você não precisa entender tudo de uma vez. Precisa apenas
            começar a compreender.
          </p>


          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {parents.map((item, index) => (
              <article
                key={item}
                className="rounded-3xl border border-[#6997B8]/10 bg-[#F3EAD9] p-6 transition hover:-translate-y-1 hover:shadow-md"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#BAD8E8] font-bold text-[#6997B8]">
                  {index + 1}
                </div>

                <h3 className="mt-5 font-extrabold text-[#6997B8]">
                  {item}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#6997B8]/70">
                  Informações práticas para apoiar com mais compreensão.
                </p>

                <Link
                  href="/ajuda"
                  className="mt-4 inline-block text-sm font-bold text-[#6997B8] hover:text-[#F3A05B]"
                >
                  Explorar →
                </Link>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          PROFISSIONAIS
      ========================================================== */}
      <section
        id="profissionais"
        className="bg-[#BAD8E8]/25 px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-extrabold tracking-[0.18em] text-[#6997B8]">
            PARA PROFISSIONAIS
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#6997B8] md:text-5xl">
            Para quem ajuda a transformar a aprendizagem.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6997B8]/75">
            Ferramentas e informações para profissionais que trabalham com
            diferentes formas de aprender.
          </p>


          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {professionals.map((item, index) => (
              <article
                key={item}
                className="rounded-3xl border border-[#6997B8]/15 bg-white p-7 shadow-sm"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3EAD9] font-bold text-[#F3A05B]">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#6997B8]">
                  {item}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6997B8]/75">
                  Recursos para planejar, adaptar e acompanhar experiências
                  de aprendizagem.
                </p>

              </article>
            ))}

          </div>


          <Link
            href="/profissionais"
            className="mt-8 inline-flex rounded-xl bg-[#6997B8] px-6 py-4 font-bold text-white transition hover:bg-[#F3A05B]"
          >
            Explorar recursos profissionais →
          </Link>

        </div>
      </section>


      {/* =========================================================
          FAMOSOS
      ========================================================== */}
      <section
        id="famosos"
        className="bg-white px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-extrabold tracking-[0.18em] text-[#6997B8]">
            FAMOSOS
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#6997B8] md:text-5xl">
            Pessoas conhecidas que falam sobre aprender diferente.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6997B8]/75">
            Conhecer histórias de pessoas públicas pode ajudar a ampliar a
            conversa sobre diferentes formas de aprendizagem.
          </p>


          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {famousPeople.map((person) => (
              <article
                key={person.name}
                className="rounded-3xl border border-[#6997B8]/15 bg-[#F3EAD9] p-7"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#BAD8E8] text-2xl font-serif font-bold text-[#6997B8]">
                  {person.name.charAt(0)}
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#6997B8]">
                  {person.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6997B8]/75">
                  {person.text}
                </p>

              </article>
            ))}

          </div>


          <Link
            href="/famosos"
            className="mt-8 inline-flex font-bold text-[#6997B8] hover:text-[#F3A05B]"
          >
            Conhecer mais histórias →
          </Link>

        </div>
      </section>


      {/* =========================================================
          NIA
      ========================================================== */}
      <section
        id="nia"
        className="bg-[#6997B8] px-6 py-20"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          <div className="text-white">

            <p className="text-sm font-extrabold tracking-[0.18em] text-[#BAD8E8]">
              NIA · NÚCLEO DE INTELIGÊNCIA E APOIO
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              Transforme dúvidas em caminhos possíveis.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/80">
              Uma assistente educativa para ajudar a compreender a
              dislexia, a aprendizagem e estratégias de apoio.
            </p>

            <p className="mt-5 text-sm leading-6 text-white/65">
              A NIA possui finalidade educativa e não substitui avaliação
              ou acompanhamento profissional.
            </p>

            <Link
              href="/nia"
              className="mt-8 inline-flex rounded-xl bg-[#F3A05B] px-6 py-4 font-bold text-[#244A6F] transition hover:-translate-y-0.5 hover:bg-[#F3EAD9]"
            >
              Conversar com a NIA ✦
            </Link>

          </div>


          <div className="rounded-[32px] bg-white p-4 shadow-2xl">

            <div className="rounded-[24px] bg-[#F3EAD9] p-5">

              <div className="flex items-center gap-3 border-b border-[#6997B8]/10 pb-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6997B8] text-xl text-white">
                  ✦
                </div>

                <div>
                  <p className="font-bold text-[#6997B8]">
                    NIA
                  </p>

                  <p className="text-xs text-[#6997B8]/60">
                    Apoio educativo
                  </p>
                </div>

              </div>


              <div className="space-y-4 p-4">

                <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-[#6997B8] p-4 text-sm text-white">
                  Meu filho fica frustrado quando precisa ler. Como posso
                  ajudar?
                </div>

                <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white p-4 text-sm leading-6 text-[#6997B8] shadow-sm">
                  Experimente dividir a atividade em pequenas etapas,
                  oferecer pausas e reconhecer o esforço envolvido.
                </div>

              </div>

              <Link
                href="/nia"
                className="flex items-center justify-between rounded-xl border border-[#6997B8]/15 bg-white px-4 py-3 text-sm font-bold text-[#6997B8]"
              >
                Conversar com a NIA
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          GERADOR DE ATIVIDADES
      ========================================================== */}
      <section
        id="atividades"
        className="bg-white px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-extrabold tracking-[0.18em] text-[#6997B8]">
            FERRAMENTA GRATUITA
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#6997B8] md:text-5xl">
            Crie uma atividade para sua necessidade.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6997B8]/75">
            Escolha as características da atividade e gere uma prévia para
            editar ou imprimir.
          </p>


          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            {/* FORMULÁRIO */}
            <div className="rounded-[30px] border border-[#6997B8]/15 bg-[#F3EAD9] p-7">

              <div className="grid gap-5">

                <label className="font-bold text-[#6997B8]">
                  Idade

                  <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#6997B8]/15 bg-white p-3 text-[#244A6F] outline-none focus:border-[#6997B8]"
                  />
                </label>


                <label className="font-bold text-[#6997B8]">
                  Ano/Série

                  <select
                    value={series}
                    onChange={(e) => setSeries(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#6997B8]/15 bg-white p-3 text-[#244A6F] outline-none"
                  >
                    <option>1º ano</option>
                    <option>2º ano</option>
                    <option>3º ano</option>
                    <option>4º ano</option>
                    <option>5º ano</option>
                    <option>6º ano</option>
                    <option>7º ano</option>
                    <option>8º ano</option>
                    <option>9º ano</option>
                    <option>1ª série do Ensino Médio</option>
                    <option>2ª série do Ensino Médio</option>
                    <option>3ª série do Ensino Médio</option>
                  </select>
                </label>


                <label className="font-bold text-[#6997B8]">
                  Objetivo

                  <select
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#6997B8]/15 bg-white p-3 text-[#244A6F]"
                  >
                    <option value="leitura">Leitura</option>
                    <option value="compreensão">Compreensão</option>
                    <option value="escrita">Escrita</option>
                    <option value="ortografia">Ortografia</option>
                    <option value="consciência fonológica">
                      Consciência fonológica
                    </option>
                    <option value="vocabulário">Vocabulário</option>
                    <option value="organização">Organização</option>
                  </select>
                </label>


                <label className="font-bold text-[#6997B8]">
                  Nível

                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#6997B8]/15 bg-white p-3 text-[#244A6F]"
                  >
                    <option value="inicial">Inicial</option>
                    <option value="intermediário">Intermediário</option>
                    <option value="avançado">Avançado</option>
                  </select>
                </label>


                <label className="font-bold text-[#6997B8]">
                  Quantidade de questões

                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#6997B8]/15 bg-white p-3 text-[#244A6F]"
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={String(i + 1)}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </label>


                <button
                  type="button"
                  onClick={() => setGenerated(true)}
                  className="rounded-xl bg-[#F3A05B] px-6 py-4 font-bold text-[#244A6F] transition hover:-translate-y-0.5 hover:bg-[#6997B8] hover:text-white"
                >
                  Gerar atividade ✦
                </button>

              </div>

            </div>


            {/* PRÉVIA */}
            <div className="min-h-[500px] rounded-[30px] bg-[#F3EAD9] p-7">

              {!generated ? (
                <div className="flex h-full min-h-[430px] flex-col items-center justify-center text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#BAD8E8] text-3xl">
                    ✦
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold text-[#6997B8]">
                    Sua atividade aparecerá aqui.
                  </h3>

                  <p className="mt-2 max-w-md leading-7 text-[#6997B8]/70">
                    Preencha os campos ao lado e gere uma prévia gratuita.
                  </p>

                </div>
              ) : (
                <div>

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#6997B8]">
                        Prévia da atividade
                      </p>

                      <h3 className="mt-2 text-2xl font-extrabold text-[#6997B8]">
                        Explorando {objective}
                      </h3>

                      <p className="mt-1 text-sm text-[#6997B8]/60">
                        {series} · idade {age} · nível {level} · {quantity} questões
                      </p>

                    </div>

                    <div className="rounded-full bg-[#BAD8E8] px-4 py-2 font-bold text-[#6997B8]">
                      ✓
                    </div>

                  </div>


                  <div className="mt-7 space-y-3">

                    {Array.from(
                      { length: Number(quantity) },
                      (_, index) => (
                        <div
                          key={index}
                          className="rounded-2xl bg-white p-4 text-sm leading-6 text-[#6997B8] shadow-sm"
                        >
                          <strong>{index + 1}. </strong>
                          Leia com calma e encontre uma resposta que faça
                          sentido para você.
                        </div>
                      )
                    )}

                  </div>


                  <div className="mt-6 flex flex-wrap gap-2">

                    <button
                      type="button"
                      className="rounded-xl border border-[#6997B8]/15 bg-white px-4 py-3 text-sm font-bold text-[#6997B8]"
                    >
                      Salvar
                    </button>

                    <button
                      type="button"
                      className="rounded-xl border border-[#6997B8]/15 bg-white px-4 py-3 text-sm font-bold text-[#6997B8]"
                    >
                      Editar
                    </button>

                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="rounded-xl border border-[#6997B8]/15 bg-white px-4 py-3 text-sm font-bold text-[#6997B8]"
                    >
                      Imprimir
                    </button>

                  </div>

                </div>
              )}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          BIBLIOTECA
      ========================================================== */}
      <section
        id="biblioteca"
        className="bg-[#BAD8E8]/20 px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-extrabold tracking-[0.18em] text-[#6997B8]">
            BIBLIOTECA ENTRE LINHAS
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#6997B8] md:text-5xl">
            Conhecimento para entender. Recursos para agir.
          </h2>


          <div className="mt-8">

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar materiais..."
              className="w-full rounded-2xl border border-[#6997B8]/15 bg-white px-5 py-4 text-[#244A6F] outline-none focus:border-[#6997B8]"
            />

          </div>


          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {filteredArticles.map((article, index) => (
              <article
                key={article.title}
                className="overflow-hidden rounded-3xl border border-[#6997B8]/10 bg-white shadow-sm"
              >

                <div
                  className={`flex h-36 items-end p-5 ${
                    index % 2 === 0
                      ? "bg-[#BAD8E8]"
                      : "bg-[#F3EAD9]"
                  }`}
                >
                  <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-[#6997B8]">
                    {article.category}
                  </span>
                </div>

                <div className="p-6">

                  <h3 className="font-extrabold text-[#6997B8]">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6997B8]/70">
                    {article.text}
                  </p>

                  <button
                    type="button"
                    className="mt-5 font-bold text-[#6997B8] hover:text-[#F3A05B]"
                  >
                    Abrir →
                  </button>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          MITOS E VERDADES
      ========================================================== */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-extrabold tracking-[0.18em] text-[#6997B8]">
            MITOS E VERDADES
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#6997B8] md:text-5xl">
            Nem tudo o que ouvimos sobre dislexia é verdade.
          </h2>


          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {[
              [
                "Dislexia significa falta de inteligência.",
                "MITO",
                "Dislexia não é uma medida de inteligência. Pessoas podem ter diferentes perfis de habilidades e necessidades.",
              ],
              [
                "Cada pessoa com dislexia pode apresentar características diferentes.",
                "VERDADE",
                "As manifestações e necessidades de apoio podem variar bastante de uma pessoa para outra.",
              ],
            ].map(([question, answer, explanation], index) => (

              <button
                key={question}
                type="button"
                onClick={() =>
                  setMyth(myth === index ? null : index)
                }
                className="rounded-3xl border border-[#6997B8]/15 bg-[#F3EAD9] p-7 text-left transition hover:shadow-md"
              >

                <div className="flex justify-between gap-5">

                  <h3 className="text-xl font-extrabold text-[#6997B8]">
                    {question}
                  </h3>

                  <span className="text-xl">
                    {myth === index ? "−" : "+"}
                  </span>

                </div>

                {myth === index && (
                  <div className="mt-5 border-t border-[#6997B8]/10 pt-5">

                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-extrabold ${
                        answer === "MITO"
                          ? "bg-[#F3A05B]"
                          : "bg-[#BAD8E8]"
                      } text-[#244A6F]`}
                    >
                      {answer}
                    </span>

                    <p className="mt-3 leading-7 text-[#6997B8]/75">
                      {explanation}
                    </p>

                  </div>
                )}

              </button>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          ENTRE LINHAS
      ========================================================== */}
      <section
        id="entre-linhas"
        className="bg-[#F3EAD9] px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-extrabold tracking-[0.18em] text-[#6997B8]">
            ENTRE LINHAS
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#6997B8] md:text-5xl">
            Porque algumas coisas importantes precisam ser vistas além do que está escrito.
          </h2>


          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {articles.map((article, index) => (
              <article
                key={article.title}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >

                <span className="rounded-full bg-[#BAD8E8] px-3 py-1 text-xs font-bold text-[#6997B8]">
                  {article.category}
                </span>

                <h3 className="mt-5 text-2xl font-extrabold leading-tight text-[#6997B8]">
                  {article.title}
                </h3>

                <p className="mt-3 leading-7 text-[#6997B8]/70">
                  {article.text}
                </p>

                <button
                  type="button"
                  className="mt-5 font-bold text-[#6997B8] hover:text-[#F3A05B]"
                >
                  Ler artigo →
                </button>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          ACOMPANHAMENTO
      ========================================================== */}
      <section
        id="acompanhamento"
        className="bg-white px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-extrabold tracking-[0.18em] text-[#6997B8]">
            ACOMPANHAMENTO
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#6997B8] md:text-5xl">
            Observe, registre e perceba a evolução.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-[#6997B8]/75">
            Um espaço simples para organizar observações sem transformar
            aprendizagem em diagnóstico.
          </p>


          <div className="mt-10 grid gap-8 lg:grid-cols-2">

            <div className="rounded-[30px] bg-[#F3EAD9] p-7">

              <div className="grid gap-4">

                <input
                  placeholder="Idade"
                  className="rounded-xl border border-[#6997B8]/15 bg-white p-3"
                />

                <input
                  placeholder="Série"
                  className="rounded-xl border border-[#6997B8]/15 bg-white p-3"
                />

                <textarea
                  placeholder="Objetivos"
                  className="min-h-24 rounded-xl border border-[#6997B8]/15 bg-white p-3"
                />

                <textarea
                  placeholder="Dificuldades observadas"
                  className="min-h-24 rounded-xl border border-[#6997B8]/15 bg-white p-3"
                />

                <textarea
                  placeholder="Observações"
                  className="min-h-24 rounded-xl border border-[#6997B8]/15 bg-white p-3"
                />

                <button
                  type="button"
                  className="rounded-xl bg-[#6997B8] px-5 py-3 font-bold text-white hover:bg-[#F3A05B]"
                >
                  Salvar registro
                </button>

              </div>

            </div>


            <div className="rounded-[30px] border border-[#6997B8]/15 bg-[#BAD8E8]/25 p-8">

              <h3 className="text-2xl font-extrabold text-[#6997B8]">
                Evolução percebida
              </h3>

              <p className="mt-2 text-sm text-[#6997B8]/65">
                Exemplo visual — não é pontuação diagnóstica.
              </p>


              <div className="mt-10 grid grid-cols-4 items-end gap-5">

                {[45, 65, 55, 80].map((height, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3"
                  >

                    <div className="flex h-56 w-full items-end rounded-xl bg-white p-2">

                      <div
                        className="w-full rounded-lg bg-[#6997B8]"
                        style={{ height: `${height}%` }}
                      />

                    </div>

                    <span className="text-xs font-bold text-[#6997B8]/70">
                      {["Leitura", "Org.", "Escrita", "Comp."][index]}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SOBRE
      ========================================================== */}
      <section
        id="sobre"
        className="bg-[#6997B8] px-6 py-20 text-white"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

          <div>

            <p className="text-sm font-extrabold tracking-[0.18em] text-[#BAD8E8]">
              SOBRE O DYSHELP
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold md:text-6xl">
              Não queremos mudar quem você é.
            </h2>

            <p className="mt-6 text-xl leading-9 text-white/85">
              Queremos ajudar você a compreender como cada pessoa aprende.
            </p>

            <p className="mt-5 leading-8 text-white/70">
              O DysHelp busca aproximar família, escola, profissionais e
              informação, oferecendo conteúdo gratuito, linguagem respeitosa
              e ferramentas que apoiam escolhas mais conscientes.
            </p>

          </div>


          <div className="rounded-[32px] border border-white/15 bg-white/10 p-8">

            <p className="text-2xl font-bold leading-9">
              “Seu filho é diferente pra você como você é diferente para o seu filho.”
            </p>

            <div className="mt-8 grid grid-cols-4 gap-2 text-center text-xs font-bold text-white/60">

              <span>Família</span>
              <span>Escola</span>
              <span>Profissionais</span>
              <span>Informação</span>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          RODAPÉ
      ========================================================== */}
      <footer className="bg-[#244A6F] px-6 py-14 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-4">

            <div>

              <div className="text-xl font-extrabold">
                DysHelp
              </div>

              <p className="mt-2 text-xs font-bold tracking-[0.16em] text-white/50">
                COMPREENDER. ACOLHER. APOIAR.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/65">
                Cada pessoa aprende de uma forma. Nosso papel não é mudar
                quem ela é, mas compreender como podemos ajudá-la.
              </p>

            </div>


            <div>

              <h3 className="font-extrabold">
                Plataforma
              </h3>

              <div className="mt-4 grid gap-3 text-sm text-white/65">

                <a href="#inicio" className="hover:text-white">
                  Início
                </a>

                <a href="#entenda" className="hover:text-white">
                  Entenda a dislexia
                </a>

                <a href="#biblioteca" className="hover:text-white">
                  Biblioteca
                </a>

                <a href="#atividades" className="hover:text-white">
                  Atividades
                </a>

                <Link href="/nia" className="hover:text-white">
                  NIA
                </Link>

              </div>

            </div>


            <div>

              <h3 className="font-extrabold">
                Para você
              </h3>

              <div className="mt-4 grid gap-3 text-sm text-white/65">

                <a href="#responsaveis" className="hover:text-white">
                  Responsáveis
                </a>

                <Link href="/profissionais" className="hover:text-white">
                  Profissionais
                </Link>

                <Link href="/ajuda" className="hover:text-white">
                  Ajuda
                </Link>

                <a href="#famosos" className="hover:text-white">
                  Famosos
                </a>

              </div>

            </div>


            <div>

              <h3 className="font-extrabold">
                Informações
              </h3>

              <div className="mt-4 grid gap-3 text-sm text-white/65">

                <a href="#sobre" className="hover:text-white">
                  Sobre nós
                </a>

                <Link href="/ajuda" className="hover:text-white">
                  FAQ / Ajuda
                </Link>

                <Link href="/estudo/dislexia" className="hover:text-white">
                  Estudo sobre dislexia
                </Link>

              </div>

            </div>

          </div>


          <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:justify-between">

            <span>
              © 2026 DysHelp · Plataforma gratuita
            </span>

            <span>
              Conteúdo educativo. Não substitui avaliação profissional.
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
}
