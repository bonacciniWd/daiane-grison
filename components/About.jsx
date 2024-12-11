import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full py-12 px-6 bg-cover bg-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título com animação de fade-in e estilo do Headline */}
        <motion.h2
          className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          A mudança começa com você
        </motion.h2>

        {/* Texto principal com animação de fade-in */}
        <motion.p
          className="text-lg text-white leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A partir da mudança da sua relação com o prazer e o orgasmo, tudo muda. Surge um EU com muito mais
          alegria, autoestima, criatividade, espontaneidade e coragem de ser quem você realmente é.
        </motion.p>

        {/* Segundo parágrafo com animação */}
        <motion.p
          className="text-lg text-white leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Experimente um final de semana intenso com experiências transformadoras que combinam expansão energética,
          sensibilidade, desenvolvimento corporal e orgástico, e consciência corporal.
        </motion.p>

      </div>
    </section>
  );
};

export default About;
