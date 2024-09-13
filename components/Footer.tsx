import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-8 bg-tantra-dark text-center text-tantra-light">
      <div className="space-x-4 text-sm mx-4">
        <Link href="/terms" className="hover:underline">Termos de Uso</Link>
        <Link href="/privacy" className="hover:underline">Política de Privacidade</Link>
        <Link href="/faq" className="hover:underline">Perguntas Frequentes</Link>
      </div>

      <div className="mt-4">
        <Image src="/logo.png" alt="Logo Daiane Grison" className="mx-auto h-32 w-auto" />
      </div>

      <div className="mt-4 text-sm">
        <p>Contato: <a href="mailto:contato@daianegrison.com" className="underline">contato@daianegrison.com</a></p>
        <p>Siga nas redes sociais</p>
        <div className="mt-2 space-x-4">
          <a href="https://facebook.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://youtube.com" className="hover:underline" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>

     

      {/* Powered by VRZ-Studio */}
      <div className="mt-4">
        <p className="text-sm text-tantra-light2">
          Powered by{' '}
          <Link href="https://vrz-studio.tech" className="underline" target="_blank" rel="noopener noreferrer">
            VRZ-Studio 2024 ®
          </Link>
        </p>
      </div>
    </footer>
  );
}
