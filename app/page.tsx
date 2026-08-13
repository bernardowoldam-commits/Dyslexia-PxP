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
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const paths: Array<[string, string, React.ElementType, string]> = [
  [
    "/estudo/dislexia",
    "Entenda a dislexia",
    BookOpen,
    "Conheça a dislexia, suas características e diferentes formas de aprendizagem.",
  ],
  [
    "/responsaveis",
    "Para responsáveis",
    HeartHandshake,
    "Estratégias e informações para famílias e pessoas que acompanham crianças e jovens.",
  ],
  [
    "/profissionais",
    "Para profissionais",
    Brain,
    "Materiais e caminhos para profissionais que trabalham com aprendizagem.",
  ],
];

const supportCards: Array<[React.ElementType, string, string, string, string]> = [
  [
    Brain,
    "NIA",
    "Uma futura camada de inteligência artificial educativa, construída com limites claros.",
    "/nia",
    "Conhecer a NIA",
  ],
  [
    ShieldCheck,
    "Ajuda especializada",
    "Links para organizações, registros profissionais e diretórios de busca.",
    "/ajuda",
    "Encontrar apoio",
  ],
  [
    BookOpen,
    "Biblioteca",
    "Textos curtos para ler e consultar quando precisar.",
    "/biblioteca",
    "Abrir biblioteca",
  ],
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-[#234f73]"
        >
          DysHelp
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/estudo/dislexia" className="nav-link">
            Entenda a dislexia
          </Link>
          <Link href="/famosos" className="nav-link">
            Histórias inspiradoras
          </Link>
          <Link href="/biblioteca" className="nav-link">
            Biblioteca
          </Link>
          <Link href="/ajuda" className="nav-link">
            Ajuda
          </Link>
          <Link href="/nia" className="nav-link">
            NIA
          </Link>
          <Link href="/sobre" className="nav-link">
            Sobre
          </Link>
        </nav>

        <button
          className="icon-button md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          type="button"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="border-t bg-white px-6 py-5 md:hidden">
          <div className="container grid gap-4">
            <Link className="mobile-nav-link
