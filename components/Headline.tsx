import React from 'react';
import Link from 'next/link';

const Headline = () => {
  return (
    <section className="w-full h-screen bg-no-repeat bg-cover bg-center bg-[url('/fundo.jpg')] flex items-center justify-center">
      <div className="lg:max-w-3xl max-w-96 text-center px-6 py-8 sm:px-12 lg:px-16 bg-white bg-opacity-50 rounded-lg shadow-xl backdrop-blur-md">
        <h1 className="text-2xl sm:text-5xl font-extrabold text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-6 uppercase">
          Curso Livre de Massagem Tântrica
        </h1>
        <p className="text-md sm:text-lg text-gray-800 leading-relaxed">
          Estamos abrindo uma nova turma para o Curso Livre de Massagem Tântrica.
          <br />
          A massagem tântrica é uma poderosa ferramenta para vivenciar novas e profundas sensações, 
          ressignificando a relação com o seu próprio corpo, as emoções, o prazer e a sexualidade.
        </p>
        <p className="text-base sm:text-xl font-black text-slate text animate-pulse mt-8">
          Desperte a capacidade sensorial e seu potencial orgástico!
        </p>
        <button className="mt-6 px-6 py-3 text-white font-semibold animate-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-md transition-transform duration-300 hover:scale-110">
          <Link href="#about" scroll={false}>Saiba Mais</Link>
        </button>


      </div>
    </section>
  );
};

export default Headline;
