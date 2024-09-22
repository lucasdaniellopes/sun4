import Title from "../Hero/Title";
import Card from "./Card";

export default function Plans() {
  const planData = [
    {
      title: "Básico",
      price: "19",
      benefits: [
        "Até 5 processos simultâneos",
        "Acompanhamento Básico",
        "Suporte por e-mail",
      ],
    },
    {
      title: " Premium",
      price: "39",
      benefits: [
        "Até 15 processos simultâneos",
        "Acompanhamento Completo",
        "Suporte prioritário",
      ],
    },
    {
      title: " Empresarial",
      price: "99",
      benefits: [
        "Até 40 processos simultâneos",
        "Acompanhamento Completo",
        "Suporte dedicado 24/7",
      ],
    },
  ];
  return (
    <section id="plans" className="mx-auto my-10 w-[90%] max-w-7xl md:my-20">
      <div className="flex flex-col md:items-center">
        <Title text="Planos" />
        <div className="flex w-full flex-col items-center justify-between gap-8 p-8 md:flex-row">
          {planData.map((plan, index) => (
            <Card
              key={index}
              title={plan.title}
              price={plan.price}
              benefits={plan.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
