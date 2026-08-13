import Link from "next/link";

type Article = {
  name: string;
  category: string;
  title: string;
  introduction: string;
  paragraphs: string[];
};

const articles: Record<string, Article> = {
  "carol-greider": {
    name: "Carol W. Greider",
    category: "Ciência",
    title: "Carol W. Greider: ciência, dislexia e perseverança",
    introduction:
      "Carol W. Greider é uma cientista norte-americana e vencedora do Prêmio Nobel de Fisiologia ou Medicina. Sua trajetória mostra que uma dificuldade de aprendizagem não precisa limitar a construção de uma carreira científica.",
    paragraphs: [
      "Greider construiu uma trajetória de destaque na ciência e participou de descobertas fundamentais sobre os telômeros e a telomerase, trabalho que contribuiu para o avanço da compreensão do envelhecimento e de determinadas doenças.",
      "Ao falar sobre sua experiência com dislexia, sua história também ajuda a mostrar que pessoas podem encontrar maneiras diferentes de aprender, estudar e desenvolver seus talentos.",
      "A dislexia não define a capacidade intelectual de uma pessoa. A trajetória de Greider é um exemplo de como interesses, oportunidades, apoio e persistência podem contribuir para uma vida acadêmica e profissional significativa.",
    ],
  },

  "whoopi-goldberg": {
    name: "Whoopi Goldberg",
    category: "Cinema e televisão",
    title: "Whoopi Goldberg: uma trajetória além da dislexia",
    introduction:
      "Whoopi Goldberg é atriz, comediante, apresentadora e produtora. Ela também falou publicamente sobre sua experiência com dislexia.",
    paragraphs: [
      "Goldberg construiu uma carreira extremamente diversa no entretenimento, trabalhando no cinema, na televisão e no teatro.",
      "Sua experiência é importante porque ajuda a combater a ideia de que dificuldades de aprendizagem determinam o potencial de uma pessoa.",
      "Conhecer histórias como a de Goldberg pode ajudar crianças, jovens e adultos com dislexia a perceber que existem diferentes caminhos para desenvolver seus talentos.",
    ],
  },

  "muhammad-ali": {
    name: "Muhammad Ali",
    category: "Esporte e história",
    title: "Muhammad Ali: talento, determinação e aprendizagem",
    introduction:
      "Muhammad Ali foi um dos maiores boxeadores da história e uma das figuras públicas mais importantes do século XX.",
    paragraphs: [
      "Além de sua trajetória esportiva, Ali ficou conhecido por sua personalidade marcante, sua confiança e sua capacidade de se comunicar com o público.",
      "Sua história é frequentemente associada a dificuldades de aprendizagem, lembrando que uma pessoa pode apresentar desafios em determinadas áreas e, ao mesmo tempo, desenvolver talentos extraordinários em outras.",
      "Para quem convive com dislexia, histórias de figuras como Ali podem servir como inspiração, desde que sejam vistas como histórias individuais e não como uma medida do que qualquer outra pessoa deveria alcançar.",
    ],
  },

  "tom-cruise": {
    name: "Tom Cruise",
    category: "Cinema",
    title: "Tom Cruise: dislexia e uma carreira no cinema",
    introduction:
      "Tom Cruise é um ator e produtor conhecido internacionalmente. Ele já falou publicamente sobre sua experiência com dislexia.",
    paragraphs: [
      "Cruise construiu uma longa carreira no cinema, participando de produções de grande alcance internacional.",
      "Sua experiência com dislexia ajuda a mostrar que dificuldades relacionadas à leitura e à aprendizagem não determinam sozinhas as possibilidades profissionais de uma pessoa.",
      "O mais importante é compreender que cada indivíduo aprende de maneira diferente e pode precisar de estratégias, apoio e recursos diferentes ao longo da vida.",
    ],
  },

  "tom-holland": {
    name: "Tom Holland",
    category: "Cinema",
    title: "Tom Holland: juventude, atuação e dislexia",
    introduction:
      "Tom Holland é um ator britânico que alcançou grande reconhecimento internacional e também falou sobre sua experiência com dislexia.",
    paragraphs: [
      "Holland começou a trabalhar artisticamente ainda jovem e construiu uma carreira no cinema e no teatro.",
      "Sua história pode ser especialmente significativa para crianças e adolescentes com dislexia, porque mostra que uma dificuldade de aprendizagem pode coexistir com diferentes talentos e interesses.",
      "Ao mesmo tempo, é importante lembrar que cada pessoa possui uma trajetória própria. A função dessas histórias é inspirar e ampliar possibilidades, não criar comparações ou cobranças.",
    ],
  },

  "richard-branson": {
    name: "Richard Branson",
    category: "Empreendedorismo",
    title: "Richard Branson: empreendedorismo e dislexia",
    introduction:
      "Richard Branson é um empresário britânico conhecido por criar e participar de diversos negócios. Ele fala abertamente sobre sua experiência com dislexia.",
    paragraphs: [
      "Branson tornou sua experiência com dislexia parte de sua narrativa pública e frequentemente fala sobre diferentes formas de aprender e trabalhar.",
      "Sua trajetória também é um exemplo de como características que podem representar dificuldades em determinados contextos não impedem necessariamente uma pessoa de desenvolver outras habilidades.",
      "Para o DysHelp, histórias como essa são importantes porque ajudam a apresentar a dislexia de maneira mais ampla, valorizando diferentes formas de aprender, pensar e desenvolver talentos.",
    ],
  },
};

export default async function FamousPersonArticle({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles[params.slug];

  if (!article) {
    return (
      <main className="min-h-screen bg-white">
        <header className="border-b border-slate-200 bg-white">
          <div className="container flex min-h-[76px] items-center justify-between">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tight text-deep"
            >
              DysHelp
            </Link>

            <Link href="/famosos" className="btn btn-soft">
              ← Voltar aos famosos
            </Link>
          </div>
        </header>

        <section className="section">
          <div className="container">
            <div className="card p-8">
              <h1 className="text-3xl font-extrabold text-deep">
                Matéria não encontrada
              </h1>

              <p className="mt-4 text-slate-600">
                Essa história ainda não está disponível.
              </p>

              <Link href="/famosos" className="btn btn-primary mt-6">
                Voltar para pessoas famosas →
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

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

          <Link href="/famosos" className="btn btn-soft">
            ← Voltar aos famosos
          </Link>
        </div>
      </header>

      <article className="section">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow">{article.category}</p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-deep md:text-6xl">
              {article.title}
            </h1>

            <p className="mt-7 text-xl leading-9 text-slate-600">
              {article.introduction}
            </p>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-cream p-7 md:p-9">
              <p className="text-sm font-bold uppercase tracking-[.16em] text-slate-500">
                História
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-deep">
                {article.name}
              </h2>
            </div>

            <div className="mt-10 space-y-7">
              {article.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-9 text-slate-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <aside className="mt-12 rounded-3xl bg-deep p-7 text-white md:p-9">
              <h2 className="text-2xl font-extrabold">
                Uma história não define todas as pessoas
              </h2>

              <p className="mt-4 leading-8 text-white/80">
                Esta história tem o objetivo de informar e inspirar. Pessoas
                com dislexia possuem experiências diferentes, e não existe
                uma única maneira de aprender, trabalhar ou alcançar seus
                objetivos.
              </p>
            </aside>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/famosos" className="btn btn-primary">
                ← Ver todas as histórias
              </Link>

              <Link href="/" className="btn btn-soft">
                Voltar ao DysHelp
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
