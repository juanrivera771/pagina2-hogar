'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const BRAND_DARK = '#0F2A43';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Scroll al top (logo)
  const scrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // Scroll inteligente por sección
  const handleSectionScroll = useCallback(
    (id: string) => {
      if (pathname !== '/') {
        router.push('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [pathname, router]
  );

  // Detectar scroll para efecto premium
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${
          scrolled
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
          <button
            onClick={() => handleSectionScroll('masvendidos')}
            className="px-3 py-1.5 rounded-full hover:bg-slate-100 transition"
          >
            Más vendidos
          </button>

          <button
            onClick={() => handleSectionScroll('categorias')}
            className="px-3 py-1.5 rounded-full hover:bg-slate-100 transition"
          >
            Categorías
          </button>

          <button
            onClick={() => handleSectionScroll('testimonios')}
            className="px-3 py-1.5 rounded-full hover:bg-slate-100 transition"
          >
            Reseñas
          </button>

          <button
            onClick={() => handleSectionScroll('faq')}
            className="px-3 py-1.5 rounded-full hover:bg-slate-100 transition"
          >
            FAQ
          </button>

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