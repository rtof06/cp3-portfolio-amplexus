import Link from "next/link";
import { developers } from "@/data/developers";
import Developers from "@/components/Developers/Developers";

export default function Home() {
  return (
    <>
      <section className="bg-gray-100 text-gray-800 py-16 px-8">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-5 mx-auto mb-6 flex-col md:flex-row">
            {developers.map((dev) => (
              <Developers
                img={dev.image}
                alt={dev.alt}
                nome={dev.name}
                rm={dev.rm}
                key={dev.rm}
              />
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Olá, somos a Amplexus Technology
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Nós somos um grupo de estudantes que buscam entender e solucionar
            diversos tipos de dores utilizando a tecnologia da melhor forma.
          </p>

          <Link
            href="/projetos"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Veja meus projetos
          </Link>
        </div>
      </section>
    </>
  );
}
