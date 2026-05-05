# Doggie Chic Studio — Imágenes del Negocio

Coloca aquí las imágenes reales de Doggie Chic Studio que serán usadas en el sitio.

## Archivos esperados

| Archivo | Uso en el sitio | Dimensiones recomendadas |
|---|---|---|
| `hero-doggie.jpg` | Hero principal (sección de bienvenida) | 1200×1500 px (vertical) |
| `servicio-bano.jpg` | Card de servicio — Baño profesional | 800×1000 px |
| `servicio-corte.jpg` | Card de servicio — Corte de manto | 800×1000 px |
| `servicio-spa.jpg` | Card de servicio — Spa y cuidado de piel | 800×1000 px |
| `servicio-higienico.jpg` | Card de servicio — Corte higiénico | 800×1000 px |
| `productos-doggie.jpg` | Sección de productos / boutique | 1200×900 px (horizontal) |
| `equipo-doggie.jpg` | Sección Nosotros — equipo | 1200×800 px |
| `contacto-doggie.jpg` | Sección de contacto / foto break | 1920×600 px (panorámica) |

## Notas de calidad

- Formato: **JPG** (comprimido a ~200KB máximo por imagen) o **WebP** para mayor rendimiento.
- Evita imágenes con marca de agua o copyright.
- Asegúrate de que los sujetos sean perros reales atendidos en el negocio.
- Si usas fotos del lugar, que estén bien iluminadas y sin elementos de fondo que distraigan.

## Cómo reemplazar los placeholders

Los componentes del sitio buscan estas imágenes en `src/assets/imagenes/`.
Cuando agregues una imagen, el sitio la usará automáticamente. No necesitas editar código.

Ejemplo de ruta desde los componentes:
```
import heroImg from "@/assets/imagenes/hero-doggie.jpg";
```

> Mientras no existan estas imágenes, el sitio usa imágenes de demostración almacenadas en `src/assets/`.
