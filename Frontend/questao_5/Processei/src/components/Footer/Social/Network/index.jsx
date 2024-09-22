export default function Network({ networkName }) {
  return (
    <a href="#">
      <i
        className={`fa-brands fa-${networkName} text-xl duration-300 hover:scale-110 hover:text-yellow-700`}
      ></i>
    </a>
  );
}
