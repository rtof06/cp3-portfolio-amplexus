// components/Projeto.tsx
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjetoProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  projectUrl: string;
  feedback:string
}

export default function Projeto({ id, title, description, imageUrl, projectUrl }: ProjetoProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" key={id}>
      <Image src={imageUrl} alt={title} width={400} height={200} className="object-cover" />

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>

        <Link href={projectUrl} className="text-blue-600 hover:text-blue-800 font-semibold">
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
