// Card.jsx
import Image from 'next/image';

const Card = ({ imageSrc, name, description }) => {
  return (
    <div className="text-center max-w-xl mx-4 bg-white opacity-90 p-6 rounded-lg shadow-lg mt-3">
      <div className="flex justify-center mb-8">
        <Image
          src={imageSrc}
          alt={name}
          width={300}
          height={300}
          className="relative rounded-full border-4 border-gold"
        />
      </div>
      <h2 className="text-2xl text-slate-600 font-bold mb-4 md:text-3xl lg:text-3xl">{name}</h2>
      <p className="text-base text-slate-600 md:text-lg lg:text-lg mb-8 mx-4">
        {description}
      </p>
      
    </div>
  );
};

export default Card;
