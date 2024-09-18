"use client";
import Image from 'next/image';
import Card from './Card';

const About = () => {
  
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-tantra-dark text-tantra-light" id="saiba-mais">
      <div className="flex flex-col md:flex-row lg:flex-row gap-8">
        <Card
          imageSrc="/daiane-grison.png"
          name="Daiane Grison"
          description="Terapeuta há 6 anos, é especialista em Tantra, Constelação Familiar, Reiki e Reprogramação Emocional. Mãe de três meninos, atua em diversas cidades e estados do Brasil, oferecendo terapias e mentorias em cursos livres. Ela é sócia proprietária do Espaço Única em Balneário Camboriú, e seu propósito é despertar o poder transformador do Tantra em cada pessoa, promovendo uma reconexão profunda entre corpo, mente e espírito.
"
        />
        <Card
          imageSrc="/arjun.png" // Substitua pelo caminho correto da imagem
          name="Arjun Das"
          description="Arjun Das é terapeuta corporal e comportamental com mais de uma década de experiência em Tantra, NeoTantra e terapias vibracionais. Fundador da Kandah Tantra Brasil, Arjun também é instrutor de Yoga, facilitador de meditações e autor do livro 'Os Segredos de Afrodite', especializado na sexualidade feminina. Ele oferece atendimentos individuais e cursos, como a Massagem Tântrica para Casais, trazendo uma abordagem holística para o desenvolvimento corporal e energético."
        />
      </div>
      <div className="inset-0 flex justify-center items-center mt-10 z-20">
        <Image
          src="/snake.png"
          alt="Snake"
          width={100}
          height={100}
          className="rounded-full border-1 border-gold"
        />
      </div>
    </section>
  );
};

export default About;
