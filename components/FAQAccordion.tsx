"use client"
import { useState } from 'react';


const FAQAccordion = () => {
  const faqs = [
    {
      question: 'O que é Terapia Tantrica?',
      answer: (
        <>
          <p>
            A terapia tântrica é um conjunto de práticas e massagens que se unem para ajudar o interagente a atingir um objetivo específico — seja ele o autoconhecimento corporal, energético ou mental.
          </p>
          <p>
          O cuidado se reflete nos pequenos rituais diários, nas escolhas que fazemos para nutrir nossa mente, alma e corpo. Tantra nos ensina a amar a nós mesmos e a contemplar o belo que já existe dentro de nós.
          </p>
        </>
      )
    },
    {
      question: 'O que é o Tantra?',
      answer: (
        <>
          <p>
          Tantra é muito mais do que uma prática— é uma filosofia de vida que envolve meditações, rituais e uma profunda consciência sobre si mesmo. É um caminho de disciplina e cuidado, seja com o corpo, com o que ingerimos, ou com quem permitimos que acesse nossa energia.
          </p>
          <p>
            Além de promover uma conexão mais profunda consigo mesmo, essa terapia também alivia as tensões físicas e mentais, ajudando no relaxamento completo.
          </p>
        </>
      )
    },
    {
      question: 'Como o Tantra pode ajudar no meu dia a dia?',
      answer: 'O Tantra ajuda a aumentar a consciência corporal, reduzir o estresse, e melhorar a conexão mente-corpo.',
    },
    {
      question: 'É necessário ter experiência anterior?',
      answer: (
        <>
          <p className="font-bold mb-2">
          Não, o Tantra é acessível a todos, independentemente de experiência anterior.
          </p>
          <p>
          Trabalhamos com qualquer tipo de bloqueio ou desafio que a pessoa esteja enfrentando, reconhecendo que cada ser humano é único.
          </p>
          <p>
          Por isso, antes de cada sessão, terapeuta e interagente conversam para definir quais ferramentas serão mais adequadas naquele momento, tornando cada encontro uma experiência exclusiva e personalizada.
          </p>
        </>
      )
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
              <p className="px-4 py-2 text-md md:text-lg text-slate-800">{faq.answer}</p>
             </div> 
            </div>
          </div>
        ))}
      </div>
    </div>  
  );
};

export default FAQAccordion;
