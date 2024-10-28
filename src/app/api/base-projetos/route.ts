import { NextApiRequest, NextApiResponse } from 'next';

const projetos = [
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
  if (req.method === 'GET') {
    res.status(200).json(projetos);
  } else if (req.method === 'POST') {
    const newProjeto = { id: Date.now(), ...req.body };
    projetos.push(newProjeto);
    res.status(201).json(newProjeto);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
