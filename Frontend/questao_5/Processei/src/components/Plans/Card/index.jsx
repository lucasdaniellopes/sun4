import ButtonCta from "../../ButtonCta";

export default function Card({ title, price, benefits }) {
  return (
    <div className="max-w-sm rounded-3xl border border-gray-200 bg-yellow-600 bg-opacity-20 p-6 text-center text-yellow-700 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <p className="mb-4 text-4xl font-semibold">
        R$ {price}
        <span className="text-lg">/mês</span>
      </p>
      <ul className="mb-6 space-y-2 text-left">
        {benefits.map((benefit, index) => (
          <li className="text-nowrap" key={index}>
            ✔ {benefit}
          </li>
        ))}
      </ul>
      <ButtonCta bgColor="bg-yellow-700" text="Assine Agora" />
    </div>
  );
}
