/**
 * Doggie Chic Studio — Image Assets
 *
 * Este archivo centraliza todas las rutas de imágenes del sitio.
 * Cuando agregues imágenes reales en src/assets/imagenes/,
 * reemplaza los imports correspondientes abajo.
 *
 * INSTRUCCIONES:
 * 1. Agrega tu imagen a: src/assets/imagenes/<nombre>.jpg
 * 2. Descomenta el import real y comenta el placeholder.
 * 3. Guarda — el sitio actualizará automáticamente.
 */

// ── Placeholders actuales (imágenes de demostración) ──────────────────────────
import _heroDemoImg from "@/assets/dog-premium.jpg";
import _banoPlaceholder from "@/assets/service-bath.jpg";
import _cortePlaceholder from "@/assets/service-cut.jpg";
import _spaPlaceholder from "@/assets/service-spa.jpg";
import _higienicoPlaceholder from "@/assets/hero-dog-trimmed.jpg";
import _productosPlaceholder from "@/assets/products-premium.jpg";
import _equipoPlaceholder from "@/assets/hero-dog.jpg";
import _contactoPlaceholder from "@/assets/hero-dog.jpg";

// ── Imágenes reales (descomentar cuando estén disponibles) ────────────────────
//
// import _heroDemoImg       from "@/assets/imagenes/hero-doggie.jpg";
// import _banoPlaceholder   from "@/assets/imagenes/servicio-bano.jpg";
// import _cortePlaceholder  from "@/assets/imagenes/servicio-corte.jpg";
// import _spaPlaceholder    from "@/assets/imagenes/servicio-spa.jpg";
// import _higienicoPlaceholder from "@/assets/imagenes/servicio-higienico.jpg";
// import _productosPlaceholder from "@/assets/imagenes/productos-doggie.jpg";
// import _equipoPlaceholder from "@/assets/imagenes/equipo-doggie.jpg";
// import _contactoPlaceholder  from "@/assets/imagenes/contacto-doggie.jpg";

// ── Exports ────────────────────────────────────────────────────────────────────
export const heroImg = _heroDemoImg;
export const banoImg = _banoPlaceholder;
export const corteImg = _cortePlaceholder;
export const spaImg = _spaPlaceholder;
export const higienicoImg = _higienicoPlaceholder;
export const productosImg = _productosPlaceholder;
export const equipoImg = _equipoPlaceholder;
export const contactoImg = _contactoPlaceholder;

/**
 * Mapa completo de imágenes — útil para iterar sobre servicios
 */
export const serviceImages = {
  bano: { src: banoImg, alt: "Baño profesional — Doggie Chic Studio", file: "servicio-bano.jpg" },
  corte: { src: corteImg, alt: "Corte de manto — Doggie Chic Studio", file: "servicio-corte.jpg" },
  spa: { src: spaImg, alt: "Spa y cuidado de piel — Doggie Chic Studio", file: "servicio-spa.jpg" },
  higienico: {
    src: higienicoImg,
    alt: "Corte higiénico — Doggie Chic Studio",
    file: "servicio-higienico.jpg",
  },
} as const;
