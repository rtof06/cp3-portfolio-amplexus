import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Página não encontrada</p>
      <p className="text-gray-600 mb-8">A página que você está procurando não existe ou foi movida.</p>
      
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Voltar para a página inicial
      </Link>
    </div>
  );
}
