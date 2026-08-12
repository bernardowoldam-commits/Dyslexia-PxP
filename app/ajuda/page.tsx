"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Accessibility,
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  HeartHandshake,
  Lightbulb,
  Menu,
  MessageCircle,
  Search,
  Sparkles,
  Users,
  X,
  Zap,
  Printer,
  Save,
  Edit3,
  Download,
  BarChart3,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const nav = [
  ["Início", "inicio"],
  ["Entenda a dislexia", "entenda"],
  ["Responsáveis", "responsaveis"],
  ["Profissionais", "profissionais"],
  ["Biblioteca", "biblioteca"],
  ["Atividades", "atividades"],
  ["IA", "nia"],
  ["Entre Linhas", "blog"],
  ["Sobre nós", "sobre"],
];

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

const pros = [
  "Estratégias pedagógicas",
  "Atividades",
  "Adaptações",
  "Materiais educacionais",
  "Recursos para sala de aula",
  "Biblioteca profissional",
];

const materials = [
  [
    "Leitura sem pressão",
    "Leitura",
    "Um guia para criar momentos de leitura mais leves e previsíveis.",
    "6 min",
  ],
  [
    "Conversando com a escola",
    "Escola",
    "Perguntas e caminhos para construir uma parceria respeitosa.",
    "8 min",
  ],
  [
    "Aprender diferente",
    "Aprendizagem",
    "Ideias práticas para reconhecer diferentes formas de aprender.",
    "5 min",
  ],
  [
    "Cuidando da autoestima",
    "Emoções",
    "Como reconhecer esforço, progresso e confiança no cotidiano.",
    "7 min",
  ],
];

const articles = [
  [
    "Meu filho não é preguiçoso: entendendo o esforço por trás da leitura",
    "Família",
    "12 ago 2026",
    "6 min",
  ],
  [
    "Como conversar com a escola sobre as dificuldades de aprendizagem",
    "Escola",
    "08 ago 2026",
    "8 min",
  ],
  [
    "Dislexia e autoestima: quando a cobrança começa a machucar",
    "Emoções",
    "02 ago 2026",
    "7 min",
  ],
  [
    "Aprender diferente não significa aprender menos",
    "Aprendizagem",
    "28 jul 2026",
    "5 min",
  ],
];

const chart = [
  { name: "Leitura", v: 4 },
  { name: "Organização", v: 6 },
  { name: "Escrita", v: 5 },
  { name: "Compreensão", v: 7 },
];

function Header({
  open,
  setOpen,
  setAccess,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  setAccess: (v: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container flex h-[76px] items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0">
          <div className="text-xl font-extrabold tracking-tight text-deep">
            ENTRE LINHAS
          </div>

          <div className="text-[10px] font-bold tracking-[.18em] text-slate-500">
            COMPREENDER. ACOLHER. APOIAR.
          </div>
        </a>

        <nav className="hidden items-center gap-5 xl:flex">
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button className="btn btn-soft text-sm">Entrar</button>

          <a href="#inicio" className="btn btn-sun text-sm">
            Começar gratuitamente
          </a>

          <button
            aria-label="Acessibilidade"
            onClick={() => setAccess(true)}
            className="btn btn-soft p-3"
          >
            <Accessibility size={18} />
          </button>
        </div>

        <button
          className="p-2 lg:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white p-5 lg:hidden">
          <div className="grid gap-3">
            {nav.map(([label, id]) => (
              <a
                onClick={() => setOpen(false)}
                key={id}
                href={`#${id}`}
                className="nav-link py-2"
              >
                {label}
              </a>
            ))}

            <button
              onClick={() => setAccess(true)}
              className="btn btn-soft justify-start"
            >
              <Accessibility size={18} />
              Acessibilidade
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionTitle({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="eyebrow mb-3">{eyebrow}</div>

      <h2 className="text-3xl font-extrabold tracking-tight text-deep md:text-5xl">
        {title}
      </h2>

      {sub && (
        <p className="mt-4 text-lg leading-8 text-slate-600">
          {sub}
        </p>
      )}
    </div>
  );
}

function AccessibilityPanel({
  close,
  large,
  setLarge,
  contrast,
  setContrast,
  motion,
  setMotion,
  reset,
}: {
  close: () => void;
  large: boolean;
  setLarge: (v: boolean) => void;
  contrast: boolean;
  setContrast: (v: boolean) => void;
  motion: boolean;
  setMotion: (v: boolean) => void;
  reset: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[70] flex justify-end bg-black/30 p-4"
      onClick={close}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className="mt-16 w-full max-w-sm self-start rounded-3xl bg-white p-6 shadow-2xl"
      >
        <div className="flex justify-between">
          <div>
            <p className="eyebrow">Acessibilidade</p>

            <h3 className="text-2xl font-extrabold text-deep">
              Ajuste sua leitura
            </h3>
          </div>

          <button onClick={close} aria-label="Fechar acessibilidade">
            <X />
          </button>
        </div>

        <div className="mt-6 grid gap-3">
          <button
            className="btn btn-soft justify-between"
            onClick={() => setLarge(!large)}
          >
            Aumentar texto
            <span>{large ? "Ativo" : "Inativo"}</span>
          </button>

          <button
            className="btn btn-soft justify-between"
            onClick={() => setContrast(!contrast)}
          >
            Alto contraste
            <span>{contrast ? "Ativo" : "Inativo"}</span>
          </button>

          <button
            className="btn btn-soft justify-between"
            onClick={() => setMotion(!motion)}
          >
            Reduzir animações
            <span>{motion ? "Ativo" : "Inativo"}</span>
          </button>

          <button className="btn btn-primary" onClick={reset}>
            Restaurar padrão
          </button>
        </div>
      </aside>
    </div>
  );
}

/*
 * CHAT DA NIA
 *
 * Este componente conversa diretamente com:
 *
 * POST /api/nia
 *
 * enviando:
 *
 * {
 *   message: "pergunta do usuário"
 * }
 *
 * A chave da OpenAI NÃO fica neste arquivo.
 * Ela continua protegida no servidor através das
 * variáveis de ambiente da Vercel.
 */
function ChatNIA({
  close,
  initialMessage = "",
}: {
  close: () => void;
  initialMessage?: string;
}) {
  const [message, setMessage] = useState(initialMessage);

  const [response, setResponse] = useState(
    "Olá! Sou a NIA. Digite sua dúvida e vou tentar ajudar de forma educativa e acolhedora."
  );

  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    const text = message.trim();

    if (!text || loading) {
      return;
    }

    setLoading(true);

    setResponse("Estou pensando em uma resposta para você...");

    try {
      const result = await fetch("/api/nia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await result.json();

      if (!result.ok || !data.ok) {
        throw new Error(
          data.error || "Não foi possível obter uma resposta da NIA."
        );
      }

      setResponse(
        data.response ||
          data.message ||
          "A NIA recebeu sua pergunta, mas não retornou uma resposta."
      );

      setMessage("");
    } catch (error) {
      console.error("Erro ao conversar com a NIA:", error);

      setResponse(
        error instanceof Error
          ? error.message
          : "Não foi possível obter uma resposta da NIA."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/30 p-4 md:items-center"
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl"
      >
        <div className="flex justify-between gap-4">
          <div>
            <p className="eyebrow">NIA</p>

            <h3 className="text-2xl font-extrabold text-deep">
              Como posso apoiar sua dúvida?
            </h3>
          </div>

          <button
            onClick={close}
            aria-label="Fechar conversa com a NIA"
            className="shrink-0"
          >
            <X />
          </button>
        </div>

        <div className="mt-6 rounded-2xl bg-cream p-5 text-sm leading-7 text-slate-700">
          {response}
        </div>

        <div className="mt-4 flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            disabled={loading}
            placeholder="Digite uma dúvida..."
            className="min-w-0 flex-1 rounded-xl border bg-white p-3 outline-none focus:border-deep"
          />

          <button
            onClick={sendMessage}
            disabled={loading || !message.trim()}
            className="btn btn-primary px-4"
            aria-label="Enviar pergunta para a NIA"
          >
            {loading ? "..." : <ArrowRight />}
          </button>
        </div>

        <p className="mt-3 text-xs leading-5 text-slate-400">
          A NIA tem finalidade educativa e não substitui avaliação ou
          acompanhamento profissional.
        </p>
      </div>
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [access, setAccess] = useState(false);

  const [large, setLarge] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [motion, setMotion] = useState(false);

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Todos");

  const [myth, setMyth] = useState<number | null>(null);
  const [generated, setGenerated] = useState(false);

  const [age, setAge] = useState("9");
  const [objective, setObjective] = useState("leitura");
  const [level, setLevel] = useState("inicial");
  const [qty, setQty] = useState("5");

  const [chat, setChat] = useState(false);
  const [niaDraft, setNiaDraft] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("contrast", contrast);
    document.documentElement.classList.toggle("large-text", large);
    document.documentElement.classList.toggle("no-motion", motion);
  }, [contrast, large, motion]);

  const filtered = useMemo(
    () =>
      materials.filter(
        (m) =>
          (filter === "Todos" || m[1] === filter) &&
          m.join(" ").toLowerCase().includes(query.toLowerCase())
      ),
    [filter, query]
  );

  function openNIA() {
    setChat(true);
  }

  return (
    <div className="min-h-screen bg-white">
      <Header
        open={menu}
        setOpen={setMenu}
        setAccess={setAccess}
      />

      {access && (
        <AccessibilityPanel
          close={() => setAccess(false)}
          large={large}
          setLarge={setLarge}
          contrast={contrast}
          setContrast={setContrast}
          motion={motion}
          setMotion={setMotion}
          reset={() => {
            setLarge(false);
            setContrast(false);
            setMotion(false);
          }}
        />
      )}

      <main>
        <section
          id="inicio"
          className="gradient-hero overflow-hidden"
        >
          <div className="container grid items-center gap-14 py-20 md:grid-cols-2 md:py-28">
            <div className="reveal">
              <p className="eyebrow">Um lugar para compreender</p>

              <h1 className="mt-4 text-5xl font-extrabold leading-[1.02] tracking-[-.04em] text-deep md:text-7xl">
                Compreender é o primeiro passo para transformar.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                A dislexia não define quem uma pessoa é. Quando compreendemos
                diferentes formas de aprender, criamos espaço para diferentes
                formas de crescer.
              </p>

              <div className="mt-8 rounded-3xl border border-deep/10 bg-white/75 p-6 shadow-xl shadow-deep/5">
                <p className="text-xl font-bold leading-8 text-deep">
                  "Seu filho é diferente pra você como você é diferente para o
                  seu filho."
                </p>

                <p className="mt-2 font-semibold text-slate-600">
                  Porque aprender diferente não significa aprender menos.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#entenda" className="btn btn-primary">
                  Quero entender a dislexia
                  <ArrowRight size={18} />
                </a>

                <a href="#responsaveis" className="btn btn-soft">
                  Sou responsável
                </a>

                <a href="#profissionais" className="btn btn-soft">
                  Sou profissional
                </a>
              </div>

              <p className="mt-5 text-sm font-semibold text-slate-500">
                Conteúdo, ferramentas e orientação gratuitos.
              </p>
            </div>

            <div className="relative reveal">
              <div className="aspect-[4/5] rounded-[40px] bg-gradient-to-br from-sky/70 via-white to-sage/70 p-5 shadow-2xl">
                <div className="flex h-full flex-col justify-between rounded-[30px] bg-white/75 p-8">
                  <div className="flex justify-between">
                    <span className="rounded-full bg-deep px-3 py-1 text-xs font-bold text-white">
                      APRENDER
                    </span>

                    <HeartHandshake
                      className="text-deep"
                      size={30}
                    />
                  </div>

                  <div>
                    <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-sage/70">
                      <Users size={76} className="text-deep" />
                    </div>

                    <div className="mx-auto max-w-xs rounded-2xl bg-cream p-5 text-center">
                      <p className="font-bold text-deep">
                        Conexão antes da cobrança.
                      </p>

                      <p className="mt-2 text-sm text-slate-600">
                        Apoio, escuta e estratégias podem abrir novos caminhos.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-500">
                    <span>Família</span>
                    <span>Escola</span>
                    <span>Profissionais</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-deep text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-2xl font-semibold md:text-4xl">
                E se a pergunta não fosse{" "}
                <span className="text-sky">
                  "por que ele não consegue?"
                </span>
              </p>

              <p className="mt-5 text-3xl font-extrabold md:text-5xl">
                E se fosse "como ele consegue aprender?"
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-5">
              {[
                "Cobrar → Compreender",
                "Comparar → Respeitar",
                "Rotular → Observar",
                "Corrigir → Orientar",
                "Desistir → Adaptar",
              ].map((x, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center font-bold"
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="entenda" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Entenda a dislexia"
              title="Primeiro, vamos entender."
              sub="A informação correta pode mudar a forma como enxergamos uma dificuldade."
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
                  "As características variam de pessoa para pessoa e podem aparecer de formas diferentes.",
                ],
                [
                  "Como podemos ajudar?",
                  "Estratégias, adaptações, tempo e apoio podem facilitar experiências de aprendizagem.",
                ],
              ].map(([t, d], i) => (
                <article key={i} className="card p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/30 text-deep">
                    <Brain size={24} />
                  </div>

                  <h3 className="text-xl font-extrabold text-deep">
                    {t}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {d}
                  </p>

                  <button className="mt-5 font-bold text-deep">
                    Explorar{" "}
                    <ArrowRight
                      className="inline"
                      size={16}
                    />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="responsaveis" className="section bg-cream">
          <div className="container">
            <SectionTitle
              eyebrow="Para responsáveis"
              title="Para quem acompanha de perto."
              sub="Você não precisa entender tudo de uma vez. Precisa apenas começar a compreender."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {parents.map((x) => (
                <article
                  key={x}
                  className="rounded-3xl border border-white bg-white p-6 shadow-sm transition hover:shadow-lg"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-sage/50 text-deep">
                    <HeartHandshake size={21} />
                  </div>

                  <h3 className="font-extrabold text-deep">
                    {x}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Informações práticas para apoiar com mais compreensão.
                  </p>

                  <button className="mt-4 text-sm font-bold text-deep">
                    Explorar →
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="profissionais" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Para profissionais"
              title="Para quem ajuda a transformar a aprendizagem."
              sub="Ferramentas e informações para profissionais que trabalham com diferentes formas de aprender."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {pros.map((x) => (
                <article key={x} className="card p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/30 text-deep">
                    <Lightbulb />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-deep">
                    {x}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Recursos para planejar, adaptar e acompanhar experiências
                    de aprendizagem.
                  </p>
                </article>
              ))}
            </div>

            <a
              href="#atividades"
              className="btn btn-primary mt-8"
            >
              Explorar recursos profissionais
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section id="nia" className="section bg-deep">
          <div className="container grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <div className="text-white">
              <p className="eyebrow text-sky">
                NIA · Núcleo de Inteligência e Apoio
              </p>

              <h2 className="mt-3 text-4xl font-extrabold md:text-6xl">
                Transforme dúvidas em caminhos possíveis.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/75">
                Uma ferramenta de apoio educativo, preparada para integração
                com IA.
              </p>

              <p className="mt-6 text-sm text-white/60">
                A NIA possui finalidade educativa e não substitui avaliação ou
                acompanhamento profissional.
              </p>

              <button
                onClick={openNIA}
                className="btn btn-sun mt-7"
              >
                Conversar com a NIA
                <MessageCircle size={18} />
              </button>
            </div>

            <div className="rounded-[30px] bg-white p-4 shadow-2xl">
              <div className="rounded-2xl bg-cream p-4">
                <div className="flex items-center gap-3 border-b pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky">
                    <Sparkles size={20} />
                  </div>

                  <div>
                    <b className="text-deep">NIA</b>
                    <div className="text-xs text-slate-500">
                      Apoio educativo
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-4">
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-deep p-4 text-sm text-white">
                    Meu filho fica frustrado quando precisa ler. Como posso
                    ajudar?
                  </div>

                  <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm">
                    A frustração pode aparecer quando uma tarefa exige muito
                    esforço. Experimente dividir a atividade em pequenas
                    etapas, oferecer pausas e reconhecer o esforço envolvido.
                  </div>
                </div>

                <div className="flex gap-2 border-t pt-4">
                  <input
                    value={niaDraft}
                    onChange={(e) => setNiaDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        openNIA();
                      }
                    }}
                    placeholder="Escreva sua dúvida..."
                    className="min-w-0 flex-1 rounded-xl border bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-deep"
                  />

                  <button
                    onClick={openNIA}
                    className="btn btn-primary px-4"
                    aria-label="Conversar com a NIA"
                  >
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="atividades" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Ferramenta gratuita"
              title="Crie uma atividade para sua necessidade."
              sub="Monte uma proposta inicial e veja uma prévia pronta para editar, salvar ou imprimir."
            />

            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
              <div className="card p-7">
                <div className="grid gap-5">
                  <label className="font-bold text-deep">
                    Idade

                    <input
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="mt-2 w-full rounded-xl border p-3"
                    />
                  </label>

                  <label className="font-bold text-deep">
                    Ano/Série

                    <select className="mt-2 w-full rounded-xl border p-3">
                      <option>4º ano</option>
                      <option>5º ano</option>
                      <option>6º ano</option>
                      <option>7º ano</option>
                    </select>
                  </label>

                  <label className="font-bold text-deep">
                    Objetivo

                    <select
                      value={objective}
                      onChange={(e) =>
                        setObjective(e.target.value)
                      }
                      className="mt-2 w-full rounded-xl border p-3"
                    >
                      {[
                        "leitura",
                        "compreensão",
                        "escrita",
                        "ortografia",
                        "consciência fonológica",
                        "vocabulário",
                        "organização",
                      ].map((x) => (
                        <option key={x}>{x}</option>
                      ))}
                    </select>
                  </label>

                  <label className="font-bold text-deep">
                    Nível

                    <select
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      className="mt-2 w-full rounded-xl border p-3"
                    >
                      <option>inicial</option>
                      <option>intermediário</option>
                      <option>avançado</option>
                    </select>
                  </label>

                  <label className="font-bold text-deep">
                    Quantidade de questões

                    <select
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      className="mt-2 w-full rounded-xl border p-3"
                    >
                      <option>5</option>
                      <option>8</option>
                      <option>10</option>
                    </select>
                  </label>

                  <button
                    onClick={() => setGenerated(true)}
                    className="btn btn-sun py-4"
                  >
                    Gerar atividade
                    <Zap size={18} />
                  </button>
                </div>
              </div>

              <div className="min-h-[420px] rounded-3xl bg-cream p-7">
                {generated ? (
                  <div>
                    <div className="flex justify-between gap-4">
                      <div>
                        <p className="eyebrow">
                          Prévia da atividade
                        </p>

                        <h3 className="mt-2 text-2xl font-extrabold text-deep">
                          Explorando {objective}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Idade {age} · nível {level} · {qty} questões
                        </p>
                      </div>

                      <Check className="text-deep" />
                    </div>

                    <div className="mt-7 space-y-4">
                      {Array.from(
                        { length: Number(qty) },
                        (_, i) => (
                          <div
                            key={i}
                            className="rounded-2xl bg-white p-4 shadow-sm"
                          >
                            <b>{i + 1}. </b>
                            Leia com calma e encontre uma resposta que faça
                            sentido para você.
                          </div>
                        )
                      )}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <button className="btn btn-soft">
                        <Save size={16} />
                        Salvar
                      </button>

                      <button className="btn btn-soft">
                        <Edit3 size={16} />
                        Editar
                      </button>

                      <button
                        onClick={() => window.print()}
                        className="btn btn-soft"
                      >
                        <Printer size={16} />
                        Imprimir
                      </button>

                      <button className="btn btn-soft">
                        <Download size={16} />
                        Exportar PDF
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <Sparkles size={42} className="text-deep" />

                    <h3 className="mt-5 text-2xl font-extrabold text-deep">
                      Sua atividade aparecerá aqui.
                    </h3>

                    <p className="mt-2 max-w-md text-slate-600">
                      Preencha os campos ao lado e gere uma prévia gratuita.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="biblioteca" className="section bg-slate-50">
          <div className="container">
            <SectionTitle
              eyebrow="Biblioteca Entre Linhas"
              title="Conhecimento para entender. Recursos para agir."
            />

            <div className="flex flex-col gap-3 md:flex-row">
              <div className="relative flex-1">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={19}
                />

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar materiais..."
                  className="w-full rounded-2xl border bg-white py-4 pl-11 pr-4"
                />
              </div>

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="rounded-2xl border bg-white px-5 py-4"
              >
                <option>Todos</option>
                <option>Leitura</option>
                <option>Escola</option>
                <option>Aprendizagem</option>
                <option>Emoções</option>
              </select>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {filtered.map(([t, c, d, time], i) => (
                <article
                  key={t}
                  className="card overflow-hidden"
                >
                  <div
                    className={`flex h-36 items-end p-5 ${
                      i % 2 ? "bg-sage/50" : "bg-sky/40"
                    }`}
                  >
                    <BookOpen
                      className="text-deep"
                      size={36}
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-deep">
                      {c}
                    </span>

                    <h3 className="mt-2 font-extrabold text-deep">
                      {t}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {d}
                    </p>

                    <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span>{time}</span>

                      <button className="font-extrabold text-deep">
                        Abrir →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Mitos e verdades"
              title="Nem tudo o que ouvimos sobre dislexia é verdade."
            />

            <div className="grid gap-5 md:grid-cols-2">
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
              ].map(([q, a, d], i) => (
                <button
                  key={i}
                  onClick={() =>
                    setMyth(myth === i ? null : i)
                  }
                  className="card p-7 text-left"
                >
                  <div className="flex justify-between gap-4">
                    <h3 className="text-xl font-extrabold text-deep">
                      {q}
                    </h3>

                    <ChevronDown
                      className={`shrink-0 transition ${
                        myth === i ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {myth === i && (
                    <div className="mt-5 border-t pt-5">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-extrabold ${
                          a === "MITO"
                            ? "bg-sun"
                            : "bg-sage"
                        }`}
                      >
                        {a}
                      </span>

                      <p className="mt-3 leading-7 text-slate-600">
                        {d}
                      </p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="section bg-cream">
          <div className="container">
            <SectionTitle
              eyebrow="Entre Linhas"
              title="Porque algumas coisas importantes precisam ser vistas além do que está escrito."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {articles.map(([t, c, date, time], i) => (
                <article
                  key={t}
                  className="overflow-hidden rounded-3xl border border-white bg-white shadow-sm"
                >
                  <div
                    className={`flex h-44 items-end p-6 ${
                      i % 2 ? "bg-sky/40" : "bg-sage/50"
                    }`}
                  >
                    <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-deep">
                      {c}
                    </span>
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-extrabold leading-tight text-deep">
                      {t}
                    </h3>

                    <p className="mt-3 text-sm text-slate-500">
                      {date} · {time} de leitura
                    </p>

                    <p className="mt-4 leading-7 text-slate-600">
                      Um olhar acolhedor e prático para situações que fazem
                      parte da jornada de aprender e apoiar.
                    </p>

                    <button className="mt-5 font-bold text-deep">
                      Ler artigo{" "}
                      <ArrowRight
                        className="inline"
                        size={16}
                      />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="acompanhamento" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Meu acompanhamento"
              title="Observe, registre e perceba a evolução."
              sub="Um espaço simples para organizar observações sem transformar aprendizagem em diagnóstico."
            />

            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="card grid gap-4 p-7">
                <input
                  placeholder="Idade"
                  className="rounded-xl border p-3"
                />

                <input
                  placeholder="Série"
                  className="rounded-xl border p-3"
                />

                <textarea
                  placeholder="Objetivos"
                  className="min-h-24 rounded-xl border p-3"
                />

                <textarea
                  placeholder="Dificuldades observadas"
                  className="min-h-24 rounded-xl border p-3"
                />

                <textarea
                  placeholder="Observações"
                  className="min-h-24 rounded-xl border p-3"
                />

                <button className="btn btn-primary">
                  Salvar registro
                </button>
              </div>

              <div className="card p-7">
                <div className="flex items-center gap-3">
                  <BarChart3 className="text-deep" />

                  <div>
                    <h3 className="font-extrabold text-deep">
                      Evolução percebida
                    </h3>

                    <p className="text-sm text-slate-500">
                      Exemplo visual — não é pontuação diagnóstica.
                    </p>
                  </div>
                </div>

                <div className="mt-8 h-72">
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <BarChart data={chart}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="v"
                        fill="#234E70"
                        radius={[7, 7, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section bg-deep text-white">
          <div className="container grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-sky">Sobre nós</p>

              <h2 className="mt-3 text-4xl font-extrabold md:text-6xl">
                Não queremos mudar quem você é.
              </h2>

              <p className="mt-6 text-xl leading-9 text-white/80">
                Queremos ajudar você a compreender como cada pessoa aprende.
              </p>

              <p className="mt-5 leading-8 text-white/70">
                O Entre Linhas busca aproximar{" "}
                <b className="text-white">
                  Família + Escola + Profissionais + Informação
                </b>
                , com conteúdo gratuito, linguagem respeitosa e ferramentas
                que apoiam escolhas mais conscientes.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/15 bg-white/10 p-8">
              <p className="text-2xl font-bold leading-9">
                "Seu filho é diferente pra você como você é diferente para o
                seu filho."
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
      </main>

      <footer className="bg-[#152f43] text-white">
        <div className="container py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="text-xl font-extrabold">
                ENTRE LINHAS
              </div>

              <p className="mt-2 text-xs tracking-[.16em] text-white/50">
                COMPREENDER. ACOLHER. APOIAR.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/65">
                Cada pessoa aprende de uma forma. Nosso papel não é mudar quem
                ela é, mas compreender como podemos ajudá-la a desenvolver todo
                o seu potencial.
              </p>
            </div>

            {[
              [
                "Plataforma",
                [
                  "Início",
                  "Entenda a dislexia",
                  "Biblioteca",
                  "Atividades",
                  "IA",
                ],
              ],
              [
                "Para você",
                [
                  "Responsáveis",
                  "Profissionais",
                  "Acessibilidade",
                ],
              ],
              [
                "Informações",
                [
                  "Sobre nós",
                  "FAQ",
                  "Contato",
                  "Política de Privacidade",
                  "Termos de Uso",
                ],
              ],
            ].map(([h, items]) => (
              <div key={h as string}>
                <h3 className="font-extrabold">
                  {h as string}
                </h3>

                <div className="mt-4 grid gap-3 text-sm text-white/65">
                  {(items as string[]).map((x) => (
                    <a
                      key={x}
                      href="#inicio"
                      className="hover:text-white"
                    >
                      {x}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:justify-between">
            <span>
              © 2026 Entre Linhas · Plataforma gratuita
            </span>

            <span>
              Conteúdo educativo. Não substitui avaliação profissional.
            </span>
          </div>
        </div>
      </footer>

      {chat && (
        <ChatNIA
          close={() => setChat(false)}
          initialMessage={niaDraft}
        />
      )}
    </div>
  );
}

export default App;
