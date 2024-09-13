export default function Details() {
  return (
    <section className="py-16 bg-tantra" id="programacao">
      <div className="max-w-3xl mx-auto px-4">
       
        <h4 className="text-xl md:text-3xl font-bold text-center text-tantra-light mb-8">
          Detalhes da Experiência
        </h4>

        <p className="text-lg md:text-xl text-tantra-light mb-8 text-center">
          Venha explorar o Tantra em um ambiente seguro e envolvente. Com técnicas ancestrais e toques energéticos, Daiane Grison guiará você por uma jornada de autocura e redescoberta do prazer.
        </p>

        {/* Lista de detalhes */}
        <div className="bg-tantra-light p-6 rounded-lg shadow-lg">
          <ul className="space-y-4 text-lg md:text-xl text-tantra-dark">
            <li>📅 <strong>Data:</strong> 28 de setembro de 2024</li>
            <li>📍 <strong>Local:</strong> Espaço ÚNICO Tantra em Balneário Camboriú</li>
            <li>✨ <strong>Inclui:</strong> Rituais de Tantra, Meditação Guiada, Vivências de Autocuidado e Conexão Sensorial</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
