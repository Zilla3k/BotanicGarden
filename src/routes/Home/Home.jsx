import {
  ActivitiesSectionLeft,
  ActivitiesSectionRight,
} from '../../components/Activities/ActivitiesSectionLeft';
import { Gallery } from '../../components/Gallery/Gallery';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';

export function Home() {
  return (
    <>
      <Navbar />

      <section className="flex items-center justify-around  mt-20 mr-72 ml-72">
        <div className="flex flex-col items-center">
          <span>
            <p className="text-5xl font-bold font-mono text-greendark">
              “Você Relaxa, Nós
              <br />
              <span className="text-5xl font-bold font-mono text-greenhard ml-5">
                Limpamos”
              </span>
            </p>
          </span>
          <div>
            <p className="text-base mt-10 max-w-md text-center text-greenhard">
              A Bela Flora é uma empresa especializada em limpeza de piscinas,
              paisagismo, jardinagem e limpeza de painéis solares. Atuamos em
              toda a região de Ibirubá e regiões proximas em até 60km, com
              profissionais qualificados e equipamentos de última geração.
            </p>
          </div>
          <div className="mt-8">
            <button>
              <a
                href="/budget"
                className="bg-greenlight text-greenhard py-4 px-9 rounded-full  hover:bg-greenmedium transition"
              >
                Faça um orçamento agora!
              </a>
            </button>
          </div>
        </div>
        <div className="w-[680px] h-[360px] rounded-3xl bg-home-banner bg-right"></div>
      </section>

      <section className="flex flex-col items-center justify-between mt-20 mr-60 ml-60">
        <h1 className="text-4xl font-bold font-mono text-black mb-20">
          Nossas Atividades
        </h1>

        <ActivitiesSectionLeft
          subtitle="Limpeza e Manutenção de Piscinas"
          description="Em piscinas que se tem o uso constante é necessário um acompanhamento frequente para garantir o bem-estar e saúde de todos. Temos uma equipe especializada em cuidar do controle de PH, cloro, alcalinidade, filtros e todo suporte técnico necessário para o bom funcionamento."
          imageClasses="bg-home-pool"
          link="pools"
        />
        <ActivitiesSectionRight
          subtitle="Paisagismo e Jardinagem"
          description="Em jardins que recebem cuidado constante, é essencial um acompanhamento regular para garantir a beleza e saúde das plantas. Contamos com uma equipe especializada no manejo de gramados, podas, adubação, controle de pragas e todo o suporte técnico necessário para um paisagismo impecável e duradouro."
          imageClasses="bg-home-garden"
          link="gardening"
        />
        <ActivitiesSectionLeft
          subtitle="Limpeza de Painéis Solares e Telhados"
          description="Para sistemas de energia solar e telhados que exigem manutenção regular, é crucial um acompanhamento técnico contínuo para garantir a eficiência e segurança. Nossa equipe é especializada na limpeza de painéis, inspeção das estruturas, verificação elétrica e todo o suporte necessário para o melhor desempenho do seu sistema e proteção do seu imóvel."
          imageClasses="bg-home-panel"
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
