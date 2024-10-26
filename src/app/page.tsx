import Header from "@/components/Header/Header";
import Image from "next/image";
import Link from "next/link";
import pedro from "@/public/pedro.png"
import carmona from "@/public/carmona.png"
import ricardo from "@/public/ricardo.png"

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-gray-100 text-gray-800 py-16 px-8">
        <div className="container mx-auto text-center">
          {/* Imagem ou Avatar */}
          <div className="flex items-center justify-center gap-5 mx-auto mb-6">
            <Image
              src={pedro}
              alt="Pedro"
              width={128}
              height={128}
              className="object-cover rounded-full w-40"
            />
            <Image
              src={carmona}
              alt="Carmona"
              width={128}
              height={128}
              className="object-cover rounded-full w-40"
            />
            <Image
              src={ricardo}
              alt="Ricardo"
              width={128}
              height={128}
              className="object-cover rounded-full w-40"
            />
          </div>

          {/* Texto de Introdução */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Olá, somos a Amplexus Technology
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Nós somos um grupo de estudantes que buscam entender e solucionar diversos tipos de dores utilizando a tecnologia da melhor forma.
          </p>

          {/* Botão de Chamada para Ação */}
          <Link href="#projetos" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
              Veja meus projetos
          </Link>
        </div>
      </section>
    </>
  );
}
