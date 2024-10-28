import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface DevelopersProps {
  img: string | StaticImport;
  alt: string;
  nome: string;
  rm: string;
}

export default function Developers({ img, alt, nome, rm }: DevelopersProps) {
  return (
    <div className="flex flex-col items-center">
      <Image src={img} alt={alt} width={200} height={200} className="object-cover rounded-full" />
      <h1>{nome}</h1>
      <h2>{rm}</h2>
    </div>
  );
}
