// /data/products.ts

export type Product = Readonly<{
  id: string;
  name: string;
  price: number;
  img: string;
  category: string;
  tag?: string;
}>;

/*
 ✅ DATA INMUTABLE
 Evita recreaciones en memoria y renders innecesarios
*/
export const products = Object.freeze<Product[]>([
  // Organización
  { id: 'organizador-despensa', name: 'Organizador de despensa extensible', price: 48900, img: '/products/organizador.webp', category: 'Organización', tag: 'Top ventas' },
  { id: 'separadores-cajon', name: 'Separadores de cajón ajustables (x4)', price: 39900, img: '/products/organizador.webp', category: 'Organización', tag: 'Nuevo' },
  { id: 'ganchos-adhesivos', name: 'Ganchos adhesivos multiuso (x6)', price: 19900, img: '/products/organizador.webp', category: 'Organización' },
  { id: 'caja-plegable', name: 'Cajas plegables apilables', price: 45900, img: '/products/organizador.webp', category: 'Organización' },

  // Cocina
  { id: 'dispensador-jabon', name: 'Dispensador de jabón con esponja', price: 35900, img: '/products/dispensador.webp', category: 'Cocina', tag: 'Recomendado' },
  { id: 'escurridor-plegable', name: 'Escurridor plegable para lavaplatos', price: 52900, img: '/products/dispensador.webp', category: 'Cocina' },
  { id: 'organizador-tapas', name: 'Organizador de tapas y sartenes', price: 42900, img: '/products/dispensador.webp', category: 'Cocina' },
  { id: 'cuchillos-ceramica', name: 'Set cuchillos de cerámica (3 pzas)', price: 69900, img: '/products/dispensador.webp', category: 'Cocina', tag: 'Oferta' },

  // Limpieza
  { id: 'trapero-microfibra', name: 'Trapero 360° de microfibra', price: 79900, img: '/products/trapero.webp', category: 'Limpieza', tag: 'Bestseller' },
  { id: 'cepillo-electrico', name: 'Cepillo eléctrico de limpieza', price: 84900, img: '/products/trapero.webp', category: 'Limpieza' },
  { id: 'toallas-microfibra', name: 'Toallas de microfibra ultraabsorbentes', price: 29900, img: '/products/trapero.webp', category: 'Limpieza' },

  // Baño
  { id: 'portacepillos', name: 'Portacepillos adhesivo sin taladro', price: 24900, img: '/products/portacepillos.webp', category: 'Baño' },
  { id: 'porta-papel', name: 'Porta papel higiénico adhesivo', price: 21900, img: '/products/portacepillos.webp', category: 'Baño', tag: 'Nuevo' },
  { id: 'cabezal-ducha', name: 'Cabezal de ducha de presión', price: 55900, img: '/products/portacepillos.webp', category: 'Baño' },

  // Iluminación
  { id: 'luz-armario', name: 'Luz para armario con sensor', price: 41900, img: '/products/luz-armario.webp', category: 'Iluminación', tag: 'Top' },
  { id: 'tira-led', name: 'Tira LED adhesiva (5 m)', price: 48900, img: '/products/luz-armario.webp', category: 'Iluminación' },

  // Otros útiles
  { id: 'tapete-antiderrame', name: 'Tapete antiderrame para cocina', price: 32900, img: '/products/dispensador.webp', category: 'Otros' },
  { id: 'organizador-zapatos', name: 'Organizador para zapatos (x6)', price: 49900, img: '/products/organizador.webp', category: 'Organización' },
]);

/*
 ✅ categorías calculadas UNA sola vez
 (te servirá después para filtros automáticos)
*/
export const categories = Object.freeze(
  Array.from(new Set(products.map(p => p.category)))
);