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
          PointerEvent: false,
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
    className="space-y-10 max-w-screen-md md:space-y-14 my-16 mx-4 lg:max-w-screen-lg lg:mx-auto bg-gray-950 bg-opacity-40 p-4 md:p-2 lg:p-8 rounded-2xl border border-gold"
  >
  <div className="text-center my-6">
    <h4 className="text-xl md:text-2xl font-bold mb-4 text-tantra-light uppercase">
      Um dia dedicado à reconexão
    </h4>
    <p className="text-sm md:text-base text-tantra-light mx-6">
    Corpo, Mente e Espírito são guiados em uma experiência ÚNICA, por especialistas no Tantra.
    </p>
  </div>

  {/* Carrossel de Imagens */}
  <div className="mt-6 md:mt-8 mx:auto md:mx-12 lg:mx-20">
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
        <div
            className="mt-auto text-slate-800 z-10 py-5 rounded-md px-5 relative mx-auto border-2 border-dourado"
            style={{
              backgroundImage: 'url("/texture.png")',
              backgroundSize: 'cover',
              backgroundBlendMode: 'multiply',
            }}
          >
            <div className="mt-4 flex justify-center">
              <img
                src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.png"
                alt="Fogo"
                className="w-14 h-14 md:w-48 md:h-48 mb-6"
              />
            </div>
            <ul className="list-disc pl-5 space-y-4 text-left text-sm md:text-xl mb-8 font-normal">
              <li>Como ativar sua Energia Sexual para gerar mais Prosperidade.</li>
              <li>Trazer o Tantra para fortalecer seus Relacionamentos.</li>
              <li>Ressignificar o Prazer e o desejo em sua vida.</li>
            </ul>
          </div>

        <div className="text-sm text-tantra-light mx-6 my-4">
        <p>
        Unindo práticas ancestrais a uma abordagem moderna, para que você integre essa energia no seu cotidiano.
        </p>
      </div>
      </div> 
            
    </section>
  );
};

export default ExperienceDetails;
