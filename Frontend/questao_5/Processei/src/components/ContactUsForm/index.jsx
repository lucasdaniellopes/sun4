import React, { useState } from "react";
export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
  };

  return (
    <section
      id="form"
      className="contact-form w-full bg-yellow-700 bg-opacity-20 py-10 shadow-md"
    >
      <div className="mx-auto flex w-[90%] flex-col md:flex-row-reverse md:items-center">
        <h2 className="mb-4 text-2xl font-bold text-yellow-700 md:w-1/2 md:text-center md:text-5xl">
          Fale Conosco
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-3xl bg-transparent p-3 md:w-1/2"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Digite seu nome"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-yellow-700 bg-opacity-20 p-2 text-black outline-none placeholder:text-black focus:outline-none focus:ring-2 focus:ring-yellow-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Digite seu email"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-yellow-700 bg-opacity-20 p-2 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-yellow-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-black"
            >
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Qual assunto?"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-yellow-700 bg-opacity-20 p-2 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-yellow-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Digite sua mensagem"
              className="mt-1 block w-full resize-none rounded-md border border-gray-300 bg-yellow-700 bg-opacity-20 p-2 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-yellow-700"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-3xl bg-yellow-700 px-4 py-2 font-semibold text-black transition-colors duration-300 hover:bg-yellow-600 hover:text-white"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
