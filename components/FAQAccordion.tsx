"use client"
import { useState } from 'react';


const FAQAccordion = () => {
  const faqs = [
    {
      question: 'O que é terapia Tântrica?',
      answer: 'É importante deixar claro o que a terapia tântrica não é sexo. Se você comparecer a uma sessão de terapia tântrica com essas expectativas, a frustração é certa. Da mesma forma, se receber esse tipo de abordagem da pessoa que o atender, saiba que você não esteve diante de um profissional sério.'

    },
    {
      question: 'O que é o Tantra?',
      answer: 'O Tantra é uma prática de autoconhecimento que desperta sua essência e potencializa seu poder interior.',
    },
    {
      question: 'Como o Tantra pode ajudar no meu dia a dia?',
      answer: 'O Tantra ajuda a aumentar a consciência corporal, reduzir o estresse, e melhorar a conexão mente-corpo.',
    },
    {
      question: 'É necessário ter experiência anterior?',
      answer: 'Não, o Tantra é acessível a todos, independentemente de experiência anterior.',
    },
    {
      question: 'Tenho alguma garantia?',
      answer: 'Acreditamos tanto no poder dessa experiência que garantimos sua satisfação! Transforme sua vida ou tenha seu investimento de volta.'

    },
   
    // Adicione mais perguntas e respostas aqui
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Fecha se já estiver aberto
    } else {
      setOpenIndex(index); // Abre o FAQ clicado
    }
  };

  return (
    <div className="flex flex-col items-center h-80vh">
      <div className="max-w-3xl mx-3 my-20 md:mx-auto lg:mx-auto ">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mt-4 mb-8 text-tantra-light">Perguntas frequentes</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 px-4 rounded font-medium text-md md:text-xl bg-tantra bg-opacity-65 text-tantra-light flex justify-between items-center"
            >
              {faq.question}
              <span className="ml-2">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div
                className="mt-auto text-slate-800 z-10 py-5 rounded-md px-5 relative mx-auto"
                style={{
                  backgroundImage: 'url("/texture.png")',
                  backgroundSize: 'cover',
                  backgroundBlendMode: 'multiply',
                }}
              >
              <p className="px-4 py-2 text-md md:text-lg text-slate-800 ">{faq.answer}</p>
             </div> 
            </div>
          </div>
        ))}
      </div>
    </div>  
  );
};

export default FAQAccordion;
