import { FaSun, FaMoon, FaLeaf, FaHeart, FaHandSparkles, FaUtensils } from 'react-icons/fa'; // Importa ícones

export default function Schedule() {
  return (
    <section className="py-16 bg-tantra-dark" id="schedule">
      <div className="max-w-3xl mx-auto px-4">
        {/* Título */}
        <h4 className="text-xl md:text-3xl font-bold text-center text-tantra-light mb-8">
          Cronograma da Experiência
        </h4>

        {/* Roteiro do Dia */}
        <div className="space-y-12">
          {/* Manhã */}
          <div className="relative">
            <div className="flex items-center">
              <FaSun className="text-tantra-light text-2xl mr-4" />
              <h5 className="text-lg md:text-2xl font-bold text-tantra-light">
                Manhã (Início às 9:30)
              </h5>
            </div>
            <div className="ml-10 mt-4 border-l-2 border-tantra-light pl-6 space-y-4">
              <p className="text-tantra-light">
                <strong>Movimento de Constelação Familiar</strong> – com Tatiana Vanusa, líder de movimento feminino. Liberando bloqueios emocionais e energéticos.
              </p>
              <p className="text-tantra-light">
                <strong>Reprogramação Emocional</strong> – com Daiane Grison, preparando seu emocional para um dia de profunda transformação.
              </p>
            </div>
          </div>

          {/* Almoço */}
          <div className="relative">
            <div className="flex items-center">
              <FaUtensils className="text-tantra-light text-2xl mr-4" />
              <h5 className="text-lg md:text-2xl font-bold text-tantra-light">
                Almoço (12:00)
              </h5>
            </div>
            <div className="ml-10 mt-4 border-l-2 border-tantra-light pl-6 space-y-4">
              <p className="text-tantra-light">
                <strong>Almoço Natural e Saboroso</strong> – comidas leves e preparadas especialmente para a vivência, garantindo nutrição e bem-estar.
              </p>
            </div>
          </div>

          {/* Tarde */}
          <div className="relative">
            <div className="flex items-center">
              <FaLeaf className="text-tantra-light text-2xl mr-4" />
              <h5 className="text-lg md:text-2xl font-bold text-tantra-light">
                Tarde
              </h5>
            </div>
            <div className="ml-10 mt-4 border-l-2 border-tantra-light pl-6 space-y-4">
              <p className="text-tantra-light">
                <strong>Vivências de Reconexão com a Essência</strong> – guiadas por Daiane Grison e Arjun, trazendo você de volta à sua essência.
              </p>
              <p className="text-tantra-light">
                <strong>Ativação da Energia Sexual</strong> – com Amanda Oliveira, despertando o poder do feminino e vitalidade para sua vida.
              </p>
            </div>
          </div>

          {/* Encerramento */}
          <div className="relative">
            <div className="flex items-center">
              <FaMoon className="text-tantra-light text-2xl mr-4" />
              <h5 className="text-lg md:text-2xl font-bold text-tantra-light">
                Encerramento (Fim do dia)
              </h5>
            </div>
            <div className="ml-10 mt-4 border-l-2 border-tantra-light pl-6 space-y-4">
              <p className="text-tantra-light">
                <strong>Demonstração de Massagem Shiva e Shakti</strong> – com Daiane e Arjun, uma apresentação das técnicas de massagem tântrica para equilibrar as energias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
