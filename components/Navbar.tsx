'use client';

import Image from 'next/image';
import Link from 'next/link';

const BRAND_DARK = '#0F2A43';

export default function Navbar() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/75 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex justify-between items-center">

        {/* LOGO */}
        <button onClick={scrollTop} className="flex items-center gap-3">
          <Image
            src="/jxf-logo.png"
            alt="JXF Colombia"
            width={40}
            height={40}
          />
          <span
            className="font-extrabold tracking-tight"
            style={{ color: BRAND_DARK }}
          >
            JXF Colombia
          </span>
        </button>

        {/* MENU */}
        <nav className="hidden md:flex gap-3 text-sm">
          <Link href="/#masvendidos" className="px-3 py-1.5 rounded-full hover:bg-slate-100 transition">
            Más vendidos
          </Link>

          <Link href="/#categorias" className="px-3 py-1.5 rounded-full hover:bg-slate-100 transition">
            Categorías
          </Link>

          <Link href="/#testimonios" className="px-3 py-1.5 rounded-full hover:bg-slate-100 transition">
            Reseñas
          </Link>

          <Link href="/#faq" className="px-3 py-1.5 rounded-full hover:bg-slate-100 transition">
            FAQ
          </Link>

          <Link
            href="/catalogo"
            className="px-4 py-2 rounded-full bg-lime-200 border border-lime-300 font-semibold"
          >
            Ver catálogo
          </Link>
        </nav>
      </div>
    </header>
  );
}