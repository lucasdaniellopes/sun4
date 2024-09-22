import React, { useState, useEffect } from "react";
import Logo from "../../Logo";
import ButtonCta from "../../ButtonCta";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <nav className="relative flex w-full items-center justify-between">
      <div className="flex">
        <div className="mr-3 flex items-center md:hidden">
          <button onClick={toggleMenu} className="text-xl text-white">
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
        <Logo />
      </div>
      <ul
        className={`fixed left-0 top-[4.5rem] h-full w-2/4 flex-col gap-4 bg-black pl-[5%] text-sm font-semibold md:static md:top-0 md:flex md:w-full md:flex-row md:items-center md:justify-center md:gap-2 md:pl-0 ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <li className="cursor-pointer border-b-2 border-solid border-transparent p-2 pl-0 duration-300 hover:border-yellow-600 md:pl-2">
          <a href="#">Home</a>
        </li>
        <li className="cursor-pointer border-b-2 border-solid border-transparent p-2 pl-0 duration-300 hover:border-yellow-600 md:pl-2">
          <a href="#plans">Planos</a>
        </li>
        <li className="cursor-pointer border-b-2 border-solid border-transparent p-2 pl-0 duration-300 hover:border-yellow-600 md:pl-2">
          <a href="#work">Como Funciona</a>
        </li>
        <li className="cursor-pointer border-b-2 border-solid border-transparent p-2 pl-0 duration-300 hover:border-yellow-600 md:pl-2">
          <a href="#faq">FAQ</a>
        </li>
        <li className="cursor-pointer border-b-2 border-solid border-transparent p-2 pl-0 duration-300 hover:border-yellow-600 md:pl-2">
          <a href="#form">Contato</a>
        </li>
      </ul>
      <ButtonCta
        bgColor="bg-yellow-700 hover:bg-yellow-600"
        text="Assine Agora"
      />
    </nav>
  );
}
