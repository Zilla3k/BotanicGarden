import { Navbar } from '../components/Navbar';
import { CardServices } from '../components/CardServices';
import { ServiceFlow } from '../components/ServiceFlow';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';

export function Pools() {
  return (
    <>
      <Navbar />

      <section className="flex flex-col md:flex-row items-center justify-around mt-20 mx-4 md:mx-20 lg:mx-40 xl:mx-60">
        <div className="flex flex-col items-center text-center">
          <span>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-greendark">
              “Sua Piscina Sujou?
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-greenhard">
                Nós Cuidamos Disso.”
              </span>
            </p>
          </span>
          <div>
            <p className="text-base mt-6 md:mt-10 max-w-lg text-center text-greenhard">
              Cuidar da sua piscina nunca foi tão fácil com os serviços
              especializados da Bela Flora. Realizamos a manutenção e correção
              de problemas, garantindo água limpa, cristalina e segura para sua
              família e amigos.
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
            title="Correção"
            checklist={[
              'Ajuste do pH fora dos limites recomendados',
              'Correção da alcalinidade total para estabilizar o pH',
              'Tratamento para eliminar água esverdeada',
              'Floculação para decantar partículas em suspensão',
              'Aumento do cloro em caso de níveis insuficientes',
              'Tratamento de choque para eliminar contaminações',
              'Eliminação de espuma causada por excesso de produtos químicos',
              'Aplicação de clarificante para melhorar a transparência da água',
              'Solução de problemas de turbidez persistente',
              'Remoção de óleo ou gordura da superfície',
              'Combate ao crescimento de algas resistentes',
            ]}
          />
          <CardServices
            title="Manutenção"
            checklist={[
              'Peneirar a superfície para remover folhas e detritos',
              'Aspiração de sujeiras no fundo da piscina',
              'Escovação das paredes e bordas para evitar algas',
              'Controle e ajuste do pH',
              'Controle e ajuste da alcalinidade',
              'Controle e ajuste do cloro',
              'Retirada de folhas e sujeiras do pré-filtro da bomba',
              'Checagem visual diária da cor e transparência da água',
              'Inspecionar a presença de algas ou limo',
            ]}
          />
          <CardServices
            title="Casa de Máquinas"
            checklist={[
              'Inspeção geral das bombas',
              'Lubrificação de componentes do motor',
              'Limpeza e inspeção do pré-filtro da bomba',
              'Troca da areia do filtro',
              'Substituição ou manutenção de válvulas desgastadas',
              'Verificação de vazamentos em tubulações ou conexões',
              'Checagem e substituição de O-rings e juntas',
              'Limpeza ou substituição do elemento filtrante do filtro de cartucho',
              'Teste de desempenho do motor elétrico',
              'Reparo ou substituição de aquecedores ou trocadores de calor',
              'Inspeção de cabos e conexões elétricas',
              'Remoção de resíduos acumulados dentro da casa de máquinas',
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
