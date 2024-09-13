"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

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

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 30000); // Troca a cada 30 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  const displayTestimonials = testimonials.slice(currentIndex, currentIndex + 2);
  if (currentIndex + 2 > testimonials.length) {
    displayTestimonials.push(...testimonials.slice(0, (currentIndex + 2) % testimonials.length));
  }

  return (
    <div className=" flex flex-wrap justify-center gap-4 my-8">
      {displayTestimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-xs md:max-w-xl w-full text-center">
          <div className="flex justify-center mb-4">
            <Image
              src={testimonial.image}
              alt={`Foto de ${testimonial.name}`}
              width={100}
              height={100}
              className="rounded-full border-2 border-gold"
            />
          </div>
          <p className="text-gray-800 mb-2 mx-4 md:mx-8 lg:mx-8">{testimonial.text}</p>
          <p className="font-semibold">- {testimonial.name}</p>
        </div>
      ))}
    </div>
  );
}
