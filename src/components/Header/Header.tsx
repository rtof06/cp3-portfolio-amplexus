import Link from 'next/link';
import Image from 'next/image';
import logoAmplexus from "../../../public/logo-amplexus.png"

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">
            <Image src={logoAmplexus} alt='logo da amplexus tech' className="w-40 hover:opacity-80" />
          </Link>
        </h1>        
        <nav className="space-x-4">
          <Link href="/sobre" className="hover:text-gray-300">
          Sobre
          </Link>
          <Link href="/projetos" className="hover:text-gray-300">
            Projetos
          </Link>
          <Link href="/contato" className="hover:text-gray-300">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
