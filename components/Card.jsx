// Card.jsx
import Image from 'next/image';

const Card = ({ imageSrc, name, description }) => {
  return (
    <div className="text-center border-4 border-dourado-hover max-w-xl mx-4 bg-white opacity-90 p-6 rounded-lg shadow-lg mt-3 relative"
     style={{
       backgroundImage: 'url("/texture.png")', // Substituir pela URL da textura
       backgroundSize: 'cover',  // A textura cobrirá todo o card
       backgroundBlendMode: 'multiply',  // Suaviza a textura com o fundo
     }}
>
  {/* Estilização com gradiente ao fundo */}
  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-gray-100 rounded-lg opacity-30"></div>

  <div className="relative z-10">
    <div className="flex justify-center mb-8">
      <Image
        src={imageSrc}
        alt={name}
        width={300}
        height={300}
        className="relative rounded-full border-4 border-gold shadow-lg"
      />
    </div>
    
    {/* Nome */}
    <h2 className="text-2xl text-pink-600 font-bold mb-4 md:text-3xl lg:text-3xl">
      {name}
    </h2>
    
    {/* Descrição */}
    <p className="text-base text-slate-800 md:text-lg lg:text-lg mb-8 mx-4 font-light">
      {description}
    </p>
  </div>
</div>

  );
};

export default Card;
