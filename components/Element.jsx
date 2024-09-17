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
      <div className="mt-8 text-tantra-light z-10">
      <p className="my-4 mx-8 text-base md:text-3xl md:mx-60 font-extralight">
        A energia sexual é a força mais poderosa que você possui.
        Aprenda a utilizá-la para viver com mais prazer, prosperidade e reconexão com seu feminino. <br />
        Junte-se a <span className="text-pink-500 font-bold">Daiane Grison</span> e <span className="text-pink-500 font-bold">Arjun Das</span> para uma Experiência Tântrica Única que vai transformar seu olhar sobre a vida.
      </p>

      </div>
      <button
        className="text-slate-300 mt-10 t font-semibold underline hover:text-white transition-colors duration-300"
        onClick={() => {
          // Rola suavemente até a seção com id "saiba-mais"
          document.getElementById('saiba-mais')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Saiba mais...
      </button>

  

    </main>
  );
}

