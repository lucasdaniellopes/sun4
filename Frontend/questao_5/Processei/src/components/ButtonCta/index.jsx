export default function ButtonCta({ bgColor, text }) {
  return (
    <a
      href="#"
      className={`cursor-pointer text-nowrap rounded-3xl ${bgColor} px-3 py-2 font-semibold text-black duration-300 hover:scale-105 hover:text-white md:px-4 md:py-3`}
    >
      {text}
    </a>
  );
}
