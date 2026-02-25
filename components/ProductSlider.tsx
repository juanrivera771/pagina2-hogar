'use client';
//holamidsdj
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { type Product } from '@/data/products';

const BRAND_GREEN = '#66D11F';
const BRAND_DARK = '#0F2A43';

const money = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
}).format;

type Props = {
  products: readonly Product[];
  title?: string;
};

export default function ProductSlider({ products, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pause, setPause] = useState(false);

  // 👉 duplicamos productos para loop infinito
  const loopProducts = [...products, ...products];

  // AUTOPLAY SUAVE
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (pause) return;

      el.scrollBy({
        left: 1.2,
        behavior: 'auto',
      });

      // reinicio invisible (loop infinito)
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }, 16); // 60fps

    return () => clearInterval(interval);
  }, [pause]);

  const scroll = (dir: 'left' | 'right') => {
    const el = containerRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === 'right' ? 400 : -400,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full py-10">
      {/* TITULO */}
      {title && (
        <h2
          className="text-3xl font-extrabold mb-6"
          style={{ color: BRAND_DARK }}
        >
          {title}
        </h2>
      )}

      {/* GRADIENTES LATERALES (EFECTO PREMIUM) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* FLECHAS */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur shadow-lg rounded-full w-10 h-10 hover:scale-110 transition"
      >
        ←
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur shadow-lg rounded-full w-10 h-10 hover:scale-110 transition"
      >
        →
      </button>

      {/* SLIDER */}
      <div
        ref={containerRef}
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
        className="
          flex gap-6 overflow-x-scroll scroll-smooth
          scrollbar-hide px-10
        "
      >
        {loopProducts.map((p, i) => (
          <article
            key={i}
            className="
              shrink-0
              w-[75%] sm:w-[45%] lg:w-[23%]
              rounded-3xl
              border border-slate-200
              bg-white
              shadow-sm
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all duration-300
            "
          >
            <div className="relative aspect-square overflow-hidden rounded-t-3xl bg-slate-100">
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold line-clamp-2 min-h-[48px]">
                {p.name}
              </h3>

              <p
                className="mt-2 text-lg font-extrabold"
                style={{ color: BRAND_DARK }}
              >
                {money(p.price)}
              </p>

              <a
                href={`https://wa.me/573208709850?text=${encodeURIComponent(
                  `Hola quiero este producto: ${p.name}`
                )}`}
                className="
                  mt-3 block text-center
                  rounded-xl py-2 font-semibold
                  hover:scale-105 transition
                "
                style={{
                  backgroundColor: BRAND_GREEN,
                  color: BRAND_DARK,
                }}
              >
                Comprar ahora
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}