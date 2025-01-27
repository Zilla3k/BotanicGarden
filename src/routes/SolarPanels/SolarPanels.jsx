import { CardServices } from '../../components/CardServices/CardServices';
import { Footer } from '../../components/Footer/Footer';
import { Gallery } from '../../components/Gallery/Gallery';
import { Navbar } from '../../components/Navbar/Navbar';
import { ServiceFlow } from '../../components/ServiceFlow/ServiceFlow';

export function SolarPanels() {
  return (
    <>
      <Navbar />
      <section className="flex items-center justify-around  mt-20 mr-72 ml-72">
        <div className="flex flex-col items-center">
          <span>
            <p className="text-5xl font-bold font-mono text-greendark">
              “Menos Sujeira,
              <br />
              <p className="text-5xl font-bold font-mono text-greenhard ml-5">
                Mais Eficiência.”
              </p>
            </p>
          </span>
          <div>
            <p className="text-base mt-10 max-w-lg text-center text-greenhard">
              A Bela Flora cuida do seu sistema de energia solar, muros e
              telhados com eficiência e qualidade. Realizamos limpeza,
              manutenção e inspeção para garantir o máximo desempenho e
              durabilidade, ajudando você a economizar e cuidar do meio
              ambiente.
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
        {/* <div className="w-[680px] h-[360px] rounded-3xl bg-home-banner bg-right"></div> */}
      </section>

      <section className="flex flex-col items-center justify-between mt-20 mr-60 ml-60">
        <h1 className="text-4xl font-bold font-mono text-black mb-20">
          Nossos Serviços
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <CardServices
            title="Placas Solares"
            checklist={[
              'Limpeza regular dos painéis solares para retirar poeira e sujeira',
              'Verificação da integridade das células fotovoltaicas',
              'Inspeção de cabos e conexões elétricas para identificar danos',
              'Manutenção dos inversores solares',
              'Verificação da estrutura de suporte para garantir estabilidade',
              'Ajuste da inclinação dos painéis, se necessário',
              'Monitoramento da eficiência energética do sistema',
              'Limpeza de detritos acumulados nos sistemas de ventilação dos inversores',
            ]}
          />
          <CardServices
            title="Telhados"
            checklist={[
              'Inspeção de telhas para identificar e substituir as quebradas ou desalinhadas',
              'Limpeza de calhas para evitar entupimentos',
              'Verificação da estrutura de madeira ou metálica de suporte',
              'Aplicação de impermeabilizantes nas telhas',
              'Inspeção de infiltrações ou vazamentos',
              'Substituição de parafusos ou pregos enferrujados',
              'Verificação e reforço das mantas térmicas ou impermeáveis',
              'Instalação de cumeeiras e rufos para proteção contra infiltrações',
              'Limpeza de musgos e fungos das telhas',
              'Pintura de telhas',
              'Instalação de para-raios no telhado',
            ]}
          />
          <CardServices
            title="Muros"
            checklist={[
              'Reparação de trincas e rachaduras no concreto ou alvenaria',
              'Aplicação de revestimentos impermeabilizantes',
              'Pintura ou repintura para manutenção estética',
              'Limpeza de sujeiras, manchas ou fungos acumulados',
              'Instalação de grades ou cercas sobre os muros para maior segurança',
              'Reforço estrutural de muros antigos ou frágeis',
              'Instalação de iluminação decorativa ou funcional nos muros',
              'Aplicação de textura ou revestimentos decorativos',
              'Captação e direcionamento de águas pluviais para evitar infiltrações',
              'Instalação de sistemas de drenagem ao longo da base do muro',
              'Substituição de partes danificadas ou deterioradas',
              'Colocação de cercas-vivas ou plantas trepadeiras para estética e proteção',
            ]}
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-between mt-20 mr-60 ml-60">
        <h1 className="text-4xl font-bold font-mono text-black mb-20">
          Como Contratar?
        </h1>

        <ServiceFlow />
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
