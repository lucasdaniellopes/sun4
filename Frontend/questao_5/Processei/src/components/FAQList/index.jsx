// FAQList.jsx
import React from "react";
import FAQItem from "./FAQItem";

export default function FAQList() {
  const faqs = [
    {
      question: "O que é o Processei?",
      answer:
        "O Processei é uma plataforma que ajuda você a acompanhar seus casos jurídicos sem o incômodo de lidar com advogados e tribunais.",
    },
    {
      question: "Como posso acompanhar meu caso?",
      answer:
        "Você pode acompanhar seu caso assinando um de nossos planos e inserindo os detalhes do seu caso no painel.",
    },
    {
      question: "Existe um teste gratuito?",
      answer:
        "Sim, o Processei oferece um teste gratuito de 7 dias para todos os novos usuários.",
    },
    {
      question: "Como posso cancelar minha assinatura?",
      answer:
        "Você pode cancelar sua assinatura a qualquer momento nas configurações da sua conta.",
    },
  ];

  return (
    <section
      id="faq"
      className="mx-auto my-20 flex w-[90%] max-w-2xl flex-col items-center bg-white md:min-w-[90%] md:flex-row"
    >
      <h2 className="mb-6 block w-full text-2xl font-bold md:w-1/2 md:text-5xl">
        Dúvidas Frequentes
      </h2>
      <div className="w-full md:w-1/2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
