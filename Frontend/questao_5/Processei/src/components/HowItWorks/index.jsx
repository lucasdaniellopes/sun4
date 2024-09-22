import Title from "../Hero/Title";

export default function HowItWorks() {
  return (
    <section
      id="works"
      className="flex flex-col items-start gap-8 md:items-center"
    >
      <div className="mx-auto my-10 w-[90%] max-w-7xl md:text-center">
        <Title text="Como funciona?" />
        <div className="flex flex-col items-center justify-between gap-8 pt-10 md:flex-row">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-yellow-600 bg-opacity-20 p-6">
              <i className="fa-solid fa-money-check-dollar-pen text-4xl text-yellow-700"></i>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Escolha um plano</h3>
            <p className="max-w-72 text-gray-600">
              Veja qual plano se encaixa melhor com sua necessidade
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-yellow-600 bg-opacity-20 p-6">
              <i className="fa-solid fa-memo-circle-check text-4xl text-yellow-700"></i>
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              Cadastre os processos
            </h3>
            <p className="max-w-72 text-gray-600">
              Faça o cadastro dos processos que deseja acompanhar
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-yellow-600 bg-opacity-20 p-6">
              <i className="fa-solid fa-comments text-4xl text-yellow-700"></i>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Acompanhe</h3>
            <p className="max-w-72 text-gray-600">
              Seja notificado sobre as atualizações, veja resumos e tudo mais o
              que precisar sem estresse ou complicações
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
