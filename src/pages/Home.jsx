import {
  ActivitiesSectionLeft,
  ActivitiesSectionRight,
} from '../components/ActivitiesSectionLeft';
import { Gallery } from '../components/Gallery';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
// Importações das imagens
import homeBanner from './assets/banner.svg'; // Verifique o caminho e o nome do arquivo
import homePool from './assets/pool.svg'; // Verifique o caminho e o nome do arquivo
import homeGarden from './assets/garden.svg'; // Verifique o caminho e o nome do arquivo
import homePanel from './assets/panel.svg'; // Verifique o caminho e o nome do arquivo

export function Home() {
  return (
    <>
      <Navbar />

      <section className="flex flex-col lg:flex-row items-center justify-around mt-20 lg:mt-20 mx-4 lg:mr-72 lg:ml-72">
        <div className="flex flex-col items-center text-center lg:text-left">
          <span>
            <p className="text-3xl lg:text-5xl font-bold font-mono text-greendark">
              “Você Relaxa, Nós
              <br />
              <span className="text-3xl lg:text-5xl font-bold font-mono text-greenhard lg:ml-5">
                Limpamos”
              </span>
            </p>
          </span>
          <div>
            <p className="text-sm lg:text-base mt-6 lg:mt-10 max-w-md text-center lg:text-left text-greenhard">
              A Bela Flora é uma empresa especializada em limpeza de piscinas,
              paisagismo, jardinagem e limpeza de painéis solares. Atuamos em
              toda a região de Ibirubá e regiões próximas em até 60km, com
              profissionais qualificados e equipamentos de última geração.
            </p>
          </div>
          <div className="mt-6 lg:mt-8">
            <button>
              <a
                href="/budget"
                className="bg-greenlight text-greenhard py-3 lg:py-4 px-6 lg:px-9 rounded-full hover:bg-greenmedium transition text-sm lg:text-base"
              >
                Faça um orçamento agora!
              </a>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[680px] h-[200px] lg:h-[360px] rounded-3xl mt-8 lg:mt-0">
          <img
            src={homeBanner}
            alt="Banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-between mt-10 lg:mt-20 mx-4 lg:mr-60 lg:ml-60">
        <h1 className="text-2xl lg:text-4xl font-bold font-mono text-black mb-10 lg:mb-20">
          Nossas Atividades
        </h1>

        <ActivitiesSectionLeft
          subtitle="Limpeza e Manutenção de Piscinas"
          description="Em piscinas que se tem o uso constante é necessário um acompanhamento frequente para garantir o bem-estar e saúde de todos. Temos uma equipe especializada em cuidar do controle de PH, cloro, alcalinidade, filtros e todo suporte técnico necessário para o bom funcionamento."
          imageSrc={homePool}
          link="pools"
        />
        <ActivitiesSectionRight
          subtitle="Paisagismo e Jardinagem"
          description="Em jardins que recebem cuidado constante, é essencial um acompanhamento regular para garantir a beleza e saúde das plantas. Contamos com uma equipe especializada no manejo de gramados, podas, adubação, controle de pragas e todo o suporte técnico necessário para um paisagismo impecável e duradouro."
          imageSrc={homeGarden}
          link="gardening"
        />
        <ActivitiesSectionLeft
          subtitle="Limpeza de Painéis Solares e Telhados"
          description="Para sistemas de energia solar e telhados que exigem manutenção regular, é crucial um acompanhamento técnico contínuo para garantir a eficiência e segurança. Nossa equipe é especializada na limpeza de painéis, inspeção das estruturas, verificação elétrica e todo o suporte necessário para o melhor desempenho do seu sistema e proteção do seu imóvel."
          imageSrc={homePanel}
          link="solarpanels"
        />
      </section>

      <section>
        <Gallery />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
