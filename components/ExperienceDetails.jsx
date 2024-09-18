"use client"
import Slider from "react-slick";
import Image from 'next/image';
import { FaLeaf, FaHeart, FaHandSparkles } from "react-icons/fa"; // Importando ícones do react-icons

const ExperienceDetails = () => {
  // Configurações do carrossel sem setas
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remover as setas
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <section className="mt-12 px-6">
      <div className="text-center">
        <h4 className="text-2xl font-bold mb-4 text-tantra-light">
          Um dia dedicado à reconexão
        </h4>
        <p className="text-base text-tantra-light">
          Um dia dedicado à reconexão com seu corpo, mente e espírito, guiado por especialistas no Tantra.
        </p>
      </div>

      {/* Carrossel de Imagens */}
      <div className="mt-8">
        <Slider {...settings}>
          <div>
            <Image
              src="/foto.png"
              alt="Evento Tantra 1"
              width={800}
              height={400}
              className="image-wrapper"
              objectFit="cover"
            />
          </div>
          <div>
            <Image
              src="/foto1.png"
              alt="Evento Tantra 2"
              width={800}
              height={400}
              className="image-wrapper"
              objectFit="cover"
            />
          </div>
          <div>
            <Image
              src="/foto2.png"
              alt="Evento Tantra 3"
              width={800}
              height={400}
              className="image-wrapper"
              objectFit="cover"
            />
          </div>
          <div>
            <Image
              src="/foto3.png"
              alt="Evento Tantra 3"
              width={800}
              height={400}
              className="image-wrapper"
              objectFit="cover"
            />
          </div>
        </Slider>
      </div>

      {/* Seção de detalhes */}
      <div className="mt-8 text-center space-y-4">
        <h4 className="text-2xl font-bold text-tantra-light">
          VOCÊ VAI VIVENCIAR:
        </h4>
        <ul className="list-none space-y-2 text-tantra-light">
          <li className="flex items-center justify-center">
            <FaLeaf className="mr-2 text-green-500" /> Como ativar sua Energia Sexual para gerar mais Prosperidade.
          </li>
          <li className="flex items-center justify-center">
            <FaHeart className="mr-2 text-red-500" /> Trazer o Tantra para fortalecer seus Relacionamentos.
          </li>
          <li className="flex items-center justify-center">
            <FaHandSparkles className="mr-2 text-yellow-500" /> Ressignificar o Prazer e o desejo em sua vida.
          </li>
        </ul>
      </div>

      <div className="mt-8 text-center text-tantra-light">
        <p>
          Daiane Grison e Arjun, trazem uma nova visão do Tantra, unindo práticas ancestrais a uma abordagem moderna e prática para que você integre essa energia no seu cotidiano.
        </p>
      </div>
    </section>
  );
};

export default ExperienceDetails;
