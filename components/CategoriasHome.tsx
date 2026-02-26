'use client';

import { useRouter } from 'next/navigation';
import { memo } from 'react';

const categorias = [
  'Organización',
  'Cocina',
  'Limpieza',
  'Baño',
  'Iluminación',
  'Otros',
];

const animaciones = [
  'float-1',
  'float-2',
  'float-3',
  'float-2',
  'float-1',
  'float-3',
];

function CategoriasHome() {
  const router = useRouter();

  const handleNavigation = (categoria: string) => {
    router.push(`/catalogo?categoria=${encodeURIComponent(categoria)}`);
  };

  return (
    <section
      id="categorias"
      className="mx-auto max-w-7xl px-4 py-28"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-slate-800 text-center">
        Explora por categorías
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {categorias.map((cat, index) => (
          <button
            key={cat}
            onClick={() => handleNavigation(cat)}
            className={`
              ${animaciones[index]}
              glass
              group
              rounded-2xl
              p-8
              text-center
              transition-all
              duration-500
              ease-out
              hover:-translate-y-3
              hover:scale-105
              hover:shadow-2xl
              focus:outline-none
              focus:ring-2
              focus:ring-green-500
            `}
          >
            <span className="font-semibold text-slate-700 text-lg transition-colors duration-300 group-hover:text-green-600">
              {cat}
            </span>

            <span className="block opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm mt-4 text-green-600 font-medium">
              Ver productos →
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default memo(CategoriasHome);