"use client";

import {
  Accessibility,
  ArrowRight,
  BookOpen,
  Brain,
  HeartHandshake,
  Menu,
  Sparkles,
  X,
  ShieldCheck,
  Users,
} from "lucide-react";

import { useEffect, useState } from "react";


const paths = [
  [
    "estudo/dislexia",
    "Entenda a dislexia",
    BookOpen,
    "Informações claras sobre características, desafios e diferentes formas de aprendizagem.",
  ],
  [
    "responsaveis",
    "Famílias e responsáveis",
    HeartHandshake,
    "Estratégias para acompanhar, acolher e apoiar crianças e jovens.",
  ],
  [
    "profissionais",
    "Profissionais",
    Brain,
    "Conteúdos para educadores e especialistas envolvidos na aprendizagem.",
  ],
];


function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Início", "/"],
    ["Dislexia", "/estudo/dislexia"],
    ["Atividades", "/atividades"],
    ["Profissionais", "/profissionais"],
    ["Histórias", "/famosos"],
    ["Ajuda", "/ajuda"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl">

        <div
          className="
          rounded-[28px]
          border border-[#6997B8]/20
          bg-[#F3EAD9]/95
          shadow-lg
          backdrop-blur-xl
          "
        >

          <div
            className="
            flex min-h-[82px]
            items-center
            justify-between
            gap-5
            px-5
            "
          >

            {/* LOGO */}
            <a
              href="/"
              aria-label="DysHelp"
              className="flex items-center shrink-0"
            >
              <img
                src="/DISLEXIA (1).png"
                alt="DysHelp"
                className="
                h-14
                w-auto
                object-contain
                "
              />
            </a>


            {/* MENU DESKTOP */}
            <nav
              className="
              hidden
              md:flex
              items-center
              gap-3
              "
            >

              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="
                  rounded-full
                  border
                  border-[#6997B8]/20
                  bg-white/70
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-[#234F73]
                  shadow-sm
                  transition-all
                  hover:-translate-y-1
                  hover:bg-[#BAD8E8]
                  hover:shadow-md
                  "
                >
                  {label}
                </a>
              ))}

            </nav>


            {/* NIA */}
            <a
              href="/nia"
              className="
              rounded-full
              bg-[#6997B8]
              px-6
              py-3
              text-sm
              font-extrabold
              text-white
              shadow-md
              transition
              hover:bg-[#F3A05B]
              "
            >
              ✦ NIA
            </a>


            {/* MOBILE */}
            <button
              className="
              rounded-xl
              p-2
              md:hidden
              "
              onClick={() => setOpen(!open)}
              aria-label="Abrir menu"
            >
              {open ? <X size={26}/> : <Menu size={26}/>}
            </button>

          </div>


          {open && (
            <nav
              className="
              border-t
              px-5
              py-5
              md:hidden
              "
            >

              <div className="grid gap-3">

                {links.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="
                    rounded-2xl
                    border
                    border-[#6997B8]/20
                    bg-white
                    px-5
                    py-3
                    font-bold
                    text-[#234F73]
                    "
                  >
                    {label}
                  </a>
                ))}

              </div>

            </nav>
          )}

        </div>

      </div>
    </header>
  );
}



function AccessibilityPanel(){

  const [open,setOpen]=useState(false);

  const [large,setLarge]=useState(false);
  const [contrast,setContrast]=useState(false);
  const [motion,setMotion]=useState(false);


  useEffect(()=>{

    document.documentElement.classList.toggle(
      "large-text",
      large
    );

    document.documentElement.classList.toggle(
      "high-contrast",
      contrast
    );

    document.documentElement.classList.toggle(
      "reduce-motion",
      motion
    );


  },[large,contrast,motion]);



  return (

    <>
      <button
        className="
        btn
        btn-blue
        "
        onClick={()=>setOpen(true)}
      >

        <Accessibility size={18}/>

        Acessibilidade

      </button>



      {open && (

        <div
          className="
          fixed
          inset-0
          z-[90]
          bg-black/30
          p-4
          "
          onClick={()=>setOpen(false)}
        >

          <aside
            className="
            ml-auto
            mt-16
            w-full
            max-w-sm
            rounded-3xl
            bg-white
            p-6
            shadow-2xl
            "
            onClick={(e)=>e.stopPropagation()}
          >

            <div className="flex justify-between">

              <div>

                <p className="eyebrow">
                  Acessibilidade
                </p>

                <h2 className="
                text-2xl
                font-bold
                text-[#234F73]
                ">
                  Ajuste sua leitura
                </h2>

              </div>


              <button onClick={()=>setOpen(false)}>
                <X/>
              </button>

            </div>


            <div className="mt-6 grid gap-3">


              <button
                className="btn btn-soft justify-between"
                onClick={()=>setLarge(!large)}
              >
                Texto maior
                <span>
                  {large?"Ativo":"Inativo"}
                </span>
              </button>


              <button
                className="btn btn-soft justify-between"
                onClick={()=>setContrast(!contrast)}
              >
                Alto contraste
                <span>
                  {contrast?"Ativo":"Inativo"}
                </span>
              </button>


              <button
                className="btn btn-soft justify-between"
                onClick={()=>setMotion(!motion)}
              >
                Reduzir animações
                <span>
                  {motion?"Ativo":"Inativo"}
                </span>
              </button>


              <button
                className="btn btn-orange"
                onClick={()=>{
                  setLarge(false);
                  setContrast(false);
                  setMotion(false);
                }}
              >
                Restaurar padrão
              </button>


            </div>


          </aside>


        </div>

      )}

    </>
  );
}



export default function Home(){


const supportCards = [

[
Brain,
"NIA",
"Uma camada de inteligência artificial educativa criada para apoiar aprendizagem.",
"/nia",
"Conhecer a NIA"
],

[
ShieldCheck,
"Ajuda especializada",
"Links para organizações, registros profissionais e diretórios.",
"/ajuda",
"Encontrar apoio"
],

[
BookOpen,
"Biblioteca",
"Textos educativos para consultar quando precisar.",
"/biblioteca",
"Abrir biblioteca"
]

];

return (
<div className="min-h-screen bg-white">

<Header/>


<main>

<section className="hero-section">

<div className="
container
grid
gap-12
py-20
md:grid-cols-2
md:items-center
">


<div className="hero-copy">

<p className="eyebrow">
DysHelp
</p>


<h1 className="
display-title
mt-5
">

Compreender a aprendizagem é transformar possibilidades.

</h1>


<div className="orange-line"/>


<p className="hero-text">

Uma plataforma criada para informar, acolher e conectar pessoas com dislexia, famílias, escolas e profissionais.

</p>


<div className="mt-8 flex flex-wrap gap-4">


<a
href="/estudo/dislexia"
className="btn btn-blue"
>

Explorar dislexia

<ArrowRight size={18}/>

</a>


<a
href="/famosos"
className="btn btn-outline-orange"
>

Histórias reais

</a>


</div>


</div>
  {/* CONTINUAÇÃO DO HERO */}

<div className="feature-card">

<Sparkles
size={38}
className="text-[#f3a05b]"
/>


<h2 className="
mt-6
text-3xl
font-bold
text-[#234F73]
">

Aprender diferente não significa aprender menos.

</h2>


<p className="
mt-4
leading-8
text-[#243B53]
">

Cada pessoa possui uma forma própria de interpretar,
organizar e construir conhecimento.

</p>


<div className="mt-7 grid gap-4">


<a
href="/nia"
className="
card-link
"
>

Conhecer a NIA

<ArrowRight size={16}/>

</a>


<a
href="/ajuda"
className="
card-link
orange-link
"
>

Encontrar apoio

<ArrowRight size={16}/>

</a>


</div>


</div>


</div>

</section>



{/* CAMINHOS */}


<section className="section">


<div className="container">


<div className="max-w-3xl">


<p className="eyebrow">

Caminhos

</p>


<h2 className="
section-title
mt-3
">

Encontre o conteúdo certo para sua jornada.

</h2>


<p className="
section-text
">

Escolha informações, estratégias e recursos
pensados para diferentes necessidades.

</p>


</div>



<div className="
mt-10
grid
gap-6
md:grid-cols-3
">


{paths.map(
([href,title,Icon,text])=>(
<a

key={href}

href={`/${href}`}

className="
feature-card
group
"

>


<div className="
feature-icon
blue
">

<Icon size={28}/>

</div>



<h2>

{title}

</h2>



<p>

{text}

</p>



<span
className="
card-link
"
>

Explorar

<ArrowRight size={16}/>

</span>


</a>
)

)}


</div>



</div>


</section>





{/* ESTUDO DA DISLEXIA */}


<section
className="
cream-section
py-20
">


<div
className="
container
grid
gap-10
md:grid-cols-2
md:items-center
">


<div>


<p className="eyebrow">

Estudo em destaque

</p>


<h2
className="
section-title
mt-3
">

Entendendo a dislexia

</h2>



<p className="section-text">

Um ponto de partida para compreender,
apoiar e respeitar diferentes formas
de aprendizagem.

</p>



<a

href="/estudo/dislexia"

className="
btn
btn-blue
mt-7
"

>

Abrir estudo completo

<ArrowRight size={18}/>

</a>



</div>



<div className="
grid
gap-5
sm:grid-cols-2
">


{[

[
"Compreender",
"Conheça diferentes formas de aprender."
],

[
"Apoiar",
"Transforme informação em estratégias."
],

[
"Respeitar",
"Dificuldade não define inteligência."
],

[
"Encaminhar",
"Saiba quando procurar ajuda."
]

].map(([title,text])=>(


<div

key={title}

className="
feature-card
"

>


<h3 className="
text-2xl
font-bold
text-[#234F73]
">

{title}

</h3>


<p className="
mt-3
leading-7
">

{text}

</p>


</div>


))}


</div>


</div>


</section>





{/* HISTÓRIAS */}



<section className="section">


<div className="container">


<div className="
flex
flex-col
gap-6
md:flex-row
md:items-end
md:justify-between
">


<div>


<p className="eyebrow">

Histórias que inspiram

</p>


<h2 className="
section-title
mt-3
">

Pessoas conhecidas também percorreram caminhos diferentes.

</h2>


<p className="section-text">

Conheça trajetórias públicas de pessoas que
falaram sobre suas experiências com aprendizagem
e dislexia.

</p>


</div>


<a

href="/famosos"

className="
btn
btn-orange
"

>

Ver histórias

<ArrowRight size={18}/>

</a>


</div>





<div
className="
mt-10
feature-card
overflow-hidden
"

>


<div
className="
grid
gap-8
md:grid-cols-[300px_1fr]
md:items-center
">


{/* IMAGEM TOM CRUISE */}


<div>


<img

src="/tom-cruise.jpg"

alt="Tom Cruise"

className="
h-[320px]
w-full
rounded-3xl
object-cover
"

onError={(e)=>{

e.currentTarget.src="/tom-cruise-placeholder.jpg"

}}

/>


</div>




<div>


<p className="eyebrow">

Cinema · história pública

</p>



<h3
className="
mt-3
text-4xl
font-bold
text-[#234F73]
">

Tom Cruise

</h3>



<p
className="
mt-4
leading-8
text-[#243B53]
">

Uma trajetória frequentemente associada
a dificuldades escolares e à busca por
estratégias próprias de aprendizagem.

A história é apresentada como inspiração,
sem transformar sucesso em comparação.

</p>



<a

href="/famosos"

className="
card-link
orange-link
mt-6
"

>

Conhecer histórias

<ArrowRight size={16}/>

</a>



</div>


</div>


</div>


</div>


</section>
  {/* RECURSOS */}

<section className="section bg-[#F8FAFC]">

<div className="container">


<div className="
grid
gap-6
md:grid-cols-3
">


{supportCards.map(
([Icon,title,description,href,label])=>(


<div

key={title}

className="
feature-card
"


>


<Icon
size={32}
className="text-[#234F73]"
/>



<h3
className="
mt-5
text-2xl
font-bold
text-[#234F73]
"
>

{title}

</h3>



<p
className="
mt-3
leading-7
text-[#243B53]
"
>

{description}

</p>



<a

href={href}

className="
card-link
mt-6
"

>

{label}

<ArrowRight size={16}/>

</a>



</div>



)


)}


</div>


</div>


</section>





{/* ACESSIBILIDADE */}



<section className="section">


<div className="container">


<div
className="
feature-card
flex
flex-col
gap-6
p-8
md:flex-row
md:items-center
md:justify-between
"


>


<div>


<p className="eyebrow">

Acessibilidade

</p>



<h2
className="
mt-3
text-3xl
font-bold
text-[#234F73]
"

>

Personalize sua experiência.

</h2>



<p
className="
mt-3
leading-7
"

>

Ajuste leitura, contraste e movimento
conforme sua necessidade.

</p>


</div>



<AccessibilityPanel/>


</div>


</div>


</section>


</main>






{/* FOOTER */}


<footer
className="
footer
"


>


<div className="container">


<div
className="
grid
gap-10
md:grid-cols-3
"


>


<div>


<h2
className="
footer-title
"

>

DysHelp

</h2>



<p
className="
mt-3
leading-7
text-white/80
"

>

Informação, acolhimento e apoio
para uma aprendizagem mais inclusiva.

</p>


</div>




<div>


<h3
className="
font-bold
"

>

Explorar

</h3>



<div
className="
footer-links
"

>

<a href="/estudo/dislexia">
Dislexia
</a>

<a href="/atividades">
Atividades
</a>

<a href="/famosos">
Histórias
</a>

<a href="/biblioteca">
Biblioteca
</a>


</div>


</div>




<div>


<h3
className="
font-bold
"

>

Apoio

</h3>



<div
className="
footer-links
"

>


<a href="/ajuda">
Ajuda especializada
</a>


<a href="/responsaveis">
Responsáveis
</a>


<a href="/profissionais">
Profissionais
</a>


<a href="/sobre">
Sobre nós
</a>



</div>


</div>


</div>




<div
className="
mt-10
border-t
border-white/20
pt-6
text-sm
text-white/60
"

>

© 2026 DysHelp. Conteúdo educativo e inclusivo.

</div>



</div>


</footer>


</div>


);

}
