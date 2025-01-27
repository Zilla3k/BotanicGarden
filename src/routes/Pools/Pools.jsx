import { Navbar } from '../../components/Navbar/Navbar';
import { CardServices } from '../../components/CardServices/CardServices';
import { ServiceFlow } from '../../components/ServiceFlow/ServiceFlow';
import { Footer } from '../../components/Footer/Footer';
import { Gallery } from '../../components/Gallery/Gallery';

export function Pools() {
  return (
    <>
      <Navbar />

      <section className="flex items-center justify-around  mt-20 mr-72 ml-72">
        <div className="flex flex-col items-center">
          <span>
            <p className="text-5xl font-bold font-mono text-greendark">
              “Sua Piscina Sujo?
              <br />
              <p className="text-5xl font-bold font-mono text-greenhard ml-5">
                Nós Cuidamos Disso.”
              </p>
            </p>
          </span>
          <div>
            <p className="text-base mt-10 max-w-lg text-center text-greenhard">
              Cuidar da sua piscina nunca foi tão fácil com os serviços
              especializados da Bela Flora. Realizamos a manutenção e correção
              de problemas, garantindo água limpa, cristalina e segura para sua
              família e amigos.
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

{
  /* <div className="flex items-center justify-between">
          <div className="w-[400px] h-[500px]">
            <h2 className="text-2xl font-bold font-mono text-black mb-10 bg-whitecream">
              Limpeza e Manutenção de Piscinas
            </h2>
            <p className="text-base max-w-md text-center text-black">
              Em piscinas que se tem o uso constante é necessário um
              acompanhamento frequente para garantir o bem-estar e saúde de
              todos. Temos uma equipe especializada em cuidar do controle de PH,
              cloro, alcalinidade, filtros e todo suporte técnico necessário
              para o bom funcionamento.
            </p>
          </div>
          <div className="w-[400px] h-[500px] bg-whitecream ">
            <h2 className="text-2xl font-bold font-mono text-black mb-10">
              Paisagismo e Jardinagem
            </h2>
            <p className="text-base max-w-md text-center text-black">
              Em jardins que recebem cuidado constante, é essencial um
              acompanhamento regular para garantir a beleza e saúde das plantas.
              Contamos com uma equipe especializada no manejo de gramados, podas
              e todo o suporte técnico necessário para um paisagismo impecável e
              duradouro.
            </p>
          </div>
        </div> */
}
