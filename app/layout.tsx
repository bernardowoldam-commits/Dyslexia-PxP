"use client";

import {
  Accessibility,
  ArrowRight,
  BookOpen,
  Brain,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const paths: Array
  [string, string, React.ElementType, string]
> = [
  [
    "estudo/dislexia",
    "Entenda a dislexia",
    BookOpen,
    "Conheça a dislexia, suas características e diferentes formas de aprendizagem.",
  ],
  [
    "responsaveis",
    "Para responsáveis",
    HeartHandshake,
    "Estratégias e informações para famílias e pessoas que acompanham crianças e jovens.",
  ],
  [
    "profissionais",
    "Para profissionais",
    Brain,
    "Materiais e caminhos para profissionais que trabalham com aprendizagem.",
  ],
];

// mesma lista de navegação usada no cabeçalho global (app/layout.tsx)
const navLinks: Array<[string, string]> = [
  ["/", "Início"],
  ["/estudo/dislexia", "Dislexia"],
  ["/atividades", "Atividades"],
  ["/profissionais", "Profissionais"],
  ["/famosos", "Histórias"],
  ["/ajuda", "Ajuda"],
];

function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const [large, setLarge] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "large-text",
      large
    );

    document.documentElement.classLi
