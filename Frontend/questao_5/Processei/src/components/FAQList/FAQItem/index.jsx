import React, { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-2 rounded-3xl border border-solid border-yellow-700 p-4">
      <button
        onClick={toggleFAQ}
        className="flex w-full items-center justify-between text-left text-lg font-medium text-black"
      >
        {question}
        <i
          className={`fas ml-2 ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
        ></i>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
}
