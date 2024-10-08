import { useState } from "react";
import "./App.css";
import CardAboutMe from "./components/CardAboutMe";
import Title from "./components/Title";
import CardSkill from "./components/CardSkill";
import { Line } from "./components/Line";
import CardExperience from "./components/CardExperience";
import CardProject from "./components/CardProject";


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
import laravelIcon from './assets/icons/laravel.png'
import tailwindIcon from './assets/icons/tailwind.png'
import bootstrapIcon from './assets/icons/bootstrap.png'







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
          <li className="hover:bg-gray-200 py-1 px-2 rounded-md cursor-pointer"><a href="#experience">Experiências</a></li>
          <li className="hover:bg-gray-200 py-1 px-2 rounded-md cursor-pointer"><a href="#projects">Projetos</a></li>
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
            <CardSkill src={laravelIcon} text={"Laravel"} />
            <CardSkill src={figmaIcon} text={"Figma"} />
            <CardSkill src={githubIcon} text={"GitHub"} />
            <CardSkill src={tailwindIcon} text={"Tailwind"} />
            <CardSkill src={bootstrapIcon} text={"Bootstrap"} />

          </div>
        </section>

        <Line />

        <section id="experience">
          <Title text={"Experience"} />

          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <hr className="h-64 w-0.5 bg-[#986DFF] mb-8" />
			  <div className="px-2 py-2 rounded-full bg-[#986DFF]">
				<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
					<path className="fill-white" d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"/>
							</svg>
			  </div>
              <hr className="h-64  mt-8 w-0.5 bg-[#986DFF]" />
            </div>


            <div>
              <CardExperience
                cargo={"Web and Mobile Developer"}
                empresa={"WorkGeo (Remoto)"}
                data={"Junho de 2024 - hoje"}
                firstDescription={"Criação do site da empresa para divulgação"}
                secondDescription={"Desenvolvimento de aplicativo mobile em Kotlin, voltado para profissionais de campo no processo de geoprocessamento de dados. O aplicativo inclui integração com a API do Google Maps para facilitar a navegação e coleta de dados geográficos em tempo real. Além disso, foi implementada uma estrutura de banco de dados com controle de acesso, respeitando a hierarquia de usuários, garantindo segurança e eficiência na gestão dos dados coletados. "}
                thirdDescription={"Criação de pequenos projetos web para melhorar e facilitar o trabalho dos analistas de geoprocessamento"}
              />

              <CardExperience
                cargo={"Assistência Técnica"}
                empresa={"Info Brasil Express (Presencial)"}
                data={"Janeiro de 2024 - Junho de 2024 (6 meses)"}
                firstDescription={"Criação do site da empresa para divulgação"}
                secondDescription={"Manutenção de computadores e notebooks"}
                thirdDescription={"Atendimento e venda"}
              />
            </div>
          </div>

        </section>

        <section id="projects" className="mt-16">
          <Title text={"Projects"} />

          <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-4 mb-16">

            <CardProject title={"Lógus"} github={"https://github.com/smViana19/logus-app-react"} description={"Sistema web em React para projeto escolar feito em grupo. Focado na gestão de administradores da escola, professores e alunos, o sistema permite gerenciar notas, calcular médias e acompanhar o desempenho por meio de gráficos detalhados. Professores postam atividades e materiais, enquanto os alunos acessam o conteúdo e interagem diretamente com os professores. O app também oferece ferramentas para ajudar nos estudos, como o método pomodoro e uma agenda para organizar tarefas."} />

            <CardProject title={"Lógus - API REST"} github={"https://github.com/smViana19/API-REST-LOGUS"} description={"Sistema web em React para projeto escolar feito em grupo. Focado na gestão de administradores da escola, professores e alunos, o sistema permite gerenciar notas, calcular médias e acompanhar o desempenho por meio de gráficos detalhados. Professores postam atividades e materiais, enquanto os alunos acessam o conteúdo e interagem diretamente com os professores. O app também oferece ferramentas para ajudar nos estudos, como o método pomodoro e uma agenda para organizar tarefas."} />

            <CardProject
              link={"https://rock-paper-scissor-kappa-sage.vercel.app"}
              github={"https://github.com/sofiaparreira/rock-paper-scissor"}
              title={"Rock Paper or Scissor - Game"}
              description={"Projeto acadêmico em React: um jogo de Pedra, Papel ou Tesoura onde o jogador pode desafiar a máquina quantas vezes quiser. Com uma jogabilidade simples e divertida."}
            />

            <CardProject link={"https://books-api-theta.vercel.app"} github={"https://github.com/sofiaparreira/books-api"} title={"Books-API"} description={"Projeto acadêmico em React: uma lista de livros conectada a um JSON para estudar o uso da Fetch API. O projeto permite que os usuários acessem e visualizem informações sobre livros de maneira dinâmica."}
            />


            <CardProject link={"https://workgeo.com.br"} title={"WorkGeo - Site"} description={"Site desenvolvido em React para a empresa WorkGeo. O projeto foi criado com foco em oferecer uma experiência moderna e eficiente, com uma interface intuitiva e responsiva, destacando os serviços e soluções da empresa. "
            }
            />

            <CardProject 
              github={"https://github.com/sofiaparreira/AgendaCrud-Laravel"} 
              title={"Agenda - CRUD"} 
              description={"Projeto acadêmico: agenda para organização de projetos feito em Laravel. O objetivo do projeto foi aprender e estudar CRUD "
            }
            />

          <CardProject 
              link={"https://previsao-tempo-iota.vercel.app"} 
              github={"https://github.com/sofiaparreira/previsao-tempo"} 
              title={"Previsão do Tempo"} 
              description={"Projeto Acadêmico: Informe o nome da sua cidade, e o programa exibirá a temperatura atual em Celsius, além da previsão para os próximos dois dias."
            }
            />


            <CardProject title={"Aplicativo WorkGeo"} description={"Projeto Kotlin Em Andamento..."
            }
            />

          </div>



        </section>

        <Line />

		<p className="text-center text-gray-600 font-semibold mb-8">© 2024 Sofia Passos</p>


      </main>
    </div>
  );
}

export default App;
