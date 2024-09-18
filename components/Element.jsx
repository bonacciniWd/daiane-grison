"use client"
import Image from "next/image";

export default function Element() {
  return (
    <main id="element" className="relative flex flex-col items-center justify-center h-screen text-center px-4 md:px-8 lg:px-16">
      
      {/* Container para as imagens sobrepostas */}
      <div className="relative flex items-center justify-center z-1">
        {/* Imagem de fundo */}
        <Image
          src="/react-atoma.png"
          alt="React Atom"
          className="animate-slow-spin"
          width={333}
          height={333}
        />
        {/* Imagem sobreposta */}
        <Image
          src="/chakras.png"
          alt="Chakras"
          className="absolute animate-pulse -mt-6"
          width={180}
          height={180}
        />
      </div>

      {/* Textos abaixo das imagens */}
      <div
          className="mt-8 text-slate-800 z-10 py-5 px-5 rounded-lg border-2 border-dourado relative mx-auto"
          style={{
            backgroundImage: 'url("/texture.png")',
            backgroundSize: 'cover',
            backgroundBlendMode: 'multiply',
          }}
        >
          <div className="relative z-10 max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
            <p className="my-4 mx-8 text-base md:text-2xl md:mx-10 font-light">
              A energia sexual é a força mais poderosa que você possui.
              Aprenda a utilizá-la para viver com mais prazer, prosperidade e reconexão com seu feminino. <br />
            </p>
          </div>
          <button
        className=" text-dourado text-shadow-2 bottom-2 t font-semibold text-opacity-95  hover:text-white transition-colors duration-300"
        onClick={() => {
          // Rola suavemente até a seção com id "saiba-mais"
          document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        saiba mais...
      </button>
        </div>

    </main>
  );
}

