export function ServiceFlow() {
  const steps = [
    'Preencha o formulário',
    'Receba o orçamento',
    'Agendamento do serviço',
    'Realização do serviço solicitado',
    'Avaliação do nosso serviço',
  ];

  return (
    <div className="flex flex-col items-center space-y-12">
      <div className=" w-full max-w-4xl">
        <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex items-center md:flex-col md:items-center"
            >
              <div className="w-8 h-8 bg-greenhard rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="ml-4 md:ml-0 md:mt-2 bg-white rounded-2xl py-4 px-6 text-gray-700 text-lg text-center">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 md:mt-8">
        <button>
          <a
            href="/budget"
            className="bg-greenhard text-white py-3 px-6 md:py-4 md:px-9 rounded-full hover:bg-greenhard transition"
          >
            Preencher Formulário
          </a>
        </button>
      </div>
    </div>
  );
}
