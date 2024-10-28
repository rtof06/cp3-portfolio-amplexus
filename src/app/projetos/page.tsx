import Projeto from "@/components/Projeto/Projeto";
import porto from "@/public/projeto-porto-1.png";
import gs from "@/public/gs.png";
import cp5 from "@/public/cp5.png";
import { StaticImageData } from "next/image";

interface ProjetoData {
  id: number;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  projectUrl: string;
  feedback: string;
}

export default function Projetos() {
  const projetos: ProjetoData[] = [
    {
      id: 1,
      title: "Projeto Porto Conserta",
      description: "Projeto Porto Conserta feito para o challenge",
      imageUrl: porto,
      projectUrl: "/projetos/1",
      feedback: "90",
    },
    {
      id: 2,
      title: "Projeto Futuro à Beira-Mar",
      description: "Projeto feito para as Global Solutions",
      imageUrl: gs,
      projectUrl: "/projetos/2",
      feedback: "65",
    },
    {
      id: 3,
      title: "Checkpoint 5",
      description:
        "Checkpoint feito mostrando a biografia e resumo de Immanuel Velikovsky",
      imageUrl: cp5,
      projectUrl: "/projetos/3",
      feedback: "45",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-black text-4xl font-bold mb-12">Nossos Projetos</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projetos.map((projeto) => (
            <Projeto
              key={projeto.id}
              id={projeto.id}
              title={projeto.title}
              description={projeto.description}
              imageUrl={projeto.imageUrl}
              projectUrl={projeto.projectUrl}
              feedback={projeto.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
