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
      >
        <source src="/videos/fundo.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      
      <div className="absolute inset-0 flex items-center justify-center z-10"
           style={{ transform: 'translateY(-95px)' }}> {/* Move 20px para cima */}
        <Image
          src="/react-atoma.png"
          alt="React Atom"
          className="w-72 h-72 animate-slow-spin" // Tamanho ajustado e animação de spin lenta
        />
      </div>

      {/* Imagem dos chakras, posicionada à frente */}
      <div className="relative z-20 my-8">
        <Image
          src="/chakras.png"
          alt="Chakras"
          className="w-44 h-44 mx-auto animate-pulse" // 11rem = 44px
        />
      </div>

      {/* Texto abaixo das imagens */}
      <div className="relative z-30 mt-8">
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-tantra-light max-w-4xl mx-3">
           Transcenda suas limitações
        </h1>
        <h2 className="mt-6 font-extralight text-lg md:text-2xl lg:text-2xl text-tantra-light max-w-3xl mx-auto">
          Viva uma experiência transformadora de autoconhecimento e liberdade sensual em Balneário Camboriú com a Mentora Daiane Grison.
        </h2>

      </div>
    </main>
  );
}
