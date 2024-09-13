export default function Footer() {
    return (
      <footer className="py-8 bg-tantra-dark text-center text-tantra-light">
        <div className="space-x-4">
          <a href="#" className="hover:underline">Termos de Uso</a>
          <a href="#" className="hover:underline">Política de Privacidade</a>
          <a href="#" className="hover:underline">Perguntas Frequentes</a>
        </div>
        <div className="mt-4">
          <p>Contato: <a href="mailto:contato@daianegrison.com" className="underline">contato@daianegrison.com</a></p>
          <p>Siga nas redes sociais</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">YouTube</a>
          </div>
        </div>
      </footer>
    );
  }
  