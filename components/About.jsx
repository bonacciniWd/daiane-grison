"use client"
import Image from 'next/image';

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-tantra-dark text-tantra-light">
      {/* Imagem de Daiane Grison */}
      <div className="relative mb-8">
        <Image
          src="/daiane-grison.png" // Substitua pelo caminho correto da imagem
          alt="Daiane Grison"
          width={300} // Ajuste o tamanho conforme necessário
          height={300} // Ajuste o tamanho conforme necessário
          className="relative rounded-full border-4 border-gold"
        />
      </div>
      
      {/* Texto sobre Daiane Grison */}
      <div className="text-center max-w-xl mx-4">
        <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-3xl">Sobre Daiane Grison</h2>
        <p className="text-base md:text-lg lg:text-lg mb-8 mx-4">
          Daiane Grison é uma renomada mentora e também especialista em tantra, com anos de experiência em transformar vidas e promover o autoconhecimento. Seu trabalho é focado em ajudar os indivíduos a explorar seu potencial interior e alcançar uma profunda harmonia entre corpo e mente.
        </p>
        
        <button
          className="relative inline-block py-2 px-6 rounded text-amber-400 animate-pulse"
          onClick={() => {
            // Adicione a lógica para rolar para a seção de programação
            document.getElementById('programacao')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Ver programação
        </button>
      </div>
    </section>
  );
};

export default About;
