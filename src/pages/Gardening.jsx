import { CardServices } from '../components/CardServices';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { Navbar } from '../components/Navbar';
import { ServiceFlow } from '../components/ServiceFlow';

export function Gardening() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col md:flex-row items-center justify-around mt-20 mx-4 md:mx-20 lg:mx-40 xl:mx-60">
        <div className="flex flex-col items-center text-center">
          <span>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-greendark">
              “Seu Jardim Merece
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-greenhard">
                O Melhor Cuidado.”
              </span>
            </p>
          </span>
          <div>
            <p className="text-base mt-6 md:mt-10 max-w-lg text-center text-greenhard">
              Transforme seu jardim em um verdadeiro paraíso com os serviços de
              jardinagem e paisagismo da Bela Flora. Cuidamos do plantio, poda e
              manutenção, além de criar projetos personalizados que trazem
              beleza e harmonia ao seu espaço.
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
