"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Maria Silva",
    text: "O trabalho da Daiane foi transformador! Senti uma conexão profunda e uma cura interior que eu não esperava.",
    image: "/user1.jpg",
  },
  {
    name: "João Oliveira",
    text: "Recomendo a todos que buscam autoconhecimento e uma experiência única. A Daiane é incrível!",
    image: "/user2.jpg",
  },
  {
    name: "Diogo Fraga",
    text: "Foi uma experiência que mudou a minha vida. O carinho e o cuidado da Daiane são incomparáveis.",
    image: "/user3.jpg",
  },
  {
    name: "Morgana V. Barreto",
    text: "Uma vivência inesquecível. Gratidão eterna pela oportunidade de aprender e crescer com o Tantra.",
    image: "/user4.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Alterna entre os testemunhos a cada 30 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 30000); // 30 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  // Exibe dois testemunhos por vez
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section className="py-16 bg-tantra" id="testimonials">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h4 className="text-xl md:text-3xl lg:text-3xl font-bold text-tantra-light max-w-4xl mx-3 mb-7">
          Clientes Satisfeitos
        </h4>
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white opacity-90 shadow-lg p-6 rounded-lg flex flex-col items-center space-y-4 max-w-md mx-auto"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full border-2 border-gold"
              />
              <p className="text-lg text-gray-700 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-tantra-dark">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
