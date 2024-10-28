import Link from "next/link";
import Image from "next/image";
import logoAmplexus from "@/public/logo-amplexus.png";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col gap-5 justify-center items-center">
        <Link href="/">
          <Image
            src={logoAmplexus}
            alt="logo da amplexus tech"
            className="w-40 hover:opacity-80"
          />
        </Link>
        <Link href="/projetos" className="hover:text-gray-300 text-gray-800 p-2 text-2xl bg-white rounded-2xl">
          Projetos
        </Link>
      </div>
    </header>
  );
}
