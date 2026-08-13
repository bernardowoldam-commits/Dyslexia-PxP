"use client";

import {
  Accessibility,
  ArrowRight,
  BookOpen,
  Brain,
  HeartHandshake,
  Sparkles,
  Users,
} from "lucide-react";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[24px] border border-[#6997B8]/20 bg-[#F3EAD9]/95 shadow-lg backdrop-blur-xl">
          <div className="flex min-h-[76px] items-center justify-between px-5">

            <a
              href="/"
              className="flex items-center"
              aria-label="DysHelp"
            >
              <img
                src="/DISLEXIA (1).png"
                alt="DysHelp"
                width={150}
                height={70}
                className="h-14 w-auto object-contain"
              />
            </a>

            <nav className="hidden md:flex items-center gap-2">
              <a href="/" className="nav-link">
                Início
              </a>

              <a href="/estudo/dislexia" className="nav-link">
                Dislexia
              </a>

              <a href="/atividades" className="nav-link">
                Atividades
              </a>

              <a href="/profissionais" className="nav-link">
                Profissionais
              </a>

              <a href="/famosos" className="nav-link">
                Histórias
              </a>

              <a href="/ajuda" className="nav-link">
                Ajuda
              </a>
            </nav>

            <a
              href="/nia"
              className="rounded-full bg-[#6997B8] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#F3A05B]"
            >
              ✦ NIA
            </a>

          </div>
        </div>
      </div>
    </header>
  );
}


export default function Home() {

  return (
    <div className="min-h-screen">

      <Header />

      <div className="h-[105px]" />


      <main>


        {/* HERO */}

        <section className="hero-section">

          <div className="container grid gap-12 py-20 md:grid-cols-2 md:items-center">

            <div className="hero-copy">

              <p className="eyebrow">
                DysHelp
              </p>


              <h1 className="display-title mt-5">
                Compreender a aprendizagem é transformar possibilidades.
              </h1>


              <div className="orange-line" />


              <p className="hero-text">
                Uma plataforma criada para informar, acolher e conectar
                pessoas com dislexia, famílias, escolas e profissionais.
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



            <div className="feature-card">

              <Sparkles
                size={36}
                className="text-[#f3a05b]"
              />

              <h2>
                Aprender diferente não significa aprender menos.
              </h2>


              <p>
                Cada pessoa possui uma forma própria de interpretar,
                organizar e construir conhecimento.
              </p>


              <div className="mt-6 grid gap-3">

                <a
                  href="/nia"
                  className="card-link"
                >
                  Conhecer a NIA
                  <ArrowRight size={16}/>
                </a>


                <a
                  href="/ajuda"
                  className="card-link orange-link"
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

            <p className="eyebrow">
              Caminhos
            </p>


            <h2 className="section-title mt-3">
              Encontre o conteúdo certo para sua jornada.
            </h2>


            <div className="mt-10 grid gap-6 md:grid-cols-3">


              <Card
                icon={<BookOpen/>}
                title="Entenda a dislexia"
                text="Informações claras sobre características, desafios e diferentes formas de aprendizagem."
                href="/estudo/dislexia"
              />


              <Card
                icon={<HeartHandshake/>}
                title="Famílias e responsáveis"
                text="Estratégias para acompanhar, acolher e apoiar crianças e jovens."
                href="/responsaveis"
              />


              <Card
                icon={<Brain/>}
                title="Profissionais"
                text="Conteúdos para educadores e especialistas envolvidos na aprendizagem."
                href="/profissionais"
              />


            </div>


          </div>


        </section>




        {/* HISTÓRIAS */}

        <section className="cream-section py-20">

          <div className="container grid gap-8 md:grid-cols-2">


            <div>

              <p className="eyebrow">
                Histórias que inspiram
              </p>


              <h2 className="section-title mt-3">
                Pessoas conhecidas também percorreram caminhos diferentes.
              </h2>


              <p className="section-text">
                Conheça trajetórias públicas de pessoas que falaram sobre
                suas experiências com aprendizagem e dislexia.
              </p>


              <a
                href="/famosos"
                className="btn btn-orange mt-6"
              >
                Ver histórias
                <ArrowRight/>
              </a>


            </div>


            <div className="feature-card">

              <Users size={38}/>


              <h2>
                Tom Cruise
              </h2>


              <p>
                Uma história frequentemente associada à superação de
                dificuldades escolares e busca por estratégias próprias
                de aprendizagem.
              </p>


            </div>


          </div>


        </section>




        {/* ACESSIBILIDADE */}

        <section className="section">

          <div className="container">

            <div className="feature-card flex flex-col gap-5 md:flex-row md:items-center md:justify-between">


              <div>

                <p className="eyebrow">
                  Acessibilidade
                </p>


                <h2>
                  Personalize sua experiência.
                </h2>


                <p>
                  Ajuste leitura, contraste e movimento conforme sua necessidade.
                </p>


              </div>



              <button className="btn btn-blue">

                <Accessibility size={18}/>

                Acessibilidade

              </button>


            </div>


          </div>


        </section>


      </main>



      <footer className="footer">

        <div className="container">

          <h2 className="footer-title">
            DysHelp
          </h2>


          <p>
            Informação, acolhimento e apoio para uma aprendizagem mais inclusiva.
          </p>


        </div>

      </footer>


    </div>
  );
}



function Card({
  icon,
  title,
  text,
  href,
}:{
  icon:React.ReactNode;
  title:string;
  text:string;
  href:string;
}){

  return (

    <a
      href={href}
      className="feature-card"
    >

      <div className="feature-icon blue">
        {icon}
      </div>


      <h2>
        {title}
      </h2>


      <p>
        {text}
      </p>


      <span className="card-link">
        Explorar
        <ArrowRight size={16}/>
      </span>


    </a>

  );

}
