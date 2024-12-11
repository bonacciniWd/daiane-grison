import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Ícone de verificado
import Image from 'next/image';

const CourseInfoCards = () => {
  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Card de Investimento */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-4xl font-black text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Curso Ministrado por <br/> Arjun Das</h3>
            <Image src="/arjun.jpg" width={200} height={50} alt="arjun" className="mx-auto my-4 rounded-full"/>
            
          </div>
        </div>

        {/* Card de Data e Certificação */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-gray-800">Data e Certificação</h3>
            <p className="text-gray-600 mt-2">
              🗓️ Data: 14 e 15 de Dezembro de 2024, sábado e domingo, das 09h às 19h
            </p>
            <p className="text-gray-600 mt-2">
              💰 Investimento: R$1800,00 no pix <br/> <span className="font-black">(10% de desconto)</span>
            </p>
            <p className="text-gray-600 mt-2">
              📜 Com certificação e apostila
            </p>
          </div>
          {/* Ícone de Verificado */}
          <FaCheckCircle className="text-blue-500 text-4xl" />
        </div>

      </div>
    </section>
  );
};

export default CourseInfoCards;
