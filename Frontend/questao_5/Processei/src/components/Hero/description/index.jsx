export default function Description({ ClassName, text }) {
  return (
    <p
      className={`mb-12 text-xs text-white md:w-2/5 md:text-base ${ClassName}`}
    >
      {text}
    </p>
  );
}
