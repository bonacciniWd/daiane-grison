import React from 'react';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CourseInfoCards from '@/components/CourseInfoCards';

const Element = () => {
  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título com animação */}
        <motion.h2
          className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Permita-se viver essa experiência
        </motion.h2>

        <CourseInfoCards />

        {/* Localização e WhatsApp */}
        <motion.div
          className="text-lg text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p>🏠 Local: Espaço Kandah BC – Rua 2700 número 1009, Balneário Camburiu - SC</p>

          {/* Link para Google Maps */}
          <a
            href="https://www.google.com/maps?q=Espaço+Kandah+BC,+Rua+2700,+1009,+Balneário+Camboriú+-+SC"
            target="_blank"
            className="text-blue-600 hover:underline flex items-center justify-center gap-2 mt-2"
          >
            <FaMapMarkerAlt className="text-xl" />
            Ver no Mapa
          </a>

          <p className="mt-4">☎️ Para mais informações e inscrições, entre em contato conosco pelo WhatsApp:</p>
          {/* Link para WhatsApp */}
          <a
            href="https://wa.me/5511951485071"
            target="_blank"
            className="text-green-600 hover:underline flex items-center justify-center gap-2 mt-2"
          >
            <FaWhatsapp className="text-xl" />
            (11) 95148-5071
          </a>
        </motion.div>

        {/* Redes Sociais */}
        <motion.div
          className="text-lg text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p>Siga nossas redes sociais:</p>
          <div className="flex justify-center gap-4 mt-2 py-2">
            {/* Links para Instagram */}
            <a
              href="https://www.instagram.com/arjundasterapeuta"
              target="_blank"
              className="text-pink-800 hover:opacity-80"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/daianegrison"
              target="_blank"
              className="text-pink-800 hover:opacity-80"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/kandahtantrabrasil"
              target="_blank"
              className="text-pink-800 hover:opacity-80"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </motion.div>

        {/* Botão de inscrição */}
        <motion.button
          className="mt-6 px-6 py-3 text-white font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert('Inscrição realizada!')}
        >
          Inscreva-se Agora
        </motion.button>
      </div>
    </section>
  );
};

export default Element;
