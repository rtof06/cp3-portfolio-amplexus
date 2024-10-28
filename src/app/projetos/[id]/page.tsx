"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface Projeto {
  id: number;
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  feedback: string;
}

export default function EditarProjeto() {
  const router = useRouter();
  const { id } = useParams();

  const [projeto, setProjeto] = useState<Projeto>({
    id: 0,
    title: "",
    description: "",
    imageUrl: "",
    feedback: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjeto({ ...projeto, [name]: value });
  };

  useEffect(() => {
    const fetchProjeto = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/base-projetos/${id}`);
        if (response.ok) {
          const dados = await response.json();
          setProjeto(dados);
        } else {
          console.error("Erro ao buscar projeto.");
        }
      } catch (error) {
        console.error("Falha na requisição:", error);
        router.push("/erro");
      }
    };
    fetchProjeto();
  }, [id, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/base-projetos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projeto),
      });
      if (response.ok) {
        alert("O projeto foi atualizado com sucesso!");
        router.push("/projetos");
      } else {
        console.error("Erro ao atualizar projeto.");
      }
    } catch (error) {
      console.error("Falha na atualização do projeto:", error);
      router.push("/erro");
    }
  };

  return (
    <div>
      <h2>Editar Projeto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Projeto:</label>
          <input
            type="text"
            name="title"
            value={projeto.title}
            placeholder="Digite o nome do projeto."
            required
            onChange={handleChange}
            className="text-black"
          />
        </div>
        <div>
          <label>Descrição:</label>
          <input
            type="text"
            name="description"
            value={projeto.description}
            placeholder="Digite a descrição do projeto."
            required
            onChange={handleChange}
            className="text-black"
          />
        </div>
        <div>
          <label>Feedback:</label>
          <input
            type="text"
            name="feedback"
            value={projeto.feedback}
            placeholder="Digite o feedback do projeto."
            required
            onChange={handleChange}
            className="text-black"
          />
        </div>
        <div className="mb-4">
          <label>Imagem do Projeto:</label>
          {projeto.imageUrl && (
            <Image src={projeto.imageUrl} alt={projeto.title} width={400} height={200} className="mb-4" />
          )}
        </div>
        <div>
          <button type="submit">Alterar</button>
        </div>
      </form>
    </div>
  );
}
