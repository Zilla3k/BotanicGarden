import { CardServices } from '../../components/CardServices/CardServices';
import { Footer } from '../../components/Footer/Footer';
import { Gallery } from '../../components/Gallery/Gallery';
import { Navbar } from '../../components/Navbar/Navbar';
import { ServiceFlow } from '../../components/ServiceFlow/ServiceFlow';

export function Gardening() {
  return (
    <>
      <Navbar />
      <section className="flex items-center justify-around  mt-20 mr-72 ml-72">
        <div className="flex flex-col items-center">
          <span>
            <p className="text-5xl font-bold font-mono text-greendark">
              “Seu Jardim Merece
              <br />
              <p className="text-5xl font-bold font-mono text-greenhard ml-5">
                O Melhor Cuidado.”
              </p>
            </p>
          </span>
          <div>
            <p className="text-base mt-10 max-w-lg text-center text-greenhard">
              Transforme seu jardim em um verdadeiro paraíso com os serviços de
              jardinagem e paisagismo da Bela Flora. Cuidamos do plantio, poda e
              manutenção, além de criar projetos personalizados que trazem
              beleza e harmonia ao seu espaço.
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
            title="Jardinagem"
            checklist={[
              'Poda de árvores e arbustos para estimular o crescimento',
              'Remoção de ervas daninhas',
              'Adubação do solo com fertilizantes orgânicos ou químicos',
              'Irrigação regular das plantas',
              'Controle de pragas e doenças com defensivos naturais ou químicos',
              'Plantio de mudas e sementes',
              'Preparação e aeração do solo com ferramentas adequadas',
              'Limpeza de canteiros e áreas ao redor das plantas',
              'Monitoramento do nível de umidade do solo',
              'Manutenção de vasos e floreiras',
            ]}
          />
          <CardServices
            title="Paisagismo"
            checklist={[
              'Planejamento e criação de projetos paisagísticos personalizados',
              'Escolha de plantas adequadas ao clima e ao espaço',
              'Instalação de sistemas de irrigação automatizados',
              'Montagem de canteiros e jardins verticais',
              'Uso de pedras ornamentais para decoração',
              'Construção de caminhos e trilhas (pedras, madeira ou concreto)',
              'Implementação de iluminação decorativa em jardins',
              'Seleção e posicionamento estratégico de árvores para sombreamento',
              'Uso de grama sintética ou natural',
              'Integração de decks ou pergolados no paisagismo',
              'Delimitação de espaços com cercas vivas ou arbustos',
              'Utilização de elementos decorativos (vasos, esculturas, bancos)',
              'Criação de áreas de convivência com mesas e cadeiras ao ar livre',
              'Plantio de flores e plantas ornamentais em padrões geométricos ou artísticos',
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
