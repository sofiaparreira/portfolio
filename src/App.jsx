import { useState } from "react";
import "./App.css";
import CardAboutMe from "./components/CardAboutMe";
import Title from "./components/Title";
import CardSkill from "./components/CardSkill";

//ICONS SKILLS
import jsIcon from "./assets/icons/js.png";
import reactIcon from "./assets/icons/React.png";
import typescriptIcon from "./assets/icons/typescript.png";
import nodeIcon from "./assets/icons/node.png";
import swiftIcon from "./assets/icons/swift.png";
import kotlinIcon from "./assets/icons/kotlin.svg";
import sqlIcon from "./assets/icons/mysql.png";
import phpIcon from "./assets/icons/php.png";
import htmlIcon from "./assets/icons/html.png";
import cssIcon from "./assets/icons/css.png";
import figmaIcon from "./assets/icons/figma.png";
import githubIcon from "./assets/icons/github.png";
import nextIcon from "./assets/icons/next.png";
import { Line } from "./components/Line";
import CardExperience from "./components/CardExperience";
import CardProject from "./components/CardProject";




function App() {
  return (
    <div className="bg-gray-50">
      /* Componentizar a NAV */
      <nav className="py-4 fixed top-0 w-full bg-gray-50 ">
        <ul className="flex gap-4 justify-center items-center">
          <li className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded cursor-pointer group">
            <a href="#home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="15.75"
                viewBox="0 0 576 512"
                className="transition-all duration-300 fill-gray-400 group-hover:fill-white"
              >
                <path
                  d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
            </a>
          </li>

          <li className="hover:bg-gray-200 py-1 px-2 rounded-md cursor-pointer"><a href="#skills">Habilidades</a></li>
          <li className="hover:bg-gray-200 py-1 px-2 rounded-md cursor-pointer"><a href="">Experiências</a></li>
          <li className="hover:bg-gray-200 py-1 px-2 rounded-md cursor-pointer"><a href="">Projetos</a></li>
        </ul>
      </nav>
      <main className="xl:px-96 px-48">
        <section id="home" className="flex items-center justify-center h-screen">
          <CardAboutMe />
        </section>

        <Line />


        <section id="skills" className="mb-16">
          <Title text={"Skills"} />

          <div className="grid xl:grid-cols-5 grid-cols-4 gap-4 justify-center">
            <CardSkill src={htmlIcon} text={"HTML"} />
            <CardSkill src={cssIcon} text={"CSS"} />
            <CardSkill src={jsIcon} text={"JavaScript"} />
            <CardSkill src={reactIcon} text={"React JS"} />
            <CardSkill src={nextIcon} text={"Next JS"} />
            <CardSkill src={nodeIcon} text={"Node JS"} />
            <CardSkill src={typescriptIcon} text={"TypeScript"} />
            <CardSkill src={phpIcon} text={"PHP"} />
            <CardSkill src={sqlIcon} text={"MySql"} />
            <CardSkill src={typescriptIcon} text={"phpmyadmin"} />
            <CardSkill src={reactIcon} text={"React Native"} />
            <CardSkill src={swiftIcon} text={"Swift"} />
            <CardSkill src={kotlinIcon} text={"Kotlin"} />
            <CardSkill src={figmaIcon} text={"Laravel"} />

            <CardSkill src={figmaIcon} text={"Figma"} />
            <CardSkill src={githubIcon} text={"GitHub"} />
            <CardSkill src={figmaIcon} text={"Postman"} />
            <CardSkill src={figmaIcon} text={"Tailwind"} />
            <CardSkill src={figmaIcon} text={"Bootstrap"} />

          </div>
        </section>

        <Line />

        <section>
          <Title text={"Experience"} />

          <div className="flex gap-8">
            <div className="">
              <hr className="h-64 w-0.5 bg-[#986DFF] mb-16" />
              <hr className="h-64 w-0.5 bg-[#986DFF]" />
            </div>


            <div>
              <CardExperience
                cargo={"Web and Mobile Developer"}
                empresa={"WorkGeo (Remoto)"}
                data={"Junho de 2024 - hoje"}
                firstDescription={"Criação do site da empresa para divulgação"}
                secondDescription={"Desenvolvimento de aplicativo mobile em Kotlin, voltado para profissionais de campo no processo de geoprocessamento de dados. O aplicativo inclui integração com a API do Google Maps para facilitar a navegação e coleta de dados geográficos em tempo real. Além disso, foi implementada uma estrutura de banco de dados com controle de acesso, respeitando a hierarquia de usuários, garantindo segurança e eficiência na gestão dos dados coletados. "}
                thirdDescription={"Criacao de pequenos projetos web para melhorar e facilitar o trabalho dos analistas de geoprocessamento"}
              />

              <CardExperience
                cargo={"Assistência Técnica"}
                empresa={"Info Brasil Express (Presencial)"}
                data={"Janeiro de 2024 - Junho de 2024"}
                firstDescription={"Criação do site da empresa para divulgação"}
                secondDescription={"Desenvolvimento de aplicativo mobile em Kotlin, voltado para profissionais de campo no processo de geoprocessamento de dados. O aplicativo inclui integração com a API do Google Maps para facilitar a navegação e coleta de dados geográficos em tempo real. Além disso, foi implementada uma estrutura de banco de dados com controle de acesso, respeitando a hierarquia de usuários, garantindo segurança e eficiência na gestão dos dados coletados. "}
                thirdDescription={"Criacao de pequenos projetos web para melhorar e facilitar o trabalho dos analistas de geoprocessamento"}
              />
            </div>
          </div>

        </section>

        <section className="mt-16">
          <Title text={"Projects"} />

          <div className="grid grid-cols-2 gap-4 mb-16">

            <CardProject title={"Lógus"} github={"https://github.com/smViana19/logus-app-react"} description={"Sistema web em React para projeto escolar feito em grupo. Focado na gestão de administradores da escola, professores e alunos, o sistema permite gerenciar notas, calcular médias e acompanhar o desempenho por meio de gráficos detalhados. Professores postam atividades e materiais, enquanto os alunos acessam o conteúdo e interagem diretamente com os professores. O app também oferece ferramentas para ajudar nos estudos, como o método pomodoro e uma agenda para organizar tarefas."} />

            <CardProject title={"Lógus - API REST"} github={"https://github.com/smViana19/API-REST-LOGUS"} description={"Sistema web em React para projeto escolar feito em grupo. Focado na gestão de administradores da escola, professores e alunos, o sistema permite gerenciar notas, calcular médias e acompanhar o desempenho por meio de gráficos detalhados. Professores postam atividades e materiais, enquanto os alunos acessam o conteúdo e interagem diretamente com os professores. O app também oferece ferramentas para ajudar nos estudos, como o método pomodoro e uma agenda para organizar tarefas."} />
            
            <CardProject 
              link={"https://rock-paper-scissor-kappa-sage.vercel.app"} 
              github={"https://github.com/sofiaparreira/rock-paper-scissor"}  
              title={"Rock Paper or Scissor - Game"} 
              description={"Projeto acadêmico em React: um jogo de Pedra, Papel ou Tesoura onde o jogador pode desafiar a máquina quantas vezes quiser. Com uma jogabilidade simples e divertida."} 
            />

            <CardProject link={"https://books-api-theta.vercel.app"} github={"https://github.com/sofiaparreira/books-api"}  title={"Books-API"} description={"Projeto acadêmico em React: uma lista de livros conectada a um JSON para estudar o uso da Fetch API. O projeto permite que os usuários acessem e visualizem informações sobre livros de maneira dinâmica."}
            />


            <CardProject link={"https://workgeo.com.br"} title={"WorkGeo - Site"} description={"Site desenvolvido em React para a empresa WorkGeo. O projeto foi criado com foco em oferecer uma experiência moderna e eficiente, com uma interface intuitiva e responsiva, destacando os serviços e soluções da empresa. "
            }
            />


<CardProject title={"Aplicativo Workgeo"} description={"Projeto Kotlin Em Andamento..."
            }
            />

          </div>



        </section>

        <Line />


      </main>
    </div>
  );
}

export default App;
