'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BRAND_DARK = '#0F2A43';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Detectar scroll para efecto premium
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${scrolled 
          ? 'backdrop-blur bg-white/90 shadow-md border-b border-slate-200'
          : 'bg-white/75'
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex justify-between items-center">

        {/* LOGO */}
        <button
          onClick={scrollTop}
          className="flex items-center gap-3"
        >
          <Image
            src="/jxf-logo.png"
            alt="JXF Colombia"
            width={40}
            height={40}
            priority
          />
          <span
            className="font-extrabold tracking-tight"
            style={{ color: BRAND_DARK }}
          >
            JXF Colombia
          </span>
        </button>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-3 text-sm font-medium">
          <Link
            href="/#masvendidos"
            scroll={true}
            className="px-3 py-1.5 rounded-full hover:bg-slate-100 transition"
          >
            Más vendidos
          </Link>

          <Link
            href="/#categorias"
            scroll={true}
            className="px-3 py-1.5 rounded-full hover:bg-slate-100 transition"
          >
            Categorías
          </Link>

          <Link
            href="/#testimonios"
            scroll={true}
            className="px-3 py-1.5 rounded-full hover:bg-slate-100 transition"
          >
            Reseñas
          </Link>

          <Link
            href="/#faq"
            scroll={true}
            className="px-3 py-1.5 rounded-full hover:bg-slate-100 transition"
          >
            FAQ
          </Link>

          <Link
            href="/catalogo"
            className="px-4 py-2 rounded-full bg-lime-300 hover:bg-lime-400 transition border border-lime-300 font-semibold"
          >
            Ver catálogo
          </Link>
        </nav>
      </div>
    </header>
  );
}