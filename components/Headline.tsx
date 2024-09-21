"use client"
import Image from "next/image";
import { FaSortDown } from 'react-icons/fa';

export default function Headline({ videoRef }) {
  
  return (
    <main className="relative flex flex-col items-center justify-center h-screen text-center px-4 md:px-8 lg:px-16">
      
      {/* Vídeo de fundo */}
      <video
        ref={videoRef} // Atribui a ref ao vídeo
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
          className=" mx-auto"
          width={310} 
          height={310}
        />
      </div>
      
      <div className="relative z-30">
        <p className="my-8 font-light text-white text-lg md:text-xl lg:text-xl">
          <span className="text-3xl text-dourado font-bold bg-opacity-30 bg-black py-1 px-2 rounded-md border-2 border-dourado">28/09</span>
        </p>
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold text-tantra-light max-w-4xl mx-3 uppercase">
          Experiência Tântrica
        </h1>
        
        <h2 className="mt-6 font-extralight text-lg md:text-2xl lg:text-2xl text-tantra-light max-w-3xl mx-6">
          Desperte Seu Prazer, Conecte-se com sua Essência e Viva Plenamente
        </h2>
      </div>

      <button
        className="text-slate-300 mt-10 t font-semibold underline hover:text-white transition-colors duration-300"
        onClick={() => {
          document.getElementById('1')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <FaSortDown className="flex animate-bounce text-white size-8 mt-20"/>
      </button>
    </main>
  );
}
