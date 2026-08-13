"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  HeartHandshake,
  Sparkles,
  Users,
  Accessibility,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container grid gap-12 py-20 md:grid-cols-2 md:items-center">
          <div className="hero-copy">
            <p className="eyebrow">DysHelp</p>
            <h1 className="display-title mt-5">
              Compreender a aprendizagem é transformar possibilidades.
            </h1>
            <div className="orange-line" />
            <p className="hero-text">
              Uma plataforma criada para informar, acolher e conectar pessoas com
              dislexia, famílias, escolas e profissionais.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/estudo/dislexia" className="btn btn-blue">
                Explorar dislexia
                <ArrowRight size={18} />
              </Link>
              <Link href="/famosos" className="btn btn-outline-orange">
                Histórias reais
              </Link>
            </div>
          </div>

          <div className="feature-card">
            <Sparkles className="text-[#f3a05b]" size={36} />
            <h2>Aprender diferente não significa aprender menos.</h2>
            <p>
              Cada pessoa possui uma forma própria de interpretar, organizar e
              construir conhecimento.
            </p>
            <div className="mt-6 grid gap-3">
              <Link href="/nia" className="card-link">
                Conhecer a NIA
                <ArrowRight size={16} />
              </Link>
              <Link href="/ajuda" className="card-link orange-link">
                Encontrar apoio
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Caminhos */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Caminhos</p>
          <h2 className="section-title mt-3">
            Encontre o conteúdo certo para sua jornada.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link href="/estudo/dislexia" className="feature-card">
              <div className="feature-icon blue">
                <BookOpen size={24} />
              </div>
              <h2>Entenda a dislexia</h2>
              <p>
                Informações claras sobre características, desafios e diferentes
                formas de aprendizagem.
              </p>
              <span className="card-link">
                Explorar <ArrowRight size={16} />
              </span>
            </Link>

            <Link href="/responsaveis" className="feature-card">
              <div className="feature-icon blue">
                <HeartHandshake size={24} />
              </div>
              <h2>Famílias e responsáveis</h2>
              <p>
                Estratégias para acompanhar, acolher e apoiar crianças e jovens.
              </p>
              <span className="card-link">
                Explorar <ArrowRight size={16} />
              </span>
            </Link>

            <Link href="/profissionais" className="feature-card">
              <div className="feature-icon blue">
                <Brain size={24} />
              </div>
              <h2>Profissionais</h2>
              <p>
                Conteúdos para educadores e especialistas envolvidos na
                aprendizagem.
              </p>
              <span className="card-link">
                Explorar <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Histórias */}
      <section className="cream-section py-20">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow">Histórias que inspiram</p>
            <h2 className="section-title mt-3">
              Pessoas conhecidas também percorreram caminhos diferentes.
            </h2>
            <p className="section-text">
              Conheça trajetórias públicas de pessoas que falaram sobre suas
              experiências com aprendizagem e dislexia.
            </p>
            <Link href="/famosos" className="btn btn-orange mt-6">
              Ver histórias
              <ArrowRight size={24} />
            </Link>
          </div>

          <div className="feature-card">
            <Users size={38} />
            <h2>Tom Cruise</h2>
            <p>
              Uma história frequentemente associada à superação de dificuldades
              escolares e busca por estratégias próprias de aprendizagem.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Acessibilidade */}
      <section className="section">
        <div className="container">
          <div className="feature-card flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow">Acessibilidade</p>
              <h2>Personalize sua experiência.</h2>
              <p>Ajuste leitura, contraste e movimento conforme sua necessidade.</p>
            </div>
            <button className="btn btn-blue" type="button">
              <Accessibility size={18} />
              Acessibilidade
            </button>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <div className="container">
          <h2 className="footer-title">DysHelp</h2>
          <p className="mt-3">
            Informação, acolhimento e apoio para uma aprendizagem mais inclusiva.
          </p>
        </div>
      </footer>
    </main>
  );
}
