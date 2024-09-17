import Image from "next/image";

export default function Headline() {
  
  return (
    <main className="relative flex flex-col items-center justify-center h-screen text-center px-4 md:px-8 lg:px-16">
      
      {/* Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
      >
        <source src="/videos/fundo.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      <div className="relative z-20 my-1">
        <Image
          src="/logo.png"
          alt="Chakras"
          className=" mx-auto animate-pulse"
          width={310} 
          height={310}
        />
      </div>
      

      {/* Texto abaixo das imagens */}
      <div className="relative z-30 mt-8">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold text-tantra-light max-w-4xl mx-3 uppercase">
        Experiência Tântrica
        </h1>
        <h2 className="mt-6 font-extralight text-lg md:text-2xl lg:text-2xl text-tantra-light max-w-3xl mx-6">
        Desperte Seu Prazer, Conecte-se com sua Essência e Viva Plenamente
        </h2>

      </div>
    </main>
  );
}
