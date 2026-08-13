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
    title:
      "Carol W. Greider: ciência, descoberta e uma forma diferente de aprender",
    introduction:
      "Carol W. Greider é uma cientista norte-americana vencedora do Prêmio Nobel de Fisiologia ou Medicina. Sua trajetória mostra como diferentes formas de aprender podem coexistir com excelência acadêmica, criatividade e grandes descobertas.",
    paragraphs: [
      "Durante sua trajetória escolar, Greider enfrentou desafios relacionados à leitura e ao processamento de informações. Como muitas pessoas com dislexia, sua experiência de aprendizagem não seguia necessariamente os métodos tradicionais.",
      "Ao longo de sua formação, desenvolveu estratégias próprias para compreender problemas complexos e encontrou na ciência um espaço para sua curiosidade e criatividade.",
      "Seu trabalho sobre telômeros e telomerase transformou a compreensão da biologia celular e trouxe contribuições importantes para a ciência moderna.",
      "Sua história reforça que dificuldades de aprendizagem não representam falta de capacidade. Com apoio e oportunidades adequadas, diferentes maneiras de pensar podem gerar grandes contribuições.",
    ],
  },

  "whoopi-goldberg": {
    name: "Whoopi Goldberg",
    category: "Cinema e televisão",
    title:
      "Whoopi Goldberg: criatividade, comunicação e uma trajetória além da dislexia",
    introduction:
      "Whoopi Goldberg é atriz, comediante, apresentadora e uma das personalidades mais reconhecidas do entretenimento mundial. Ela também falou publicamente sobre sua experiência com dislexia.",
    paragraphs: [
      "Durante sua infância e juventude, Goldberg enfrentou dificuldades relacionadas ao ambiente escolar e à leitura.",
      "Com o tempo, encontrou na atuação uma forma de expressar sua criatividade, comunicação e talento artístico.",
      "Sua carreira inclui cinema, televisão e teatro, tornando-a uma referência cultural para diferentes gerações.",
      "Sua história mostra que uma dificuldade de aprendizagem não deve ser vista como uma definição da capacidade ou do futuro de uma pessoa.",
    ],
  },

  "muhammad-ali": {
    name: "Muhammad Ali",
    category: "Esporte e história",
    title:
      "Muhammad Ali: determinação, talento e uma trajetória que inspirou gerações",
    introduction:
      "Muhammad Ali foi um dos maiores boxeadores da história e uma das figuras públicas mais influentes do século XX.",
    paragraphs: [
      "Sua trajetória foi marcada por desafios desde cedo e sua história é frequentemente relacionada a dificuldades de aprendizagem.",
      "Dentro e fora dos ringues, Ali demonstrou confiança, inteligência emocional e uma capacidade única de comunicação.",
      "Além das conquistas esportivas, tornou-se uma referência mundial por sua personalidade e posicionamento social.",
      "Sua história lembra que cada pessoa possui diferentes habilidades e que dificuldades em uma área não eliminam talentos em outras.",
    ],
  },

  "tom-cruise": {
    name: "Tom Cruise",
    category: "Cinema",
    title:
      "Tom Cruise: estratégias de aprendizagem e uma carreira construída com persistência",
    introduction:
      "Tom Cruise é um dos atores mais conhecidos do cinema mundial e já falou publicamente sobre sua experiência com dislexia.",
    paragraphs: [
      "Durante sua educação, Cruise relatou dificuldades relacionadas à leitura e aos métodos tradicionais de ensino.",
      "Com o tempo, encontrou estratégias próprias para estudar e desenvolver suas habilidades.",
      "Sua carreira cinematográfica cresceu ao longo de décadas, tornando-o uma das maiores estrelas internacionais do cinema.",
      "Sua trajetória demonstra a importância de encontrar caminhos personalizados de aprendizagem.",
    ],
  },

  "tom-holland": {
    name: "Tom Holland",
    category: "Cinema",
    title:
      "Tom Holland: juventude, talento e diferentes caminhos para aprender",
    introduction:
      "Tom Holland é um ator britânico conhecido mundialmente e também compartilhou sua experiência com dislexia.",
    paragraphs: [
      "Desde jovem, Holland encontrou na arte uma maneira de desenvolver suas habilidades e expressar sua criatividade.",
      "Sua trajetória mostra como ambientes que valorizam diferentes talentos podem ajudar pessoas com diferentes formas de aprendizagem.",
      "Como parte de uma nova geração de artistas, ele contribui para ampliar as conversas sobre diferenças cognitivas.",
      "Sua história reforça que a dislexia faz parte da trajetória de uma pessoa, mas não determina seus limites.",
    ],
  },

  "richard-branson": {
    name: "Richard Branson",
    category: "Empreendedorismo",
    title:
      "Richard Branson: criatividade, empreendedorismo e uma nova visão sobre aprender",
    introduction:
      "Richard Branson é um empresário britânico conhecido mundialmente e fala abertamente sobre sua experiência com dislexia.",
    paragraphs: [
      "Durante sua vida escolar, Branson enfrentou dificuldades com métodos tradicionais de ensino.",
      "Ele destaca frequentemente a importância da criatividade, comunicação e capacidade de enxergar oportunidades.",
      "Sua trajetória empresarial o tornou uma das figuras mais conhecidas do empreendedorismo mundial.",
      "Sua história ajuda a mostrar que existem diferentes formas de inteligência e diferentes caminhos para desenvolver potencial.",
    ],
  },
};

export default async function FamousPersonArticle({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const article = articles[params.slug];

  if (!article) {
    return (
      <main className="min-h-screen bg-white">
        <section className="section">
          <div className="container">
            <h1 className="text-4xl font-extrabold text-deep">
              História não encontrada
            </h1>

            <Link
              href="/famosos"
              className="btn btn-primary mt-6"
            >
              Voltar
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-slate-200">
        <div className="container flex min-h-[76px] items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-deep">
            DysHelp
          </Link>

          <Link href="/famosos" className="btn btn-soft">
            ← Voltar
          </Link>
        </div>
      </header>

      <article className="section">
        <div className="container">
          <div className="mx-auto max-w-4xl">

            <p className="eyebrow">
              {article.category}
            </p>

            <h1 className="mt-4 text-4xl font-extrabold text-deep md:text-6xl">
              {article.title}
            </h1>

            <p className="mt-6 text-xl leading-9 text-slate-600">
              {article.introduction}
            </p>

            <div className="mt-10 space-y-8">
              {article.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-9 text-slate-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <aside className="mt-12 rounded-3xl bg-deep p-8 text-white">
              <h2 className="text-2xl font-extrabold">
                Uma história não define todas as pessoas
              </h2>

              <p className="mt-4 leading-8 text-white/80">
                Estas histórias existem para inspirar e informar. Cada pessoa
                com dislexia possui uma trajetória única, com diferentes
                desafios, habilidades e formas de aprender.
              </p>
            </aside>

            <div className="mt-10">
              <Link
                href="/famosos"
                className="btn btn-primary"
              >
                Ver outras histórias →
              </Link>
            </div>

          </div>
        </div>
      </article>
    </main>
  );
}
