// components/Loader.js
import Image from 'next/image';
import loaderImage from '../public/loader.gif'; // Altere para o caminho correto do seu arquivo PNG

export default function Loader() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black text-white z-50">
      <div className="relative">
        <Image
          src={loaderImage}
          alt="Loading..."
          width={100} // Ajuste o tamanho conforme necessário
          height={100} // Ajuste o tamanho conforme necessário
        />
      </div>
      <style jsx>{`
        .relative {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
