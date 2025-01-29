import { CardServices } from '../components/CardServices';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { Navbar } from '../components/Navbar';
import { ServiceFlow } from '../components/ServiceFlow';

export function SolarPanels() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col md:flex-row items-center justify-around mt-20 mx-4 md:mx-20 lg:mx-40 xl:mx-60">
        <div className="flex flex-col items-center text-center">
          <span>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-greendark">
              “Menos Sujeira,
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-greenhard">
                Mais Eficiência.”
              </span>
            </p>
          </span>
          <div>
            <p className="text-base mt-6 md:mt-10 max-w-lg text-center text-greenhard">
              A Bela Flora cuida do seu sistema de energia solar, muros e
              telhados com eficiência e qualidade. Realizamos limpeza,
              manutenção e inspeção para garantir o máximo desempenho e
              durabilidade, ajudando você a economizar e cuidar do meio
              ambiente.
            </p>
          </div>
          <div className="mt-6 md:mt-8">
            <button>
              <a
                href="/budget"
                className="bg-greenlight text-greenhard py-3 px-6 md:py-4 md:px-9 rounded-full hover:bg-greenmedium transition"
              >
                Faça um orçamento agora!
              </a>
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-between mt-20 mx-4 md:mx-20 lg:mx-40 xl:mx-60">
        <h1 className="text-3xl md:text-4xl font-bold font-mono text-black mb-10 md:mb-20">
          Nossos Serviços
        </h1>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
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

      <section className="flex flex-col items-center justify-between mt-20 mx-4 md:mx-20 lg:mx-40 xl:mx-60">
        <h1 className="text-3xl md:text-4xl font-bold font-mono text-black mb-10 md:mb-20">
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
