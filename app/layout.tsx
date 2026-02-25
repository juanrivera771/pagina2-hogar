export const metadata = {
  metadataBase: new URL("https://jxf.co"), // cámbialo por tu dominio
  title: "JXF Colombia · Hogar inteligente, útil y económico",
  description:
    "Compra fácil por WhatsApp. Envío nacional y pago contraentrega. Productos útiles, virales y económicos para tu hogar.",
  openGraph: {
    title: "JXF Colombia · Hogar",
    description:
      "Útil, viral y económico. Envío nacional y pago contraentrega.",
    images: ["/jxf-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JXF Colombia · Hogar",
    description: "Útil, viral y económico. Compra fácil por WhatsApp.",
    images: ["/jxf-logo.png"],
  },
  icons: { icon: "/favicon.ico" },
};

import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-slate-900 antialiased">
        {/* Botón flotante WhatsApp (original) */}
        <a
          href="https://wa.me/573208709850?text=Hola%20JXF%20Colombia%2C%20quiero%20comprar%20para%20mi%20hogar"
          aria-label="Chatea por WhatsApp"
          className="fixed bottom-4 right-4 z-[60] group"
        >
          <div
            className="h-14 w-14 rounded-full shadow-lg ring-1 ring-black/5 grid place-items-center transition-transform group-hover:scale-105"
            style={{ backgroundColor: "#25D366" }} // verde oficial de WhatsApp
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 fill-white"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.67.15-.197.297-.768.966-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.412-.074-.123-.272-.198-.57-.347m-5.421 7.617h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.894 6.994c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0012.05.003C5.495.003.16 5.338.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.87 11.87 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.82 11.82 0 00-3.487-8.412Z" />
            </svg>
          </div>
        </a>

        {children}
      </body>
    </html>
  );
}
