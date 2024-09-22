import ButtonCta from "../ButtonCta";
import Description from "./description";
import Title from "./Title";

export default function Hero() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("../../../pexels-ekaterina-bolovtsova-6077326.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
  };
  return (
    <section
      className="flex w-full flex-col items-start justify-center gap-6 overflow-hidden text-white"
      style={backgroundStyle}
    >
      <div className="mx-auto w-[90%] max-w-7xl">
        <Title text="Acompanhe seu caso, sem advogado" />
        <Description text="O Processei ajuda você a monitorar seu caso legal sem o estresse de lidar com advogados e tribunais. Fornecemos uma plataforma fácil de usar que mantém você informado em cada etapa do processo" />
        <ButtonCta
          bgColor="bg-yellow-700 hover:bg-yellow-600"
          text="Ver Planos"
        />
      </div>
    </section>
  );
}
