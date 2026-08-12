 "use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  BookOpen,
  Brain,
  HeartHandshake,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

const navItems = [
  ["Entenda a dislexia", "/estudo/dislexia"],
  ["Famosos", "/famosos"],
  ["Biblioteca", "/biblioteca"],
  ["Ajuda", "/ajuda"],
  ["NIA", "#nia"],
  ["Sobre", "/sobre"],
] as const;

function AccessibilityPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("large-text", largeText);
    document.documentElement.classList.toggle("high-contrast", highContrast);
    document.documentElement.classList.toggle("reduce-motion", reducedMotion);

    return () => {
      document.documentElement.classList.remove(
        "large-text",
        "high-contrast",
        "reduce-motion"
      );
    };
  }, [largeText, highContrast, reducedMotion]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#173a56]/45 p-4 backdrop-blur-sm"
      onMouseDown={onClose}
      role="presentation"
    >
      <aside
        className="mx-auto mt-20 w-full max-w-md rounded-[28px] bg-white p-7 shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="accessibility-title"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">Acessibilidade</p>
            <h2
              id="accessibility-title"
              className="mt-2 text-2xl font-bold text-[#234f73]"
            >
              Ajuste sua leitura
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="icon-button"
            aria-label="Fechar acessibilidade"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mt-7 grid gap-3">
          <button
            type="button"
            className="access-option"
            onClick={() => setLargeText((value) => !value)}
          >
            <span>Texto maior</span>
            <strong>{largeText ? "Ativo" : "Inativo"}</strong>
          </button>

          <button
            type="button"
            className="access-option"
            onClick={() => setHighContrast((value) => !value)}
          >
            <span>Alto contraste</span>
            <strong>{highContrast ? "Ativo" : "Inativo"}</strong>
          </button>

          <button
            type="button"
            className="access-option"
            onClick={() => setReducedMotion((value) => !value)}
          >
            <span>Reduzir animações</span>
            <strong>{reducedMotion ? "Ativo" : "Inativo"}</strong>
          </button>

          <button
            type="button"
            className="btn btn-blue mt-2"
            onClick={() => {
              setLargeText(false);
              setHighContrast(false);
              setReducedMotion(false);
            }}
          >
            Restaurar padrão
          </button>
        </div>
      </aside>
    </div>
  );
}

function NiaModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(
    "Olá! Sou a NIA. Faça uma pergunta sobre aprendizagem, leitura, estudo ou estratégias de apoio."
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function askNia() {
    const trimmed = question.trim();

    if (!trimmed) {
      setError("Digite uma pergunta.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/nia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: trimmed }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data?.error || "Não foi possível obter uma resposta agora."
        );
      }

      setAnswer(
        data?.answer ||
          "Não consegui preparar uma resposta agora. Tente novamente."
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível obter uma resposta agora."
      );
    } finally {
      setLoading(false);
    }
  }

  function newQuestion() {
    setQuestion("");
    setError("");
    setAnswer(
      "Olá! Sou a NIA. Faça uma pergunta sobre aprendizagem, leitura, estudo ou estratégias de apoio."
    );
  }

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[110] bg-[#173a56]/55 p-4 backdrop-blur-sm"
      onMouseDown={onClose}
      role="presentation"
    >
      <div
        className="nia-modal"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="nia-title"
      >
        <div className="nia-modal-header">
          <div>
            <p className="eyebrow">NIA</p>
            <h2 id="nia-title" className="mt-2 text-3xl font-bold text-[#234f73]">
              Como posso apoiar sua dúvida?
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="icon-button"
            aria-label="Fechar NIA"
          >
            <X size={23} />
          </button>
        </div>

        <div className="nia-modal-body">
          <div className="nia-answer">
            <span className="nia-answer-label">Resposta da NIA</span>
            {loading ? (
              <p className="mt-3 text-[#234f73]">Pensando...</p>
            ) : (
              <p className="mt-3 whitespace-pre-wrap leading-7 text-[#31465a]">
                {answer}
              </p>
            )}
          </div>

          {error && (
            <div className="nia-error" role="alert">
              {error}
            </div>
          )}

          <label
            htmlFor="nia-question"
            className="mt-7 block text-sm font-bold text-[#31465a]"
          >
            Sua pergunta
          </label>

          <div className="mt-2 flex gap-3">
            <textarea
              id="nia-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void askNia();
                }
              }}
              placeholder="Ex.: Como posso ajudar uma criança que se frustra ao ler?"
              className="nia-input min-h-[88px]"
              disabled={loading}
              aria-describedby="nia-hint"
            />

            <button
              type="button"
              onClick={() => void askNia()}
              className="nia-send"
              disabled={loading}
              aria-label="Enviar pergunta"
            >
              <ArrowRight size={24} />
            </button>
          </div>

          <p id="nia-hint" className="mt-2 text-xs text-[#8299ad]">
            Enter envia · Shift + Enter cria uma nova linha
          </p>

          <div className="mt-4 flex flex-wrap justify-end gap-3">
            <button type="button" onClick={newQuestion} className="btn btn-soft">
              Nova pergunta
            </button>
            <button type="button" onClick={onClose} className="btn btn-soft">
              Voltar ao site
            </button>
          </div>

          <p className="mt-5 text-center text-xs leading-5 text-[#8299ad]">
            A NIA possui finalidade educativa e não substitui avaliação ou
            acompanhamento profissional.
          </p>
        </div>
      </div>
    </div>
  );
}

function Header({
  onNia,
  onAccessibility,
}: {
  onNia: () => void;
  onAccessibility: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  function goToNia() {
    setMenuOpen(false);
    onNia();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#dce8ef] bg-white/95 backdrop-blur-xl">
      <div className="container flex min-h-[82px] items-center justify-between gap-5">
        <Link href="/" className="shrink-0" aria-label="DysHelp — início">
          <img
            src="/logo.png"
            alt="DysHelp"
            className="h-[58px] w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {navItems.map(([label, href]) =>
            href === "#nia" ? (
              <button
                key={label}
                type="button"
                onClick={onNia}
                className="nav-link"
              >
                {label}
              </button>
            ) : (
              <Link key={label} href={href} className="nav-link">
                {label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={onAccessibility}
            className="accessibility-button"
          >
            <Accessibility size={18} />
            Acessibilidade
          </button>
        </div>

        <button
          type="button"
          className="icon-button lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#e7eef3] bg-white px-5 py-5 lg:hidden">
          <nav className="container grid gap-2" aria-label="Menu móvel">
            {navItems.map(([label, href]) =>
              href === "#nia" ? (
                <button
                  key={label}
                  type="button"
                  onClick={goToNia}
                  className="mobile-nav-link"
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  {label}
                </Link>
              )
            )}

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onAccessibility();
              }}
              className="mobile-nav-link text-left"
            >
              Acessibilidade
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default function Home() {
  const [niaOpen, setNiaOpen] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Header
        onNia={() => setNiaOpen(true)}
        onAccessibility={() => setAccessibilityOpen(true)}
      />

      <section id="inicio" className="hero-section">
        <div className="container grid items-center gap-12 py-14 md:grid-cols-[0.9fr_1.1fr] md:py-20">
          <div className="hero-copy">
            <p className="eyebrow">Informação · acolhimento · apoio</p>

            <h1 className="display-title mt-5">
              Compreender,
              <br />
              acolher, <span>apoiar.</span>
            </h1>

            <div className="orange-line" />

            <p className="hero-text">
              Informação de qualidade e recursos acessíveis para pessoas com
              dislexia, famílias, profissionais e todos que querem fazer a
              diferença.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/estudo/dislexia" className="btn btn-blue">
                Entenda a dislexia
                <ArrowRight size={19} />
              </Link>

              <button
                type="button"
                onClick={() => setNiaOpen(true)}
                className="btn btn-outline-orange"
              >
                Fale com a NIA
                <MessageCircle size={18} />
              </button>
            </div>
          </div>

          <div className="hero-art-wrap">
            <img
              src="/hero-illustration.png"
              alt="Ilustração de uma criança lendo com tranquilidade"
              className="hero-art"
            />
          </div>
        </div>
      </section>

      <section className="cream-section py-7 md:py-10">
        <div className="container grid gap-5 md:grid-cols-3">
          <article className="feature-card">
            <div className="feature-icon blue">
              <BookOpen size={34} />
            </div>
            <h2>Entenda a dislexia</h2>
            <p>
              Conheça a dislexia, suas características e diferentes formas de
              aprendizagem.
            </p>
            <Link href="/estudo/dislexia" className="card-link">
              Saiba mais <ArrowRight size={17} />
            </Link>
          </article>

          <article className="feature-card">
            <div className="feature-icon orange">
              <HeartHandshake size={34} />
            </div>
            <h2 className="orange-title">Para responsáveis</h2>
            <p>
              Estratégias e informações para famílias e pessoas que acompanham
              crianças e jovens.
            </p>
            <Link href="/responsaveis" className="card-link orange-link">
              Acessar <ArrowRight size={17} />
            </Link>
          </article>

          <article className="feature-card">
            <div className="feature-icon blue">
              <Brain size={34} />
            </div>
            <h2>Para profissionais</h2>
            <p>
              Materiais e caminhos para profissionais que trabalham com
              aprendizagem.
            </p>
            <Link href="/profissionais#gerador" className="card-link">
              Acessar <ArrowRight size={17} />
            </Link>
          </article>
        </div>
      </section>

      <section className="about-section">
        <div className="container grid items-center gap-10 md:grid-cols-[1fr_.9fr]">
          <div>
            <p className="eyebrow">Conhecimento para compreender</p>
            <h2 className="section-title mt-4">Sobre a dislexia</h2>
            <div className="orange-line" />
            <p className="section-text">
              A dislexia é uma variação de aprendizagem que pode afetar
              habilidades de leitura, escrita e soletração. Com informação,
              acolhimento e estratégias adequadas, é possível aprender e se
              desenvolver de muitas maneiras.
            </p>
            <Link href="/estudo/dislexia" className="btn btn-blue mt-7">
              Saiba mais sobre a dislexia
              <ArrowRight size={19} />
            </Link>
          </div>

          <div className="about-art-wrap">
            <img
              src="/section-illustration.png"
              alt=""
              className="about-art"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section id="nia" className="nia-section">
        <div className="container grid items-center gap-10 md:grid-cols-[.8fr_1.2fr]">
          <div className="text-white">
            <p className="eyebrow text-[#BAD8E8]">NIA · Núcleo de Inteligência e Apoio</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Transforme dúvidas em caminhos possíveis.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">
              Uma ferramenta de apoio educativo para dúvidas sobre
              aprendizagem, leitura, estudo e estratégias de apoio.
            </p>
            <button
              type="button"
              onClick={() => setNiaOpen(true)}
              className="btn btn-orange mt-7"
            >
              Conversar com a NIA
              <MessageCircle size={18} />
            </button>
          </div>

          <div className="nia-preview">
            <div className="nia-preview-head">
              <div className="nia-avatar">N</div>
              <div>
                <strong>NIA</strong>
                <span>Apoio educativo</span>
              </div>
            </div>

            <div className="nia-bubble user">
              Meu filho fica frustrado quando precisa ler. Como posso ajudar?
            </div>

            <div className="nia-bubble">
              Podemos pensar em pequenas etapas, pausas e estratégias que
              tornem a atividade mais previsível e confortável.
            </div>

            <button
              type="button"
              onClick={() => setNiaOpen(true)}
              className="nia-preview-button"
            >
              Fazer uma pergunta <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container grid gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <img src="/logo.png" alt="DysHelp" className="h-[64px] w-auto" />
            <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
              Compreender. Acolher. Apoiar. Informação de qualidade e recursos
              acessíveis sobre dislexia.
            </p>
          </div>

          <div>
            <h2 className="footer-title">Explorar</h2>
            <div className="footer-links">
              <Link href="/estudo/dislexia">Entenda a dislexia</Link>
              <Link href="/famosos">Famosos</Link>
              <Link href="/biblioteca">Biblioteca</Link>
              <Link href="/ajuda">Ajuda</Link>
            </div>
          </div>

          <div>
            <h2 className="footer-title">Apoio</h2>
            <div className="footer-links">
              <Link href="/profissionais#gerador">Gerador de Atividades</Link>
              <button type="button" onClick={() => setNiaOpen(true)}>
                NIA
              </button>
              <Link href="/sobre">Sobre</Link>
            </div>
          </div>
        </div>

        <div className="container mt-10 border-t border-white/15 pt-6 text-sm text-white/60">
          © 2026 DysHelp — Conteúdo educativo.
        </div>
      </footer>

      <AccessibilityPanel
        open={accessibilityOpen}
        onClose={() => setAccessibilityOpen(false)}
      />

      <NiaModal open={niaOpen} onClose={() => setNiaOpen(false)} />
    </main>
  );
}
