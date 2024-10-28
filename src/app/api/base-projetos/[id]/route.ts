import { NextApiRequest, NextApiResponse } from 'next';

let projetos = [
  {
    id: 1,
    title: "Projeto Porto Conserta",
    description: "Projeto Porto Conserta feito para o challenge",
    imageUrl: "/images/porto.png",
    feedback: "90",
  },
  {
    id: 2,
    title: "Projeto Futuro à Beira-Mar",
    description: "Projeto feito para as Global Solutions",
    imageUrl: "/images/gs.png",
    feedback: "65",
  },
  {
    id: 3,
    title: "Checkpoint 5",
    description: "Checkpoint feito mostrando a biografia e resumo de Immanuel Velikovsky",
    imageUrl: "/images/cp5.png",
    feedback: "45",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const projetoId = parseInt(id as string);

  const projetoIndex = projetos.findIndex((proj) => proj.id === projetoId);

  if (projetoIndex === -1) {
    return res.status(404).json({ message: "Projeto não encontrado" });
  }

  if (req.method === 'GET') {
    res.status(200).json(projetos[projetoIndex]);
  } else if (req.method === 'PUT') {
    projetos[projetoIndex] = { ...projetos[projetoIndex], ...req.body };
    res.status(200).json(projetos[projetoIndex]);
  } else if (req.method === 'DELETE') {
    projetos = projetos.filter((proj) => proj.id !== projetoId);
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
