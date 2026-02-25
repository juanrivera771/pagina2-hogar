'use client';

import Image from 'next/image';
import type { Product } from '@/data/products';

const BRAND_GREEN = '#66D11F';
const BRAND_DARK = '#0F2A43';

/* ===== FORMATTER GLOBAL ===== */
const moneyFormatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
});

const money = (x: number) => moneyFormatter.format(x);

type Props = {
  products: readonly Product[];
};

export default function ProductCarousel({ products }: Props) {
  return (
    <section
      id="masvendidos"
      className="mx-auto max-w-7xl px-4 py-20"
    >
      {/* TITULO */}
      <h2
        className="text-3xl font-extrabold mb-8"
        style={{ color: BRAND_DARK }}
      >
        Más vendidos
      </h2>

      {/* GRID PRODUCTOS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((p, index) => (
          <article
            key={p.id}
            className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* IMAGEN */}
            <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-slate-100">
              <Image
                src={p.img}
                alt={p.name}
                fill
                priority={index < 4} // ⚡ mejora LCP (primeros productos)
                sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* INFO */}
            <div className="p-4">
              <h3
                className="font-semibold leading-snug line-clamp-2 min-h-[44px]"
                title={p.name}
              >
                {p.name}
              </h3>

              <div className="mt-2 flex items-center justify-between">
                <span
                  className="text-lg font-extrabold"
                  style={{ color: BRAND_DARK }}
                >
                  {money(p.price)}
                </span>

                <span className="text-xs text-slate-500 capitalize">
                  {p.category}
                </span>
              </div>

              {/* BOTON */}
              <a
                href={`https://wa.me/573208709850?text=${encodeURIComponent(
                  `Hola 👋 quiero este producto:\n${p.name}\nPrecio: ${money(
                    p.price
                  )}`
                )}`}
                target="_blank"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow hover:opacity-90 transition"
                style={{
                  backgroundColor: BRAND_GREEN,
                  color: BRAND_DARK,
                }}
              >
                Comprar por WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}