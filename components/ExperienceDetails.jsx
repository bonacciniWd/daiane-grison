"use client";
import Slider from "react-slick";
import Image from 'next/image';

const ExperienceDetails = () => {
  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
    id="1"
    className="space-y-10 max-w-screen-md md:space-y-14 my-16 mx-auto bg-gray-950 bg-opacity-40 p-4 md:p-6 lg:p-8 rounded-2xl border border-gold"
  >
      <div className="text-center my-6">
        <h4 className="text-xl md:text-2xl font-bold mb-4 text-tantra-light uppercase">
          Um dia dedicado à reconexão
        </h4>
        <p className="text-sm md:text-base text-tantra-light mx-6">
          Um dia dedicado à reconexão com seu corpo, mente e espírito, guiado por especialistas no Tantra.
        </p>
      </div>

      {/* Carrossel de Imagens */}
      <div className="mt-6 md:mt-8">
        <Slider {...settings}>
          <div className="w-full">
            <Image
              src="/foto.png"
              alt="Evento Tantra 1"
              width={800}
              height={600}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="w-full">
            <Image
              src="/foto1.png"
              alt="Evento Tantra 2"
              width={800}
              height={600}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="w-full">
            <Image
              src="/foto2.png"
              alt="Evento Tantra 3"
              width={800}
              height={600}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="w-full">
            <Image
              src="/foto3.png"
              alt="Evento Tantra 4"
              width={800}
              height={600}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </Slider>
      </div>

      {/* Seção de detalhes */}
      <div className="mt-6 md:mt-8 text-center space-y-4">
        <h4 className="text-xl md:text-2xl font-bold text-tantra-light underline">
          Você vai vivenciar
        </h4>
        <div className="py-5 px-5 rounded-lg bg-slate-950 bg-opacity-20 border-2 border-dourado mx-6">
          <ul className="list-disc pl-5 space-y-4 text-left text-tantra-light text-lg md:text-xl">
            <li>
              Como ativar sua Energia Sexual para gerar mais Prosperidade.
            </li>
            <li>
              Trazer o Tantra para fortalecer seus Relacionamentos.
            </li>
            <li>
              Ressignificar o Prazer e o desejo em sua vida.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 md:mt-8 text-center text-tantra-light">
        <p>
          Trazemos uma nova visão do Tantra, unindo práticas ancestrais a uma abordagem moderna.
        </p>
      </div>
    </section>
  );
};

export default ExperienceDetails;
