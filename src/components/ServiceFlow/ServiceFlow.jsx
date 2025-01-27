export function ServiceFlow() {
  const steps = [
    'Preencha o formulário de orçamento',
    'Receba o orçamento',
    'Agendamento do serviço',
    'Realização do serviço solicitado',
    'Avaliação do nosso serviço',
  ];

  return (
    <div className="flex flex-col items-center space-y-12   ">
      <div className="relative w-full max-w-2xl">
        <div className="absolute top--32 left-1/2 w-1 h-full bg-greendark rounded-xl transform "></div>
        {steps
          .map((item, index) => (
            <div key={index} className="relative flex items-center mb-6">
              <div
                className={`m-auto bg-white rounded-2xl py-4 text-gray-700 text-lg `}
              >
                {item}
              </div>
            </div>
          ))
          .slice(0, 5)}
      </div>
    </div>
  );
}
